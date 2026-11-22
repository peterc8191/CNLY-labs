import Icon from "./Icon.jsx";
import { LogoMark } from "./Logo.jsx";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">Software development studio</span>
          <h1>
            We build software that <span className="grad">moves your business forward.</span>
          </h1>
          <p className="lead">
            CNLY Labs designs and builds custom web applications, dashboards, AI tools and integrations
            for businesses that have outgrown spreadsheets and off-the-shelf software.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Start a project <Icon name="arrow" size={18} />
            </a>
            <a href="#work" className="btn btn-ghost">See our work</a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-mark"><LogoMark size={150} /></div>
          <div className="code-card">
            <div className="code-dots"><i /><i /><i /></div>
            <pre>
<span className="c-k">const</span> project = <span className="c-k">await</span> cnly.<span className="c-f">build</span>({"{"}{"\n"}
{"  "}idea: <span className="c-s">"your next big thing"</span>,{"\n"}
{"  "}stack: [<span className="c-s">"react"</span>, <span className="c-s">"node"</span>, <span className="c-s">"ai"</span>],{"\n"}
{"  "}deliver: <span className="c-s">"on time"</span>,{"\n"}
{"}"});{"\n"}
{"\n"}
project.<span className="c-f">launch</span>(); <span className="c-c">// 🚀</span>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
