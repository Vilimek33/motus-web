import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.motus-plzen.cz/",
      lastModified: new Date("2026-05-09"),
      priority: 1.0,
    },
  ];
}
