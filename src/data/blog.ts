import { BlogPostItem } from './types';

/**
 * Centralized Blog Posts & Research Insights (/src/data/blog.ts).
 * Grounded in Ashutosh Gautam's published peer-reviewed journal papers and technical project case studies.
 * Adding a new article requires editing ONLY this file.
 */
export const BLOG_POSTS_DATA: BlogPostItem[] = [
  {
    id: 'ai-impact-financial-planning-wealth-management',
    slug: 'assessing-impact-of-ai-on-financial-planning-indian-advisors',
    title: 'Assessing the Impact of AI on Financial Planning and Wealth Management: Insights from Indian Financial Advisors',
    category: 'Published Research',
    publishedDate: 'Volume 9 · Issue 6',
    readTime: '6 min read',
    excerpt:
      'An overview of our peer-reviewed open-access study published in IJTSRD (ISSN: 2456-6470, Impact Factor: 8.125) examining how Artificial Intelligence is reshaping advisory workflows, portfolio personalization, and risk assessment.',
    contentSections: [
      {
        heading: 'Research Context & Objective',
        body: 'Published in the International Journal of Trend in Scientific Research and Development (IJTSRD, Volume 9, Issue 6), this research investigates how Indian financial advisors adopt and perceive Artificial Intelligence tools across wealth management, automated asset allocation, and client risk profiling.',
      },
      {
        heading: 'Key Analytical Findings',
        body: 'While AI-driven analytics significantly accelerates data synthesis, scenario modeling, and anomaly detection, human advisory judgment remains critical for behavioral coaching and navigating complex regulatory and household nuances in emerging markets.',
      },
      {
        heading: 'Practical Implications for Analysts',
        body: 'Modern financial analytics requires combining transparent statistical models with interpretable dashboards so advisors and stakeholders can audit recommendations with confidence.',
      },
    ],
    externalUrl: 'https://www.ijtsrd.com/papers/ijtsrd99889.pdf',
    externalUrlLabel: 'Read Full Published Paper (PDF)',
    tags: ['Artificial Intelligence', 'Wealth Management', 'IJTSRD', 'Impact Factor 8.125'],
  },
  {
    id: 'brics-investment-at-risk-geopolitical-uncertainty',
    slug: 'investment-at-risk-geopolitical-uncertainty-brics-framework',
    title: 'Investment-at-Risk under Geopolitical Uncertainty in BRICS Countries: An Integrated Theoretical Framework',
    category: 'Published Research',
    publishedDate: '2025 · Vol. 5, Issue 2',
    readTime: '7 min read',
    excerpt:
      'A synopsis of our double-blind peer-reviewed publication in Bank and Policy (ISSN Print: 2790-1041 | Online: 2790-2366) exploring risk transmission channels, institutional vulnerability, and strategic investment behavior.',
    contentSections: [
      {
        heading: 'Why BRICS Risk Transmission Matters',
        body: 'Published in Bank and Policy (Issue 2, Vol. 5, 2025), this paper develops an integrated theoretical framework explaining how geopolitical shocks propagate across BRICS economies through trade, capital flows, and institutional buffers.',
      },
      {
        heading: 'Institutional Vulnerability & Strategic Behavior',
        body: 'Rather than treating geopolitical shocks as uniform macro events, the framework models how domestic institutional resilience moderates investment-at-risk and shapes long-horizon capital allocation decisions.',
      },
    ],
    tags: ['BRICS', 'Geopolitical Risk', 'Bank and Policy', 'Peer-Reviewed Journal'],
  },
  {
    id: 'architecting-bi-360-powerbi-sql-dashboards',
    slug: 'architecting-bi-360-multi-department-power-bi-dashboards',
    title: 'Architecting BI 360: Integrating SQL & Excel with 20+ DAX Measures for Cross-Departmental Analytics',
    category: 'Business Intelligence',
    publishedDate: 'Case Study Note',
    readTime: '5 min read',
    excerpt:
      'How to unify Sales, Marketing, Executive, and Logistics KPIs into a cohesive Power BI data model using Power Query ETL, star-schema modeling, and reusable DAX measures.',
    contentSections: [
      {
        heading: 'Unifying Fragmented Departmental Data',
        body: 'In enterprise analytics, Sales, Marketing, Executive leadership, and Logistics often rely on disconnected spreadsheets and database exports. In the BI 360 Project, we integrated relational SQL data with Excel targets through structured Power Query ETL pipelines.',
      },
      {
        heading: 'Designing 20+ DAX Measures for Actionable KPIs',
        body: 'By establishing a clean dimensional model first, we engineered over 20 DAX measures covering Net Sales, Gross Margin %, Profit Variance, and Customer Retention—enabling leaders to drill down from global executive summaries to SKU-level logistics performance.',
      },
    ],
    externalUrl: 'https://github.com/Ashu29y/BI_360_Project',
    externalUrlLabel: 'Explore BI 360 GitHub Repository',
    tags: ['Power BI', 'DAX', 'SQL', 'Data Modeling'],
  },
  {
    id: 'end-to-end-ml-regression-streamlit',
    slug: 'deploying-used-car-price-prediction-scikit-learn-streamlit',
    title: 'From Notebook to Live Web App: Deploying Regression Models with Python, Scikit-learn, and Streamlit',
    category: 'Machine Learning',
    publishedDate: 'Technical Guide',
    readTime: '4 min read',
    excerpt:
      'Lessons from building and deploying the Used Car Price Prediction application—covering data preprocessing, feature engineering, regression evaluation, and cloud deployment.',
    contentSections: [
      {
        heading: 'Bridging Model Training and End-User Accessibility',
        body: 'Many machine learning projects stop inside a Jupyter notebook. By wrapping a trained Scikit-learn regression pipeline inside an interactive Streamlit interface, stakeholders can test real-time vehicle valuation scenarios directly in the browser.',
      },
      {
        heading: 'Feature Engineering & Evaluation',
        body: 'Careful handling of categorical encoding, vehicle age depreciation curves, and outlier filtering proved far more impactful on generalization accuracy than black-box hyperparameter tuning alone.',
      },
    ],
    externalUrl: 'https://ucar-price-prediction.onrender.com/',
    externalUrlLabel: 'Launch Live Streamlit App',
    tags: ['Python', 'Scikit-learn', 'Streamlit', 'Machine Learning'],
  },
];
