import { getAllSections } from "@/lib/sections";
import { SITE } from "@/lib/site-config";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionCard } from "@/components/SectionCard";
import { ProgressBar } from "@/components/ProgressBar";

export default function Home() {
  const sections = getAllSections();
  return (
    <>
      <Navigation />
      <main className="mx-auto max-w-6xl flex-1 px-6 py-12">
        {/* Hero */}
        <section className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold tracking-tight text-text-primary md:text-5xl">
            {SITE.name}
          </h1>
          <p className="mb-2 text-xl text-accent">{SITE.title}</p>
          <p className="mb-4 text-text-secondary">{SITE.subtitle}</p>
          <div className="flex items-center justify-center gap-4 text-sm text-text-secondary">
            {SITE.authors.map((a) => (
              <span key={a.name}>{a.name}</span>
            ))}
            <span className="rounded-full bg-accent-secondary/30 px-3 py-0.5 text-xs">
              {SITE.badge}
            </span>
          </div>
        </section>

        {/* Course map */}
        <section className="mb-12">
          <ProgressBar />
        </section>

        {/* Sections by block */}
        {SITE.sections.blocks.map((block) => {
          const blockSections = sections.filter((s) =>
            (block.sections as readonly string[]).includes(s.frontmatter.slug)
          );
          return (
            <section key={block.label} className="mb-12">
              <h2 className="mb-6 text-lg font-semibold text-text-secondary uppercase tracking-wider">
                {block.label}
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blockSections.map((s, i) => (
                  <SectionCard
                    key={s.frontmatter.slug}
                    section={s.frontmatter}
                    index={i}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </main>
      <Footer />
    </>
  );
}
