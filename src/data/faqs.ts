export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: string;
  faqs: FAQ[];
}

export const globalFAQs: FAQCategory[] = [
  {
    category: 'General Proxy Job Support',
    faqs: [
      {
        question: 'What is pharma proxy job support?',
        answer:
          'Pharma proxy job support is real-time, behind-the-scenes guidance provided by experienced pharma professionals to help you understand project tasks, handle deliverables, navigate regulated workflows, and succeed in your pharma, clinical research, or medical device role. It is practical domain support — not impersonation.',
      },
      {
        question: 'Who can benefit from pharma proxy job support?',
        answer:
          'Professionals working in clinical SAS, CSV validation, pharmacovigilance, regulatory affairs, medical device QA, Veeva, CDM, pharma data analytics, healthcare IT, RPA, clinical research, and related life sciences roles benefit most. It is especially useful for professionals who are new to a domain, transitioning from IT to pharma, or facing complex project challenges.',
      },
      {
        question: 'Is proxy job support legal and ethical?',
        answer:
          'Yes. Pharma Job Support provides professional guidance, domain mentoring, and educational support. We do not impersonate individuals, attend interviews on their behalf, or make false representations to employers. Our support is comparable to a domain expert consulting service that helps you understand and execute your own work.',
      },
      {
        question: 'How quickly can I get proxy job support?',
        answer:
          'Support is available on demand via WhatsApp. For most queries, you can connect with a domain expert within hours. For complex project support, we schedule dedicated sessions based on your timezone and availability.',
      },
      {
        question: 'Do you provide proxy support for all pharma domains?',
        answer:
          'Yes. We cover clinical SAS, CSV validation, GxP compliance, regulatory affairs, pharmacovigilance, medical device QA, Veeva Vault, clinical data management, pharma AI/ML, healthcare IT, RPA, pharma QA/QC, clinical research, business analysis, and more.',
      },
      {
        question: 'What countries do you provide pharma proxy job support for?',
        answer:
          'We provide remote pharma proxy job support globally — USA, UK, Canada, Ireland, Germany, Switzerland, Netherlands, Belgium, Australia, Singapore, UAE, India, and 30+ other countries. Support is available across all major timezones.',
      },
      {
        question: 'How do I get started with pharma proxy job support?',
        answer:
          'Message us on WhatsApp at +91-9660834611 or email support@pharmajobsupport.com with your role, domain, and specific challenge. We match you with a subject matter expert and schedule a session within 24-48 hours. Emergency same-day support is available for urgent situations.',
      },
      {
        question: 'Is proxy support available on weekends and holidays?',
        answer:
          'Yes. We operate 7 days a week, 365 days a year. Pharmaceutical project deadlines do not follow business hours, and neither does our support. Weekend and after-hours support is available for clients with active packages.',
      },
      {
        question: 'Can I get proxy support for multiple domains simultaneously?',
        answer:
          'Yes. Many professionals need support across overlapping areas — for example, a Veeva Vault validation role that requires both CSV knowledge and Regulatory Affairs understanding. We assign experts from each relevant domain and coordinate their support around your schedule.',
      },
    ],
  },
  {
    category: 'Interview Support',
    faqs: [
      {
        question: 'What is pharma interview proxy support?',
        answer:
          'Pharma interview proxy support is role-based interview preparation that helps you understand the domain deeply, prepare answers to technical and scenario-based questions, practice mock interviews, and build confidence for pharma, clinical research, and medical device job interviews.',
      },
      {
        question: 'Do you guarantee interview success?',
        answer:
          'No. We prepare you thoroughly for pharma interviews and improve your domain knowledge significantly, but we do not guarantee specific outcomes. Interview results depend on many factors including the employer, role complexity, and competition.',
      },
      {
        question: 'What interview topics do you cover?',
        answer:
          'We cover technical domain knowledge, GxP regulations, tool-specific questions (SAS, Veeva, Argus Safety, MedDRA, EDC, etc.), scenario-based project questions, behavioral questions for pharma roles, regulatory submission processes, validation protocols, and CDISC standards.',
      },
      {
        question: 'How far in advance should I book interview preparation?',
        answer:
          'For thorough preparation, 3-5 days before the interview is ideal. However, we also provide emergency next-day and same-day interview preparation for urgent situations. Contact us immediately via WhatsApp at +91-9660834611 — we move quickly.',
      },
      {
        question: 'Do you provide mock interview sessions?',
        answer:
          'Yes. Mock interviews with domain experts simulate real pharma technical interviews. After the mock session, our expert provides specific feedback on answer accuracy, depth, and delivery — and helps you refine weak areas before the actual interview.',
      },
      {
        question: 'Can you prepare me for interviews for roles I have limited experience in?',
        answer:
          'Yes, this is one of the most common reasons clients come to us. We provide intensive domain briefing — covering the tools, regulations, workflows, and typical project scenarios for your target role — so you can answer technical questions with confidence even when transitioning into a new area.',
      },
    ],
  },
  {
    category: 'Profile Engineering',
    faqs: [
      {
        question: 'What is pharma profile engineering?',
        answer:
          'Pharma profile engineering is the strategic positioning of your resume, LinkedIn profile, and career narrative to align with pharma, clinical research, or medical device hiring requirements. It covers resume rewriting, keyword optimization for ATS, LinkedIn headline and summary crafting, and interview narrative building.',
      },
      {
        question: 'Do you guarantee job placement after profile engineering?',
        answer:
          'No. We do not guarantee job placement. We engineer your profile to significantly improve its pharma-alignment, ATS performance, and recruiter appeal, but ultimate hiring decisions rest with employers.',
      },
      {
        question: 'How does pharma resume optimization differ from generic resume writing?',
        answer:
          'Pharma resumes must include domain-specific keywords (SDTM, ADaM, IQ/OQ/PQ, 21 CFR Part 11, Medidata Rave, Argus Safety, MedDRA, etc.) that applicant tracking systems (ATS) and pharma recruiters look for. We optimize for both — ensuring your resume passes ATS screening and impresses technical hiring managers who know these tools and workflows.',
      },
      {
        question: 'What is pharma LinkedIn profile engineering?',
        answer:
          'LinkedIn profile engineering for pharma roles involves: crafting a headline that includes in-demand pharma keywords, writing a summary that positions your experience for pharma hiring managers, optimizing the Skills section with GxP and tool-specific skills, and structuring your experience to highlight regulated industry deliverables. A well-optimized LinkedIn profile dramatically increases inbound recruiter messages in the pharma sector.',
      },
    ],
  },
  {
    category: 'Clinical Data Management',
    faqs: [
      {
        question: 'What is SDTM and why is it required by the FDA?',
        answer:
          'SDTM (Study Data Tabulation Model) is the CDISC standard for organizing clinical trial data into standardized domains for regulatory submission. The FDA requires SDTM for all NDA, BLA, and ANDA submissions for studies starting after 2016. It enables FDA reviewers to navigate and analyze clinical data consistently across submissions using tools like Pinnacle 21.',
      },
      {
        question: 'What is the difference between SDTM and ADaM?',
        answer:
          'SDTM stores raw collected clinical trial data in standardized domains. ADaM (Analysis Data Model) creates analysis-ready datasets derived from SDTM for generating the tables, listings, and figures (TLFs) in clinical study reports. SDTM maps from CRFs; ADaM derives from SDTM. Both are required for FDA submissions.',
      },
      {
        question: 'Which EDC systems should I know for CDM roles?',
        answer:
          'Medidata Rave is the most widely used EDC system in large pharma — proficiency in Rave Architect is the top CDM skill. Oracle InForm is common in vaccine and Janssen programs. Veeva Vault EDC is growing rapidly. OpenClinica is used in academic research. Knowing Medidata Rave plus one additional EDC system covers the majority of CDM job postings.',
      },
      {
        question: 'What is MedDRA and how is it used in clinical trials?',
        answer:
          'MedDRA (Medical Dictionary for Regulatory Activities) is the international medical terminology standard for coding adverse events, medical history, and indications in clinical trials and pharmacovigilance. Adverse events are coded to MedDRA Preferred Terms (PTs), grouped by System Organ Class (SOC). MedDRA coding is required by FDA, EMA, and PMDA for all regulatory submissions.',
      },
      {
        question: 'What does database lock mean in clinical data management?',
        answer:
          'Database lock (DBL) is the formal process of freezing clinical trial data before statistical analysis and unblinding. It follows completion of all data cleaning, query resolution, medical coding, and third-party data reconciliation. The DBL process involves a Data Review Meeting (DRM) and sign-off from CDM, clinical operations, biostatistics, and medical monitoring. After lock, any changes require documented amendments.',
      },
    ],
  },
  {
    category: 'Computer System Validation',
    faqs: [
      {
        question: 'What is computer system validation (CSV) in pharma?',
        answer:
          'Computer System Validation (CSV) is the documented process of demonstrating that a GxP computerized system consistently performs its intended function within specified limits. It is required by 21 CFR Part 11 (FDA), EU Annex 11 (EMA), and GAMP 5 guidance for all systems that create, process, or store GxP data — including EDC, LIMS, MES, ERP, and QMS systems.',
      },
      {
        question: 'What are IQ, OQ, and PQ in pharmaceutical validation?',
        answer:
          'IQ (Installation Qualification) verifies the system is installed correctly per specifications. OQ (Operational Qualification) verifies the system operates as designed across its intended operating range. PQ (Performance Qualification) verifies the system performs consistently in the actual operational environment with representative users and data. Together, IQ/OQ/PQ constitute the three testing phases of the validation lifecycle.',
      },
      {
        question: 'What is GAMP 5 and which category applies to Veeva Vault?',
        answer:
          'GAMP 5 (Good Automated Manufacturing Practice 5) is the ISPE framework for risk-based CSV. It defines five software categories by complexity: Category 1 (infrastructure), Category 3 (non-configured COTS), Category 4 (configured COTS), Category 5 (custom software). Veeva Vault is a Category 4 system — configured commercial software requiring full IQ/OQ/PQ validation focused on configuration-specific testing.',
      },
      {
        question: 'What does 21 CFR Part 11 require for electronic signatures?',
        answer:
          '21 CFR Part 11 requires that electronic signatures are unique to one individual, include the signer\'s printed name, date and time, and meaning of signature (e.g., "approval"). Non-biometric signatures require at least two identification components (user ID and password). Each individual must certify in a signed declaration to FDA that their electronic signature is the legally binding equivalent of their handwritten signature.',
      },
      {
        question: 'What is data integrity and ALCOA+ in pharma?',
        answer:
          'Data integrity means GxP data is complete, consistent, accurate, and meets ALCOA+ principles: Attributable (who collected data and when), Legible (readable and permanent), Contemporaneous (recorded at time of observation), Original (first capture), Accurate (correct and truthful), plus Complete, Consistent, Enduring, and Available. Data integrity failures are the leading cause of FDA warning letters to pharmaceutical manufacturers.',
      },
    ],
  },
  {
    category: 'Pharmacovigilance',
    faqs: [
      {
        question: 'What is pharmacovigilance and who does it?',
        answer:
          'Pharmacovigilance (PV) is the science of detecting, assessing, understanding, and preventing adverse effects of medicines. PV professionals include Drug Safety Associates (processing individual case safety reports), aggregate reporting specialists (writing PSURs/PBRERs), signal detection scientists, and Qualified Persons for Pharmacovigilance (QPPVs). PV teams exist at pharma companies, CROs, and regulatory agencies.',
      },
      {
        question: 'What is an ICSR and what triggers one?',
        answer:
          'An ICSR (Individual Case Safety Report) documents a single adverse event experienced by one patient taking one or more suspect drugs. An ICSR is triggered by any source: healthcare professional report, patient report, scientific literature, clinical trial site, or spontaneous consumer report. ICSRs are submitted electronically to FDA (FAERS), EMA (EudraVigilance), and other authorities in ICH E2B(R3) XML format.',
      },
      {
        question: 'What is the timeline for SUSAR reporting?',
        answer:
          'Fatal or life-threatening SUSARs (Suspected Unexpected Serious Adverse Reactions) must be reported within 7 calendar days of sponsor awareness, with a complete follow-up within 8 additional days (total 15 days). All other SUSARs are reported within 15 calendar days. These timelines apply to expedited reporting to regulatory authorities during clinical trials.',
      },
      {
        question: 'What is Oracle Argus Safety?',
        answer:
          'Oracle Argus Safety is the most widely used pharmacovigilance case management system in large pharmaceutical companies. It manages the complete ICSR lifecycle: case intake, medical review, MedDRA coding, causality assessment, regulatory reporting workflow, and E2B(R3) electronic transmission to EudraVigilance and FAERS. Argus Safety proficiency is the most in-demand PV technical skill.',
      },
      {
        question: 'What is a PSUR and when is it required?',
        answer:
          'A PSUR (Periodic Safety Update Report), also called PBRER (Periodic Benefit-Risk Evaluation Report), is a comprehensive post-marketing safety assessment required by regulatory authorities. In the EU, PSURs are submitted on a defined schedule after drug approval (6-monthly for 2 years, then annually, then every 3 years). They summarize all safety data, analyze benefit-risk, and propose labeling changes if needed. Governed by ICH E2C(R2).',
      },
    ],
  },
  {
    category: 'Regulatory Affairs',
    faqs: [
      {
        question: 'What is an NDA and how long does FDA review take?',
        answer:
          'An NDA (New Drug Application) is the formal FDA application for approval of a new pharmaceutical drug. FDA reviews standard NDAs within 10 months (PDUFA timeline) and priority NDAs within 6 months. The review process involves filing review, substantive scientific review, mid-cycle and late-cycle communications, and culminates in approval or a Complete Response Letter (CRL).',
      },
      {
        question: 'What is eCTD and what tools are used to create it?',
        answer:
          'eCTD (Electronic Common Technical Document) is the standardized XML-based format for submitting regulatory dossiers to FDA, EMA, and other global authorities. The five-module structure covers administrative information, quality, nonclinical, and clinical data. eCTD is created using publishing tools (Extedo, Lorenz docuBridge) and managed in Veeva Vault RIM or similar regulatory information management systems.',
      },
      {
        question: 'What is the EU EMA MAA process?',
        answer:
          'The EMA Marketing Authorisation Application (MAA) via the Centralised Procedure results in a single EU-wide marketing authorisation. CHMP conducts a 210-day scientific review including two rounds of questions (Day 80 List of Outstanding Issues and Day 180 second questions if needed). A positive CHMP opinion leads to a European Commission decision granting EU-wide authorisation.',
      },
      {
        question: 'What is Veeva Vault RIM used for in regulatory affairs?',
        answer:
          'Veeva Vault RIM (Regulatory Information Management) manages the regulatory submission lifecycle: eCTD sequence management, agency correspondence tracking, global marketing authorisation registration tracking, variation management, and eCTD publishing. Vault RIM is used by most major pharmaceutical companies and is the most in-demand regulatory affairs software skill in 2024-2025.',
      },
      {
        question: 'What is a RAC certification and who should get it?',
        answer:
          'RAC (Regulatory Affairs Certification) from RAPS (Regulatory Affairs Professionals Society) is the premier professional credential for regulatory affairs professionals. RAC (US), RAC (EU), and RAC (Canada) demonstrate regulatory expertise in specific markets. It is valued for mid-to-senior regulatory affairs roles and accelerates career progression. RAC candidates typically need 2-3 years of regulatory experience before sitting the exam.',
      },
    ],
  },
  {
    category: 'Quality Assurance',
    faqs: [
      {
        question: 'What is GMP and who enforces it?',
        answer:
          'GMP (Good Manufacturing Practice) regulations ensure pharmaceutical products are consistently produced and controlled to quality standards. In the US, FDA enforces cGMP under 21 CFR Parts 210 and 211. In the EU, EMA and national authorities enforce EU GMP (EudraLex Volume 4). WHO GMP governs manufacturers supplying international markets. GMP inspections verify compliance and can result in Warning Letters, import alerts, or consent decrees.',
      },
      {
        question: 'What is a CAPA in pharmaceutical quality?',
        answer:
          'CAPA (Corrective and Preventive Action) is the quality system process for addressing root causes of quality failures and preventing recurrence. The CAPA process involves: detection and reporting, root cause analysis (5 Whys, fishbone diagram, FMEA), corrective action (fixing the specific problem), preventive action (systemic change to prevent recurrence), effectiveness check (verifying the CAPA worked), and formal closure. Open CAPAs are a key FDA inspection focus.',
      },
      {
        question: 'What is an OOS investigation in pharmaceutical manufacturing?',
        answer:
          'An OOS (Out-of-Specification) investigation is required when a laboratory result falls outside acceptance criteria under 21 CFR 211.192. Phase 1 investigates laboratory causes (instrument malfunction, analyst error, calculation error). If no lab error is found, Phase 2 expands to manufacturing investigation. Retesting without investigation is not permitted. The outcome is either invalidation (if lab error confirmed) or confirmed OOS (triggering CAPA and potential batch rejection).',
      },
      {
        question: 'What is ICH Q10 and why is it important?',
        answer:
          'ICH Q10 defines the Pharmaceutical Quality System (PQS) model — a comprehensive quality management framework for pharmaceutical development and manufacturing. It builds on ISO 9001 with GxP-specific requirements and integrates ICH Q8 (Pharmaceutical Development) and Q9 (Quality Risk Management) into a lifecycle approach. Q10 describes four key elements: management responsibility, resource management, product realization, and measurement and improvement.',
      },
    ],
  },
  {
    category: 'Medical Device',
    faqs: [
      {
        question: 'What is the difference between FDA 510(k) and PMA for medical devices?',
        answer:
          '510(k) (Premarket Notification) is for class II medical devices that are substantially equivalent to a legally marketed predicate device — requires evidence of equivalence without new clinical trials, reviewed in approximately 90 days. PMA (Premarket Approval) is for class III (high-risk) devices and requires full clinical evidence of safety and effectiveness, with a 180-day review target. De Novo is for novel low-to-moderate risk devices without a predicate.',
      },
      {
        question: 'What is ISO 13485 and is it required for FDA?',
        answer:
          'ISO 13485 is the international QMS standard specifically for medical device organizations. It is required for CE marking (EU) and recognized by Health Canada, PMDA, and TGA. FDA does not formally require ISO 13485 but the recently finalized QMSR (Quality Management System Regulation, aligning 21 CFR Part 820 with ISO 13485) means compliance with ISO 13485 substantially satisfies FDA QSR requirements. Most global device manufacturers pursue ISO 13485 certification.',
      },
      {
        question: 'What is EU MDR and how does it differ from the old MDD?',
        answer:
          'EU MDR (Medical Device Regulation 2017/745) replaced the Medical Device Directive (MDD 93/42/EEC) and significantly increased requirements. Key changes: stricter device classification (many devices reclassified to higher risk), more rigorous clinical evaluation requirements (European Clinical Evaluation Routes), mandatory post-market clinical follow-up (PMCF), UDI implementation, EUDAMED database registration, enhanced notified body oversight, and Expert Panel scrutiny for high-risk novel devices.',
      },
      {
        question: 'What is ISO 14971 and why is it required for medical devices?',
        answer:
          'ISO 14971 is the international standard for risk management for medical devices, required by both FDA (21 CFR Part 820) and EU MDR. It defines the risk management process: hazard identification, probability and severity estimation, risk evaluation, risk control (design change, protective measures, information for safety), residual risk evaluation, and post-production monitoring. The Risk Management File documenting all these activities must be maintained throughout the device lifecycle.',
      },
    ],
  },
];

export const homepageFAQs: FAQ[] = [
  {
    question: 'What is pharma proxy job support?',
    answer:
      'Pharma proxy job support is real-time domain guidance provided by experienced pharma professionals. It helps you understand your project tasks, deliverables, regulated workflows, and documentation requirements in pharma, clinical research, medical device, and life sciences roles.',
  },
  {
    question: 'Who needs pharma proxy job support?',
    answer:
      'Professionals working in clinical SAS, CSV validation, pharmacovigilance, regulatory affairs, Veeva, CDM, pharma QA, medical device, healthcare IT, and related roles benefit most — especially those transitioning from IT to pharma, or those new to a specific domain.',
  },
  {
    question: 'What domains does Pharma Job Support cover?',
    answer:
      'We cover clinical SAS (SDTM, ADaM, TLFs), CSV validation, GxP compliance, 21 CFR Part 11, GAMP 5, pharmacovigilance, Argus Safety, regulatory affairs, eCTD, Veeva Vault, CDM, EDC, medical device QA, ISO 13485, EU MDR, FDA 510(k), pharma AI/ML, RPA, pharma data analytics, and more.',
  },
  {
    question: 'Is proxy job support ethical and legal?',
    answer:
      'Yes. Our support is professional domain mentoring — similar to consulting or tutoring. We help you understand and execute your own work. We do not impersonate, attend interviews as you, or misrepresent credentials.',
  },
  {
    question: 'How do I get started with pharma proxy job support?',
    answer:
      'Simply message us on WhatsApp at +91-9660834611 with your role, project challenge, or support need. Our experts respond quickly and we schedule a support session based on your timezone and urgency.',
  },
  {
    question: 'Do you provide pharma proxy job support globally?',
    answer:
      'Yes. We provide remote support globally across USA, UK, Canada, Ireland, Europe, Australia, Singapore, UAE, India, and 30+ more countries. Support is available in all major timezones.',
  },
  {
    question: 'What is pharma interview proxy support?',
    answer:
      'Pharma interview proxy support is intensive, role-based interview preparation. We help you master domain knowledge, prepare for technical and behavioral questions, and practice mock interviews for pharma, clinical research, and medical device roles.',
  },
  {
    question: 'Can you help me switch from IT to pharma?',
    answer:
      'Yes. We help IT professionals understand pharma domain workflows, GxP regulations, regulated systems, and pharma career pathways. We also engineer your IT profile to position it effectively for pharma roles.',
  },
  {
    question: 'What is the WhatsApp number for pharma job support?',
    answer:
      'Our WhatsApp number is +91-9660834611. Message us any time with your role, domain, or project challenge — we respond within hours and can schedule expert support sessions to fit your timezone.',
  },
  {
    question: 'What is pharma profile engineering?',
    answer:
      'Pharma profile engineering strategically repositions your resume, LinkedIn profile, and career narrative to match pharma hiring requirements. We optimize for ATS keyword screening and human recruiter review, using domain-specific keywords like SDTM, Medidata Rave, 21 CFR Part 11, MedDRA, Argus Safety, and Veeva Vault.',
  },
];
