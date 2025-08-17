import icons from '@/icons';

interface ProjectCardProps extends Project {}

export default function ProjectCard({
  title,
  description,
  image,
  techStack,
  githubUrl,
  learnMoreUrl,
}: ProjectCardProps) {
  return (
    <div className="bg-[#282C34] border border-[#ABB2BF]/20 overflow-hidden hover:border-[#C778DD]/50 transition-all duration-300 group w-90 h-110 flex flex-col">
      {/* Project Image */}
      <div className="relative overflow-hidden flex-shrink-0">
        <img
          src={image.src}
          alt={`${title} screenshot`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-white text-xl font-bold mb-3 group-hover:text-[#C778DD] transition-colors duration-300">
          {title}
        </h3>
        
        {/* Tech Stack */}
        <div className="mb-4">
          <p className="text-[#ABB2BF] text-sm font-normal">{techStack.join(', ')}</p>
        </div>

        {/* Break Line */}
        <div className="w-full h-px bg-[#ABB2BF]/20 mb-4"></div>

        {/* Description */}
        <p className="text-[#ABB2BF] text-sm leading-relaxed mb-6 flex-grow">{description}</p>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <a
            href={githubUrl || '#projects'}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-[#C778DD] bg-[#C778DD] text-[#282C34] text-sm font-medium flex items-center gap-2"
          >
            <span>{githubUrl ? 'Code' : 'Coming Soon'}</span>
            <img src={icons.githubColor.src} alt="GitHub" className="w-4 h-4" />
          </a>

          {learnMoreUrl && (
            <a
              href={learnMoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-[#ABB2BF] text-[#ABB2BF] text-sm font-medium hover:bg-[#ABB2BF] hover:text-[#282C34] transition-all duration-300 flex items-center gap-2"
            >
              <span>Learn More</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
