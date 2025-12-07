"use client";

type TimelineStep = {
  label: string;
  value: number;
  color?: string;
};

export default function Timeline({ points }: { points: TimelineStep[] }) {

  return (
    <div style={{ padding: "10px" }}>
      {points.map((step, index) => (
        <div key={index} style={{ marginBottom: "16px" }}>
          
          {/* LABEL */}
          <span
            style={{
              backgroundColor: step.color ?? "#3b82f6",
              padding: "6px 12px",
              borderRadius: "6px",
              display: "inline-block",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {step.label}
          </span>

          {/* BAR */}
          <div
            style={{
              height: "10px",
              width: `${step.value}%`,
              backgroundColor: step.color ?? "#3b82f6",
              marginTop: "6px",
              borderRadius: "4px",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
}
