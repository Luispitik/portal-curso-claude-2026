"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface DownloadButtonProps {
  file: string;
  section: string;
  label: string;
  type: string;
}

export function DownloadButton({
  file,
  section,
  label,
  type,
}: DownloadButtonProps) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 1500);

    if (type === "html") {
      if (file.startsWith("/entregables/")) {
        window.location.href = file;
      }
    } else {
      const link = document.createElement("a");
      link.href = file;
      link.download = file.split("/").pop() || "download";
      link.click();
    }

    fetch("/api/track-download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        file: file.replace("/entregables/", ""),
        section,
        timestamp: new Date().toISOString(),
      }),
    }).catch(() => {});
  };

  return (
    <motion.button
      onClick={handleClick}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
        clicked
          ? "bg-success text-white"
          : "bg-accent/10 text-accent hover:bg-accent/20"
      }`}
    >
      {clicked ? (
        <>
          <CheckIcon />
          {type === "html" ? "Abriendo..." : "Descargado"}
        </>
      ) : (
        <>
          {type === "html" ? <ViewIcon /> : <DownloadIcon />}
          {label}
        </>
      )}
    </motion.button>
  );
}

function ViewIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="8" r="3" />
      <path d="M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v8M4 8l4 4 4-4M2 14h12" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8l3 3 7-7" />
    </svg>
  );
}
