"use client";

type TimelineProps = {
  points: { label: string; months: number }[];
  lang: "es" | "en";
  translations: Record<string, string>;
};

export default function Timeline({ points, lang, translations }: TimelineProps) {
  return (
    <div className="timeline-container">
      {points.map((step, i) => {
        // Traducción del label si existe
        const translatedLabel = translations[step.label] ?? step.label;

        // Singular/plural dinámico
        const unit =
          lang === "es"
            ? step.months === 1
              ? "mes"
              : "meses"
            : step.months === 1
            ? "month"
            : "months";

        // Ancho proporcional (igual que antes)
        const max = Math.max(...points.map((p) => p.months));
        const width = (step.months / max) * 100;

        // Colores por index (igual que antes)
        const colors = ["#3B82F6", "#10B981", "#F59E0B", "#6366F1"];
        const color = colors[i % colors.length];

        return (
          <div key={i} style={{ marginBottom: "22px" }}>
            <span
              style={{
                backgroundColor: color,
                padding: "8px 16px",
                borderRadius: "6px",
                color: "white",
                fontWeight: "bold",
              }}
            >
              {translatedLabel} — +{step.months} {unit}
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
