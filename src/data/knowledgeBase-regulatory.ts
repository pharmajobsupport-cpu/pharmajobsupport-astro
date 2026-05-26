import type { KBEntry } from './knowledgeBase-clinical';

export const regulatoryKB: KBEntry[] = [
  {
    slug: 'nda-bla-submission-guide',
    title: 'NDA and BLA Submission Guide: FDA Drug Approval Process Explained',
    category: 'Regulatory Affairs',
    metaTitle: 'NDA BLA Submission Guide: FDA Drug Approval Process for Pharma Professionals',
    metaDesc: 'Complete NDA and BLA submission guide — eCTD format, FDA PDUFA timeline, Complete Response Letters, Standard vs Priority Review, and BLA biologics approval.',
    h1: 'NDA and BLA Submission Guide: FDA Drug Approval Process Explained',
    intro: 'An NDA (New Drug Application) is the formal request to the FDA to approve a new pharmaceutical drug for sale and marketing in the United States. A BLA (Biologics License Application) is the equivalent for biological products (vaccines, monoclonal antibodies, gene therapies). Both applications must demonstrate safety, efficacy, and quality through clinical and nonclinical study data submitted in eCTD format. Understanding the NDA/BLA process is fundamental for regulatory affairs professionals.',
    sections: [
      {
        heading: 'NDA Types and Pathways',
        body: 'Standard NDA (505(b)(1)): Full NDA with complete safety, efficacy, and CMC data from new studies conducted by the applicant. 505(b)(2) NDA: Relies at least partially on published literature or FDA\'s previous findings for an already-approved drug — used for reformulations, new dosage forms, new indications, or new routes of administration. ANDA (Abbreviated NDA, 505(j)): Generic drug application demonstrating bioequivalence to an approved reference drug without repeating clinical trials. BLA (Section 351): Biologics license for products manufactured using biological processes — includes protein drugs, mAbs, vaccines, blood products, and cell/gene therapies.',
      },
      {
        heading: 'eCTD Format and Module Structure',
        body: 'All NDA and BLA submissions are in eCTD (electronic Common Technical Document) format via the FDA Electronic Submissions Gateway. The five eCTD modules: Module 1 (Regional Administrative Information — forms, labeling, patent certifications), Module 2 (Overviews and Summaries — QOS, nonclinical overview, clinical overview, and summaries), Module 3 (Quality — drug substance, drug product, analytical methods, stability), Module 4 (Nonclinical Study Reports — pharmacology, toxicology, PK), Module 5 (Clinical Study Reports — clinical pharmacology, clinical studies, integrated summaries ISS/ISE). The submission must be technically validated by FDA before substantive review begins.',
      },
      {
        heading: 'PDUFA Timeline and Review Process',
        body: 'Under PDUFA (Prescription Drug User Fee Act), FDA commits to review timelines for priority products. Standard Review: 10-month review goal from submission. Priority Review (serious conditions, significant improvement): 6-month review goal. After filing (Day 60): FDA issues a File/Refuse-to-File letter. Mid-cycle communication (approximately Month 3): FDA communicates major issues. Late-cycle meeting (approximately Month 10): Summary of review issues. Action Date: FDA issues Approval, Complete Response Letter (CRL), or withdrawal. FDA review divisions (CDER, CBER) have therapeutic area-specific divisions for review.',
      },
      {
        heading: 'Complete Response Letters (CRLs)',
        body: 'A Complete Response Letter (CRL) means the FDA has completed its review and found deficiencies that preclude approval — but does not indicate a final denial. CRL deficiencies may include: clinical (additional studies required, labeling issues, REMS needed), chemistry/manufacturing (CMC issues, facility inspection failures, sterility concerns), or safety (unresolved safety signals, inadequate risk characterization). Sponsors must respond to the CRL (CRL Response/Resubmission) addressing all issues. A Class 1 resubmission (minor issues) has a 2-month review goal; Class 2 (major issues) has a 6-month goal.',
      },
      {
        heading: 'Regulatory Strategy: IND to NDA',
        body: 'The regulatory pathway begins with an IND (Investigational New Drug Application) before human clinical trials. IND types: commercial IND (sponsor-investigator commercial development), research IND (academic/investigator-initiated), emergency IND (compassionate use). After Phase 1 (safety), Phase 2 (efficacy signal), and Phase 3 (confirmatory efficacy and safety) trials, the NDA is assembled. Key regulatory interactions: Pre-IND meeting, End-of-Phase 2 meeting (critical for NDA/BLA pathway alignment), Pre-NDA meeting (to discuss submission format and content). Breakthrough Therapy, Fast Track, Accelerated Approval, and Priority Review designations provide expedited pathways for serious conditions.',
      },
    ],
    keyTerms: [
      { term: 'NDA', definition: 'New Drug Application — FDA application for approval of a new small molecule pharmaceutical' },
      { term: 'BLA', definition: 'Biologics License Application — FDA application for approval of a biological product' },
      { term: 'eCTD', definition: 'Electronic Common Technical Document — standardized format for global regulatory submissions' },
      { term: 'PDUFA', definition: 'Prescription Drug User Fee Act — sets FDA review timelines funded by industry user fees' },
      { term: 'CRL', definition: 'Complete Response Letter — FDA communication of deficiencies that prevent approval' },
      { term: 'IND', definition: 'Investigational New Drug Application — required before clinical trials of unapproved drugs' },
      { term: 'ISS/ISE', definition: 'Integrated Summary of Safety/Efficacy — cross-study summaries required in NDA Module 5' },
    ],
    faqs: [
      { q: 'What is the difference between an NDA and an ANDA?', a: 'An NDA (New Drug Application, 505(b)) requires full demonstration of safety and efficacy through clinical trials — it is for new drugs or new uses of existing drugs. An ANDA (Abbreviated New Drug Application, 505(j)) is for generic drugs — it demonstrates bioequivalence to an approved reference listed drug (RLD) without requiring new clinical trials, as the safety and efficacy of the reference drug is already established.' },
      { q: 'What is Breakthrough Therapy designation and how does it help?', a: 'Breakthrough Therapy designation is for drugs that treat serious conditions and show preliminary clinical evidence of substantial improvement over existing therapies. Benefits: intensive FDA guidance during development, rolling review (submit and review modules as they are completed rather than waiting for the complete application), organizational commitment from FDA senior management. Designation does not guarantee approval but significantly speeds development timelines.' },
      { q: 'What does a regulatory affairs professional do in NDA preparation?', a: 'Regulatory affairs professionals coordinate NDA assembly: working with clinical, statistics, CMC, nonclinical, and safety teams to compile study reports; writing regulatory summaries and overviews (Module 2 documents); coordinating eCTD publishing (using Veeva Vault RIM, Extedo, or DocuBridge); managing FDA correspondence and meeting requests; interpreting FDA guidance and regulations for the development team; and managing the overall regulatory strategy from IND to NDA and post-approval.' },
      { q: 'How long does FDA NDA review take?', a: 'Under PDUFA commitments, FDA reviews standard NDAs within 10 months of submission and priority NDAs within 6 months. However, the clock may stop ("clock stop") during information requests. Total time from first submission to approval (including any resubmissions for CRL responses) averages 12-18 months for standard NDAs. Breakthrough Therapy drugs can achieve approval in less than 6 months from submission in some cases.' },
    ],
    relatedSlugs: ['ema-maa-submission-guide', 'regulatory-affairs-career-guide', 'ich-guidelines-overview', 'cdisc-pinnacle21-guide'],
  },
  {
    slug: 'ema-maa-submission-guide',
    title: 'EMA Marketing Authorisation Application (MAA) Guide',
    category: 'Regulatory Affairs',
    metaTitle: 'EMA MAA Guide: EU Drug Approval, CHMP Review, and Marketing Authorisation',
    metaDesc: 'Complete EMA MAA submission guide — Centralised Procedure, CHMP review, Day 120 LoOIs, Day 180 responses, SmPC, and EU conditional/exceptional approvals.',
    h1: 'EMA Marketing Authorisation Application: Complete EU Drug Approval Guide',
    intro: 'The European Medicines Agency (EMA) oversees the scientific evaluation of medicines for human and veterinary use in the European Union. The Centralised Procedure is mandatory for most new medicines and results in a single European Marketing Authorisation valid in all 27 EU member states plus Iceland, Norway, and Liechtenstein. The process involves scientific assessment by the Committee for Medicinal Products for Human Use (CHMP) and takes approximately 210 days.',
    sections: [
      {
        heading: 'EU Approval Procedures',
        body: 'Centralised Procedure (CP): Mandatory for biotech products, orphan medicines, HIV/AIDS/cancer drugs, and new active substances after 2004. Application submitted to EMA; CHMP conducts scientific review; Commission decision grants Marketing Authorisation valid EU-wide. Mutual Recognition Procedure (MRP): Applicant obtains national approval in one member state (reference member state), then applies for recognition in other concerned member states. Decentralised Procedure (DCP): Application submitted simultaneously in reference and concerned member states for products not yet authorized anywhere. National Procedure: For medicines intended for only one member state.',
      },
      {
        heading: 'CHMP Review Timeline: 210-Day Procedure',
        body: 'Day 0: EMA validates the application and starts the clock. Day 70: CHMP Assessment Report (AR) sent to applicant — preliminary questions. Day 80: List of Outstanding Issues (LoOIs) sent — major objections and other concerns. Day 120: Applicant responses due — "clock stop" during applicant response period (not counted in 210 days). Day 150: CHMP Assessment Report on responses. Day 180: Second LoOI if major objections remain (or new questions from responses). Oral explanation or inspection possible. Day 210: CHMP opinion — positive or negative. Commission decision: approximately 67 days after positive CHMP opinion.',
      },
      {
        heading: 'Special Authorization Pathways',
        body: 'Conditional Marketing Authorisation: For medicines addressing unmet medical need with less complete data than normally required; subject to annual renewal and specific obligations to complete comprehensive data. Exceptional Circumstances: For medicines where comprehensive efficacy and safety data cannot be expected due to rarity of condition (orphan medicines) or ethical/methodological constraints; subject to annual review indefinitely. Accelerated Assessment: 150-day instead of 210-day review for medicines of major public health interest. PRIME (PRIority MEdicines): EMA scheme offering early dialogue and scientific advice for promising medicines for unmet medical needs — reduces development time.',
      },
      {
        heading: 'EU Product Information: SmPC and PIL',
        body: 'The Summary of Product Characteristics (SmPC) is the core EU product information document — equivalent to USA Prescribing Information (PI). SmPC sections: Sections 1-2 (name, qualitative composition), Section 4 (clinical particulars — indications, dosing, contraindications, special warnings, interactions, pregnancy, effects on driving, undesirable effects, overdose), Section 5 (pharmacological properties), Section 6 (pharmaceutical particulars — excipients, shelf life, storage, packaging). The Patient Information Leaflet (PIL) mirrors the SmPC for patients. Both are subject to EMA readability testing and review.',
      },
      {
        heading: 'Post-Marketing Obligations in the EU',
        body: 'After EMA approval, Marketing Authorisation Holders (MAHs) have ongoing obligations: Pharmacovigilance — PSUR/PBRER submission, EudraVigilance ICSR reporting, PSMF maintenance, Risk Management Plan implementation. Variations — Type IA (minor changes, 30-day review), Type IB (moderate changes, 60-day review), Type II (major changes, 90-day review), Extensions. Annual renewal (for conditional approvals), sunset clause (product must be placed on market within 3 years or authorization lapses). Periodic audits by National Competent Authorities (NCAs). CMC lifecycle management and batch release testing by Official Medicines Control Laboratories (OMCLs).',
      },
    ],
    keyTerms: [
      { term: 'EMA', definition: 'European Medicines Agency — EU agency for scientific evaluation of medicines' },
      { term: 'CHMP', definition: 'Committee for Medicinal Products for Human Use — EMA committee conducting MAA reviews' },
      { term: 'MAA', definition: 'Marketing Authorisation Application — EU equivalent of the USA NDA/BLA' },
      { term: 'SmPC', definition: 'Summary of Product Characteristics — EU approved product information document' },
      { term: 'Centralised Procedure', definition: 'Single EMA application resulting in EU-wide marketing authorisation' },
      { term: 'PRIME', definition: 'PRIority MEdicines — EMA scheme for early dialogue on promising medicines' },
      { term: 'LoOI', definition: 'List of Outstanding Issues — CHMP questions to applicant during MAA review' },
    ],
    faqs: [
      { q: 'What is the difference between EMA Centralised Procedure and Mutual Recognition?', a: 'Centralised Procedure (CP) results in one marketing authorisation valid across all EU member states, issued by the European Commission following CHMP opinion. The Mutual Recognition Procedure (MRP) starts with national approval in one country (reference member state) and then recognizes that approval in other member states — each country issues its own national marketing authorisation. CP is mandatory for biotech products and new active substances; MRP is an option for other products.' },
      { q: 'What is a Type II variation to a Marketing Authorisation?', a: 'A Type II variation is a major change to an existing marketing authorisation that may have a significant impact on the quality, safety, or efficacy of the product. Examples: new indication, new route of administration, major manufacturing change, significant labeling changes based on new safety data. Type II variations require a 90-day review by CHMP (or national authority for MRP/DCP products). Type IA (minor): 30-day review. Type IB (moderate): 60-day review.' },
      { q: 'What is the EU Paediatric Regulation and how does it affect regulatory submissions?', a: 'Regulation (EC) No 1901/2006 requires sponsors to submit a Paediatric Investigation Plan (PIP) to the EMA\'s PDCO (Paediatric Committee) before starting Phase 3 trials for new medicines, new indications, or new formulations. A PIP-compliant product receives a 2-year extension of market exclusivity (SPC extension). Compliance with the PIP (or PIP waiver/deferral) is required as a condition for marketing authorisation in the EU.' },
      { q: 'What regulatory intelligence tools do EU regulatory affairs professionals use?', a: 'Key tools: EMA website (product pages, EPARs — European Public Assessment Reports), EudraLex (EU pharmaceutical legislation), EU Medicines Tracker (application status, CHMP opinions), Lexicomp and Micromedex (drug information), Citeline Regulatory (intelligence platform), Regulatory Compliance Associates tools. CHMP Assessment Reports (EPARs) are publicly available after approval and contain the scientific basis for approval decisions — invaluable for regulatory strategy.' },
    ],
    relatedSlugs: ['nda-bla-submission-guide', 'ich-guidelines-overview', 'pharmacovigilance-reporting-guide', 'regulatory-affairs-career-guide'],
  },
  {
    slug: 'regulatory-affairs-career-guide',
    title: 'Regulatory Affairs Career Guide: Roles, Skills, and Career Progression',
    category: 'Regulatory Affairs',
    metaTitle: 'Regulatory Affairs Career Guide: RA Jobs, Salary, Skills, and Progression',
    metaDesc: 'Complete regulatory affairs career guide — RA associate to VP roles, salary ranges, required skills (CTD, eCTD, Veeva RIM), and career progression in pharma regulatory.',
    h1: 'Regulatory Affairs Career Guide: Roles, Skills, and Career Progression in Pharma',
    intro: 'Regulatory Affairs (RA) is one of the most in-demand and well-compensated functions in the pharmaceutical industry. RA professionals ensure that drug products meet all regulatory requirements from first-in-human studies through post-marketing — interfacing with the FDA, EMA, PMDA, and other global health authorities. This guide covers RA job roles, required skills, salary expectations, and career progression paths.',
    sections: [
      {
        heading: 'Regulatory Affairs Job Roles and Responsibilities',
        body: 'Regulatory Affairs Associate (Entry Level): Document management, eCTD submission publishing, regulatory tracking, literature reviews, dossier assembly. Regulatory Affairs Specialist/Manager: Strategy for specific products, IND/NDA/BLA preparation, agency correspondence, labeling management, CMC regulatory support. Senior Manager/Associate Director: Regulatory strategy across products, team leadership, FDA/EMA meeting facilitation. Director/VP: Portfolio strategy, regulatory policy, executive reporting, M&A regulatory due diligence. Specialist sub-functions: Regulatory Operations (eCTD publishing), Regulatory Labeling, Regulatory CMC, Regulatory Affairs International (global submissions), Regulatory Intelligence.',
      },
      {
        heading: 'Required Skills for Regulatory Affairs',
        body: 'Technical skills: Knowledge of eCTD/CTD structure and Module requirements, FDA/EMA/ICH guidelines, regulatory strategy development, labeling principles (USA PI, EU SmPC), Veeva Vault RIM (most widely used regulatory information management system), eCTD publishing tools (Extedo, DocuBridge, Lorenz), regulatory intelligence platforms (Citeline), scientific writing. Soft skills: Attention to detail (regulatory submissions must be error-free), cross-functional collaboration (working with clinical, CMC, safety, legal), deadline management (PDUFA dates are fixed), communication (representing the company to regulators).',
      },
      {
        heading: 'Veeva Vault RIM for Regulatory Professionals',
        body: 'Veeva Vault RIM (Regulatory Information Management) is the leading platform for managing regulatory submissions, documents, and information in the pharmaceutical industry. Vault RIM includes: Submissions module (eCTD lifecycle management, sequence tracking, agency communications), Registrations module (global marketing authorisation tracking, variation management), Submissions Archive (validated repository for all submitted content), Publishing (eCTD compilation and validation). Proficiency in Veeva Vault RIM is one of the most in-demand regulatory skills — advertised in over 60% of senior regulatory affairs job postings.',
      },
      {
        heading: 'Salary Ranges in Regulatory Affairs',
        body: 'USA salaries by level: Regulatory Affairs Associate (0-3 years): $65,000-$95,000. Regulatory Affairs Specialist (3-6 years): $90,000-$130,000. Regulatory Affairs Manager (6-10 years): $120,000-$160,000. Senior Manager/Associate Director (8-15 years): $150,000-$200,000. Director (12+ years): $180,000-$250,000. VP/SVP: $250,000-$400,000+. Total compensation at large pharma includes 15-25% bonuses and stock options. Contractors/consultants earn $75-$150/hour depending on expertise. European salaries are typically 20-30% lower in absolute terms but purchasing power-adjusted comparably.',
      },
      {
        heading: 'Career Progression Path',
        body: 'Typical progression: Entry into RA often comes from pharmacy (PharmD), life sciences (BS/MS), or regulatory publishing/operations roles. Pharmaceutical sciences PhD or MS is common at large pharma. Progression: RA Associate → RA Specialist → RA Manager → Senior RA Manager → Director → VP. RAC (Regulatory Affairs Certification) from RAPS (Regulatory Affairs Professionals Society) is the industry certification — valued for mid-senior level roles. International experience (submitting to both FDA and EMA) significantly accelerates progression. CRO regulatory experience provides breadth across therapeutic areas and sponsor types.',
      },
    ],
    keyTerms: [
      { term: 'RAC', definition: 'Regulatory Affairs Certification — professional credential from RAPS for regulatory professionals' },
      { term: 'RAPS', definition: 'Regulatory Affairs Professionals Society — professional organization for global regulatory professionals' },
      { term: 'Veeva Vault RIM', definition: 'Leading regulatory information management platform for submission and registration management' },
      { term: 'eCTD publishing', definition: 'Technical process of compiling regulatory documents into eCTD-compliant submission sequences' },
      { term: 'Regulatory intelligence', definition: 'Monitoring and analyzing regulatory developments, guidance, and agency decisions' },
      { term: 'Global submission', definition: 'Regulatory submissions to multiple authorities (FDA, EMA, PMDA) with country-specific adaptations' },
      { term: 'Labeling', definition: 'Prescribing information, package insert, or SmPC — regulated text describing approved drug use' },
    ],
    faqs: [
      { q: 'Do you need a pharmacy degree to work in regulatory affairs?', a: 'A pharmacy degree (PharmD or BSPharm) is highly valued but not required. Many regulatory affairs professionals have life sciences degrees (biology, chemistry, biochemistry, pharmaceutical sciences), nursing, or even engineering backgrounds. For CMC-focused regulatory roles, a chemistry or pharmaceutical sciences background is preferred. For clinical regulatory, a clinical or public health background helps. Strong scientific writing and regulatory knowledge (gained through experience or RAC certification) often outweigh the specific degree.' },
      { q: 'What is the difference between Regulatory Affairs and Regulatory Operations?', a: 'Regulatory Affairs (RA) focuses on regulatory strategy — planning submissions, preparing content, interfacing with agencies, and making regulatory decisions. Regulatory Operations focuses on technical execution — eCTD publishing, document management in Veeva Vault RIM, submission tracking, and ensuring technical compliance of submissions. RA Ops professionals may use tools like Extedo eCTD Manager, Lorenz docuBridge, or Veeva Vault to assemble and publish submissions. Both functions are essential and career paths can overlap.' },
      { q: 'Is CRO regulatory experience valued at pharma companies?', a: 'Yes, highly. CRO regulatory experience is valued because it provides breadth — working across multiple sponsors, therapeutic areas, and submission types simultaneously. CRO professionals often have more hands-on submission experience than pharma counterparts who may focus on one product portfolio. The main perceived gap is strategy ownership — CROs execute sponsor strategy rather than develop it. Demonstrating strategic regulatory thinking alongside CRO execution experience positions candidates well for pharma roles.' },
      { q: 'What regulatory submissions tools should I learn for a regulatory career?', a: 'Priority tools: (1) Veeva Vault RIM — by far the most in-demand regulatory platform, used by most large pharma. (2) eCTD publishing tools — Extedo eRoom, Lorenz docuBridge, or Insife. (3) FDA Submissions Portal and EMA eSubmission Gateway — for submission mechanics. (4) Regulatory intelligence platforms — Citeline Regulatory, RAPS Regulatory Focus. (5) SharePoint/Teams — document management. Free training: Veeva offers Vault certification training, FDA has a public data submission training portal, and RAPS provides RA professional development courses.' },
    ],
    relatedSlugs: ['nda-bla-submission-guide', 'ema-maa-submission-guide', 'ich-guidelines-overview', 'cdisc-pinnacle21-guide'],
  },
  {
    slug: 'gmp-manufacturing-compliance-guide',
    title: 'GMP Manufacturing Compliance: FDA 21 CFR 211 and EU GMP Guidelines',
    category: 'Regulatory Affairs',
    metaTitle: 'GMP Manufacturing Compliance Guide: 21 CFR 211, EU GMP, Batch Release',
    metaDesc: 'Complete GMP compliance guide for pharmaceutical manufacturing — 21 CFR Part 211, EU GMP Annex 1, batch release, OOS investigations, CAPA, and GMP inspection preparation.',
    h1: 'GMP Manufacturing Compliance: 21 CFR Part 211 and EU GMP Complete Guide',
    intro: 'Good Manufacturing Practice (GMP) regulations govern the production of pharmaceutical products to ensure they meet safety, identity, strength, quality, and purity requirements. In the USA, GMP is regulated under 21 CFR Parts 210 and 211 (Current GMP — cGMP). In the EU, GMP is governed by EU GMP Guidelines (EudraLex Volume 4). GMP compliance is a condition of FDA and EMA approval and is verified through routine and for-cause inspections.',
    sections: [
      {
        heading: '21 CFR Part 211: Current GMP Requirements',
        body: '21 CFR Part 211 covers: Subpart B (Organization and Personnel — qualified person, training), Subpart C (Buildings and Facilities — design, cleanliness, controlled areas), Subpart D (Equipment — design, maintenance, calibration), Subpart E (Control of Components and Drug Product Containers — supplier qualification, incoming testing), Subpart F (Production and Process Controls — master batch records, in-process controls, deviation management), Subpart G (Holding and Distribution), Subpart H (Laboratory Controls — specifications, testing, OOS investigations, stability), Subpart I (Records and Reports — batch records, distribution records, complaint files), Subpart J (Returned and Salvaged Drug Products).',
      },
      {
        heading: 'Batch Record and Batch Release',
        body: 'The Master Batch Record (MBR) is the approved manufacturing instruction for each product — defining every step, quantity, time, temperature, and in-process control. The Batch Production Record (BPR) is the executed record for a specific batch — documenting every step as performed, with operator initials and timestamps. Batch release requires review and approval of: BPR completeness, in-process test results, finished product analytical testing (against CoA specifications), deviation review and closure, environmental monitoring data (for sterile products), and QP (Qualified Person) certification (EU) or QA batch disposition (USA).',
      },
      {
        heading: 'Out-of-Specification (OOS) Investigations',
        body: 'When laboratory results fall outside acceptance criteria, a formal OOS investigation is required under 21 CFR 211.192. Phase 1 (Laboratory Investigation): Was the failure due to lab error? Instrument malfunction, transcription error, analyst error, calculation error. If lab error confirmed, test can be repeated. Phase 2 (Full Investigation): If no lab error, expand to manufacturing investigation — review BPR, process parameters, raw materials, equipment. Phase 2 investigation must be completed before retesting. Retesting without investigation is not permitted. Final disposition: invalid (lab error confirmed), or confirmed OOS (triggers CAPA, potential batch rejection/recall).',
      },
      {
        heading: 'CAPA: Corrective and Preventive Action',
        body: 'CAPA is the quality system for addressing root causes of quality failures and preventing recurrence. Process: Detection (OOS, deviation, complaint, audit finding, stability failure), Report (CAPA initiation with problem statement), Root Cause Analysis (5 Whys, fishbone/Ishikawa diagram, FMEA, fault tree analysis), Corrective Action (fix the specific problem), Preventive Action (systemic change to prevent recurrence), Effectiveness Check (verify the CAPA worked), Closure. CAPA systems must be 21 CFR Part 820-compliant for medical devices and Part 211-compliant for drugs. Open CAPAs are a key metric during FDA inspections.',
      },
      {
        heading: 'FDA GMP Inspections',
        body: 'FDA conducts two types of inspections: Pre-Approval Inspection (PAI) — before NDA/BLA approval to verify manufacturing readiness; Routine Surveillance — periodic inspections of approved facilities (domestic annually, international every 2-4 years); For-Cause — in response to complaints, recalls, or data integrity concerns. Form 483 Observations are issued for inspectional observations; Warning Letters follow unresolved 483s. Inspection preparation: maintain inspection-ready batch records, keep CAPA current, conduct internal audits, train personnel on inspection behavior (answer only what is asked, know your job), and maintain a "hot room" of current batch records and SOPs.',
      },
    ],
    keyTerms: [
      { term: 'cGMP', definition: 'Current Good Manufacturing Practice — FDA regulations for pharmaceutical manufacturing quality' },
      { term: 'MBR', definition: 'Master Batch Record — approved manufacturing instruction for each drug product' },
      { term: 'BPR', definition: 'Batch Production Record — executed manufacturing record for a specific batch' },
      { term: 'OOS', definition: 'Out-of-Specification — analytical result outside acceptance criteria; requires formal investigation' },
      { term: 'CAPA', definition: 'Corrective and Preventive Action — quality system for addressing and preventing failures' },
      { term: 'QP', definition: 'Qualified Person — EU-required individual who certifies each batch for release' },
      { term: 'PAI', definition: 'Pre-Approval Inspection — FDA facility inspection before granting NDA/BLA approval' },
    ],
    faqs: [
      { q: 'What is the difference between GMP and cGMP?', a: 'GMP (Good Manufacturing Practice) refers to the general concept of manufacturing quality. cGMP (Current GMP) specifically refers to the FDA\'s 21 CFR Parts 210/211 regulations — the "current" emphasizes that manufacturers must keep up with evolving technology and standards, not just follow the literal text of the regulation as written. In practice, the terms are used interchangeably in the USA. EU GMP (EudraLex Volume 4) is the European equivalent.' },
      { q: 'What is a Form 483 and how should it be responded to?', a: 'FDA Form 483 is issued at the conclusion of an inspection to list inspectional observations — conditions the investigator considers objectionable. The 483 is not a Warning Letter but a request for response. Sponsors should: respond within 15 working days (or requested timeframe), address every observation with specific corrective actions and timelines, provide evidence of completed actions where possible, and demonstrate systemic understanding of root causes. A good 483 response can prevent escalation to a Warning Letter.' },
      { q: 'What are GMP requirements for analytical laboratory equipment?', a: '21 CFR 211.68 requires that automatic, mechanical, and electronic equipment used in manufacturing and testing is routinely calibrated, inspected, or checked according to written programs. For analytical instruments (HPLC, GC, dissolution apparatus, balances, Karl Fischer titrators): calibration must be performed at defined intervals, using traceable standards, with calibration records maintained. Instruments must be qualified (IQ/OQ/PQ) if used to generate GxP data. Part 11-compliant software is required if electronic data is the official record.' },
      { q: 'What is a pharmaceutical product recall and how is it classified?', a: 'A product recall removes a product from commerce due to safety, efficacy, or quality failures. FDA classifies recalls: Class I (serious adverse health consequences or death), Class II (may cause temporary adverse health consequences, or serious consequences are remote), Class III (not likely to cause adverse health consequences but violates regulations). Recalls may be voluntary (sponsor-initiated) or FDA-requested. Market withdrawal and stock recovery are less severe actions for minor violations not constituting a health hazard.' },
    ],
    relatedSlugs: ['computer-system-validation-guide', 'data-integrity-alcoa-guide', 'nda-bla-submission-guide', 'ich-guidelines-overview'],
  },
];
