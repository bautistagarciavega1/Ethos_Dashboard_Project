"use client";

export default function Timeline({ points }: any) {
  
  // Si no vienen datos, usar fallback
  const timeline = Array.isArray(points) && points.length > 0
    ? points
    : [
        { label: "Inicio", months: 2, color: "#3b82f6" },
        { label: "Proceso", months: 4, color: "#10b981" },
        { label: "Asignación", months: 6, color: "#f59e0b" },
        { label: "Entrega", months: 8, color: "#3b82f6" }
      ];

  return (
    <div style={{ padding: "10px" }}>
      {timeline.map((step: any, i: number) => (
        <div key={i} style={{ marginBottom: "20px" }}>
          
          {/* Etiqueta */}
          <span
            style={{
              backgroundColor: step.color,
              padding: "6px 14px",
              borderRadius: "6px",
              display: "inline-block",
              color: "white",
              fontWeight: "bold",
              fontSize: "15px"
            }}
          >
            {step.label} — + {step.months} months
          </span>

          {/* Barra proporcional */}
          <div
            style={{
              height: "10px",
              width: `${step.months * 10}%`, // escala visual
              backgroundColor: step.color,
              marginTop: "8px",
              borderRadius: "4px",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
}
