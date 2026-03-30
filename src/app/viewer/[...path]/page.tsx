import Link from "next/link";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import fs from "fs";
import path from "path";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ path: string[] }>;
}) {
  const { path: segments } = await params;
  const fileName = segments[segments.length - 1]
    .replace(".html", "")
    .replace(/-/g, " ");
  return { title: `${fileName} — Curso Claude 2026` };
}

export default async function ViewerPage({
  params,
}: {
  params: Promise<{ path: string[] }>;
}) {
  const { path: segments } = await params;
  const filePath = segments.join("/");

  const fullPath = path.join(process.cwd(), "public/entregables", filePath);
  if (!fs.existsSync(fullPath) || !filePath.endsWith(".html")) {
    notFound();
  }

  const section = segments[0] || "";
  const sectionSlug =
    section === "v1"
      ? "v1-bienvenida"
      : section === "v2"
        ? "v2-framework-mental"
        : section === "v3"
          ? "v3-intro-claude-code"
          : section === "v4"
            ? "v4-skills-hooks-plugins"
            : section === "v5"
              ? "v5-synapsis"
              : section === "v6"
                ? "v6-sesion-en-vivo"
                : "";

  return (
    <>
      <Navigation />
      <div className="sticky top-[65px] z-40 flex items-center justify-between border-b border-border bg-bg-secondary/95 backdrop-blur-sm px-6 py-2">
        <Link
          href={`/secciones/${sectionSlug}`}
          className="text-sm text-text-secondary hover:text-accent transition-colors"
        >
          &larr; Volver a la seccion
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-xs text-text-secondary/60 hidden sm:inline">
            {filePath}
          </span>
          <a
            href={`/entregables/${filePath}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent hover:bg-accent/20 transition-colors"
          >
            Abrir en nueva ventana
          </a>
        </div>
      </div>
      <main className="flex-1">
        <iframe
          src={`/entregables/${filePath}`}
          className="w-full border-0"
          style={{ height: "calc(100vh - 120px)" }}
          title={filePath}
        />
      </main>
    </>
  );
}
