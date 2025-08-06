"use client";

interface FooterDivProps {
  scrollToSection: (sectionId: string) => void;
}

export default function FooterDiv({
  scrollToSection,
}: Readonly<FooterDivProps>) {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Logo e Descrição */}
        <div className="space-y-4 text-center md:text-left lg:col-span-1">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <img
              src="/logo.png"
              alt="Inovar ABA"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl md:text-2xl font-bold">Inovar ABA</span>
          </div>
          <p className="text-gray-400 text-sm md:text-base">
            Transformando vidas através da Análise do Comportamento Aplicada.
          </p>
        </div>

        {/* Links Rápidos */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-base md:text-lg font-semibold">Links Rápidos</h3>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
            >
              Our Team
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Contato */}
        <div className="space-y-4 text-center md:text-left lg:col-span-1">
          <h3 className="text-base md:text-lg font-semibold">Contato</h3>
          <div className="space-y-2 text-gray-400 text-sm md:text-base">
            <p className="break-words">(67) 9317-1331</p>
            <p className="break-words">
              centromultidisciplinardepsicol@gmail.com
            </p>
            <p className="break-words">
              R. Mário César Mancini, 1329
              <br />
              Três Lagoas, MS
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-400">
        <p className="text-xs md:text-sm">
          &copy; {new Date().getFullYear()} Inovar ABA. Todos os direitos
          reservados.
        </p>
      </div>
    </div>
  );
}
