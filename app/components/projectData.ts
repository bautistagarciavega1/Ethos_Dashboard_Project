export const projectData = {
  becas: {
    progress: 40,
    budget: {
      planned: [10000, 8000, 5000],
      spent: [6000, 4000, 2000],
      remaining: [4000, 4000, 3000],
    },

    // 🔵 NUEVOS HITOS
    milestones: [
      { name: "Convocatoria abierta", status: "done" },
      { name: "Evaluación socioeconómica", status: "in-progress" },
      { name: "Asignación de becas", status: "pending" },
    ],

    notes: [
      "Proceso de inscripción avanzado",
      "Evaluación socioeconómica en curso",
      "Aprobación final estimada en 3 semanas",
    ],

    timeline: [
      { label: "Inicio", months: 2 },
      { label: "Evaluación", months: 4 },
      { label: "Asignación", months: 6 },
      { label: "Entrega", months: 8 },
      { label: "Cierre", months: 10 },
    ],
  },

  bibliotecas: {
    progress: 55,
    budget: {
      planned: [15000, 12000, 6000],
      spent: [8000, 6000, 3000],
      remaining: [7000, 6000, 3000],
    },

    // 🔵 NUEVOS HITOS
    milestones: [
      { name: "Renovación edilicia", status: "done" },
      { name: "Compra de libros", status: "in-progress" },
      { name: "Implementación digital", status: "pending" },
    ],

    notes: [
      "Renovación del edificio completada",
      "Compra de libros en proceso",
      "Nuevo sistema digital implementado",
    ],

    timeline: [
      { label: "Planificación", months: 1 },
      { label: "Renovación", months: 3 },
      { label: "Compra libros", months: 7 },
      { label: "Implementación digital", months: 9 },
      { label: "Cierre", months: 11 },
    ],
  },

  equipamiento: {
    progress: 70,
    budget: {
      planned: [20000, 15000, 8000],
      spent: [16000, 12000, 6000],
      remaining: [4000, 3000, 2000],
    },

    // 🔵 NUEVOS HITOS
    milestones: [
      { name: "Compra aprobada", status: "done" },
      { name: "Instalación de equipos", status: "in-progress" },
      { name: "Capacitación docente", status: "pending" },
    ],

    notes: [
      "Computadoras entregadas a Facultades",
      "Instalación de software completada",
      "Capacitación docente en curso",
    ],

    timeline: [
      { label: "Compra", months: 3 },
      { label: "Instalación", months: 5 },
      { label: "Capacitación", months: 6 },
      { label: "Despliegue", months: 9 },
      { label: "Cierre", months: 12 },
    ],
  },

  investigacion: {
    progress: 30,
    budget: {
      planned: [25000, 18000, 9000],
      spent: [10000, 7000, 3000],
      remaining: [15000, 11000, 6000],
    },

    // 🔵 NUEVOS HITOS
    milestones: [
      { name: "Convocatoria abierta", status: "done" },
      { name: "Revisión de proyectos", status: "in-progress" },
      { name: "Aprobación final", status: "pending" },
    ],

    notes: [
      "Se financiaron 12 proyectos",
      "Laboratorios actualizando instrumental",
      "Convocatoria nueva abre en junio",
    ],

    timeline: [
      { label: "Convocatoria", months: 1 },
      { label: "Revisión", months: 2 },
      { label: "Evaluación", months: 5 },
      { label: "Ejecución", months: 7 },
      { label: "Informe final", months: 10 },
    ],
  },
};
