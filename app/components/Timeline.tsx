"use client";

export default function Timeline({ points }: any) {
  
  // Si vienen puntos, se usan. Si no, fallback.
  const timeline = points ?? [
    { label: "Inicio", color: "#3b82f6", value: 25 },
    { label: "Proceso", color: "#10b981", value: 50 },
    { label: "Asignación", color: "#f59e0b", value: 75 },
    { label: "Entrega", color: "#ef4444", value: 100 }
  ];

  return (
    <div style={{ padding: "10px" }}>
      {timeline.map((step, index) => (
        <div key={index} style={{ marginBottom: "16px" }}>
          
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

          {/* Barra */}
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
