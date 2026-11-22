import { useEffect, useState } from "react";
import Logo from "./Logo.jsx";
import { NAV } from "../data.js";
import useActiveSection from "../hooks/useActiveSection.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(NAV.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label="CNLY Labs home" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <button
          className={`menu-toggle${open ? " open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>

        <nav className={`nav${open ? " open" : ""}`}>
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={active === n.id ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary btn-sm" onClick={() => setOpen(false)}>
            Start a project
          </a>
        </nav>
      </div>
    </header>
  );
}
