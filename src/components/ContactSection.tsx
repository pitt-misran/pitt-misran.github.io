import SectionTitle from './SectionTitle';

export default function ContactSection() {
  return (
    <section className="mt-16 w-full">
      {/* Section Title */}
      <div className="mb-12">
        <SectionTitle title="contact" />
      </div>

      {/* Contact Content */}
      <div className="flex flex-col items-center justify-center text-center py-12">
        <p className="text-[#ABB2BF] text-lg mb-6 max-w-2xl">
          Want to build something cool together? Looking to hire or just connect? Drop me a line.
        </p>

        <a
          href="mailto:mohammed.misran@pitt.edu"
          className="text-[#C778DD] text-xl font-medium hover:underline transition-all duration-300 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          mohammed.misran@pitt.edu
        </a>
      </div>
    </section>
  );
}
