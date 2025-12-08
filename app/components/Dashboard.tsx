"use client";

import Timeline from "./Timeline";
import Notes from "./Notes";
import ProjectProgressChart from "./ProjectProgress";
import BudgetChart from "./BudgetChart";
import RiskIssuesChart from "./RiskIssuesChart";
import { translations } from "../translations";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface DashboardProps {
  data: any;
  lang: "es" | "en";
  programName?: string; // ← nombre del programa para mostrar en PDF
}

export default function Dashboard({ data, lang, programName }: DashboardProps) {
  const t = translations[lang];

  // -----------------------------
  // 📄 DESCARGAR PDF DEL DASHBOARD
  // -----------------------------
  const handleDownloadPDF = async () => {
    const element = document.getElementById("dashboard-content");

    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.setFontSize(18);
    pdf.text(programName || "Proyecto", 10, 15);

    pdf.addImage(imgData, "PNG", 0, 25, pdfWidth, imgHeight);

    pdf.save(`${programName || "dashboard"}.pdf`);
  };

  // -----------------------------
  // TIMELINE NORMALIZADO
  // -----------------------------
  const steps = data.timeline.map((item: any) => ({
    label: item.label || item.title || Object.keys(item)[0],
    months: item.months || item.value || item[Object.keys(item)[0]],
  }));

  return (
    <div className="w-full">
      
      {/* ---------------- BOTÓN PDF ---------------- */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleDownloadPDF}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
        >
          📄 Descargar PDF
        </button>
      </div>

      {/* ---------------- CONTENIDO A CAPTURAR ---------------- */}
      <div id="dashboard-content">

        {/* GRÁFICOS SUPERIORES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

          <div className="card">
            <ProjectProgressChart data={data} lang={lang} />
          </div>

          <div className="card">
            <BudgetChart data={data} lang={lang} />
          </div>

          <div className="card">
            <RiskIssuesChart
              milestones={Array.isArray(data.milestones) ? data.milestones : []}
              lang={lang}
            />
          </div>

        </div>

        {/* TIMELINE + NOTES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="card">
            <Timeline
              steps={steps}
              lang={lang}
              translations={t.timeline}
              months={t.months}
            />
          </div>

          <div className="card">
            <Notes items={data.notes} lang={lang} translations={t.notes} />
          </div>

        </div>
      </div>
    </div>
  );
}
