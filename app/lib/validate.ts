// Sdílené kontroly pro admin (používá prohlížeč i server).

export const isSafeHref = (href: string) => /^(https?:\/\/[^\s]+|mailto:[^\s]+|tel:[+\d\s()-]+|#[\w-]*|\/[^\s]*)$/i.test(href.trim());

export const isHexColor = (color: string) => /^#[0-9a-f]{6}$/i.test(color.trim());
