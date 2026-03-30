import { SITE } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-text-secondary">
            {SITE.title}
          </p>
          <div className="flex gap-4 text-xs text-text-secondary">
            {SITE.authors.map((author) => (
              <span key={author.name}>
                {author.name} — {author.role}
              </span>
            ))}
          </div>
          <p className="text-xs text-text-secondary/60">
            {SITE.badge} &middot; 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
