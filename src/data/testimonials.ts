import { TestimonialItem } from './types';

/**
 * Centralized Testimonials & Mentorship Endorsements (/src/data/testimonials.ts).
 * Toggle `SHOW_TESTIMONIALS_SECTION` to false at any time to hide the section globally without editing UI code.
 * Add new student, faculty, or client endorsements directly to `TESTIMONIALS_DATA`.
 */
export const SHOW_TESTIMONIALS_SECTION = true;

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'mentorship-marwadi-cohort',
    quote:
      'Hands-on practical sessions in Power BI, Advanced Excel, and Machine Learning helped bridge the gap between classroom theory and industry-grade project execution across our 200+ student cohort.',
    authorName: 'Undergraduate & Postgraduate Cohort Feedback',
    authorRole: 'Programming & Data Analytics Training',
    organization: 'Marwadi University (Arrivo Edu Tech Partnership)',
    engagementContext: 'Hands-on training & end-to-end academic/industry project mentorship (May 2025 – Apr 2026)',
    outcome: '200+ students trained in Python, Power BI, Excel & ML with complete project documentation',
  },
  {
    id: 'alsl-ai-ml-club-parul',
    quote:
      'Structured technical activities through the AI & ML Club and targeted mentorship under the Advanced Learner & Slow Learner (ALSL) Committee enabled measurable student progression and clear performance reporting.',
    authorName: 'Academic Committee & Club Highlights',
    authorRole: 'AI & ML Club / ALSL Committee',
    organization: 'Parul University',
    engagementContext: 'Technical event organization, student mentoring & performance reporting (May 2026 – Present)',
    outcome: 'Streamlined student performance tracking and peer technical engagement',
  },
  {
    id: 'analytics-bi-reporting',
    quote:
      'Combining interactive Tableau and Power BI KPI dashboards with structured Excel Profit & Loss (P&L) statements delivered clear visibility into revenue, expenses, and operational profitability.',
    authorName: 'Business Intelligence & P&L Reporting Impact',
    authorRole: 'Software & Analytics Deliverables',
    organization: 'AnytchPros Infotech LLP',
    engagementContext: 'Jr. Software Developer — Python, Tableau, Power BI & Excel P&L (Jun 2024 – Apr 2025)',
    outcome: 'Interactive KPI tracking dashboards and executive P&L financial models',
  },
];
