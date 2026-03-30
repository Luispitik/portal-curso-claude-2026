import type { Entregable } from "@/lib/sections";
import { DownloadButton } from "./DownloadButton";

interface EntregableCardProps {
  entregable: Entregable;
  section: string;
}

const TYPE_ICONS: Record<string, string> = {
  html: "🌐",
  md: "📄",
  json: "{ }",
};

export function EntregableCard({ entregable, section }: EntregableCardProps) {
  return (
    <div className="rounded-lg border border-border bg-bg-secondary p-4 transition-all hover:border-accent/30">
      <div className="mb-2 flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">{TYPE_ICONS[entregable.type] || "📦"}</span>
          <h4 className="font-medium text-text-primary">{entregable.title}</h4>
        </div>
        <span className="shrink-0 rounded bg-bg-card px-2 py-0.5 text-xs uppercase text-text-secondary">
          {entregable.type}
        </span>
      </div>
      <p className="mb-3 text-sm text-text-secondary">
        {entregable.description}
      </p>
      <DownloadButton
        file={`/entregables/${entregable.file}`}
        section={section}
        label={entregable.type === "html" ? "Ver" : "Descargar"}
        type={entregable.type}
      />
    </div>
  );
}
