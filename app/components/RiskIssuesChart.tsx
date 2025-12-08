"use client";

interface RiskChartProps {
  lang: "es" | "en";
}

export default function RiskIssuesChart({ lang }: RiskChartProps) {
  const t = {
    es: { title: "Riesgos e Incidencias", high: "Alto", medium: "Medio", low: "Bajo" },
    en: { title: "Risks & Issues", high: "High", medium: "Medium", low: "Low" }
  }[lang];

  const risks = { high: 1, medium: 4, low: 2 };

  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-4">{t.title}</h2>

      <div className="space-y-4">
        <div>
          <p>{t.high}: {risks.high}</p>
          <div className="h-3 bg-red-400 rounded" style={{ width: risks.high * 35 }}></div>
        </div>

        <div>
          <p>{t.medium}: {risks.medium}</p>
          <div className="h-3 bg-yellow-400 rounded" style={{ width: risks.medium * 35 }}></div>
        </div>

        <div>
          <p>{t.low}: {risks.low}</p>
          <div className="h-3 bg-blue-400 rounded" style={{ width: risks.low * 35 }}></div>
        </div>
      </div>
    </div>
  );
}
