import { translations } from "@/app/texts";

interface TimelineProps {
  steps: { label: string; months: number }[];
  lang: "es" | "en";
}

export default function Timeline({ steps, lang }: TimelineProps) {
  const t = translations[lang];

  return (
    <div className="timeline-container">
      {steps.map((step, i) => {
        // Traducción segura del label
        const translatedLabel =
          t.timeline[step.label as keyof typeof t.timeline] ?? step.label;

        return (
          <div key={i} style={{ marginBottom: "22px" }}>
            <div
              className="timeline-label"
              style={{
                backgroundColor:
                  i % 3 === 0
                    ? "#3b82f6"
                    : i % 3 === 1
                    ? "#10b981"
                    : "#f59e0b",
              }}
            >
              {translatedLabel} — +{step.months} months
            </div>

            <div
              className="timeline-bar"
              style={{
                width: `${step.months * 40}px`,
                height: "8px",
                borderRadius: "4px",
                backgroundColor:
                  i % 3 === 0
                    ? "#3b82f6"
                    : i % 3 === 1
                    ? "#10b981"
                    : "#f59e0b",
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}
