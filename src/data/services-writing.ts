import type { ServiceEntry } from './services-ai';

export const writingServices: ServiceEntry[] = [
  {
    slug: 'medical-writing-proxy-job-support',
    title: 'Medical Writing Proxy Job Support',
    h1: 'Medical Writing Proxy Job Support',
    metaTitle: 'Medical Writing Proxy Job Support | Pharma Medical Writer Help',
    metaDesc: 'Expert proxy job support for medical writing roles. Clinical study reports, protocols, IB, regulatory submissions, narrative writing — real-time medical writing guidance.',
    category: 'Medical Writing',
    heroIntro: 'Medical writing in pharma demands scientific precision, regulatory knowledge, and the ability to translate complex clinical data into clear, audience-appropriate documents. Our medical writing proxy job support connects you with experienced medical writers who guide you through interviews and live writing tasks.',
    problemSection: 'Medical writing interviews include live writing exercises, document structure questions, regulatory format requirements, and scientific communication assessments. Without hands-on regulated medical writing experience, these tasks reveal knowledge gaps. Our experts provide real-time writing guidance.',
    whatCovered: [
      'Document types — CSR, protocol, IB, IND, NDA/BLA clinical narratives, DSUR',
      'ICH guidelines for clinical documents — E3 (CSR), E6(R3) (GCP), E8 (GCP design)',
      'Regulatory submission documents — eCTD Module 5 clinical study report structure',
      'Safety narratives — individual case study reports, aggregate safety documents',
      'Scientific writing principles — clear communication, accuracy, regulatory compliance',
      'Data interpretation — tables, figures, listings review and description',
      'Statistical collaboration — interpreting analysis results, study endpoint descriptions',
      'Reference management — citation styles, bibliography, reference accuracy',
      'Document lifecycle — authoring, review, approval, version control',
      'eCTD structure — Module 5 CSR placement, study tagging, hyperlink requirements'
    ],
    roleExamples: [
      'Medical Writer I / II / Senior',
      'Principal Medical Writer',
      'Regulatory Medical Writer',
      'Clinical Medical Writer',
      'Medical Writing Manager',
      'Freelance Medical Writer'
    ],
    tools: ['Microsoft Word (Track Changes, macros)', 'MedDRA Browser', 'EndNoteX9', 'Mendeley', 'eCTD publishing tools', 'Veeva Vault'],
    faqs: [
      {
        q: 'Can you help with a live medical writing exercise during a job interview?',
        a: 'Yes. Our experienced medical writers guide you through document structure, section content standards, scientific language precision, regulatory format requirements, and data description in real time.'
      },
      {
        q: 'Do you cover ICH E3 Clinical Study Report requirements?',
        a: 'Yes. We cover all ICH E3 sections — synopsis, background, study objectives, investigational plan, study patients, efficacy/safety results, discussion, conclusions, and all appendices.'
      },
      {
        q: 'Can you help with writing individual patient safety narratives?',
        a: 'Yes. We cover the structure of individual case narratives for SAEs, deaths, and discontinuations — including temporal sequence, causality assessment language, and clinical relevance description.'
      }
    ],
    relatedSlugs: ['clinical-medical-writing-support', 'regulatory-writing-support', 'safety-narrative-writing-support', 'clinical-study-report-support', 'protocol-writing-support']
  },
  {
    slug: 'clinical-medical-writing-support',
    title: 'Clinical Medical Writing Proxy Job Support',
    h1: 'Clinical Medical Writing Proxy Job Support',
    metaTitle: 'Clinical Medical Writing Proxy Support | CSR Protocol IB Help',
    metaDesc: 'Expert proxy support for clinical medical writing roles. CSR, protocol, IB, DSUR, PSUR — real-time clinical writing guidance for pharma medical writers.',
    category: 'Medical Writing',
    heroIntro: 'Clinical medical writing encompasses the production of clinical study reports, protocols, investigator brochures, and periodic safety reports. Our proxy job support provides real-time expert guidance for clinical medical writers at all levels, from entry to principal.',
    problemSection: 'Clinical medical writing interviews test your understanding of GCP, document structure per ICH guidelines, data interpretation, and regulatory format requirements. Live writing exercises assess your ability to produce accurate, clear, and compliant clinical documents. Our experts guide you in real time.',
    whatCovered: [
      'Clinical Study Reports (CSR) — ICH E3 structure, synopsis writing, efficacy/safety sections',
      'Study protocols — synopsis, objectives, design, eligibility, endpoints, statistical methods',
      'Investigator Brochure (IB) — non-clinical data, clinical data, marketed product summary',
      'Development Safety Update Reports (DSUR) — ICH E2F structure, cumulative data review',
      'Periodic Safety Update Reports (PSUR/PBRER) — ICH E2C(R2) requirements',
      'Annual Reports — IND Annual Report (21 CFR 312.33) structure and content',
      'Patient narratives — SAE narratives, noteworthy adverse events',
      'Informed consent documents — ICH E6(R3) requirements, patient-friendly language',
      'Statistical analysis plan (SAP) review — understanding statistical methods, endpoints',
      'Literature review — systematic search methodology, evidence synthesis'
    ],
    roleExamples: [
      'Clinical Medical Writer',
      'Senior Clinical Medical Writer',
      'Principal Medical Writer (Clinical)',
      'Late-Phase Medical Writer',
      'Integrated Summary Medical Writer',
      'Medical Writing Specialist (CRO)'
    ],
    tools: ['Microsoft Word', 'Adobe Acrobat', 'SAS output review', 'MedDRA', 'PubMed / Embase', 'Veeva Vault', 'Documentum'],
    faqs: [
      {
        q: 'What is the structure of an ICH E3 Clinical Study Report?',
        a: 'ICH E3 defines 16 sections: title page, synopsis, table of contents, list of abbreviations, ethics statement, investigators/study sites, introduction, study objectives, investigational plan, study patients, efficacy, safety, discussion/conclusions, references, appendices, and patient data listings.'
      },
      {
        q: 'Can you help me with a CSR synopsis writing exercise in an interview?',
        a: 'Yes. We guide you through synopsis structure (objectives, design, patients, efficacy results, safety results, conclusions), concise data presentation, and regulatory language standards in real time.'
      },
      {
        q: 'Do you cover PSUR/PBRER writing for clinical medical writers?',
        a: 'Yes. We cover ICH E2C(R2) structure, cumulative safety data analysis, benefit-risk evaluation, risk management plan updates, and regulatory submission formatting.'
      }
    ],
    relatedSlugs: ['medical-writing-proxy-job-support', 'regulatory-writing-support', 'clinical-study-report-support', 'safety-narrative-writing-support', 'pharmacovigilance-proxy-job-support']
  },
  {
    slug: 'regulatory-writing-support',
    title: 'Regulatory Writing Proxy Job Support',
    h1: 'Regulatory Medical Writing Proxy Job Support',
    metaTitle: 'Regulatory Writing Proxy Job Support | NDA BLA eCTD Writing Help',
    metaDesc: 'Expert proxy support for regulatory medical writing. NDA, BLA, MAA, eCTD Module 2, integrated summaries, CMC writing — real-time regulatory writing guidance.',
    category: 'Medical Writing',
    heroIntro: 'Regulatory medical writing produces the submission documents that support drug approvals — integrated clinical/safety summaries, overviews, risk management plans, and CMC narratives. Our regulatory writing proxy job support provides real-time expert guidance for this high-stakes specialty.',
    problemSection: 'Regulatory writing interviews assess your knowledge of eCTD structure, ICH CTD format, integrated summary methodology, and CMC document standards. These are typically senior writing roles requiring both scientific and regulatory expertise. Our experts guide you through every dimension.',
    whatCovered: [
      'eCTD Module 2 — clinical overview, clinical summary, nonclinical overview',
      'Integrated Summary of Efficacy (ISE) — FDA 21 CFR 314.50 requirements',
      'Integrated Summary of Safety (ISS) — FDA safety database analysis structure',
      'Risk Management Plans — ICH E2E, EU RMP, US REMS strategies',
      'Common Technical Document (CTD) — ICH M4 format, eCTD sequence structure',
      'Marketing Authorization Application (MAA) — EMA requirements, CHMP guidelines',
      'Biologics License Application (BLA) — CMC, clinical, safety sections',
      'CMC regulatory writing — drug substance/product descriptions, stability summaries',
      'Response to agency questions — Complete Response Letters, Day 120/180 responses',
      'Label writing — USPI/PI, EU SmPC — format and content standards'
    ],
    roleExamples: [
      'Regulatory Medical Writer',
      'Senior Regulatory Writer',
      'Principal Regulatory Writer',
      'Regulatory Affairs Specialist (Writing)',
      'Submission Writer',
      'NDA/BLA Writing Lead'
    ],
    tools: ['Microsoft Word', 'Adobe Acrobat', 'ISI Toolbox', 'LORENZ docuBridge', 'Veeva Vault RIM', 'Documentum', 'MedDRA'],
    faqs: [
      {
        q: 'Can you help with eCTD Module 2 writing during a regulatory writing interview?',
        a: 'Yes. We guide you through Module 2.5 (Clinical Overview), Module 2.7 (Clinical Summaries), Module 2.4 (Nonclinical Overview) structure and content standards in real time.'
      },
      {
        q: 'What is the difference between ISE and ISS?',
        a: 'ISE (Integrated Summary of Efficacy) is an integrated analysis of efficacy data across trials for FDA NDA submissions. ISS (Integrated Summary of Safety) is a pooled safety database analysis. Both are FDA-specific requirements under 21 CFR 314.50 — we cover both structures in detail.'
      },
      {
        q: 'Do you cover EU SmPC writing?',
        a: 'Yes. We cover EU SmPC Section 4 (clinical particulars) through Section 10 (date of revision), including regulatory expectations for data presentation, pharmacological class descriptions, and risk minimization measures.'
      }
    ],
    relatedSlugs: ['medical-writing-proxy-job-support', 'clinical-medical-writing-support', 'regulatory-affairs-proxy-job-support', 'ectd-proxy-job-support', 'regulatory-submissions-proxy-job-support']
  },
  {
    slug: 'clinical-study-report-support',
    title: 'Clinical Study Report Proxy Job Support',
    h1: 'Clinical Study Report (CSR) Writing Proxy Job Support',
    metaTitle: 'Clinical Study Report Proxy Support | CSR Writing Expert Help',
    metaDesc: 'Expert proxy support for CSR writing roles. ICH E3 clinical study reports, synopsis, efficacy, safety sections — real-time CSR writing guidance for pharma.',
    category: 'Medical Writing',
    heroIntro: 'The Clinical Study Report is the definitive documentation of a clinical trial — a complex regulatory document requiring mastery of ICH E3 structure, statistical output interpretation, and precise scientific communication. Our CSR writing proxy support provides real-time expert guidance.',
    problemSection: 'CSR writing exercises in interviews test your ability to describe study design, present efficacy and safety results accurately, write clear narrative sections, and apply ICH E3 formatting requirements. Our expert CSR writers guide you through every section in real time.',
    whatCovered: [
      'ICH E3 section-by-section guidance — all 16 sections explained and demonstrated',
      'Synopsis writing — concise, standalone summary of all study sections',
      'Study design description — randomization, blinding, treatment arms, duration',
      'Patient disposition — enrollment, withdrawals, protocol deviations, analysis sets',
      'Efficacy results — primary and secondary endpoints, statistical test interpretation',
      'Safety results — adverse events, laboratory findings, vital signs, ECG data',
      'Discussion and conclusions — integrated benefit-risk narrative',
      'Appendices — protocol, amendments, patient data listings, statistical output',
      'Tables, figures, listings (TFL) interpretation — reading and describing statistical outputs',
      'Quality review — CSR internal consistency checks, cross-reference verification'
    ],
    roleExamples: [
      'CSR Medical Writer',
      'Clinical Report Writer',
      'Phase III Medical Writer',
      'Senior Clinical Medical Writer',
      'Medical Writing Specialist (CRO)',
      'Late-Phase Medical Writing Lead'
    ],
    tools: ['Microsoft Word', 'SAS output tables', 'Adobe Acrobat', 'MedDRA', 'Veeva Vault', 'Documentum'],
    faqs: [
      {
        q: 'How long should a CSR be, and what are the key sections?',
        a: 'A Phase III CSR can range from 200-1000+ pages depending on study complexity. The key sections per ICH E3 include synopsis, study overview, patient disposition, demographics, primary and secondary efficacy, safety, and conclusions — plus extensive appendices.'
      },
      {
        q: 'Can you help me write efficacy results for a CSR during an interview exercise?',
        a: 'Yes. We guide you through presenting primary efficacy endpoints, describing statistical tests and p-values, interpreting clinical significance vs. statistical significance, and presenting subgroup analyses appropriately.'
      },
      {
        q: 'What is the difference between an adverse event and an adverse drug reaction in CSR writing?',
        a: 'An adverse event (AE) is any untoward occurrence during treatment regardless of causality. An adverse drug reaction (ADR) has at least a reasonable possibility of causal relationship with the investigational product — we cover how to present each category correctly in safety sections.'
      }
    ],
    relatedSlugs: ['clinical-medical-writing-support', 'medical-writing-proxy-job-support', 'safety-narrative-writing-support', 'regulatory-writing-support']
  },
  {
    slug: 'protocol-writing-support',
    title: 'Protocol Writing Proxy Job Support',
    h1: 'Clinical Trial Protocol Writing Proxy Job Support',
    metaTitle: 'Protocol Writing Proxy Support | Clinical Trial Protocol Help',
    metaDesc: 'Expert proxy support for clinical protocol writing. ICH E8(R1), adaptive design, eligibility criteria, endpoint definitions, statistical methods — real-time protocol guidance.',
    category: 'Medical Writing',
    heroIntro: 'Clinical trial protocol writing requires scientific expertise, regulatory knowledge, and the ability to translate a development program vision into a workable, ethical study design. Our protocol writing proxy job support provides real-time expert guidance for this specialized medical writing role.',
    problemSection: 'Protocol writing interviews test your understanding of study design principles, ICH E8(R1) recommendations, eligibility criteria precision, endpoint definition, and statistical methods sections. Our expert protocol writers guide you through every aspect of protocol development.',
    whatCovered: [
      'Protocol structure — all ICH E6(R3) Appendix 1 sections in sequence',
      'Study design — randomization, blinding, adaptive elements, control types',
      'Eligibility criteria — inclusion/exclusion precision, safety considerations',
      'Primary and secondary endpoints — definition, measurement, clinical significance',
      'Sample size justification — statistical power, assumptions, justification narrative',
      'Statistical methods section — analysis populations, primary analysis, sensitivity analyses',
      'Safety monitoring — DSMB/DMC composition, stopping rules, interim analyses',
      'Protocol amendments — substantial vs. non-substantial, regulatory implications',
      'ICH E8(R1) — quality by design principles, estimands (ICH E9(R1))',
      'Regulatory alignment — IND/CTA protocol requirements, ethics committee submission'
    ],
    roleExamples: [
      'Protocol Medical Writer',
      'Early Phase Medical Writer',
      'Clinical Protocol Writer',
      'Protocol Development Specialist',
      'Senior Medical Writer (Protocols)',
      'Protocol Writing Lead (CRO)'
    ],
    tools: ['Microsoft Word', 'Documentum', 'Veeva Vault', 'MedDRA', 'Clinical trial registry platforms'],
    faqs: [
      {
        q: 'Can you help with protocol writing in a live interview exercise?',
        a: 'Yes. Our expert protocol writers guide you through study objective formulation, design rationale, eligibility criteria drafting, endpoint definition, and statistical methods section content in real time.'
      },
      {
        q: 'What is the estimand framework and why does it matter for protocol writing?',
        a: 'ICH E9(R1) requires protocols to define estimands — the precise treatment effect of interest accounting for intercurrent events (treatment discontinuation, rescue medication). We cover population, variable, intercurrent event handling, and summary measure specification.'
      },
      {
        q: 'How do you write a sample size justification for a protocol?',
        a: 'We cover statistical power assumptions (typically 80-90%), clinically meaningful difference specification, event rate assumptions for time-to-event endpoints, dropout rate adjustments, and adaptation provisions for adaptive designs.'
      }
    ],
    relatedSlugs: ['clinical-medical-writing-support', 'medical-writing-proxy-job-support', 'clinical-study-report-support', 'clinical-research-proxy-job-support']
  },
  {
    slug: 'safety-narrative-writing-support',
    title: 'Safety Narrative Writing Proxy Job Support',
    h1: 'Pharmacovigilance Safety Narrative Writing Proxy Job Support',
    metaTitle: 'Safety Narrative Writing Proxy Support | ICSR Narrative Help',
    metaDesc: 'Expert proxy support for safety narrative writing roles. ICSR narratives, aggregate narratives, MedDRA coding narratives — real-time PV narrative writing guidance.',
    category: 'Medical Writing',
    heroIntro: 'Safety narrative writing is a core pharmacovigilance competency — clear, accurate narratives for individual case safety reports (ICSRs) and aggregate safety documents are critical for regulatory compliance and benefit-risk assessment. Our proxy support provides real-time expert guidance.',
    problemSection: 'Safety narrative writing interviews test your ability to structure case narratives logically, describe clinical events precisely, apply MedDRA coding terminology correctly, and maintain regulatory-compliant causality language. Our expert PV writers guide you through every scenario.',
    whatCovered: [
      'ICSR narrative structure — case overview, clinical course, suspect product, outcome',
      'Narrative elements — patient demographics, medical history, temporal sequence',
      'MedDRA terminology — preferred terms, LLTs, SOC — appropriate use in narratives',
      'Causality language — WHO-UMC criteria, Bradford Hill criteria, regulatory expectation',
      'Seriousness criteria — death, life-threatening, hospitalization, congenital anomaly',
      'Narratives for SAEs — clinical complexity, multiple AEs, alternative explanations',
      'Narratives for deaths — complete documentation, autopsy data, contributing causes',
      'Aggregate narratives — PSUR/PBRER clinical overview summaries',
      'Quality review — narrative consistency with coded terms, timeline accuracy',
      'Regulatory standards — ICH E2B(R3) field requirements, ICH E2C narratives'
    ],
    roleExamples: [
      'Safety Narrative Writer',
      'Medical Writer (Pharmacovigilance)',
      'ICSR Medical Writer',
      'Drug Safety Medical Writer',
      'PV Medical Writer',
      'Senior Safety Narrative Writer'
    ],
    tools: ['Oracle Argus Safety', 'ArisGlobal LifeSphere', 'Veeva Vault Safety', 'MedDRA Browser', 'Microsoft Word'],
    faqs: [
      {
        q: 'What is the standard structure of an ICSR narrative?',
        a: 'A well-structured ICSR narrative includes: patient background (age, sex, relevant medical history), suspect drug details (dose, indication, dates), concomitant medications, clinical course of the adverse event (chronological), relevant test results, treatment, outcome, and reporter/manufacturer causality assessment.'
      },
      {
        q: 'Can you help me write a safety narrative during a PV interview in real time?',
        a: 'Yes. Our PV medical writers guide you through narrative structure, MedDRA term selection, causality language, chronological accuracy, and quality review steps in real time.'
      },
      {
        q: 'How do you handle MedDRA coding in narrative writing?',
        a: 'MedDRA preferred terms should be used for coded events in the narrative. Reporter verbatim terms should be included in quotes where relevant for context. We cover appropriate MedDRA term selection, granularity choices, and how coding decisions affect narrative language.'
      }
    ],
    relatedSlugs: ['medical-writing-proxy-job-support', 'clinical-medical-writing-support', 'pharmacovigilance-proxy-job-support', 'icsr-proxy-job-support', 'drug-safety-proxy-job-support']
  }
];
