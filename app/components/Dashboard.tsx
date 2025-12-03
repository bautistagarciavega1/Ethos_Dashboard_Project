"use client";

import ProjectProgress from "./ProjectProgress";
import BudgetChart from "./BudgetChart";
import RiskIssuesChart from "./RiskIssuesChart";
import Timeline from "./Timeline";
import Notes from "./Notes";

export default function Dashboard({ data }: any) {
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
