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
  programName?: string;
}

export default function Dashboard({ data, lang, programName }: DashboardProps) {
  const t = translations[lang];

  const handleDownloadPDF = async () => {
    const element = document.getElementById("dashboard-content");
    if (!element) return;

    // 1) Añadir padding solo para PDF
    element.classList.add("pdf-export-padding");

    // Esperar que el DOM lo procese
    await new Promise((resolve) => setTimeout(resolve, 150));

    // 2) Captura segura
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      logging: false,
    });

    // Quitar padding
    element.classList.remove("pdf-export-padding");

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    // LOGO — asegurarse que existe el archivo correcto
    const logoWidth = 140;
    const logoHeight = 40;
    const logoX = (pdfWidth - logoWidth) / 2;

    try {
      pdf.addImage("/Ethos_v2.png", "PNG", logoX, 10, logoWidth, logoHeight);
    } catch (e) {
      console.warn("⚠ No se pudo cargar el logo:", e);
    }

    // TÍTULO
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(20);

    pdf.text(
      programName || (lang === "es" ? "Proyecto" : "Project"),
      pdfWidth / 2,
      60,
      { align: "center" }
    );

    // Línea separadora
    pdf.setLineWidth(0.5);
    pdf.line(20, 68, pdfWidth - 20, 68);

    // DASHBOARD
    pdf.addImage(imgData, "PNG", 0, 75, pdfWidth, imgHeight);

    // FOOTER
    pdf.setFontSize(10);
    pdf.setTextColor(120);
    pdf.text(
      "© 2025 Ethos — Trust the Journey. Track the Impact.",
      pdfWidth / 2,
      pdf.internal.pageSize.getHeight() - 10,
      { align: "center" }
    );

    // GUARDAR
    pdf.save(`${programName || "dashboard"}.pdf`);
  };

  const steps = data.timeline.map((item: any) => ({
    label: item.label || item.title || Object.keys(item)[0],
    months: item.months || item.value || item[Object.keys(item)[0]],
  }));

  return (
    <div className="w-full">
      <div className="flex justify-end mb-4">
        <button
          onClick={handleDownloadPDF}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
        >
          📄 {t.pdfButton}
        </button>
      </div>

      <div id="dashboard-content">
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
