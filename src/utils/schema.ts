import { site } from '../data/site';

// ─── Organization + WebSite (homepage) ──────────────────
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        logo: {
          '@type': 'ImageObject',
          url: `${site.url}/logo.png`,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: site.whatsapp,
          contactType: 'customer support',
          availableLanguage: 'English',
        },
        sameAs: Object.values(site.social).filter(Boolean),
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: { '@id': `${site.url}/#organization` },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${site.url}/search?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };
}

// ─── Service Schema ──────────────────────────────────────
export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  category?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      '@type': 'Organization',
      '@id': `${site.url}/#organization`,
      name: site.name,
    },
    serviceType: opts.category ?? 'Professional Job Support',
    areaServed: 'Worldwide',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: site.whatsappLink,
      servicePhone: site.whatsapp,
    },
  };
}

// ─── FAQPage Schema ──────────────────────────────────────
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// ─── BreadcrumbList Schema ───────────────────────────────
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── Article Schema ──────────────────────────────────────
export function articleSchema(opts: {
  title: string;
  description: string;
  url: string;
  publishDate: string;
  modifiedDate?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    image: opts.image ?? `${site.url}${site.ogImage}`,
    datePublished: opts.publishDate,
    dateModified: opts.modifiedDate ?? opts.publishDate,
    author: {
      '@type': 'Organization',
      '@id': `${site.url}/#organization`,
      name: site.name,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${site.url}/#organization`,
      name: site.name,
      logo: {
        '@type': 'ImageObject',
        url: `${site.url}/logo.png`,
      },
    },
  };
}

// ─── CollectionPage Schema ───────────────────────────────
export function collectionPageSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    publisher: {
      '@type': 'Organization',
      '@id': `${site.url}/#organization`,
      name: site.name,
    },
  };
}

/** Serialize a schema object to a JSON string for use in <script type="application/ld+json"> */
export function toJsonLd(schema: object): string {
  return JSON.stringify(schema, null, 2);
}

// ─── Alias exports for template compatibility ────────────
export const buildOrganizationSchema = organizationSchema;

export function buildServiceSchema(service: { title: string; metaDesc: string; slug: string; category: string }) {
  return serviceSchema({
    name: service.title,
    description: service.metaDesc,
    url: `${site.url}/${service.slug}/`,
    category: service.category,
  });
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return faqSchema(faqs);
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return breadcrumbSchema(items);
}

export function buildArticleSchema(
  title: string,
  description: string,
  url: string,
  publishDate?: string,
  modifiedDate?: string,
) {
  return articleSchema({
    title,
    description,
    url,
    publishDate: publishDate ?? new Date().toISOString().split('T')[0],
    modifiedDate,
  });
}
