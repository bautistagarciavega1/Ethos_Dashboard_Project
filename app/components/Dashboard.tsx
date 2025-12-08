"use client";

import ProjectProgress from "./ProjectProgress";
import BudgetChart from "./BudgetChart";
import RiskIssuesChart from "./RiskIssuesChart";
import Timeline from "./Timeline";
import Notes from "./Notes";

/**
 * lang es opcional, por defecto "es".
 * Así, si no le pasás nada desde page.tsx, sigue todo en español.
 */
export default function Dashboard({
  data,
  lang = "es",
}: {
  data: any;
  lang?: "es" | "en";
}) {
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
          <Timeline points={data.timeline} lang={lang} />
        </div>

        <div className="card">
          <Notes items={data.notes} lang={lang} />
        </div>
      </div>
    </div>
  );
}
