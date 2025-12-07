"use client";

import ProjectProgress from "./ProjectProgress";
import BudgetChart from "./BudgetChart";
import RiskIssuesChart from "./RiskIssuesChart";
import Timeline from "./Timeline";
import Notes from "./Notes";

export default function Dashboard() {

  const data = {
    progress: 70,
    budget: {
      planned: 100000,
      spent: 45000,
      remaining: 55000
    },
    risks: {
      high: 1,
      medium: 2,
      low: 5
    },
    timeline: [
      { label: "Inicio", color: "#3b82f6", value: 20 },
      { label: "Proceso", color: "#3b82f6", value: 45 },
      { label: "Asignación", color: "#3b82f6", value: 70 },
      { label: "Entrega", color: "#3b82f6", value: 95 }
    ],
    notes: [
      "Fondos asignados",
      "Revisión interna pendiente",
      "Entrega final pendiente"
    ]
  };

  return (
    <div className="space-y-10">
      
      {/* TOP */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card">
          <ProjectProgress value={data.progress} />
        </div>

        <div className="card">
          <BudgetChart budget={data.budget} />
        </div>

        <div className="card">
          <RiskIssuesChart risks={data.risks} />
        </div>
      </div>

      {/* BOTTOM */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <Timeline points={data.timeline} />
        </div>

        <div className="card">
          <Notes items={data.notes} />
        </div>
      </div>

    </div>
  );
}
