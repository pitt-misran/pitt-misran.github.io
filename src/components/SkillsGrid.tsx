import { technologies, techLabels } from '@/constants';

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Object.entries(technologies).map(([category, items]) => (
        <div
          key={category}
          className="border border-[#ABB2BF]"
        >
          <h3 className="text-white text-lg font-bold px-4 py-3 border-b border-[#ABB2BF]">
            {techLabels[category as keyof Technologies]}
          </h3>
          <ul className="space-y-1 p-4">
            {items.map((item: string) => (
              <li key={item} className="text-[#ABB2BF] text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
