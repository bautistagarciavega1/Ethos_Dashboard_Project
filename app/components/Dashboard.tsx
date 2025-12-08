"use client";

import { useState } from "react";
import Timeline from "./Timeline";
import texts from "../texts";
import Notes from "./Notes";

interface DashboardProps {
  data: any;
  lang: "es" | "en";
}

export default function Dashboard({ data, lang }: DashboardProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* TIMELINE */}
      <div className="card">
        <Timeline
          points={data.timeline}                    // ✅ CORRECTO
          lang={lang}                               // idioma
          translations={texts[lang].timeline}       // traducciones
        />
      </div>

      {/* NOTES */}
      <div className="card">
        <Notes
          items={data.notes}
          lang={lang}
          translations={texts[lang].notes}
        />
      </div>

    </div>
  );
}
