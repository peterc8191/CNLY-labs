import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Work from "./components/Work.jsx";
import Process from "./components/Process.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import useReveal from "./hooks/useReveal.js";

export default function App() {
  useReveal(".section-head, .service-card, .work-card, .process-step, .value-card, .stack, .contact-form");

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
