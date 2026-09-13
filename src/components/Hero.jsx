import { useState } from "react";
import { Link } from "react-router-dom";
import portfolio from "../data/portfolio.js";
import headshot from "../assets/profile/headshot-transparent.png";

export default function Hero() {
  const [ideaOn, setIdeaOn] = useState(false);

  return (
    <section className="hero">
      <div className="hero__headshot-container">
        <img
          src={headshot}
          alt={portfolio.name}
          className={`hero__headshot${ideaOn ? " is-on" : ""}`}
        />
        <div className={`hero__glow${ideaOn ? " is-on" : ""}`} aria-hidden="true" />
      </div>

      <div className="hero__text">
        <div className="hero__name-section">
          <h1 className="hero__name">{portfolio.name}</h1>
          <p className="hero__subtitle">{portfolio.role}</p>
        </div>

        <p className="hero__line">{portfolio.heroLine}</p>

        <div className="hero__cta">
          <Link to="/projects" className="btn btn--primary">
            See what I built ↗
          </Link>
          <Link to="/about" className="btn btn--ghost">
            Who I am beyond code
          </Link>
        </div>

        <button
          className="hero__bulb-btn"
          onClick={() => setIdeaOn((v) => !v)}
          aria-pressed={ideaOn}
          aria-label={ideaOn ? "Turn off" : "Turn on"}
        >
          <svg
            className={`bulb-icon${ideaOn ? " is-on" : ""}`}
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 8C20 8 12 16 12 26c0 8 4 13 7 16.5 1.5 1.8 2.5 4 2.8 6.5h16.4c.3-2.5 1.3-4.7 2.8-6.5C44 39 48 34 48 26 48 16 40 8 30 8Z"
              fill={ideaOn ? "url(#bulbGradient)" : "#e5dccf"}
              stroke="#1e2a38"
              strokeWidth="1.5"
            />
            <rect x="22" y="47" width="16" height="4" rx="1" fill="#1e2a38" />
            <rect x="24" y="53" width="12" height="3" rx="1" fill="#1e2a38" />
            <defs>
              <radialGradient id="bulbGradient" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#fffaed" />
                <stop offset="100%" stopColor="#f2a93b" />
              </radialGradient>
            </defs>
          </svg>
        </button>
      </div>
    </section>
  );
}
