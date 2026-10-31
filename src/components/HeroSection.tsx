import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, Download, FileText, Moon, Sun } from 'lucide-react';
import {
  AVAILABILITY_CONFIG,
  CONTACT_DATA,
  EDUCATION_DATA,
  PROFILE_DATA,
  RESUME_CONFIG,
} from '../data';
import { downloadUploadedResume } from '../utils/downloadResume';

interface HeroSectionProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenResumeModal: () => void;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const HeroSection: React.FC<HeroSectionProps> = ({
  isDark,
  onToggleTheme,
  onOpenResumeModal,
}) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const availabilityLabel =
    AVAILABILITY_CONFIG.status === 'available'
      ? 'Available for Consulting & Mentorship'
      : AVAILABILITY_CONFIG.status === 'limited'
      ? 'Selective Availability'
      : 'Currently Unavailable';

  const primaryEducation = EDUCATION_DATA[0];

  const handleDownloadResume = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDownloading(true);
    await downloadUploadedResume();
    window.setTimeout(() => setIsDownloading(false), 2500);
  };

  return (
    <section
      id="top"
      className="pt-10 pb-20 md:pt-16 md:pb-28 border-b border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="max-w-[1140px] mx-auto px-6">
        {/* Quiet Sub-Header Metadata & Theme Switch */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
          className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-zinc-200/60 dark:border-zinc-800/60 text-xs text-zinc-500 dark:text-zinc-400"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              {PROFILE_DATA.currentRole}, {PROFILE_DATA.currentOrganization}
            </span>
            <span aria-hidden="true">·</span>
            <span>{availabilityLabel}</span>
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 min-h-[36px] text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
          >
            {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            <span>{isDark ? 'Light Appearance' : 'Dark Appearance'}</span>
          </button>
        </motion.div>

        {/* First Viewport Split: Left Editorial Statement (7 cols) | Right Executive Dossier (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05, ease: EASE_OUT_EXPO }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              <p className="text-xs font-medium tracking-wide text-zinc-500 dark:text-zinc-400 mb-4">
                {PROFILE_DATA.shortTitle}
              </p>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.14] mb-6">
                {PROFILE_DATA.headline}
              </h1>

              <p className="text-base sm:text-[17px] text-zinc-600 dark:text-zinc-300 leading-[1.7] max-w-[62ch]">
                {PROFILE_DATA.aboutParagraphs[0]}
              </p>
            </div>

            {/* Disciplined Action Group */}
            <div className="mt-10 pt-8 border-t border-zinc-200/70 dark:border-zinc-800/70 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-5 py-2.5 min-h-[44px] text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 active:scale-[0.98] dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white rounded-lg transition-all duration-150 whitespace-nowrap shrink-0"
              >
                Explore Projects
              </a>

              <button
                type="button"
                onClick={handleDownloadResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] text-sm font-medium text-zinc-800 dark:text-zinc-200 bg-white dark:bg-[#111317] border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-600 active:scale-[0.98] rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer"
              >
                {isDownloading ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Resume Downloaded ({RESUME_CONFIG.fileName})</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                    <span>Download Resume PDF</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={onOpenResumeModal}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 min-h-[44px] text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Preview Resume</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Calm Executive Profile Monograph */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12, ease: EASE_OUT_EXPO }}
            className="lg:col-span-5 flex"
          >
            <div className="w-full bg-white dark:bg-[#111317] border border-zinc-200/90 dark:border-zinc-800/90 rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5">
              <div>
                <div className="pb-5 border-b border-zinc-100 dark:border-zinc-800/80">
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Professional Summary</p>
                  <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mt-1">
                    {PROFILE_DATA.name}
                  </h2>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                    {PROFILE_DATA.experienceSummary}
                  </p>
                </div>

                <dl className="divide-y divide-zinc-100 dark:divide-zinc-800/80 text-sm">
                  <div className="py-4 flex items-baseline justify-between gap-4">
                    <dt className="text-xs text-zinc-500 dark:text-zinc-400 shrink-0">Current Role</dt>
                    <dd className="font-medium text-zinc-900 dark:text-zinc-100 text-right">
                      {PROFILE_DATA.currentRole}, {PROFILE_DATA.currentOrganization}
                    </dd>
                  </div>

                  {primaryEducation && (
                    <div className="py-4 flex items-baseline justify-between gap-4">
                      <dt className="text-xs text-zinc-500 dark:text-zinc-400 shrink-0">Education</dt>
                      <dd className="font-medium text-zinc-900 dark:text-zinc-100 text-right">
                        {primaryEducation.degree}
                      </dd>
                    </div>
                  )}

                  <div className="py-4 flex items-baseline justify-between gap-4">
                    <dt className="text-xs text-zinc-500 dark:text-zinc-400 shrink-0">Direct Email</dt>
                    <dd className="font-mono-tabular text-xs font-medium text-zinc-900 dark:text-zinc-100 text-right">
                      <a
                        href={`mailto:${CONTACT_DATA.email}`}
                        className="hover:underline underline-offset-4"
                      >
                        {CONTACT_DATA.email}
                      </a>
                    </dd>
                  </div>

                  <div className="py-4 flex items-baseline justify-between gap-4">
                    <dt className="text-xs text-zinc-500 dark:text-zinc-400 shrink-0">Direct Phone</dt>
                    <dd className="font-mono-tabular text-xs font-medium text-zinc-900 dark:text-zinc-100 text-right">
                      <a href={`tel:${CONTACT_DATA.phoneHref}`} className="hover:underline underline-offset-4">
                        {CONTACT_DATA.phone}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Verified Links Row */}
              <div className="pt-5 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-zinc-500 dark:text-zinc-400">Verified Profiles</span>
                <div className="flex flex-wrap items-center gap-4">
                  {CONTACT_DATA.socialLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0"
                    >
                      <span>{social.platform}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Key Metrics Strip Below Hero Split */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.18, ease: EASE_OUT_EXPO }}
          className="mt-16 pt-12 border-t border-zinc-200/80 dark:border-zinc-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {PROFILE_DATA.metrics.map((metric) => (
            <div key={metric.id} className="space-y-1">
              <p className="font-mono-tabular text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
                {metric.value}
              </p>
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{metric.label}</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{metric.context}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
