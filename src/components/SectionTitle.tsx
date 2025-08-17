interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="flex items-center">
      <h2 className="text-white text-2xl font-bold mr-4">
        <span className="text-[#C778DD]">#</span>
        {title}
      </h2>
      <div className="flex-1 h-px bg-[#C778DD]"></div>
    </div>
  );
}
