import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Mission from "./components/Mission";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Partners from "./components/Partners";

export default function InovarABALanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Mission />
        <Team />
        <Partners />
        <Contact />
      </main>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
