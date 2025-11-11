
import React from "react";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <header className={`w-full max-w-5xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <div className="type-eyebrow mb-2">{eyebrow}</div>}
      <h2 className="type-h2">{title}</h2>
      {subtitle && <p className="type-body-lg mt-3 text-text-secondary">{subtitle}</p>}
    </header>
  );
}
