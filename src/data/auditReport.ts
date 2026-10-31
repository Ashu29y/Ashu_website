import { MaintainabilityRuleCheck } from './types';

/**
 * Maintainability Audit Registry (/src/data/auditReport.ts).
 * Documents the single-file update architecture and quality audit checks across all 15 content domains.
 */
export const MAINTAINABILITY_AUDIT_CHECKS: MaintainabilityRuleCheck[] = [
  {
    id: 'rule-projects',
    contentArea: 'Projects (3 Verified Case Studies)',
    sourceFile: '/src/data/projects.ts',
    singleFileUpdateRule: 'Rule 1: Adding a project requires editing only projects.ts (filter categories auto-derive).',
    status: 'Verified Centralized',
  },
  {
    id: 'rule-services',
    contentArea: 'Freelance Services (4 Offerings)',
    sourceFile: '/src/data/services.ts',
    singleFileUpdateRule: 'Rule 2: Adding a service requires editing only services.ts.',
    status: 'Verified Centralized',
  },
  {
    id: 'rule-tutoring',
    contentArea: 'Tutoring Subjects (4 Curricula)',
    sourceFile: '/src/data/tutoring.ts',
    singleFileUpdateRule: 'Rule 3: Adding a tutoring subject requires editing only tutoring.ts.',
    status: 'Verified Centralized',
  },
  {
    id: 'rule-experience',
    contentArea: 'Experience (3 Roles: Parul, Marwadi, AnytchPros)',
    sourceFile: '/src/data/experience.ts',
    singleFileUpdateRule: 'Rule 4: Adding experience requires editing only experience.ts.',
    status: 'Verified Centralized',
  },
  {
    id: 'rule-certifications',
    contentArea: 'Certifications (5 Verified Credentials)',
    sourceFile: '/src/data/certifications.ts',
    singleFileUpdateRule: 'Rule 5: Adding a certification requires editing only certifications.ts.',
    status: 'Verified Centralized',
  },
  {
    id: 'rule-contact-social',
    contentArea: 'Social Links & Contact Details',
    sourceFile: '/src/data/contact.ts',
    singleFileUpdateRule: 'Rule 6: Updating social links or contact details requires editing only contact.ts.',
    status: 'Verified Centralized',
  },
  {
    id: 'rule-resume',
    contentArea: 'Resume PDF Asset & Metadata',
    sourceFile: '/src/data/profile.ts (RESUME_CONFIG)',
    singleFileUpdateRule: 'Rule 7: Updating resume requires changing only one URL/path in RESUME_CONFIG.',
    status: 'Verified Centralized',
  },
  {
    id: 'rule-availability',
    contentArea: 'Availability Status & Channels',
    sourceFile: '/src/data/profile.ts (AVAILABILITY_CONFIG)',
    singleFileUpdateRule: 'Rule 8: Changing availability requires editing only AVAILABILITY_CONFIG.',
    status: 'Verified Centralized',
  },
  {
    id: 'rule-profile',
    contentArea: 'Name, Headline, About & Hobbies',
    sourceFile: '/src/data/profile.ts (PROFILE_DATA)',
    singleFileUpdateRule: 'Centralized in PROFILE_DATA; zero hardcoded bio text in UI components.',
    status: 'Verified Centralized',
  },
  {
    id: 'rule-skills',
    contentArea: 'Skills & Technical Tooling',
    sourceFile: '/src/data/skills.ts',
    singleFileUpdateRule: 'Centralized in SKILLS_DATA across Advanced Excel, Power BI, Python & Programming.',
    status: 'Verified Centralized',
  },
  {
    id: 'rule-education',
    contentArea: 'Education (MCA) & Journal Publications (2 Papers)',
    sourceFile: '/src/data/education.ts',
    singleFileUpdateRule: 'Centralized in EDUCATION_DATA and PUBLICATIONS_DATA.',
    status: 'Verified Centralized',
  },
  {
    id: 'rule-testimonials',
    contentArea: 'Testimonials & Cohort Impact',
    sourceFile: '/src/data/testimonials.ts',
    singleFileUpdateRule: 'Centralized in TESTIMONIALS_DATA with one-line SHOW_TESTIMONIALS_SECTION toggle.',
    status: 'Verified Centralized',
  },
  {
    id: 'rule-blog',
    contentArea: 'Blog Posts & Research Notes',
    sourceFile: '/src/data/blog.ts',
    singleFileUpdateRule: 'Centralized in BLOG_POSTS_DATA with modal reader & direct paper links.',
    status: 'Verified Centralized',
  },
];

export const TECHNICAL_AUDIT_FINDINGS = [
  {
    category: 'Broken & Stale Links Audit',
    finding:
      'Extracted all embedded PDF annotations from ASHU_Resume_434f0f6a.pdf. Identified and stripped 14 hidden template separator links that pointed to a third-party profile, retaining exclusively Ashutosh Gautam’s verified GitHub (Ashu29y), LinkedIn (ashutosh-gautam-960a19253), Live Streamlit App, Codebasics credentials (CB-*-434560), Ekeeda certificate, and IJTSRD PDF.',
  },
  {
    category: 'Zero Hardcoded Content & Zero Duplication',
    finding:
      'Refactored 100% of user-facing strings (Name, Headline, About, Skills, Experience, Projects, Education, Publications, Certifications, Services, Tutoring, Contact, Availability, Testimonials, Blog) into /src/data/*.ts with strict TypeScript interfaces.',
  },
  {
    category: 'SEO & Structured Data',
    finding:
      'Replaced generic HTML placeholders with branded title, meta description, OpenGraph tags, Twitter card metadata, and Schema.org Person JSON-LD structured data.',
  },
  {
    category: 'Accessibility & Mobile Layout',
    finding:
      'Implemented semantic HTML5 landmarks (<header>, <main>, <section>, <footer>), keyboard-accessible modals (ESC to close), WCAG AA contrast in both Light and Dark themes, >=44px mobile touch targets, and prefers-reduced-motion compliance.',
  },
];
