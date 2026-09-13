import { useState } from "react";

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <article className={`project-card${open ? " is-open" : ""}`}>
      <div className="project-card__header">
        <span className="project-card__category">{project.category}</span>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__subtitle">{project.subtitle}</p>
        {project.result && <span className="project-card__result">{project.result}</span>}
      </div>

      <button
        className="project-card__toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {open ? "Hide ▲" : "Story ▼"}
      </button>

      {open && (
        <dl className="project-card__detail">
          <div>
            <dt>The problem</dt>
            <dd>{project.problem}</dd>
          </div>
          <div>
            <dt>The idea</dt>
            <dd>{project.idea}</dd>
          </div>
          <div>
            <dt>What I built</dt>
            <dd>{project.built}</dd>
          </div>
          <div>
            <dt>What I learned</dt>
            <dd>{project.learned}</dd>
          </div>
          <div className="project-card__tech">
            {project.technologies.map((tech) => (
              <span className="tech-pill" key={tech}>{tech}</span>
            ))}
          </div>
        </dl>
      )}
    </article>
  );
}
