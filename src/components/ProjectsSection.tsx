import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../data';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const unique = Array.from(new Set(PROJECTS_DATA.map((p) => p.category)));
    return ['All', ...unique];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section
      id="projects"
      className="py-20 md:py-28 border-b border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="max-w-[1140px] mx-auto px-6">
        {/* Section Header + Dynamic Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-2">
              04 · Selected Works &amp; Case Studies
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Analytics &amp; Machine Learning Projects
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex flex-wrap items-center gap-1 p-1 bg-zinc-100 dark:bg-zinc-900 rounded-lg self-start"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 min-h-[36px] text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Clean Editorial Case Study List */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, delay: idx * 0.05, ease: EASE_OUT_EXPO }}
                className="bg-white dark:bg-[#111317] border border-zinc-200/90 dark:border-zinc-800/90 rounded-2xl p-7 sm:p-9 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 dark:hover:border-zinc-700"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  {/* Left Column (5 cols): Title, Metadata, Metrics & Links */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-2.5">
                        <span className="font-mono-tabular">0{idx + 1}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-medium text-zinc-800 dark:text-zinc-200">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm font-serif-editorial italic text-zinc-600 dark:text-zinc-400 mt-1">
                        {project.subtitle}
                      </p>

                      {/* Clean Unboxed Key Metrics Row separated by hairlines */}
                      <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800/80 grid grid-cols-3 gap-4">
                        {project.keyMetrics.map((metric) => (
                          <div key={metric.label}>
                            <p className="text-[11px] text-zinc-500 dark:text-zinc-400">{metric.label}</p>
                            <p className="font-mono-tabular text-xs font-semibold text-zinc-900 dark:text-zinc-100 mt-0.5">
                              {metric.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Verified Links */}
                    <div className="mt-8 pt-5 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center gap-5">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors duration-150 whitespace-nowrap shrink-0 py-1"
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (7 cols): Highlights, Stack & Case Study Modal Trigger */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 mb-3">
                        Implementation &amp; Impact
                      </p>
                      <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300 leading-[1.7]">
                        {project.highlights.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-zinc-400 dark:text-zinc-500 select-none mt-0.5">—</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-5 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-4 text-xs">
                      <div className="text-zinc-500 dark:text-zinc-400">
                        <span className="font-medium text-zinc-800 dark:text-zinc-200">Tech Stack: </span>
                        <span>{project.techStack.join(' · ')}</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => onSelectProject(project)}
                        className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 whitespace-nowrap shrink-0 cursor-pointer py-1"
                      >
                        View Architecture Details →
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
