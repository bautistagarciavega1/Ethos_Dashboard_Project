const steps = [
  { text: "Analysis", color: "#ef4444", months: 2 },
  { text: "Design", color: "#3b82f6", months: 2 },
  { text: "Development", color: "#1d4ed8", months: 4 },
  { text: "Testing", color: "#fb923c", months: 2 },
  { text: "Implement", color: "#2563eb", months: 3 },
];

// Para calcular la barra proporcional
const MAX_MONTHS = Math.max(...steps.map((s) => s.months)); // 4

export default function Timeline() {
  return (
    <div>
      <h2>Project Timeline</h2>

      {steps.map((step) => {
        // Porcentaje proporcional según la duración
        const widthPercent = (step.months / MAX_MONTHS) * 100;

        return (
          <div
            key={step.text}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1.2rem",
              justifyContent: "space-between",
            }}
          >
            {/* LABEL + BAR CON PROPORCIÓN */}
            <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
              {/* Etiqueta */}
              <div
                style={{
                  backgroundColor: step.color,
                  color: "white",
                  padding: "0.5rem 1.5rem",
                  borderRadius: "999px 0 0 999px",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  minWidth: "130px",
                }}
              >
                {step.text}
              </div>

              {/* Barra proporcional */}
              <div
                style={{
                  flex: 1,
                  height: "12px",
                  background: "#e5e7eb",
                  borderRadius: "0 999px 999px 0",
                  marginLeft: "0.5rem",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${widthPercent}%`,
                    backgroundColor: step.color,
                    borderRadius: "0 999px 999px 0",
                    transition: "width 0.3s ease",
                    opacity: 0.8,
                  }}
                />
              </div>
            </div>

            {/* Duración */}
            <div
              style={{
                marginLeft: "1rem",
                fontSize: "0.85rem",
                color: "#374151",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              +{step.months} months
            </div>
          </div>
        );
      })}
    </div>
  );
}
