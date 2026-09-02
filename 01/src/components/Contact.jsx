import { Seo, breadcrumbSchema } from '../seo';

const Contact = () => (
  <div className="text-white">
    <Seo
      title="Contact Nikhil Rathour | Full Stack Developer in Ahmedabad"
      description="Contact Nikhil Rathour, a Full Stack Developer in Ahmedabad, India, for internships, freelance web development, and collaboration opportunities."
      path="/contact"
      schema={[breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])]} 
    />
    <section className="container mx-auto max-w-4xl px-6 py-32">
      <div className="rounded-3xl border border-cyan-400/20 bg-gray-900/30 p-8 text-center backdrop-blur-sm md:p-14">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">Let&apos;s connect</p>
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">Contact Nikhil Rathour</h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300">
          I&apos;m a Full Stack Developer in Ahmedabad, Gujarat, India. Reach out for internships, freelance web development, or collaboration on thoughtful product ideas.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-gray-950 transition hover:bg-cyan-300" href="mailto:rathournikhil045@gmail.com">Email Nikhil</a>
          <a className="rounded-lg border border-cyan-400 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400/10" href="https://www.linkedin.com/in/nikhil-rathour" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
          <a className="rounded-lg border border-gray-600 px-6 py-3 font-semibold text-gray-200 transition hover:bg-white/10" href="https://github.com/nikhil-rathour" target="_blank" rel="noopener noreferrer">View GitHub</a>
        </div>
      </div>
    </section>
  </div>
);

export default Contact;
