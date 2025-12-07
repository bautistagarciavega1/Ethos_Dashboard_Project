"use client";

type TimelinePoint = {
  label: string;
  months: number;
  color?: string;
};

type TimelineProps = {
  points: TimelinePoint[];
};

export default function Timeline({ points }: TimelineProps) {
  // Datos de fallback por si no llegan puntos
  const fallback: TimelinePoint[] = [
    { label: "Inicio", months: 2, color: "#3b82f6" },
    { label: "Proceso", months: 4, color: "#10b981" },
    { label: "Asignación", months: 6, color: "#f59e0b" },
    { label: "Entrega", months: 8, color: "#6366f1" },
  ];

  const timeline: TimelinePoint[] =
    Array.isArray(points) && points.length > 0 ? points : fallback;

  const palette = ["#3b82f6", "#10b981", "#f59e0b", "#6366f1", "#ec4899"];

  return (
    <div style={{ padding: "15px" }}>
      {timeline.map((step, index) => {
        const color = step.color ?? palette[index % palette.length];
        const width = step.months * 10; // escala visual simple

        return (
          <div key={index} style={{ marginBottom: "22px" }}>
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
              {step.label} — +{step.months} month
              {step.months !== 1 && "s"}
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
