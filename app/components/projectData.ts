export const getProjectData = (lang: "es" | "en") => ({
  becas: {
    progress: 40,
    budget: {
      planned: [10000, 8000, 5000],
      spent: [6000, 4000, 2000],
      remaining: [4000, 4000, 3000],
    },

    milestones: [
      { name: lang === "es" ? "Convocatoria abierta" : "Open call", status: "done" },
      { name: lang === "es" ? "Evaluación socioeconómica" : "Socioeconomic assessment", status: "in-progress" },
      { name: lang === "es" ? "Asignación de becas" : "Scholarship allocation", status: "pending" },
      { name: lang === "es" ? "Notificación a candidatos" : "Candidate notification", status: "pending" },
      { name: lang === "es" ? "Entrega de becas" : "Scholarship delivery", status: "pending" },
    ],

    notes: lang === "es"
      ? [
          "Proceso de inscripción avanzado",
          "Evaluación socioeconómica en curso",
          "Aprobación final estimada en 3 semanas",
        ]
      : [
          "Enrollment process advanced",
          "Socioeconomic assessment in progress",
          "Final approval expected in 3 weeks",
        ],

    timeline: [
      { label: lang === "es" ? "Inicio" : "Start", months: 2 },
      { label: lang === "es" ? "Evaluación" : "Evaluation", months: 4 },
      { label: lang === "es" ? "Asignación" : "Allocation", months: 6 },
      { label: lang === "es" ? "Entrega" : "Delivery", months: 8 },
      { label: lang === "es" ? "Cierre" : "Closure", months: 10 },
    ],
  },

  bibliotecas: {
    progress: 55,
    budget: {
      planned: [15000, 12000, 6000],
      spent: [8000, 6000, 3000],
      remaining: [7000, 6000, 3000],
    },

    milestones: [
      { name: lang === "es" ? "Renovación edilicia" : "Building renovation", status: "done" },
      { name: lang === "es" ? "Compra de libros" : "Book acquisition", status: "in-progress" },
      { name: lang === "es" ? "Implementación digital" : "Digital implementation", status: "pending" },
      { name: lang === "es" ? "Capacitación en nuevo sistema" : "Training on new system", status: "pending" },
      { name: lang === "es" ? "Apertura al público" : "Public opening", status: "pending" },
    ],

    notes: lang === "es"
      ? [
          "Renovación del edificio completada",
          "Compra de libros en proceso",
          "Nuevo sistema digital implementado",
        ]
      : [
          "Building renovation completed",
          "Book purchasing in progress",
          "New digital system implemented",
        ],

    timeline: [
      { label: lang === "es" ? "Planificación" : "Planning", months: 1 },
      { label: lang === "es" ? "Renovación" : "Renovation", months: 3 },
      { label: lang === "es" ? "Compra libros" : "Book purchase", months: 7 },
      { label: lang === "es" ? "Implementación digital" : "Digital implementation", months: 9 },
      { label: lang === "es" ? "Cierre" : "Closure", months: 11 },
    ],
  },

  equipamiento: {
    progress: 70,
    budget: {
      planned: [20000, 15000, 8000],
      spent: [16000, 12000, 6000],
      remaining: [4000, 3000, 2000],
    },

    milestones: [
      { name: lang === "es" ? "Compra aprobada" : "Purchase approved", status: "done" },
      { name: lang === "es" ? "Instalación de equipos" : "Equipment installation", status: "in-progress" },
      { name: lang === "es" ? "Capacitación docente" : "Teacher training", status: "pending" },
      { name: lang === "es" ? "Pruebas de funcionamiento" : "Functionality tests", status: "pending" },
      { name: lang === "es" ? "Despliegue final" : "Final rollout", status: "pending" },
    ],

    notes: lang === "es"
      ? [
          "Computadoras entregadas a Facultades",
          "Instalación de software completada",
          "Capacitación docente en curso",
        ]
      : [
          "Computers delivered to faculties",
          "Software installation completed",
          "Teacher training in progress",
        ],

    timeline: [
      { label: lang === "es" ? "Compra" : "Purchase", months: 3 },
      { label: lang === "es" ? "Instalación" : "Installation", months: 5 },
      { label: lang === "es" ? "Capacitación" : "Training", months: 6 },
      { label: lang === "es" ? "Despliegue" : "Deployment", months: 9 },
      { label: lang === "es" ? "Cierre" : "Closure", months: 12 },
    ],
  },

  investigacion: {
    progress: 30,
    budget: {
      planned: [25000, 18000, 9000],
      spent: [10000, 7000, 3000],
      remaining: [15000, 11000, 6000],
    },

    milestones: [
      { name: lang === "es" ? "Convocatoria abierta" : "Open call", status: "done" },
      { name: lang === "es" ? "Revisión de proyectos" : "Project review", status: "in-progress" },
      { name: lang === "es" ? "Aprobación final" : "Final approval", status: "pending" },
      { name: lang === "es" ? "Entrega de fondos" : "Funds delivery", status: "pending" },
      { name: lang === "es" ? "Informe final de resultados" : "Final results report", status: "pending" },
    ],

    notes: lang === "es"
      ? [
          "Se financiaron 12 proyectos",
          "Laboratorios actualizando instrumental",
          "Convocatoria nueva abre en junio",
        ]
      : [
          "12 projects funded",
          "Laboratories updating equipment",
          "New call opens in June",
        ],

    timeline: [
      { label: lang === "es" ? "Convocatoria" : "Call", months: 1 },
      { label: lang === "es" ? "Revisión" : "Review", months: 2 },
      { label: lang === "es" ? "Evaluación" : "Evaluation", months: 5 },
      { label: lang === "es" ? "Ejecución" : "Execution", months: 7 },
      { label: lang === "es" ? "Informe final" : "Final report", months: 10 },
    ],
  },
});
