"use client";

export default function Notes({ items }: any) {
  const notes = items ?? [
    "Revisión del estado del proyecto.",
    "Se requiere evaluación de presupuesto.",
    "Analizar riesgos antes del siguiente hito.",
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Notas</h2>

      <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
        {notes.map((note: string, i: number) => (
          <li
            key={i}
            className="pl-4 border-l-2 border-blue-600"
          >
            {note}
          </li>
        ))}
      </ul>
    </div>
  );
}

