"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface RiskIssuesChartProps {
  data: {
    high: number;
    medium: number;
    low: number;
  };
  lang: "es" | "en";
}

export default function RiskIssuesChart({ data, lang }: RiskIssuesChartProps) {
  // Traducciones visibles SOLO para labels (NO para keys)
  const labels = {
    es: { high: "Alto", medium: "Medio", low: "Bajo", title: "Riesgos" },
    en: { high: "High", medium: "Medium", low: "Low", title: "Risks & Issues" },
  };

  // Datos internos que NO cambian nunca
  const chartData = [
    { type: labels[lang].high, value: data.high, key: "high" },
    { type: labels[lang].medium, value: data.medium, key: "medium" },
    { type: labels[lang].low, value: data.low, key: "low" },
  ];

  return (
    <div style={{ width: "100%", height: 300 }}>
      <h2 className="font-semibold mb-4">{labels[lang].title}</h2>

      <ResponsiveContainer>
        <BarChart data={chartData}>
          <XAxis dataKey="type" />
          <YAxis />
          <Tooltip />
          <Legend />

          {/* Colores fijos */}
          <Bar dataKey="value" name="" fill="#ef4444" /* high */ />
          <Bar dataKey="value" name="" fill="#f59e0b" /* medium */ />
          <Bar dataKey="value" name="" fill="#3b82f6" /* low */ />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
