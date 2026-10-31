import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { CERTIFICATIONS_DATA, EDUCATION_DATA, PUBLICATIONS_DATA } from '../data';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const CredentialsAndResearchSection: React.FC = () => {
  return (
    <section
      id="research"
      className="py-20 md:py-28 border-b border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="max-w-[1140px] mx-auto px-6">
        {/* Part 1: Peer-Reviewed Journal Publications */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
            className="max-w-2xl mb-12"
          >
            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-2">
              07 · Scholarly Output &amp; Publications
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Published Journal Research
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {PUBLICATIONS_DATA.map((pub, idx) => (
              <motion.article
                key={pub.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: EASE_OUT_EXPO }}
                className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#111317] border border-zinc-200/90 dark:border-zinc-800/90 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 dark:hover:border-zinc-700"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-3">
                    <span className="font-mono-tabular">0{pub.serialNo}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                      {pub.journalName}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono-tabular">{pub.yearVolumeIssue}</span>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 leading-snug">
                    {pub.title}
                  </h3>

                  <div className="mt-4 space-y-1 text-xs text-zinc-500 dark:text-zinc-400">
                    <p className="font-mono-tabular">{pub.issn}</p>
                    <p>{pub.indexingAndImpact}</p>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">
                    {pub.tags.join(' · ')}
                  </div>

                  {pub.url && (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 whitespace-nowrap shrink-0 py-1"
                    >
                      <span>View Published PDF</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Part 2: Education & Verified Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"
        >
          {/* Education Column (5 cols) */}
          <div className="lg:col-span-5">
            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-2">
              08 · Academic Degree
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-8">
              Education
            </h2>

            <div className="space-y-6">
              {EDUCATION_DATA.map((edu) => (
                <div
                  key={edu.id}
                  className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#111317] border border-zinc-200/90 dark:border-zinc-800/90"
                >
                  <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-2">
                    <span className="font-mono-tabular font-semibold text-zinc-900 dark:text-zinc-100">
                      {edu.period}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{edu.location}</span>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-serif-editorial italic text-zinc-600 dark:text-zinc-300 mt-1">
                    {edu.institution}
                  </p>

                  <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-4 leading-relaxed">
                    {edu.academicExposure}
                  </p>

                  <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800/80">
                    <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 mb-2">
                      Relevant Coursework
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {edu.relevantCoursework.join(' · ')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column (7 cols) */}
          <div className="lg:col-span-7">
            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-2">
              09 · Verified Credentials
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-8">
              Certifications &amp; Awards
            </h2>

            <div className="bg-white dark:bg-[#111317] border border-zinc-200/90 dark:border-zinc-800/90 rounded-2xl divide-y divide-zinc-100 dark:divide-zinc-800/80">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.id}
                  className="p-6 sm:px-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors duration-150 hover:bg-zinc-50/60 dark:hover:bg-zinc-900/40"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-1">
                      <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                        {cert.issuer}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{cert.category}</span>
                      {cert.credentialId && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="font-mono-tabular">{cert.credentialId}</span>
                        </>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                      {cert.title}
                    </h3>

                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      {cert.skillsValidated.join(' · ')}
                    </p>
                  </div>

                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 whitespace-nowrap shrink-0 self-start sm:self-center py-1"
                  >
                    <span>Verify Credential</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
