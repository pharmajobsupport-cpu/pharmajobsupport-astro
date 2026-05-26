import type { KBEntry } from './knowledgeBase-clinical';

export const validationKB: KBEntry[] = [
  {
    slug: 'computer-system-validation-guide',
    title: 'Computer System Validation (CSV): 21 CFR Part 11 and GAMP 5 Guide',
    category: 'Computer System Validation',
    metaTitle: 'CSV Guide: 21 CFR Part 11, GAMP 5, and Computer System Validation',
    metaDesc: 'Master computer system validation in pharma — GAMP 5 categories, 21 CFR Part 11, IQ OQ PQ validation lifecycle, risk-based approach, and FDA audit readiness.',
    h1: 'Computer System Validation (CSV): Complete Guide for GxP Systems',
    intro: 'Computer System Validation (CSV) is the documented process of ensuring that a computerized system consistently does what it is designed to do — producing results that meet pre-defined specifications and regulatory requirements. In the pharmaceutical industry, CSV is mandated by 21 CFR Part 11 (FDA), EU Annex 11 (EMA), and GAMP 5 guidance for all GxP-relevant computerized systems including EDC, LIMS, MES, ERP, and quality management systems.',
    sections: [
      {
        heading: 'GAMP 5 Software Categories',
        body: 'GAMP 5 (Good Automated Manufacturing Practice 5) categorizes software by complexity and validation effort required. Category 1: Infrastructure Software (operating systems, network software) — tested and documented but not validated. Category 3: Non-configured COTS (commercial off-the-shelf software used as-is, e.g., Microsoft Office) — documented configuration only. Category 4: Configured COTS (software configured for specific use, e.g., Medidata Rave, Veeva Vault, TrackWise) — full IQ/OQ/PQ validation required. Category 5: Custom Software (bespoke code) — full validation lifecycle including design review, code review, and comprehensive testing.',
      },
      {
        heading: 'Validation Lifecycle: V-Model',
        body: 'The V-Model is the standard framework for CSV. Left side (specification phase): User Requirements Specification (URS) → Functional Requirements Specification (FRS) → Design Specification (DS, including Hardware and Software Design Specs). Right side (testing phase, corresponding to left): Performance Qualification (PQ) validates against URS, Operational Qualification (OQ) validates against FRS, Installation Qualification (IQ) validates against DS. This V-shape ensures every requirement has a corresponding test and every test traces back to a requirement — providing full traceability.',
      },
      {
        heading: 'IQ, OQ, and PQ: Installation, Operational, and Performance Qualification',
        body: 'IQ (Installation Qualification) documents that the system is installed correctly according to specifications: hardware inventory, software version, network configuration, license verification. OQ (Operational Qualification) documents that the system operates as designed across its intended operating range: system functions, user access controls, audit trail functionality, error messages, data integrity checks, interface testing. PQ (Performance Qualification) documents that the system consistently performs in the operational environment: end-to-end process testing, UAT (User Acceptance Testing), business process workflows tested with representative data.',
      },
      {
        heading: '21 CFR Part 11 Compliance Requirements',
        body: '21 CFR Part 11 governs electronic records and electronic signatures in FDA-regulated industries. Key requirements: Audit Trail — automatic, computer-generated, timestamp-accurate record of all changes to electronic records (who, what, when). Electronic Signatures — unique to one individual, verifiable, and legally binding with name, date/time, and meaning (e.g., "approval"). Access Controls — unique user IDs, password complexity requirements, login attempt limits, automatic session timeout. Data Integrity — records cannot be deleted, modified without trace, or altered retroactively. These requirements apply to all GxP electronic records.',
      },
      {
        heading: 'Risk-Based Validation Approach',
        body: 'ICH Q9 and GAMP 5 advocate risk-based validation, concentrating effort on high-risk system functions. Risk assessment considers: probability of failure, detection capability, and severity of impact on patient safety or product quality. Critical functions (those directly affecting batch release, patient dosing, or regulatory compliance) receive the most rigorous validation testing. Non-critical functions (reporting, dashboards) may receive reduced testing. Risk assessments are documented in a Validation Risk Assessment and reviewed by QA before test execution begins.',
      },
    ],
    keyTerms: [
      { term: 'CSV', definition: 'Computer System Validation — documented evidence that a system consistently performs its intended function' },
      { term: 'GAMP 5', definition: 'Good Automated Manufacturing Practice 5 — industry guidance for validating computerized systems' },
      { term: 'IQ/OQ/PQ', definition: 'Installation/Operational/Performance Qualification — the three validation testing phases' },
      { term: '21 CFR Part 11', definition: 'FDA regulation governing electronic records and electronic signatures' },
      { term: 'URS', definition: 'User Requirements Specification — document defining what the system must do from user perspective' },
      { term: 'Audit Trail', definition: 'Computer-generated, time-stamped record of who changed what and when in an electronic system' },
      { term: 'V-Model', definition: 'Standard CSV framework where specifications on the left trace to tests on the right' },
    ],
    faqs: [
      { q: 'What is the difference between verification and validation in CSV?', a: 'Verification confirms that the system is built correctly — it meets its specified requirements (IQ/OQ: "did we build it right?"). Validation confirms that the right system was built — it meets user needs and intended use (PQ/UAT: "did we build the right thing?"). Both are required for a compliant CSV.' },
      { q: 'How long does computer system validation take?', a: 'CSV timelines vary by system complexity. A simple COTS utility may take 4-8 weeks. A configured COTS system like Veeva Vault QMS or Medidata Rave takes 3-6 months. A complex ERP implementation (SAP) in a GMP environment may take 12-24 months for full validation. Adequate planning time for URS, risk assessment, test script authoring, and execution must be built into project schedules.' },
      { q: 'Is revalidation required after system changes?', a: 'Yes. Any change to a validated system — software upgrades, configuration changes, new integrations, infrastructure changes — triggers a Change Control process. The impact is assessed to determine which validation activities must be repeated. Minor changes may require only regression testing; major changes may require full requalification of affected functions.' },
      { q: 'What is a validation summary report?', a: 'The Validation Summary Report (VSR) is the final CSV deliverable, summarizing all validation activities performed, deviations encountered and resolved, open items, and the overall conclusion that the system is fit for its intended use. The QA-signed VSR authorizes the system for GxP use (go-live approval).' },
    ],
    relatedSlugs: ['eu-annex-11-guide', 'data-integrity-alcoa-guide', 'gamp5-risk-assessment', '21-cfr-part-11-guide'],
  },
  {
    slug: 'eu-annex-11-guide',
    title: 'EU GMP Annex 11: Computerised Systems Compliance Guide',
    category: 'Computer System Validation',
    metaTitle: 'EU GMP Annex 11 Compliance Guide: Computerised Systems in Pharma',
    metaDesc: 'Understand EU GMP Annex 11 for computerised systems — validation requirements, data integrity, audit trail, electronic signatures, and supplier assessment for EMA compliance.',
    h1: 'EU GMP Annex 11: Complete Computerised Systems Compliance Guide',
    intro: 'EU GMP Annex 11 is the European Good Manufacturing Practice regulation governing computerised systems used in the manufacture, testing, and control of medicinal products. Published by the European Medicines Agency (EMA), Annex 11 is equivalent to (but differs from) the FDA\'s 21 CFR Part 11. Organizations operating in the EU or supplying EU markets must comply with Annex 11 for all GxP computerised systems.',
    sections: [
      {
        heading: 'Annex 11 vs 21 CFR Part 11',
        body: 'While both regulations govern computerised systems in GxP environments, key differences exist. Annex 11 is broader — it covers not just electronic records and signatures but also the entire validation lifecycle, data integrity, disaster recovery, and supplier management. 21 CFR Part 11 focuses specifically on electronic records and electronic signatures. Annex 11 explicitly requires a documented inventory of GxP computerised systems, a validation risk assessment, and a written agreement (technical agreement) with software suppliers. Organizations operating globally must comply with both.',
      },
      {
        heading: 'Annex 11 Validation Requirements',
        body: 'Annex 11 requires validation throughout the system lifecycle: principle of validation applies from inception (user requirements) through decommissioning. Section 4 (Validation) requires documented evidence that systems are fit for intended use. Bespoke systems (custom-developed) require more extensive testing than standard COTS. The regulation mandates that validation documentation demonstrates that the system produces accurate, complete, and consistent outputs. Change management must ensure revalidation when necessary.',
      },
      {
        heading: 'Data Integrity Under Annex 11',
        body: 'Annex 11 Section 7 requires that data stored in computerised systems meets data integrity principles (ALCOA+: Attributable, Legible, Contemporaneous, Original, Accurate, plus Complete, Consistent, Enduring, Available). Systems must prevent unauthorized data deletion or modification. Original data and audit trails must be retained for the product lifetime or regulatory retention period, whichever is longer. Back-up systems must ensure data recovery without loss.',
      },
      {
        heading: 'Audit Trail Requirements',
        body: 'Annex 11 Section 9 requires that computerised systems create audit trails for changes to GxP data. The audit trail must capture: who made the change (user identity), what was changed (previous and new value), and when the change was made (timestamp). Audit trails must be computer-generated, date-stamped, and protected against modification. Periodic review of audit trails is required (frequency defined in QMS procedures). Systems that cannot produce compliant audit trails require supplementary controls or replacement.',
      },
      {
        heading: 'Supplier and Service Provider Assessment',
        body: 'Annex 11 Section 3 requires a formal supplier assessment for all computerised system vendors and cloud service providers. Supplier qualification includes: assessment of the supplier\'s quality management system, review of validation documentation (vendor validation package, DQ/IQ/OQ documentation), audit rights, and a formal technical agreement specifying responsibilities. For cloud/SaaS systems, service level agreements must address data residency, access controls, backup/recovery, security breaches, and system change notification.',
      },
    ],
    keyTerms: [
      { term: 'Annex 11', definition: 'EU GMP regulation for computerised systems in pharmaceutical manufacturing and quality' },
      { term: 'ALCOA+', definition: 'Data integrity principles: Attributable, Legible, Contemporaneous, Original, Accurate, + Complete, Consistent, Enduring, Available' },
      { term: 'Technical Agreement', definition: 'Formal contract between user and software supplier defining validation and quality responsibilities' },
      { term: 'Supplier Audit', definition: 'Assessment of a software vendor\'s quality system and validation practices under Annex 11' },
      { term: 'COTS', definition: 'Commercial Off-The-Shelf software — standard packaged software validated for GxP use' },
      { term: 'Data Integrity', definition: 'Assurance that data is complete, consistent, accurate, and attributable throughout its lifecycle' },
      { term: 'Decommissioning', definition: 'Formal process for retiring a GxP system, including data migration and archive verification' },
    ],
    faqs: [
      { q: 'Does Annex 11 apply to cloud and SaaS systems?', a: 'Yes. Annex 11 applies to all computerised systems used in GxP activities, regardless of whether they are on-premise or cloud-based. For cloud/SaaS systems (like Veeva Vault, Microsoft Azure, AWS GovCloud), the supplier qualification and technical agreement requirements are particularly important, as the vendor controls the infrastructure.' },
      { q: 'What is the Annex 11 requirement for electronic signatures?', a: 'Annex 11 Section 12 requires that electronic signatures are equivalent to handwritten signatures in GxP records. The system must ensure that only authorized persons can sign, the identity of the signer is captured (not just a user ID), and the meaning of the signature (e.g., approval, review, verification) is recorded. Biometric signatures must meet additional requirements for non-repudiation.' },
      { q: 'Is a paper backup required for computerised systems under Annex 11?', a: 'Not necessarily. Annex 11 allows fully electronic systems without paper backup if the electronic system provides appropriate controls. However, contingency procedures must exist for system downtime — this may include manual (paper) backup procedures. Business continuity and disaster recovery plans are required under Section 16.' },
      { q: 'What triggers the need for revalidation under Annex 11?', a: 'Any change to hardware, software, network configuration, or the operating environment of a GxP computerised system triggers a change control assessment. If the change impacts GxP functionality, revalidation of affected areas is required. Regular periodic reviews (typically annual) also assess whether the validation status remains current. Vendor-initiated software updates (patches, version upgrades) require change control and regression testing.' },
    ],
    relatedSlugs: ['computer-system-validation-guide', 'data-integrity-alcoa-guide', '21-cfr-part-11-guide', 'gamp5-risk-assessment'],
  },
  {
    slug: 'data-integrity-alcoa-guide',
    title: 'Data Integrity in Pharma: ALCOA+ Principles and FDA Expectations',
    category: 'Computer System Validation',
    metaTitle: 'Pharma Data Integrity Guide: ALCOA+, FDA Warning Letters, and GMP Compliance',
    metaDesc: 'Understand data integrity in pharmaceutical manufacturing — ALCOA+ principles, FDA data integrity warning letters, MHRA guidance, data governance, and remediation steps.',
    h1: 'Data Integrity in Pharma: ALCOA+ Principles, FDA Expectations, and Remediation',
    intro: 'Data integrity failures are the leading cause of FDA warning letters to pharmaceutical manufacturers. Data integrity means that data is complete, consistent, accurate, and that records are attributable, legible, contemporaneous, original, and accurate (ALCOA+). The FDA, MHRA, EMA, and WHO have all issued data integrity guidance, making it a top GMP compliance priority. Understanding data integrity requirements is essential for QA, CSV, and manufacturing operations professionals.',
    sections: [
      {
        heading: 'ALCOA+ Principles Explained',
        body: 'ALCOA is the original data integrity acronym: Attributable (clear who collected data and when), Legible (data is readable and permanent), Contemporaneous (recorded at the time of observation), Original (the first capture of information), Accurate (correct and truthful). ALCOA+ extends this with: Complete (all data including repeat tests and out-of-specification results), Consistent (applying consistent practices), Enduring (durable media that won\'t degrade), Available (accessible for review throughout retention period). All GxP data must satisfy ALCOA+ principles.',
      },
      {
        heading: 'Common Data Integrity Violations',
        body: 'FDA warning letters and 483 observations frequently cite: backdating records (not contemporaneous), deleting failed HPLC runs and re-running until passing (not complete), shared login credentials (not attributable), results copied from previous analyses (not original), unofficial "draft" notebooks not transferred to official records (not complete), audit trail disabled or not reviewed (attributable controls absent), and data saved outside the validated system (not enduring/available). These findings result in warning letters, import alerts, and consent decrees.',
      },
      {
        heading: 'FDA Data Integrity Guidance',
        body: 'The FDA published its Data Integrity and Compliance with Drug CGMP guidance in 2018. Key expectations: computerised systems must be validated with audit trail enabled; audit trails must be reviewed as part of quality review; laboratory instruments (HPLC, GC, dissolution) must have compliant audit trails; raw data and metadata must be retained, not just printed reports; access controls must prevent unauthorized data deletion; out-of-specification (OOS) investigations must include all raw data. The FDA conducts data integrity-focused inspections with retrospective data review.',
      },
      {
        heading: 'MHRA and WHO Data Integrity Requirements',
        body: 'The MHRA (UK) published GXP Data Integrity Guidance in 2018, providing detailed expectations including "dynamic" vs "static" data (electronic raw data is dynamic and must be preserved, not just printed PDFs). WHO Technical Report Series 996 (2016) provides guidance applicable to manufacturers supplying WHO-prequalified markets. The MHRA explicitly states that "true copy" procedures must be validated and that metadata (audit trails, instrument methods) is part of the original record.',
      },
      {
        heading: 'Data Integrity Remediation',
        body: 'When data integrity violations are identified (during inspection or internal audit), a formal remediation program is required: Root cause analysis (RCA) of each finding, risk assessment of the extent of the problem, CAPA (Corrective and Preventive Action) plan, system and process remediation, data verification review (can the data be trusted?), and retrospective data integrity assessment. For serious violations, FDA may require a data integrity audit by a third party and submission of the audit report before the warning letter can be resolved. Remediation timelines are typically 12-24 months.',
      },
    ],
    keyTerms: [
      { term: 'ALCOA+', definition: 'Data integrity framework: Attributable, Legible, Contemporaneous, Original, Accurate + Complete, Consistent, Enduring, Available' },
      { term: 'Data integrity', definition: 'Assurance that pharmaceutical data is complete, consistent, and accurate throughout its lifecycle' },
      { term: 'Audit trail', definition: 'Computer-generated record of who changed what, when, in an electronic GxP system' },
      { term: 'OOS', definition: 'Out-of-Specification — laboratory result outside acceptance criteria, requiring investigation' },
      { term: 'Metadata', definition: 'Data about data — includes instrument settings, timestamps, operator IDs; part of original record' },
      { term: 'CAPA', definition: 'Corrective and Preventive Action — systematic process for addressing quality failures' },
      { term: 'True copy', definition: 'Verified, exact copy of an original record; validation of the copying process is required' },
    ],
    faqs: [
      { q: 'What are the most common data integrity FDA warning letter findings?', a: 'The most frequently cited data integrity findings include: deleting HPLC sequences and re-injecting samples (not complete, not original), shared user accounts in laboratory systems (not attributable), backdated batch records (not contemporaneous), invalidating OOS results without complete investigation (not complete), and audit trail disabled on analytical instruments. These findings indicate systemic data integrity failures.' },
      { q: 'Is paper data subject to data integrity requirements?', a: 'Yes. ALCOA+ principles apply to all GxP data, whether electronic or paper. Paper records must be attributable (signed/initialed with date), legible (in permanent ink), contemporaneous (completed at time of observation), and original (the actual record, not a copy without designation). Corrections must be made with a single line through the error, initialed and dated, with the correct entry alongside.' },
      { q: 'What is "static" vs "dynamic" data in data integrity?', a: 'Dynamic data is electronic data that can be processed (sorted, queried, recalculated) — examples include HPLC raw data files (.lcd, .raw), electronic batch records, and LIMS data. Static data is a snapshot (PDF, printout) that cannot be reprocessed. MHRA and FDA require that dynamic raw data be retained, not just static printouts, because metadata (run parameters, timestamps, original values) may only exist in dynamic format.' },
      { q: 'How does data integrity apply to computerised lab systems like HPLC?', a: 'HPLC and other analytical instruments must have: 21 CFR Part 11-compliant data acquisition software (Empower, Chromeleon, Agilent OpenLAB), audit trail enabled and reviewed, unique user IDs (no shared accounts), data saved to a networked validated server (not local workstation), access controls preventing unauthorized deletion, and all sequence runs retained including failures and aborted sequences.' },
    ],
    relatedSlugs: ['computer-system-validation-guide', 'eu-annex-11-guide', '21-cfr-part-11-guide', 'gamp5-risk-assessment'],
  },
  {
    slug: 'gamp5-risk-assessment',
    title: 'GAMP 5 Risk Assessment for Computerised Systems: Step-by-Step Guide',
    category: 'Computer System Validation',
    metaTitle: 'GAMP 5 Risk Assessment Guide: Software Categories and Validation Planning',
    metaDesc: 'Step-by-step GAMP 5 risk assessment for pharma computerised systems — software categories, impact assessment, validation strategy, and test planning for GxP compliance.',
    h1: 'GAMP 5 Risk Assessment: Step-by-Step Guide for GxP Computerised Systems',
    intro: 'GAMP 5 (Good Automated Manufacturing Practice 5), published by ISPE, provides the industry framework for risk-based validation of computerised systems in GxP environments. A GAMP 5 risk assessment determines the software category, GxP impact level, and appropriate validation strategy — focusing validation effort where it matters most for patient safety and product quality.',
    sections: [
      {
        heading: 'Step 1: GxP Impact Assessment',
        body: 'The first step is determining whether a system has GxP relevance. GxP-relevant systems are those used to: generate, process, or store GxP data (batch records, laboratory results, clinical data); control GxP processes (manufacturing, sterilization, environmental monitoring); support GxP decisions (release testing, QC review, regulatory submissions). Non-GxP systems (IT infrastructure not touching GxP data, office productivity tools) require only SOX or IT controls, not GxP validation. The GxP impact assessment is documented and QA-approved.',
      },
      {
        heading: 'Step 2: GAMP 5 Software Category Assignment',
        body: 'Category 1 (Infrastructure): OS, middleware, network tools — verify and document vendor testing, no formal IQ/OQ/PQ. Category 3 (Non-configured COTS): standard commercial software used without configuration — document use, verify vendor qualification. Category 4 (Configured COTS): most enterprise pharma systems (Veeva Vault, Medidata, SAP, LIMS) — full validation required, focusing on configuration testing. Category 5 (Custom): bespoke applications — most rigorous validation including code review, requirements traceability, comprehensive testing. Mixed-category systems (COTS with custom extensions) are treated as the highest applicable category.',
      },
      {
        heading: 'Step 3: Risk-Based Validation Strategy',
        body: 'The Validation Plan documents the validation strategy based on GAMP 5 category and risk assessment. Key decisions: test approach (manual vs automated testing), test depth (which functions require testing), independence requirements (who can perform testing), documentation level, and critical vs non-critical function classification. Critical functions (those with direct patient safety or product quality impact) require complete test coverage, formal test protocols, and independent review. Non-critical functions may use informal testing with summary documentation.',
      },
      {
        heading: 'Step 4: Supplier Assessment',
        body: 'GAMP 5 requires assessment of software suppliers before relying on their products for GxP use. For reputable COTS suppliers (Veeva, Oracle, Microsoft), vendor documentation review (Vendor Validation Package, release notes, qualification documentation) may suffice. For bespoke suppliers or high-risk systems, on-site supplier audits are recommended. The supplier assessment determines how much leveraging of vendor testing is possible — reducing the user\'s testing burden. Results are documented in a Supplier Assessment Report.',
      },
      {
        heading: 'Step 5: Validation Lifecycle Management',
        body: 'GAMP 5 validation is not a one-time event — it covers the entire system lifecycle. Periodic reviews (typically annual) assess whether the validation status remains current and whether the system still meets user requirements. Change management ensures that any system modification is assessed for revalidation needs. System retirement requires decommissioning procedures including data migration verification, archive creation, and validation of the archive\'s readability. The entire validation history is maintained in a System Master File (SMF).',
      },
    ],
    keyTerms: [
      { term: 'GAMP 5', definition: 'ISPE Good Automated Manufacturing Practice 5 — risk-based computerised system validation framework' },
      { term: 'GxP impact assessment', definition: 'Evaluation of whether a system has relevance to Good Manufacturing/Laboratory/Clinical Practice' },
      { term: 'Validation Plan', definition: 'Document defining the validation scope, approach, responsibilities, and deliverables for a system' },
      { term: 'Critical function', definition: 'System function with direct impact on patient safety or product quality — requires full validation' },
      { term: 'SMF', definition: 'System Master File — complete validation documentation package for a GxP computerised system' },
      { term: 'Supplier assessment', definition: 'Formal evaluation of software vendor quality systems and validation documentation' },
      { term: 'Periodic review', definition: 'Scheduled assessment confirming that a validated system continues to meet requirements' },
    ],
    faqs: [
      { q: 'What documents are required in a GAMP 5 validation package?', a: 'A complete GAMP 5 validation package includes: GxP Impact Assessment, GAMP Category Assessment, Validation Plan, URS, FRS/Configuration Specification, Risk Assessment, IQ Protocol and Report, OQ Protocol and Report, PQ/UAT Protocol and Report, Traceability Matrix (URS to tests), Deviation Log, Supplier Assessment Report, and Validation Summary Report. The System Master File indexes all these documents.' },
      { q: 'Can automated testing replace manual IQ/OQ/PQ scripts?', a: 'Yes, with appropriate controls. Automated testing tools (Selenium, LoadRunner, UFT) can execute and document validation tests. However, the automated test scripts must themselves be validated, and the test execution logs must be 21 CFR Part 11 compliant (timestamped, attributable, tamper-evident). Most organizations use a hybrid approach: automated regression testing for OQ, manual testing for IQ and initial PQ.' },
      { q: 'How does GAMP 5 handle cloud-hosted SaaS systems?', a: 'GAMP 5 Second Edition (2022) explicitly addresses cloud systems. SaaS systems typically qualify as Category 4 (configured COTS) but have unique challenges: the vendor controls infrastructure, system updates occur without user initiation, and data resides outside the company. Key additional controls: cloud service level agreement with GxP provisions, data residency and sovereignty documentation, vendor-provided audit logs, penetration testing evidence, and SOC 2 Type II reports as part of supplier assessment.' },
      { q: 'What is a traceability matrix in GAMP 5 validation?', a: 'The Requirements Traceability Matrix (RTM) links every user requirement (URS) to the specific test case(s) that verify it, and to the results of those tests. The RTM demonstrates that all requirements were tested and passed. It is a key deliverable reviewed by QA before the Validation Summary Report is approved and is frequently requested by FDA and EMA inspectors during GxP system inspections.' },
    ],
    relatedSlugs: ['computer-system-validation-guide', 'eu-annex-11-guide', 'data-integrity-alcoa-guide', '21-cfr-part-11-guide'],
  },
  {
    slug: '21-cfr-part-11-guide',
    title: '21 CFR Part 11: Electronic Records and Electronic Signatures Compliance',
    category: 'Computer System Validation',
    metaTitle: '21 CFR Part 11 Compliance Guide: Electronic Records, Signatures, Audit Trails',
    metaDesc: 'Complete 21 CFR Part 11 compliance guide — electronic records requirements, electronic signatures, audit trail, access controls, and FDA enforcement for pharma systems.',
    h1: '21 CFR Part 11: Electronic Records and Electronic Signatures Compliance Guide',
    intro: '21 CFR Part 11 is the FDA regulation that establishes criteria under which the Agency considers electronic records and electronic signatures to be trustworthy, reliable, and equivalent to paper records and handwritten signatures. Compliance is required for all FDA-regulated industries including pharmaceutical manufacturing, clinical trials, medical devices, and food processing when records are maintained electronically.',
    sections: [
      {
        heading: '21 CFR Part 11 Scope and Applicability',
        body: 'Part 11 applies to records created, modified, maintained, archived, retrieved, or transmitted under FDA requirements — not to all company records. Predicate rules (21 CFR Part 211 for GMP, 21 CFR Part 58 for GLP, 21 CFR Part 312 for IND) define what records must be maintained. If those records are electronic, Part 11 applies. Scope excludes: paper records with handwritten signatures, records not required by predicate rules, and records in "closed systems" where all users are employees with employment-based accountability.',
      },
      {
        heading: 'Closed vs Open Systems',
        body: 'Part 11 distinguishes two system types with different requirements. Closed systems are environments where system access is controlled by persons responsible for the content — typically internal enterprise systems. Open systems allow access to persons not under the content owner\'s control — such as internet-accessible systems. Closed systems (Section 11.10) require: system validation, audit trail, access controls, retention procedures, and electronic signature controls. Open systems (Section 11.30) add: document encryption and use of digital signature standards to ensure record authenticity during transmission.',
      },
      {
        heading: 'Audit Trail Requirements Under Part 11',
        body: 'Section 11.10(e) requires computer-generated, date-stamped audit trails that record operator entries and actions that create, modify, or delete electronic records. Audit trails must be retained for the same period as the records they protect. Personnel must not be able to disable, alter, or delete audit trails. Audit trail review must be incorporated into quality review procedures. Common compliant audit trail implementations: Oracle Audit Vault, Empower Audit Trail, Veeva Vault Audit Trail, SAP change documents — each captures user ID, timestamp, previous value, new value, reason for change.',
      },
      {
        heading: 'Electronic Signature Requirements',
        body: 'Section 11.100 requires that each electronic signature be unique to one individual and not reused or reassigned. Signers must certify (in signed written declaration to FDA) that their electronic signatures are legally binding. Section 11.200 specifies that electronic signatures must include: the printed name of the signer, the date and time of signing, and the meaning of the signature (review, approval, responsibility). Biometric electronic signatures (fingerprint, retinal scan) must use biometric algorithms that cannot be repudiated. Non-biometric signatures require at least two identification components (ID + password).',
      },
      {
        heading: 'FDA Enforcement and Hybrid Approaches',
        body: 'FDA enforces Part 11 during GMP inspections, GLP inspections, and NDA/BLA reviews. Common 483 observations: audit trail not enabled, shared user accounts, failure to verify electronic signatures link to signers, systems not validated. The FDA\'s 2003 guidance document introduced a "risk-based enforcement discretion" approach, allowing reduced validation burden for predicate rule compliance as long as data integrity is maintained. However, this does not eliminate Part 11 requirements — it adjusts enforcement prioritization. "Hybrid" approaches (electronic records with paper signature) are permitted only when the predicate rule allows paper signatures.',
      },
    ],
    keyTerms: [
      { term: '21 CFR Part 11', definition: 'FDA regulation governing electronic records and electronic signatures in regulated industries' },
      { term: 'Predicate rule', definition: 'FDA regulation (e.g., Part 211, Part 312) that requires specific records to be maintained' },
      { term: 'Closed system', definition: 'System where access is controlled by persons responsible for the electronic records' },
      { term: 'Electronic signature', definition: 'Computer-generated authentication equivalent to a handwritten signature under Part 11' },
      { term: 'Audit trail', definition: 'Computer-generated, tamper-evident log of record creation, modification, and deletion' },
      { term: 'Hybrid approach', definition: 'Using electronic records with paper (wet ink) signatures where permitted by predicate rules' },
      { term: 'Part 11 declaration', definition: 'Written certification submitted to FDA that an individual\'s electronic signature is legally binding' },
    ],
    faqs: [
      { q: 'Does 21 CFR Part 11 apply to Microsoft Excel spreadsheets used in GxP activities?', a: 'Yes, if the spreadsheet is used to create or store records required by a predicate rule (e.g., batch calculations, QC test results). Standard Excel does not have a compliant audit trail, so either: the spreadsheet must be controlled (locked, version-controlled, printed and signed in paper), or a validated spreadsheet application with audit trail must be used (e.g., Spreadsheet Validation Kit with add-ins that create Part 11-compliant audit trails).' },
      { q: 'What is the Part 11 requirement for password controls?', a: 'Part 11 does not specify exact password complexity rules, but FDA expects: unique IDs (no shared accounts), passwords periodically recalled or revised, account lockout after failed attempts (typically 3-5), automatic session timeout, and procedures for lost credentials. These controls ensure that electronic signatures remain attributable to a unique individual.' },
      { q: 'Is cloud software (SaaS) subject to 21 CFR Part 11?', a: 'Yes. If a SaaS application stores FDA-required records, Part 11 applies. The SaaS vendor is responsible for the technical controls (audit trail, access controls), but the regulated company retains accountability for compliance. The vendor\'s Part 11 compliance must be verified through supplier qualification, technical agreements, and review of vendor validation documentation.' },
      { q: 'What is the difference between Part 11 and EU Annex 11?', a: 'Both govern electronic systems in GxP environments but differ in scope. 21 CFR Part 11 (USA FDA) focuses specifically on electronic records and signatures. EU Annex 11 (EMA) covers the entire computerised system lifecycle — validation, data integrity, change control, disaster recovery, and supplier management — making it broader in scope. Companies operating in both USA and EU markets must comply with both regulations.' },
    ],
    relatedSlugs: ['computer-system-validation-guide', 'eu-annex-11-guide', 'data-integrity-alcoa-guide', 'gamp5-risk-assessment'],
  },
];
