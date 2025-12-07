"use client";

export default function Timeline({ points }: any) {
  
  // Fallback correcto ✔
  const timeline = Array.isArray(points) && points.length > 0 
    ? points 
    : [
        { label: "Inicio", color: "#3b82f6", value: 20 },
        { label: "Proceso", color: "#3b82f6", value: 45 },
        { label: "Asignación", color: "#3b82f6", value: 70 },
        { label: "Entrega", color: "#3b82f6", value: 95 }
      ];

  return (
    <div style={{ padding: "10px" }}>
      {timeline.map((step: any, i: number) => (
        <div key={i} style={{ marginBottom: "16px" }}>
          
          {/* Etiqueta */}
          <span
            style={{
              backgroundColor: step.color,
              padding: "6px 12px",
              borderRadius: "6px",
              display: "inline-block",
              color: "white",
              fontWeight: "bold",
              fontSize: "14px"
            }}
          >
            {step.label}
          </span>

          {/* Barra dinámica */}
          <div
            style={{
              height: "10px",
              width: `${step.value}%`,
              backgroundColor: step.color,
              marginTop: "6px",
              borderRadius: "4px"
            }}
          ></div>
        </div>
      ))}
    </div>
  );
}
