import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";

export default function Projects() {
  return (
    <section className="grid grid-cols-1 gap-3 print:grid-cols-2 print:gap-2 md:grid-cols-2 lg:grid-cols-2">
      {RESUME_DATA.projects.map((project, index) => {
        return (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            stack={project.stack}
            link={project.link}
          />
        );
      })}
    </section>
  );
}
