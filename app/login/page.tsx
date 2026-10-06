import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { isLoggedIn } from "../lib/auth";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Přihlášení | Motus Plzeň",
  robots: { index: false, follow: false },
};

export default async function LoginPage() {
  if (await isLoggedIn()) redirect("/admin");
  return <LoginForm />;
}
