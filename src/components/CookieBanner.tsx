"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-bg-secondary/95 backdrop-blur-md p-4">
      <div className="mx-auto flex max-w-4xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-text-secondary">
          <p>
            Este portal usa{" "}
            <strong className="text-text-primary">
              solo cookies tecnicas esenciales
            </strong>{" "}
            (hosting Vercel). No usamos cookies de seguimiento, publicidad ni
            analitica. Registramos descargas de forma anonima para mejorar el
            curso.{" "}
            <Link
              href="/privacidad"
              className="text-accent underline hover:text-accent/80"
            >
              Politica de Privacidad
            </Link>
          </p>
        </div>
        <button
          onClick={accept}
          className="shrink-0 rounded-lg bg-accent px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-accent/80"
        >
          Entendido
        </button>
      </div>
    </div>
  );
}
