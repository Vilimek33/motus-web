import { cookies } from "next/headers";
import { checkCredentials, createSessionToken, credentialsConfigured, SESSION_COOKIE, SESSION_MAX_AGE } from "../../../lib/auth";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const username = typeof body.username === "string" ? body.username : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!credentialsConfigured()) {
    return Response.json({ error: "Přihlášení není nastavené (chybí ADMIN_USERNAME / ADMIN_PASSWORD)." }, { status: 500 });
  }
  if (!checkCredentials(username, password)) {
    await new Promise((r) => setTimeout(r, 800)); // zpomalení zkoušení hesel
    return Response.json({ error: "Špatné jméno nebo heslo." }, { status: 401 });
  }

  const store = await cookies();
  store.set(SESSION_COOKIE, createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
  return Response.json({ ok: true });
}
