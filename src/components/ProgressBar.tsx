"use client";

import { SITE } from "@/lib/site-config";

export function ProgressBar() {
  const total = SITE.sections.total;

  return (
    <div className="rounded-lg border border-border bg-bg-card p-4">
      <div className="mb-3 flex items-center justify-between text-sm">
        <span className="text-text-secondary">Contenido del curso</span>
        <span className="font-medium text-text-primary">
          {total} secciones &middot; 3 bloques
        </span>
      </div>
      <div className="flex gap-1.5">
        {SITE.sections.blocks.map((block) => (
          <div key={block.label} className="flex-1">
            <div className="mb-1 text-center text-xs text-text-secondary/60">
              {block.label}
            </div>
            <div className="flex gap-0.5">
              {block.sections.map((_, i) => (
                <div
                  key={i}
                  className="h-2 flex-1 rounded-full bg-accent/70"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
