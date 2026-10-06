import { createHash, createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const SESSION_COOKIE = "motus_admin";
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 dní

function secret() {
  return (
    process.env.ADMIN_SECRET ||
    createHash("sha256")
      .update(`motus|${process.env.ADMIN_USERNAME}|${process.env.ADMIN_PASSWORD}|${process.env.GITHUB_TOKEN ?? ""}`)
      .digest("hex")
  );
}

function safeEqual(a: string, b: string) {
  const ha = createHash("sha256").update(a).digest();
  const hb = createHash("sha256").update(b).digest();
  return timingSafeEqual(ha, hb);
}

export function credentialsConfigured() {
  return Boolean(process.env.ADMIN_USERNAME && process.env.ADMIN_PASSWORD);
}

export function checkCredentials(username: string, password: string) {
  if (!credentialsConfigured()) return false;
  const okUser = safeEqual(username.trim(), process.env.ADMIN_USERNAME!);
  const okPass = safeEqual(password, process.env.ADMIN_PASSWORD!);
  return okUser && okPass;
}

const sign = (payload: string) => createHmac("sha256", secret()).update(payload).digest("hex");

export function createSessionToken() {
  const exp = String(Date.now() + SESSION_MAX_AGE * 1000);
  return `${exp}.${sign(exp)}`;
}

export function verifySessionToken(token: string | undefined) {
  if (!token || !credentialsConfigured()) return false;
  const [exp, sig] = token.split(".");
  if (!exp || !sig || Number(exp) < Date.now()) return false;
  return safeEqual(sig, sign(exp));
}

export async function isLoggedIn() {
  const store = await cookies();
  return verifySessionToken(store.get(SESSION_COOKIE)?.value);
}
