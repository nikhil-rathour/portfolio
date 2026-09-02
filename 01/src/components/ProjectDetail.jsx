import { Link, useParams } from 'react-router-dom';
import { projectBySlug } from '../projectData';
import { Seo, SITE_URL, breadcrumbSchema } from '../seo';
import NotFound from './NotFound';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectBySlug(slug);
  if (!project) return <NotFound />;

  const path = `/projects/${project.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: `${SITE_URL}${path}`,
    author: { '@type': 'Person', name: 'Nikhil Rathour' },
    programmingLanguage: project.technologies,
    sameAs: [project.githubUrl, project.liveUrl].filter(Boolean),
  };

  return (
    <div className="text-white">
      <Seo title={`${project.title} | Nikhil Rathour`} description={project.description} path={path} type="article" schema={[schema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Projects', path: '/projects' }, { name: project.title, path }])]} />
      <article className="container mx-auto max-w-5xl px-6 py-28 md:py-32">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-400"><Link className="hover:text-cyan-300" to="/">Home</Link> <span aria-hidden="true">/</span> <Link className="hover:text-cyan-300" to="/projects">Projects</Link> <span aria-hidden="true">/</span> <span>{project.title}</span></nav>
        <header className="mb-14 rounded-3xl border border-cyan-400/20 bg-gray-900/30 p-8 backdrop-blur-sm md:p-12">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">Full Stack Project</p>
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">{project.title}</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-gray-300">{project.detail}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && <a className="rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-gray-950 transition hover:bg-cyan-300" href={project.liveUrl} target="_blank" rel="noopener noreferrer">View live project</a>}
            {project.githubUrl && <a className="rounded-lg border border-gray-600 px-5 py-3 font-semibold text-gray-100 transition hover:bg-white/10" href={project.githubUrl} target="_blank" rel="noopener noreferrer">View source on GitHub</a>}
          </div>
        </header>
        <div className="grid gap-8 md:grid-cols-2">
          <section className="rounded-2xl border border-gray-700/70 bg-gray-900/20 p-7"><h2 className="mb-3 text-2xl font-bold text-cyan-300">Problem addressed</h2><p className="leading-relaxed text-gray-300">{project.problem}</p></section>
          <section className="rounded-2xl border border-gray-700/70 bg-gray-900/20 p-7"><h2 className="mb-3 text-2xl font-bold text-cyan-300">My role</h2><p className="leading-relaxed text-gray-300">{project.role}</p></section>
          <section className="rounded-2xl border border-gray-700/70 bg-gray-900/20 p-7"><h2 className="mb-3 text-2xl font-bold text-cyan-300">Main features</h2><ul className="list-inside list-disc space-y-2 text-gray-300">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></section>
          <section className="rounded-2xl border border-gray-700/70 bg-gray-900/20 p-7"><h2 className="mb-3 text-2xl font-bold text-cyan-300">Technology stack</h2><ul className="flex flex-wrap gap-2">{project.technologies.map((technology) => <li key={technology} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">{technology}</li>)}</ul></section>
        </div>
        <p className="mt-10 text-center text-gray-400"><Link to="/projects" className="text-cyan-300 hover:text-cyan-200">Explore all full-stack projects</Link> or <Link to="/contact" className="text-cyan-300 hover:text-cyan-200">contact Nikhil for collaboration</Link>.</p>
      </article>
    </div>
  );
};

export default ProjectDetail;
