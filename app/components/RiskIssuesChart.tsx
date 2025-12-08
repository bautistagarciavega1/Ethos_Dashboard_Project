"use client";

interface Milestone {
  name: string;
  status: "done" | "in-progress" | "pending";
}

interface RiskIssuesChartProps {
  milestones: Milestone[];
  lang: "es" | "en";
}

const statusIcons = {
  done: "✔️",
  "in-progress": "🟡",
  pending: "⏳",
};

const statusLabels = {
  es: {
    title: "Hitos del Proyecto",
    done: "Completado",
    "in-progress": "En progreso",
    pending: "Pendiente",
  },
  en: {
    title: "Project Milestones",
    done: "Completed",
    "in-progress": "In progress",
    pending: "Pending",
  },
};

export default function RiskIssuesChart({ milestones, lang }: RiskIssuesChartProps) {
  const t = statusLabels[lang];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{t.title}</h2>

      <ul className="space-y-4">
        {milestones.map((m, i) => (
          <li key={i} className="flex items-center gap-3">
            <span className="text-2xl">{statusIcons[m.status]}</span>

            <div>
              <div className="font-semibold">{m.name}</div>
              <div className="text-gray-600 text-sm">{t[m.status]}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
