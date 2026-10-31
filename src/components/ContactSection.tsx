import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, Copy, Download, Mail } from 'lucide-react';
import {
  AVAILABILITY_CONFIG,
  CONTACT_DATA,
  PROFILE_DATA,
  RESUME_CONFIG,
  SERVICES_DATA,
  TUTORING_DATA,
} from '../data';
import { downloadUploadedResume } from '../utils/downloadResume';

interface ContactSectionProps {
  selectedInquiryTopic: string;
  onOpenAuditModal: () => void;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedInquiryTopic,
  onOpenAuditModal,
}) => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [topic, setTopic] = useState(
    selectedInquiryTopic || `Freelance Service: ${SERVICES_DATA[0]?.title || 'BI Dashboard Consulting'}`
  );
  const [message, setMessage] = useState('');
  const [copiedState, setCopiedState] = useState<'none' | 'email' | 'inquiry'>('none');
  const [resumeDownloaded, setResumeDownloaded] = useState(false);

  useEffect(() => {
    if (selectedInquiryTopic) {
      setTopic(selectedInquiryTopic);
    }
  }, [selectedInquiryTopic]);

  const allInquiryOptions = [
    ...SERVICES_DATA.map((s) => `Freelance Service: ${s.title}`),
    ...TUTORING_DATA.map((t) => `1-on-1 Tutoring: ${t.title}`),
    'Academic / Research Collaboration',
    'Full-Time / Faculty Opportunity',
  ];

  const formattedSubject = `[Portfolio Inquiry] ${topic} — ${senderName || 'Prospective Client/Student'}`;
  const formattedBody = `Hello ${PROFILE_DATA.name},\n\nName: ${senderName || '[Your Name]'}\nEmail: ${
    senderEmail || '[Your Email]'
  }\nTopic: ${topic}\n\nMessage:\n${
    message || 'I would like to discuss a potential analytics project or tutoring session with you.'
  }\n\nBest regards,\n${senderName || '[Your Name]'}`;

  const mailtoHref = `mailto:${CONTACT_DATA.email}?subject=${encodeURIComponent(
    formattedSubject
  )}&body=${encodeURIComponent(formattedBody)}`;

  const handleCopyText = async (text: string, type: 'email' | 'inquiry') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedState(type);
      setTimeout(() => setCopiedState('none'), 2500);
    } catch {
      setCopiedState(type);
      setTimeout(() => setCopiedState('none'), 2500);
    }
  };

  const handleDownloadFooterResume = async (e: React.MouseEvent) => {
    e.preventDefault();
    await downloadUploadedResume();
    setResumeDownloaded(true);
    window.setTimeout(() => setResumeDownloaded(false), 2500);
  };

  return (
    <footer id="contact" className="pt-20 pb-16 md:pt-28 bg-[#FAF9F6] dark:bg-[#0B0C0E]">
      <div className="max-w-[1140px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-zinc-200/80 dark:border-zinc-800/80"
        >
          {/* Left Column (5 cols): Calm Final CTA & Direct Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-2">
                13 · Direct Contact
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
                Start a Project or Mentorship Conversation
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 mt-3 leading-relaxed">
                {AVAILABILITY_CONFIG.headline}. {AVAILABILITY_CONFIG.responseTime}.
              </p>

              {/* Clean Divided Contact List */}
              <dl className="mt-8 divide-y divide-zinc-200/70 dark:divide-zinc-800/70 border-t border-b border-zinc-200/70 dark:border-zinc-800/70">
                <div className="py-4 flex items-center justify-between gap-4">
                  <div>
                    <dt className="text-xs text-zinc-500 dark:text-zinc-400">Email</dt>
                    <dd className="font-mono-tabular text-sm font-medium text-zinc-900 dark:text-zinc-100 mt-0.5">
                      <a href={`mailto:${CONTACT_DATA.email}`} className="hover:underline underline-offset-4">
                        {CONTACT_DATA.email}
                      </a>
                    </dd>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyText(CONTACT_DATA.email, 'email')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 min-h-[36px] text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-[#111317] border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 active:scale-[0.98] rounded-md transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    {copiedState === 'email' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="py-4 flex items-center justify-between gap-4">
                  <div>
                    <dt className="text-xs text-zinc-500 dark:text-zinc-400">Phone</dt>
                    <dd className="font-mono-tabular text-sm font-medium text-zinc-900 dark:text-zinc-100 mt-0.5">
                      <a href={`tel:${CONTACT_DATA.phoneHref}`} className="hover:underline underline-offset-4">
                        {CONTACT_DATA.phone}
                      </a>
                    </dd>
                  </div>
                  <a
                    href={`tel:${CONTACT_DATA.phoneHref}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 min-h-[36px] text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-[#111317] border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 rounded-md transition-colors duration-150 whitespace-nowrap shrink-0"
                  >
                    <span>Call Direct</span>
                  </a>
                </div>

                {CONTACT_DATA.socialLinks.map((social) => (
                  <div key={social.id} className="py-4 flex items-center justify-between gap-4">
                    <div>
                      <dt className="text-xs text-zinc-500 dark:text-zinc-400">{social.platform}</dt>
                      <dd className="font-mono-tabular text-xs font-medium text-zinc-900 dark:text-zinc-100 mt-0.5">
                        {social.handle}
                      </dd>
                    </div>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 py-1"
                    >
                      <span>Open</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                    </a>
                  </div>
                ))}
              </dl>
            </div>

            <p className="mt-8 text-xs text-zinc-500 dark:text-zinc-400">
              Preferred Channels: {AVAILABILITY_CONFIG.preferredChannels.join(' · ')}
            </p>
          </div>

          {/* Right Column (7 cols): Calm, Uncluttered Inquiry Form Card */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-white dark:bg-[#111317] border border-zinc-200/90 dark:border-zinc-800/90">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                Send a Direct Inquiry
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 mb-6">
                Select an engagement topic below to compose a structured message to{' '}
                <span className="font-mono-tabular">{CONTACT_DATA.email}</span>.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = mailtoHref;
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="inquiry-name"
                      className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="Full name"
                      className="w-full px-3.5 py-2.5 min-h-[42px] text-sm rounded-lg bg-[#FAF9F6] dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-2 focus:outline-zinc-900 dark:focus:outline-zinc-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-email"
                      className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
                    >
                      Your Email
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 min-h-[42px] text-sm rounded-lg bg-[#FAF9F6] dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-2 focus:outline-zinc-900 dark:focus:outline-zinc-100"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="inquiry-topic"
                    className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
                  >
                    Topic of Interest
                  </label>
                  <select
                    id="inquiry-topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-3.5 py-2.5 min-h-[42px] text-sm rounded-lg bg-[#FAF9F6] dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-2 focus:outline-zinc-900 dark:focus:outline-zinc-100"
                  >
                    {allInquiryOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="inquiry-message"
                    className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
                  >
                    Project Scope or Learning Goals
                  </label>
                  <textarea
                    id="inquiry-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe your analytics project, timeline, or tutoring goals..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#FAF9F6] dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-2 focus:outline-zinc-900 dark:focus:outline-zinc-100"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <a
                    href={mailtoHref}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 active:scale-[0.98] dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white rounded-lg transition-all duration-150 whitespace-nowrap shrink-0"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email Client</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => handleCopyText(formattedBody, 'inquiry')}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] text-sm font-medium text-zinc-800 dark:text-zinc-200 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-600 active:scale-[0.98] rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {copiedState === 'inquiry' ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Message Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-zinc-500" />
                        <span>Copy Formatted Text</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Quiet Editorial Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <p>
            © {new Date().getFullYear()} {PROFILE_DATA.name}. All portfolio content is centralized in{' '}
            <code className="font-mono-tabular">/src/data/</code>.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={handleDownloadFooterResume}
              className="inline-flex items-center gap-1.5 font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors duration-150 cursor-pointer"
            >
              {resumeDownloaded ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Resume Downloaded</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resume ({RESUME_CONFIG.lastUpdated})</span>
                </>
              )}
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={onOpenAuditModal}
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-150 cursor-pointer"
            >
              Maintainability Guide
            </button>
            <span aria-hidden="true">·</span>
            <a
              href="#top"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-150"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
