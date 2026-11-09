import html2canvas from "html2canvas";
import jsPDF from "jspdf";

/**
 * Render a DOM node to a cinematic multi-page PDF.
 * Keeps colors true to the on-screen report.
 */
export async function generateReportPdf(node: HTMLElement, sessionCode: string): Promise<void> {
  // Render the node to a high-DPI canvas.
  const canvas = await html2canvas(node, {
    backgroundColor: "#0b0b12",
    scale: Math.min(2, window.devicePixelRatio || 1.5),
    useCORS: true,
    logging: false,
    windowWidth: node.scrollWidth,
  });

  const imgData = canvas.toDataURL("image/jpeg", 0.92);
  const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const imgWidth = pageWidth;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  // Multi-page: paint the same tall image and shift Y per page.
  let remaining = imgHeight;
  let position = 0;
  let pageIndex = 0;

  while (remaining > 0) {
    if (pageIndex > 0) pdf.addPage();
    // background
    pdf.setFillColor(11, 11, 18);
    pdf.rect(0, 0, pageWidth, pageHeight, "F");
    pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight, undefined, "FAST");

    // footer
    pdf.setFontSize(8);
    pdf.setTextColor(140, 140, 160);
    pdf.text(
      `The Invisible Inheritance · Session ${sessionCode} · suryavamshigovardhan.github.io/voyce-website`,
      pageWidth / 2,
      pageHeight - 14,
      { align: "center" }
    );

    remaining -= pageHeight;
    position -= pageHeight;
    pageIndex += 1;
  }

  pdf.save(`invisible-inheritance-${sessionCode}.pdf`);
}
