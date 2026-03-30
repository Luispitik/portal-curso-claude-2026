"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { SectionFrontmatter } from "@/lib/sections";
import { SECTION_TYPE_LABELS, SECTION_TYPE_COLORS } from "@/lib/site-config";

interface SectionCardProps {
  section: SectionFrontmatter;
  index: number;
}

export function SectionCard({ section, index }: SectionCardProps) {
  const typeColor = SECTION_TYPE_COLORS[section.type] || "bg-accent-secondary";
  const typeLabel = SECTION_TYPE_LABELS[section.type] || section.type;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <Link
        href={`/secciones/${section.slug}`}
        className="group block rounded-xl border border-border bg-bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="text-3xl font-bold text-accent/30">
            {section.number}
          </span>
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-medium text-white ${typeColor}`}
          >
            {typeLabel}
          </span>
        </div>
        <h3 className="mb-1 text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">
          {section.title}
        </h3>
        <p className="mb-3 text-sm text-text-secondary">{section.subtitle}</p>
        <div className="flex items-center justify-between text-xs text-text-secondary/70">
          <span>{section.duration}</span>
          <span>{section.entregables.length} entregables</span>
        </div>
      </Link>
    </motion.div>
  );
}
