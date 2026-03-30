"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/site-config";

interface ProgressBarProps {
  completedSections?: number;
}

export function ProgressBar({ completedSections = 0 }: ProgressBarProps) {
  const total = SITE.sections.total;
  const percentage = Math.round((completedSections / total) * 100);

  return (
    <div className="rounded-lg border border-border bg-bg-card p-4">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-text-secondary">Progreso del curso</span>
        <span className="font-medium text-text-primary">
          {completedSections}/{total} secciones
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-bg-secondary">
        <motion.div
          className="h-full rounded-full bg-accent"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
