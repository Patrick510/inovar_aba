interface FooterDivProps {
  scrollToSection: (sectionId: string) => void;
}

export default function FooterDiv({ scrollToSection }: FooterDivProps) {
  return (
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Inovar ABA"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-2xl font-bold">Inovar ABA</span>
          </div>
          <p className="text-gray-400">
            Transformando vidas através da Análise do Comportamento Aplicada.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Links Rápidos</h3>
          <div className="space-y-2">
            <button
              onClick={() => scrollToSection("home")}
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block text-gray-400 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Our Team
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contato</h3>
          <div className="space-y-2 text-gray-400">
            <p>(11) 9999-9999</p>
            <p>contato@inovaraba.com.br</p>
            <p>
              Rua das Flores, 123
              <br />
              São Paulo, SP
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Inovar ABA. Todos os direitos
          reservados.
        </p>
      </div>
    </div>
  );
}
