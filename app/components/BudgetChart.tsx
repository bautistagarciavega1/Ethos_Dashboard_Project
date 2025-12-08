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

export default function BudgetChart({ budget }: any) {

  // Si vienen números sueltos, los transformamos a arrays automáticamente
  const chart = budget
    ? {
        labels: ["Total"],
        planned: [budget.planned ?? Math.random() * 30000],
        spent: [budget.spent ?? Math.random() * 20000],
        remaining: [budget.remaining ?? Math.random() * 15000],
      }
    : {
        labels: ["Resources", "Software"],
        planned: [20000, 15000],
        spent: [12000, 9000],
        remaining: [8000, 6000],
      };

  const data = {
    labels: chart.labels,
    datasets: [
      {
        label: "Planned",
        data: chart.planned,
        backgroundColor: "#1e3a8a",
      },
      {
        label: "Spent",
        data: chart.spent,
        backgroundColor: "#ef4444",
      },
      {
        label: "Remaining",
        data: chart.remaining,
        backgroundColor: "#3b82f6",
      },
    ],
  };

  return (
    <div>
      {/* TÍTULO ALINEADO Y CON SEPARACIÓN IGUAL AL DE PROJECT PROGRESS */}
      <h2
        style={{
          marginTop: "-6px",     // ← sube un poco el título
          marginBottom: "12px",  // ← da aire antes del gráfico
          fontSize: "1.25rem",
          fontWeight: 600
        }}
      >
        Budget
      </h2>

      <Bar data={data} />
    </div>
  );
}
