import type { Metadata } from "next";
import { redirect } from "next/navigation";
import defaultContent from "@/content/site.json";
import { isLoggedIn } from "../lib/auth";
import { githubConfigured, readSiteContent } from "../lib/github";
import type { SiteContent } from "../lib/site";
import { withDefaults } from "../lib/content-utils";
import AdminEditor from "./AdminEditor";

export const metadata: Metadata = {
  title: "Administrace | Motus Plzeň",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  if (!(await isLoggedIn())) redirect("/login");

  let content = defaultContent as SiteContent;
  let sha: string | null = null;
  let warning = "";

  if (!githubConfigured()) {
    warning = "Ukládání není nastavené (chybí GITHUB_TOKEN) – změny teď nepůjde uložit.";
  } else {
    try {
      const latest = await readSiteContent();
      content = withDefaults(defaultContent as SiteContent, latest.content);
      sha = latest.sha;
    } catch (e) {
      console.error(e);
      warning = "Nepodařilo se načíst aktuální obsah z GitHubu – ukládání je vypnuté. Zkus stránku obnovit.";
    }
  }

  return <AdminEditor initialContent={content} initialSha={sha} warning={warning} />;
}
