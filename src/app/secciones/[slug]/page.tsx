import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getAllSections,
  getSectionBySlug,
  getSectionNavigation,
} from "@/lib/sections";
import { SECTION_TYPE_LABELS, SECTION_TYPE_COLORS } from "@/lib/site-config";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { EntregableCard } from "@/components/EntregableCard";

export function generateStaticParams() {
  const sections = getAllSections();
  return sections.map((s) => ({ slug: s.frontmatter.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const section = getSectionBySlug(slug);
  if (!section) return {};
  return {
    title: `${section.frontmatter.title} — Curso Claude 2026`,
    description: section.frontmatter.description,
  };
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const section = getSectionBySlug(slug);
  if (!section) notFound();

  const { frontmatter, content } = section;
  const { prev, next } = getSectionNavigation(slug);
  const typeColor = SECTION_TYPE_COLORS[frontmatter.type] || "bg-accent-secondary";
  const typeLabel = SECTION_TYPE_LABELS[frontmatter.type] || frontmatter.type;

  return (
    <>
      <Navigation />
      <main className="mx-auto max-w-4xl flex-1 px-6 py-12">
        {/* Header */}
        <header className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-5xl font-bold text-accent/20">
              {frontmatter.number}
            </span>
            <div>
              <h1 className="text-3xl font-bold text-text-primary">
                {frontmatter.title}
              </h1>
              <p className="text-lg text-text-secondary">
                {frontmatter.subtitle}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span
              className={`rounded-full px-3 py-0.5 text-xs font-medium text-white ${typeColor}`}
            >
              {typeLabel}
            </span>
            <span className="text-text-secondary">{frontmatter.duration}</span>
            <span className="text-text-secondary">
              {frontmatter.entregables.length} entregables
            </span>
          </div>
        </header>

        {/* Description */}
        <section className="mb-8">
          <p className="text-text-secondary leading-relaxed">{content.trim()}</p>
        </section>

        {/* Key Takeaways */}
        <section className="mb-8 rounded-xl border border-border bg-bg-card p-6">
          <h2 className="mb-4 text-lg font-semibold text-text-primary">
            Lo que vas a aprender
          </h2>
          <ul className="space-y-2">
            {frontmatter.keyTakeaways.map((takeaway, i) => (
              <li key={i} className="flex items-start gap-2 text-text-secondary">
                <span className="mt-1 text-accent">&#10003;</span>
                {takeaway}
              </li>
            ))}
          </ul>
        </section>

        {/* Entregables */}
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-text-primary">
            Entregables
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {frontmatter.entregables.map((e) => (
              <EntregableCard
                key={e.file}
                entregable={e}
                section={frontmatter.slug.split("-")[0]}
              />
            ))}
          </div>
        </section>

        {/* Tarea */}
        <section className="mb-10 rounded-xl border-2 border-accent/30 bg-accent/5 p-6">
          <h2 className="mb-2 text-lg font-semibold text-accent">
            Tarea de la seccion
          </h2>
          <p className="text-text-secondary">{frontmatter.tarea}</p>
        </section>

        {/* Navigation */}
        <nav className="flex items-center justify-between">
          {prev ? (
            <Link
              href={`/secciones/${prev.slug}`}
              className="rounded-lg border border-border px-4 py-2 text-sm text-text-secondary transition-colors hover:border-accent hover:text-accent"
            >
              &larr; {prev.title}
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/secciones/${next.slug}`}
              className="rounded-lg border border-border px-4 py-2 text-sm text-text-secondary transition-colors hover:border-accent hover:text-accent"
            >
              {next.title} &rarr;
            </Link>
          ) : (
            <Link
              href="/"
              className="rounded-lg border border-border px-4 py-2 text-sm text-text-secondary transition-colors hover:border-accent hover:text-accent"
            >
              Volver al indice
            </Link>
          )}
        </nav>
      </main>
      <Footer />
    </>
  );
}
