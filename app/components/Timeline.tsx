"use client";

import { translations } from "../texts";

type Lang = "es" | "en";

interface TimelineProps {
  points?: { label: string; months: number }[];
  lang?: Lang;
}

export default function Timeline({ points, lang = "es" }: TimelineProps) {
  const t = translations[lang];

  const timeline = Array.isArray(points) && points.length > 0 ? points : [];

  const colors = ["#3b82f6", "#10b981", "#f59e0b", "#6366f1", "#ec4899"];

  return (
    <div style={{ padding: "15px" }}>
      {timeline.map((step, i) => {
        const color = colors[i % colors.length];
        const width = step.months * 10;

        // Traducción de label
        const translatedLabel =
          t.timeline[step.label] ?? step.label;

        return (
          <div key={i} style={{ marginBottom: "22px" }}>
            <span
              style={{
                backgroundColor: color,
                padding: "8px 16px",
                borderRadius: "6px",
                color: "white",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              {translatedLabel} — +{step.months}{" "}
              {step.months === 1 ? t.months.one : t.months.many}
            </span>

            <div
              style={{
                height: "10px",
                width: `${width}%`,
                backgroundColor: color,
                marginTop: "8px",
                borderRadius: "4px",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
