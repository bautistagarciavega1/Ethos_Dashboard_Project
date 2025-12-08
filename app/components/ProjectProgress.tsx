'use client';

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ProjectProgress({ value }: any) {

  const progressValue = value ?? 50;

  const data = {
    labels: ['On Track', 'Delayed', 'Concern'],
    datasets: [
      {
        data: [25, 15, 10],
        backgroundColor: ['#1e3a8a', '#ef4444', '#facc15'],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
    cutout: '60%',
  };

  return (
    <div>
      {/* SOLO SE AJUSTA EL TÍTULO */}
      <h2
        style={{
          marginTop: "-6px",     // ← lo sube un poco
          marginBottom: "12px",  // ← separa más del gráfico
          fontSize: "1.25rem",
          fontWeight: 600
        }}
      >
        Project Progress & Task Status
      </h2>

      <div style={{ maxWidth: 230, margin: '0 auto' }}>
        <Doughnut data={data} options={options} />
      </div>

      <p
        style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          fontWeight: 700,
          marginTop: '1rem',
        }}
      >
        {progressValue}%
      </p>
    </div>
  );
}
