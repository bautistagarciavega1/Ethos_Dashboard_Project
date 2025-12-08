"use client";

interface Step {
  label: string;
  months: number;
}

interface TimelineProps {
  steps: Step[];
  lang: "es" | "en";
}

const translations = {
  es: {
    Inicio: "Inicio",
    Proceso: "Proceso",
    Asignación: "Asignación",
    Entrega: "Entrega",
  },
  en: {
    Inicio: "Start",
    Proceso: "Process",
    Asignación: "Assignment",
    Entrega: "Delivery",
  },
};

export default function Timeline({ steps, lang }: TimelineProps) {
  const t = translations[lang];

  const colors = ["#3b82f6", "#10b981", "#f59e0b", "#6366f1", "#ec4899"];

  return (
    <div style={{ padding: "15px" }}>
      {steps.map((step, i) => {
        const color = colors[i % colors.length];

        // 🔥 RESTAURA EL ANCHO PROPORCIONAL POR MESES
        const width = step.months * 10;

        // 🔥 TRADUCIR LABEL (si existe)
        // Tabla de traducción segura
const translationMap: Record<string, string> = {
  Inicio: lang === "es" ? "Inicio" : "Start",
  Proceso: lang === "es" ? "Proceso" : "Process",
  Asignación: lang === "es" ? "Asignación" : "Assignment",
  Entrega: lang === "es" ? "Entrega" : "Delivery",
};

// Si existe traducción → úsala, si no, deja el texto original
const translatedLabel = translationMap[step.label] || step.label;

        return (
          <div key={i} style={{ marginBottom: "22px" }}>
            {/* LABEL */}
            <span
              style={{
                backgroundColor: color,
                padding: "8px 16px",
                borderRadius: "6px",
                color: "white",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              {translatedLabel} — +{step.months} months
            </span>

            {/* BARRA PROPORCIONAL */}
            <div
              style={{
                height: "10px",
                width: `${width}%`,
                backgroundColor: color,
                marginTop: "8px",
                borderRadius: "4px",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

