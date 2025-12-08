"use client";

import React from "react";

export default function Dashboard({
  data,
  lang,
}: {
  data: any;
  lang: "es" | "en";
}) {
  // TEXTOS DEL DASHBOARD
  const t = {
    es: {
      progreso: "Progreso del proyecto",
      presupuesto: "Presupuesto",
      timeline: "Línea de tiempo",
      meses: "meses",
      notas: "Notas",
      riesgoAlto: "Alto",
      riesgoMedio: "Medio",
      riesgoBajo: "Bajo",
    },
    en: {
      progreso: "Project progress",
      presupuesto: "Budget",
      timeline: "Timeline",
      meses: "months",
      notas: "Notes",
      riesgoAlto: "High",
      riesgoMedio: "Medium",
      riesgoBajo: "Low",
    },
  };

  const text = t[lang];

  return (
    <div className="flex flex-col gap-8">

      {/* -------------------- PROGRESO -------------------- */}
      <div>
        <h3 className="text-xl font-semibold mb-2">{text.progreso}</h3>
        <div className="w-full bg-gray-200 rounded-full h-5">
          <div
            className="bg-blue-600 h-5 rounded-full"
            style={{ width: `${data.progress}%` }}
          ></div>
        </div>
      </div>

      {/* -------------------- PRESUPUESTO -------------------- */}
      <div>
        <h3 className="text-xl font-semibold mb-2">{text.presupuesto}</h3>

        <ul className="ml-4 text-gray-700 leading-7">
          <li>Planned: ${data.budget.planned.toLocaleString()}</li>
          <li>Spent: ${data.budget.spent.toLocaleString()}</li>
          <li>Remaining: ${data.budget.remaining.toLocaleString()}</li>
        </ul>
      </div>

      {/* -------------------- RIESGOS -------------------- */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Risk</h3>

        <ul className="ml-4 leading-7">
          <li className="text-red-600">{text.riesgoAlto}: {data.risks.high}</li>
          <li className="text-yellow-600">{text.riesgoMedio}: {data.risks.medium}</li>
          <li className="text-green-600">{text.riesgoBajo}: {data.risks.low}</li>
        </ul>
      </div>

      {/* -------------------- TIMELINE -------------------- */}
      <div>
        <h3 className="text-xl font-semibold mb-4">{text.timeline}</h3>

        <div className="flex flex-col gap-4">
          {data.timeline.map((step: any, i: number) => (
            <div key={i} className="w-full">
              <div
                className="text-white px-5 py-2 rounded-md font-semibold mb-1"
                style={{
                  backgroundColor: ["#2563EB", "#10B981", "#F59E0B", "#EF4444"][i % 4],
                  width: "fit-content",
                }}
              >
                {step.label} — +{step.months} {text.meses}
              </div>

              <div
                className="h-2 rounded-full"
                style={{
                  width: `${step.months * 12}px`,
                  backgroundColor: ["#2563EB", "#10B981", "#F59E0B", "#EF4444"][i % 4],
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* -------------------- NOTAS -------------------- */}
      <div className="border rounded-xl p-5 bg-gray-50">
        <h3 className="text-xl font-semibold mb-3">{text.notas}</h3>

        <ul className="ml-5 list-disc">
          {data.notes.map((note: string, i: number) => (
            <li key={i} className="text-gray-700">
              {note}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
