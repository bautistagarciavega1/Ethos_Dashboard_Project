"use client";

import { useState } from "react";
import Dashboard from "./components/Dashboard";

export default function HomePage() {
  const [selected, setSelected] = useState<string | null>(null);

  // 🔵 Datos reales del dashboard para cada programa
  const programData: any = {
    becas: {
      progress: { onTrack: 20, delayed: 10, concern: 5 },
      budget: { planned: 30000, spent: 15000, remaining: 15000 },
      risks: { high: 3, medium: 4, low: 6 },
      timeline: [
        { label: "Fase 1", value: 80, color: "#1e3a8a" },
        { label: "Fase 2", value: 40, color: "#facc15" },
        { label: "Fase 3", value: 20, color: "#ef4444" }
      ],
      notes: ["Proceso iniciado", "Pendiente documentación"]
    },

    bibliotecas: {
      progress: { onTrack: 40, delayed: 5, concern: 1 },
      budget: { planned: 50000, spent: 42000, remaining: 8000 },
      risks: { high: 1, medium: 2, low: 9 },
      timeline: [
        { label: "Fase 1", value: 100, color: "#1e3a8a" },
        { label: "Fase 2", value: 60, color: "#facc15" },
        { label: "Fase 3", value: 10, color: "#ef4444" }
      ],
      notes: ["Compra de libros en curso", "Remodelación en proceso"]
    },

    equipamiento: {
      progress: { onTrack: 25, delayed: 15, concern: 10 },
      budget: { planned: 40000, spent: 20000, remaining: 20000 },
      risks: { high: 5, medium: 3, low: 4 },
      timeline: [
        { label: "Fase 1", value: 70, color: "#1e3a8a" },
        { label: "Fase 2", value: 40, color: "#facc15" },
        { label: "Fase 3", value: 20, color: "#ef4444" }
      ],
      notes: ["Instalación de equipos", "Licencias en proceso"]
    },

    investigacion: {
      progress: { onTrack: 60, delayed: 10, concern: 2 },
      budget: { planned: 90000, spent: 30000, remaining: 60000 },
      risks: { high: 2, medium: 1, low: 10 },
      timeline: [
        { label: "Fase 1", value: 90, color: "#1e3a8a" },
        { label: "Fase 2", value: 50, color: "#facc15" },
        { label: "Fase 3", value: 30, color: "#ef4444" }
      ],
      notes: ["Proyecto A avanzado", "Esperando fondos externos"]
    }
  };

  // LISTA DE PROGRAMAS PARA LA UI
  const programs = [
    {
      id: "becas",
      title: "Becas para estudiantes",
      desc: "Apoyo económico para alumnos en situación de vulnerabilidad.",
    },
    {
      id: "bibliotecas",
      title: "Bibliotecas y materiales",
      desc: "Compra de libros, renovación de espacios y acceso a recursos.",
    },
    {
      id: "equipamiento",
      title: "Equipamiento tecnológico",
      desc: "Computadoras, software y aulas digitales para mejorar el aprendizaje.",
    },
    {
      id: "investigacion",
      title: "Fondo de investigación",
      desc: "Apoyo a proyectos científicos en diversas facultades.",
    },
  ];

  // EL DATA REAL DEL PROGRAMA SELECCIONADO
  const selectedProgram = selected ? programData[selected] : null;

  return (
    <div className="min-h-screen p-10 bg-gray-50">

      <h1 className="text-center text-4xl font-bold mb-2 text-blue-900">
        Universidad de Buenos Aires
      </h1>

      <p className="text-center text-gray-600 mb-10">
        Programas y líneas de donación disponibles dentro de la UBA.
      </p>

      {/* CONTENEDOR PRINCIPAL */}
      <div className="w-full">

        {/* SI HAY SELECCIÓN → MOSTRAR BANNER + DASHBOARD */}
        {selected && selectedProgram && (
          <div className="w-full flex flex-col gap-6 animate-fade-in">

            {/* BANNER SUPERIOR */}
            <div className="program-selected-banner flex items-center justify-between">

              <button
                onClick={() => setSelected(null)}
                className="program-button-back"
              >
                ← Volver
              </button>

              <div className="text-center flex-1 px-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {
                    programs.find((p) => p.id === selected)?.title
                  }
                </h2>
                <p className="text-gray-600 mt-1">
                  {
                    programs.find((p) => p.id === selected)?.desc
                  }
                </p>
              </div>

              <button className="program-button-help">
                Ayudar ▼
              </button>
            </div>

            {/* DASHBOARD */}
            <div className="w-full bg-white shadow-xl rounded-2xl p-6">
              <Dashboard data={selectedProgram} />
            </div>
          </div>
        )}

        {/* SIN SELECCIÓN → TARJETAS */}
        {!selected && (
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              {programs.map((p) => (
                <div key={p.id} className="program-card transition-all duration-500">
                  <button className="program-button-red">Ayudar ▼</button>

                  <div className="program-img-placeholder"></div>

                  <h3 className="program-title">{p.title}</h3>

                  <p className="program-desc">{p.desc}</p>

                  <button
                    onClick={() => setSelected(p.id)}
                    className="program-button-info"
                  >
                    Información
                  </button>
                </div>
              ))}

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
