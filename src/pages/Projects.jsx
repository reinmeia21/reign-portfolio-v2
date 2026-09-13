import projects from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";
import ProjectCarousel from "../components/ProjectCarousel.jsx";

export default function Projects() {
  return (
    <section className="section container">
      <h1>Projects</h1>
      <p className="section-intro">Every one of these started as a real constraint, not a personal side project.</p>

      <ProjectCarousel projects={projects} />

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
