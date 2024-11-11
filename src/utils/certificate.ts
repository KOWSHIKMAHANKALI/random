import { jsPDF } from 'jspdf';

export const generateCertificate = (studentName: string, courseId: string) => {
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4'
  });

  // Add certificate styling and content
  doc.setFillColor(240, 240, 240);
  doc.rect(0, 0, 297, 210, 'F');
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(40);
  doc.setTextColor(44, 62, 80);
  doc.text('Certificate of Completion', 148.5, 50, { align: 'center' });
  
  doc.setFontSize(20);
  doc.setFont('helvetica', 'normal');
  doc.text('This is to certify that', 148.5, 85, { align: 'center' });
  
  doc.setFontSize(30);
  doc.setFont('helvetica', 'bold');
  doc.text(studentName, 148.5, 105, { align: 'center' });
  
  doc.setFontSize(20);
  doc.setFont('helvetica', 'normal');
  doc.text(`has successfully completed the course: ${courseId}`, 148.5, 125, { align: 'center' });
  
  doc.setFontSize(15);
  const date = new Date().toLocaleDateString();
  doc.text(`Date: ${date}`, 148.5, 160, { align: 'center' });

  // Save the PDF
  doc.save(`certificate-${courseId}.pdf`);
};