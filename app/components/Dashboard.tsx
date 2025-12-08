"use client";

import Timeline from "./Timeline";
import Notes from "./Notes";
import { translations } from "../translations";

interface DashboardProps {
  data: any;
  lang: "es" | "en";
}

export default function Dashboard({ data, lang }: DashboardProps) {
  const t = translations[lang];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* TIMELINE */}
      <div className="card">
        <Timeline
          steps={data.timeline}
          lang={lang}
          translations={t.timeline}
          months={t.months}
        />
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
