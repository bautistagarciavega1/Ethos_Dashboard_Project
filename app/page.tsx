const projectData: any = {
  becas: {
    progress: { onTrack: 25, delayed: 15, concern: 10 },
    budget: { planned: 30000, spent: 12000, remaining: 18000 },
    risks: { high: 3, medium: 5, low: 7 },
    timeline: [
      { label: "Analysis", months: 1 },
      { label: "Design", months: 2 },
      { label: "Development", months: 3 },
      { label: "Testing", months: 1 },
      { label: "Implement", months: 2 },
    ],
    notes: [
      "Revisión de becarios aprobada.",
      "Fondos asignados correctamente.",
      "Sin riesgos significativos.",
    ],
  },

  bibliotecas: {
    progress: { onTrack: 40, delayed: 10, concern: 5 },
    budget: { planned: 50000, spent: 30000, remaining: 20000 },
    risks: { high: 1, medium: 3, low: 10 },
    timeline: [
      { label: "Analysis", months: 1 },
      { label: "Design", months: 1 },
      { label: "Development", months: 2 },
      { label: "Testing", months: 1 },
      { label: "Implement", months: 3 },
    ],
    notes: [
      "Avance estable.",
      "Pendiente compra de libros.",
      "Sin bloqueos críticos.",
    ],
  },

  equipamiento: {
    progress: { onTrack: 20, delayed: 20, concern: 10 },
    budget: { planned: 80000, spent: 50000, remaining: 30000 },
    risks: { high: 4, medium: 6, low: 5 },
    timeline: [
      { label: "Analysis", months: 2 },
      { label: "Design", months: 2 },
      { label: "Development", months: 3 },
      { label: "Testing", months: 2 },
      { label: "Implement", months: 3 },
    ],
    notes: [
      "Compra de notebooks en proceso.",
      "Falta aprobación de proveedores.",
      "Riesgo de demoras logísticas.",
    ],
  },

  investigacion: {
    progress: { onTrack: 45, delayed: 5, concern: 3 },
    budget: { planned: 60000, spent: 20000, remaining: 40000 },
    risks: { high: 1, medium: 2, low: 8 },
    timeline: [
      { label: "Analysis", months: 1 },
      { label: "Design", months: 2 },
      { label: "Development", months: 3 },
      { label: "Testing", months: 1 },
      { label: "Implement", months: 2 },
    ],
    notes: [
      "Fondos bien asignados.",
      "Sin bloqueos.",
      "Actualización mensual recomendada.",
    ],
  },
};
