import { useState } from "react";
import SectionHead from "./SectionHead.jsx";
import Icon from "./Icon.jsx";
import { CONTACT } from "../data.js";

// No backend: the form opens the visitor's email app with the enquiry pre-filled.
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", type: "Web application", message: "" });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = `Project enquiry: ${form.type}${form.company ? ` (${form.company})` : ""}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nProject type: ${form.type}\n\n${form.message}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="section" id="contact">
      <div className="container two-col contact">
        <div>
          <SectionHead eyebrow="Get in touch" title="Let's build something together">
            Tell us a bit about your project. We'll get back to you within one working day with
            next steps, with no obligation and no hard sell.
          </SectionHead>
          <ul className="contact-list">
            <li><Icon name="mail" size={20} /><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li><Icon name="pin" size={20} /><span>{CONTACT.location}</span></li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <div className="field-row">
            <label>Name<input name="name" required value={form.name} onChange={update} autoComplete="name" /></label>
            <label>Email<input name="email" type="email" required value={form.email} onChange={update} autoComplete="email" /></label>
          </div>
          <div className="field-row">
            <label>Company <span className="opt">(optional)</span><input name="company" value={form.company} onChange={update} autoComplete="organization" /></label>
            <label>Project type
              <select name="type" value={form.type} onChange={update}>
                <option>Web application</option>
                <option>Dashboard / reporting</option>
                <option>AI / computer vision</option>
                <option>Integration / API</option>
                <option>Business website</option>
                <option>Something else</option>
              </select>
            </label>
          </div>
          <label>About your project<textarea name="message" rows="5" required value={form.message} onChange={update} placeholder="What are you trying to achieve?" /></label>
          <button type="submit" className="btn btn-primary">Send enquiry <Icon name="arrow" size={18} /></button>
        </form>
      </div>
    </section>
  );
}
