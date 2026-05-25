export interface KBEntry {
  slug: string;
  title: string;
  category: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  intro: string;
  sections: { heading: string; body: string }[];
  keyTerms: { term: string; definition: string }[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
}

export const clinicalKB: KBEntry[] = [
  {
    slug: 'what-is-sdtm',
    title: 'What Is SDTM? Study Data Tabulation Model Explained',
    category: 'Clinical Data Management',
    metaTitle: 'What Is SDTM? Study Data Tabulation Model Guide | PharmaCDM',
    metaDesc: 'Learn SDTM — the FDA-required data standard for clinical trial submissions. Understand domains, variables, controlled terminology, and SDTM mapping from CRF.',
    h1: 'What Is SDTM? A Complete Guide to Study Data Tabulation Model',
    intro: 'SDTM (Study Data Tabulation Model) is the CDISC standard for organizing and formatting clinical trial data for regulatory submissions to the FDA and PMDA. It defines a consistent structure — called domains — for every type of data collected in a clinical trial, from demographics to adverse events to laboratory results. The FDA mandates SDTM for all NDA, BLA, and ANDA submissions.',
    sections: [
      {
        heading: 'SDTM Domain Structure',
        body: 'SDTM organizes clinical trial data into subject-level domains. Each domain is a dataset containing related observations. Core domains include DM (Demographics), AE (Adverse Events), LB (Laboratory Tests), VS (Vital Signs), CM (Concomitant Medications), EX (Exposure), MH (Medical History), and DS (Disposition). Each domain follows a three-tier variable structure: Identifier Variables (STUDYID, DOMAIN, USUBJID), Topic Variables (the primary observation), and Qualifier Variables (additional attributes).',
      },
      {
        heading: 'SDTM Controlled Terminology',
        body: 'CDISC Controlled Terminology (CT) provides standardized values for SDTM variables. The NCI Thesaurus is the authoritative source. Critical controlled terminology includes DTYPE (record type), EPOCH (study epoch), VISIT (planned visit), and domain-specific terms like AEDECOD for adverse events coded with MedDRA. Sponsors must use the CDISC CT package applicable to their submission date, documented in the define.xml.',
      },
      {
        heading: 'SDTM Mapping Process',
        body: 'SDTM mapping translates raw CRF (Case Report Form) data into SDTM-compliant datasets. The process starts with the Mapping Specification — a document linking each CRF field to the target SDTM variable, applying transformations, derivations, and controlled terminology. Key steps: identify the target domain, assign USUBJID, populate timing variables (VISITNUM, VISITDY, --DTC), apply MedDRA or WHODrug coding, and validate against PINNACLE 21 rules.',
      },
      {
        heading: 'Special-Purpose Domains',
        body: 'SDTM includes special-purpose datasets not structured like standard domains. CO (Comments) stores free-text comments. RELREC (Related Records) links records across datasets. DM is required for every submission and contains one record per subject. The Trial Design model (TA, TE, TV, TD, TI, TS datasets) documents the planned study structure and is mandatory for FDA submissions.',
      },
      {
        heading: 'SDTM Validation and FDA Expectations',
        body: 'FDA requires SDTM datasets validated with Pinnacle 21 Enterprise, producing an Issues Report with zero critical errors. The define.xml (ODM-based metadata file) must document every variable, codelist, and computational method. The Reviewer\'s Guide (RG) narrates dataset contents for FDA reviewers. Common rejection reasons include missing SUPPQUAL datasets, incorrect DOMAIN population, missing computational algorithm documentation, and unresolved Pinnacle 21 errors.',
      },
    ],
    keyTerms: [
      { term: 'SDTM', definition: 'Study Data Tabulation Model — CDISC standard for clinical trial data submission to FDA' },
      { term: 'USUBJID', definition: 'Unique Subject Identifier — concatenation of STUDYID, SITEID, and SUBJID' },
      { term: 'Domain', definition: 'A dataset in SDTM containing a related category of observations (e.g., AE, LB, VS)' },
      { term: 'Controlled Terminology', definition: 'Standardized vocabulary for SDTM variable values, maintained by CDISC and NCI' },
      { term: 'Define.xml', definition: 'Machine-readable metadata file documenting SDTM dataset structure, variables, and codelists' },
      { term: 'SUPPQUAL', definition: 'Supplemental Qualifier datasets that extend standard domains with non-standard variables' },
      { term: 'Pinnacle 21', definition: 'Industry-standard CDISC compliance validation software required by FDA' },
    ],
    faqs: [
      { q: 'Is SDTM required for all FDA submissions?', a: 'Yes. The FDA requires SDTM for all NDA, BLA, and ANDA submissions for studies starting after December 2016 (non-clinical) and December 2017 (clinical). Older studies may be exempt but sponsors are encouraged to convert.' },
      { q: 'What is the difference between SDTM and ADaM?', a: 'SDTM stores raw collected data in a standardized tabulation structure. ADaM (Analysis Data Model) builds on SDTM to create analysis-ready datasets used to generate tables, listings, and figures (TLFs) in the CSR. SDTM comes first in the data flow; ADaM derives from it.' },
      { q: 'What software is used for SDTM mapping?', a: 'Common tools include SAS (most widely used), R with haven/xpt packages, Pinnacle 21 for validation, Medidata Rave SDTM Designer, and Veeva Vault EDC. Most CROs and sponsors use SAS as the primary programming language for SDTM derivations.' },
      { q: 'What are SDTM findings, events, and interventions?', a: 'SDTM classifies observations into three classes: Findings (measurements/results like labs, vitals — LB, VS, EG), Events (occurrences like adverse events, medical history — AE, MH, DS), and Interventions (treatments given — EX, CM, PR). Each class has a specific variable structure.' },
    ],
    relatedSlugs: ['what-is-adam', 'cdisc-pinnacle21-guide', 'clinical-data-management-guide', 'what-is-define-xml'],
  },
  {
    slug: 'what-is-adam',
    title: 'What Is ADaM? Analysis Data Model for Clinical Trials',
    category: 'Clinical Data Management',
    metaTitle: 'ADaM Explained: Analysis Data Model for Clinical Trials | Guide',
    metaDesc: 'Understand ADaM — CDISC Analysis Data Model. Learn ADSL, ADAE, ADLB, ADTTE structures, derivation rules, and FDA submission requirements.',
    h1: 'What Is ADaM? Analysis Data Model for Clinical Trials Explained',
    intro: 'ADaM (Analysis Data Model) is the CDISC standard that defines how analysis datasets are structured for clinical trial statistical analysis. While SDTM captures raw collected data, ADaM datasets are purpose-built for generating the tables, listings, and figures (TLFs) that appear in the Clinical Study Report. ADaM is mandatory for FDA NDA/BLA submissions alongside SDTM.',
    sections: [
      {
        heading: 'Core ADaM Dataset Structures',
        body: 'ADaM defines four fundamental dataset structures. ADSL (Subject-Level Analysis Dataset) contains one record per subject and is the anchor dataset — all other ADaM datasets merge back to it. BDS (Basic Data Structure) contains one or more records per subject per analysis timepoint, used for continuous endpoints (ADLB, ADVS, ADEG). OCCDS (Occurrence Data Structure) captures event-level data like adverse events (ADAE) and medications (ADCM). ADTTE (Time-to-Event) supports survival and time-to-event analyses.',
      },
      {
        heading: 'ADSL: Subject-Level Analysis Dataset',
        body: 'ADSL is the most critical ADaM dataset. It contains demographic variables (AGE, SEX, RACE), treatment assignment (TRT01P, TRT01A), analysis flags (FASFL, SAFFL, PPROTFL), study period dates (TRTSDT, TRTEDT), and disposition information. Every subject in the safety population appears in ADSL. All other ADaM datasets join to ADSL via USUBJID. ADSL must be submitted and is reviewed by FDA statisticians before other datasets.',
      },
      {
        heading: 'ADaM Traceability Requirement',
        body: 'FDA requires complete traceability from raw CRF data through SDTM to ADaM to TLFs. Every derived variable in ADaM must be traceable to its SDTM source via the define.xml ORIGIN attribute ("Derived", "CRF", "Protocol", "Assigned"). The computational algorithm for each derivation must be documented. Reviewers use this traceability to verify that analysis results match the protocol-specified statistical analysis plan (SAP).',
      },
      {
        heading: 'Analysis Flags and Population Definitions',
        body: 'ADaM datasets use flag variables (ending in FL) to indicate population membership. FASFL (Full Analysis Set Flag), SAFFL (Safety Population Flag), PPROTFL (Per-Protocol Flag), and ITTFL (Intent-to-Treat Flag) are common. These flags are derived in ADSL and propagated to other ADaM datasets. The Statistical Analysis Plan (SAP) defines inclusion criteria for each population, which programmers implement as flag derivations.',
      },
      {
        heading: 'Validation and TLF Traceability',
        body: 'ADaM datasets are validated with Pinnacle 21 Enterprise, which checks CDISC conformance. Independently, each TLF (table/listing/figure) in the CSR must trace back to ADaM datasets. The Analysis Results Metadata (ARM), documented in define.xml, formally links each TLF to its source dataset, variable, and filter criteria. FDA reviewers use ARM to replicate sponsor analyses independently.',
      },
    ],
    keyTerms: [
      { term: 'ADaM', definition: 'Analysis Data Model — CDISC standard for clinical trial analysis datasets' },
      { term: 'ADSL', definition: 'Subject-Level Analysis Dataset — one record per subject, anchor for all ADaM datasets' },
      { term: 'BDS', definition: 'Basic Data Structure — ADaM structure for one-or-more records per subject per timepoint' },
      { term: 'ADAE', definition: 'Adverse Events Analysis Dataset — ADaM dataset for adverse event analysis' },
      { term: 'ADTTE', definition: 'Time-to-Event Analysis Dataset — for survival analysis endpoints' },
      { term: 'FASFL', definition: 'Full Analysis Set Flag — Y/N indicator of inclusion in the Full Analysis Set population' },
      { term: 'ARM', definition: 'Analysis Results Metadata — documentation linking TLFs to source ADaM datasets' },
    ],
    faqs: [
      { q: 'Can you submit SDTM without ADaM?', a: 'No, not for submissions with statistical analyses. FDA requires both SDTM (collected data) and ADaM (analysis data) for NDA and BLA submissions. ADaM is how FDA reviewers verify that TLFs in the CSR were generated correctly.' },
      { q: 'What programming language is used to create ADaM datasets?', a: 'SAS is the dominant language for ADaM programming in the pharmaceutical industry, using PROC SQL and DATA step. R is increasingly used, particularly with the admiral package developed by Roche and GSK specifically for ADaM creation.' },
      { q: 'What is the difference between PARAMCD and AVISIT in ADaM BDS datasets?', a: 'PARAMCD is the parameter code identifying what was measured (e.g., "ALT" for alanine aminotransferase). AVISIT is the analysis visit label (e.g., "Week 4"). Together they identify a specific measurement. The analysis value is stored in AVAL (numeric) or AVALC (character).' },
      { q: 'How does CHG differ from BASE and AVAL?', a: 'BASE is the baseline value, AVAL is the analysis value at a given timepoint, and CHG is the change from baseline (CHG = AVAL - BASE). PCHG is the percent change from baseline. These derived variables are critical for efficacy endpoint analyses.' },
    ],
    relatedSlugs: ['what-is-sdtm', 'cdisc-pinnacle21-guide', 'clinical-data-management-guide', 'sas-clinical-programming-guide'],
  },
  {
    slug: 'clinical-data-management-guide',
    title: 'Clinical Data Management: EDC, CRF, and Data Cleaning Guide',
    category: 'Clinical Data Management',
    metaTitle: 'Clinical Data Management Guide: EDC, CRF, Data Cleaning | CDM',
    metaDesc: 'Complete guide to clinical data management — EDC systems (Medidata Rave, Oracle InForm), CRF design, data cleaning, queries, and database lock.',
    h1: 'Clinical Data Management: Complete Guide to EDC, CRF, and Data Cleaning',
    intro: 'Clinical Data Management (CDM) encompasses all processes for collecting, validating, cleaning, and locking clinical trial data. CDM professionals work with Electronic Data Capture (EDC) systems, design Case Report Forms (CRFs), write data validation programs (edit checks), resolve data queries, and oversee database lock. The quality of CDM work directly impacts regulatory submissions and patient safety assessments.',
    sections: [
      {
        heading: 'Electronic Data Capture Systems',
        body: 'EDC systems are web-based platforms where site personnel enter clinical trial data. Major EDC systems include Medidata Rave (most widely used in large pharma), Oracle InForm, Oracle Clinical (OC), Veeva Vault EDC (CTMS integration), OpenClinica, and REDCap (academic research). Each system has a database builder role that creates CRFs, edit checks, and randomization modules. CDM professionals must be proficient in at least one EDC system, with Medidata Rave expertise most in-demand.',
      },
      {
        heading: 'CRF Design Principles',
        body: 'CRFs (Case Report Forms) capture the protocol-specified data at each patient visit. Good CRF design follows CDISC CDASH (Clinical Data Acquisition Standards Harmonization) to facilitate SDTM mapping downstream. Design principles: collect only data needed for the analysis (avoid data not in the SAP), use CDASH variable names and controlled terminology, avoid redundant collection, design forms that map cleanly to single SDTM domains, and conduct a thorough CRF Completion Guideline (CCG). Poor CRF design creates SDTM mapping problems and excessive queries.',
      },
      {
        heading: 'Data Validation and Edit Checks',
        body: 'Edit checks are programmed validation rules that fire when data is entered, alerting sites to potential errors. Types include: range checks (value outside normal range), consistency checks (date of AE must be after study start), cross-form checks (dose field must be completed if drug administered), required field checks, and protocol deviation flags. Edit checks are specified in the Data Validation Plan (DVP) and programmed in the EDC system\'s scripting language (e.g., Rave Architect scripting, InForm query rules).',
      },
      {
        heading: 'Data Cleaning and Query Management',
        body: 'Queries are formal data clarification requests sent to sites when data appears incorrect or missing. CDM teams manage query lifecycle: auto-queries (from edit checks), manual queries (from medical review), third-party data reconciliation queries (from central lab, ECG lab, IRT), and coding queries (MedDRA, WHODrug). Key metrics: query rate, outstanding query count, and query aging. ICH E6(R3) GCP requires queries to be documented, tracked, and resolved before database lock.',
      },
      {
        heading: 'Database Lock Process',
        body: 'Database lock (DBL) is the formal process of freezing trial data before unblinding and statistical analysis. Steps include: data cut-off, final data cleaning, reconciliation of all third-party data sources (central lab, PK, biomarkers, ePRO), medical coding completion, protocol deviation finalization, audit trail review, and Data Review Meeting (DRM). The DRM involves CDM, clinical operations, medical monitoring, biostatistics, and programming. After lock, a formal data release to statistics occurs, and any post-lock changes require an unblinding memo and protocol deviation.',
      },
    ],
    keyTerms: [
      { term: 'EDC', definition: 'Electronic Data Capture — web-based system for entering and managing clinical trial data' },
      { term: 'CRF', definition: 'Case Report Form — the data collection instrument (paper or electronic) for clinical trials' },
      { term: 'CDASH', definition: 'Clinical Data Acquisition Standards Harmonization — CDISC standard for CRF data collection' },
      { term: 'Edit Check', definition: 'Programmed validation rule in EDC that triggers a query when data violates the rule' },
      { term: 'DBL', definition: 'Database Lock — formal freezing of clinical trial data before statistical analysis' },
      { term: 'DRM', definition: 'Data Review Meeting — cross-functional review before database lock decision' },
      { term: 'Third-party data', definition: 'Data from external vendors (central lab, ECG, PK) that must reconcile with EDC data' },
    ],
    faqs: [
      { q: 'What is the most in-demand EDC system for CDM jobs?', a: 'Medidata Rave is the most widely used EDC system in large pharmaceutical companies and major CROs. Proficiency in Rave (specifically Rave Architect for database build and Rave Studio) is the top skill for CDM job roles. Oracle InForm is also common in vaccine-focused organizations.' },
      { q: 'What is CDASH and why does it matter for CDM?', a: 'CDASH (Clinical Data Acquisition Standards Harmonization) is the CDISC standard for how data should be collected on CRFs. When CRFs follow CDASH, the SDTM mapping is straightforward because CDASH variables are designed to map directly to SDTM. CDM professionals should know CDASH to design CRFs that reduce downstream programming effort.' },
      { q: 'What are the key deliverables of a CDM professional?', a: 'Core CDM deliverables include: Data Management Plan (DMP), CRF design and completion guidelines, Data Validation Plan (DVP), edit check specifications and testing, query management metrics reports, third-party data reconciliation documentation, and the Database Lock Checklist. These form the CDM trial master file documents.' },
      { q: 'Is medical coding part of CDM?', a: 'Yes. Medical coding — assigning standardized codes to adverse events (MedDRA), medications (WHODrug), and medical history — is typically a CDM responsibility. Coders use MedDRA browser tools (Recode, MedDRA JTerm search) and WHODrug Global to assign the most appropriate Preferred Term and System Organ Class (SOC).' },
    ],
    relatedSlugs: ['what-is-sdtm', 'what-is-adam', 'cdisc-pinnacle21-guide', 'meddra-coding-guide'],
  },
  {
    slug: 'cdisc-pinnacle21-guide',
    title: 'CDISC Compliance and Pinnacle 21 Validation Guide',
    category: 'Clinical Data Management',
    metaTitle: 'CDISC Pinnacle 21 Validation Guide: Rules, Errors & FDA Compliance',
    metaDesc: 'Master CDISC compliance and Pinnacle 21 Enterprise validation. Learn P21 error categories, critical vs warning issues, define.xml requirements, and FDA submission rules.',
    h1: 'CDISC Compliance and Pinnacle 21 Validation: Complete Guide',
    intro: 'Pinnacle 21 Enterprise (P21) is the industry-standard software for validating CDISC-compliant datasets (SDTM, ADaM) before FDA submission. The FDA uses P21 internally to evaluate submissions, and any critical errors in the P21 Issues Report can result in refuse-to-file (RTF) actions. Understanding P21 validation rules is essential for clinical data managers, SAS programmers, and regulatory submission specialists.',
    sections: [
      {
        heading: 'Pinnacle 21 Error Categories',
        body: 'P21 classifies issues into four categories. Critical errors indicate non-conformance with CDISC standards and may cause refuse-to-file — examples include missing required variables (STUDYID, USUBJID), invalid domain names, and unresolvable define.xml references. Errors are significant conformance issues. Warnings indicate potential problems but may have valid explanations documented in the Reviewer\'s Guide. Notices are informational and do not require response.',
      },
      {
        heading: 'Define.xml Requirements',
        body: 'The define.xml is a machine-readable metadata file that documents every dataset, variable, codelist, and computation method in the submission. It must comply with the CDISC Define-XML standard (version 2.0 or 2.1). Required elements: ItemGroupDef (dataset definitions), ItemDef (variable definitions), CodeList (controlled terminology), MethodDef (derivation algorithms), WhereClauseDef (subset definitions). P21 validates that every variable in every dataset has a corresponding ItemDef in define.xml. Missing definitions cause critical P21 errors.',
      },
      {
        heading: 'Common SDTM P21 Failures',
        body: 'Frequent SDTM P21 issues: missing SUPPQUAL datasets for non-standard variables, DOMAIN variable not matching dataset name, USUBJID format inconsistency across datasets, --DTC variables not in ISO 8601 format, AETERM not populated for all AE records, missing EPOCH variable, VISITNUM populated inconsistently, and required timing variables absent. The P21 Issues Report shows the variable name, dataset, record number, and rule ID (e.g., SD0083) for each finding.',
      },
      {
        heading: 'Common ADaM P21 Failures',
        body: 'Frequent ADaM P21 issues: ADSL missing required variables (STUDYID, USUBJID, SUBJID, SITEID, AGE, AGEU, SEX, RACE, ETHNIC, ARM, ACTARM, TRTSDT), AVAL not numeric in BDS datasets, DTYPE populated incorrectly in ADTTE, analysis flags not Y/N/null, PARAMCD exceeding 8 characters, BASE not populated when CHG is present, and ARM metadata missing from define.xml. Analysis Results Metadata (ARM) omission is a common submission deficiency.',
      },
      {
        heading: 'FDA Technical Rejection Criteria',
        body: 'FDA\'s technical rejection criteria for data submissions include: P21 critical errors not explained in the Reviewer\'s Guide, missing datasets referenced in define.xml, transport file (.xpt) format violations (variable name >8 characters, label >40 characters, dataset >5GB without splitting), missing Reviewer\'s Guide, and SEND datasets for nonclinical studies without TS dataset. Sponsors should target zero critical and zero error-level P21 findings before submission, with all warnings explained.',
      },
    ],
    keyTerms: [
      { term: 'Pinnacle 21', definition: 'CDISC compliance validation software; FDA uses it to evaluate NDA/BLA data packages' },
      { term: 'Define.xml', definition: 'Machine-readable metadata for CDISC submission datasets; required by FDA' },
      { term: 'Issues Report', definition: 'P21 output listing all validation findings by severity and dataset' },
      { term: 'RTF', definition: 'Refuse to File — FDA action when a submission has critical technical deficiencies' },
      { term: 'SUPPQUAL', definition: 'Supplemental Qualifier datasets for non-standard SDTM variables not in the standard model' },
      { term: 'ARM', definition: 'Analysis Results Metadata — define.xml section linking TLFs to ADaM datasets' },
      { term: 'XPT', definition: 'SAS transport file format (.xpt) required for CDISC dataset submission to FDA' },
    ],
    faqs: [
      { q: 'Does the FDA use Pinnacle 21 to review submissions?', a: 'Yes. The FDA Center for Drug Evaluation and Research (CDER) uses Pinnacle 21 internally to validate CDISC datasets in NDA and BLA submissions. The FDA\'s Data Standards Catalog specifies that Pinnacle 21 Enterprise is the tool sponsors should use for pre-submission validation.' },
      { q: 'What is the maximum SAS transport file size for FDA submission?', a: 'Individual XPT datasets submitted to FDA should not exceed 5 GB. If a dataset (commonly LB or AE in large studies) exceeds 5 GB, it must be split into multiple datasets and documented in the Reviewer\'s Guide. Variable names are limited to 8 characters and labels to 200 characters in XPT version 5.' },
      { q: 'What is the difference between P21 Community and P21 Enterprise?', a: 'Pinnacle 21 Community is the free version with basic validation rules. P21 Enterprise (licensed) includes all FDA validation rules, cross-dataset checks, define.xml validation, ARM validation, and SEND validation. FDA submissions require validation with P21 Enterprise; the Community version is insufficient for regulatory submissions.' },
      { q: 'How do you handle P21 warnings that cannot be resolved?', a: 'Unresolvable P21 warnings (and errors with valid justification) must be documented in the Reviewer\'s Guide (RG). The RG should include: the P21 rule ID, the warning message, the datasets/variables affected, and the sponsor\'s explanation for why the finding is acceptable or intentional. This documentation allows FDA reviewers to understand and accept deviations from standard.' },
    ],
    relatedSlugs: ['what-is-sdtm', 'what-is-adam', 'clinical-data-management-guide', 'what-is-define-xml'],
  },
  {
    slug: 'meddra-coding-guide',
    title: 'MedDRA Coding Guide for Adverse Events and Medical History',
    category: 'Clinical Data Management',
    metaTitle: 'MedDRA Coding Guide: Adverse Events, SOC, PT, HLT Explained',
    metaDesc: 'Learn MedDRA coding for clinical trials — hierarchical structure (SOC, HLGT, HLT, PT, LLT), coding conventions, verbatim mapping, and pharmacovigilance use.',
    h1: 'MedDRA Coding: Complete Guide for Clinical Trial AE Coding',
    intro: 'MedDRA (Medical Dictionary for Regulatory Activities) is the international medical terminology standard used to code adverse events, medical history, and indications in clinical trials and pharmacovigilance databases. Maintained by the International Council for Harmonisation (ICH), MedDRA is required by the FDA, EMA, PMDA, and other global health authorities for adverse event reporting.',
    sections: [
      {
        heading: 'MedDRA Hierarchical Structure',
        body: 'MedDRA has a five-level hierarchy. System Organ Class (SOC) — the highest level, representing organ system or etiology (e.g., "Cardiac disorders"). High Level Group Term (HLGT) — groups HLTs within an SOC. High Level Term (HLT) — groups related PTs. Preferred Term (PT) — the distinct medical concept, the primary coding level used in analysis. Lower Level Term (LLT) — the most specific level, directly mapped from verbatim terms. Clinical data systems store the coded PT and its primary SOC, but a PT can have multiple SOC links (primary and secondary).',
      },
      {
        heading: 'Coding Conventions and Verbatim Mapping',
        body: 'Coding rules require mapping the verbatim term (exactly as reported by the investigator) to the most specific appropriate LLT, which then maps to a PT. Key conventions: code the diagnosis if both diagnosis and symptoms are reported; code the most specific term available; do not "upgrade" severity into the coded term (a mild headache is coded as "Headache" PT, not "Headache severe"); use the current MedDRA version at the time of study or per protocol specifications. Consistency within a study — same verbatim always maps to the same PT — is an ICH E2B requirement.',
      },
      {
        heading: 'MedDRA in SDTM Datasets',
        body: 'In SDTM, MedDRA coding appears in the AE domain using variables: AETERM (verbatim), AELLT (coded LLT), AELLTCD (LLT code), AEDECOD (coded PT — primary analysis variable), AEPTCD (PT code), AEHLT (HLT), AEHLTCD, AEHLGT, AEHLGTCD, AEBODSYS (primary SOC), AEBDSYCD (SOC code), AESOC (SOC — may differ from primary SOC). The --DECOD variable is the PT for all domains (CMDECOD, MHDECOD). The --BODSYS is the primary SOC.',
      },
      {
        heading: 'Medical History and Indication Coding',
        body: 'Medical history (SDTM MH domain) uses MHDECOD for the PT and MHBODSYS for the SOC. Indication coding for medications (CM domain) uses CMINDC (verbatim) coded to CMDECOD. WHO Drug is used for medication coding (generic name, ATC code, drug code). MedDRA is also required for CIOMS I forms, SUSAR expedited reports (15-day reports), Periodic Safety Update Reports (PSURs/PBRERs), and regulatory aggregate safety reports.',
      },
      {
        heading: 'MedDRA Version Management',
        body: 'MedDRA is updated twice yearly (March and September releases). Version changes include new terms, PT reclassifications, and hierarchy changes that can affect ongoing study coding. Sponsors must specify in their Data Management Plan which MedDRA version will be used for the study and whether recoding will occur when versions change. Regulatory submissions should document the MedDRA version in the define.xml and Reviewer\'s Guide. MSSO (MedDRA Maintenance and Support Services Organization) provides licenses and training.',
      },
    ],
    keyTerms: [
      { term: 'MedDRA', definition: 'Medical Dictionary for Regulatory Activities — international AE coding standard' },
      { term: 'PT', definition: 'Preferred Term — the primary MedDRA coding level used for adverse event analysis' },
      { term: 'SOC', definition: 'System Organ Class — highest MedDRA level representing organ system or etiology' },
      { term: 'LLT', definition: 'Lower Level Term — most specific MedDRA level, directly maps from verbatim terms' },
      { term: 'AEDECOD', definition: 'SDTM variable for the MedDRA Preferred Term of an adverse event' },
      { term: 'Verbatim term', definition: 'Exact text reported by investigator; must map to an LLT/PT for regulatory reporting' },
      { term: 'MSSO', definition: 'MedDRA Maintenance and Support Services Organization — license and version management' },
    ],
    faqs: [
      { q: 'What MedDRA level is used for adverse event tables in clinical study reports?', a: 'Adverse events are tabulated at the Preferred Term (PT) level, grouped by System Organ Class (SOC) in clinical study reports. The standard presentation is a table of treatment-emergent adverse events (TEAEs) by SOC and PT, sorted by SOC alphabetically and PT by decreasing frequency within each SOC.' },
      { q: 'Can the same AE verbatim be coded to different PTs in different studies?', a: 'No — consistency is required within a study. However, across different studies using different MedDRA versions, the same verbatim may map to different PTs if coding occurred at different times. During integrated safety analysis (ISS/ISE), sponsors must reconcile MedDRA versions and recode to a common version if needed.' },
      { q: 'What is the difference between WHO Drug and MedDRA?', a: 'MedDRA codes medical conditions, adverse events, and indications. WHO Drug (WHODrug Global/B2) codes medications by generic name, brand name, ATC classification code, and drug code. In SDTM, concomitant medications (CM domain) use WHODrug for CMDECOD (generic name) and CMCLAS (ATC class), while MedDRA codes the indication (CMDECOD alternative for indication).' },
      { q: 'Is MedDRA training required for CDM professionals?', a: 'MedDRA coding proficiency is expected for senior CDM, pharmacovigilance, and medical coding roles. MSSO offers the MedDRA Introductory Training Certification. Most pharmaceutical companies and CROs require coding experience with tools like Recode, MedDRA Direct, or Veeva Vault Safety for coding positions.' },
    ],
    relatedSlugs: ['clinical-data-management-guide', 'what-is-sdtm', 'pharmacovigilance-reporting-guide', 'cdisc-pinnacle21-guide'],
  },
  {
    slug: 'sas-clinical-programming-guide',
    title: 'SAS Clinical Programming Guide: SDTM, ADaM, and TLF Generation',
    category: 'Clinical Data Management',
    metaTitle: 'SAS Clinical Programming Guide: SDTM ADaM TLFs for FDA Submissions',
    metaDesc: 'Complete SAS clinical programming guide — SDTM mapping, ADaM derivations, TLF generation with PROC REPORT, PROC FREQ, ODS RTF. FDA submission programming standards.',
    h1: 'SAS Clinical Programming: SDTM, ADaM, and TLF Generation Guide',
    intro: 'SAS (Statistical Analysis System) is the dominant programming language for clinical trial data processing, SDTM mapping, ADaM derivation, and TLF (Tables, Listings, Figures) generation. Clinical SAS programmers work at CROs, pharmaceutical companies, and biotech firms, supporting FDA and EMA regulatory submissions. Mastery of SAS Base, PROC SQL, ODS, and CDISC standards is the foundation of clinical SAS programming.',
    sections: [
      {
        heading: 'SAS for SDTM Mapping',
        body: 'SDTM programming typically starts with a Mapping Specification that defines transformations from raw EDC data to SDTM variables. The DATA step is the primary tool: reading raw datasets (XPT or CSV from EDC extract), applying conditional logic for controlled terminology, merging datasets for derived variables (e.g., EPOCH from trial design), and outputting SDTM-compliant XPT files. PROC FORMAT creates user-defined formats for controlled terminology. PROC SORT ensures dataset observations are in the required order (STUDYID, USUBJID, --SEQ for findings domains).',
      },
      {
        heading: 'SAS for ADaM Derivations',
        body: 'ADaM programming derives analysis variables from SDTM. Common derivations: baseline (BASE = last non-missing value on or before TRTSDT), change from baseline (CHG = AVAL - BASE), treatment-emergent flag (TRTEMFL = "Y" if AE start date >= TRTSDT), worst-case flag for missing data, windowed visits (assigning observations to analysis visits using visit windows from the SAP). PROC SQL handles complex joins between ADSL and domain datasets. The admiral R package replicates many ADaM derivation patterns for R users.',
      },
      {
        heading: 'TLF Generation with PROC REPORT and ODS',
        body: 'Tables (frequency counts, descriptive statistics) use PROC REPORT, PROC FREQ, and PROC MEANS/SUMMARY. PROC REPORT produces publication-quality RTF output when combined with ODS RTF and STYLE= options. Key procedures: PROC FREQ for categorical summaries (adverse events, demographics), PROC MEANS/UNIVARIATE for continuous data (age, weight, lab values), PROC LIFETEST for Kaplan-Meier survival curves (PROC SGPLOT or GPLOT for figures). The output delivery system (ODS) routes output to RTF, PDF, or HTML for CSR integration.',
      },
      {
        heading: 'Validation Programming',
        body: 'Independent validation (IV) is required for all regulatory submission programs. Each SDTM dataset, ADaM dataset, and TLF must be programmed independently by two programmers and the outputs compared. Double programming uses PROC COMPARE for dataset comparison and visual inspection for TLFs. Discrepancies must be investigated and resolved. QC documentation (QC log, compare report) is stored in the trial master file. SOPs specify acceptable discrepancy thresholds — typically zero discrepancies for safety and primary efficacy TLFs.',
      },
      {
        heading: 'FDA Submission Programming Standards',
        body: 'FDA submissions require XPT version 5 transport files, generated with XPORT libname engine or PROC COPY. Dataset variable names must be ≤8 characters, labels ≤40 characters, datasets ≤5 GB. The submission package includes: SDTM datasets, ADaM datasets, TLFs (as PDF appendices), define.xml, Reviewer\'s Guide (RG), SAS transport files of all datasets, and a table of contents (TOC). Submissions are made through the FDA Electronic Submissions Gateway (ESG) in eCTD format.',
      },
    ],
    keyTerms: [
      { term: 'PROC REPORT', definition: 'SAS procedure for generating publication-quality clinical trial tables and listings' },
      { term: 'ODS RTF', definition: 'Output Delivery System destination for rich text format — standard TLF output format' },
      { term: 'XPORT', definition: 'SAS transport file engine for creating .xpt files required for FDA dataset submission' },
      { term: 'Double programming', definition: 'Independent QC method where two programmers independently code the same output' },
      { term: 'PROC COMPARE', definition: 'SAS procedure for comparing two datasets, used in validation programming' },
      { term: 'TLF', definition: 'Tables, Listings, Figures — the statistical output in a Clinical Study Report' },
      { term: 'eCTD', definition: 'Electronic Common Technical Document — standard format for regulatory submissions' },
    ],
    faqs: [
      { q: 'Is R replacing SAS for clinical trial programming?', a: 'R adoption is growing, especially after the FDA\'s 2023 guidance accepting R submissions. The admiral package (Roche/GSK) is the leading ADaM R package. Tplyr and rtables handle TLF generation. However, SAS remains dominant at large pharma and CROs, and most FDA submissions still use SAS. Knowing both SAS and R is increasingly valuable.' },
      { q: 'What is the salary range for a clinical SAS programmer?', a: 'In the United States, entry-level clinical SAS programmers (0-3 years) earn $65,000-$90,000. Mid-level (3-7 years) earn $90,000-$130,000. Senior programmers (7+ years) and lead/principal levels earn $130,000-$180,000+. Contractors earn premium rates ($60-$120/hour). Salaries are higher in pharma hubs like New Jersey, San Francisco, and Boston.' },
      { q: 'What SAS certifications are relevant for clinical programming?', a: 'Relevant certifications: SAS Certified Base Programmer, SAS Certified Advanced Programmer, SAS Certified Clinical Trials Programmer. The CDISC SDTM and ADaM training courses (available on the CDISC website) are also recognized. PharmaSUG conference presentations and publications demonstrate expertise beyond certifications.' },
      { q: 'What is the programming deliverable package for an NDA submission?', a: 'An NDA data package includes: all SDTM datasets (.xpt), all ADaM datasets (.xpt), define.xml for both SDTM and ADaM, Reviewer\'s Guides for SDTM and ADaM, all TLF programs (SAS code), all dataset programs (SAS code), annotated CRF (PDF), Pinnacle 21 Issues Report with explanations. This is submitted in eCTD format via the FDA Electronic Submissions Gateway.' },
    ],
    relatedSlugs: ['what-is-sdtm', 'what-is-adam', 'cdisc-pinnacle21-guide', 'clinical-data-management-guide'],
  },
  {
    slug: 'what-is-define-xml',
    title: 'What Is Define.xml? FDA Submission Metadata File Explained',
    category: 'Clinical Data Management',
    metaTitle: 'What Is Define.xml? CDISC Metadata File for FDA Submissions Guide',
    metaDesc: 'Understand define.xml — the CDISC metadata specification for SDTM and ADaM datasets. Learn structure, required elements, and how to avoid FDA rejection.',
    h1: 'What Is Define.xml? The Complete FDA Submission Metadata Guide',
    intro: 'Define.xml is a machine-readable XML metadata file that documents every dataset, variable, codelist, and computational method in a CDISC regulatory submission. Required by the FDA for all NDA, BLA, and ANDA submissions, define.xml enables automated validation and allows FDA reviewers to navigate submission data programmatically. It acts as the "data dictionary" for the entire submission package.',
    sections: [
      {
        heading: 'Define.xml Structure',
        body: 'Define.xml follows the CDISC ODM (Operational Data Model) XML schema, extended by the Define-XML specification (version 2.0 or 2.1). Top-level elements: GlobalVariables (study name, description), MetaDataVersion (contains all definitions). Key child elements: ItemGroupDef (dataset definitions — name, label, class, structure, purpose), ItemDef (variable definitions — name, datatype, length, label, origin, codelist references), CodeList (controlled terminology definitions), MethodDef (derivation algorithms for derived variables), WhereClauseDef (dataset-level filter conditions).',
      },
      {
        heading: 'Required Metadata for Each Variable',
        body: 'For every variable in every submitted dataset, define.xml must document: Name (≤8 chars for SDTM/ADaM), Label (descriptive name ≤40 chars), DataType (text, integer, float, datetime, date), Length (for text variables), Origin (CRF/Derived/Protocol/Assigned/Predecessor), CodeList reference (if applicable), MethodDef reference (if derived), and Description of the derivation algorithm. Mandatory variables and their expected attributes are defined in the SDTM IG and ADaM IG published by CDISC.',
      },
      {
        heading: 'Analysis Results Metadata (ARM)',
        body: 'Define.xml version 2.0 introduced Analysis Results Metadata (ARM) for ADaM submissions. ARM documents every analysis result in the CSR: the source ADaM dataset, the analysis variable (AVAL/CNTR), the selection criteria (filter/where clause), the analysis purpose, and the display references (which table/figure/listing shows the result). ARM enables FDA reviewers to trace every number in a table back to its source data and derivation, and to replicate analyses independently.',
      },
      {
        heading: 'Authoring Tools and Validation',
        body: 'Define.xml can be authored with specialized tools: Pinnacle 21 Define.xml Generator, Cdisc Define.xml Editor (open source), Study Designer (Medidata), Rho define.xml package (R). Most large pharma companies use internal define.xml templates in Microsoft Excel that are programmatically converted to XML. Validation of define.xml conformance is performed by Pinnacle 21 Enterprise. Common validation errors: missing variable definitions, incorrect codelist references, missing MethodDef for derived variables, ARM analysis result not linked to a valid ItemGroupDef.',
      },
    ],
    keyTerms: [
      { term: 'Define.xml', definition: 'CDISC ODM-based XML file documenting metadata for all datasets in a regulatory submission' },
      { term: 'ItemGroupDef', definition: 'Define.xml element defining a dataset (name, label, class, purpose, structure)' },
      { term: 'ItemDef', definition: 'Define.xml element defining a single variable (name, type, length, label, origin)' },
      { term: 'MethodDef', definition: 'Define.xml element documenting the derivation algorithm for a derived variable' },
      { term: 'CodeList', definition: 'Define.xml element documenting allowed values for a variable (controlled terminology)' },
      { term: 'ARM', definition: 'Analysis Results Metadata — define.xml section linking TLFs to ADaM analysis parameters' },
      { term: 'Origin', definition: 'Define.xml attribute indicating data source: CRF, Derived, Protocol, Assigned, Predecessor' },
    ],
    faqs: [
      { q: 'What version of define.xml does FDA require?', a: 'FDA currently accepts both Define-XML 2.0 and 2.1. The FDA\'s Data Standards Catalog (updated periodically) specifies the required version. Define-XML 2.1 adds improvements to ARM and variable-level traceability. Sponsors should check the FDA\'s current catalog before submission preparation begins.' },
      { q: 'Is define.xml required for all datasets or just SDTM and ADaM?', a: 'Define.xml is required for both SDTM and ADaM dataset packages. Separate define.xml files are typically created — one for the SDTM submission package and one for the ADaM submission package. SEND (Standard for Exchange of Nonclinical Data) also requires its own define.xml for nonclinical study submissions.' },
      { q: 'What happens if define.xml has errors?', a: 'Define.xml errors detected by Pinnacle 21 at the critical or error level can cause FDA to issue a technical refusal to file. Common causes of RTF include missing variable definitions, CodeList references pointing to non-existent codelists, and missing MethodDef for derived variables. All P21 critical errors must be resolved before submission.' },
      { q: 'Can define.xml be auto-generated from SAS or R?', a: 'Yes. Tools like the metacore R package, Pinnacle 21\'s define.xml generator, and internal SAS macros can auto-generate define.xml from metadata stored in Excel or database tables. The source of truth is typically a metadata specification workbook maintained by the statistical programming team, which feeds the define.xml generator.' },
    ],
    relatedSlugs: ['what-is-sdtm', 'what-is-adam', 'cdisc-pinnacle21-guide', 'sas-clinical-programming-guide'],
  },
];
