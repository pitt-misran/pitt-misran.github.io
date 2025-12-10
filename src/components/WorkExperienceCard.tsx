interface WorkExperienceCardProps extends WorkExperience {}

export default function WorkExperienceCard({
  company,
  role,
  period,
  description,
  logo,
  achievements,
}: WorkExperienceCardProps) {
  return (
    <div className="bg-[#282C34] border border-[#ABB2BF]/20 p-6 hover:border-[#C778DD]/50 transition-all duration-300 group">
      {/* Header: Logo, Company, and Period */}
      <div className="flex items-start gap-4 mb-4">
        {/* Company Logo - Small and Compact */}
        <div className="flex-shrink-0">
          <img
            src={logo.src}
            alt={`${company} logo`}
            className="w-12 h-12 object-contain rounded"
          />
        </div>

        {/* Company Info */}
        <div className="flex-grow">
          <h3 className="text-white text-lg font-bold group-hover:text-[#C778DD] transition-colors duration-300">
            {role}
          </h3>
          <p className="text-[#C778DD] text-sm font-medium mt-1">{company}</p>
          <p className="text-[#ABB2BF] text-xs mt-1">{period}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-[#ABB2BF] text-sm leading-relaxed mb-4">{description}</p>

      {/* Achievements */}
      {achievements && achievements.length > 0 && (
        <div className="mt-4">
          <ul className="space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-center gap-2 text-[#ABB2BF] text-sm">
                <span className="text-[#C778DD] flex-shrink-0">&#9642;</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
