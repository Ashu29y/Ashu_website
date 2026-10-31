import { ServiceItem } from './types';

/**
 * RULE 2: Adding or updating a freelance service requires editing ONLY this file (/src/data/services.ts).
 * Grounded strictly in Ashutosh Gautam's verified technical competencies and portfolio deliverables.
 */
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'bi-dashboard-engineering',
    indexNumber: '01',
    title: 'Power BI & Tableau Business Intelligence Dashboards',
    category: 'Business Intelligence',
    summary:
      'Design and deployment of cross-functional interactive BI dashboards for Sales, Marketing, Executive, and Logistics teams by integrating SQL databases and Excel workbooks.',
    deliverables: [
      'End-to-end ETL pipelines using Power Query & SQL',
      'Star-schema data modeling with 20+ custom DAX measures',
      'Executive KPI scorecards tracking revenue, gross margin, and target gaps',
      'Interactive drill-through views for operational decision-making',
    ],
    toolsUsed: ['Power BI', 'Tableau', 'SQL', 'DAX', 'Power Query'],
    typicalTimeline: '1 – 3 Weeks per Dashboard Suite',
    proofReference: 'Demonstrated in the BI 360 Project across 4 business verticals',
  },
  {
    id: 'excel-financial-analytics',
    indexNumber: '02',
    title: 'Advanced Excel Financial Modeling & Ad-Hoc Analytics',
    category: 'Financial & Market Analytics',
    summary:
      'Automated Profit & Loss (P&L) statements, YoY customer growth analysis, and market performance vs. target evaluation using advanced Excel formulas, Power Pivot, and VBA macros.',
    deliverables: [
      'Dynamic Profit & Loss (P&L) statements for revenue and profitability tracking',
      'Multi-year YoY customer and regional market performance workbooks',
      'Data cleaning, validation, and automated VBA macro workflows',
      'Target vs. actual gap identification reports',
    ],
    toolsUsed: ['Advanced Excel', 'Pivot Tables', 'Power Pivot', 'VBA & Macros', 'Lookups'],
    typicalTimeline: '3 – 10 Days',
    proofReference: 'Demonstrated in Consumer Goods Ad Hoc Insights ($87.5M to $598.9M revenue analysis)',
  },
  {
    id: 'predictive-ml-applications',
    indexNumber: '03',
    title: 'End-to-End Predictive Machine Learning Solutions',
    category: 'Data Science & ML',
    summary:
      'Custom regression and classification machine learning pipelines in Python, complete with exploratory preprocessing, feature engineering, model evaluation, and interactive Streamlit web deployment.',
    deliverables: [
      'Data preprocessing, outlier handling, and feature engineering pipelines',
      'Trained and evaluated Scikit-learn predictive models',
      'Interactive Streamlit web application for real-time user predictions',
      'Clean, documented GitHub repository and deployment setup',
    ],
    toolsUsed: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Streamlit'],
    typicalTimeline: '2 – 4 Weeks',
    proofReference: 'Demonstrated in the live Used Car Price Prediction Streamlit application',
  },
  {
    id: 'academic-curriculum-consulting',
    indexNumber: '04',
    title: 'Technical Training, Capstone Mentorship & Academic Documentation',
    category: 'Education & Institutional Consulting',
    summary:
      'Hands-on workshops, corporate/university training bootcamps in Data Analytics & ML, student project supervision, and NAAC/UGC-compliant academic documentation.',
    deliverables: [
      'Practical lab curricula for Python, Power BI, SQL, and Advanced Excel',
      'End-to-end capstone project guidance from planning to presentation',
      'NAAC and UGC-compliant course files, lesson plans, and assessment reports',
      'ALSL (Advanced Learner & Slow Learner) performance tracking frameworks',
    ],
    toolsUsed: ['Curriculum Design', 'NAAC/UGC Standards', 'Project Supervision', 'Hands-on Labs'],
    typicalTimeline: 'Flexible (Workshop or Semester Engagement)',
    proofReference: '200+ UG/PG students trained across Marwadi University & Parul University',
  },
];
