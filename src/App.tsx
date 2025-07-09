import { useState } from "react";
import HeaderDiv from "./components/HeaderDiv";
import SectionDiv from "./components/sections/SectionDiv";
import SectionAbout from "./components/sections/SectionAbout";
import SectionTeam from "./components/sections/SectionTeam";
import SectionContact from "./components/sections/SectionContact";
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

      <Section scrollToSection={scrollToSection} />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <FooterDiv scrollToSection={scrollToSection} />
      </footer>
    </div>
  );
}
