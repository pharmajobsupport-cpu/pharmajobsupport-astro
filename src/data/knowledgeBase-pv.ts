import type { KBEntry } from './knowledgeBase-clinical';

export const pvKB: KBEntry[] = [
  {
    slug: 'pharmacovigilance-reporting-guide',
    title: 'Pharmacovigilance Reporting: ICSR, SUSAR, PSUR, and EudraVigilance',
    category: 'Pharmacovigilance',
    metaTitle: 'Pharmacovigilance Reporting Guide: ICSR, SUSAR, PSUR, EudraVigilance',
    metaDesc: 'Complete pharmacovigilance reporting guide — ICSR E2B(R3) reporting, SUSAR 15-day expedited reports, PSUR/PBRER, EudraVigilance, FAERS, and signal detection.',
    h1: 'Pharmacovigilance Reporting: ICSR, SUSAR, PSUR, and EudraVigilance Guide',
    intro: 'Pharmacovigilance (PV) is the science and activities relating to the detection, assessment, understanding, and prevention of adverse effects or any other drug-related problems. PV professionals manage individual case safety reports (ICSRs), expedited safety reporting, periodic safety reports, and signal detection activities using databases like EudraVigilance (EMA) and FAERS (FDA). Accurate and timely PV reporting is a regulatory obligation and a patient safety imperative.',
    sections: [
      {
        heading: 'Individual Case Safety Reports (ICSRs)',
        body: 'An ICSR is the fundamental unit of pharmacovigilance reporting — documenting a single adverse event experienced by one patient taking one or more suspect drugs. ICH E2B(R3) defines the standard data elements and XML format for electronic ICSR transmission. Key ICSR elements: patient demographics, suspect drug (with dose, route, indication, start/stop dates), adverse event (MedDRA-coded, seriousness criteria, outcome), reporter information (reporter type: healthcare professional, consumer, literature, regulatory authority). ICSRs are submitted to regulatory authorities electronically via ICH E2B(R3) XML messages.',
      },
      {
        heading: 'Expedited Reporting: SUSARs and SAEs',
        body: 'Suspected Unexpected Serious Adverse Reactions (SUSARs) in clinical trials must be reported within 15 days (fatal/life-threatening: 7 days) to regulatory authorities. For marketed drugs, serious unexpected adverse drug reactions (ADRs) must be reported within 15 days of awareness. Criteria for expedited reporting: Serious (results in death, hospitalization, persistent disability, life-threatening, congenital anomaly, or medically significant) AND Unexpected (not in the current Reference Safety Information — RSI, typically the Investigator\'s Brochure or SmPC) AND Related (reasonable causal relationship to the suspect drug). Non-serious or expected events go into periodic reports.',
      },
      {
        heading: 'EudraVigilance and FAERS Databases',
        body: 'EudraVigilance is the EMA\'s European database for adverse reaction reports of authorized medicines, accessible at eudravigilance.ema.europa.eu. Marketing Authorization Holders (MAHs) must submit ICSRs to EudraVigilance in E2B(R3) format using the EudraVigilance Gateway. FAERS (FDA Adverse Event Reporting System) is the US equivalent, receiving ICSRs via the FDA Electronic Submissions Gateway. Both databases are publicly accessible for signal detection. VigiBase (WHO Uppsala Monitoring Centre) is the global ICSR database containing over 30 million reports from 150+ countries.',
      },
      {
        heading: 'Periodic Safety Update Reports (PSURs / PBRERs)',
        body: 'PSURs (Periodic Safety Update Reports) / PBRERs (Periodic Benefit-Risk Evaluation Reports) are comprehensive safety assessments submitted at defined intervals after drug approval. Required by ICH E2C(R2), they summarize all available safety data, analyze benefit-risk, and propose labeling changes if needed. Submission frequency: 6-monthly for first 2 years, annual for next 3 years, then every 3 years in the EU. FDA requires annual Development Safety Update Reports (DSURs) for investigational drugs in clinical trials. PBRERs are reviewed by the Pharmacovigilance Risk Assessment Committee (PRAC) at EMA.',
      },
      {
        heading: 'Signal Detection and Risk Management',
        body: 'Signal detection involves systematic analysis of PV data to identify new or changed safety signals. Methods include quantitative (disproportionality analysis: Reporting Odds Ratio, Proportional Reporting Ratio in VigiBase/FAERS) and qualitative (case series review, literature monitoring). EU pharmacovigilance legislation (Regulation 1235/2010) requires MAHs to maintain a pharmacovigilance system with a Pharmacovigilance System Master File (PSMF). Risk Management Plans (RMPs) submitted with Marketing Authorization Applications document known risks, missing information, and risk minimization measures.',
      },
    ],
    keyTerms: [
      { term: 'ICSR', definition: 'Individual Case Safety Report — standardized report of a single adverse event for one patient' },
      { term: 'SUSAR', definition: 'Suspected Unexpected Serious Adverse Reaction — requires 7-15 day expedited reporting' },
      { term: 'E2B(R3)', definition: 'ICH standard for ICSR data elements and XML format for electronic transmission' },
      { term: 'EudraVigilance', definition: 'EMA\'s European database for adverse reaction reports; MAHs must submit ICSRs here' },
      { term: 'PSUR/PBRER', definition: 'Periodic Safety Update/Benefit-Risk Evaluation Report — comprehensive post-approval safety assessment' },
      { term: 'FAERS', definition: 'FDA Adverse Event Reporting System — US pharmacovigilance database' },
      { term: 'Signal detection', definition: 'Systematic analysis to identify new or changed safety signals in pharmacovigilance data' },
    ],
    faqs: [
      { q: 'What is the timeline for SUSAR reporting in clinical trials?', a: 'Fatal or life-threatening SUSARs must be reported within 7 calendar days of the sponsor becoming aware, with a follow-up report within 8 more days (total 15 days). All other SUSARs must be reported within 15 calendar days. The clock starts when the sponsor has minimum viable information: an identifiable patient, a suspect drug, an adverse event, and a reporter. Sponsors report to regulatory authorities (FDA via MedWatch, EMA via EudraVigilance) and to all participating investigators.' },
      { q: 'What is Argus Safety and how is it used in pharmacovigilance?', a: 'Oracle Argus Safety is the most widely used pharmacovigilance case management system in large pharma. It manages the entire ICSR lifecycle: case intake (from all sources: literature, sites, spontaneous), medical review and coding (MedDRA), causality assessment, seriousness determination, reporting workflow, and E2B(R3) electronic transmission to regulatory authorities. Argus integrates with EudraVigilance and FAERS gateways. Oracle Argus Cloud is the SaaS version used by most modern pharmacovigilance operations.' },
      { q: 'What is a Risk Management Plan (RMP)?', a: 'An RMP is a pharmacovigilance document submitted with Marketing Authorization Applications to the EMA documenting: Part I (Product overview), Part II (Safety specification — known risks, potential risks, missing information), Part III (Pharmacovigilance plan — how risks will be further characterized), Part IV (Plans for post-authorization efficacy studies), Part V (Risk minimization measures — routine measures like SmPC warnings, additional measures like REMS/registries, or educational programs).' },
      { q: 'What is the difference between an adverse event and an adverse drug reaction?', a: 'An Adverse Event (AE) is any untoward medical occurrence in a patient administered a pharmaceutical product, with or without causal relationship to the treatment. An Adverse Drug Reaction (ADR) is an AE where a causal relationship to the drug is at least a reasonable possibility (cannot be ruled out). In clinical trials, all AEs are collected. For marketed drugs, only ADRs are reportable under pharmacovigilance regulations. Seriousness is assessed independently of causality.' },
    ],
    relatedSlugs: ['meddra-coding-guide', 'clinical-data-management-guide', 'what-is-sdtm', 'computer-system-validation-guide'],
  },
  {
    slug: 'drug-safety-surveillance-guide',
    title: 'Drug Safety Surveillance: Post-Market Pharmacovigilance Systems',
    category: 'Pharmacovigilance',
    metaTitle: 'Drug Safety Surveillance Guide: Post-Market PV, Signal Management, REMS',
    metaDesc: 'Understand post-marketing drug safety surveillance — spontaneous reporting systems, signal management, risk minimization, REMS programs, and PSURs for marketed drugs.',
    h1: 'Drug Safety Surveillance: Post-Market Pharmacovigilance System Guide',
    intro: 'Post-marketing drug safety surveillance is the ongoing monitoring of a drug\'s safety profile after regulatory approval. While pre-approval clinical trials provide controlled safety data, real-world use reveals rare adverse events, drug interactions, and safety in special populations (elderly, pediatric, renal impairment) not captured in trials. Pharmacovigilance (PV) professionals build and maintain surveillance systems to continuously assess the benefit-risk balance of marketed medicines.',
    sections: [
      {
        heading: 'Spontaneous Reporting System',
        body: 'Spontaneous reporting — healthcare professionals and patients voluntarily reporting adverse events — is the cornerstone of post-marketing surveillance. Reports come from multiple sources: healthcare professionals (prescribers, pharmacists, nurses), patients/consumers, scientific literature, health authority contacts, and social media monitoring. Marketing Authorization Holders (MAHs) have legal obligations to collect, assess, and forward valid reports to regulatory authorities. The key challenge of spontaneous reporting is underreporting — an estimated 1-10% of actual ADRs are reported, requiring disproportionality analysis to detect true signals.',
      },
      {
        heading: 'Literature Monitoring',
        body: 'ICH E6(R3) and EU pharmacovigilance legislation require MAHs to continuously monitor scientific and medical literature for adverse event reports mentioning their products. Literature searches must cover global medical databases (PubMed/MEDLINE, EMBASE, local literature) at appropriate intervals (at least weekly for systematic searches). Identified publications must be assessed for ICSR-reportable cases. Most large PV departments use literature monitoring service providers or automated tools (Elsevier\'s RxMx, Clarivate\'s Integrity) to manage the volume of publications. Literature-sourced ICSRs are submitted to authorities within standard timelines.',
      },
      {
        heading: 'Risk Minimization Measures',
        body: 'Risk minimization measures are interventions that reduce the probability or severity of adverse reactions. Routine measures: labeling (SmPC, package leaflet), healthcare professional communications, regulated pack size. Additional risk minimization measures (aRMMs) are required for drugs with serious known risks: REMS (Risk Evaluation and Mitigation Strategy) in the US — required programs including Medication Guides, communication plans, and Elements to Assure Safe Use (ETASU). EU: DHPC (Direct Healthcare Professional Communication), patient reminder cards, controlled distribution. Effectiveness of aRMMs must be assessed periodically.',
      },
      {
        heading: 'Pharmacovigilance System Master File (PSMF)',
        body: 'EU legislation requires MAHs to maintain a PSMF — a master document describing the pharmacovigilance system for all EU-authorized products. The PSMF must be continuously updated and available to competent authorities on request within 7 days. Required content: QPPV (Qualified Person for Pharmacovigilance) contact details and qualifications, organizational structure of PV operations, description of information systems used (Argus, Veeva Vault Safety), quality system for PV (SOPs, training, audits), signal management procedures, ICSR processing workflows, and pharmacovigilance agreements with MAH partners. The QPPV is responsible for the adequacy of the PV system.',
      },
      {
        heading: 'Post-Authorization Safety Studies (PASS)',
        body: 'PASS (Post-Authorization Safety Studies) are required when a Marketing Authorization has conditions requiring additional safety data after approval. They include: non-interventional studies (observational, database studies, registries), interventional studies, and systematic literature reviews. EU Annex I of Regulation 520/2012 defines required PASS protocols, which must be agreed with the Pharmacovigilance Risk Assessment Committee (PRAC) before initiation. Results are submitted as PASS reports and may trigger labeling changes or additional risk minimization measures.',
      },
    ],
    keyTerms: [
      { term: 'QPPV', definition: 'Qualified Person for Pharmacovigilance — EU-required individual responsible for the PV system' },
      { term: 'PSMF', definition: 'Pharmacovigilance System Master File — master document describing an MAH\'s PV system' },
      { term: 'REMS', definition: 'Risk Evaluation and Mitigation Strategy — FDA-required program for drugs with serious risks' },
      { term: 'PASS', definition: 'Post-Authorization Safety Study — additional safety study required as a condition of EU approval' },
      { term: 'aRMM', definition: 'Additional Risk Minimization Measures — interventions beyond labeling for high-risk drugs' },
      { term: 'MAH', definition: 'Marketing Authorization Holder — company legally responsible for an approved drug product' },
      { term: 'Underreporting', definition: 'Estimation that only 1-10% of actual ADRs are spontaneously reported to authorities' },
    ],
    faqs: [
      { q: 'What is the role of a Drug Safety Associate or Pharmacovigilance Specialist?', a: 'Drug Safety Associates (DSAs) are responsible for case intake and processing: receiving adverse event reports, assessing reportability and seriousness, data entry into PV case management systems (Argus, Veeva Vault Safety), MedDRA coding, narrative writing, quality review, and electronic transmission to regulatory authorities. Senior DSAs review cases and make seriousness/expectedness assessments. Medical reviewers (physicians or pharmacists) provide medical judgment on causality.' },
      { q: 'What is aggregate analysis in pharmacovigilance?', a: 'Aggregate analysis examines safety data across all reports for a drug (rather than individual cases) to identify patterns, trends, and signals. Methods include cumulative review of AE rates by system organ class, disproportionality analysis (Reporting Odds Ratio, IC values), exposure-adjusted reporting rates, and benefit-risk analysis. Aggregate analysis is the foundation of PSURs, DSURs, and signal management reports.' },
      { q: 'What is a safety signal in pharmacovigilance?', a: 'A safety signal is information from one or multiple sources suggesting a new, potentially causal, association between an intervention and an event or a set of related events — either adverse or beneficial — that is judged to be of sufficient likelihood to justify verificatory action. Signals may arise from: ICSR analysis, non-clinical studies, clinical trial data, literature, or spontaneous reports. Signal evaluation determines whether regulatory action (labeling change, REMS, withdrawal) is warranted.' },
      { q: 'What systems are used for pharmacovigilance case management?', a: 'Oracle Argus Safety is the market leader for large pharmaceutical companies. Veeva Vault Safety is the growing cloud-native alternative. Other systems include ArisGlobal LifeSphere (formerly ARISg), Ennov Drug Safety, and OpenVigil (open source for research). EDC integrations, medical coding modules, and gateway connections for EudraVigilance and FAERS are standard features. Smaller organizations may use Auris, Intake.ai, or proprietary systems.' },
    ],
    relatedSlugs: ['pharmacovigilance-reporting-guide', 'meddra-coding-guide', 'clinical-data-management-guide', 'what-is-sdtm'],
  },
  {
    slug: 'ich-guidelines-overview',
    title: 'ICH Guidelines Overview: E, Q, S, and M Series for Pharma Professionals',
    category: 'Pharmacovigilance',
    metaTitle: 'ICH Guidelines Overview: E, Q, S, M Series Explained for Pharma Jobs',
    metaDesc: 'Understand ICH guidelines — E series (clinical), Q series (quality), S series (safety), M series (multidisciplinary). Essential knowledge for pharma regulatory, PV, and CDM roles.',
    h1: 'ICH Guidelines Overview: E, Q, S, and M Series for Pharma Professionals',
    intro: 'The International Council for Harmonisation of Technical Requirements for Pharmaceuticals for Human Use (ICH) develops globally harmonized guidelines for drug development and regulation. ICH guidelines are adopted by the FDA, EMA, PMDA (Japan), Health Canada, and other major regulatory authorities. For pharma professionals in regulatory affairs, pharmacovigilance, clinical data management, and quality, understanding the relevant ICH guidelines is foundational knowledge.',
    sections: [
      {
        heading: 'ICH E Series: Efficacy Guidelines',
        body: 'E series guidelines govern clinical trial design, conduct, and reporting. Key guidelines: E2A (Clinical Safety Data Management: Definitions and Standards for Expedited Reporting — SUSAR reporting rules), E2B(R3) (Electronic Transmission of Individual Case Safety Reports), E2C(R2) (PSURs/PBRERs), E2E (Pharmacovigilance Planning), E3 (Clinical Study Reports), E6(R3) (Good Clinical Practice — ICH GCP), E8 (General Considerations for Clinical Trials), E9(R1) (Statistical Principles including estimands), E14 (QT/QTc study design), E17 (multi-regional clinical trials). E6(R3) GCP revision (2023) is major — incorporates risk-based monitoring and electronic systems.',
      },
      {
        heading: 'ICH Q Series: Quality Guidelines',
        body: 'Q series guidelines govern pharmaceutical quality systems and manufacturing. Key guidelines: Q1A-Q1F (Stability Testing), Q2(R2) (Analytical Procedure Validation), Q3A-Q3D (Impurities guidelines), Q6A/Q6B (Specifications for chemical and biological drugs), Q7 (Active Pharmaceutical Ingredient GMP), Q8(R2) (Pharmaceutical Development), Q9(R1) (Quality Risk Management — risk assessment tools including FMEA, HACCP, fishbone diagrams), Q10 (Pharmaceutical Quality System — ICH PQS), Q11 (Drug Substance Development), Q12 (Lifecycle Management), Q13 (Continuous Manufacturing). Q9, Q10, and Q12 together form the ICH Quality Implementation Working Group recommendations.',
      },
      {
        heading: 'ICH S Series: Safety (Nonclinical) Guidelines',
        body: 'S series guidelines govern nonclinical (preclinical) safety testing. Key guidelines: S1A-S1C (Carcinogenicity Studies), S2(R1) (Genotoxicity Testing), S3A/S3B (Toxicokinetics), S4 (Chronic Toxicity Studies), S5(R3) (Reproductive Toxicology), S6(R1) (Biotechnological Products), S7A/S7B (Safety Pharmacology — cardiac safety, hERG testing), S8 (Immunotoxicity), S9 (Anticancer Drug Nonclinical Studies), S11 (Pediatric Medicines Nonclinical Testing), S12 (Nonclinical Biodistribution Studies for Genetic Medicine). S7B and E14 (cardiac safety) guidelines are interconnected — both address QTc interval prolongation risk.',
      },
      {
        heading: 'ICH M Series: Multidisciplinary Guidelines',
        body: 'M series guidelines address cross-cutting topics. Key guidelines: M1 (MedDRA Medical Dictionary — terminology maintenance), M2 (Electronic Standards for Transfer of Regulatory Information — ESTRI, defining eCTD), M3(R2) (Non-clinical Safety Studies for Human Clinical Trials), M4 (Common Technical Document structure — CTD/eCTD), M7(R2) (Assessment and Control of DNA Reactive Mutagenic Impurities — nitrosamines), M8 (eCTD v4.0), M9 (Biopharmaceutics Classification System-based biowaivers), M10 (Bioanalytical Method Validation), M11 (Clinical Electronic Structured Harmonized Protocol), M12 (Drug Interaction Studies). M7(R2) became critical after the nitrosamine impurity crisis in 2018-2019.',
      },
      {
        heading: 'ICH Guidelines in Practice',
        body: 'ICH guidelines are adopted into national regulations by member authorities: FDA integrates them into CFR and guidance documents; EMA integrates them into EU legislation (Directive 2001/83/EC, Regulation 726/2004) and EMA guidelines. For regulatory professionals, the most important practical skill is knowing which ICH guideline governs a specific situation and where to find the current version (ICH.org provides all current guidelines). ICH step process: Step 1 (concept paper), Step 2 (draft for consultation), Step 3 (regulatory consultation), Step 4 (adoption by ICH members), Step 5 (implementation in national regulations).',
      },
    ],
    keyTerms: [
      { term: 'ICH', definition: 'International Council for Harmonisation — body that develops globally harmonized pharma guidelines' },
      { term: 'E2B(R3)', definition: 'ICH guideline for electronic ICSR data elements and XML format' },
      { term: 'E6(R3)', definition: 'ICH Good Clinical Practice guideline — global standard for clinical trial conduct' },
      { term: 'Q9(R1)', definition: 'ICH Quality Risk Management guideline — FMEA, HACCP, risk assessment for pharma' },
      { term: 'M4', definition: 'ICH guideline defining the Common Technical Document (CTD/eCTD) structure for submissions' },
      { term: 'M7(R2)', definition: 'ICH guideline for controlling DNA reactive mutagenic impurities (nitrosamines) in drugs' },
      { term: 'CTD', definition: 'Common Technical Document — standardized eCTD format for global regulatory submissions' },
    ],
    faqs: [
      { q: 'Which ICH guidelines should a pharmacovigilance professional know?', a: 'Essential ICH guidelines for PV professionals: E2A (expedited reporting definitions and timelines), E2B(R3) (electronic ICSR format), E2C(R2) (PSUR/PBRER structure and content), E2E (pharmacovigilance planning), E2F (Development Safety Update Reports), E3 (Clinical Study Reports — for clinical trial safety sections), and M1 (MedDRA). Also important: the EU pharmacovigilance legislation (Regulation 1235/2010, GVP Modules published by EMA).' },
      { q: 'What is the ICH CTD and why does it matter?', a: 'The Common Technical Document (CTD) is the globally harmonized format for regulatory submissions defined by ICH M4. It has five modules: Module 1 (regional administrative info), Module 2 (quality, nonclinical, clinical summaries and overviews), Module 3 (quality dossier — drug substance and drug product), Module 4 (nonclinical study reports), Module 5 (clinical study reports). The CTD is submitted in eCTD (electronic CTD) format via the FDA ESG or EMA eSubmission gateway. Knowledge of CTD structure is essential for regulatory affairs professionals.' },
      { q: 'What is ICH GCP E6(R3) and why was it revised?', a: 'ICH E6(R3) is the Good Clinical Practice guideline governing clinical trial conduct — informed consent, investigator responsibilities, sponsor responsibilities, monitoring, IRB/IEC, essential documents. The R3 revision (finalized 2023) was driven by: growth of technology in trials (eDiaries, wearables, remote monitoring), need for risk-based approaches to monitoring, decentralized clinical trials (DCTs), and need to update guidance for electronic data systems. E6(R3) explicitly supports remote monitoring, electronic informed consent, and centralized statistical monitoring.' },
      { q: 'Where can ICH guidelines be accessed?', a: 'All current ICH guidelines are freely available at ich.org/page/efficacy-guidelines (E series), ich.org/page/quality-guidelines (Q series), ich.org/page/safety-guidelines (S series), and ich.org/page/multidisciplinary-guidelines (M series). FDA adopts ICH guidelines as guidance documents (fda.gov/regulatory-information/search-fda-guidance-documents). EMA publishes adopted ICH guidelines under Scientific guidelines on ema.europa.eu.' },
    ],
    relatedSlugs: ['pharmacovigilance-reporting-guide', 'drug-safety-surveillance-guide', 'clinical-data-management-guide', 'computer-system-validation-guide'],
  },
];
