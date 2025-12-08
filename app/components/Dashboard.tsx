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

  // =====================================================
  // 📄 DESCARGAR PDF CON GRÁFICOS FUNCIONANDO EN SAFARI
  // =====================================================
  const handleDownloadPDF = async () => {
    const original = document.getElementById("dashboard-content");
    if (!original) return;

    // 1) Clonar el contenido
    const clone = original.cloneNode(true) as HTMLElement;
    clone.id = "dashboard-clone";

    document.body.appendChild(clone);

    // -----------------------------------------------
    // 🔥 FIX DEFINITIVO PARA SAFARI: rasterizar canvas
    // -----------------------------------------------
    const originalCanvases = original.querySelectorAll("canvas");
    const cloneCanvases = clone.querySelectorAll("canvas");

    originalCanvases.forEach((canvas, i) => {
      const rect = canvas.getBoundingClientRect();

      // Canvas visible -> dimensiones reales
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = rect.width * 2;   // para alta resolución
      tempCanvas.height = rect.height * 2;

      const ctx = tempCanvas.getContext("2d");
      if (ctx) {
        ctx.scale(2, 2);
        ctx.drawImage(canvas, 0, 0, rect.width, rect.height);
      }

      const image = document.createElement("img");
      image.src = tempCanvas.toDataURL("image/png");
      image.style.width = rect.width + "px";
      image.style.height = rect.height + "px";

      // Reemplazar canvas del clon
      const cloneCanvas = cloneCanvases[i];
      if (cloneCanvas?.parentNode) {
        cloneCanvas.parentNode.replaceChild(image, cloneCanvas);
      }
    });

    // Esperar pequeña pausa
    await new Promise((res) => setTimeout(res, 150));

    // 2) Generar imagen del clon
    const canvas = await html2canvas(clone, {
      scale: 2,
      useCORS: true,
      scrollY: 0,
      windowWidth: 1400
    });

    document.body.removeChild(clone);

    // 3) Crear PDF
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const topMargin = 75;
    const bottomMargin = 20;
    const maxImageHeight = pageHeight - topMargin - bottomMargin;

    const imgRatio = canvas.height / canvas.width;

    let renderWidth = pageWidth;
    let renderHeight = renderWidth * imgRatio;

    if (renderHeight > maxImageHeight) {
      renderHeight = maxImageHeight;
      renderWidth = renderHeight / imgRatio;
    }

    const imgX = (pageWidth - renderWidth) / 2;

    // LOGO
    const logoWidth = 140;
    const logoHeight = 40;
    const logoX = (pageWidth - logoWidth) / 2;
    pdf.addImage("/Ethos_v2.png", "PNG", logoX, 10, logoWidth, logoHeight);

    // TÍTULO
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(20);
    pdf.text(
      programName || (lang === "es" ? "Proyecto" : "Project"),
      pageWidth / 2,
      60,
      { align: "center" }
    );

    pdf.setLineWidth(0.5);
    pdf.line(20, 68, pageWidth - 20, 68);

    // INSERTAR CONTENIDO
    pdf.addImage(imgData, "PNG", imgX, topMargin, renderWidth, renderHeight);

    // FOOTER
    pdf.setFontSize(10);
    pdf.setTextColor(120);
    pdf.text(
      "© 2025 Ethos — Trust the Journey. Track the Impact.",
      pageWidth / 2,
      pageHeight - 10,
      { align: "center" }
    );

    pdf.save(`${programName || "dashboard"}.pdf`);
  };

  // TIMELINE NORMALIZADO
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
