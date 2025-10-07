import { recentTechnologies } from '@/constants';

export default function RecentTechnologies() {
  return (
    <div>
      <h3 className="text-white text-lg font-semibold mb-4">Recently working with:</h3>
      {/* Desktop: Grid layout */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {recentTechnologies.map((tech, index) => (
          <ul key={index} className="text-[#ABB2BF] space-y-1">
            {tech.map((t) => (
              <li key={t} className="flex items-center">
                <span className="text-[#C778DD] mr-2">&#10004;</span>
                {t}
              </li>
            ))}
          </ul>
        ))}
      </div>

      {/* Mobile: Single list */}
      <ul className="md:hidden text-[#ABB2BF] space-y-1">
        {recentTechnologies.flat().map((t) => (
          <li key={t} className="flex items-center">
            <span className="text-[#C778DD] mr-2">&#10004;</span>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
