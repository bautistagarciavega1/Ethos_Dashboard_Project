"use client";

export default function Timeline({ points }: any) {
  
  // Usa los datos reales que vienen desde projectData
  const timeline = Array.isArray(points) && points.length > 0
    ? points
    : [
        { label: "Inicio", months: 2, color: "#3b82f6" },
        { label: "Proceso", months: 4, color: "#10b981" },
        { label: "Asignación", months: 6, color: "#f59e0b" },
        { label: "Entrega", months: 8, color: "#3b82f6" },
      ];

  // paleta de colores repetible
  const colors = ["#3b82f6", "#10b981", "#f59e0b", "#6366f1", "#ec4899"];

  return (
    <div style={{ padding: "15px" }}>
      {timeline.map((step: any, i: number) => (
        <div key={i} style={{ marginBottom: "22px" }}>
          
          {/* Etiqueta */}
          <span
            style={{
              backgroundColor: colors[i % colors.length],
              padding: "8px 16px",
              borderRadius: "6px",
              color: "white",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            {step.label} — +{step.months} months
          </span>

          {/* Barra */}
          <div
            style={{
              height: "10px",
              width: `${step.months * 10}%`,
              backgroundColor: colors[i % colors.length],
              marginTop: "8px",
              borderRadius: "4px",
            }}
          />
        </div>
      ))}
    </div>
  );
