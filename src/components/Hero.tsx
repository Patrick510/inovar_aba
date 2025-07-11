"use client";

import { ArrowRight, Phone, Mail } from "lucide-react";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section
      id="home"
      className="pt-16 md:pt-20 min-h-screen flex items-center bg-gradient-to-br from-teal-50 via-pink-50 to-yellow-50"
    >
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full">
                <span className="text-teal-700 font-medium text-sm">
                  Análise do Comportamento Aplicada
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transformando
                <span className="bg-gradient-to-r from-teal-500 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                  {" "}
                  Vidas
                </span>
                <br />
                com ABA
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Promovemos o desenvolvimento de habilidades sociais,
                comunicativas e comportamentais através de métodos
                cientificamente comprovados.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-teal-500 to-pink-400 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Agendar Consulta
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-teal-500 hover:text-teal-600 transition-all duration-200"
              >
                Saiba Mais
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-sm text-gray-600">
              <div className="flex items-center justify-center lg:justify-start">
                <Phone className="w-4 h-4 mr-2 text-teal-500" />
                (67) 9317-1331
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Mail className="w-4 h-4 mr-2 text-teal-500" />
                contato@inovaraba.com.br
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
              <img
                src="/ambiente1.jpg?height=500&width=600"
                alt="Ambiente acolhedor da Inovar ABA"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Simple overlay badge */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
              <p className="text-sm font-medium text-gray-800">
                Cuidado Especializado em ABA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
