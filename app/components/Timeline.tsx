"use client";

type Lang = "es" | "en";

interface TimelineProps {
  points?: { label: string; months: number }[];
  lang?: Lang;
}

export default function Timeline({ points, lang = "es" }: TimelineProps) {
  // Fallback si no vienen datos
  const timeline = Array.isArray(points) && points.length > 0
    ? points
    : [
        { label: "Inicio", months: 2 },
        { label: "Proceso", months: 4 },
        { label: "Asignación", months: 6 },
        { label: "Entrega", months: 8 },
      ];

  // Colores armónicos
  const colors = ["#3b82f6", "#10b981", "#f59e0b", "#6366f1", "#ec4899"];

  // Palabras para mes/meses según idioma
  const singular = lang === "en" ? "month" : "mes";
  const plural = lang === "en" ? "months" : "meses";

  return (
    <div style={{ padding: "15px" }}>
      {timeline.map((step, i) => {
        const color = colors[i % colors.length];
        const width = step.months * 10; // 10% por mes aprox

        return (
          <div key={i} style={{ marginBottom: "22px" }}>
            {/* Etiqueta */}
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
              {step.label} — +{step.months}{" "}
              {step.months === 1 ? singular : plural}
            </span>

            {/* Barra */}
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
