import Logo from "./Logo.jsx";
import { NAV, CONTACT } from "../data.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <Logo size={32} />
          <p className="footer-tag">Custom software, web apps &amp; AI, built properly.</p>
        </div>
        <nav className="footer-nav">
          {NAV.map((n) => <a key={n.id} href={`#${n.id}`}>{n.label}</a>)}
        </nav>
        <a className="footer-mail" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
      </div>
      <div className="container footer-base">
        © {new Date().getFullYear()} CNLY Labs. All rights reserved.
      </div>
    </footer>
  );
}
