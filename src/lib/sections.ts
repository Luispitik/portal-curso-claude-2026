import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Entregable {
  title: string;
  type: "html" | "md" | "json";
  file: string;
  description: string;
}

export interface SectionFrontmatter {
  title: string;
  slug: string;
  number: string;
  subtitle: string;
  description: string;
  type: string;
  status: string;
  duration: string;
  entregables: Entregable[];
  keyTakeaways: string[];
  tarea: string;
}

export interface Section {
  frontmatter: SectionFrontmatter;
  content: string;
}

const SECTIONS_DIR = path.join(process.cwd(), "src/content/secciones");

export function getAllSections(): Section[] {
  const files = fs
    .readdirSync(SECTIONS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .sort();

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(SECTIONS_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    return {
      frontmatter: data as SectionFrontmatter,
      content,
    };
  });
}

export function getSectionBySlug(slug: string): Section | null {
  const sections = getAllSections();
  return sections.find((s) => s.frontmatter.slug === slug) ?? null;
}

export function getSectionNavigation(slug: string) {
  const sections = getAllSections();
  const index = sections.findIndex((s) => s.frontmatter.slug === slug);
  if (index === -1) return { prev: null, next: null };

  return {
    prev: index > 0 ? sections[index - 1].frontmatter : null,
    next: index < sections.length - 1 ? sections[index + 1].frontmatter : null,
  };
}
