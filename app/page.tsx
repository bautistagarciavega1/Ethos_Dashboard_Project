"use client";

import { useState } from "react";
import Dashboard from "./components/Dashboard";

export default function HomePage() {
  const [selected, setSelected] = useState<string | null>(null);

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

  return (
    <div className="min-h-screen p-10 bg-gray-50">

      <h1 className="text-center text-4xl font-bold mb-2 text-blue-900">
        Universidad de Buenos Aires
      </h1>

      <p className="text-center text-gray-600 mb-10">
        Programas y líneas de donación disponibles dentro de la UBA.
      </p>

      {/* CONTENEDOR DE 2 COLUMNAS */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">

        {/* IZQUIERDA — TARJETAS */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {programs.map((p) => (
              <div
                key={p.id}
                className={`
                  program-card transition-all duration-500
                  ${selected && selected !== p.id ? "opacity-0 scale-90 pointer-events-none" : ""}
                  ${selected === p.id ? "translate-x-[-120px]" : ""}
                `}
              >
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

        {/* DERECHA — DASHBOARD */}
        <div className="relative flex items-start justify-center mt-10">
          {selected ? (
            <div className="p-4 bg-white shadow-xl rounded-2xl animate-fade-in">
              <Dashboard />
            </div>
          ) : (
            <p className="text-gray-400 text-lg text-center mt-32">
              Selecciona un programa para ver su tablero →
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
