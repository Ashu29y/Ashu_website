import { TutoringSubject } from './types';

/**
 * RULE 3: Adding or updating a tutoring subject requires editing ONLY this file (/src/data/tutoring.ts).
 * Grounded in Ashutosh Gautam's Assistant Professor curriculum & 200+ students mentored.
 */
export const TUTORING_DATA: TutoringSubject[] = [
  {
    id: 'tutoring-power-bi-dax',
    title: 'Power BI, DAX & Business Intelligence Modeling',
    level: 'Beginner to Advanced',
    audience: 'UG/PG Students, Aspiring Data Analysts & Working Professionals',
    summary:
      'Master end-to-end dashboard engineering from raw SQL/Excel ingestion to star-schema modeling and executive KPI storytelling.',
    topicsCovered: [
      'Power Query ETL, data cleaning & transformation',
      'Data Modeling (Star & Snowflake schemas, relationship cardinality)',
      'Writing 20+ essential DAX measures (Time Intelligence, CALCULATE, iterators)',
      'Designing Sales, Marketing, Finance & Logistics dashboards (BI 360 methodology)',
    ],
    practicalOutcome: 'Build and publish a multi-page interactive Power BI portfolio project.',
    format: '1-on-1 Live Online or Cohort Practical Sessions',
  },
  {
    id: 'tutoring-advanced-excel',
    title: 'Advanced Excel, Power Query & Financial Analytics',
    level: 'Beginner to Advanced',
    audience: 'Commerce/Management Students, Analysts & Business Operations',
    summary:
      'Go beyond basic spreadsheets to build automated P&L statements, dynamic Pivot Table reports, and macro-driven workbooks.',
    topicsCovered: [
      'Advanced Lookups (XLOOKUP, INDEX/MATCH), dynamic arrays & conditional formulas',
      'Pivot Tables, Pivot Charts, Slicers & Power Pivot data models',
      'Power Query automation for multi-source data consolidation',
      'Profit & Loss (P&L) financial statements, YoY growth & target gap analysis, and VBA Macros',
    ],
    practicalOutcome: 'Create a complete Consumer Goods / Financial P&L analytical report.',
    format: '1-on-1 Live Online or Hands-on Lab Sessions',
  },
  {
    id: 'tutoring-python-ml',
    title: 'Python for Data Science & Machine Learning',
    level: 'Beginner to Intermediate',
    audience: 'BCA/MCA, B.Tech/M.Tech Students & Career Switchers',
    summary:
      'Learn Python programming from fundamentals to building, evaluating, and deploying real-world predictive machine learning models.',
    topicsCovered: [
      'Core Python syntax, data structures, functions & modular coding',
      'Data manipulation & exploratory analysis with NumPy and Pandas',
      'Feature engineering, regression/classification modeling with Scikit-learn',
      'Deploying interactive ML web applications using Streamlit',
    ],
    practicalOutcome: 'Develop and deploy a live end-to-end Machine Learning web app on Render/Streamlit.',
    format: '1-on-1 Live Coding & Capstone Mentorship',
  },
  {
    id: 'tutoring-sql-dbms',
    title: 'SQL, DBMS & Data Structures for Academic & Placement Success',
    level: 'Foundational to Intermediate',
    audience: 'Undergraduate & Postgraduate Computer Science / MCA Students',
    summary:
      'Strengthen core computer science fundamentals in relational databases, SQL querying, data structures, and capstone project documentation.',
    topicsCovered: [
      'Relational Database Management Systems (DBMS), normalization & ER modeling',
      'SQL querying: Joins, Group By, Subqueries, Window Functions & CTEs',
      'C Language, HTML/CSS fundamentals & Data Structures',
      'Academic & industry capstone project planning, implementation & presentation prep',
    ],
    practicalOutcome: 'Ace university exams, technical interviews, and final-year project defenses.',
    format: '1-on-1 Concept Coaching & Project Guidance',
  },
];
