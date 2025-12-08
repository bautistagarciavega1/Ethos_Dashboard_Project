"use client";

interface RiskIssuesChartProps {
  data: { high: number; medium: number; low: number };
  lang: "es" | "en";
}

export default function RiskIssuesChart({ data, lang }: RiskIssuesChartProps) {
  const labels = {
    es: { title: "Riesgos e Incidencias", high: "Alto", medium: "Medio", low: "Bajo" },
    en: { title: "Risks & Issues", high: "High", medium: "Medium", low: "Low" },
  };

  const t = labels[lang];

  // Valores para las barras
  const max = Math.max(data.high, data.medium, data.low, 1);

  const barHeight = (value: number) => `${(value / max) * 140}px`;

  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-4">{t.title}</h2>

      <div className="flex items-end justify-around h-40 mt-4">

        {/* HIGH */}
        <div className="flex flex-col items-center">
          <div
            className="w-10 bg-red-400 rounded-t transition-all"
            style={{ height: barHeight(data.high) }}
          />
          <span className="mt-2 text-sm font-medium">
            {t.high}: {data.high}
          </span>
        </div>

        {/* MEDIUM */}
        <div className="flex flex-col items-center">
          <div
            className="w-10 bg-yellow-400 rounded-t transition-all"
            style={{ height: barHeight(data.medium) }}
          />
          <span className="mt-2 text-sm font-medium">
            {t.medium}: {data.medium}
          </span>
        </div>

        {/* LOW */}
        <div className="flex flex-col items-center">
          <div
            className="w-10 bg-blue-400 rounded-t transition-all"
            style={{ height: barHeight(data.low) }}
          />
          <span className="mt-2 text-sm font-medium">
            {t.low}: {data.low}
          </span>
        </div>

      </div>
    </div>
  );
}
