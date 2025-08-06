"use client";

import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Heart,
  Users,
  Target,
} from "lucide-react";

export default function Mission() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const images = [
    {
      src: "/ambiente1.jpg?height=400&width=500",
      alt: "Ambiente acolhedor da clínica",
      title: "Ambiente Acolhedor",
    },
    {
      src: "/dinamica1.jpg?height=400&width=500",
      alt: "Terapia ABA em ação",
      title: "Terapia ABA em Ação",
    },
    {
      src: "/to.jpg?height=400&width=500",
      alt: "Terapia ocupacional",
      title: "Terapia ocupacional",
    },
    {
      src: "/to1.jpg?height=400&width=500",
      alt: "Terapia ocupacional",
      title: "Terapia ocupacional",
    },
    {
      src: "/denver.jpg?height=400&width=500",
      alt: "Terapia Denver",
      title: "Terapia Denver",
    },
    {
      src: "/denver1.jpg?height=400&width=500",
      alt: "Terapia Denver",
      title: "Terapia Denver",
    },
    {
      src: "/ambiente2.jpg?height=400&width=500",
      alt: "Espaços terapêuticos",
      title: "Espaços Terapêuticos",
    },
    {
      src: "/atividade1.jpg?height=400&width=500",
      alt: "Atividades de desenvolvimento",
      title: "Atividades de desenvolvimento",
    },
    {
      src: "/sala2.jpg?height=400&width=500",
      alt: "Sala de reforço",
      title: "Sala de reforço",
    },
    {
      src: "/dinamica3.jpg?height=400&width=500",
      alt: "Atividades terapêuticas",
      title: "Atividades Terapêuticas",
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
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
    <section
      id="mission"
      className="py-16 md:py-24 bg-gradient-to-r from-teal-50 to-pink-50"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full">
                <span className="text-teal-700 font-medium text-sm">
                  Nossa Missão
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Transformar
                <span className="bg-gradient-to-r from-teal-500 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                  {" "}
                  Vidas
                </span>
              </h2>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Promover o desenvolvimento de habilidades sociais, comunicativas
                e comportamentais através da Análise do Comportamento Aplicada,
                proporcionando maior qualidade de vida e independência para
                nossos pacientes e suas famílias.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Acreditamos no potencial de cada indivíduo e trabalhamos com
                dedicação para alcançar objetivos significativos e duradouros.
              </p>
            </div>

            {/* Replace the Stats section with Values */}
            {/* Values */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8">
              <div className="text-center md:text-left">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-3 mx-auto md:mx-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  Cuidado
                </div>
                <div className="text-sm text-gray-600">Personalizado</div>
              </div>
              <div className="text-center md:text-left">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mb-3 mx-auto md:mx-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  Equipe
                </div>
                <div className="text-sm text-gray-600">Especializada</div>
              </div>
              <div className="text-center md:text-left col-span-2 md:col-span-1">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-3 mx-auto md:mx-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  Resultados
                </div>
                <div className="text-sm text-gray-600">Comprovados</div>
              </div>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative order-1 lg:order-2">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-2xl md:rounded-3xl shadow-xl bg-gradient-to-br from-gray-100 to-gray-200">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentSlide
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                    <h4 className="text-white text-lg md:text-xl font-semibold drop-shadow-lg">
                      {image.title}
                    </h4>
                  </div>
                </div>
              ))}

              {/* Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 md:p-3 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 md:p-3 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>

              <button
                onClick={togglePlayPause}
                className="absolute top-2 md:top-4 right-2 md:right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label={
                  isPlaying ? "Pausar slideshow" : "Reproduzir slideshow"
                }
              >
                {isPlaying ? (
                  <Pause className="w-3 h-3 md:w-4 md:h-4" />
                ) : (
                  <Play className="w-3 h-3 md:w-4 md:h-4" />
                )}
              </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center space-x-2 mt-4 md:mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? "w-6 md:w-8 h-2 md:h-3 bg-gradient-to-r from-teal-500 to-pink-400"
                      : "w-2 md:w-3 h-2 md:h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Ver imagem ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
