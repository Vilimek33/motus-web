// Pomocné funkce pro obsah webu (bez "use client", aby šly volat i na serveru).

/** Doplní do uloženého obsahu klíče, které v něm chybí (např. po přidání nových polí). */
export function withDefaults<T>(defaults: T, stored: unknown): T {
  if (typeof defaults === "string") return (typeof stored === "string" ? stored : defaults) as T;
  if (Array.isArray(defaults)) {
    if (!Array.isArray(stored) || stored.length !== defaults.length) return defaults;
    return defaults.map((d, i) => withDefaults(d, stored[i])) as T;
  }
  if (defaults && typeof defaults === "object") {
    const src = stored && typeof stored === "object" && !Array.isArray(stored) ? (stored as Record<string, unknown>) : {};
    return Object.fromEntries(
      Object.entries(defaults).map(([k, v]) => [k, withDefaults(v, src[k])])
    ) as T;
  }
  return defaults;
}
