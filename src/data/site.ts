export const site = {
  domain: 'pharmajobsupport.com',
  url: 'https://pharmajobsupport.com',
  name: 'Pharma Job Support',
  brandPhrase: 'Pharma Proxy Job Support',
  tagline: 'Pharma, Clinical Research & Medical Device Proxy Job Support',
  description:
    'Pharma Job Support is a proxy-style job support and interview preparation platform for pharma, clinical research, medical device, validation, regulatory, QA, data, AI, SAS, and healthcare technology roles.',
  whatsapp: '+91-9660834611',
  whatsappLink: 'https://wa.me/919660834611',
  whatsappUrl: 'https://wa.me/919660834611',
  email: 'support@pharmajobsupport.com',
  ogImage: '/og-image.jpg',
  twitterHandle: '@pharmajobsupport',
  locale: 'en_US',
  analytics: {
    ga4: '',   // Replace with GA4 measurement ID
    gsc: '',   // Replace with Google Search Console verification
  },
  social: {
    linkedin: '',
    twitter: '',
    youtube: '',
  },
  disclaimer:
    'Pharma Job Support provides professional guidance, proxy-style job support, interview preparation, profile positioning, and domain learning support. We do not guarantee jobs, interview outcomes, or claim affiliation with any employer, pharma company, regulator, or certification body.',
  ogImages: {
    default: '/og-images/pharmajobsupport-og.jpg',
    proxyJobSupport: '/og-images/pharma-proxy-job-support-og.jpg',
    proxyInterview: '/og-images/pharma-proxy-interview-og.jpg',
    profileEngineering: '/og-images/pharma-profile-engineering-og.jpg',
    knowledgeBase: '/og-images/pharma-knowledge-base-og.jpg',
    blog: '/og-images/pharma-blog-og.jpg',
    realInterviews: '/og-images/pharma-interviews-og.jpg',
  },
} as const;

export type Site = typeof site;
