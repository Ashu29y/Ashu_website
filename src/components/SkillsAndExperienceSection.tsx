import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { EDUCATION_DATA, EXPERIENCE_DATA, PROFILE_DATA, SKILLS_DATA } from '../data';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const SkillsAndExperienceSection: React.FC = () => {
  const [roleFilter, setRoleFilter] = useState<string>('All');

  const experienceCategories = useMemo(() => {
    const unique = Array.from(new Set(EXPERIENCE_DATA.map((item) => item.category)));
    return ['All', ...unique];
  }, []);

  const filteredExperience = useMemo(() => {
    if (roleFilter === 'All') return EXPERIENCE_DATA;
    return EXPERIENCE_DATA.filter((item) => item.category === roleFilter);
  }, [roleFilter]);

  return (
    <>
      {/* SECTION 01: ABOUT & CORE FOCUS AREAS */}
      <section
        id="about"
        className="py-20 md:py-28 border-b border-zinc-200/80 dark:border-zinc-800/80"
      >
        <div className="max-w-[1140px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          >
            <div className="lg:col-span-5">
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-2">
                01 · About &amp; Philosophy
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
                Bridging Analytical Rigor with Practical Education
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4 text-base text-zinc-600 dark:text-zinc-300 leading-[1.75]">
                {PROFILE_DATA.aboutParagraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Core Focus Areas List */}
              <div className="pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
                <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                  Core Areas of Practice
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {PROFILE_DATA.coreFocusAreas.map((area, index) => (
                    <div key={area} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="font-mono-tabular text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">
                        0{index + 1}
                      </span>
                      <span className="leading-snug">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Foundation Summary */}
              {EDUCATION_DATA.map((edu) => (
                <div
                  key={edu.id}
                  className="pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2"
                >
                  <div>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {edu.degree} — {edu.institution}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      {edu.academicExposure}
                    </p>
                  </div>
                  <span className="font-mono-tabular text-xs text-zinc-500 dark:text-zinc-400 whitespace-nowrap shrink-0">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 02: TECHNICAL SKILLS */}
      <section
        id="skills"
        className="py-20 md:py-28 border-b border-zinc-200/80 dark:border-zinc-800/80"
      >
        <div className="max-w-[1140px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
            className="max-w-2xl mb-12"
          >
            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-2">
              02 · Core Technical Stack
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Skills &amp; Analytical Tooling
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
              Structured competencies across business intelligence, statistical programming, financial modeling, and
              database engineering.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS_DATA.map((group, idx) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: EASE_OUT_EXPO }}
                className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#111317] border border-zinc-200/90 dark:border-zinc-800/90 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 dark:hover:border-zinc-700"
              >
                <div>
                  <div className="flex items-baseline justify-between gap-4 mb-3">
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                      0{idx + 1}. {group.category}
                    </h3>
                    <span className="font-mono-tabular text-xs text-zinc-500 dark:text-zinc-400">
                      {group.skills.length} competencies
                    </span>
                  </div>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {group.summary}
                  </p>
                </div>

                <div className="pt-5 border-t border-zinc-100 dark:border-zinc-800/80 space-y-2">
                  <p className="text-xs font-medium text-zinc-900 dark:text-zinc-100 leading-relaxed">
                    {group.skills.join(' · ')}
                  </p>
                  {group.highlightMetric && (
                    <p className="font-mono-tabular text-xs text-zinc-500 dark:text-zinc-400">
                      Outcome: {group.highlightMetric}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03: PROFESSIONAL EXPERIENCE */}
      <section
        id="experience"
        className="py-20 md:py-28 border-b border-zinc-200/80 dark:border-zinc-800/80"
      >
        <div className="max-w-[1140px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
          >
            <div>
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-2">
                03 · Career Trajectory
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Professional Experience
              </h2>
            </div>

            <div
              role="tablist"
              aria-label="Filter experience by domain"
              className="flex items-center gap-1 p-1 bg-zinc-100 dark:bg-zinc-900 rounded-lg self-start"
            >
              {experienceCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={roleFilter === cat}
                  onClick={() => setRoleFilter(cat)}
                  className={`px-3.5 py-1.5 min-h-[36px] text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    roleFilter === cat
                      ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredExperience.map((exp, index) => (
                <motion.article
                  key={exp.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, delay: index * 0.04, ease: EASE_OUT_EXPO }}
                  className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#111317] border border-zinc-200/90 dark:border-zinc-800/90 transition-colors duration-200 hover:border-zinc-300 dark:hover:border-zinc-700"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                    {/* Left Metadata Column (4 cols) */}
                    <div className="lg:col-span-4">
                      <p className="font-mono-tabular text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                        {exp.period}
                      </p>
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mt-1.5">
                        {exp.organization}
                      </h3>
                      <p className="text-sm font-serif-editorial italic text-zinc-600 dark:text-zinc-300 mt-0.5">
                        {exp.role}
                      </p>
                      {exp.partnershipNote && (
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                          {exp.partnershipNote}
                        </p>
                      )}
                    </div>

                    {/* Right Highlights Column (8 cols) */}
                    <div className="lg:col-span-8 flex flex-col justify-between">
                      <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300 leading-[1.7]">
                        {exp.highlights.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-zinc-400 dark:text-zinc-500 select-none mt-0.5">—</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 text-xs text-zinc-500 dark:text-zinc-400">
                        <span className="font-medium text-zinc-800 dark:text-zinc-200">Focus: </span>
                        <span>{exp.technologies.join(' · ')}</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
};
