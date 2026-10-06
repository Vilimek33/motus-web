// Čtení a ukládání obsahu webu přímo do GitHub repozitáře.
// Každé uložení v adminu = jeden commit do větve main → Vercel web automaticky nasadí znovu.

const API = process.env.GITHUB_API_URL || "https://api.github.com";
export const CONTENT_PATH = "content/site.json";

function config() {
  return {
    token: process.env.GITHUB_TOKEN,
    repo: process.env.GITHUB_REPO || "Vilimek33/motus-web",
    branch: process.env.GITHUB_BRANCH || "main",
  };
}

export const githubConfigured = () => Boolean(config().token);

export class ConflictError extends Error {}

async function gh<T>(path: string, init?: RequestInit): Promise<T> {
  const { token, repo } = config();
  const res = await fetch(`${API}/repos/${repo}${path}`, {
    ...init,
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub ${res.status} (${path}): ${body.slice(0, 300)}`);
  }
  return res.json() as Promise<T>;
}

/** Aktuální obsah webu z GitHubu (ne z nasazené verze). */
export async function readSiteContent(): Promise<{ content: unknown; sha: string }> {
  const { branch } = config();
  const file = await gh<{ content: string; sha: string }>(
    `/contents/${CONTENT_PATH}?ref=${encodeURIComponent(branch)}`
  );
  const json = Buffer.from(file.content, "base64").toString("utf8");
  return { content: JSON.parse(json), sha: file.sha };
}

type NewFile = { path: string; content: string; encoding: "utf-8" | "base64" };

/** Uloží soubory jedním commitem. Vrací nové sha souboru s obsahem. */
export async function commitFiles(files: NewFile[], message: string, expectedContentSha?: string) {
  const { branch } = config();

  if (expectedContentSha) {
    const current = await readSiteContent();
    if (current.sha !== expectedContentSha) throw new ConflictError("Obsah se mezitím změnil.");
  }

  const ref = await gh<{ object: { sha: string } }>(`/git/ref/heads/${branch}`);
  const parent = await gh<{ tree: { sha: string } }>(`/git/commits/${ref.object.sha}`);

  const tree = [];
  let contentSha = "";
  for (const f of files) {
    const blob = await gh<{ sha: string }>(`/git/blobs`, {
      method: "POST",
      body: JSON.stringify({ content: f.content, encoding: f.encoding }),
    });
    if (f.path === CONTENT_PATH) contentSha = blob.sha;
    tree.push({ path: f.path, mode: "100644", type: "blob", sha: blob.sha });
  }

  const newTree = await gh<{ sha: string }>(`/git/trees`, {
    method: "POST",
    body: JSON.stringify({ base_tree: parent.tree.sha, tree }),
  });
  const commit = await gh<{ sha: string }>(`/git/commits`, {
    method: "POST",
    body: JSON.stringify({ message, tree: newTree.sha, parents: [ref.object.sha] }),
  });
  await gh(`/git/refs/heads/${branch}`, {
    method: "PATCH",
    body: JSON.stringify({ sha: commit.sha }),
  });

  return { contentSha, commitSha: commit.sha };
}
