import SectionHead from "./SectionHead.jsx";
import { PROCESS, STACK } from "../data.js";

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <SectionHead eyebrow="How we work" title="A clear process from idea to launch">
          No black boxes. You know what's being built, when, and what it costs.
        </SectionHead>
        <ol className="process">
          {PROCESS.map((p) => (
            <li key={p.step} className="process-step">
              <span className="step-num">{p.step}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>

        <div className="stack">
          <h3>Technologies we use</h3>
          <ul className="chips chips-lg">
            {STACK.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
