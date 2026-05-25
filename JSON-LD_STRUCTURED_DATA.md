ADDITIONAL RULE — JSON-LD STRUCTURED DATA FOR EVERY PAGE AND DATA FILE

════════════════════════════════════════════════════════════
JSON-LD RULE 1 — EVERY DATA ENTRY MUST CARRY ITS OWN SCHEMA
════════════════════════════════════════════════════════════

Every entry in every data file must include a jsonLd field.
This field contains the complete JSON-LD object for that page.
The Astro page template reads this field and injects it into
<script type="application/ld+json"> in the page <head>.

Never generate JSON-LD separately from the data entry.
The JSON-LD lives inside the data file alongside the content.
One entry = one content object + one jsonLd object. Always.

════════════════════════════════════════════════════════════
JSON-LD RULE 2 — SCHEMA TYPE PER PAGE TYPE
════════════════════════════════════════════════════════════

Use exactly these schema types for each page type:

HOMEPAGE (index.astro):
  Schema 1: Organization
  Schema 2: WebSite (with SearchAction)
  Schema 3: ItemList (3 services)
  Schema 4: FAQPage (homepage FAQ questions)
  → Inject all 4 as separate <script type="application/ld+json"> blocks

SERVICE HUB PAGES (/pharma-proxy-job-support/, /pharma-proxy-interview/, /pharma-profile-engineering/):
  Schema 1: Service
  Schema 2: FAQPage
  Schema 3: BreadcrumbList
  → 3 blocks

COUNTRY PAGES (/pharma-proxy-job-support-[country]/, /pharma-proxy-interview-[country]/):
  Schema 1: Service (with areaServed = country name)
  Schema 2: FAQPage
  Schema 3: BreadcrumbList
  → 3 blocks

CITY PAGES (/pharma-proxy-job-support-[city]/):
  Schema 1: Service (with areaServed = city + country)
  Schema 2: FAQPage
  Schema 3: BreadcrumbList
  Note: Do NOT use LocalBusiness — we have no physical address.
  Use areaServed inside Service schema only.
  → 3 blocks

DOMAIN PAGES (/[domain]-proxy-job-support/, /[domain]-proxy-interview/):
  Schema 1: Service
  Schema 2: FAQPage
  Schema 3: BreadcrumbList
  → 3 blocks

DOMAIN × COUNTRY CROSS PAGES (/[domain]-proxy-job-support-[country]/):
  Schema 1: Service (areaServed = country, serviceType = domain)
  Schema 2: FAQPage
  Schema 3: BreadcrumbList
  → 3 blocks

KNOWLEDGE BASE PAGES (/what-is-[topic]/):
  Schema 1: Article (articleType = "TechArticle")
  Schema 2: FAQPage
  Schema 3: BreadcrumbList
  → 3 blocks

BLOG PAGES (/[blog-slug]/):
  Schema 1: Article (articleType = "BlogPosting")
  Schema 2: FAQPage
  Schema 3: BreadcrumbList
  → 3 blocks

REAL INTERVIEW PAGES (/pharma-interviews/[slug]/):
  Schema 1: Article (articleType = "Article")
  Schema 2: FAQPage
  Schema 3: BreadcrumbList
  → 3 blocks

GUIDE PAGES (/[domain]-proxy-job-support-guide/):
  Schema 1: Article (articleType = "TechArticle")
  Schema 2: FAQPage
  Schema 3: BreadcrumbList
  → 3 blocks

PAIN/SITUATION PAGES (/struggling-in-pharma-project/ etc.):
  Schema 1: WebPage
  Schema 2: FAQPage
  Schema 3: BreadcrumbList
  → 3 blocks

PROFILE ENGINEERING PAGES (/pharma-profile-engineering-[country]/):
  Schema 1: Service
  Schema 2: FAQPage
  Schema 3: BreadcrumbList
  → 3 blocks

════════════════════════════════════════════════════════════
JSON-LD RULE 3 — EXACT FIELD STRUCTURE IN DATA FILES
════════════════════════════════════════════════════════════

Every data entry interface must include this field:

  jsonLd: {
    service?: object      // for service/country/city/domain pages
    article?: object      // for blog/KB/guide/interview pages
    webpage?: object      // for pain/situation pages
    faqPage: object       // every page has FAQPage
    breadcrumbList: object // every page has BreadcrumbList
  }

── EXACT JSON-LD TEMPLATES PER SCHEMA TYPE ──

SERVICE SCHEMA (for service/country/city/domain pages):
jsonLd: {
  service: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "[page H1 text]",
    "provider": {
      "@type": "Organization",
      "name": "Pharma Job Support",
      "url": "https://pharmajobsupport.com"
    },
    "serviceType": "Pharma Proxy Job Support",
    // for country pages add:
    "areaServed": {
      "@type": "Country",
      "name": "[Country Name]"
    },
    // for city pages add:
    "areaServed": {
      "@type": "City",
      "name": "[City Name]"
    },
    // for domain pages add:
    "serviceType": "[Domain] Proxy Job Support",
    "description": "[page metaDesc text]",
    "url": "https://pharmajobsupport.com/[slug]/",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9660834611",
      "contactType": "customer support",
      "availableLanguage": "English",
      "contactOption": "TollFree"
    }
  }
}

ARTICLE SCHEMA (for blog/KB/guide/real interview pages):
jsonLd: {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    // use "BlogPosting" for blog, "TechArticle" for KB/guide
    "headline": "[page H1 text]",
    "description": "[page metaDesc]",
    "url": "https://pharmajobsupport.com/[slug]/",
    "datePublished": "[publishDate in ISO 8601: 2026-05-01]",
    "dateModified": "[lastModified in ISO 8601]",
    "author": {
      "@type": "Organization",
      "name": "Pharma Job Support",
      "url": "https://pharmajobsupport.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Pharma Job Support",
      "logo": {
        "@type": "ImageObject",
        "url": "https://pharmajobsupport.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://pharmajobsupport.com/[slug]/"
    }
  }
}

WEBPAGE SCHEMA (for pain/situation pages):
jsonLd: {
  webpage: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "[page H1]",
    "description": "[page metaDesc]",
    "url": "https://pharmajobsupport.com/[slug]/",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Pharma Job Support",
      "url": "https://pharmajobsupport.com"
    }
  }
}

FAQPAGE SCHEMA (every page — built from the page faqs array):
jsonLd: {
  faqPage: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "[faq[0].q]",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "[faq[0].a]"
        }
      },
      {
        "@type": "Question",
        "name": "[faq[1].q]",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "[faq[1].a]"
        }
      }
      // ... one entry per faq item
    ]
  }
}

BREADCRUMBLIST SCHEMA (every page — built from page position):
jsonLd: {
  breadcrumbList: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://pharmajobsupport.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "[Service Hub Name]",
        "item": "https://pharmajobsupport.com/[hub-slug]/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "[Page Name]",
        "item": "https://pharmajobsupport.com/[page-slug]/"
      }
    ]
  }
}
// City pages have 4 levels: Home > Hub > Country > City
// Domain pages have 3 levels: Home > Hub > Domain
// Cross pages have 4 levels: Home > Hub > Domain > Country

════════════════════════════════════════════════════════════
JSON-LD RULE 4 — REAL DATA EXAMPLE (copy this pattern exactly)
════════════════════════════════════════════════════════════

Here is a complete real example for one country entry
in pharma-proxy-job-support-countries-batch-01.ts:

export const jobSupportCountriesBatch01: JobSupportCountryEntry[] = [
  {
    slug: "pharma-proxy-job-support-usa",
    country: "USA",
    countryFull: "United States",
    metaTitle: "Pharma Proxy Job Support USA | Real-Time Help",
    metaDesc: "Stuck in your pharma job in the USA? Get real-time pharma proxy job support for clinical SAS, CSV validation, regulatory, Veeva, and more. WhatsApp: +91-9660834611",
    h1: "Pharma Proxy Job Support in the USA",
    heroIntro: "...",
    pharmaAngle: "...",
    localRoleMix: ["..."],
    faqs: [
      { q: "...", a: "..." }
    ],
    relatedSlugs: ["..."],
    jsonLd: {
      service: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Pharma Proxy Job Support in the USA",
        "provider": {
          "@type": "Organization",
          "name": "Pharma Job Support",
          "url": "https://pharmajobsupport.com"
        },
        "serviceType": "Pharma Proxy Job Support",
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "description": "Stuck in your pharma job in the USA? Get real-time pharma proxy job support for clinical SAS, CSV validation, regulatory, Veeva, and more.",
        "url": "https://pharmajobsupport.com/pharma-proxy-job-support-usa/",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9660834611",
          "contactType": "customer support",
          "availableLanguage": "English"
        }
      },
      faqPage: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does pharma proxy job support work in the USA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You message us on WhatsApp with your domain and the specific task you are stuck on. We match you with a pharma expert in that domain who has worked in US-based CROs or pharma companies. You work through the task together via WhatsApp, call, or screen share."
            }
          }
        ]
      },
      breadcrumbList: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://pharmajobsupport.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Pharma Proxy Job Support",
            "item": "https://pharmajobsupport.com/pharma-proxy-job-support/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "USA",
            "item": "https://pharmajobsupport.com/pharma-proxy-job-support-usa/"
          }
        ]
      }
    }
  }
]

════════════════════════════════════════════════════════════
JSON-LD RULE 5 — HOW ASTRO PAGES INJECT THE SCHEMA
════════════════════════════════════════════════════════════

In every Astro page template, inject JSON-LD like this:

In the frontmatter:
  const { entry } = Astro.props
  const { jsonLd } = entry

In the <head> via SEOHead or StructuredData component:
  {jsonLd.service && (
    <script type="application/ld+json" set:html={JSON.stringify(jsonLd.service)} />
  )}
  {jsonLd.article && (
    <script type="application/ld+json" set:html={JSON.stringify(jsonLd.article)} />
  )}
  {jsonLd.webpage && (
    <script type="application/ld+json" set:html={JSON.stringify(jsonLd.webpage)} />
  )}
  <script type="application/ld+json" set:html={JSON.stringify(jsonLd.faqPage)} />
  <script type="application/ld+json" set:html={JSON.stringify(jsonLd.breadcrumbList)} />

Do not hardcode JSON-LD in templates.
Always read it from the data entry's jsonLd field.
This keeps schema in sync with content automatically.

════════════════════════════════════════════════════════════
JSON-LD RULE 6 — HOMEPAGE SCHEMAS (hardcoded in index.astro)
════════════════════════════════════════════════════════════

Homepage has no data entry. Its JSON-LD is hardcoded directly.
Write these 4 blocks into index.astro <head>:

Block 1 — Organization:
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Pharma Job Support",
  "url": "https://pharmajobsupport.com",
  "logo": "https://pharmajobsupport.com/logo.png",
  "description": "Pharma proxy job support, pharma proxy interview support, and profile engineering for clinical research, medical device, and life sciences professionals globally.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9660834611",
    "contactType": "customer support",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://wa.me/919660834611"
  ]
}

Block 2 — WebSite with SearchAction:
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Pharma Job Support",
  "url": "https://pharmajobsupport.com",
  "description": "Pharma proxy job support and pharma proxy interview support platform for clinical research, medical device, and life sciences professionals.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://pharmajobsupport.com/?s={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}

Block 3 — ItemList of 3 services:
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Pharma Proxy Support Services",
  "description": "Three core proxy support services for pharma professionals at every career stage.",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Pharma Proxy Job Support",
      "url": "https://pharmajobsupport.com/pharma-proxy-job-support/",
      "description": "Real-time live job support for working pharma professionals stuck on complex regulated tasks."
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Pharma Proxy Interview Support",
      "url": "https://pharmajobsupport.com/pharma-proxy-interview/",
      "description": "Domain-specific proxy interview preparation and real-time guidance for pharma interview candidates."
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Pharma Profile Engineering",
      "url": "https://pharmajobsupport.com/pharma-profile-engineering/",
      "description": "Profile engineering to help pharma candidates get interview calls through CV positioning and LinkedIn optimization."
    }
  ]
}

Block 4 — FAQPage (homepage FAQ):
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is pharma proxy job support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pharma proxy job support is real-time live guidance provided by a domain expert who walks you through your actual pharma job tasks step by step. It covers clinical SAS, CSV validation, regulatory submissions, Veeva Vault, CAPA, QMS, medical device documentation, and 15+ other pharma domains."
      }
    },
    {
      "@type": "Question",
      "name": "What is pharma proxy interview support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pharma proxy interview support is real-time domain-specific preparation for your upcoming pharma interview. It includes mock sessions, real technical Q&A for your domain, and live guidance so you are ready for exactly what the interviewer will ask."
      }
    },
    {
      "@type": "Question",
      "name": "Who is pharma proxy support for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pharma proxy support is for three types of candidates: freshers and certified professionals who are not getting interview calls, candidates with pharma interviews coming up who need preparation, and working professionals already in pharma jobs who need live support on complex regulated tasks."
      }
    },
    {
      "@type": "Question",
      "name": "What pharma domains do you cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We cover Clinical SAS, CSV Validation, Regulatory Affairs, Pharmacovigilance, Veeva Vault, Medical Device QA, Clinical Data Management, Pharma AI and GenAI, QA and QMS, RPA in Pharma, Cloud and DevOps in Pharma, Pharma BI and Analytics, SAP in Pharma, Pharma Business Analysis, Medical Writing, GRC and Compliance, Clinical Research, and GMP Manufacturing."
      }
    },
    {
      "@type": "Question",
      "name": "How does a pharma proxy support session work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Message us on WhatsApp at +91-9660834611 with your domain and situation. We match you with a pharma domain expert. You work through your task or interview prep together via WhatsApp, call, or screen share. Most sessions happen same-day."
      }
    }
  ]
}

════════════════════════════════════════════════════════════
JSON-LD RULE 7 — TOKEN BUDGET FOR JSON-LD IN DATA FILES
════════════════════════════════════════════════════════════

JSON-LD adds approximately 200-400 tokens per entry.
At 10 entries per file with JSON-LD = ~400-800 extra tokens.
This is still within the safe range at 10 entries max.

If you sense a file is getting too large due to JSON-LD:
  Reduce entries from 10 to 7 for that file.
  Split into smaller batches.
  Never skip JSON-LD to save tokens — it is required.

Priority order if you must choose:
  1. Write the data file with truncated JSON-LD (2 FAQ items minimum)
  2. Write a companion file [filename]-jsonld.ts with full schemas
  3. The index file merges both

════════════════════════════════════════════════════════════
JSON-LD RULE 8 — DO NOT REPEAT SCHEMA IN TEMPLATES
════════════════════════════════════════════════════════════

Templates must NOT contain any hardcoded JSON-LD.
Templates only read from entry.jsonLd and inject.
All schema content lives in data files only.
This is the single source of truth for all structured data.

Exception: index.astro homepage schemas are hardcoded
directly because homepage has no data file entry.

════════════════════════════════════════════════════════════
NOW APPLY ALL RULES AND CONTINUE BUILDING
════════════════════════════════════════════════════════════

Combined rules in effect:
  ✓ One file at a time — write to disk — confirm — move on
  ✓ Max 10 entries per data file — split everything larger
  ✓ Never buffer in memory — never display before writing
  ✓ Every entry includes jsonLd field with service/article/faqPage/breadcrumbList
  ✓ Index files are import-only — lightweight — no content
  ✓ After every 5 files: dir src\data\ to confirm saves
  ✓ On API error: check disk, resume from last saved file
  ✓ _progress.txt updated after every 5 files
  ✓ Homepage JSON-LD hardcoded in index.astro (4 blocks)
  ✓ All other JSON-LD lives in data entries only

Run dir /s /b src\ now.
Find the last complete file.
Continue from the next missing file.
One file. JSON-LD included. Disk. Confirm. Next.