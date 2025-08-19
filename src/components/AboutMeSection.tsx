import SectionTitle from '@/components/SectionTitle';
import { recentTechnologies } from '@/constants';

export default function AboutMeSection() {
  return (
    <>
      <SectionTitle title="about-me" />
      <div className="mt-8 mb-16">
        {/* About Me Description */}
        <div className="mb-8 text-justify">
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
            company's most prestigious honor&mdash;recognizing exceptional impact, leadership, and innovation.
          </p>
        </div>

        {/* Recent Technologies */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Recently working with:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {recentTechnologies.map((tech) => (
              <ul className="text-[#ABB2BF] space-y-1">
                {tech.map((t) => (
                  <li className="flex items-center">
                    <span className="text-[#C778DD] mr-2">•</span>
                    {t}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
