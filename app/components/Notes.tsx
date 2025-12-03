"use client";

export default function Notes({ items }: any) {

  // Datos dinámicos o fallback
  const notes = items ?? [
    "Revisión del estado del proyecto.",
    "Se requiere evaluación de presupuesto.",
    "Analizar riesgos antes del siguiente hito."
  ];

  return (
    <div>
      <h2>Notas</h2>
      <ul className="notes-list">
        {notes.map((n: string, i: number) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
}
