"use client";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Přihlášení se nepovedlo.");
      router.replace("/admin");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Přihlášení se nepovedlo.");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F5F0EB] px-4">
      <form onSubmit={onSubmit} className="w-full max-w-sm bg-white rounded-3xl shadow-xl p-8">
        <img src="/images/logo.png" alt="Motus Plzeň" className="h-10 w-auto mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-1">Administrace webu</h1>
        <p className="text-sm text-gray-500 text-center mb-7">Přihlas se pro úpravu textů a obrázků.</p>

        <label className="block text-xs font-bold tracking-widest text-gray-500 uppercase mb-1.5" htmlFor="username">
          Uživatelské jméno
        </label>
        <input
          id="username"
          autoComplete="username"
          autoCapitalize="none"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 mb-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2CB5CA]"
          required
        />

        <label className="block text-xs font-bold tracking-widest text-gray-500 uppercase mb-1.5" htmlFor="password">
          Heslo
        </label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 mb-5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2CB5CA]"
          required
        />

        {error && <p className="text-sm text-red-600 mb-4" role="alert">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#2CB5CA] hover:bg-[#25a3b7] disabled:opacity-60 text-white font-bold py-3.5 rounded-full transition-colors shadow-md"
        >
          {loading ? "Přihlašuji…" : "Přihlásit se"}
        </button>
      </form>
    </main>
  );
}
