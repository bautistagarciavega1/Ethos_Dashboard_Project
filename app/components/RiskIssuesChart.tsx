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

      {milestones.length === 0 ? (
        <p className="text-gray-500">
          {lang === "es"
            ? "No hay hitos definidos para este proyecto."
            : "No milestones defined for this project."}
        </p>
      ) : (
        <ul className="space-y-3">
          {milestones.map((m, i) => (
            <li key={i} className="flex items-center gap-3">
              <span
                className={
                  m.status === "done"
                    ? "text-green-600"
                    : m.status === "in-progress"
                    ? "text-yellow-500"
                    : "text-gray-400"
                }
              >
                ●
              </span>

              <span className="font-medium">{m.name}</span>

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
      )}
    </div>
  );
}
