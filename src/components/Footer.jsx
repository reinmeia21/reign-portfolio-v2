import portfolio from "../data/portfolio.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {year} {portfolio.name}. Built with React & love.</span>
        <div className="footer__links">
          <a href={portfolio.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${portfolio.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
