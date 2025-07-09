import { useState } from "react";
import HeaderDiv from "./components/HeaderDiv";
import FooterDiv from "./components/FooterDiv";
import Section from "./components/Section";

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
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <HeaderDiv
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          scrollToSection={scrollToSection}
        />
      </header>

      {/* Section */}
      <Section scrollToSection={scrollToSection} />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <FooterDiv scrollToSection={scrollToSection} />
      </footer>
    </div>
  );
}
