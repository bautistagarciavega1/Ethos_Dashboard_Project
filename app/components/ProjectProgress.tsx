"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ProjectProgress({
  onTrack,
  delayed,
  concern,
}: {
  onTrack: number;
  delayed: number;
  concern: number;
}) {
  const total = onTrack + delayed + concern;
  const percentage = Math.round((onTrack / total) * 100);

  const data = {
    labels: ["On Track", "Delayed", "Concern"],
    datasets: [
      {
        data: [onTrack, delayed, concern],
        backgroundColor: ["#1e3a8a", "#ef4444", "#facc15"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
    cutout: "60%",
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Project Progress & Task Status</h2>

      <div style={{ maxWidth: 230, margin: "0 auto" }}>
        <Doughnut data={data} options={options} />
      </div>

      <p className="text-center text-4xl font-bold mt-4">{percentage}%</p>
    </div>
  );
}

