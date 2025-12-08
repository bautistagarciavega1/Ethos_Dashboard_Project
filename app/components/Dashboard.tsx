"use client";

import Timeline from "./Timeline";
import Notes from "./Notes";
import { translations } from "../translations"; // ✅ IMPORT CORRECTO

interface DashboardProps {
  data: any;
  lang: "es" | "en";
}

export default function Dashboard({ data, lang }: DashboardProps) {
  const t = translations[lang]; // acceso rápido a textos

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* TIMELINE */}
      <div className="card">
        <Timeline
          steps={data.timeline}               // timeline crudo
          lang={lang}
          translations={t.timeline}           // traducciones
          months={t.months}                   // traducción de "meses"
        />
      </div>

      {/* NOTAS */}
      <div className="card">
        <Notes
          items={data.notes}
          lang={lang}
          translations={t.notes}              // traducciones
        />
      </div>

    </div>
  );
}
"use client";

import Timeline from "./Timeline";
import Notes from "./Notes";
import { translations } from "../translations"; // ✅ IMPORT CORRECTO

interface DashboardProps {
  data: any;
  lang: "es" | "en";
}

export default function Dashboard({ data, lang }: DashboardProps) {
  const t = translations[lang]; // acceso rápido a textos

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* TIMELINE */}
      <div className="card">
        <Timeline
          steps={data.timeline}               // timeline crudo
          lang={lang}
          translations={t.timeline}           // traducciones
          months={t.months}                   // traducción de "meses"
        />
      </div>

      {/* NOTAS */}
      <div className="card">
        <Notes
          items={data.notes}
          lang={lang}
          translations={t.notes}              // traducciones
        />
      </div>

    </div>
  );
}
