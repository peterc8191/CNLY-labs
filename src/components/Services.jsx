import SectionHead from "./SectionHead.jsx";
import Icon from "./Icon.jsx";
import { SERVICES } from "../data.js";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHead eyebrow="What we do" title="Software built around how you work">
          From a single internal tool to a full customer platform, we handle design, development,
          hosting and support.
        </SectionHead>
        <div className="card-grid">
          {SERVICES.map((s) => (
            <article key={s.title} className="service-card">
              <div className="service-icon"><Icon name={s.icon} size={26} /></div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
