import { useState } from "react";

export default function ProjectCarousel({ projects }) {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  const go = (delta) => {
    setIndex((prev) => (prev + delta + projects.length) % projects.length);
  };

  return (
    <div className="carousel">
      <div className="carousel__frame">
        <div className="carousel__glass"></div>
        <div className="carousel__content">
          <div className="carousel__badge">{project.category}</div>
          <h3 className="carousel__title">{project.title}</h3>
          <p className="carousel__subtitle">{project.subtitle}</p>
          <p className="carousel__idea">{project.idea}</p>
          {project.result && <span className="carousel__result">{project.result}</span>}
        </div>
      </div>

      <div className="carousel__controls">
        <button className="carousel__btn" onClick={() => go(-1)}>← Prev</button>
        <span className="carousel__count">{index + 1} / {projects.length}</span>
        <button className="carousel__btn" onClick={() => go(1)}>Next →</button>
      </div>
    </div>
  );
}
