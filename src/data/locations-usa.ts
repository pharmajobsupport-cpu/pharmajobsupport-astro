export interface LocationEntry {
  slug: string;
  city: string;
  state: string;
  country: string;
  countryCode: string;
  region: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  heroIntro: string;
  pharmaContext: string;
  topEmployers: string[];
  dominantDomains: string[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
}

export const usaLocations: LocationEntry[] = [
  {
    slug: 'pharma-proxy-job-support-new-jersey',
    city: 'New Jersey',
    state: 'NJ',
    country: 'United States',
    countryCode: 'US',
    region: 'Northeast USA',
    metaTitle: 'Pharma Proxy Job Support New Jersey | NJ Pharma Proxy Support',
    metaDesc: 'Pharma proxy job support for New Jersey professionals. Clinical SAS, regulatory affairs, QA, PV, Veeva — expert guidance for NJ pharma and biotech roles.',
    h1: 'Pharma Proxy Job Support in New Jersey',
    heroIntro: 'New Jersey is the pharmaceutical capital of the world — home to Johnson & Johnson, Pfizer, Merck, Bristol-Myers Squibb, and dozens of global pharma headquarters. Competition for pharma roles here is intense, and our proxy job support gives you the edge you need.',
    pharmaContext: 'New Jersey\'s Route 1 corridor is lined with pharma and biotech companies spanning every domain — regulatory affairs, clinical operations, drug safety, quality systems, and manufacturing. Regulatory submission expertise and Veeva Vault proficiency are particularly in demand.',
    topEmployers: ['Johnson & Johnson', 'Pfizer', 'Merck', 'Bristol-Myers Squibb', 'Bayer', 'Sanofi', 'Amneal Pharmaceuticals', 'Otsuka', 'Genmab', 'Integra LifeSciences'],
    dominantDomains: ['Regulatory Affairs', 'Clinical Operations', 'Drug Safety / PV', 'Quality Assurance', 'Medical Affairs', 'Clinical SAS Programming'],
    faqs: [
      { q: 'Which pharma disciplines are most in demand in New Jersey?', a: 'Regulatory affairs, clinical operations, pharmacovigilance, QA/compliance, and medical writing are consistently high-demand in NJ. The density of global pharma headquarters drives demand for senior regulatory and clinical operations professionals.' },
      { q: 'Do you support remote pharma roles in New Jersey companies?', a: 'Yes. Many NJ-based pharma companies offer remote or hybrid roles. Our proxy support works equally well for in-person, virtual, or hybrid interview and job formats.' }
    ],
    relatedSlugs: ['pharma-proxy-job-support-philadelphia', 'pharma-proxy-job-support-new-york', 'regulatory-affairs-proxy-job-support', 'clinical-operations-proxy-job-support']
  },
  {
    slug: 'pharma-proxy-job-support-philadelphia',
    city: 'Philadelphia',
    state: 'PA',
    country: 'United States',
    countryCode: 'US',
    region: 'Mid-Atlantic USA',
    metaTitle: 'Pharma Proxy Job Support Philadelphia | PA Pharma Proxy Support',
    metaDesc: 'Pharma proxy job support for Philadelphia professionals. Clinical trials, regulatory, biotech, QA — expert guidance for Greater Philadelphia pharma roles.',
    h1: 'Pharma Proxy Job Support in Philadelphia',
    heroIntro: 'The Greater Philadelphia region is one of America\'s top life sciences clusters — anchored by the University City Science Center and hosting global leaders in cell and gene therapy, vaccines, and clinical research. Our proxy support helps Philadelphia-area pharma professionals compete for top roles.',
    pharmaContext: 'Philadelphia\'s pharma ecosystem is particularly strong in clinical research, gene therapy (with major operations from GSK, Spark Therapeutics, and Novartis Gene Therapies), and vaccine development. UPenn, Jefferson, and Temple create a steady pipeline of clinical research talent.',
    topEmployers: ['GSK', 'Spark Therapeutics (Roche)', 'West Pharmaceutical Services', 'LabCorp Drug Development', 'ICON plc', 'Pfizer (vaccine manufacturing)', 'Janssen (J&J)', 'Auxilium', 'Trevena'],
    dominantDomains: ['Clinical Research', 'Regulatory Affairs', 'Cell & Gene Therapy', 'Vaccine Development', 'Quality Systems', 'Pharmacovigilance'],
    faqs: [
      { q: 'Is Philadelphia a good market for clinical research professionals?', a: 'Yes. Philadelphia has one of the highest concentrations of academic medical centers and CROs in the USA. Strong demand exists for CRAs, CDMs, clinical operations managers, and regulatory submission specialists.' },
      { q: 'Do you cover gene therapy-specific Pharma Proxy Job Support for Philadelphia roles?', a: 'Yes. Our experts cover cell and gene therapy regulatory affairs (BLA, INTERACT meetings), GMP manufacturing for ATMPs, and quality systems specific to gene therapy — a growing specialty in the Philadelphia market.' }
    ],
    relatedSlugs: ['pharma-proxy-job-support-new-jersey', 'pharma-proxy-job-support-washington-dc', 'clinical-research-proxy-job-support', 'regulatory-affairs-proxy-job-support']
  },
  {
    slug: 'pharma-proxy-job-support-boston',
    city: 'Boston',
    state: 'MA',
    country: 'United States',
    countryCode: 'US',
    region: 'New England USA',
    metaTitle: 'Pharma Proxy Job Support Boston | MA Biotech Pharma Proxy Support',
    metaDesc: 'Pharma proxy job support for Boston professionals. Biotech, clinical trials, bioinformatics, regulatory, AI in drug discovery — expert guidance for Greater Boston pharma.',
    h1: 'Pharma Proxy Job Support in Boston',
    heroIntro: 'Boston and Cambridge form the world\'s #1 biotech cluster — home to Moderna, Biogen, Vertex, AstraZeneca USA operations, and thousands of emerging biotechs along Kendall Square. Demand is intense and highly specialized. Our proxy support helps you compete in this elite life sciences market.',
    pharmaContext: 'Boston\'s pharma ecosystem emphasizes early-stage drug development, genomics, AI in drug discovery, and cutting-edge biologics. Roles requiring computational biology, regulatory strategy for novel modalities, and clinical trial design for rare diseases are particularly abundant.',
    topEmployers: ['Moderna', 'Biogen', 'Vertex Pharmaceuticals', 'AstraZeneca', 'Takeda', 'Sanofi Genzyme', 'Shire (Takeda)', 'Editas Medicine', 'Blueprint Medicines', 'Ironwood Pharmaceuticals'],
    dominantDomains: ['Drug Discovery (AI/ML)', 'Clinical Development', 'Regulatory Affairs (novel modalities)', 'Biostatistics/Statistical Programming', 'Manufacturing Sciences', 'Medical Affairs'],
    faqs: [
      { q: 'What makes the Boston pharma market different from other USA markets?', a: 'Boston is heavily biotech-focused with many companies in early clinical development, genomics, and precision medicine. Roles tend to require more scientific depth and comfort with novel regulatory pathways (accelerated approval, breakthrough therapy designation) than markets dominated by established pharma.' },
      { q: 'Do you cover AI drug discovery roles for Boston biotech interviews?', a: 'Yes. We cover computational drug discovery, AI model validation in pharma, bioinformatics pipelines, and the regulatory landscape for AI-assisted drug development — all highly relevant to Boston-area roles.' }
    ],
    relatedSlugs: ['pharma-proxy-job-support-new-jersey', 'pharma-proxy-job-support-san-francisco', 'pharma-ai-proxy-job-support', 'clinical-development-proxy-job-support']
  },
  {
    slug: 'pharma-proxy-job-support-san-francisco',
    city: 'San Francisco',
    state: 'CA',
    country: 'United States',
    countryCode: 'US',
    region: 'West Coast USA',
    metaTitle: 'Pharma Proxy Job Support San Francisco | Bay Area Biotech Pharma Help',
    metaDesc: 'Pharma proxy job support for San Francisco Bay Area. Genentech, BioMarin, biotech startups — expert guidance for Bay Area pharma and biotech roles.',
    h1: 'Pharma Proxy Job Support in San Francisco Bay Area',
    heroIntro: 'The San Francisco Bay Area is home to Genentech (Roche), Gilead Sciences, BioMarin, and hundreds of biotech startups in South San Francisco\'s "Biotech Bay." Roles here blend pharma expertise with Silicon Valley technology culture. Our proxy support bridges both worlds.',
    pharmaContext: 'Bay Area pharma is defined by biologics, mAbs, gene therapies, and technology-driven drug discovery. Regulatory strategy for complex biological products, bioinformatics, and AI in drug discovery are areas of particular concentration.',
    topEmployers: ['Genentech (Roche)', 'Gilead Sciences', 'BioMarin Pharmaceutical', 'Exelixis', '10x Genomics', 'Arcus Biosciences', 'Corvus Pharmaceuticals', 'AltheaDx', 'Protagonist Therapeutics'],
    dominantDomains: ['Biologics Regulatory Affairs', 'Clinical Development', 'Bioinformatics', 'Precision Medicine', 'Oncology Drug Development', 'Manufacturing (Biologics)'],
    faqs: [
      { q: 'What pharma domains are most in demand in the San Francisco Bay Area?', a: 'Oncology clinical development, biologics regulatory affairs, bioinformatics/computational biology, clinical operations for complex multi-center trials, and medical affairs for specialty products are consistently high-demand in the Bay Area.' },
      { q: 'Do Bay Area pharma companies offer remote work?', a: 'Yes. Many Bay Area biotech and pharma companies offer remote or hybrid arrangements, especially post-pandemic. Many roles at Bay Area companies can be performed from anywhere in the USA.' }
    ],
    relatedSlugs: ['pharma-proxy-job-support-san-diego', 'pharma-proxy-job-support-boston', 'pharma-ai-proxy-job-support', 'regulatory-affairs-proxy-job-support']
  },
  {
    slug: 'pharma-proxy-job-support-san-diego',
    city: 'San Diego',
    state: 'CA',
    country: 'United States',
    countryCode: 'US',
    region: 'West Coast USA',
    metaTitle: 'Pharma Proxy Job Support San Diego | CA Biotech Pharma Proxy Support',
    metaDesc: 'Pharma proxy job support for San Diego professionals. Biogen, Pfizer San Diego, biotech corridor — expert guidance for San Diego pharma and biotech roles.',
    h1: 'Pharma Proxy Job Support in San Diego',
    heroIntro: 'San Diego\'s Torrey Pines road is lined with biotech and pharma companies — Illumina, Pfizer\'s La Jolla campus, Biogen San Diego, and hundreds of biotechs in Sorrento Valley. The city is one of the USA\'s top biotech markets, particularly strong in genomics and oncology.',
    pharmaContext: 'San Diego pharma excels in genomics, next-generation sequencing, oncology drug development, and antibody therapeutics. UCSD and Scripps Research anchor a world-class research ecosystem feeding directly into the commercial biotech sector.',
    topEmployers: ['Illumina', 'Pfizer La Jolla', 'Biogen San Diego', 'Leap Therapeutics', 'Turning Point Therapeutics (BMS)', 'Gossamer Bio', 'ProQR Therapeutics', 'Asante Bio', 'Dexcom'],
    dominantDomains: ['Genomics / NGS', 'Oncology Clinical Development', 'Antibody Therapeutics', 'Regulatory Affairs (Biologics)', 'Clinical Operations', 'CMC Development'],
    faqs: [
      { q: 'Is San Diego a good market for early-stage clinical development professionals?', a: 'Yes. San Diego has a high concentration of Phase I/II clinical-stage biotechs, making it an excellent market for CRAs, clinical operations managers, clinical pharmacologists, and early development regulatory specialists.' },
      { q: 'Do you cover genomics and NGS-related pharma roles in San Diego?', a: 'Yes. With Illumina headquartered there and many genomics-based drug development companies, we cover NGS-related bioinformatics, regulatory submissions for genomics-based diagnostics and therapeutics, and LDT/IVD regulatory pathways.' }
    ],
    relatedSlugs: ['pharma-proxy-job-support-san-francisco', 'pharma-proxy-job-support-los-angeles', 'clinical-research-proxy-job-support', 'pharma-ai-proxy-job-support']
  },
  {
    slug: 'pharma-proxy-job-support-new-york',
    city: 'New York',
    state: 'NY',
    country: 'United States',
    countryCode: 'US',
    region: 'Northeast USA',
    metaTitle: 'Pharma Proxy Job Support New York | NYC Pharma Proxy Support',
    metaDesc: 'Pharma proxy job support for New York City professionals. Pfizer HQ, pharma finance, medical affairs, regulatory — expert guidance for NYC pharma roles.',
    h1: 'Pharma Proxy Job Support in New York City',
    heroIntro: 'New York City is home to Pfizer\'s global headquarters, major pharma medical affairs operations, and a thriving healthcare and life sciences ecosystem. NYC pharma roles often emphasize medical affairs, commercial strategy, market access, and regulatory intelligence.',
    pharmaContext: 'NYC\'s pharma market blends large pharma HQ functions (regulatory strategy, medical affairs, commercial) with a large healthcare system driving clinical research demand at institutions like Memorial Sloan Kettering, Weill Cornell, and Mount Sinai.',
    topEmployers: ['Pfizer (HQ)', 'Bristol-Myers Squibb (HQ)', 'Regeneron', 'Aeterna Zentaris', 'Daiichi Sankyo', 'Sumitomo Dainippon', 'Harmony Biosciences', 'Relay Therapeutics'],
    dominantDomains: ['Medical Affairs', 'Regulatory Affairs Strategy', 'Market Access / HEOR', 'Clinical Development', 'Pharmacovigilance', 'Commercial Analytics'],
    faqs: [
      { q: 'What types of pharma roles are most common in New York City?', a: 'Medical affairs, regulatory strategy, market access/HEOR, commercial operations, and clinical development leadership roles are concentrated in NYC, reflecting the HQ function concentration at major pharma companies based there.' },
      { q: 'Do you cover healthcare IT roles at New York hospital systems?', a: 'Yes. NYC\'s large academic medical centers (Weill Cornell, NYP, Mount Sinai, MSKCC) hire extensively for EHR implementation, clinical informatics, and healthcare data roles — all covered by our proxy support services.' }
    ],
    relatedSlugs: ['pharma-proxy-job-support-new-jersey', 'pharma-proxy-job-support-boston', 'regulatory-affairs-proxy-job-support', 'clinical-operations-proxy-job-support']
  },
  {
    slug: 'pharma-proxy-job-support-chicago',
    city: 'Chicago',
    state: 'IL',
    country: 'United States',
    countryCode: 'US',
    region: 'Midwest USA',
    metaTitle: 'Pharma Proxy Job Support Chicago | IL Pharma Proxy Support',
    metaDesc: 'Pharma proxy job support for Chicago professionals. Abbott, AbbVie, Baxter — expert guidance for Chicago area pharma, medical device, and healthcare IT roles.',
    h1: 'Pharma Proxy Job Support in Chicago',
    heroIntro: 'The Chicago metropolitan area is a major life sciences hub anchored by AbbVie\'s North Chicago headquarters, Abbott\'s global HQ, and Baxter International. It\'s particularly strong in medical devices, immunology, and healthcare technology.',
    pharmaContext: 'Chicago-area pharma is dominated by immunology/rheumatology expertise (AbbVie\'s Humira legacy), medical devices (Abbott, Medtronic operations), and healthcare IT. The city also hosts major clinical research operations for institutions like Northwestern, Rush, and the University of Illinois Health.',
    topEmployers: ['AbbVie', 'Abbott', 'Baxter International', 'Horizon Therapeutics', 'Zebra Technologies (Healthcare)', 'Northwestern Medicine', 'Rush University Medical Center'],
    dominantDomains: ['Immunology / Biologics', 'Medical Devices', 'Healthcare IT', 'Clinical Research', 'Regulatory Affairs', 'Quality Systems'],
    faqs: [
      { q: 'Is Chicago strong for medical device careers?', a: 'Yes. With Abbott\'s global headquarters and major Baxter and Medtronic operations in the Chicago area, medical device QA, regulatory affairs, R&D, and manufacturing roles are highly concentrated here.' },
      { q: 'Do you cover AbbVie-specific roles for Chicago pharma professionals?', a: 'Yes. AbbVie is one of the world\'s largest biopharmaceutical companies. Our proxy support covers regulatory affairs, immunology clinical development, medical affairs, pharmacovigilance, and manufacturing quality roles relevant to AbbVie-style companies.' }
    ],
    relatedSlugs: ['pharma-proxy-job-support-indianapolis', 'pharma-proxy-job-support-minneapolis', 'medical-device-proxy-job-support', 'pharma-qa-proxy-job-support']
  },
  {
    slug: 'pharma-proxy-job-support-raleigh-durham',
    city: 'Raleigh-Durham',
    state: 'NC',
    country: 'United States',
    countryCode: 'US',
    region: 'Southeast USA',
    metaTitle: 'Pharma Proxy Job Support Raleigh Durham | NC Research Triangle Pharma Help',
    metaDesc: 'Pharma proxy job support for Raleigh-Durham Research Triangle. GSK, Biogen, Syneos Health — expert guidance for NC pharma, CRO, and biotech roles.',
    h1: 'Pharma Proxy Job Support in Raleigh-Durham Research Triangle',
    heroIntro: 'North Carolina\'s Research Triangle Park (RTP) is one of the USA\'s largest pharma and biotech employment centers — home to GSK\'s USA operations, Biogen\'s largest facility, Syneos Health\'s global headquarters, and hundreds of CROs and biotech companies.',
    pharmaContext: 'RTP\'s pharma market has exceptional strength in CRO operations, clinical data management, statistical programming, pharmacovigilance, and regulatory affairs. The concentration of CROs (Syneos, ICON, PPD/Thermo Fisher) makes it one of the best markets in the world for clinical development professionals.',
    topEmployers: ['GSK (USA Operations)', 'Biogen (NC facility)', 'Syneos Health (HQ)', 'Syngene', 'ICON plc', 'PPD (Thermo Fisher)', 'WakeMed', 'Quintiles (IQVIA)', 'Precision Medicine Group'],
    dominantDomains: ['CRO Operations', 'Clinical Data Management', 'Statistical Programming (SAS)', 'Pharmacovigilance', 'Regulatory Affairs', 'Medical Writing'],
    faqs: [
      { q: 'Is Research Triangle Park good for CRO career opportunities?', a: 'RTP is exceptional for CRO careers. Syneos Health, ICON, PPD/Thermo Fisher, IQVIA, and dozens of smaller CROs are all based or heavily staffed in RTP, creating deep clinical operations, biostatistics, data management, and regulatory talent demand.' },
      { q: 'Are clinical SAS programming roles abundant in RTP?', a: 'Yes. RTP is one of the best USA markets for clinical SAS programmers due to the CRO concentration. SDTM/ADaM expertise, TLF production, and CDISC standards knowledge are highly valued and well-compensated in this market.' }
    ],
    relatedSlugs: ['pharma-proxy-job-support-washington-dc', 'pharma-proxy-job-support-atlanta', 'clinical-sas-proxy-job-support', 'clinical-data-management-proxy-job-support']
  },
  {
    slug: 'pharma-proxy-job-support-washington-dc',
    city: 'Washington DC',
    state: 'DC',
    country: 'United States',
    countryCode: 'US',
    region: 'Mid-Atlantic USA',
    metaTitle: 'Pharma Proxy Job Support Washington DC | FDA Regulatory Pharma Help',
    metaDesc: 'Pharma proxy job support for Washington DC Metro area. FDA regulatory, government affairs, clinical contractors, regulatory consulting — expert pharma guidance.',
    h1: 'Pharma Proxy Job Support in Washington DC Metro Area',
    heroIntro: 'The Washington DC metropolitan area is unique in the pharma world — home to the FDA\'s headquarters in Silver Spring, MD and Rockville, MD, along with the world\'s highest concentration of regulatory affairs professionals, government relations specialists, and regulatory consultants.',
    pharmaContext: 'DC-area pharma is dominated by regulatory affairs (proximity to FDA creates unique career pathways), government affairs, policy, and regulatory consulting. Many former FDA reviewers transition to industry roles in this market. CDER, CBER, and CDRH alumni networks are exceptionally active.',
    topEmployers: ['FDA (CDER/CBER/CDRH)', 'Regulatory consulting firms (Lachman, Parexel Regulatory)', 'MedImmune (AstraZeneca)', 'Human Genome Sciences', 'Sucampo Pharmaceuticals', 'MEDSTAR Health'],
    dominantDomains: ['Regulatory Affairs', 'FDA Liaison / Government Affairs', 'Regulatory Consulting', 'Policy and Compliance', 'Clinical Research (government contractors)', 'Medical Writing'],
    faqs: [
      { q: 'Are there special advantages to being located near FDA in Washington DC for pharma careers?', a: 'Yes. FDA proximity creates unique opportunities — former FDA reviewer networks, regulatory consulting firms that need FDA-experienced professionals, early access to regulatory guidance development, and roles specifically requiring knowledge of FDA agency processes and personnel.' },
      { q: 'Do you cover regulatory consulting roles in the DC area?', a: 'Yes. We cover regulatory consulting interview scenarios including regulatory strategy development, gap analysis, FDA meeting preparation, submission strategy, and regulatory intelligence — all highly relevant to DC-area consulting firms.' }
    ],
    relatedSlugs: ['pharma-proxy-job-support-philadelphia', 'pharma-proxy-job-support-raleigh-durham', 'regulatory-affairs-proxy-job-support', 'regulatory-submissions-proxy-job-support']
  },
  {
    slug: 'pharma-proxy-job-support-boston-cambridge',
    city: 'Cambridge',
    state: 'MA',
    country: 'United States',
    countryCode: 'US',
    region: 'New England USA',
    metaTitle: 'Pharma Proxy Job Support Cambridge MA | Kendall Square Biotech Help',
    metaDesc: 'Pharma proxy job support for Cambridge MA professionals. Kendall Square biotech, MIT/Harvard spinoffs, AI drug discovery — expert guidance for Cambridge pharma roles.',
    h1: 'Pharma Proxy Job Support in Cambridge MA (Kendall Square)',
    heroIntro: 'Cambridge\'s Kendall Square is globally recognized as the world\'s most innovative square mile in life sciences — Novartis, Pfizer\'s research campus, Sanofi Genzyme, MIT spinoffs, and hundreds of biotech startups. Roles here demand cutting-edge expertise at the intersection of science and technology.',
    pharmaContext: 'Cambridge biotech emphasizes discovery-stage research, AI-driven drug development, precision medicine, and novel modalities. Roles require comfort with scientific ambiguity, computational approaches, and regulatory pathways for innovative products.',
    topEmployers: ['Novartis (Cambridge campus)', 'Pfizer Research', 'Sanofi Genzyme', 'Immunomedics', 'Cerevel Therapeutics', 'Translate Bio', 'Foghorn Therapeutics', 'Ajax Health', 'Vor Biopharma'],
    dominantDomains: ['Drug Discovery', 'Translational Medicine', 'Computational Biology', 'Regulatory Strategy (novel)', 'Clinical Pharmacology', 'Biomarker Development'],
    faqs: [
      { q: 'What skills are most valued in Cambridge MA biotech companies?', a: 'Scientific depth, computational literacy, experience with novel modalities (RNA therapeutics, gene editing, cell therapy), regulatory strategy for accelerated pathways, and the ability to work in fast-moving startup environments are particularly valued in Cambridge biotech.' },
      { q: 'Do you cover startup biotech interview preparation for Cambridge roles?', a: 'Yes. Startup biotech interviews differ from Big Pharma — they often require broader role scope, greater scientific depth, entrepreneurial mindset demonstration, and comfort with ambiguity. We coach you on all of these dimensions.' }
    ],
    relatedSlugs: ['pharma-proxy-job-support-boston', 'pharma-proxy-job-support-san-francisco', 'pharma-ai-proxy-job-support', 'regulatory-affairs-proxy-job-support']
  },
  {
    slug: 'pharma-proxy-job-support-indianapolis',
    city: 'Indianapolis',
    state: 'IN',
    country: 'United States',
    countryCode: 'US',
    region: 'Midwest USA',
    metaTitle: 'Pharma Proxy Job Support Indianapolis | Eli Lilly Pharma Help',
    metaDesc: 'Pharma proxy job support for Indianapolis professionals. Eli Lilly, Corteva, pharma manufacturing — expert guidance for Indianapolis pharma and biotech roles.',
    h1: 'Pharma Proxy Job Support in Indianapolis',
    heroIntro: 'Indianapolis is home to Eli Lilly and Company\'s global headquarters — one of the world\'s top insulin and endocrinology pharma companies. The city has a thriving pharma ecosystem built around Lilly\'s extensive operations plus growing biotech, CRO, and medical device sectors.',
    pharmaContext: 'Indianapolis pharma is heavily influenced by Eli Lilly\'s focus areas — diabetes, oncology, immunology, and neuroscience. Manufacturing and supply chain roles are particularly prominent given Lilly\'s large-scale production facilities in Indianapolis.',
    topEmployers: ['Eli Lilly and Company (HQ)', 'Corteva Agriscience', 'Catalent (manufacturing)', 'Covance (Labcorp)', 'Regenstrief Institute', 'Indiana University Health'],
    dominantDomains: ['Clinical Development (Diabetes/Oncology)', 'Manufacturing Quality', 'Regulatory Affairs', 'Clinical SAS/Statistics', 'Medical Affairs', 'Supply Chain'],
    faqs: [
      { q: 'Is Indianapolis only good for Eli Lilly pharma careers?', a: 'While Lilly dominates, Indianapolis also has strong pharmaceutical manufacturing (Catalent), CRO operations (Covance/LabCorp), and a growing biotech cluster. However, Lilly\'s extensive operations make it the dominant employer across virtually all pharma functions.' },
      { q: 'What Eli Lilly-specific domains should I prepare for in Indianapolis pharma interviews?', a: 'Lilly is particularly strong in diabetes (insulin, GLP-1), oncology, immunology (JAK inhibitors), and neuroscience (Alzheimer\'s). Domain expertise in these therapeutic areas, along with Lilly\'s manufacturing excellence reputation, are valuable in Indianapolis interviews.' }
    ],
    relatedSlugs: ['pharma-proxy-job-support-chicago', 'pharma-proxy-job-support-raleigh-durham', 'pharma-manufacturing-proxy-job-support', 'clinical-sas-proxy-job-support']
  },
  {
    slug: 'pharma-proxy-job-support-minneapolis',
    city: 'Minneapolis',
    state: 'MN',
    country: 'United States',
    countryCode: 'US',
    region: 'Midwest USA',
    metaTitle: 'Pharma Proxy Job Support Minneapolis | MN Medtronic Medical Device Help',
    metaDesc: 'Pharma proxy job support for Minneapolis professionals. Medtronic, 3M Health, medical devices — expert guidance for Minneapolis medical device and pharma roles.',
    h1: 'Pharma Proxy Job Support in Minneapolis',
    heroIntro: 'Minneapolis is the world\'s medical device capital — anchored by Medtronic\'s global headquarters in Fridley, MN plus 3M\'s healthcare division, Boston Scientific operations, and hundreds of medical device companies. It\'s the premier USA market for medical device QA, regulatory affairs, and clinical specialists.',
    pharmaContext: 'Minneapolis-Saint Paul\'s medical device ecosystem is unmatched globally. Cardiovascular devices, neuromodulation, surgical systems, and healthcare technology are the dominant product categories. ISO 13485, EU MDR, and FDA 510(k) expertise are particularly sought.',
    topEmployers: ['Medtronic (HQ)', '3M Health Care', 'Boston Scientific (operations)', 'Danaher', 'Cardiovascular Systems', 'Nuvectra', 'Integer Holdings', 'CryoLife'],
    dominantDomains: ['Medical Device QA', 'Regulatory Affairs (Medical Devices)', 'Clinical Research (Medical Devices)', 'R&D Engineering', 'Quality Systems (ISO 13485)', 'Post-Market Surveillance'],
    faqs: [
      { q: 'Is Minneapolis the best USA market for medical device careers?', a: 'Minneapolis-Saint Paul has the highest concentration of medical device companies and jobs in the world. Over 300 device companies operate in the Twin Cities area, making it exceptional for medical device QA, regulatory, R&D, and clinical roles.' },
      { q: 'Which medical device specialties are most in demand in Minneapolis?', a: 'Cardiovascular devices (stents, pacemakers, cardiac rhythm management), neuromodulation, robotic surgery, and implantable devices are the dominant product categories. Quality systems (ISO 13485), EU MDR compliance, and 510(k)/PMA regulatory expertise are highly valued.' }
    ],
    relatedSlugs: ['pharma-proxy-job-support-chicago', 'pharma-proxy-job-support-seattle', 'medical-device-proxy-job-support', 'iso-13485-proxy-job-support']
  },
  {
    slug: 'pharma-proxy-job-support-seattle',
    city: 'Seattle',
    state: 'WA',
    country: 'United States',
    countryCode: 'US',
    region: 'Pacific Northwest USA',
    metaTitle: 'Pharma Proxy Job Support Seattle | WA Pharma Biotech Digital Health Help',
    metaDesc: 'Pharma proxy job support for Seattle professionals. Seagen, Amazon Health, Microsoft Healthcare — expert guidance for Seattle pharma, biotech, and digital health roles.',
    h1: 'Pharma Proxy Job Support in Seattle',
    heroIntro: 'Seattle is emerging as a major biotech and digital health hub — home to Seagen (now Pfizer\'s oncology division), Amazon\'s healthcare ventures, Microsoft Healthcare, and a thriving startup ecosystem. The unique blend of tech and pharma creates distinctive career opportunities.',
    pharmaContext: 'Seattle\'s pharma market is shaped by technology company involvement in healthcare (Amazon, Microsoft) plus a growing biotech sector. Antibody-drug conjugates (Seagen\'s specialty), digital health technology, and healthcare AI are particularly prominent.',
    topEmployers: ['Pfizer/Seagen', 'Amazon Healthcare/One Medical', 'Microsoft Healthcare AI', 'Adaptive Biotechnologies', 'Nuvation Bio', 'Silverback Therapeutics', 'Omeros', 'Karuna Therapeutics'],
    dominantDomains: ['Oncology Drug Development', 'Digital Health', 'Healthcare AI/ML', 'Regulatory Affairs (Biologics)', 'Clinical Operations', 'Healthcare Technology'],
    faqs: [
      { q: 'Is Seattle a good market for digital health and healthcare AI careers?', a: 'Seattle is exceptional for digital health and healthcare AI — Amazon and Microsoft both have significant healthcare initiatives there, and the startup ecosystem is active. Tech-pharma hybrid skills (cloud computing, ML, health informatics) are particularly valuable.' },
      { q: 'Do you cover antibody-drug conjugate (ADC) regulatory expertise for Seattle roles?', a: 'Yes. With Seagen\'s extensive ADC portfolio now part of Pfizer\'s Seattle operations, ADC regulatory strategy, CMC expertise for conjugated biologics, and oncology clinical development knowledge are especially relevant for Seattle pharma roles.' }
    ],
    relatedSlugs: ['pharma-proxy-job-support-san-francisco', 'pharma-proxy-job-support-san-diego', 'pharma-ai-proxy-job-support', 'regulatory-affairs-proxy-job-support']
  },
  {
    slug: 'pharma-proxy-job-support-houston',
    city: 'Houston',
    state: 'TX',
    country: 'United States',
    countryCode: 'US',
    region: 'South USA',
    metaTitle: 'Pharma Proxy Job Support Houston | TX Medical Center Pharma Help',
    metaDesc: 'Pharma proxy job support for Houston professionals. Texas Medical Center, MD Anderson, oncology clinical trials — expert guidance for Houston healthcare and pharma roles.',
    h1: 'Pharma Proxy Job Support in Houston',
    heroIntro: 'Houston is home to the Texas Medical Center — the largest medical complex in the world, with MD Anderson Cancer Center, Houston Methodist, Memorial Hermann, and 60+ institutions. Clinical research, oncology drug development, and healthcare IT drive Houston\'s pharma market.',
    pharmaContext: 'Houston\'s pharma market is driven by clinical research at its world-class medical centers, particularly oncology clinical trials at MD Anderson. Healthcare IT is a major growth area with large hospital systems digitizing operations across the city.',
    topEmployers: ['MD Anderson Cancer Center', 'Houston Methodist', 'Memorial Hermann', 'UTHealth', 'Baylor College of Medicine', 'Harris Health System', 'Texas Children\'s Hospital'],
    dominantDomains: ['Oncology Clinical Trials', 'Healthcare IT', 'Clinical Research', 'Regulatory Affairs (academic)', 'Health Informatics', 'Drug Safety / PV'],
    faqs: [
      { q: 'What pharma roles are most available at the Texas Medical Center in Houston?', a: 'Clinical research coordinators, clinical research associates, oncology clinical operations managers, regulatory affairs specialists (for IND applications), healthcare IT professionals, and data managers are consistently in demand at TMC institutions.' },
      { q: 'Is Houston a good market for healthcare IT roles?', a: 'Yes. Houston\'s large hospital systems (Houston Methodist, Memorial Hermann, HCA Houston) and the Texas Medical Center collectively employ thousands of healthcare IT professionals, with strong demand for Epic/Cerner implementers, clinical informatics analysts, and health data engineers.' }
    ],
    relatedSlugs: ['pharma-proxy-job-support-dallas', 'pharma-proxy-job-support-atlanta', 'clinical-research-proxy-job-support', 'healthcare-it-proxy-job-support']
  },
  {
    slug: 'pharma-proxy-job-support-dallas',
    city: 'Dallas',
    state: 'TX',
    country: 'United States',
    countryCode: 'US',
    region: 'South USA',
    metaTitle: 'Pharma Proxy Job Support Dallas | TX Pharma Healthcare IT Help',
    metaDesc: 'Pharma proxy job support for Dallas professionals. McKesson, Envision Healthcare, healthcare technology — expert guidance for Dallas pharma and healthcare roles.',
    h1: 'Pharma Proxy Job Support in Dallas-Fort Worth',
    heroIntro: 'Dallas-Fort Worth is one of the fastest-growing life sciences markets in the USA — with significant pharma operations, healthcare technology companies, and a rapidly expanding biotech sector. McKesson\'s HQ, major CRO operations, and a large healthcare IT ecosystem make DFW a compelling pharma market.',
    pharmaContext: 'DFW pharma is characterized by pharmaceutical distribution (McKesson), healthcare services, clinical research at UT Southwestern, and a growing biotech sector. Healthcare IT and health technology companies have chosen DFW as a business-friendly alternative to coastal markets.',
    topEmployers: ['McKesson Corporation (HQ)', 'UT Southwestern Medical Center', 'Baylor Scott & White Health', 'Tenet Healthcare', 'HCA Healthcare (TX operations)', 'Envision Healthcare'],
    dominantDomains: ['Healthcare IT', 'Clinical Research', 'Pharmaceutical Distribution/Supply Chain', 'Healthcare Services', 'Health Technology', 'Drug Safety (academic)'],
    faqs: [
      { q: 'Is Dallas a growing market for pharma and biotech careers?', a: 'Yes. DFW is experiencing significant life sciences growth driven by business-friendly regulations, lower cost of living than coastal markets, and major institutional research at UT Southwestern. The biotech sector is expanding rapidly with several new campuses and innovation districts.' },
      { q: 'What healthcare IT opportunities are in Dallas?', a: 'Dallas has a large healthcare IT sector driven by major hospital systems (Baylor Scott & White, Tenet, HCA) and healthcare technology companies. Epic/Cerner implementation, health informatics, RCM technology, and clinical data analytics are well-compensated in this market.' }
    ],
    relatedSlugs: ['pharma-proxy-job-support-houston', 'pharma-proxy-job-support-atlanta', 'healthcare-it-proxy-job-support', 'pharma-supply-chain-proxy-job-support']
  },
  {
    slug: 'pharma-proxy-job-support-atlanta',
    city: 'Atlanta',
    state: 'GA',
    country: 'United States',
    countryCode: 'US',
    region: 'Southeast USA',
    metaTitle: 'Pharma Proxy Job Support Atlanta | GA CDC Pharma Healthcare Help',
    metaDesc: 'Pharma proxy job support for Atlanta professionals. CDC, Emory University, pharma operations — expert guidance for Atlanta pharma, public health, and clinical roles.',
    h1: 'Pharma Proxy Job Support in Atlanta',
    heroIntro: 'Atlanta hosts the CDC\'s global headquarters, Emory University\'s world-class medical school, and a growing pharma operations and CRO sector. Public health, epidemiology, drug safety, and clinical research are particularly strong domains in the Atlanta market.',
    pharmaContext: 'Atlanta\'s pharma ecosystem blends federal public health (CDC, NIH grant-funded research at Emory), clinical research at Emory/Grady hospital network, and growing commercial pharma operations. Pharmacovigilance and drug safety roles benefit from Atlanta\'s public health DNA.',
    topEmployers: ['CDC', 'Emory University/Hospital', 'Georgia Research Alliance', 'ICON (Atlanta office)', 'Pharmaceutical Product Development (PPD)', 'Grady Health', 'Children\'s Healthcare of Atlanta'],
    dominantDomains: ['Public Health / Epidemiology', 'Drug Safety / PV', 'Clinical Research', 'Healthcare IT', 'Regulatory Affairs (academic/government)', 'Infectious Disease'],
    faqs: [
      { q: 'What makes Atlanta unique for pharma careers?', a: 'Atlanta\'s CDC headquarters creates unique public health and epidemiology career pathways. Emory University drives academic clinical research. The city\'s growing commercial sector provides industry pharma opportunities without the cost-of-living challenges of coastal markets.' },
      { q: 'Are CDC contractor roles in pharma/public health supported?', a: 'Yes. Many CDC positions are filled through contractors and consulting firms. Our proxy support covers public health research, epidemiology, drug safety, and regulatory roles relevant to government contractor positions.' }
    ],
    relatedSlugs: ['pharma-proxy-job-support-raleigh-durham', 'pharma-proxy-job-support-houston', 'pharmacovigilance-proxy-job-support', 'clinical-research-proxy-job-support']
  },
  {
    slug: 'pharma-proxy-job-support-los-angeles',
    city: 'Los Angeles',
    state: 'CA',
    country: 'United States',
    countryCode: 'US',
    region: 'West Coast USA',
    metaTitle: 'Pharma Proxy Job Support Los Angeles | LA Biotech Pharma Help',
    metaDesc: 'Pharma proxy job support for Los Angeles professionals. Amgen, Kite Pharma, biotech — expert guidance for LA County pharma, biotech, and digital health roles.',
    h1: 'Pharma Proxy Job Support in Los Angeles',
    heroIntro: 'Los Angeles County — particularly the Thousand Oaks/Westlake Village corridor (home to Amgen) and the growing biotech clusters in West LA and Torrance — is a major life sciences market. Amgen, Kite Pharma (Gilead), and hundreds of biotechs call the LA area home.',
    pharmaContext: 'LA\'s pharma market is driven by Amgen\'s massive operations in Thousand Oaks, Kite Pharma\'s cell therapy manufacturing, and a growing biotech ecosystem. Cell therapy, oncology biologics, and manufacturing excellence are key domains.',
    topEmployers: ['Amgen (HQ Thousand Oaks)', 'Kite Pharma/Gilead', 'Daiichi Sankyo', 'Rancho BioSciences', 'Evolent Health', 'AltaMed Health Services', 'Kaiser Permanente Southern CA'],
    dominantDomains: ['Biologics Manufacturing', 'Cell Therapy', 'Regulatory Affairs (Biologics)', 'Quality Systems', 'Clinical Development', 'Pharmacovigilance'],
    faqs: [
      { q: 'Is Thousand Oaks / LA area good for biologics manufacturing careers?', a: 'Yes. Amgen\'s large manufacturing campus in Thousand Oaks and Kite Pharma\'s cell therapy manufacturing in Santa Monica create strong demand for biologics manufacturing, quality systems, process development, and manufacturing validation professionals.' },
      { q: 'Do you cover cell therapy manufacturing roles for LA area companies?', a: 'Yes. Cell therapy manufacturing is technically demanding — cGMP cell manufacturing, chain of identity/custody, cryopreservation, release testing, and ATMP regulatory requirements are all covered by our proxy support.' }
    ],
    relatedSlugs: ['pharma-proxy-job-support-san-diego', 'pharma-proxy-job-support-san-francisco', 'pharma-manufacturing-proxy-job-support', 'regulatory-affairs-proxy-job-support']
  },
  {
    slug: 'pharma-proxy-job-support-remote-usa',
    city: 'Remote',
    state: 'USA',
    country: 'United States',
    countryCode: 'US',
    region: 'National Remote USA',
    metaTitle: 'Pharma Proxy Job Support Remote USA | Work From Home Pharma Help',
    metaDesc: 'Pharma proxy job support for remote USA pharma roles. CRA, regulatory, SAS programming, PV — expert guidance for remote-first pharmaceutical positions across the USA.',
    h1: 'Pharma Proxy Job Support for Remote USA Positions',
    heroIntro: 'Remote pharma positions have exploded since 2020 — CRAs, regulatory affairs specialists, clinical data managers, SAS programmers, and pharmacovigilance professionals now routinely work remotely for companies headquartered anywhere in the USA. Our proxy support works perfectly for remote interview formats.',
    pharmaContext: 'Remote pharma roles are predominantly in clinical operations (CRA), clinical data management, statistical programming, regulatory affairs, pharmacovigilance, and medical writing — disciplines where the work is computer-based and not tied to a physical facility.',
    topEmployers: ['All major CROs (remote-first roles)', 'Virtual/remote pharma companies', 'Contract staffing firms (pharma specialists)', 'Consulting firms (remote regulatory)', 'Remote pharma headquarters functions'],
    dominantDomains: ['CRA / Clinical Monitoring (remote)', 'Clinical Data Management (remote)', 'Statistical Programming (remote)', 'Pharmacovigilance (remote)', 'Regulatory Affairs (remote)', 'Medical Writing (remote)'],
    faqs: [
      { q: 'What pharma roles are available remotely in the USA?', a: 'Most computer-based pharma roles can be done remotely — clinical data management, SAS programming, regulatory submissions, pharmacovigilance case processing, medical writing, and regulatory operations. Field CRAs work remotely between site visits.' },
      { q: 'Does your proxy support work for remote pharma interviews?', a: 'Yes. Our proxy support is optimized for virtual interview formats — video interviews, online coding assessments, virtual case study presentations, and remote technical tests. We specialize in supporting remote interview scenarios.' }
    ],
    relatedSlugs: ['pharma-proxy-job-support-new-jersey', 'pharma-proxy-job-support-raleigh-durham', 'clinical-sas-proxy-job-support', 'pharmacovigilance-proxy-job-support']
  },
  {
    slug: 'pharma-proxy-job-support-baltimore',
    city: 'Baltimore',
    state: 'MD',
    country: 'United States',
    countryCode: 'US',
    region: 'Mid-Atlantic USA',
    metaTitle: 'Pharma Proxy Job Support Baltimore | MD Johns Hopkins Pharma Help',
    metaDesc: 'Pharma proxy job support for Baltimore professionals. Johns Hopkins, FDA proximity, MedStar — expert guidance for Baltimore pharma, academic research, and clinical roles.',
    h1: 'Pharma Proxy Job Support in Baltimore',
    heroIntro: 'Baltimore is home to Johns Hopkins — one of the world\'s premier academic medical institutions — and benefits from proximity to the FDA\'s Silver Spring headquarters. Clinical research, academic pharma, and regulatory affairs are particularly strong in the Baltimore-Washington corridor.',
    pharmaContext: 'Baltimore\'s pharma market is anchored by Johns Hopkins\' extensive clinical research programs, proximity to FDA creating regulatory career opportunities, and the broader Baltimore-Washington biohealth corridor which is one of the USA\'s top 5 life sciences clusters.',
    topEmployers: ['Johns Hopkins Medicine/University', 'University of Maryland Medical Center', 'MedStar Health', 'CareFirst', 'Emergent BioSolutions (Rockville)', 'T. Rowe Price (health investment lens)'],
    dominantDomains: ['Academic Clinical Research', 'Regulatory Affairs (FDA proximity)', 'Clinical Informatics', 'Healthcare IT', 'Biodefense / Government Pharma', 'Drug Safety'],
    faqs: [
      { q: 'What advantage does Baltimore have for regulatory affairs careers?', a: 'Proximity to FDA in Silver Spring/Rockville creates unique regulatory career opportunities — FDA contractor roles, regulatory consulting firms clustered near FDA, and commercial roles specifically valued for FDA proximity and knowledge of agency processes.' },
      { q: 'Is academic clinical research at Johns Hopkins different from industry clinical research?', a: 'Yes — academic research involves investigator-initiated trials, NIH funding, and IRB rather than sponsor-driven clinical operations. We cover both academic and industry clinical research scenarios to support your transition between these environments.' }
    ],
    relatedSlugs: ['pharma-proxy-job-support-washington-dc', 'pharma-proxy-job-support-philadelphia', 'regulatory-affairs-proxy-job-support', 'clinical-research-proxy-job-support']
  },
  {
    slug: 'pharma-proxy-job-support-denver',
    city: 'Denver',
    state: 'CO',
    country: 'United States',
    countryCode: 'US',
    region: 'Mountain West USA',
    metaTitle: 'Pharma Proxy Job Support Denver | CO Pharma Biotech Digital Health Help',
    metaDesc: 'Pharma proxy job support for Denver professionals. UCHealth, DaVita, healthtech — expert guidance for Denver area pharma, biotech, and digital health roles.',
    h1: 'Pharma Proxy Job Support in Denver',
    heroIntro: 'Denver is emerging as a dynamic life sciences and digital health hub — with UCHealth driving clinical research, DaVita headquartered there, and a growing biotech and healthtech ecosystem benefiting from Colorado\'s quality of life advantage in attracting talent.',
    pharmaContext: 'Denver\'s pharma market spans healthcare services (DaVita), academic research (UC Denver/Anschutz), digital health technology, and a growing biotech sector. Cannabis pharmaceutical research and bioscience manufacturing are emerging specialties.',
    topEmployers: ['DaVita Inc. (HQ)', 'UCHealth / UC Anschutz Medical Campus', 'Nuvation Bio', 'Coeptis Therapeutics', 'Rigel Pharmaceuticals (operations)', 'HealthONE', 'SciSparc'],
    dominantDomains: ['Healthcare Services Technology', 'Academic Clinical Research', 'Digital Health', 'Nephrology/Dialysis (DaVita)', 'Healthcare IT', 'Biotech R&D'],
    faqs: [
      { q: 'Is Denver a good market for healthcare IT and digital health careers?', a: 'Yes. Denver\'s tech community and major healthcare employers (DaVita, UCHealth, HealthONE) create strong demand for healthcare IT professionals, health data analysts, clinical informatics specialists, and digital health developers.' },
      { q: 'Are there pharma-specific job opportunities in Denver beyond healthcare services?', a: 'Yes. The Anschutz Medical Campus drives clinical trial activity, and Denver\'s growing biotech sector creates regulatory, clinical operations, and quality roles. Colorado\'s business-friendly environment is attracting life sciences companies from coastal markets.' }
    ],
    relatedSlugs: ['pharma-proxy-job-support-seattle', 'pharma-proxy-job-support-remote-usa', 'healthcare-it-proxy-job-support', 'clinical-research-proxy-job-support']
  },
  {
    slug: 'pharma-proxy-job-support-miami',
    city: 'Miami',
    state: 'FL',
    country: 'United States',
    countryCode: 'US',
    region: 'Southeast USA',
    metaTitle: 'Pharma Proxy Job Support Miami | FL Latin America Pharma Help',
    metaDesc: 'Pharma proxy job support for Miami professionals. Latin America pharma hub, clinical research, healthcare services — expert guidance for Miami pharma and biotech roles.',
    h1: 'Pharma Proxy Job Support in Miami',
    heroIntro: 'Miami serves as the gateway to Latin American pharma markets — with many global pharma companies locating Latin America regional operations in Miami. Clinical research, regulatory affairs with LATAM expertise, and healthcare services are the dominant pharma career pathways.',
    pharmaContext: 'Miami\'s pharma market benefits from its LATAM connectivity — roles requiring Spanish language skills, knowledge of LATAM regulatory agencies (ANVISA, INVIMA, COFEPRIS), and cross-cultural clinical operations management are abundant. University of Miami\'s Sylvester Cancer Center drives oncology clinical research.',
    topEmployers: ['University of Miami / Sylvester Cancer Center', 'Jackson Health System', 'Baptist Health South Florida', 'Modernizing Medicine', 'Procter & Gamble (LATAM Pharma)', 'Teva (regional operations)'],
    dominantDomains: ['LATAM Regulatory Affairs', 'Clinical Research (Bilingual)', 'Healthcare IT (Spanish-English)', 'Healthcare Services', 'Pharmacovigilance (LATAM)', 'Drug Safety (regional)'],
    faqs: [
      { q: 'Is Spanish language proficiency important for pharma roles in Miami?', a: 'Very much so. Miami\'s LATAM pharma hub function means bilingual (Spanish-English) professionals have a significant advantage in regulatory affairs, clinical operations, medical affairs, and pharmacovigilance roles. Portuguese is also valuable for Brazil-focused positions.' },
      { q: 'What LATAM regulatory expertise is needed for Miami pharma roles?', a: 'ANVISA (Brazil), INVIMA (Colombia), COFEPRIS (Mexico), ANMAT (Argentina), and ISP (Chile) expertise is valued for regulatory roles at companies with Latin American commercial operations headquartered in Miami.' }
    ],
    relatedSlugs: ['pharma-proxy-job-support-atlanta', 'pharma-proxy-job-support-houston', 'regulatory-affairs-proxy-job-support', 'pharmacovigilance-proxy-job-support']
  }
];
