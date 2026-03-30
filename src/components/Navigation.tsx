import Link from "next/link";
import { SITE } from "@/lib/site-config";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-bg-primary/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-white">
            C
          </div>
          <span className="text-lg font-semibold text-text-primary">
            {SITE.name}
          </span>
        </Link>
        <span className="rounded-full bg-accent-secondary/30 px-3 py-1 text-xs font-medium text-text-secondary">
          {SITE.badge}
        </span>
      </div>
    </nav>
  );
}
