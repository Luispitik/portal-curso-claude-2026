export const SITE = {
  name: "Curso Claude 2026",
  title: "De 0 a Sistema: Claude Chat, Claude Code y Claude Cowork",
  subtitle: "Todo el material del curso organizado y descargable",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  authors: [
    { name: "Luis Salgado", role: "Instructor" },
    { name: "Angel Aparicio", role: "Instructor" },
  ],
  badge: "Next Gen AI Institute",
  sections: {
    total: 7,
    blocks: [
      {
        label: "Fundamentos",
        sections: ["v1-bienvenida", "v2-framework-mental"],
      },
      {
        label: "El Sistema",
        sections: [
          "v3-intro-claude-code",
          "v4-skills-hooks-plugins",
          "v5-synapsis",
        ],
      },
      {
        label: "Practica",
        sections: ["v6-caso-en-vivo", "v7-automatiza-tareas"],
      },
    ],
  },
} as const;

export const SECTION_TYPE_LABELS: Record<string, string> = {
  conceptual: "Conceptual",
  framework: "Framework",
  practico: "Practico",
  sistema: "Sistema",
  avanzado: "Avanzado",
  proyecto: "Proyecto",
  bonus: "Bonus",
};

export const SECTION_TYPE_COLORS: Record<string, string> = {
  conceptual: "bg-accent-secondary",
  framework: "bg-warning",
  practico: "bg-success",
  sistema: "bg-accent",
  avanzado: "bg-purple-600",
  proyecto: "bg-accent",
  bonus: "bg-cyan-600",
};
