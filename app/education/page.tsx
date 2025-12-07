"use client";

import Link from "next/link";

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-10">

      {/* 🔙 BOTÓN VOLVER A app/page.tsx */}
      <Link
        href="/"
        className="inline-block mb-6 text-blue-600 font-semibold hover:underline"
      >
        ← Volver
      </Link>

      {/* TITULO PRINCIPAL */}
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Educación</h1>
        <p className="text-gray-600 text-lg">
          Organizaciones dedicadas a promover acceso, aprendizaje y oportunidades.
        </p>
      </section>

      {/* GRID DE INSTITUCIONES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">

        {/* 🟦 UNIVERSIDAD DE BUENOS AIRES — LINK A app/page.tsx */}
        <Link
          href="/page"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center cursor-pointer"
        >
          <img
            src="https://raw.githubusercontent.com/baubassi/ethos_play/main/uba.png"
            alt="UBA Logo"
            className="w-20 h-20 object-contain mx-auto mb-4"
          />

          <h3 className="text-lg font-bold text-gray-800">Universidad de Buenos Aires</h3>
          <p className="text-gray-600 text-sm mt-2">
            Descripción breve de la institución orientada a educación.
          </p>
        </Link>

        {/* 🔸 Institución 2 */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <img
            src="https://raw.githubusercontent.com/baubassi/ethos_play/main/icono.png"
            className="w-20 h-20 object-contain mx-auto mb-4"
            alt="Institución 2"
          />
          <h3 className="text-lg font-bold text-gray-800">Institución 2</h3>
          <p className="text-gray-600 text-sm mt-2">
            Descripción breve de la institución orientada a educación.
          </p>
        </div>

        {/* 🔸 Institución 3 */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <img
            src="https://raw.githubusercontent.com/baubassi/ethos_play/main/icono.png"
            className="w-20 h-20 object-contain mx-auto mb-4"
            alt="Institución 3"
          />
          <h3 className="text-lg font-bold text-gray-800">Institución 3</h3>
          <p className="text-gray-600 text-sm mt-2">
            Descripción breve de la institución orientada a educación.
          </p>
        </div>

        {/* 🔸 Institución 4 */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <img
            src="https://raw.githubusercontent.com/baubassi/ethos_play/main/icono.png"
            className="w-20 h-20 object-contain mx-auto mb-4"
            alt="Institución 4"
          />
          <h3 className="text-lg font-bold text-gray-800">Institución 4</h3>
          <p className="text-gray-600 text-sm mt-2">
            Descripción breve de la institución orientada a educación.
          </p>
        </div>

      </div>
    </div>
  );
}
