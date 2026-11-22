import SectionHead from "./SectionHead.jsx";
import { WORK } from "../data.js";

export default function Work() {
  return (
    <section className="section section-alt" id="work">
      <div className="container">
        <SectionHead eyebrow="Our work" title="Things we've built">
          A selection of products and projects, from agriculture to enterprise software.
        </SectionHead>
        <div className="work-grid">
          {WORK.map((w, i) => (
            <article key={w.title} className="work-card">
              <div className={`work-art art-${i % 4}`} aria-hidden="true" />
              <div className="work-body">
                <span className="work-tag">{w.tag}</span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
                <ul className="chips">
                  {w.stack.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
