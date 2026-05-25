import type { ServiceEntry } from './services-ai';

export const qaServices: ServiceEntry[] = [
  {
    slug: 'pharma-qa-proxy-job-support',
    title: 'Pharma QA Proxy Job Support',
    h1: 'Pharma Quality Assurance Proxy Job Support',
    metaTitle: 'Pharma QA Proxy Job Support | GMP Quality Assurance Help',
    metaDesc: 'Expert proxy job support for pharmaceutical quality assurance roles. GMP, QMS, CAPA, change control, deviation management, audit readiness — real-time expert guidance.',
    category: 'Quality Assurance',
    heroIntro: 'Pharmaceutical quality assurance roles demand deep GMP expertise, meticulous documentation skills, and the ability to navigate complex quality systems under regulatory scrutiny. Our QA proxy job support provides real-time expert guidance from certified QA professionals who have worked in FDA-regulated environments.',
    problemSection: 'QA interviews and live job tasks test your ability to write deviations, manage CAPA plans, conduct risk assessments, and interpret GMP requirements. Without hands-on regulated industry experience, these tasks can be overwhelming. Our experts guide you through every QA challenge in real time.',
    whatCovered: [
      'GMP compliance — 21 CFR Parts 210/211, EU GMP Annex guidance',
      'Deviation investigation — root cause analysis (5-Why, Fishbone, FTA)',
      'CAPA management — corrective action plans, effectiveness checks',
      'Change control — impact assessment, validation requirements, approval workflows',
      'Batch record review — critical quality attributes, in-process controls',
      'Document control — SOPs, policies, work instructions, change history',
      'Quality risk management — ICH Q9, FMEA, risk ranking and filtering',
      'Audit support — internal audits, supplier audits, regulatory inspection prep',
      'Out-of-specification (OOS) investigations — Phase I/II methodology',
      'Quality metrics — right-first-time, CAPA closure rates, deviation trends'
    ],
    roleExamples: [
      'QA Specialist / QA Associate',
      'Quality Assurance Manager',
      'GMP Compliance Specialist',
      'Batch Record Reviewer',
      'Document Control Specialist',
      'Quality Systems Analyst'
    ],
    tools: ['Veeva Vault QualityDocs', 'TrackWise', 'MasterControl', 'SAP QM', 'Pilgrim SmartSolve', 'ETQ Reliance', 'Sparta Systems'],
    faqs: [
      {
        q: 'Can you help with live deviation writing during a QA interview?',
        a: 'Yes. Our experts guide you through deviation scope definition, timeline reconstruction, immediate containment actions, root cause analysis, and CAPA formulation in real time.'
      },
      {
        q: 'Do you cover EU GMP as well as FDA GMP?',
        a: 'Yes. We cover FDA 21 CFR Parts 210/211, EU GMP Parts I and II, MHRA expectations, and ICH Q7 (API GMP) requirements.'
      },
      {
        q: 'What QA tools do your experts know?',
        a: 'Our team has hands-on experience with Veeva Vault QualityDocs, TrackWise Digital, MasterControl, SAP QM module, Pilgrim SmartSolve, and ETQ Reliance.'
      }
    ],
    relatedSlugs: ['pharma-qc-proxy-job-support', 'qms-proxy-job-support', 'capa-proxy-job-support', 'gmp-compliance-proxy-job-support', 'audit-readiness-proxy-job-support']
  },
  {
    slug: 'pharma-qc-proxy-job-support',
    title: 'Pharma QC Proxy Job Support',
    h1: 'Pharmaceutical Quality Control Proxy Job Support',
    metaTitle: 'Pharma QC Proxy Job Support | Quality Control Lab Help',
    metaDesc: 'Proxy job support for pharmaceutical QC roles. HPLC, dissolution, microbiology, stability, OOS investigations, laboratory data integrity — expert guidance in real time.',
    category: 'Quality Control',
    heroIntro: 'Pharmaceutical quality control positions require proficiency in analytical testing, laboratory data integrity, and regulatory compliance under cGMP. Our QC proxy job support connects you with experienced QC scientists who provide real-time guidance during interviews and live tasks.',
    problemSection: 'QC interviews test your knowledge of analytical methods, HPLC interpretation, OOS investigations, laboratory data integrity, and stability study design. Technical questions can be highly specific. Our QC experts ensure you handle every challenge with confidence.',
    whatCovered: [
      'Analytical method knowledge — HPLC, dissolution, UV-Vis, Karl Fischer',
      'Laboratory data integrity — ALCOA+ principles, audit trail review',
      'OOS/OOT investigation — Phase I laboratory investigation, Phase II full investigation',
      'Stability testing — ICH Q1A-Q1F, accelerated and long-term conditions',
      'Microbiology testing — bioburden, sterility, endotoxin (LAL), environmental monitoring',
      'Reference standard management — USP, EP, working standards',
      'Laboratory instruments — calibration, qualification, preventive maintenance',
      'Specification setting — release and shelf-life specifications',
      'USP/EP/BP pharmacopeial testing — compendial method compliance',
      'Data trending — Westgard rules, control charts, Cpk calculations'
    ],
    roleExamples: [
      'QC Analyst / Senior QC Analyst',
      'Quality Control Chemist',
      'Stability Coordinator',
      'Laboratory Supervisor',
      'Microbiology Analyst',
      'Analytical Development Scientist (QC interface)'
    ],
    tools: ['Empower (Waters)', 'Chromeleon', 'LIMS (LabVantage, SampleManager)', 'LIMS21', 'Labworks', 'SAS JMP', 'Minitab'],
    faqs: [
      {
        q: 'Can you help me explain an OOS investigation methodology in an interview?',
        a: 'Yes. We walk you through Phase I (lab error investigation) and Phase II (expanded investigation with additional testing and statistical review) per 21 CFR 211.192 and FDA OOS guidance.'
      },
      {
        q: 'Do you cover LIMS systems?',
        a: 'Yes. Our experts have experience with LabVantage, SampleManager LIMS, Labworks, and LIMS21, covering sample login, result entry, workflow management, and report generation.'
      },
      {
        q: 'Can you help with HPLC method interpretation questions?',
        a: 'Yes. We cover peak identification, system suitability parameters (tailing factor, theoretical plates, resolution), integration review, and specification comparison.'
      }
    ],
    relatedSlugs: ['pharma-qa-proxy-job-support', 'deviation-management-proxy-job-support', 'audit-readiness-proxy-job-support', 'pharma-compliance-proxy-job-support']
  },
  {
    slug: 'qms-proxy-job-support',
    title: 'QMS Proxy Job Support',
    h1: 'Quality Management System (QMS) Proxy Job Support',
    metaTitle: 'QMS Proxy Job Support | Pharma Quality Management System Help',
    metaDesc: 'Expert proxy support for pharma QMS roles. Document control, CAPA, change control, deviation management, training management — real-time guidance for QMS professionals.',
    category: 'Quality Management',
    heroIntro: 'Quality Management System roles in pharma require mastery of integrated quality processes — document control, CAPA, change control, deviation management, and training management. Our QMS proxy job support provides real-time expert assistance during interviews and live work sessions.',
    problemSection: 'QMS roles demand cross-functional knowledge spanning SOPs, quality events, regulatory submissions, and system administration. Live tasks often include demonstrating QMS workflows, configuring approval chains, or generating compliance reports. Our experts guide you through all of it.',
    whatCovered: [
      'QMS architecture — document hierarchy, process maps, quality manual structure',
      'Document control — lifecycle management, version control, periodic review workflows',
      'CAPA management — root cause analysis, action plans, effectiveness verification',
      'Change control — change request initiation, impact assessment, validation triggers',
      'Deviation management — classification (critical/major/minor), investigation, closure',
      'Training management — curriculum design, completion tracking, gap analysis',
      'Supplier quality management — qualification, scorecards, audits',
      'Quality metrics and dashboards — KPI definition, trending, management review input',
      'Regulatory compliance mapping — ISO 9001, ISO 13485, 21 CFR Part 820, EU GMP',
      'Electronic QMS (eQMS) — Veeva Vault, MasterControl, TrackWise configuration'
    ],
    roleExamples: [
      'QMS Specialist / QMS Administrator',
      'Quality Systems Manager',
      'Document Control Manager',
      'Compliance Coordinator',
      'Quality Excellence Analyst',
      'Continuous Improvement Specialist'
    ],
    tools: ['Veeva Vault QualityDocs', 'MasterControl', 'TrackWise Digital', 'ETQ Reliance', 'Pilgrim SmartSolve', 'Spartaqs', 'Documentum'],
    faqs: [
      {
        q: 'Can you help me navigate a live QMS workflow demonstration during an interview?',
        a: 'Yes. Our experts guide you through initiating records, routing for approvals, attaching supporting documents, linking related events, and closing quality records in QMS platforms in real time.'
      },
      {
        q: 'Do you cover ISO 13485 QMS for medical devices?',
        a: 'Yes. We cover both pharmaceutical QMS (21 CFR Parts 210/211, EU GMP) and medical device QMS (ISO 13485, 21 CFR Part 820, EU MDR).'
      },
      {
        q: 'Can you help with quality metrics reporting during a live task?',
        a: 'Yes. We help you pull data, calculate KPIs (CAPA on-time closure, deviation repeat rate, change control cycle time), and format management review presentations.'
      }
    ],
    relatedSlugs: ['capa-proxy-job-support', 'change-control-proxy-job-support', 'deviation-management-proxy-job-support', 'pharma-qa-proxy-job-support', 'veeva-vault-qualitydocs-proxy-job-support']
  },
  {
    slug: 'capa-proxy-job-support',
    title: 'CAPA Proxy Job Support',
    h1: 'CAPA Management Proxy Job Support for Pharma',
    metaTitle: 'CAPA Proxy Job Support | Pharma Corrective Action Preventive Action Help',
    metaDesc: 'Expert proxy support for pharma CAPA roles. Root cause analysis, corrective action plans, effectiveness checks, CAPA closure — real-time guidance from GMP experts.',
    category: 'Quality Assurance',
    heroIntro: 'CAPA (Corrective and Preventive Action) is the backbone of pharmaceutical quality systems. CAPA-related interview questions and live tasks test your ability to investigate root causes, formulate effective corrective actions, and demonstrate preventive thinking. Our experts guide you through every step.',
    problemSection: 'FDA Warning Letters and 483 observations frequently cite inadequate CAPA systems. Interviewers ask probing questions about your ability to apply structured root cause methodologies, write defensible CAPA plans, and verify effectiveness. Our GMP-experienced experts ensure your responses meet regulatory standards.',
    whatCovered: [
      'CAPA initiation — source identification, scope definition, assignment',
      'Root cause analysis — 5-Why, Fishbone/Ishikawa, Fault Tree Analysis (FTA)',
      'Risk assessment — severity/probability/detectability rating, control measures',
      'Corrective action planning — SMART actions, owner assignment, due dates',
      'Preventive action — systemic fixes, process changes, training updates',
      'Effectiveness verification — acceptance criteria, re-evaluation timelines',
      'CAPA closure — evidence packages, QA review, regulatory commitments',
      'Regulatory CAPA expectations — FDA 21 CFR 211.192, 820.100, EU GMP Chapter 8',
      'CAPA trending — repeat events, systemic issues, management review reporting',
      'CAPA in QMS tools — Veeva Vault, TrackWise, MasterControl workflows'
    ],
    roleExamples: [
      'CAPA Specialist / CAPA Coordinator',
      'Quality Systems Analyst',
      'Compliance Specialist',
      'QA Manager (CAPA oversight)',
      'Site Quality Director',
      'Regulatory Affairs Quality Liaison'
    ],
    tools: ['Veeva Vault QualityDocs', 'TrackWise Digital', 'MasterControl', 'ETQ Reliance', 'Pilgrim SmartSolve', 'Sparta Systems'],
    faqs: [
      {
        q: 'Can you walk me through writing a CAPA plan in real time during an interview?',
        a: 'Yes. Our experts guide you through problem statement formulation, root cause identification using structured tools, corrective action planning with SMART criteria, and effectiveness verification planning.'
      },
      {
        q: 'What root cause analysis tools do you cover?',
        a: 'We cover 5-Why analysis, Ishikawa (fishbone) diagrams, Fault Tree Analysis (FTA), Failure Mode and Effects Analysis (FMEA), and Apollo Root Cause Analysis methodology.'
      },
      {
        q: 'How do you handle effectiveness check questions?',
        a: 'We help you define measurable acceptance criteria, set appropriate re-evaluation timeframes (typically 3-6 months post-implementation), and describe evidence collection methods for demonstrating CAPA effectiveness.'
      }
    ],
    relatedSlugs: ['deviation-management-proxy-job-support', 'change-control-proxy-job-support', 'qms-proxy-job-support', 'pharma-qa-proxy-job-support', 'audit-readiness-proxy-job-support']
  },
  {
    slug: 'deviation-management-proxy-job-support',
    title: 'Deviation Management Proxy Job Support',
    h1: 'Pharmaceutical Deviation Management Proxy Job Support',
    metaTitle: 'Deviation Management Proxy Job Support | Pharma GMP Deviation Help',
    metaDesc: 'Expert proxy support for pharma deviation management roles. Deviation investigation, root cause analysis, risk classification, CAPA linkage — real-time GMP expert guidance.',
    category: 'Quality Assurance',
    heroIntro: 'Deviation management is a critical GMP compliance competency. Pharmaceutical companies expect QA professionals to classify deviations accurately, investigate root causes systematically, and manage regulatory risk. Our proxy support gives you real-time expert guidance when it matters most.',
    problemSection: 'Live deviation management tasks test your ability to classify events (planned vs. unplanned, critical/major/minor), reconstruct timelines, apply root cause tools, assess batch disposition risk, and write investigation reports that satisfy FDA/EMA reviewers. Our experts handle this with you.',
    whatCovered: [
      'Deviation classification — planned vs. unplanned, critical/major/minor impact',
      'Initial notification — 24-hour reporting, immediate containment actions',
      'Timeline reconstruction — event sequence, discovery point, extent of deviation',
      'Root cause investigation — 5-Why, Fishbone, primary vs. contributing causes',
      'Batch impact assessment — quality risk, disposition recommendation (release/reject/reprocess)',
      'Written investigation reports — regulatory-ready documentation standards',
      'CAPA linkage — connecting deviation findings to corrective actions',
      'Repeat deviation analysis — systemic trending, escalation triggers',
      'Regulatory deviation expectations — FDA 211.192, EMA GMP, MHRA standards',
      'Deviation workflow in QMS — Veeva Vault, TrackWise, MasterControl'
    ],
    roleExamples: [
      'QA Specialist (Deviation)',
      'Quality Systems Investigator',
      'Manufacturing Quality Associate',
      'Batch Record Reviewer',
      'Quality Events Coordinator',
      'Site Quality Manager'
    ],
    tools: ['Veeva Vault QualityDocs', 'TrackWise Digital', 'MasterControl', 'SAP QM', 'ETQ Reliance'],
    faqs: [
      {
        q: 'Can you help me write a deviation investigation report during an interview exercise?',
        a: 'Yes. We guide you through the entire structure: deviation description, timeline, affected materials/batches, root cause analysis, immediate actions, CAPA plan, and batch disposition recommendation.'
      },
      {
        q: 'How do you distinguish critical, major, and minor deviations?',
        a: 'We explain classification frameworks based on patient safety impact, regulatory compliance risk, product quality impact, and recurrence probability — aligned with FDA, EMA, and site-specific SOPs.'
      },
      {
        q: 'Do you cover batch disposition decision-making?',
        a: 'Yes. We cover the full disposition process including Quality Unit authority, risk-based release criteria, conditional release, quarantine, rejection criteria, and regulatory reporting thresholds.'
      }
    ],
    relatedSlugs: ['capa-proxy-job-support', 'change-control-proxy-job-support', 'pharma-qa-proxy-job-support', 'audit-readiness-proxy-job-support', 'gmp-compliance-proxy-job-support']
  },
  {
    slug: 'change-control-proxy-job-support',
    title: 'Change Control Proxy Job Support',
    h1: 'Pharma Change Control Proxy Job Support',
    metaTitle: 'Change Control Proxy Job Support | Pharma GMP Change Management Help',
    metaDesc: 'Expert proxy support for pharmaceutical change control roles. Impact assessment, validation requirements, regulatory reporting, change control workflows — real-time GMP guidance.',
    category: 'Quality Assurance',
    heroIntro: 'Change control is a highly regulated pharmaceutical process that touches manufacturing, quality, regulatory, and validation teams. Interviewers test your ability to assess change impact, determine validation requirements, and navigate regulatory reporting obligations. Our experts provide real-time guidance.',
    problemSection: 'Change control interviews ask about impact assessments for equipment, process, facility, software, and supplier changes. Questions probe your knowledge of validation triggers, regulatory filing categories (CBE-30, Prior Approval), and change control workflow management. We guide you through all of it.',
    whatCovered: [
      'Change request initiation — change description, affected areas, preliminary risk assessment',
      'Change categorization — major, moderate, minor classifications',
      'Impact assessment — product quality, regulatory, validation, documentation impacts',
      'Validation requirement determination — equipment/process/cleaning/computer validation triggers',
      'Regulatory filing obligations — CBE-30, Prior Approval Supplement (PAS), Annual Report',
      'Regulatory affairs coordination — NDA/BLA/MAA variation assessment',
      'Implementation planning — parallel testing, cutover strategy, implementation verification',
      'Change effectiveness review — post-implementation quality data review',
      'Change control in QMS — workflow routing, approval chains, closure requirements',
      'ICH Q10 change management — pharmaceutical quality system requirements'
    ],
    roleExamples: [
      'Change Control Specialist / Coordinator',
      'Quality Systems Analyst',
      'Manufacturing Change Manager',
      'Technical Operations QA',
      'Regulatory Affairs / Quality Interface',
      'Site Quality Director'
    ],
    tools: ['Veeva Vault QualityDocs', 'TrackWise Digital', 'MasterControl', 'SAP Change Management', 'Pilgrim SmartSolve'],
    faqs: [
      {
        q: 'Can you help me conduct a live change impact assessment during an interview task?',
        a: 'Yes. We guide you through systematically evaluating a change across product quality, process parameters, equipment, documentation, validation, regulatory filing, and patient safety dimensions.'
      },
      {
        q: 'Do you cover regulatory submission requirements triggered by changes?',
        a: 'Yes. We cover FDA supplement categories (Prior Approval, CBE-30, Annual Report), EMA variation classifications (Type IA, IB, II), and when changes require regulatory approval before implementation.'
      },
      {
        q: 'What is the difference between a minor and major change in pharma?',
        a: 'We explain site-specific SOPs and regulatory guidance frameworks for classifying changes based on risk to product quality, process complexity, and extent of supporting data required.'
      }
    ],
    relatedSlugs: ['capa-proxy-job-support', 'deviation-management-proxy-job-support', 'csv-validation-proxy-job-support', 'pharma-qa-proxy-job-support', 'qms-proxy-job-support']
  },
  {
    slug: 'gmp-compliance-proxy-job-support',
    title: 'GMP Compliance Proxy Job Support',
    h1: 'GMP Compliance Proxy Job Support for Pharma',
    metaTitle: 'GMP Compliance Proxy Job Support | FDA EU GMP Help',
    metaDesc: 'Expert proxy support for GMP compliance roles. 21 CFR Parts 210/211, EU GMP, ICH Q10, data integrity, inspection readiness — real-time GMP compliance guidance.',
    category: 'GMP Compliance',
    heroIntro: 'GMP compliance roles require deep regulatory knowledge and the ability to translate complex regulations into practical quality systems. Our GMP compliance proxy job support connects you with experts who have navigated FDA/EMA inspections and built compliant quality systems in regulated pharma environments.',
    problemSection: 'GMP compliance interviews test your interpretation of regulations, ability to identify compliance gaps, and knowledge of inspection processes. Live tasks may include gap assessments, SOP reviews, or compliance program evaluations. Our experts provide real-time regulatory expertise.',
    whatCovered: [
      '21 CFR Parts 210/211 — cGMP for finished pharmaceuticals, detailed requirements',
      'EU GMP — Parts I, II, Annexes (1, 11, 13, 15, 17, 20)',
      'ICH guidelines — Q7, Q8, Q9, Q10, Q11, Q12 pharmaceutical quality',
      'Data integrity — ALCOA+ framework, FDA/EMA/MHRA data integrity guidance',
      'GMP gap assessment — written assessment methodology, findings classification',
      'FDA inspection process — 483 observations, Warning Letters, PAI preparation',
      'CAPA for inspection observations — regulatory commitment management',
      'API GMP — ICH Q7, FDA API guidance',
      'Biologics GMP — 21 CFR Part 600, EU GMP Annex 2',
      'Sterile manufacturing — 21 CFR Part 211.113, EU GMP Annex 1 (2022 revision)'
    ],
    roleExamples: [
      'GMP Compliance Specialist',
      'Regulatory Compliance Manager',
      'Quality Compliance Auditor',
      'Site Compliance Lead',
      'Global Quality Standards Manager',
      'Inspection Readiness Coordinator'
    ],
    tools: ['Veeva Vault', 'TrackWise', 'MasterControl', 'ComplianceWire', 'Aris (ARIS Global)', 'Pilgrim'],
    faqs: [
      {
        q: 'Can you help me prepare for GMP compliance interview questions in real time?',
        a: 'Yes. Our experts provide live coaching on regulatory interpretation, case study analysis, gap assessment exercises, and inspection scenario roleplays.'
      },
      {
        q: 'Do you cover EU GMP Annex 1 (2022) sterile manufacturing requirements?',
        a: 'Yes. We cover the revised EU GMP Annex 1 (effective August 2023) including contamination control strategy (CCS), barrier systems (RABS/isolators), and environmental monitoring requirements.'
      },
      {
        q: 'Can you help with data integrity questions in a GMP interview?',
        a: 'Yes. We cover ALCOA+ principles, audit trail review, computer system data integrity, raw data vs. metadata, and FDA/MHRA/EMA data integrity guidance expectations.'
      }
    ],
    relatedSlugs: ['audit-readiness-proxy-job-support', 'pharma-qa-proxy-job-support', 'csv-validation-proxy-job-support', '21-cfr-part-11-proxy-job-support', 'pharma-compliance-proxy-job-support']
  },
  {
    slug: 'audit-readiness-proxy-job-support',
    title: 'Audit Readiness Proxy Job Support',
    h1: 'Pharma Audit Readiness Proxy Job Support',
    metaTitle: 'Audit Readiness Proxy Job Support | FDA Inspection Preparation Help',
    metaDesc: 'Expert proxy support for pharma audit readiness roles. FDA PAI, EMA inspection, internal audit preparation, 483 response, CAPA commitments — real-time expert guidance.',
    category: 'Quality Assurance',
    heroIntro: 'Audit readiness roles require the ability to assess quality systems, identify compliance vulnerabilities, and coordinate organization-wide preparation for FDA/EMA/notified body inspections. Our audit readiness proxy job support provides real-time expert guidance from professionals who have led inspection preparation programs.',
    problemSection: 'Audit readiness interviews ask about inspection preparation methodologies, mock audit conduct, finding classification, and regulatory agency interaction protocols. Interviewers look for genuine experience with regulated inspections. Our experts bridge that gap with real-time guidance.',
    whatCovered: [
      'Inspection types — PAI (Pre-Approval Inspection), routine GMP, for-cause, surveillance',
      'Audit readiness programs — back-room operations, front-room management, subject matter expert prep',
      'Mock inspection conduct — inspection scenario design, SME coaching, finding debriefs',
      'FDA inspector methodology — 21 CFR 211 areas of focus, system-based inspection approach',
      'EMA inspection approach — GMP compliance programme, mutual recognition agreements',
      'Internal audit programs — audit schedule, audit trails, CAPA integration',
      'Document readiness — SOP currency, batch record completeness, equipment logs',
      '483 response strategy — voluntary action vs. corrective action, commitment timelines',
      'Warning Letter response — regulatory commitments, consent decree implications',
      'Supplier audit — qualification audit, surveillance audit, for-cause audit protocols'
    ],
    roleExamples: [
      'Audit Readiness Manager',
      'Inspection Readiness Lead',
      'Quality Compliance Specialist',
      'Internal Auditor (GMP)',
      'Supplier Quality Manager',
      'Site Quality Director'
    ],
    tools: ['Veeva Vault', 'TrackWise', 'MasterControl', 'Audit Management modules', 'Microsoft SharePoint (audit tracking)'],
    faqs: [
      {
        q: 'Can you help me prepare for FDA inspection scenario questions in real time?',
        a: 'Yes. Our experts simulate FDA inspection questioning, guide you on back-room and front-room best practices, help you articulate CAPA commitments, and coach you on regulatory interaction protocols.'
      },
      {
        q: 'Do you cover 483 observation response writing?',
        a: 'Yes. We help you structure 483 responses with immediate corrections, root cause analysis, CAPA plans, implementation timelines, and systemic prevention commitments.'
      },
      {
        q: 'Can you help with supplier audit questions during an interview?',
        a: 'Yes. We cover qualification audit methodology, critical supplier designation, audit report writing, CAPA follow-up, and supplier risk management frameworks.'
      }
    ],
    relatedSlugs: ['gmp-compliance-proxy-job-support', 'pharma-qa-proxy-job-support', 'capa-proxy-job-support', 'deviation-management-proxy-job-support', 'pharma-compliance-proxy-job-support']
  }
];
