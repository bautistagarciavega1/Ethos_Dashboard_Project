"use client";

export default function Timeline({ points }: any) {
  
  // Datos con valores y colores (podés editar los valores)
  const timeline = points ?? [
    { label: "Inicio", color: "#3b82f6", value: 20 },
    { label: "Proceso", color: "#3b82f6", value: 45 },
    { label: "Asignación", color: "#3b82f6", value: 70 },
    { label: "Entrega", color: "#3b82f6", value: 95 }
  ];

  return (
    <div>
      {timeline.map((step: any, i: number) => (
        <div 
          key={i} 
          className="timeline-step" 
          style={{ marginBottom: "14px" }}
        >
          
          {/* Etiqueta */}
          <span
            className="timeline-label"
            style={{
              backgroundColor: step.color,
              padding: "6px 12px",
              borderRadius: "6px",
              display: "inline-block",
              color: "white",  // 🔥 Texto visible siempre
              fontWeight: "bold",
              fontSize: "14px"
            }}
          >
            {step.label}
          </span>

          {/* Barra dinámica */}
          <div
            className="timeline-bar"
            style={{
              height: "8px",
              width: `${step.value}%`,   // ← Largo dinámico
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
