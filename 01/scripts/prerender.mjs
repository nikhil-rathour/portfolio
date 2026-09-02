import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { projects } from '../src/projectData.js';

const siteUrl = 'https://www.nikhilrathour.in';
const socialImage = `${siteUrl}/social-preview.svg`;
const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteUrl}/#person`,
  name: 'Nikhil Rathour',
  jobTitle: 'Full Stack Developer',
  url: `${siteUrl}/`,
  email: 'rathournikhil045@gmail.com',
  sameAs: ['https://github.com/nikhil-rathour', 'https://www.linkedin.com/in/nikhil-rathour'],
  address: { '@type': 'PostalAddress', addressLocality: 'Ahmedabad', addressRegion: 'Gujarat', addressCountry: 'IN' },
};
const website = { '@context': 'https://schema.org', '@type': 'WebSite', name: 'Nikhil Rathour Portfolio', url: `${siteUrl}/`, author: { '@id': `${siteUrl}/#person` } };
const breadcrumbs = (items) => ({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: `${siteUrl}${item.path}` })) });
const pages = [
  { path: '/', title: 'Nikhil Rathour | Full Stack Developer & Software Engineer', description: 'Nikhil Rathour is a Full Stack Developer in Ahmedabad, India building React, Node.js, Python, and AI-powered web applications.', schema: [{ '@context': 'https://schema.org', '@type': 'ProfilePage', url: `${siteUrl}/`, mainEntity: { '@id': `${siteUrl}/#person` }, name: 'Nikhil Rathour | Full Stack Developer' }] },
  { path: '/about', title: 'About Nikhil Rathour | Full Stack Developer in Ahmedabad', description: 'Learn about Nikhil Rathour, a Full Stack Developer in Ahmedabad with experience in React, Node.js, Python, REST APIs, PostgreSQL, and AI-driven features.' },
  { path: '/projects', title: 'Full Stack Projects | Nikhil Rathour', description: 'Explore full-stack, React, Node.js, Python, Next.js, and AI projects by Nikhil Rathour, a developer in Ahmedabad, India.' },
  { path: '/contact', title: 'Contact Nikhil Rathour | Full Stack Developer in Ahmedabad', description: 'Contact Nikhil Rathour, a Full Stack Developer in Ahmedabad, India, for internships, freelance web development, and collaboration opportunities.' },
  ...projects.map((project) => ({ path: `/projects/${project.slug}`, title: `${project.title} | Nikhil Rathour`, description: project.description, type: 'article', schema: [{ '@context': 'https://schema.org', '@type': 'CreativeWork', name: project.title, description: project.description, url: `${siteUrl}/projects/${project.slug}`, author: { '@type': 'Person', name: 'Nikhil Rathour' }, programmingLanguage: project.technologies, sameAs: [project.githubUrl, project.liveUrl].filter(Boolean) }] })),
];

const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const documentFor = (template, page) => {
  const canonical = `${siteUrl}${page.path}`;
  const trail = page.path === '/' ? [{ name: 'Home', path: '/' }] : [{ name: 'Home', path: '/' }, ...page.path.split('/').filter(Boolean).map((segment, index, parts) => ({ name: index === parts.length - 1 ? (page.title.split(' | ')[0]) : 'Projects', path: `/${parts.slice(0, index + 1).join('/')}` }))];
  const schema = JSON.stringify([person, website, ...(page.schema || []), breadcrumbs(trail)]).replaceAll('<', '\\u003c');
  const head = `<title>${escapeHtml(page.title)}</title><meta name="description" content="${escapeHtml(page.description)}"><meta name="robots" content="index, follow"><link rel="canonical" href="${canonical}"><meta property="og:title" content="${escapeHtml(page.title)}"><meta property="og:description" content="${escapeHtml(page.description)}"><meta property="og:type" content="${page.type || 'website'}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${socialImage}"><meta property="og:site_name" content="Nikhil Rathour | Full Stack Developer"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${escapeHtml(page.title)}"><meta name="twitter:description" content="${escapeHtml(page.description)}"><meta name="twitter:image" content="${socialImage}"><script id="page-schema" type="application/ld+json">${schema}</script>`;
  return template.replace(/<title>[\s\S]*?<\/title>/, head).replace(/<meta name="description"[\s\S]*?<title>/, `<title>`);
};

const dist = join(process.cwd(), 'dist');
const template = await readFile(join(dist, 'index.html'), 'utf8');
for (const page of pages) {
  const html = documentFor(template, page);
  const outputPaths = page.path === '/'
    ? [join(dist, 'index.html')]
    : [join(dist, page.path.slice(1), 'index.html'), join(dist, `${page.path.slice(1)}.html`)];
  for (const outputPath of outputPaths) {
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html);
  }
}
