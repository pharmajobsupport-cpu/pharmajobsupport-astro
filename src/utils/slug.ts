/** Convert a string to a URL-safe slug */
export function toSlug(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/** Ensure slug has no leading or trailing slashes */
export function normalizeSlug(slug: string): string {
  return slug.replace(/^\/+|\/+$/g, '');
}

/** Build an absolute URL from a slug */
export function slugToUrl(slug: string, base = 'https://pharmajobsupport.com'): string {
  const clean = normalizeSlug(slug);
  return `${base}/${clean}/`;
}
