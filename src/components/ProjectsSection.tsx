import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import { projects } from '../constants/projects';

export default function ProjectsSection() {
  return (
    <section className="mt-16">
      {/* Section Title */}
      <div className="mb-12">
        <SectionTitle title="projects" />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      {/* View All Projects Link */}
      <div className="flex justify-center mt-12">
        <a
          href="#all-projects"
          className="text-[#C778DD] text-lg font-medium hover:underline transition-all duration-300 flex items-center gap-2"
        >
          View all projects
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
