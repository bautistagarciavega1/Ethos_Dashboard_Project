"use client";

import { useState } from "react";
import Dashboard from "./components/Dashboard";

export default function HomePage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [lang, setLang] = useState<"es" | "en">("es"); // 🌍 idioma seleccionado

  // 🌍 TEXTOS EN ESPAÑOL E INGLÉS
  const texts = {
    es: {
      title: "Universidad de Buenos Aires",
      subtitle: "Programas y líneas de donación disponibles dentro de la UBA.",
      back: "← Volver",
      info: "Información",
      help: "Ayudar ▼",
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
          desc: "Computadoras, software y aulas digitales para mejorar el aprendizaje.",
        },
        investigacion: {
          title: "Fondo de investigación",
          desc: "Apoyo a proyectos científicos en diversas facultades.",
        },
      },
    },

    en: {
      title: "University of Buenos Aires",
      subtitle: "Donation programs and funding opportunities within UBA.",
      back: "← Back",
      info: "More Info",
      help: "Donate ▼",
      programs: {
        becas: {
          title: "Student Scholarships",
          desc: "Financial aid for students in vulnerable situations.",
        },
        bibliotecas: {
          title: "Libraries and Materials",
          desc: "Book purchases, space renovations and access to resources.",
        },
        equipamiento: {
          title: "Technology Equipment",
          desc: "Computers, software and digital classrooms for better learning.",
        },
        investigacion: {
          title: "Research Fund",
          desc: "Support for scientific projects across faculties.",
        },
      },
    },
  };

  // DATOS DE LOS PROGRAMAS (estos no cambian por idioma)
  const projectData: any = {
    becas: {
      progress: 70,
      budget: { planned: 20000, spent: 14000, remaining: 6000 },
      risks: { high: 1, medium: 3, low: 4 },
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
      risks: { high: 2, medium: 1, low: 3 },
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
      risks: { high: 0, medium: 2, low: 5 },
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
      risks: { high: 3, medium: 2, low: 2 },
      timeline: [
        { label: "Convocatoria", months: 1 },
        { label: "Evaluación", months: 3 },
        { label: "Aprobación", months: 5 },
      ],
      notes: ["Proyectos recibidos", "Falta evaluación final"],
    },
  };

  // PROGRAMAS
  const programs = [
    { id: "becas", img: "https://img.icons8.com/ios-filled/100/1A2A6C/graduation-cap.png" },
    { id: "bibliotecas", img: "https://img.icons8.com/ios-filled/100/1A2A6C/books.png" },
    { id: "equipamiento", img: "https://img.icons8.com/ios-filled/100/1A2A6C/laptop.png" },
    { id: "investigacion", img: "https://img.icons8.com/ios-filled/100/1A2A6C/microscope.png" },
  ];

  const selectedProgram = selected ? programs.find((p) => p.id === selected) : null;

  return (
    <div className="min-h-screen p-10 bg-gray-50">

      {/* 🌍 SELECTOR DE IDIOMA */}
      <div className="flex justify-end gap-3 mb-6">
        <button onClick={() => setLang("es")}>
          <img src="https://flagsapi.com/ES/flat/32.png" className="w-8" alt="ES" />
        </button>
        <button onClick={() => setLang("en")}>
          <img src="https://flagsapi.com/US/flat/32.png" className="w-8" alt="EN" />
        </button>
      </div>

      {/* BOTÓN VOLVER */}
      {!selected && (
        <button onClick={() => window.history.back()} className="back-button mb-4">
          {texts[lang].back}
        </button>
      )}

      {/* TITULOS */}
      <h1 className="text-center text-4xl font-bold mb-2 text-blue-900">
        {texts[lang].title}
      </h1>

      <p className="text-center text-gray-600 mb-10">{texts[lang].subtitle}</p>

      {/* SI HAY PROGRAMA SELECCIONADO */}
      {selected && (
        <div className="flex flex-col gap-6 animate-fade-in">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-5 rounded-xl shadow">
            <button onClick={() => setSelected(null)} className="program-button-back">
              {texts[lang].back}
            </button>

            <div className="text-center flex-1 px-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                {texts[lang].programs[selected].title}
              </h2>
              <p className="text-gray-600 mt-1">{texts[lang].programs[selected].desc}</p>
            </div>

            <button className="program-button-help">{texts[lang].help}</button>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-6">
            <Dashboard data={projectData[selected]} />
          </div>
        </div>
      )}

      {/* TARJETAS DE PROGRAMAS */}
      {!selected && (
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {programs.map((p) => (
              <div key={p.id} className="program-card">
                <button className="program-button-red">{texts[lang].help}</button>

                <img src={p.img} className="w-full h-32 object-contain mb-4 mt-2" />

                <h3 className="program-title">{texts[lang].programs[p.id].title}</h3>
                <p className="program-desc">{texts[lang].programs[p.id].desc}</p>

                <button onClick={() => setSelected(p.id)} className="program-button-info">
                  {texts[lang].info}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
