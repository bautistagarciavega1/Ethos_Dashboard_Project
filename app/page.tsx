"use client";

import { useState } from "react";
import Dashboard from "./components/Dashboard";

export default function HomePage() {
  const [selected, setSelected] = useState<string | null>(null);

  // 🔷 DATOS REALES DEL DASHBOARD POR PROGRAMA
  const projectData: any = {
    becas: {
      progress: 70,
      budget: { planned: 20000, spent: 14000, remaining: 6000 },
      risks: { high: 1, medium: 3, low: 4 },
      timeline: [
        { label: "Inicio", percent: 100 },
        { label: "Proceso", percent: 70 },
        { label: "Asignación", percent: 40 },
        { label: "Entrega", percent: 20 },
      ],
      notes: ["Fondos asignados", "Falta entrega final"],
    },

    bibliotecas: {
      progress: 50,
      budget: { planned: 30000, spent: 12000, remaining: 18000 },
      risks: { high: 2, medium: 1, low: 3 },
      timeline: [
        { label: "Compra libros", percent: 60 },
        { label: "Refacción", percent: 40 },
      ],
      notes: ["En proceso de compra", "Planificación edilicia"],
    },

    equipamiento: {
      progress: 80,
      budget: { planned: 50000, spent: 42000, remaining: 8000 },
      risks: { high: 0, medium: 2, low: 5 },
      timeline: [
        { label: "Compra", percent: 90 },
        { label: "Instalación", percent: 70 },
        { label: "Capacitación", percent: 40 },
      ],
      notes: ["Equipos comprados", "Capacitación pendiente"],
    },

    investigacion: {
      progress: 40,
      budget: { planned: 60000, spent: 20000, remaining: 40000 },
      risks: { high: 3, medium: 2, low: 2 },
      timeline: [
        { label: "Convocatoria", percent: 100 },
        { label: "Evaluación", percent: 30 },
      ],
      notes: ["Proyectos recibidos", "Falta evaluación final"],
    },
  };

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

  const selectedProgram = programs.find((p) => p.id === selected);

  return (
    <div className="min-h-screen p-10 bg-gray-50">

      <h1 className="text-center text-4xl font-bold mb-2 text-blue-900">
        Universidad de Buenos Aires
      </h1>

      <p className="text-center text-gray-600 mb-10">
        Programas y líneas de donación disponibles dentro de la UBA.
      </p>

      <div className="w-full">

        {/* 🔷 SI HAY SELECCIÓN — MOSTRAR PANEL + DASHBOARD */}
        {selected && (
          <div className="w-full flex flex-col gap-6 animate-fade-in">

            {/* BANNER SUPERIOR */}
            <div className="program-selected-banner flex items-center justify-between">

              {/* VOLVER */}
              <button
                onClick={() => setSelected(null)}
                className="program-button-back"
              >
                ← Volver
              </button>

              {/* TÍTULO */}
              <div className="text-center flex-1 px-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {selectedProgram?.title}
                </h2>
                <p className="text-gray-600 mt-1">
                  {selectedProgram?.desc}
                </p>
              </div>

              {/* AYUDAR */}
              <button className="program-button-help">
                Ayudar ▼
              </button>
            </div>

            {/* DASHBOARD */}
            <div className="w-full bg-white shadow-xl rounded-2xl p-6">
              <Dashboard data={projectData[selected]} />
            </div>
          </div>
        )}

        {/* 🔷 SI NO HAY SELECCIÓN — MOSTRAR TARJETAS */}
        {!selected && (
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              {programs.map((p) => (
                <div key={p.id} className="program-card">
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
