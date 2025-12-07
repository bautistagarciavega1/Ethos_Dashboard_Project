"use client";

type TimelineStep = {
  label: string;
  color: string;
  value: number;
};

export default function Timeline({ points }: { points?: TimelineStep[] }) {
  
  // Fallback si no vienen datos
  const timeline: TimelineStep[] = Array.isArray(points) && points.length > 0 
    ? points 
    : [
        { label: "Inicio", color: "#3b82f6", value: 20 },
        { label: "Proceso", color: "#10b981", value: 45 },
        { label: "Asignación", color: "#f59e0b", value: 70 },
        { label: "Entrega", color: "#ef4444", value: 95 }
      ];

  return (
    <div style={{ padding: "10px" }}>
      {timeline.map((step: TimelineStep, index: number) => (
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
