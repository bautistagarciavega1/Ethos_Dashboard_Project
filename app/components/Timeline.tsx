"use client";

interface TimelineProps {
  steps: { label: string; months: number }[];
  lang: "es" | "en";
  translations: Record<string, string>;
  months: { one: string; many: string };
}

export default function Timeline({ steps, lang, translations, months }: TimelineProps) {
  return (
    <div>
      {steps.map((step, i) => {
        const translatedLabel = translations[step.label] ?? step.label;
        const monthWord = step.months === 1 ? months.one : months.many;

        return (
          <div key={i} className={`timeline-step-${i}`} style={{ marginBottom: "22px" }}>
            
            {/* ETIQUETA */}
            <div className="timeline-label">
              {translatedLabel} — +{step.months} {monthWord}
            </div>

            {/* BARRA PROPORCIONAL REAL */}
            <div
              className="timeline-bar"
              style={{
                width: `${step.months * 40}px`,
              }}
            ></div>

          </div>
        );
      })}
    </div>
  );
}
