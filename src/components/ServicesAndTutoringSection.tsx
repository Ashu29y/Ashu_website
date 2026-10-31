import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { AVAILABILITY_CONFIG, SERVICES_DATA, TUTORING_DATA } from '../data';

interface ServicesAndTutoringSectionProps {
  onInquireTopic: (topicType: 'service' | 'tutoring', title: string) => void;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const ServicesAndTutoringSection: React.FC<ServicesAndTutoringSectionProps> = ({ onInquireTopic }) => {
  return (
    <>
      {/* SECTION 05: FREELANCE SERVICES */}
      <section
        id="services"
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
              05 · Consulting &amp; Implementation
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Freelance Analytics Services
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
              {AVAILABILITY_CONFIG.subtext}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES_DATA.map((service, idx) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: EASE_OUT_EXPO }}
                className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#111317] border border-zinc-200/90 dark:border-zinc-800/90 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 dark:hover:border-zinc-700"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-3">
                    <span>
                      {service.indexNumber} · {service.category}
                    </span>
                    <span className="font-mono-tabular">{service.typicalTimeline}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-50">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2.5 leading-relaxed">
                    {service.summary}
                  </p>

                  <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800/80">
                    <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 mb-3">
                      Deliverables
                    </p>
                    <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-zinc-400 select-none">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">
                    {service.toolsUsed.join(' · ')}
                  </div>

                  <button
                    type="button"
                    onClick={() => onInquireTopic('service', service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 whitespace-nowrap shrink-0 cursor-pointer py-1"
                  >
                    <span>Inquire About Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 06: 1-ON-1 TECHNICAL TUTORING */}
      <section
        id="tutoring"
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
              06 · Academic &amp; Career Mentorship
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              1-on-1 Technical Tutoring Subjects
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
              Practical, project-oriented training informed by mentoring 200+ undergraduate and postgraduate students
              across university cohorts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TUTORING_DATA.map((subject, idx) => (
              <motion.article
                key={subject.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: EASE_OUT_EXPO }}
                className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#111317] border border-zinc-200/90 dark:border-zinc-800/90 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 dark:hover:border-zinc-700"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-3">
                    <span>0{idx + 1} · {subject.level}</span>
                    <span aria-hidden="true">·</span>
                    <span>{subject.format}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-50">
                    {subject.title}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    For: {subject.audience}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-3 leading-relaxed">
                    {subject.summary}
                  </p>

                  <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800/80">
                    <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 mb-3">
                      Key Topics Covered
                    </p>
                    <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {subject.topicsCovered.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-zinc-400 select-none">—</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-xs">
                    {subject.practicalOutcome}
                  </p>

                  <button
                    type="button"
                    onClick={() => onInquireTopic('tutoring', subject.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 whitespace-nowrap shrink-0 cursor-pointer py-1"
                  >
                    <span>Request Tutoring</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
