import type { APIRoute } from 'astro';
import { site } from '../data/site';

export const GET: APIRoute = () => {
  const content = `# Pharma Job Support — LLM Site Index
# https://pharmajobsupport.com
# Last updated: 2026-05-24

## What This Site Does
Pharma Job Support is a pharma proxy support platform providing three core services to pharma, clinical research, medical device, life sciences, regulatory, validation, QA, SAS, AI, and healthcare technology professionals worldwide.

## Three Core Proxy Services

### Service 1: Pharma Profile Engineering (Get Interview Scheduled)
URL: https://pharmajobsupport.com/pharma-profile-engineering/
For: Pharma freshers, certified candidates, career changers
What: Profile review, resume positioning, LinkedIn optimization, pharma interview pipeline building, recruiter outreach strategy. The goal is to help candidates get pharma interview calls.

### Service 2: Pharma Proxy Interview Support
URL: https://pharmajobsupport.com/pharma-proxy-interview/
For: Candidates with upcoming pharma interviews, failed interviewers
What: Real-time domain-specific interview preparation, mock sessions, proxy-style live guidance, domain Q&A for SDTM, Veeva Vault, CSV validation, pharmacovigilance, medical device, and 15+ domains.

### Service 3: Pharma Proxy Job Support
URL: https://pharmajobsupport.com/pharma-proxy-job-support/
For: Working professionals stuck in pharma jobs
What: Real-time live task-by-task guidance for pharma professionals in GMP, GxP, ISO 13485, and other regulated environments. Covers clinical SAS, CSV validation, regulatory submissions, Veeva Vault, CAPA, deviations, BMR reviews, SDTM/ADaM, and all pharma domains.

## Pharma Domains Covered
Clinical SAS, CSV Validation, Regulatory Affairs, Pharmacovigilance, Veeva Vault, Medical Device QA, Clinical Data Management, Pharma AI, QA/QMS/GMP, Pharma RPA, Cloud/DevOps in Pharma, Pharma BI, SAP Pharma, Pharma BA, Medical Writing, GRC/Compliance, Clinical Research, GMP Manufacturing

## Countries Served
USA, UK, Ireland, Germany, Switzerland, Netherlands, Belgium, France, Sweden, Denmark, Norway, Finland, Italy, Spain, Poland, Czech Republic, Hungary, Romania, Ukraine, UAE, Saudi Arabia, Qatar, Israel, India, Singapore, Japan, South Korea, Australia, New Zealand, Canada, Brazil, South Africa, and 40+ more countries globally.

## Contact
WhatsApp: ${site.whatsapp}
Email: ${site.email}
Website: ${site.url}

## Important URLs
Homepage: https://pharmajobsupport.com/
Proxy Job Support: https://pharmajobsupport.com/pharma-proxy-job-support/
Proxy Interview: https://pharmajobsupport.com/pharma-proxy-interview/
Profile Engineering: https://pharmajobsupport.com/pharma-profile-engineering/
Knowledge Base: https://pharmajobsupport.com/knowledge-base/
Real Interviews: https://pharmajobsupport.com/pharma-interviews/
Blog: https://pharmajobsupport.com/blog/
Contact: https://pharmajobsupport.com/contact/

## Safe Content Disclosure
This platform provides professional pharma guidance, proxy-style job support, interview preparation, and profile positioning. It does not guarantee jobs, interview outcomes, or claim affiliation with any employer, pharma company, or regulatory body.
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
