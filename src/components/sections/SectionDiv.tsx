"use client";

import { Button } from "../ui/button";
import { useState, useEffect } from "react";

interface SectionDivProps {
  scrollToSection: (sectionId: string) => void;
}

export default function SectionDiv({ scrollToSection }: SectionDivProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array com as imagens do carrossel
  const images = [
    {
      src: "/ben2.jpeg?height=500&width=400",
      alt: "Terapia ABA - Sessão Individual",
    },
    {
      src: "/placeholder.svg?height=500&width=400",
      alt: "Terapia ABA - Atividades Lúdicas",
    },
    {
      src: "/placeholder.svg?height=500&width=400",
      alt: "Terapia ABA - Desenvolvimento Social",
    },
  ];

  // Auto-rotação do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Muda a cada 4 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

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

        {/* Carrossel 3D */}
        <div className="relative flex items-center justify-center h-[600px] perspective-1000">
          <div className="relative w-[400px] h-[500px] preserve-3d">
            {images.map((image, index) => {
              const isActive = index === currentIndex;
              const isPrev =
                index === (currentIndex - 1 + images.length) % images.length;
              const isNext = index === (currentIndex + 1) % images.length;

              let transform = "";
              let zIndex = 0;
              let opacity = 0.4;

              if (isActive) {
                transform = "translateZ(0px) rotateY(0deg) scale(1)";
                zIndex = 30;
                opacity = 1;
              } else if (isPrev) {
                transform =
                  "translateZ(-100px) translateX(-80px) rotateY(25deg) scale(0.9)";
                zIndex = 20;
                opacity = 0.7;
              } else if (isNext) {
                transform =
                  "translateZ(-100px) translateX(80px) rotateY(-25deg) scale(0.9)";
                zIndex = 20;
                opacity = 0.7;
              } else {
                transform = "translateZ(-200px) scale(0.8)";
                zIndex = 10;
                opacity = 0.3;
              }

              return (
                <div
                  key={index}
                  className="absolute inset-0 transition-all duration-700 ease-in-out cursor-pointer"
                  style={{
                    transform,
                    zIndex,
                    opacity,
                  }}
                  onClick={() => setCurrentIndex(index)}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width="400"
                    height="500"
                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  />

                  {/* Overlay com gradiente sutil */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Controles de navegação */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Imagem anterior"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Próxima imagem"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-teal-500 scale-125"
                    : "bg-white/60 hover:bg-white/80"
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
