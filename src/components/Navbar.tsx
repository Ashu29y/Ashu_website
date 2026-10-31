import React, { useState } from 'react';
import { Check, Download } from 'lucide-react';
import { PROFILE_DATA } from '../data';
import { downloadUploadedResume } from '../utils/downloadResume';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = async () => {
    await downloadUploadedResume();
    setDownloaded(true);
    window.setTimeout(() => setDownloaded(false), 2200);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/90 dark:bg-[#0B0C0E]/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors duration-200">
      <div className="max-w-[1140px] mx-auto flex items-center justify-between gap-8 px-6 h-16">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="text-base font-bold tracking-tight text-zinc-900 dark:text-zinc-100 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900 dark:focus-visible:outline-zinc-100"
        >
          {PROFILE_DATA.name}
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400"
        >
          <a
            href="#about"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-150 whitespace-nowrap shrink-0 py-1"
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-150 whitespace-nowrap shrink-0 py-1"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-150 whitespace-nowrap shrink-0 py-1"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-150 whitespace-nowrap shrink-0 py-1"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-150 whitespace-nowrap shrink-0 py-1"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action (Direct download of the uploaded Resume PDF) */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={handleDownload}
            className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 active:scale-[0.98] dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
          >
            {downloaded ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-600" />
                <span>Downloaded</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
