"use client";

import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";

// ----------------------------
// Definimos los programas como un array tipado
// ----------------------------
const programs = ["becas", "bibliotecas", "equipamiento", "investigacion"] as const;
type ProgramID = typeof programs[number];

export default function HomePage() {
  // ----------------------------
  // IDIOMA (persistente)
  // ----------------------------
  const [lang, setLang] = useState<"es" | "en">("en");

  // ❤️ AGREGAR ESTO
  useEffect(() => {
    const saved = localStorage.getItem("ethos-lang") as "es" | "en" | null;
    if (saved) setLang(saved);
  }, []);


  const changeLang = (newLang: "es" | "en") => {
    setLang(newLang);
    localStorage.setItem("ethos-lang", newLang);
  };

  // ----------------------------
  // PROGRAMA SELECCIONADO
  // ----------------------------
  const [selected, setSelected] = useState<ProgramID | null>(null);

  // ----------------------------
  // TEXTOS MULTI-IDIOMA
  // ----------------------------
  const texts = {
    es: {
      volver: "← Volver",
      titulo: "Universidad de Buenos Aires",
      subtitulo: "Programas y líneas de donación disponibles dentro de la UBA.",
      ayudar: "Ayudar ▼",
      informacion: "Información",
      programs: {
        becas: {
          title: "Becas para estudiantes",
          desc: "Apoyo económico para alumnos en situación de vulnerabilidad.",
        },
        bibliotecas: {
          title: "Bibliotecas y materiales",
          desc: "Compra de libros, renovación de espacios y acceso a recursos.",
        },
        equipamiento: {
          title: "Equipamiento tecnológico",
          desc: "Computadoras, software y aulas digitales.",
        },
        investigacion: {
          title: "Fondo de investigación",
          desc: "Apoyo a proyectos científicos en diversas facultades.",
        },
      },
    },

    en: {
      volver: "← Back",
      titulo: "University of Buenos Aires",
      subtitulo: "Donation programs and funding opportunities inside UBA.",
      ayudar: "Donate ▼",
      informacion: "Information",
      programs: {
        becas: {
          title: "Student Scholarships",
          desc: "Financial support for vulnerable students.",
        },
        bibliotecas: {
          title: "Libraries & Materials",
          desc: "Books, renovated spaces, and access to resources.",
        },
        equipamiento: {
          title: "Technological Equipment",
          desc: "Computers, software, and digital classrooms.",
        },
        investigacion: {
          title: "Research Fund",
          desc: "Support for scientific research.",
        },
      },
    },
  };

  // ----------------------------
  // DATA DEL DASHBOARD 
  // ----------------------------
  const projectData: Record<ProgramID, any> = {
    becas: {
      progress: 70,
      budget: { planned: 20000, spent: 14000, remaining: 6000 },
      milestones: [
        { name: "Convocatoria abierta", status: "done" },
        { name: "Evaluación socioeconómica", status: "in-progress" },
        { name: "Asignación de becas", status: "pending" },
      ],
      timeline: [
        { label: "Inicio", months: 2 },
        { label: "Proceso", months: 4 },
        { label: "Asignación", months: 6 },
        { label: "Entrega", months: 8 },
      ],
      notes: ["Fondos asignados", "Falta entrega final"],
    },

    bibliotecas: {
      progress: 50,
      budget: { planned: 30000, spent: 12000, remaining: 18000 },
      milestones: [
        { name: "Renovación edilicia", status: "done" },
        { name: "Compra de libros", status: "in-progress" },
        { name: "Implementación digital", status: "pending" },
      ],
      timeline: [
        { label: "Compra libros", months: 3 },
        { label: "Refacción", months: 5 },
        { label: "Digitalización", months: 7 },
      ],
      notes: ["En proceso de compra", "Planificación edilicia"],
    },

    equipamiento: {
      progress: 80,
      budget: { planned: 50000, spent: 42000, remaining: 8000 },
      milestones: [
        { name: "Compra aprobada", status: "done" },
        { name: "Instalación de equipos", status: "in-progress" },
        { name: "Capacitación docente", status: "pending" },
      ],
      timeline: [
        { label: "Compra", months: 3 },
        { label: "Instalación", months: 5 },
        { label: "Capacitación", months: 7 },
      ],
      notes: ["Equipos comprados", "Capacitación pendiente"],
    },

    investigacion: {
      progress: 40,
      budget: { planned: 60000, spent: 20000, remaining: 40000 },
      milestones: [
        { name: "Convocatoria abierta", status: "done" },
        { name: "Revisión de proyectos", status: "in-progress" },
        { name: "Aprobación final", status: "pending" },
      ],
      timeline: [
        { label: "Convocatoria", months: 1 },
        { label: "Evaluación", months: 3 },
        { label: "Aprobación", months: 5 },
      ],
      notes: ["Proyectos recibidos", "Falta evaluación final"],
    },
  };

  return (
    <div className="min-h-screen p-6 sm:p-10 bg-gray-50">

      {/* SELECTOR DE IDIOMA - alineado a la derecha, NO fijo */}
      <div className="w-full flex justify-end mb-4">
        <div className="flex gap-3">
          <button onClick={() => changeLang("es")} className="flag-icon">🇪🇸</button>
          <button onClick={() => changeLang("en")} className="flag-icon">🇺🇸</button>
        </div>
      </div>

      {/* BOTÓN VOLVER */}
      {!selected && (
        <button onClick={() => window.history.back()} className="back-button mb-6">
          {texts[lang].volver}
        </button>
      )}

      {/* TITULOS */}
      <h1 className="text-center text-4xl font-bold text-blue-900 mb-3">
        {texts[lang].titulo}
      </h1>
      <p className="text-center text-gray-600 mb-10">{texts[lang].subtitulo}</p>

      {/* CONTENIDO */}
      {selected ? (
        <div className="flex flex-col gap-6">

          {/* Banner superior */}
          <div className="program-selected-banner flex flex-col sm:flex-row items-center justify-between gap-4">

            <button onClick={() => setSelected(null)} className="program-button-back">
              {texts[lang].volver}
            </button>

            {/* Título del programa (100% tipado correcto) */}
            <div className="text-center flex-1 px-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                {texts[lang].programs[selected].title}
              </h2>

              <p className="text-gray-600 mt-1">
                {texts[lang].programs[selected].desc}
              </p>
            </div>

            <button className="program-button-help">{texts[lang].ayudar}</button>
          </div>

          {/* Dashboard */}
          <div className="bg-white shadow-xl rounded-2xl p-6">
            <Dashboard
              data={projectData[selected]}
              lang={lang}
              programName={texts[lang].programs[selected].title}
            />
          </div>

        </div>
      ) : (
        /* TARJETAS */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {programs.map((id) => (
            <div key={id} className="program-card">

              <button className="program-button-red">{texts[lang].ayudar}</button>

              <img
                src={`https://img.icons8.com/ios-filled/100/1A2A6C/${
                  id === "becas"
                    ? "graduation-cap"
                    : id === "bibliotecas"
                    ? "books"
                    : id === "equipamiento"
                    ? "laptop"
                    : "microscope"
                }.png`}
                className="w-full h-32 object-contain my-4"
                alt={texts[lang].programs[id].title}
              />

              <h3 className="program-title">{texts[lang].programs[id].title}</h3>
              <p className="program-desc">{texts[lang].programs[id].desc}</p>

              <button
                onClick={() => setSelected(id)}
                className="program-button-info"
              >
                {texts[lang].informacion}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
