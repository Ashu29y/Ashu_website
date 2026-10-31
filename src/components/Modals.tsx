import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Check, CheckCircle2, Download, ExternalLink, X } from 'lucide-react';
import {
  BlogPostItem,
  MAINTAINABILITY_AUDIT_CHECKS,
  PROFILE_DATA,
  ProjectItem,
  RESUME_CONFIG,
  TECHNICAL_AUDIT_FINDINGS,
} from '../data';
import { downloadUploadedResume } from '../utils/downloadResume';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleDownload = async () => {
    await downloadUploadedResume();
    setDownloaded(true);
    window.setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${PROFILE_DATA.name} Resume Viewer`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.22, ease: EASE_OUT_EXPO }}
            className="w-full max-w-4xl h-[85vh] bg-white dark:bg-[#111317] border border-zinc-200 dark:border-zinc-800 rounded-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
              <div>
                <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                  {PROFILE_DATA.name} — Official Resume
                </h2>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono-tabular">
                  {RESUME_CONFIG.fileSizeLabel} · File: {RESUME_CONFIG.fileName}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleDownload}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[38px] text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 active:scale-[0.98] dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {downloaded ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-600" />
                      <span>Downloaded PDF</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </>
                  )}
                </button>
                <a
                  href={RESUME_CONFIG.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[38px] text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>New Tab</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close resume viewer"
                  className="p-2 min-h-[38px] min-w-[38px] inline-flex items-center justify-center rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-150 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 bg-zinc-100 dark:bg-zinc-950">
              <iframe
                src={RESUME_CONFIG.url}
                title={`${PROFILE_DATA.name} Resume PDF`}
                className="w-full h-full border-0"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.22, ease: EASE_OUT_EXPO }}
            className="w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white dark:bg-[#111317] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-7 sm:p-9"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-zinc-200 dark:border-zinc-800">
              <div>
                <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">{project.category}</p>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-1">
                  {project.title}
                </h2>
                <p className="text-sm font-serif-editorial italic text-zinc-600 dark:text-zinc-400 mt-0.5">
                  {project.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="p-2 min-h-[38px] min-w-[38px] inline-flex items-center justify-center rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-150 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 mb-2">
                  System &amp; Analytical Architecture
                </p>
                <p className="font-mono-tabular text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {project.architectureSummary}
                </p>
              </div>

              <div className="pt-5 border-t border-zinc-100 dark:border-zinc-800/80 grid grid-cols-3 gap-4">
                {project.keyMetrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400">{m.label}</p>
                    <p className="font-mono-tabular text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100 mt-1">
                      {m.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-5 border-t border-zinc-100 dark:border-zinc-800/80">
                <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 mb-3">
                  Key Engineering &amp; Analytical Contributions
                </p>
                <ul className="space-y-2.5 text-sm text-zinc-600 dark:text-zinc-300 leading-[1.7]">
                  {project.highlights.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-zinc-400 select-none">—</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  {project.techStack.join(' · ')}
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[38px] text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface BlogModalProps {
  post: BlogPostItem | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (post) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [post, onClose]);

  return (
    <AnimatePresence>
      {post && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={post.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.22, ease: EASE_OUT_EXPO }}
            className="w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white dark:bg-[#111317] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-7 sm:p-9"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-zinc-200 dark:border-zinc-800">
              <div>
                <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                  <span className="font-medium text-zinc-800 dark:text-zinc-200">{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono-tabular">{post.publishedDate}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-2 leading-snug">
                  {post.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close article reader"
                className="p-2 min-h-[38px] min-w-[38px] inline-flex items-center justify-center rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-150 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-6 space-y-6">
              {post.contentSections.map((sec, idx) => (
                <div key={idx}>
                  <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                    {sec.heading}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-[1.75]">{sec.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-5 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-zinc-500 dark:text-zinc-400">{post.tags.join(' · ')}</div>
              {post.externalUrl && (
                <a
                  href={post.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[38px] text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
                >
                  <span>{post.externalUrlLabel || 'Open External Resource'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Maintainability Audit & Update Guide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.22, ease: EASE_OUT_EXPO }}
            className="w-full max-w-4xl max-h-[88vh] overflow-y-auto bg-white dark:bg-[#111317] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-7 sm:p-9"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-zinc-200 dark:border-zinc-800">
              <div>
                <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  Centralized Architecture Verification
                </p>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-1">
                  Maintainability &amp; Single-File Update Guide
                </h2>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  All portfolio content is decoupled from UI components into{' '}
                  <code className="font-mono-tabular">/src/data/</code>.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close maintainability audit modal"
                className="p-2 min-h-[38px] min-w-[38px] inline-flex items-center justify-center rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-150 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400">
                    <th className="py-2.5 pr-4 font-semibold">Content Domain</th>
                    <th className="py-2.5 px-4 font-semibold">Centralized Data File</th>
                    <th className="py-2.5 px-4 font-semibold">Zero-UI-Edit Rule</th>
                    <th className="py-2.5 pl-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/70">
                  {MAINTAINABILITY_AUDIT_CHECKS.map((item) => (
                    <tr key={item.id}>
                      <td className="py-3 pr-4 font-semibold text-zinc-900 dark:text-zinc-100">
                        {item.contentArea}
                      </td>
                      <td className="py-3 px-4 font-mono-tabular text-zinc-700 dark:text-zinc-300 whitespace-nowrap">
                        {item.sourceFile}
                      </td>
                      <td className="py-3 px-4 text-zinc-600 dark:text-zinc-400">
                        {item.singleFileUpdateRule}
                      </td>
                      <td className="py-3 pl-4 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1 font-medium text-emerald-700 dark:text-emerald-400">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{item.status}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800">
              <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                Technical Audit Summary
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {TECHNICAL_AUDIT_FINDINGS.map((finding) => (
                  <div key={finding.category} className="space-y-1">
                    <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                      {finding.category}
                    </p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {finding.finding}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
