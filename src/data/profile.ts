import { AvailabilityConfig, ProfileData, ResumeConfig } from './types';

/**
 * RULE 7: Updating your resume requires changing ONLY this single URL/path.
 * Place any new PDF inside /public/assets/ and update `url` below.
 */
export const RESUME_CONFIG: ResumeConfig = {
  url: '/assets/aistudio/ASHU_Resume_434f0f6a.pdf',
  fileName: 'Ashutosh_Gautam_Resume.pdf',
  lastUpdated: '2026',
  fileSizeLabel: 'PDF Document · 2 Pages',
};

/**
 * RULE 8: Changing your availability requires editing ONLY this single configuration object.
 * Allowed `status` values: 'available' | 'limited' | 'unavailable'
 */
export const AVAILABILITY_CONFIG: AvailabilityConfig = {
  status: 'available',
  headline: 'Available for Data Analytics Consulting, BI Dashboards & 1-on-1 Technical Mentorship',
  subtext:
    'Currently serving as Assistant Professor at Parul University while accepting select freelance analytics projects, Power BI / Excel consulting, and personalized student tutoring.',
  openForFreelance: true,
  openForTutoring: true,
  openForResearchCollaboration: true,
  responseTime: 'Typically responds within 24 hours',
  preferredChannels: ['Email', 'LinkedIn', 'Phone'],
};

/**
 * Central Profile Data: Name, Headline, About, Metrics, and Hobbies & Interests.
 * Factually aligned 100% with Ashutosh Gautam's official resume.
 */
export const PROFILE_DATA: ProfileData = {
  name: 'Ashutosh Gautam',
  shortTitle: 'Data Analytics · Machine Learning · Technical Education',
  headline:
    'Technology professional building data-driven BI solutions, predictive machine learning applications, and industry-oriented technical education.',
  currentRole: 'Assistant Professor',
  currentOrganization: 'Parul University',
  location: 'India',
  experienceSummary: '2+ Years in Analytics, Software Development & Technical Education',
  aboutParagraphs: [
    'Technology professional with 2+ years of experience in analytics, software development, and technical education. Strong analytical and problem-solving abilities with hands-on experience in developing data-driven solutions, building end-to-end projects, and mentoring students in industry-oriented learning.',
    'From engineering multi-department Power BI dashboards with 20+ DAX measures and building Scikit-learn/Streamlit predictive applications to training 200+ undergraduate and postgraduate students and authoring peer-reviewed journal publications, my work bridges rigorous academic foundations with practical business intelligence.',
  ],
  coreFocusAreas: [
    'Business Intelligence & KPI Dashboards (Power BI, Tableau, SQL)',
    'Financial & Market Performance Analytics (Advanced Excel, Power Query, VBA)',
    'End-to-End Predictive Machine Learning (Python, Scikit-learn, Streamlit)',
    'Technical Mentorship, Project Guidance & NAAC/UGC Academic Documentation',
  ],
  metrics: [
    {
      id: 'exp-years',
      value: '2+ Yrs',
      label: 'Professional Experience',
      context: 'Analytics, software development & higher education',
    },
    {
      id: 'students-trained',
      value: '200+',
      label: 'Students Mentored',
      context: 'UG & PG training in Python, Power BI, Excel & ML',
    },
    {
      id: 'dax-measures',
      value: '20+ DAX',
      label: 'BI 360 KPI Measures',
      context: 'Sales, Marketing, Executive & Logistics analytics',
    },
    {
      id: 'publications',
      value: '2 Papers',
      label: 'Peer-Reviewed Journals',
      context: 'Published in Bank and Policy & IJTSRD (IF: 8.125)',
    },
  ],
  hobbies: [
    {
      id: 'hindi-literature',
      category: 'Creative Writing',
      description:
        'Enjoy writing Hindi poems and short stories, enhancing creativity, communication, and storytelling skills.',
    },
    {
      id: 'reading',
      category: 'Literature & Reading',
      description:
        "Currently reading The Hound of the Baskervilles by Arthur Conan Doyle along with Rashmirathi by Ramdhari Singh 'Dinkar'.",
    },
    {
      id: 'sports',
      category: 'Athletics & Sports',
      description: 'Passionate about playing cricket and other competitive team sports.',
    },
  ],
};
