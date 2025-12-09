export const getProjectData = (lang: "es" | "en") => ({
  becas: {
    progress: 70,
    budget: { planned: 20000, spent: 14000, remaining: 6000 },
    milestones: [
      { name: lang === "es" ? "Convocatoria abierta" : "Open call", status: "done" },
      { name: lang === "es" ? "Evaluación socioeconómica" : "Socioeconomic review", status: "in-progress" },
      { name: lang === "es" ? "Asignación de becas" : "Scholarship allocation", status: "pending" },
    ],
    timeline: [
      { label: lang === "es" ? "Inicio" : "Start", months: 2 },
      { label: lang === "es" ? "Proceso" : "Process", months: 4 },
      { label: lang === "es" ? "Asignación" : "Allocation", months: 6 },
      { label: lang === "es" ? "Entrega" : "Delivery", months: 8 },
    ],
    notes: lang === "es"
      ? ["Fondos asignados", "Falta entrega final"]
      : ["Funds allocated", "Final delivery pending"],
  },

  bibliotecas: {
    progress: 50,
    budget: { planned: 30000, spent: 12000, remaining: 18000 },
    milestones: [
      { name: lang === "es" ? "Renovación edilicia" : "Building renovation", status: "done" },
      { name: lang === "es" ? "Compra de libros" : "Book purchase", status: "in-progress" },
      { name: lang === "es" ? "Implementación digital" : "Digital implementation", status: "pending" },
    ],
    timeline: [
      { label: lang === "es" ? "Compra libros" : "Book purchase", months: 3 },
      { label: lang === "es" ? "Refacción" : "Refurbishment", months: 5 },
      { label: lang === "es" ? "Digitalización" : "Digitization", months: 7 },
    ],
    notes: lang === "es"
      ? ["En proceso de compra", "Planificación edilicia"]
      : ["Purchasing in progress", "Building planning"],
  },

  equipamiento: {
    progress: 80,
    budget: { planned: 50000, spent: 42000, remaining: 8000 },
    milestones: [
      { name: lang === "es" ? "Compra aprobada" : "Purchase approved", status: "done" },
      { name: lang === "es" ? "Instalación de equipos" : "Equipment installation", status: "in-progress" },
      { name: lang === "es" ? "Capacitación docente" : "Teacher training", status: "pending" },
    ],
    timeline: [
      { label: lang === "es" ? "Compra" : "Purchase", months: 3 },
      { label: lang === "es" ? "Instalación" : "Installation", months: 5 },
      { label: lang === "es" ? "Capacitación" : "Training", months: 7 },
    ],
    notes: lang === "es"
      ? ["Equipos comprados", "Capacitación pendiente"]
      : ["Equipment purchased", "Training pending"],
  },

  investigacion: {
    progress: 40,
    budget: { planned: 60000, spent: 20000, remaining: 40000 },
    milestones: [
      { name: lang === "es" ? "Convocatoria abierta" : "Open call", status: "done" },
      { name: lang === "es" ? "Revisión de proyectos" : "Project review", status: "in-progress" },
      { name: lang === "es" ? "Aprobación final" : "Final approval", status: "pending" },
    ],
    timeline: [
      { label: lang === "es" ? "Convocatoria" : "Call", months: 1 },
      { label: lang === "es" ? "Evaluación" : "Evaluation", months: 3 },
      { label: lang === "es" ? "Aprobación" : "Approval", months: 5 },
    ],
    notes: lang === "es"
      ? ["Proyectos recibidos", "Falta evaluación final"]
      : ["Projects received", "Final evaluation pending"],
  },
});
