import { useEffect, useState } from "react";

export default function MissionCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: "/ambiente1.jpg?height=400&width=500",
      alt: "Ambiente acolhedor da clínica",
    },
    {
      src: "/ambiente2.jpg?height=400&width=500",
      alt: "Ambiente acolhedor da clínica",
    },
    {
      src: "/dinamica1.jpg?height=400&width=500",
      alt: "Terapia ABA em ação",
    },
    {
      src: "/dinamica3.jpg?height=400&width=500",
      alt: "Crianças em atividades terapêuticas",
    },
    // {
    //   src: "/atividade2.jpg?height=400&width=500",
    //   alt: "Atividades de diversão",
    // },
    {
      src: "/dinamica2.jpg?height=400&width=500",
      alt: "Profissionais trabalhando com crianças",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000); // Muda a cada 3 segundos

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-gray-900">Nossa Missão</h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          Promover o desenvolvimento de habilidades sociais, comunicativas e
          comportamentais através da Análise do Comportamento Aplicada,
          proporcionando maior qualidade de vida e independência para nossos
          pacientes e suas famílias.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Acreditamos no potencial de cada indivíduo e trabalhamos com dedicação
          para alcançar objetivos significativos e duradouros.
        </p>
      </div>

      <div className="relative">
        {/* Container das imagens */}
        <div className="relative h-96 overflow-hidden rounded-xl shadow-lg">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 translate-x-0"
                  : index < currentSlide
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
              }`}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Indicadores */}
        <div className="flex justify-center space-x-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-teal-500 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ver imagem ${index + 1}`}
            />
          ))}
        </div>

        {/* Barra de progresso */}
        <div className="mt-3 w-full bg-gray-200 rounded-full h-1">
          <div
            className="bg-gradient-to-r from-teal-500 to-pink-400 h-1 rounded-full transition-all duration-100 ease-linear"
            style={{
              width: `${((currentSlide + 1) / images.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
