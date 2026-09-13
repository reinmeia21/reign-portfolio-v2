import portfolio from "../data/portfolio.js";
import ContactForm from "../components/ContactForm.jsx";

export default function Contact() {
  return (
    <section className="section container">
      <div className="contact-layout">
        <div>
          <h1>Bring me your next idea</h1>
          <p>
            Whether it's an OJT opportunity, a project collaboration, or a community initiative — I'd like to hear about it.
          </p>
          <p className="contact-info">
            <strong>{portfolio.name}</strong><br />
            {portfolio.location}<br />
            <a href={`mailto:${portfolio.email}`}>{portfolio.email}</a><br />
            <a href={portfolio.github} target="_blank" rel="noreferrer">{portfolio.github}</a>
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
