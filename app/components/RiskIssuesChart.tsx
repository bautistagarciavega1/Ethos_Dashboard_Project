"use client";

interface Milestone {
  name: string;
  status: "done" | "in-progress" | "pending";
}

interface RiskIssuesChartProps {
  milestones: Milestone[];
  lang: "es" | "en";
}

export default function RiskIssuesChart({ milestones, lang }: RiskIssuesChartProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        {lang === "es" ? "Hitos del proyecto" : "Project Milestones"}
      </h2>

      {(!milestones || milestones.length === 0) && (
        <p className="text-gray-500">
          {lang === "es" ? "No hay hitos definidos para este proyecto." : "No milestones defined for this project."}
        </p>
      )}

      <ul className="space-y-4">
        {milestones.map((m, i) => (
          <li key={i} className="flex items-center gap-3">

            {/* Indicador de color */}
            <span
              className={
                m.status === "done"
                  ? "text-green-600"
                  : m.status === "in-progress"
                  ? "text-yellow-500"
                  : "text-gray-500"
              }
            >
              ●
            </span>

            {/* Nombre del hito */}
            <span className="font-medium">{m.name}</span>

            {/* Estado traducido */}
            <span className="text-sm text-gray-500">
              {m.status === "done"
                ? lang === "es" ? "Completado" : "Completed"
                : m.status === "in-progress"
                ? lang === "es" ? "En progreso" : "In progress"
                : lang === "es" ? "Pendiente" : "Pending"}
            </span>

          </li>
        ))}
      </ul>
    </div>
  );
}
