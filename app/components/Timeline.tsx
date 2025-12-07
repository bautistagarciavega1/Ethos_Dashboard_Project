"use client";

export default function Timeline({ points }: any) {
  
  // Datos con valores diferentes para cada paso (puedes editarlos)
  const timeline = points ?? [
    { label: "Inicio del Proyecto", color: "#3b82f6", value: 20 },
    { label: "Primer Hito", color: "#10b981", value: 40 },
    { label: "Etapa Intermedia", color: "#f59e0b", value: 70 },
    { label: "Cierre", color: "#ef4444", value: 90 }
  ];

  return (
    <div>
      {timeline.map((step: any, i: number) => (
        <div key={i} className="timeline-step" style={{ marginBottom: "12px" }}>
          
          {/* Etiqueta */}
          <span
            className="timeline-label"
            style={{
              backgroundColor: step.color,
              padding: "6px 12px",
              borderRadius: "6px",
              display: "inline-block",
              color: "white",
              fontWeight: "bold"
            }}
          >
            {step.label}
          </span>

          {/* Barra dinámica */}
          <div
            className="timeline-bar"
            style={{
              height: "8px",
              width: `${step.value}%`,
              backgroundColor: step.color,
              marginTop: "6px",
              borderRadius: "4px",
              transition: "width 0.3s ease"
            }}
          ></div>

        </div>
      ))}
    </div>
  );
}
