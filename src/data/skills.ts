import { SkillGroup } from './types';

/**
 * Centralized Skills Data.
 * Organized directly from the Resume "Skills" section so updating skills requires editing ONLY this file.
 */
export const SKILLS_DATA: SkillGroup[] = [
  {
    id: 'advanced-excel',
    category: 'Advanced Excel',
    summary:
      'Financial modeling, Profit & Loss (P&L) statements, customer/market trend analysis, and automated reporting workflows.',
    skills: [
      'Pivot Table',
      'Charts',
      'Lookups',
      'Power Query',
      'Power Pivot',
      'Macros',
      'VBA',
    ],
    featuredTools: ['Power Query', 'Power Pivot', 'VBA Macros', 'P&L Modeling'],
    highlightMetric: '304.5% sales growth identified ($87.5M to $598.9M) in FY19–FY21 study',
  },
  {
    id: 'power-bi',
    category: 'Power BI',
    summary:
      'Multi-domain business intelligence architecture across Sales, Marketing, Executive, and Logistics operations.',
    skills: [
      'Power Query',
      'Data Modelling',
      'DAX',
      'Extract, Transform & Load (ETL)',
      'Data Transformation',
      'Data Reporting',
    ],
    featuredTools: ['DAX Measures', 'Star Schema Modelling', 'ETL Pipelines', 'KPI Dashboards'],
    highlightMetric: '20+ custom DAX measures & cross-functional BI 360 dashboards',
  },
  {
    id: 'python-ml',
    category: 'Python & Machine Learning',
    summary:
      'Data preprocessing, exploratory analysis, feature engineering, regression modeling, and live Streamlit model deployment.',
    skills: [
      'Numpy',
      'Pandas',
      'Scikit Learn',
      'Machine learning',
      'Streamlit Deployment',
      'Feature Engineering',
    ],
    featuredTools: ['Pandas', 'NumPy', 'Scikit-learn', 'Streamlit'],
    highlightMetric: '50+ hours immersive coding & deployed ML web apps',
  },
  {
    id: 'programming-databases',
    category: 'Programming & Databases',
    summary:
      'Core programming languages, relational database querying, web fundamentals, and computer science foundations.',
    skills: ['HTML', 'CSS', 'C language', 'Python', 'SQL'],
    featuredTools: ['SQL', 'Python', 'C Language', 'HTML & CSS'],
    highlightMetric: 'Integrated SQL & Excel pipelines for enterprise BI reporting',
  },
];
