import SectionTitle from '@/components/SectionTitle';
import RecentTechnologies from '@/components/RecentTechnologies';

export default function AboutMeSection() {
  return (
    <section className="mt-16">
      {/* Section Title */}
      <div className="mb-12">
        <SectionTitle title="about-me" />
      </div>

      {/* About Me Description */}
      <div className="mb-8 text-left">
        <p className="text-[#ABB2BF] text-base leading-relaxed">
          Innovative <span className="text-[#C778DD] font-bold">Software Engineer with 2+ years of experience</span>{' '}
          turning AWS into a competitive advantage &mdash; specializing in{' '}
          <span className="text-[#C778DD] font-bold">Serverless Applications</span>,{' '}
          <span className="text-[#C778DD] font-bold">Microservices</span>, and{' '}
          <span className="text-[#C778DD] font-bold">Agentic Workflows</span>.
        </p>
        <p className="text-[#ABB2BF] text-base leading-relaxed mt-4">
          I fuse deep cloud expertise with product mindset to architect scalable, AI-powered customer experiences that
          drive measurable business impact. Known for leading from the front, I bridge engineering and business to
          deliver solutions that not only work flawlessly but delight customers and solve their toughest challenges.
        </p>
        <p className="text-[#ABB2BF] text-base leading-relaxed mt-4">
          <span className="text-[#C778DD] font-bold">Two-time Drummer Award winner at Kickdrum</span> &mdash; the
          company's most prestigious honor, recognizing exceptional impact, leadership, and innovation.
        </p>
      </div>

      {/* Recent Technologies */}
      <RecentTechnologies />
    </section>
  );
}
