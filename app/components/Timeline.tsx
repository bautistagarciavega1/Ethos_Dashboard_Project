"use client";

type Step = {
  label: string;
  months: number; // tiempo en meses
};

export default function Timeline({ points }: { points: Step[] }) {
  // Colores armoniosos rotativos
  const colors = ["#3B82F6", "#10B981", "#F59E0B"];

  // Para calcular porcentaje de la barra
  const maxMonths = Math.max(...points.map(p => p.months));

  return (
    <div style={{ padding: "10px" }}>
      {points.map((step, i) => {
        const color = colors[i % colors.length];
        
        // largo proporcional (máximo = 100%)
        const width = (step.months / maxMonths) * 100;

        return (
          <div key={i} style={{ marginBottom: "20px" }}>

            {/* LABEL + MESES */}
            <span
              style={{
                backgroundColor: color,
                padding: "6px 12px",
                borderRadius: "6px",
                color: "white",
                fontWeight: "bold",
                display: "inline-block",
                marginBottom: "6px",
              }}
            >
              {step.label} — +{step.months} months
            </span>

            {/* BARRA */}
            <div
              style={{
                height: "10px",
                width: `${width}%`,
                backgroundColor: color,
                borderRadius: "4px",
                transition: "width 0.3s ease-in-out",
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}
