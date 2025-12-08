"use client";

import Timeline from "./Timeline";
import Notes from "./Notes";
import ProjectProgressChart from "./ProjectProgressChart";
import BudgetChart from "./BudgetChart";
import RiskIssuesChart from "./RiskIssuesChart";
import { translations } from "../translations";

interface DashboardProps {
  data: any;
  lang: "es" | "en";
}

export default function Dashboard({ data, lang }: DashboardProps) {
  const t = translations[lang];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* TIMELINE + CHARTS */}
      <div className="card">

        {/* TIMELINE */}
        <Timeline
          steps={data.timeline}
          lang={lang}
          translations={t.timeline}
          months={t.months}
        />

        {/* PROJECT PROGRESS */}
        <div className="mt-10">
          <ProjectProgressChart data={data} />
        </div>

        {/* BUDGET */}
        <div className="mt-10">
          <BudgetChart data={data} />
        </div>

        {/* RISK ISSUES */}
        <div className="mt-10 mb-4">
          <RiskIssuesChart data={data} />
        </div>

      </div>

      {/* NOTAS */}
      <div className="card">
        <Notes
          items={data.notes}
          lang={lang}
          translations={t.notes}
        />
      </div>

    </div>
  );
}
