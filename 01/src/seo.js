import { useEffect } from 'react';

export const SITE_URL = 'https://www.nikhilrathour.in';
export const SITE_NAME = 'Nikhil Rathour | Full Stack Developer';
export const DEFAULT_DESCRIPTION =
  'Nikhil Rathour is a Full Stack Developer in Ahmedabad, India building React, Node.js, Python, and AI-powered web applications.';
export const SOCIAL_IMAGE = `${SITE_URL}/social-preview.svg`;

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: 'Nikhil Rathour',
  url: `${SITE_URL}/`,
  jobTitle: 'Full Stack Developer',
  email: 'rathournikhil045@gmail.com',
  sameAs: [
    'https://github.com/nikhil-rathour',
    'https://www.linkedin.com/in/nikhil-rathour',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Nikhil Rathour Portfolio',
  url: `${SITE_URL}/`,
  author: { '@id': `${SITE_URL}/#person` },
};

function upsertMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

export function Seo({ title, description = DEFAULT_DESCRIPTION, path = '/', type = 'website', noIndex = false, schema = [] }) {
  const canonical = `${SITE_URL}${path === '/' ? '/' : path}`;

  useEffect(() => {
    document.title = title;
    document.documentElement.lang = 'en';

    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow');
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:image', SOCIAL_IMAGE);
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', SOCIAL_IMAGE);

    const scripts = [personSchema, websiteSchema, ...schema].map((item, index) => ({
      ...item,
      '@id': item['@id'] || `${canonical}#schema-${index}`,
    }));
    let schemaScript = document.getElementById('page-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'page-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(scripts);
  }, [canonical, description, noIndex, schema, title, type]);

  return null;
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
