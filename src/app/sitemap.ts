import type { MetadataRoute } from "next";
import { getAllSections } from "@/lib/sections";
import { SITE } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const sections = getAllSections();

  const sectionUrls = sections.map((s) => ({
    url: `${SITE.url}/secciones/${s.frontmatter.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...sectionUrls,
  ];
}
