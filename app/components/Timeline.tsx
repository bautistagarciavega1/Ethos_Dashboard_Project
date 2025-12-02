const steps = [
  { text: "Analysis", color: "#ef4444", duration: "+2 months" },
  { text: "Design", color: "#3b82f6", duration: "+2 months" },
  { text: "Development", color: "#1d4ed8", duration: "+4 months" },
  { text: "Testing", color: "#fb923c", duration: "+2 months" },
  { text: "Implement", color: "#2563eb", duration: "+3 months" },
];

export default function Timeline() {
  return (
    <div>
      <h2>Project Timeline</h2>

      {steps.map((step) => (
        <div
          className="timeline-step"
          key={step.text}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
            justifyContent: "space-between"
          }}
        >
          {/* Label */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              className="timeline-label"
              style={{
                backgroundColor: step.color,
                color: "white",
                padding: "0.5rem 1.5rem",
                borderRadius: "999px 0 0 999px",
                fontWeight: 600,
                fontSize: "0.9rem",
                minWidth: "130px"
              }}
            >
              {step.text}
            </div>

            {/* Bar */}
            <div
              className="timeline-bar"
              style={{
                flex: 1,
                height: "12px",
                background: "#e5e7eb",
                borderRadius: "0 999px 999px 0"
              }}
            />
          </div>

          {/* Duration tag */}
          <div
            style={{
              marginLeft: "1rem",
              fontSize: "0.85rem",
              color: "#374151",
              fontWeight: 500,
              whiteSpace: "nowrap"
            }}
          >
            {step.duration}
          </div>
        </div>
      ))}
    </div>
  );
}
