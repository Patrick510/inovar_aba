import SectionAbout from "./sections/SectionAbout";
import SectionContact from "./sections/SectionContact";
import SectionDiv from "./sections/SectionDiv";
import SectionTeam from "./sections/SectionTeam";

interface SectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Section({ scrollToSection }: SectionProps) {
  return (
    <>
      {/* Home Section */}
      <section
        id="home"
        className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-teal-50 via-pink-50 to-yellow-50"
      >
        <SectionDiv scrollToSection={scrollToSection} />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-white"
        style={{ marginLeft: "3rem", marginRight: "3rem" }}
      >
        <SectionAbout />
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="py-20 bg-gray-50"
        style={{ marginLeft: "3rem", marginRight: "3rem" }}
      >
        <SectionTeam />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <SectionContact />
      </section>
    </>
  );
}
