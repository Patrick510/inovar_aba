import { useState } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (section: string) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
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
        <nav className="hidden md:flex space-x-8">
          {["home", "about", "team", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => handleClick(section)}
              className="text-gray-700 hover:text-teal-500 transition-colors"
            >
              {section === "home"
                ? "Home"
                : section === "about"
                ? "About"
                : section === "team"
                ? "Our Team"
                : "Contact Us"}
            </button>
          ))}
        </nav>
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

      {isMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
          <div className="flex flex-col space-y-4 pt-4">
            {["home", "about", "team", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => handleClick(section)}
                className="text-left text-gray-700 hover:text-teal-500 transition-colors"
              >
                {section === "home"
                  ? "Home"
                  : section === "about"
                  ? "About"
                  : section === "team"
                  ? "Our Team"
                  : "Contact Us"}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
