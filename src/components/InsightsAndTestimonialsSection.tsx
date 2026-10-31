import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import {
  BLOG_POSTS_DATA,
  BlogPostItem,
  PROFILE_DATA,
  SHOW_TESTIMONIALS_SECTION,
  TESTIMONIALS_DATA,
} from '../data';

interface InsightsAndTestimonialsSectionProps {
  onSelectBlogPost: (post: BlogPostItem) => void;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const InsightsAndTestimonialsSection: React.FC<InsightsAndTestimonialsSectionProps> = ({
  onSelectBlogPost,
}) => {
  return (
    <section
      id="insights"
      className="py-20 md:py-28 border-b border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="max-w-[1140px] mx-auto px-6">
        {/* Part 1: Attributable Mentorship & Project Highlights */}
        {SHOW_TESTIMONIALS_SECTION && TESTIMONIALS_DATA.length > 0 && (
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
              className="max-w-2xl mb-12"
            >
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-2">
                10 · Institutional &amp; Cohort Impact
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Mentorship &amp; Analytics Highlights
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS_DATA.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: idx * 0.06, ease: EASE_OUT_EXPO }}
                  className="p-7 rounded-2xl bg-white dark:bg-[#111317] border border-zinc-200/90 dark:border-zinc-800/90 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 dark:hover:border-zinc-700"
                >
                  <p className="text-sm font-serif-editorial italic text-zinc-700 dark:text-zinc-300 leading-[1.75]">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="mt-8 pt-5 border-t border-zinc-100 dark:border-zinc-800/80">
                    <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                      {item.authorName}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                      {item.authorRole} · {item.organization}
                    </p>
                    <p className="text-xs font-mono-tabular text-zinc-600 dark:text-zinc-400 mt-2">
                      {item.outcome}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Part 2: Blog Posts & Research Notes */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
            className="max-w-2xl mb-12"
          >
            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-2">
              11 · Technical Writing &amp; Research Notes
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Articles &amp; Analytical Briefs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BLOG_POSTS_DATA.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: EASE_OUT_EXPO }}
                className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#111317] border border-zinc-200/90 dark:border-zinc-800/90 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 dark:hover:border-zinc-700"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-3">
                    <span className="font-medium text-zinc-800 dark:text-zinc-200">
                      {post.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono-tabular">{post.publishedDate}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => onSelectBlogPost(post)}
                    className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 cursor-pointer py-1"
                  >
                    Read Summary Note →
                  </button>

                  {post.externalUrl && (
                    <a
                      href={post.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-150 whitespace-nowrap shrink-0 py-1"
                    >
                      <span>{post.externalUrlLabel || 'External Source'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Part 3: Personal Interests & Literature */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
          className="pt-12 border-t border-zinc-200/80 dark:border-zinc-800/80"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1">
                12 · Personal Interests
              </p>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                Literature, Writing &amp; Athletics
              </h3>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {PROFILE_DATA.hobbies.map((hobby) => (
                <div key={hobby.id} className="space-y-1.5">
                  <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                    {hobby.category}
                  </p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {hobby.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
