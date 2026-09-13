import { useState } from "react";
import portfolio from "../data/portfolio.js";

const initialForm = { name: "", email: "", reason: "Say hi", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message: ${form.reason}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nReason: ${form.reason}\n\n${form.message}`
    );
    window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm(initialForm);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" value={form.name} onChange={handleChange} required />
      </div>

      <div className="form-field">
        <label htmlFor="email">Your email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
      </div>

      <div className="form-field">
        <label htmlFor="reason">Why you're reaching out</label>
        <select id="reason" name="reason" value={form.reason} onChange={handleChange}>
          <option>Say hi</option>
          <option>OJT / internship opportunity</option>
          <option>Collaborate on a project</option>
          <option>Speak at or invite to an event</option>
          <option>Something else</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" value={form.message} onChange={handleChange} required />
      </div>

      <button type="submit" className="btn btn--primary">Send message</button>

      {sent && (
        <p className="contact-confirm">✓ Your email app is opening now — send it from there!</p>
      )}

      <p className="contact-note">
        No backend here, so this opens your email client instead. Honest and direct. 💌
      </p>
    </form>
  );
}
