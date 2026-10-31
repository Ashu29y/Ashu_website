import { RESUME_CONFIG } from '../data';

/**
 * Reliably downloads the uploaded resume PDF defined in RESUME_CONFIG (/src/data/profile.ts).
 * Uses a Blob download so browsers and preview iframes always save the exact uploaded PDF file
 * rather than navigating away or blocked by iframe restrictions.
 */
export async function downloadUploadedResume(): Promise<boolean> {
  try {
    const response = await fetch(RESUME_CONFIG.url);
    if (!response.ok) {
      throw new Error(`Failed to fetch resume PDF: ${response.status}`);
    }
    const blob = await response.blob();
    const pdfBlob = new Blob([blob], { type: 'application/pdf' });
    const blobUrl = window.URL.createObjectURL(pdfBlob);

    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = RESUME_CONFIG.fileName || 'Ashutosh_Gautam_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.setTimeout(() => {
      window.URL.revokeObjectURL(blobUrl);
    }, 3000);

    return true;
  } catch {
    // Fallback to direct anchor download if fetch fails
    const link = document.createElement('a');
    link.href = RESUME_CONFIG.url;
    link.download = RESUME_CONFIG.fileName || 'Ashutosh_Gautam_Resume.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return true;
  }
}
