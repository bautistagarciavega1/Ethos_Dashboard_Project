"use client";

import Timeline from "./Timeline";
import Notes from "./Notes";
import ProjectProgressChart from "./ProjectProgress";
import BudgetChart from "./BudgetChart";
import RiskIssuesChart from "./RiskIssuesChart";
import { translations } from "../translations";

interface DashboardProps {
  data: any;
  lang: "es" | "en";
}

export default function Dashboard({ data, lang }: DashboardProps) {
  const t = translations[lang];

  // 🔵 CONVERTIR TIMELINE A FORMATO COMPATIBLE
  const steps = data.timeline.map((item: any) => ({
    label: item.label || item.title || Object.keys(item)[0],
    months: item.months || item.value || item[Object.keys(item)[0]]
  }));

  return (
    <div className="grid grid-cols-1 gap-8">

      {/* GRÁFICOS HORIZONTALES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="card">
          <ProjectProgressChart data={data} />
        </div>

        <div className="card">
          <BudgetChart data={data} />
        </div>

        <div className="card">
          <RiskIssuesChart milestones={data.milestones} lang={lang} />
        </div>

      </div>

      {/* TIMELINE + NOTES */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="card">
          <Timeline
            steps={steps}
            lang={lang}
            translations={t.timeline}
            months={t.months}
          />
        </div>

        <div className="card">
          <Notes
            items={data.notes}
            lang={lang}
            translations={t.notes}
          />
        </div>

      </div>

    </div>
  );
}
