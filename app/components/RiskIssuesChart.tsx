"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function RiskIssuesChart({ risks }: any) {
  
  // Si vienen números → convertir automáticamente a arrays
  const r = risks ?? {};

  const riskData = {
    labels: ["Risks / Issues"],
    high: Array.isArray(r.high) ? r.high : [r.high ?? Math.floor(Math.random() * 5 + 1)],
    medium: Array.isArray(r.medium) ? r.medium : [r.medium ?? Math.floor(Math.random() * 5 + 1)],
    low: Array.isArray(r.low) ? r.low : [r.low ?? Math.floor(Math.random() * 5 + 1)],
  };

  const data = {
    labels: riskData.labels,
    datasets: [
      {
        label: "High",
        data: riskData.high,
        backgroundColor: "#ef4444",
      },
      {
        label: "Medium",
        data: riskData.medium,
        backgroundColor: "#f59e0b",
      },
      {
        label: "Low",
        data: riskData.low,
        backgroundColor: "#3b82f6",
      },
    ],
  };

  return (
    <div>
      <h2>Risks & Issues</h2>
      <Bar data={data} />
    </div>
  );
}
