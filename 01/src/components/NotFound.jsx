import { Link } from 'react-router-dom';
import { Seo } from '../seo';

const NotFound = () => (
  <section className="container mx-auto max-w-3xl px-6 py-32 text-center text-white">
    <Seo title="Page Not Found | Nikhil Rathour" path="/404" noIndex />
    <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">404</p>
    <h1 className="mt-4 text-4xl font-bold md:text-6xl">This page does not exist.</h1>
    <p className="mt-6 text-lg text-gray-300">Return to Nikhil Rathour&apos;s portfolio, explore projects, or get in touch.</p>
    <div className="mt-10 flex justify-center gap-4"><Link to="/" className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-gray-950">Go home</Link><Link to="/projects" className="rounded-lg border border-cyan-400 px-6 py-3 font-semibold text-cyan-300">View projects</Link></div>
  </section>
);

export default NotFound;
