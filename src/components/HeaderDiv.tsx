import { Menu, X } from "lucide-react";

interface HeaderDivProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToSection: (sectionId: string) => void;
}

export default function HeaderDiv({
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
}: HeaderDivProps) {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Inovar ABA"
            width="50"
            height="50"
            className="rounded-full"
          />
          <span className="text-2xl font-bold text-gray-900">Inovar ABA</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-gray-700 hover:text-teal-500 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-700 hover:text-teal-500 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("team")}
            className="text-gray-700 hover:text-teal-500 transition-colors"
          >
            Our Team
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-700 hover:text-teal-500 transition-colors"
          >
            Contact Us
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
          <div className="flex flex-col space-y-4 pt-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-left text-gray-700 hover:text-teal-500 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-gray-700 hover:text-teal-500 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-left text-gray-700 hover:text-teal-500 transition-colors"
            >
              Our Team
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-gray-700 hover:text-teal-500 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}
