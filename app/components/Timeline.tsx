"use client";

export default function Timeline({ points }: any) {
  
  // Datos dinámicos o fallback
  const timeline = points ?? [
    { label: "Inicio del Proyecto", color: "#3b82f6" },
    { label: "Primer Hito", color: "#10b981" },
    { label: "Etapa Intermedia", color: "#f59e0b" },
    { label: "Cierre", color: "#ef4444" }
  ];

  return (
    <div>
      {timeline.map((step: any, i: number) => (
        <div key={i} className="timeline-step">
          <span
            className="timeline-label"
            style={{ backgroundColor: step.color }}
          >
            {step.label}
          </span>

          <div className="timeline-bar"></div>
        </div>
      ))}
    </div>
  );
}
