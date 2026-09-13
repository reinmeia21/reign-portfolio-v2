import Hero from "../components/Hero.jsx";
import projects from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Home() {
  const featured = projects.slice(0, 2);

  return (
    <>
      <Hero />
      <section className="section container">
        <h2 className="section-title">A couple of ideas that became things</h2>
        <p className="section-intro">Two recent builds — the full list, with the story behind each, is on the Projects page.</p>
        <div className="projects-grid">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
