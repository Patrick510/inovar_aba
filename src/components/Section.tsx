import MissionCarousel from "./MissionCarousel";
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
        className="py-12 md:py-20 bg-white px-4 md:px-8 lg:px-12"
      >
        <SectionAbout />
      </section>

      {/* Mission Section */}
      <section className="bg-gradient-to-r from-teal-50 to-pink-50 rounded-none md:rounded-2xl mx-0 md:mx-4 lg:mx-8 p-4 md:p-8">
        <MissionCarousel />
      </section>

      {/* Team Section */}
      <section id="team" className="py-12 md:py-20 bg-gray-50">
        <SectionTeam />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 bg-white">
        <SectionContact />
      </section>
    </>
  );
}
