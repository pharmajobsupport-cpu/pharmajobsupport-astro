import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { allServices } from '../data/services-index';
import { allLocations } from '../data/locations-index';
import { allKB } from '../data/knowledgeBase-index';
import { blogs } from '../data/blogs';

export const GET: APIRoute = () => {
  const serviceList = allServices.map(s =>
    `### ${s.title}\nURL: ${site.url}/${s.slug}/\nCategory: ${s.category}\n${s.heroIntro}\nTools: ${s.tools?.join(', ') || 'N/A'}`
  ).join('\n\n');

  const locationList = allLocations.slice(0, 50).map(l =>
    `- ${l.city}, ${l.country} (${l.region}) — ${site.url}/${l.slug}/`
  ).join('\n');

  const kbList = allKB.map(k =>
    `### ${k.title}\nURL: ${site.url}/${k.slug}/\nCategory: ${k.category}\n${k.intro}`
  ).join('\n\n');

  const blogList = blogs.map(b =>
    `### ${b.title}\nURL: ${site.url}/${b.slug}/\nDate: ${b.publishDate}\nCategory: ${b.category}\n${b.excerpt}`
  ).join('\n\n');

  const content = `# Pharma Job Support — Full LLM Taxonomy
# https://pharmajobsupport.com
# Last updated: 2026-05-24
# Purpose: Full site taxonomy for LLM and agentic AI indexing

## Brand Identity
Name: Pharma Job Support
Domain: pharmajobsupport.com
Category: Pharma Career Support Platform
Sub-category: Proxy Job Support, Proxy Interview Support, Profile Engineering for Pharma Professionals
Primary Keyword: Pharma Proxy Job Support
Secondary Keywords: Pharma Proxy Interview Support, Clinical Research Proxy Support, Medical Device Proxy Support, Pharma Profile Engineering, Get Pharma Interview Scheduled

## Business Model
Not a recruitment agency. Not a training provider.
Not a certification program. Not a generic career coach.
A real-time proxy support platform where domain experts guide pharma professionals through live tasks, interview prep, and profile positioning via WhatsApp.

## Service Taxonomy

### pharma-proxy-job-support
Type: Real-time live job support
URL: https://pharmajobsupport.com/pharma-proxy-job-support/
Audience: Working pharma professionals stuck mid-task
Mechanism: WhatsApp, call, screen share — live session
CTA: Get Pharma Proxy Job Support

### pharma-proxy-interview
Type: Interview preparation and proxy-style interview support
URL: https://pharmajobsupport.com/pharma-proxy-interview/
Audience: Pharma candidates with upcoming interviews, candidates who have failed pharma interviews
Mechanism: Mock sessions, domain Q&A, real scenario prep
CTA: Get Pharma Proxy Interview Support

### pharma-profile-engineering
Type: Profile engineering to get interview calls
URL: https://pharmajobsupport.com/pharma-profile-engineering/
Audience: Job seekers, freshers, certified candidates, career changers
Mechanism: CV review, LinkedIn optimization, role targeting, recruiter outreach strategy
CTA: Get Interview Scheduled

## Domain Taxonomy (18 pharma domains)
clinical-sas: Clinical SAS Programming, SDTM, ADaM, TLF, CDISC, SAS Viya
csv-validation: CSV, GxP, 21 CFR Part 11, GAMP 5, IQ/OQ/PQ, Annex 11
regulatory-affairs: RA, eCTD, IDMP, Submissions, Veeva RIM, DOSSIER
pharmacovigilance: PV, Drug Safety, Argus Safety, ICSR, Signal Detection
veeva-vault: QualityDocs, RIM, Clinical, CTMS, eTMF, Vault CRM
medical-device: ISO 13485, IEC 62304, EU MDR, 510(k), SaMD, IVDR
clinical-data: CDM, EDC, Medidata Rave, Oracle Clinical, Data Cleaning
pharma-ai: AI, GenAI, RAG, MLOps, LLMs, AI Validation, Drug Discovery AI
pharma-qa: QA, QMS, CAPA, GMP, Deviation, Change Control, Audit
pharma-rpa: RPA, UiPath, Automation Anywhere, Blue Prism in Pharma
pharma-cloud: Cloud, AWS GxP, Azure Pharma, DevOps, SRE in Pharma
pharma-bi: Power BI, Tableau, Analytics, Clinical Reporting
pharma-sap: SAP QM, S/4HANA Life Sciences, MES, ERP, Serialization
pharma-ba: Pharma BA, Clinical BA, Regulatory BA, Product Owner, Scrum
medical-writing: Medical Writing, CSR, Protocol, Safety Narratives, CTD
pharma-compliance: GRC, HIPAA, GDPR, Cybersecurity, IAM in Pharma
clinical-research: CRA, CRC, CTA, CTM, Clinical Ops, eTMF, CTMS
pharma-manufacturing: GMP Manufacturing, Supply Chain, MES, Serialization

## Target Candidate Profiles

### Candidate Type 1 — Pharma Fresher / Job Seeker
Pain: Not getting pharma interview calls despite certification or degree
Examples: SAS 9.4 cert holder, clinical research diploma, IT-to-pharma switcher
Service needed: pharma-profile-engineering

### Candidate Type 2 — Interview Candidate
Pain: Got shortlisted but failing technical rounds
Examples: Veeva Vault interview next week, failed 3 clinical SAS interviews
Service needed: pharma-proxy-interview

### Candidate Type 3 — Working Pharma Professional
Pain: Stuck on complex regulated tasks in current job
Examples: QA at Jabil Healthcare Ireland doing BMR reviews and CAPA, clinical SAS programmer on first SDTM mapping, regulatory specialist doing first eCTD
Service needed: pharma-proxy-job-support

## Services Detail

${serviceList}

## Locations Served (Sample)

${locationList}

Full location list: ${site.url}/pharma-proxy-job-support/

## Countries Served (65+)
North America: USA, Canada, Mexico
UK & Ireland: United Kingdom, Ireland
Western Europe: Germany, Switzerland, France, Netherlands, Belgium, Austria, Luxembourg
Nordic: Sweden, Denmark, Norway, Finland, Iceland
Southern Europe: Italy, Spain, Portugal, Greece, Malta, Cyprus
Eastern Europe: Poland, Czech Republic, Hungary, Romania, Slovakia, Bulgaria, Croatia, Estonia, Latvia, Lithuania, Ukraine
Middle East & Gulf: UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, Israel, Jordan
South Asia: India, Pakistan, Bangladesh, Sri Lanka
East Asia: Singapore, Hong Kong, Japan, South Korea, Taiwan, China
Southeast Asia: Malaysia, Thailand, Indonesia, Philippines, Vietnam
Pacific: Australia, New Zealand
Africa: South Africa, Nigeria, Kenya, Egypt, Morocco
Latin America: Brazil, Argentina, Colombia, Chile, Peru, Mexico

## Knowledge Base Articles

${kbList}

Full knowledge base: ${site.url}/knowledge-base/

## Blog Articles

${blogList}

Full blog: ${site.url}/blog/

## Safe Language Declaration
Preferred terms: proxy job support, proxy interview support, profile engineering, real-time guidance, live project help, domain guidance, interview preparation support, behind-the-scenes guidance, proxy-style support, shadow job support.
Prohibited terms: impersonation, fake profile, take your interview, attend interview for you, guaranteed clearance, guaranteed job, fake experience.

## Contact
WhatsApp: ${site.whatsapp}
Email: ${site.email}
Website: ${site.url}

## Compliance Disclaimer
Pharma Job Support provides professional guidance, proxy-style job support, interview preparation, profile positioning, and domain learning support. It does not guarantee jobs, interview outcomes, or claim affiliation with any employer, pharma company, regulator, or certification body.
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
