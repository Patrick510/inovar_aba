import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

export default function MissionCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const images = [
    {
      src: "/ambiente1.jpg?height=400&width=500",
      alt: "Ambiente acolhedor da clínica",
      title: "Ambiente Acolhedor",
    },
    {
      src: "/ambiente2.jpg?height=400&width=500",
      alt: "Ambiente acolhedor da clínica",
      title: "Espaços Terapêuticos",
    },
    {
      src: "/dinamica1.jpg?height=400&width=500",
      alt: "Terapia ABA em ação",
      title: "Terapia ABA em Ação",
    },
    {
      src: "/dinamica3.jpg?height=400&width=500",
      alt: "Crianças em atividades terapêuticas",
      title: "Atividades Terapêuticas",
    },
    {
      src: "/dinamica2.jpg?height=400&width=500",
      alt: "Profissionais trabalhando com crianças",
      title: "Cuidado Profissional",
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000); // Muda a cada 4 segundos

    return () => clearInterval(timer);
  }, [images.length, isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Seção de Texto */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full">
              <span className="text-teal-700 font-medium text-sm">
                Nossa Missão
              </span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Transformando
              <span className="bg-gradient-to-r from-teal-500 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                {" "}
                Vidas
              </span>
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg">
              Promover o desenvolvimento de habilidades sociais, comunicativas e
              comportamentais através da Análise do Comportamento Aplicada,
              proporcionando maior qualidade de vida e independência para nossos
              pacientes e suas famílias.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Acreditamos no potencial de cada indivíduo e trabalhamos com
              dedicação para alcançar objetivos significativos e duradouros.
            </p>
          </div>

          {/* Estatísticas */}
          {/* <Estatistics /> */}
        </div>

        {/* Seção do Carrossel */}
        <div className="relative">
          {/* Container principal das imagens */}
          <div className="relative h-[500px] overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
            {/* Imagens */}
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentSlide
                    ? "opacity-100 scale-100"
                    : index < currentSlide
                    ? "opacity-0 scale-95 -translate-x-full"
                    : "opacity-0 scale-95 translate-x-full"
                }`}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />

                {/* Overlay com gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Título da imagem */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-white text-xl font-semibold drop-shadow-lg">
                    {image.title}
                  </h4>
                </div>
              </div>
            ))}

            {/* Controles de navegação */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 backdrop-blur-sm"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 backdrop-blur-sm"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Controle Play/Pause */}
            <button
              onClick={togglePlayPause}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 backdrop-blur-sm"
              aria-label={
                isPlaying ? "Pausar slideshow" : "Reproduzir slideshow"
              }
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Indicadores modernos */}
          <div className="flex justify-center space-x-3 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 h-3 bg-gradient-to-r from-teal-500 to-pink-400"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ver imagem ${index + 1}`}
              >
                {index === currentSlide && (
                  <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Barra de progresso circular */}
          {/* <div className="flex justify-center mt-4">
            <div className="relative w-16 h-16">
              <svg
                className="w-16 h-16 transform -rotate-90"
                viewBox="0 0 64 64"
              >
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  className="text-gray-200"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 28}`}
                  strokeDashoffset={`${
                    2 * Math.PI * 28 * (1 - (currentSlide + 1) / images.length)
                  }`}
                  className="transition-all duration-1000 ease-in-out"
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#14b8a6" />
                    <stop offset="50%" stopColor="#f472b6" />
                    <stop offset="100%" stopColor="#fbbf24" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-semibold text-gray-600">
                  {currentSlide + 1}/{images.length}
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
