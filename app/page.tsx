const projectData: any = {
  becas: {
    progress: 70,
    budget: { planned: 20000, spent: 14000, remaining: 6000 },

    // ✅ HITOS AGREGADOS
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

    // ✅ HITOS AGREGADOS
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

    // ✅ HITOS AGREGADOS
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

    // ✅ HITOS AGREGADOS
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
