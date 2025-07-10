import { Button } from "../ui/button";

interface SectionDivProps {
  scrollToSection: (sectionId: string) => void;
}

export default function SectionDiv({ scrollToSection }: SectionDivProps) {
  return (
    <div
      className="container mx-auto px-4"
      style={{ marginLeft: "3rem", marginRight: "3rem" }}
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Transformando Vidas com
              <span className="bg-gradient-to-r from-teal-500 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                {" "}
                ABA
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Especialistas em Análise do Comportamento Aplicada, oferecendo
              tratamento personalizado e baseado em evidências científicas para
              crianças e adolescentes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-teal-500 hover:bg-teal-600"
            >
              Agendar Consulta
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("about")}
            >
              Saiba Mais
            </Button>
          </div>
        </div>
        <div className="relative">
          <img
            src="/vite.svg?height=500&width=600"
            alt="Terapia ABA"
            width="600"
            height="500"
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
