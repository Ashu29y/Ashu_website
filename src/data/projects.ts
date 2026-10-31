import { ProjectItem } from './types';

/**
 * RULE 1: Adding or updating a project requires editing ONLY this file (/src/data/projects.ts).
 * Categories and filter tabs in the UI are automatically generated from the `category` fields below.
 */
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'used-car-price-prediction',
    title: 'Used Car Price Prediction',
    subtitle: 'End-to-End Regression Modeling & Streamlit Deployment',
    category: 'Machine Learning / Python',
    techStack: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas', 'NumPy', 'Feature Engineering'],
    highlights: [
      'Built an end-to-end Machine Learning application using Python, Scikit-learn, and Streamlit, strengthening skills in regression modeling and model deployment.',
      'Applied data preprocessing, feature engineering, and model evaluation techniques to develop a predictive Machine Learning solution.',
    ],
    keyMetrics: [
      { label: 'Architecture', value: 'End-to-End ML' },
      { label: 'Framework', value: 'Scikit-Learn + Streamlit' },
      { label: 'Deployment', value: 'Live Web App' },
    ],
    links: [
      {
        label: 'Live Project',
        url: 'https://ucar-price-prediction.onrender.com/',
        type: 'live',
      },
      {
        label: 'GitHub Repo',
        url: 'https://github.com/Ashu29y/Ucar_price_prediction',
        type: 'github',
      },
      {
        label: 'LinkedIn Post',
        url: 'https://www.linkedin.com/posts/ashutosh-gautam-960a19253_github-ashu29yucarpriceprediction-share-7461353613672689664-QIT_/',
        type: 'linkedin',
      },
    ],
    featured: true,
    architectureSummary:
      'Raw Vehicle Dataset → Data Cleaning & Outlier Removal → Feature Engineering → Scikit-learn Regression Pipeline → Interactive Streamlit Web App',
  },
  {
    id: 'bi-360-project',
    title: 'BI 360 Project',
    subtitle: 'Cross-Functional Enterprise Business Intelligence Suite',
    category: 'Power BI / SQL',
    techStack: ['Power BI', 'SQL', 'DAX', 'Power Query', 'Excel', 'Data Modeling'],
    highlights: [
      'Designed and deployed business-specific Power BI dashboards (Sales, Marketing, Executive, and Logistics) by integrating SQL and Excel data, delivering comprehensive insights into organizational performance.',
      'Applied data modeling and created 20+ DAX measures and KPI visualizations to monitor sales, profit, gross margin, and customer performance, delivering interactive business intelligence dashboards.',
    ],
    keyMetrics: [
      { label: 'Business Views', value: '4 Departments' },
      { label: 'Custom Metrics', value: '20+ DAX Measures' },
      { label: 'Data Sources', value: 'SQL + Excel ETL' },
    ],
    links: [
      {
        label: 'GitHub Repo',
        url: 'https://github.com/Ashu29y/BI_360_Project',
        type: 'github',
      },
      {
        label: 'LinkedIn Post',
        url: 'https://www.linkedin.com/posts/ashutosh-gautam-960a19253_powerbi-dataanalytics-datavisualization-activity-7308041431225372672-zBYf',
        type: 'linkedin',
      },
    ],
    featured: true,
    architectureSummary:
      'SQL & Excel Sources → Power Query ETL → Star Schema Data Model → 20+ DAX Measures → Sales, Marketing, Executive & Logistics Views',
  },
  {
    id: 'consumer-goods-ad-hoc-insights',
    title: 'Consumer Goods Ad Hoc Insights',
    subtitle: 'Multi-Year Revenue Growth & Target Gap Analytics (FY2019–FY2021)',
    category: 'Excel',
    techStack: ['Advanced Excel', 'Pivot Tables', 'Power Query', 'Advanced Formulas', 'KPI Reporting'],
    highlights: [
      'Analyzed customer and market performance using Excel, identifying 304.5% sales growth ($87.5M to $598.9M) across FY2019–FY2021 and evaluating YoY revenue trends for key customers.',
      'Analyzed customer and market performance data in Excel using Pivot Tables, Power Query, and advanced formulas, identifying 304.5% sales growth ($87.5M to $598.9M) and generating actionable business insights.',
      'Applied data cleaning, data validation, trend analysis, and KPI reporting techniques to compare market performance against targets, identifying a 9.2% global target gap and supporting data-driven decision-making.',
    ],
    keyMetrics: [
      { label: 'Sales Growth (FY19–21)', value: '+304.5%' },
      { label: 'Revenue Scale', value: '$87.5M → $598.9M' },
      { label: 'Global Target Gap', value: '9.2% Identified' },
    ],
    links: [
      {
        label: 'GitHub Repo',
        url: 'https://github.com/Ashu29y/Sales_-_Finance_Report',
        type: 'github',
      },
      {
        label: 'LinkedIn Post',
        url: 'https://www.linkedin.com/posts/ashutosh-gautam-960a19253_dataanalytics-marketanalysis-salesgrowth-activity-7298038839363690496-iOtf',
        type: 'linkedin',
      },
    ],
    featured: true,
    architectureSummary:
      'FY19–FY21 Transactional Data → Power Query Validation → Multi-Dimensional Pivot Tables → YoY Customer & Target Gap Matrix',
  },
];
