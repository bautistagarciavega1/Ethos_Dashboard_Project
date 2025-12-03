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

  const chart = budget ?? {
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
      <h2>Budget</h2>
      <Bar data={data} />
    </div>
  );
}
