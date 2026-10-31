import { CertificationItem } from './types';

/**
 * RULE 5: Adding or updating a certification requires editing ONLY this file (/src/data/certifications.ts).
 * All verification URLs were extracted directly from Ashutosh Gautam's official resume PDF.
 */
export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'codebasics-excel',
    title: 'Data Analytics Certification — Advanced Excel',
    issuer: 'Codebasics',
    category: 'Data Analytics',
    credentialId: 'CB-51-434560',
    verificationUrl: 'https://codebasics.io/certificate/CB-51-434560',
    skillsValidated: ['Pivot Tables', 'Power Query', 'Power Pivot', 'P&L & Business Reporting'],
  },
  {
    id: 'codebasics-powerbi',
    title: 'Data Analytics Certification — Power BI',
    issuer: 'Codebasics',
    category: 'Business Intelligence',
    credentialId: 'CB-49-434560',
    verificationUrl: 'https://codebasics.io/certificate/CB-49-434560',
    skillsValidated: ['DAX Measures', 'Data Modeling', 'ETL Transformation', 'BI 360 Dashboards'],
  },
  {
    id: 'codebasics-sql',
    title: 'Data Analytics Certification — SQL',
    issuer: 'Codebasics',
    category: 'Databases & Querying',
    credentialId: 'CB-50-434560',
    verificationUrl: 'https://codebasics.io/certificate/CB-50-434560',
    skillsValidated: ['Relational Queries', 'Joins & CTEs', 'KPI Extraction', 'Database Analytics'],
  },
  {
    id: 'codebasics-python',
    title: 'Data Analytics Certification — Python',
    issuer: 'Codebasics',
    category: 'Programming & Data Science',
    credentialId: 'CB-48-434560',
    verificationUrl: 'https://codebasics.io/certificate/CB-48-434560',
    skillsValidated: ['Python Programming', 'NumPy', 'Pandas', 'Data Cleaning & Manipulation'],
  },
  {
    id: 'ekeeda-ml-data-science',
    title: 'Machine Learning and Data Science Certificate',
    issuer: 'Ekeeda',
    category: 'Machine Learning',
    credentialId: 'Ekeeda Verified Credential',
    verificationUrl: 'https://drive.google.com/file/d/15Byvayvikk7nSv2xhZQmk5IcD07LzboK/view?usp=drivesdk',
    skillsValidated: ['Supervised Learning', 'Regression Modeling', 'Scikit-learn', 'Model Evaluation'],
  },
];
