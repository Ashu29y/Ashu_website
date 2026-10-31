# Ashutosh Gautam — Portfolio & Maintainability Documentation

Official portfolio website for **Ashutosh Gautam** (*Assistant Professor at Parul University · Data Analytics, Machine Learning & Technical Education Specialist*).

This codebase has been architected for **multi-year maintainability**. **100% of personal data, resume links, projects, experience, certifications, services, tutoring subjects, research papers, testimonials, and blog posts are decoupled from React UI components** and stored in `/src/data/`.

---

## Centralized Data Architecture (`/src/data/`)

| File Path | Content Managed | Single-File Update Guarantee |
| :--- | :--- | :--- |
| `/src/data/profile.ts` | `RESUME_CONFIG`, `AVAILABILITY_CONFIG`, `PROFILE_DATA` (Name, Headline, About, Metrics, Hobbies) | **Rules 7 & 8**: Updating your resume URL or changing availability requires editing **only** `profile.ts`. |
| `/src/data/projects.ts` | `PROJECTS_DATA` (Used Car Price Prediction, BI 360 Project, Consumer Goods Ad Hoc Insights) | **Rule 1**: Adding or editing a project requires editing **only** `projects.ts`. Filter tabs update automatically. |
| `/src/data/services.ts` | `SERVICES_DATA` (Freelance BI, Excel Financial Modeling, Python ML, Academic Consulting) | **Rule 2**: Adding or editing a freelance service requires editing **only** `services.ts`. |
| `/src/data/tutoring.ts` | `TUTORING_DATA` (Power BI & DAX, Advanced Excel, Python & ML, SQL & DBMS) | **Rule 3**: Adding or editing a tutoring subject requires editing **only** `tutoring.ts`. |
| `/src/data/experience.ts` | `EXPERIENCE_DATA` (Parul University, Marwadi University, AnytchPros Infotech LLP) | **Rule 4**: Adding or editing work experience requires editing **only** `experience.ts`. |
| `/src/data/certifications.ts` | `CERTIFICATIONS_DATA` (Codebasics Excel, Power BI, SQL, Python; Ekeeda ML & Data Science) | **Rule 5**: Adding or editing a certification requires editing **only** `certifications.ts`. |
| `/src/data/contact.ts` | `CONTACT_DATA` (Email, Phone, Location, LinkedIn, GitHub, Research Links) | **Rule 6**: Updating social links or contact details requires editing **only** `contact.ts`. |
| `/src/data/skills.ts` | `SKILLS_DATA` (Advanced Excel, Power BI, Python & ML, Programming & Databases) | Updating skills or tools requires editing **only** `skills.ts`. |
| `/src/data/education.ts` | `EDUCATION_DATA` (MCA at VITS Satna) & `PUBLICATIONS_DATA` (2 Peer-Reviewed Journal Papers) | Updating degrees or published journal papers requires editing **only** `education.ts`. |
| `/src/data/testimonials.ts` | `TESTIMONIALS_DATA` & `SHOW_TESTIMONIALS_SECTION` boolean toggle | Adding, editing, or hiding testimonials requires editing **only** `testimonials.ts`. |
| `/src/data/blog.ts` | `BLOG_POSTS_DATA` (Research notes & technical articles) | Adding or editing a blog post requires editing **only** `blog.ts`. |
| `/src/data/types.ts` | TypeScript interfaces enforcing strict schema validation across all data files | Prevents accidental typos or missing fields when updating content. |

---

## How to Update This Website

You never need to touch any file inside `/src/components/` to update your text, links, resume, or portfolio items. Follow these step-by-step instructions:

### 1. How to Update Your Resume PDF (Rule 7)
1. Place your new PDF file inside the `/public/assets/` folder (for example: `/public/assets/Ashutosh_Resume_2027.pdf`).
2. Open **`/src/data/profile.ts`**.
3. Locate `RESUME_CONFIG` at the top of the file and update the `url` and `lastUpdated` fields:
   ```ts
   export const RESUME_CONFIG: ResumeConfig = {
     url: '/assets/Ashutosh_Resume_2027.pdf',
     fileName: 'Ashutosh_Gautam_Resume.pdf',
     lastUpdated: '2027',
     fileSizeLabel: 'PDF Document · 2 Pages',
   };
   ```
4. Save the file. Every "View Resume" modal and "Download PDF" button across the entire website will automatically use your new PDF.

---

### 2. How to Change Your Availability Status (Rule 8)
1. Open **`/src/data/profile.ts`**.
2. Locate `AVAILABILITY_CONFIG`:
   ```ts
   export const AVAILABILITY_CONFIG: AvailabilityConfig = {
     status: 'available', // Change to 'available', 'limited', or 'unavailable'
     headline: 'Available for Data Analytics Consulting, BI Dashboards & 1-on-1 Technical Mentorship',
     subtext: 'Currently serving as Assistant Professor at Parul University...',
     openForFreelance: true,
     openForTutoring: true,
     openForResearchCollaboration: true,
     responseTime: 'Typically responds within 24 hours',
     preferredChannels: ['Email', 'LinkedIn', 'Phone'],
   };
   ```
3. Save the file. Both the top availability bar and the contact section will update automatically.

---

### 3. How to Add a New Project (Rule 1)
1. Open **`/src/data/projects.ts`**.
2. Copy one of the existing project blocks inside `PROJECTS_DATA` and paste it at the top of the list:
   ```ts
   {
     id: 'my-new-project',
     title: 'Supply Chain Forecasting Dashboard',
     subtitle: 'Predictive Inventory & Logistics Analytics',
     category: 'Power BI / SQL', // Using a new category name automatically creates a new filter button!
     techStack: ['Power BI', 'SQL', 'DAX'],
     highlights: [
       'First achievement bullet point...',
       'Second achievement bullet point...',
     ],
     keyMetrics: [
       { label: 'Accuracy', value: '94.2%' },
       { label: 'Dashboards', value: '3 Views' },
       { label: 'Data Source', value: 'SQL Server' },
     ],
     links: [
       { label: 'GitHub Repo', url: 'https://github.com/Ashu29y/...', type: 'github' },
     ],
     featured: true,
     architectureSummary: 'SQL Database → Power Query ETL → DAX Measures → Executive Dashboard',
   },
   ```
3. Save the file. Your new project card, filter category button, and detail modal will appear automatically.

---

### 4. How to Add Work Experience (Rule 4)
1. Open **`/src/data/experience.ts`**.
2. Add a new object at the top of `EXPERIENCE_DATA`:
   ```ts
   {
     id: 'new-university-or-company',
     role: 'Senior Assistant Professor',
     organization: 'University Name',
     period: 'Aug 2027 – Present',
     isCurrent: true, // Set previous role's isCurrent to false
     category: 'Academic', // 'Academic' or 'Software & Analytics'
     highlights: [
       'Key responsibility or achievement 1...',
       'Key responsibility or achievement 2...',
     ],
     technologies: ['Python', 'Machine Learning', 'Academic Leadership'],
   },
   ```
3. Save the file.

---

### 5. How to Add a Certification (Rule 5)
1. Open **`/src/data/certifications.ts`**.
2. Add a new item to `CERTIFICATIONS_DATA`:
   ```ts
   {
     id: 'new-certificate-id',
     title: 'Certificate Name',
     issuer: 'Issuing Organization',
     category: 'Data Analytics',
     credentialId: 'CRED-12345',
     verificationUrl: 'https://...',
     skillsValidated: ['Skill 1', 'Skill 2'],
   },
   ```
3. Save the file.

---

### 6. How to Add a Freelance Service (Rule 2) or Tutoring Subject (Rule 3)
- **For Freelance Services**: Open **`/src/data/services.ts`** and add an entry to `SERVICES_DATA`.
- **For Tutoring Subjects**: Open **`/src/data/tutoring.ts`** and add an entry to `TUTORING_DATA`.
- Both the Services/Tutoring section and the Contact Form dropdown menu automatically include your new items!

---

### 7. How to Update Social Links or Contact Details (Rule 6)
1. Open **`/src/data/contact.ts`**.
2. Edit `email`, `phone`, `phoneHref`, or add/modify items in `socialLinks`.
3. Save the file. All links in the Hero section, Contact section, and copy-to-clipboard buttons update automatically.

---

### 8. How to Update Name, Headline, About, Skills, Education, Publications, Testimonials, or Blog Posts
- **Name, Headline, About, Key Metrics, Hobbies**: Edit **`/src/data/profile.ts`** (`PROFILE_DATA`).
- **Skills**: Edit **`/src/data/skills.ts`** (`SKILLS_DATA`).
- **Education & Published Journal Papers**: Edit **`/src/data/education.ts`** (`EDUCATION_DATA` and `PUBLICATIONS_DATA`).
- **Testimonials**: Edit **`/src/data/testimonials.ts`** (`TESTIMONIALS_DATA`, or set `SHOW_TESTIMONIALS_SECTION = false` to hide).
- **Blog Posts / Research Notes**: Edit **`/src/data/blog.ts`** (`BLOG_POSTS_DATA`).

---

## Summary of Maintainability & Technical Audit Findings

1. **Link Hygiene Audit (PDF URI Inspection)**:
   - Inspected all raw PDF link annotations inside `ASHU_Resume_434f0f6a.pdf`.
   - Discovered that several pipe separators (`|`) in the resume template contained leftover hidden links pointing to a template author (`keerthana-komati`).
   - Stripped 100% of template artifacts and retained **only Ashutosh Gautam's verified links**:
     - LinkedIn: `https://www.linkedin.com/in/ashutosh-gautam-960a19253/`
     - GitHub: `https://github.com/Ashu29y`
     - Used Car Price Prediction Repo: `https://github.com/Ashu29y/Ucar_price_prediction`
     - Used Car Price Prediction Live App: `https://ucar-price-prediction.onrender.com/`
     - BI 360 Project Repo: `https://github.com/Ashu29y/BI_360_Project`
     - Consumer Goods Ad Hoc Insights Repo: `https://github.com/Ashu29y/Sales_-_Finance_Report`
     - Codebasics Certificates: `CB-51-434560` (Excel), `CB-49-434560` (Power BI), `CB-50-434560` (SQL), `CB-48-434560` (Python)
     - Ekeeda Certificate: Google Drive verified link
     - IJTSRD Published Paper PDF: `https://www.ijtsrd.com/papers/ijtsrd99889.pdf`
2. **SEO & Structured Data**:
   - Replaced placeholder `<title>` and `<meta>` tags in `index.html` with Ashutosh Gautam's branded metadata, OpenGraph tags, Twitter cards, and Schema.org `Person` JSON-LD structured data.
3. **Accessibility, Mobile Layout & Performance**:
   - Semantic landmarks (`<header>`, `<main>`, `<section>`, `<footer>`), keyboard `Escape` modal dismissal, `>=40px` interactive targets, `prefers-reduced-motion` support, and zero external fragile image URLs.
