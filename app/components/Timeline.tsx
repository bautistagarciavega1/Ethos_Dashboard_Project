"use client";

type Step = {
  label: string;
  months: number;
  color?: string;
};

export default function Timeline({ points }: { points: Step[] }) {
  const colors = ["#3B82F6", "#10B981", "#F59E0B"];

  const maxMonths = Math.max(...points.map(p => p.months));

  return (
    <div style={{ padding: "10px" }}>
      {points.map((step, i) => {
        const color = colors[i % colors.length];

        // ancho proporcional a la cantidad de meses
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
              {step.label} — +{step.months} month{step.months > 1 ? "s" : ""}
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
