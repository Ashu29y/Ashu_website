export interface ResumeConfig {
  /** Single source of truth for the resume file path or external URL */
  url: string;
  fileName: string;
  lastUpdated: string;
  fileSizeLabel: string;
}

export type AvailabilityStatus = 'available' | 'limited' | 'unavailable';

export interface AvailabilityConfig {
  /** Single configuration object controlling site-wide availability banners and contact states */
  status: AvailabilityStatus;
  headline: string;
  subtext: string;
  openForFreelance: boolean;
  openForTutoring: boolean;
  openForResearchCollaboration: boolean;
  responseTime: string;
  preferredChannels: string[];
}

export interface KeyMetric {
  id: string;
  value: string;
  label: string;
  context: string;
}

export interface HobbyItem {
  id: string;
  category: string;
  description: string;
}

export interface ProfileData {
  name: string;
  headline: string;
  shortTitle: string;
  currentRole: string;
  currentOrganization: string;
  location: string;
  experienceSummary: string;
  aboutParagraphs: string[];
  coreFocusAreas: string[];
  metrics: KeyMetric[];
  hobbies: HobbyItem[];
}

export interface SkillGroup {
  id: string;
  category: string;
  summary: string;
  skills: string[];
  featuredTools: string[];
  highlightMetric?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  partnershipNote?: string;
  period: string;
  isCurrent?: boolean;
  category: 'Academic' | 'Software & Analytics';
  highlights: string[];
  technologies: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
  type: 'github' | 'linkedin' | 'live' | 'document';
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  techStack: string[];
  highlights: string[];
  keyMetrics: ProjectMetric[];
  links: ProjectLink[];
  featured: boolean;
  architectureSummary: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  shortDegree: string;
  institution: string;
  location: string;
  period: string;
  relevantCoursework: string[];
  academicExposure: string;
}

export interface PublicationItem {
  id: string;
  serialNo: number;
  yearVolumeIssue: string;
  title: string;
  journalName: string;
  issn: string;
  indexingAndImpact: string;
  url?: string;
  tags: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  category: string;
  credentialId?: string;
  verificationUrl: string;
  skillsValidated: string[];
}

export interface ServiceItem {
  id: string;
  indexNumber: string;
  title: string;
  category: string;
  summary: string;
  deliverables: string[];
  toolsUsed: string[];
  typicalTimeline: string;
  proofReference: string;
}

export interface TutoringSubject {
  id: string;
  title: string;
  level: string;
  audience: string;
  summary: string;
  topicsCovered: string[];
  practicalOutcome: string;
  format: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  label: string;
  url: string;
  handle: string;
  primary?: boolean;
}

export interface ContactDetails {
  email: string;
  phone: string;
  phoneHref: string;
  location: string;
  socialLinks: SocialLink[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  organization: string;
  engagementContext: string;
  outcome: string;
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  publishedDate: string;
  readTime: string;
  excerpt: string;
  contentSections: {
    heading: string;
    body: string;
  }[];
  externalUrl?: string;
  externalUrlLabel?: string;
  tags: string[];
}

export interface MaintainabilityRuleCheck {
  id: string;
  contentArea: string;
  sourceFile: string;
  singleFileUpdateRule: string;
  status: 'Verified Centralized';
}
