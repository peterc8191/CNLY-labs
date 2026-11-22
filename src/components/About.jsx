import SectionHead from "./SectionHead.jsx";
import { VALUES } from "../data.js";

export default function About() {
  return (
    <section className="section section-alt" id="about">
      <div className="container two-col">
        <div>
          <SectionHead eyebrow="About CNLY Labs" title="A small studio with a big toolkit" />
          <p className="body-lg">
            CNLY Labs is an independent software development studio. We work closely with business
            owners and teams to turn ideas, manual processes and messy data into dependable software.
          </p>
          <p className="body-lg">
            We work right across the stack, from websites and web apps to APIs, data and AI. That means
            one team can take your project from the first conversation to launch and keep supporting it afterwards.
          </p>
        </div>
        <ul className="values">
          {VALUES.map((v) => (
            <li key={v.title} className="value-card">
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
