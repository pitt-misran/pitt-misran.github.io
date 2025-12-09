import SectionTitle from './SectionTitle';
import WorkExperienceCard from './WorkExperienceCard';
import { workExperiences } from '../constants/work';

export default function WorkSection() {
  return (
    <section className="mt-16">
      {/* Section Title */}
      <div className="mb-12">
        <SectionTitle title="work" />
      </div>

      {/* Work Experience Cards */}
      <div className="space-y-6">
        {workExperiences.map((experience) => (
          <WorkExperienceCard key={experience.id} {...experience} />
        ))}
      </div>
    </section>
  );
}
