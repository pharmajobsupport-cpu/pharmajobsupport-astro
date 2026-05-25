import { site } from '../data/site';

export interface SEOMeta {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  robots?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  publishDate?: string;
  modifiedDate?: string;
}

export function buildSEO(input: {
  title: string;
  description: string;
  slug?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  publishDate?: string;
  modifiedDate?: string;
  robots?: string;
}): SEOMeta {
  const canonical = input.slug
    ? `${site.url}/${input.slug.replace(/^\/|\/$/g, '')}/`
    : site.url + '/';

  return {
    title: input.title,
    description: input.description,
    canonical,
    ogTitle: input.title,
    ogDescription: input.description,
    ogImage: input.ogImage ?? site.ogImage,
    ogType: input.ogType ?? 'website',
    robots: input.robots ?? 'index, follow',
    twitterCard: 'summary_large_image',
    publishDate: input.publishDate,
    modifiedDate: input.modifiedDate,
  };
}

/** Truncate a string to a max length at word boundary */
export function truncate(str: string, max: number): string {
  if (str.length <= max) return str;
  return str.slice(0, max).replace(/\s+\S*$/, '') + '…';
}
