export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Proxy Job Support',
    href: '/pharma-proxy-job-support/',
    children: [
      { label: 'Pharma Proxy Job Support', href: '/pharma-proxy-job-support/' },
      { label: 'Clinical Research Support', href: '/clinical-research-proxy-job-support/' },
      { label: 'Medical Device Support', href: '/medical-device-proxy-job-support/' },
      { label: 'Clinical SAS Support', href: '/clinical-sas-proxy-job-support/' },
      { label: 'CSV Validation Support', href: '/csv-validation-proxy-job-support/' },
      { label: 'Regulatory Affairs Support', href: '/regulatory-affairs-proxy-job-support/' },
      { label: 'Pharmacovigilance Support', href: '/pharmacovigilance-proxy-job-support/' },
      { label: 'Pharma QA Support', href: '/pharma-qa-proxy-job-support/' },
      { label: 'Veeva Proxy Support', href: '/veeva-proxy-job-support/' },
      { label: 'Pharma AI Support', href: '/pharma-ai-proxy-job-support/' },
    ],
  },
  {
    label: 'Interview Support',
    href: '/pharma-interview-proxy-support/',
    children: [
      { label: 'Interview Proxy Support', href: '/pharma-interview-proxy-support/' },
      { label: 'Clinical SAS Interview', href: '/clinical-sas-interview-proxy-support/' },
      { label: 'CSV Validation Interview', href: '/csv-validation-interview-proxy-support/' },
      { label: 'Medical Device Interview', href: '/medical-device-interview-proxy-support/' },
      { label: 'Regulatory Affairs Interview', href: '/regulatory-affairs-interview-proxy-support/' },
      { label: 'Pharmacovigilance Interview', href: '/pharmacovigilance-interview-proxy-support/' },
    ],
  },
  {
    label: 'Profile Engineering',
    href: '/pharma-profile-engineering/',
    children: [
      { label: 'Pharma Profile Engineering', href: '/pharma-profile-engineering/' },
      { label: 'Clinical SAS Profile', href: '/clinical-sas-profile-engineering/' },
      { label: 'CSV Validation Profile', href: '/csv-validation-profile-engineering/' },
      { label: 'Medical Device Profile', href: '/medical-device-profile-engineering/' },
      { label: 'Regulatory Affairs Profile', href: '/regulatory-affairs-profile-engineering/' },
    ],
  },
  { label: 'Career Marketing', href: '/pharma-career-marketing/' },
  { label: 'Pharma Domains', href: '/pharma-domains/' },
  { label: 'Tools & Platforms', href: '/tools-platforms/' },
  { label: 'Knowledge Base', href: '/knowledge-base/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];

export const footerNav: NavItem[] = [
  {
    label: 'Services',
    href: '/pharma-proxy-job-support/',
    children: [
      { label: 'Pharma Proxy Job Support', href: '/pharma-proxy-job-support/' },
      { label: 'Clinical Research Support', href: '/clinical-research-proxy-job-support/' },
      { label: 'Medical Device Support', href: '/medical-device-proxy-job-support/' },
      { label: 'Clinical SAS Support', href: '/clinical-sas-proxy-job-support/' },
      { label: 'CSV Validation Support', href: '/csv-validation-proxy-job-support/' },
      { label: 'Regulatory Affairs', href: '/regulatory-affairs-proxy-job-support/' },
      { label: 'Pharmacovigilance', href: '/pharmacovigilance-proxy-job-support/' },
      { label: 'Veeva Proxy Support', href: '/veeva-proxy-job-support/' },
    ],
  },
  {
    label: 'Support',
    href: '/pharma-interview-proxy-support/',
    children: [
      { label: 'Interview Proxy Support', href: '/pharma-interview-proxy-support/' },
      { label: 'Profile Engineering', href: '/pharma-profile-engineering/' },
      { label: 'Career Marketing', href: '/pharma-career-marketing/' },
      { label: 'Pharma Domains', href: '/pharma-domains/' },
      { label: 'Tools & Platforms', href: '/tools-platforms/' },
    ],
  },
  {
    label: 'Knowledge',
    href: '/knowledge-base/',
    children: [
      { label: 'Knowledge Base', href: '/knowledge-base/' },
      { label: 'Blog', href: '/blog/' },
      { label: 'What is Clinical SAS?', href: '/what-is-sdtm/' },
      { label: 'What is ADaM?', href: '/what-is-adam/' },
      { label: 'What is CSV Validation?', href: '/computer-system-validation-guide/' },
      { label: 'What is Pharmacovigilance?', href: '/pharmacovigilance-reporting-guide/' },
    ],
  },
  {
    label: 'Company',
    href: '/about/',
    children: [
      { label: 'About Us', href: '/about/' },
      { label: 'Contact', href: '/contact/' },
      { label: 'Privacy Policy', href: '/privacy-policy/' },
      { label: 'Terms of Service', href: '/terms/' },
    ],
  },
];

export const globalCTAs = {
  whatsapp: 'Talk on WhatsApp',
  proxySupport: 'Get Proxy Job Support',
  interviewSupport: 'Book Interview Support',
  profileEngineering: 'Engineer My Pharma Profile',
  exploreSupport: 'Explore Proxy Support',
} as const;
