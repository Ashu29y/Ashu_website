import { EducationItem, PublicationItem } from './types';

/**
 * Centralized Education and Peer-Reviewed Journal Publications Data.
 * Directly reflects Page 2 of Ashutosh Gautam's official resume.
 */
export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'mca-vits-satna',
    degree: 'Master of Computer Applications (MCA)',
    shortDegree: 'MCA',
    institution: 'Vindhya Institute of Technology and Science, Satna',
    location: 'Satna, Madhya Pradesh',
    period: 'Jun 2022 – Jul 2024',
    relevantCoursework: [
      'Data Structures',
      'DBMS',
      'Python Programming',
      'Data Mining',
      'Data Analytics',
      'Machine Learning',
      'Artificial Intelligence',
      'Software Engineering',
      'Operating Systems',
      'Cloud Computing',
      'Computer Networks',
    ],
    academicExposure:
      'Strengthened analytical, programming, and problem-solving skills through coursework, practical labs, and capstone projects focused on data analysis, business intelligence, and machine learning applications.',
  },
];

export const PUBLICATIONS_DATA: PublicationItem[] = [
  {
    id: 'brics-investment-at-risk-2025',
    serialNo: 1,
    yearVolumeIssue: 'Issue 2, Vol. 5, 2025',
    title:
      'Investment-at-Risk under Geopolitical Uncertainty in BRICS Countries: An Integrated Theoretical Framework on Risk Transmission, Institutional Vulnerability, and Strategic Investment Behavior',
    journalName: 'BANK AND POLICY',
    issn: 'ISSN Print: 2790-1041 | ISSN Online: 2790-2366',
    indexingAndImpact: 'International, open-access, double-blind peer-reviewed academic journal',
    tags: ['Geopolitical Risk', 'BRICS Economies', 'Strategic Investment', 'Risk Transmission'],
  },
  {
    id: 'ai-financial-planning-ijtsrd',
    serialNo: 2,
    yearVolumeIssue: 'Volume-9 | Issue-6',
    title:
      'Assessing the Impact of AI on Financial Planning and Wealth Management: A Study of Indian Financial Advisors',
    journalName: 'INTERNATIONAL JOURNAL OF TREND IN SCIENTIFIC RESEARCH AND DEVELOPMENT (IJTSRD)',
    issn: 'ISSN: 2456-6470',
    indexingAndImpact: 'Open Access journal · ISSN: 2456-6470 · Impact Factor: 8.125',
    url: 'https://www.ijtsrd.com/papers/ijtsrd99889.pdf',
    tags: ['Artificial Intelligence', 'Financial Planning', 'Wealth Management', 'Impact Factor 8.125'],
  },
];
