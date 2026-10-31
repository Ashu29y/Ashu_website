import { ExperienceItem } from './types';

/**
 * RULE 4: Adding or updating professional experience requires editing ONLY this file.
 * All entries strictly preserve factual dates, titles, organizations, and achievements from the resume.
 */
export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'parul-university',
    role: 'Assistant Professor',
    organization: 'Parul University',
    period: 'May 2026 – Present',
    isCurrent: true,
    category: 'Academic',
    highlights: [
      'Contributed to the AI & ML Club and Advanced Learner & Slow Learner (ALSL) Committee, organizing technical activities, mentoring students, and preparing performance reports.',
    ],
    technologies: ['AI & Machine Learning', 'Technical Mentorship', 'Performance Analytics', 'Academic Leadership'],
  },
  {
    id: 'marwadi-university',
    role: 'Assistant Professor',
    organization: 'Marwadi University',
    partnershipNote: 'Partnered With Arrivo Edu tech pvt. Limited',
    period: 'May 2025 – Apr 2026',
    isCurrent: false,
    category: 'Academic',
    highlights: [
      'Trained 200+ undergraduate and postgraduate students in programming languages along with data analysis tools including Power BI, Excel, and Machine Learning, etc. through hands-on practical sessions.',
      'Mentored and guided students in developing academic and industry-oriented projects, providing support throughout project planning, implementation, documentation, and presentations.',
      'Prepared and maintained NAAC and UGC-compliant academic documentation, including course files, lesson plans, assessment records, and accreditation-related reports, ensuring adherence to institutional quality standards.',
    ],
    technologies: ['Power BI', 'Advanced Excel', 'Machine Learning', 'Python', 'NAAC & UGC Documentation'],
  },
  {
    id: 'anytchpros-infotech',
    role: 'Jr. Software Developer',
    organization: 'AnytchPros Infotech LLP',
    period: 'Jun 2024 – April 2025',
    isCurrent: false,
    category: 'Software & Analytics',
    highlights: [
      'Developed proficiency in Python through an immersive learning experience, completing over 50 hours of hands-on coding.',
      'Developed interactive Tableau and Power BI dashboards for data visualization, KPI tracking, and business reporting.',
      'Created a Profit & Loss (P&L) statement in Excel to analyze revenue, expenses, and profitability, enabling better financial decision-making.',
    ],
    technologies: ['Python', 'Power BI', 'Tableau', 'Excel P&L Financial Modeling', 'KPI Reporting'],
  },
];
