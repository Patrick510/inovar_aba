"use client";

import { Star } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "Dra. Yaponira Barradas",
      role: "Neuropsicóloga",
      image: "/yaponira.png?height=300&width=300",
      description:
        "Focado em terapias comportamentais e desenvolvimento de habilidades sociais.",
    },
    {
      name: "Ana Paula Silva",
      role: "Pedagoga e Coordenadora",
      image: "/anapaula.png?height=300&width=300",
      description:
        "Especialista em ABA com mais de 8 anos de experiência no desenvolvimento infantil.",
    },
    {
      name: "Guiomar",
      role: "Educadora Física",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Especializada em intervenções precoces e programas de comunicação funcional.",
    },
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full mb-6">
            <span className="text-teal-700 font-medium text-sm">
              Nossa Equipe
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Profissionais
            <span className="bg-gradient-to-r from-teal-500 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              {" "}
              Especializados
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nossa equipe é formada por profissionais altamente qualificados e
            certificados em Análise do Comportamento Aplicada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>

                <p className="text-teal-600 font-medium mb-3">{member.role}</p>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>

                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-500">5.0</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
