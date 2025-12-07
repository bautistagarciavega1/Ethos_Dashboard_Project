"use client";

import ProjectProgress from "./ProjectProgress";
import BudgetChart from "./BudgetChart";
import RiskIssuesChart from "./RiskIssuesChart";
import Timeline from "./Timeline";
import Notes from "./Notes";

export default function Dashboard() {
  
  // 🔷 DATOS FICTICIOS PARA MOSTRAR DE EJEMPLO
  const data = {
    progress: 70,
    budget: {
      planned: 20000,
      spent: 12000,
      remaining: 8000,
    },
    risks: {
      high: 1,
      medium: 2,
      low: 5,
    },
    timeline: [
      { label: "Inicio", value: 25, color: "#3b82f6" },
      { label: "Proceso", value: 50, color: "#10b981" },
      { label: "Asignación", value: 75, color: "#f59e0b" },
      { label: "Entrega", value: 100, color: "#ef4444" },
    ],
    notes: [
      "Fondos asignados",
      "Falta entrega final",
      "Revisión pendiente",
    ]
  };

  return (
    <div className="space-y-10">

      {/* TOP: progreso + presupuesto + riesgos */}
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

      {/* BOTTOM: timeline + notas */}
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
