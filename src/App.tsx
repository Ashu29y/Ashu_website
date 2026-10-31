/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SkillsAndExperienceSection } from './components/SkillsAndExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesAndTutoringSection } from './components/ServicesAndTutoringSection';
import { CredentialsAndResearchSection } from './components/CredentialsAndResearchSection';
import { InsightsAndTestimonialsSection } from './components/InsightsAndTestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { AuditModal, BlogModal, ProjectModal, ResumeModal } from './components/Modals';
import { BlogPostItem, ProjectItem } from './data';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPostItem | null>(null);
  const [selectedInquiryTopic, setSelectedInquiryTopic] = useState<string>('');

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const handleInquireTopic = (topicType: 'service' | 'tutoring', title: string) => {
    const formatted =
      topicType === 'service' ? `Freelance Service: ${title}` : `1-on-1 Tutoring: ${title}`;
    setSelectedInquiryTopic(formatted);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-zinc-900 dark:bg-[#0B0C0E] dark:text-zinc-100 transition-colors duration-150">
      {/* Top Navigation (Strict 3-Zone Top Bar Contract) */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content Flow: Hero → About → Skills → Experience → Projects → Services → Tutoring → Research & Credentials → Insights → Contact */}
      <main className="flex-1">
        <HeroSection
          isDark={isDark}
          onToggleTheme={() => setIsDark((prev) => !prev)}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />

        <SkillsAndExperienceSection />

        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        <ServicesAndTutoringSection onInquireTopic={handleInquireTopic} />

        <CredentialsAndResearchSection />

        <InsightsAndTestimonialsSection onSelectBlogPost={(post) => setSelectedBlogPost(post)} />
      </main>

      {/* Contact & Footer */}
      <ContactSection
        selectedInquiryTopic={selectedInquiryTopic}
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
      />

      {/* Accessible Modals */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <BlogModal post={selectedBlogPost} onClose={() => setSelectedBlogPost(null)} />
      <AuditModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />
    </div>
  );
}
