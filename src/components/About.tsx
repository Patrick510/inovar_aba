"use client";

import { Heart, Users, Target, Award } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Heart,
      title: "Cuidado Personalizado",
      description:
        "Cada plano de tratamento é desenvolvido especificamente para as necessidades individuais.",
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description:
        "Profissionais qualificados e certificados em Análise do Comportamento Aplicada.",
    },
    {
      icon: Target,
      title: "Objetivos Claros",
      description:
        "Metas específicas e mensuráveis para acompanhar o progresso de cada paciente.",
    },
    {
      icon: Award,
      title: "Métodos Comprovados",
      description:
        "Técnicas baseadas em evidências científicas para garantir os melhores resultados.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:py-12">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full mb-6">
            <span className="text-teal-700 font-medium text-sm">Sobre Nós</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Por que escolher a
            <span className="bg-gradient-to-r from-teal-500 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              {" "}
              Inovar ABA?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos uma clínica especializada em Análise do Comportamento
            Aplicada, dedicada a promover o desenvolvimento e a qualidade de
            vida de nossos pacientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-teal-500 to-pink-400 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
