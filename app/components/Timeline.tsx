"use client";

export default function Timeline({ points }: any) {
  // fallback si no vienen datos
  const timeline = Array.isArray(points) && points.length > 0
    ? points
    : [
        { label: "Inicio", months: 2 },
        { label: "Proceso", months: 4 },
        { label: "Asignación", months: 6 },
        { label: "Entrega", months: 8 },
      ];

  // colores armónicos
  const colors = ["#3b82f6", "#10b981", "#f59e0b", "#6366f1", "#ec4899"];

  return (
    <div style={{ padding: "15px" }}>
      {timeline.map((step: any, i: number) => {
        const color = colors[i % colors.length];
        const width = step.months * 10; // 10% por mes

        return (
          <div key={i} style={{ marginBottom: "22px" }}>
            
            {/* ETIQUETA */}
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
              {step.label} — +{step.months} month{step.months !== 1 ? "s" : ""}
            </span>

            {/* BARRA */}
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
