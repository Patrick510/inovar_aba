import { Brain, Handshake, Scale, Flag, Eye, Gem } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Brain,
      title: "Respeito à Neurodiversidade",
      description:
        "Valorizamos e celebramos as diferentes formas de pensar e aprender, promovendo a aceitação.",
    },
    {
      icon: Handshake,
      title: "Inclusão e Acessibilidade",
      description:
        "Garantimos um ambiente acolhedor e acessível, promovendo a participação plena de todos.",
    },
    {
      icon: Scale,
      title: "Ética e Responsabilidade",
      description:
        "Atuamos com transparência, integridade e compromisso, assegurando a qualidade do atendimento.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full mb-6">
            <span className="text-teal-700 font-medium text-sm">Sobre Nós</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Conheça a
            <span className="bg-gradient-to-r from-teal-500 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              {" "}
              Inovar ABA
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Nossa essência é impulsionada por uma missão clara, uma visão
            inspiradora e valores inegociáveis que guiam cada passo do nosso
            trabalho.
          </p>
        </div>

        {/* Cards de Missão, Visão e Valores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card: Nossa Missão */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
            <div className="flex flex-row gap-[1rem] items-center justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <Flag className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Nossa Missão
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg flex-grow">
              Promover o desenvolvimento, a inclusão humanizada, qualidade de
              vida e independência das pessoas com TEA. Visando o bem-estar,
              respeito e a singularidade de cada indivíduo.
            </p>
          </div>

          {/* Card: Nossa Visão */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
            <div className="flex flex-row gap-[1rem] items-center justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <Eye className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Nossa Visão
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg flex-grow">
              Ser referência no atendimento a pessoas neurodivergentes,
              almejando ser forte esperança e inspiração, contribuindo para uma
              sociedade mais inclusiva e capacitada para valorizar a
              individualidade de cada um.
            </p>
          </div>

          {/* Card: Nossos Valores (Contém os 3 cards menores) */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col sm:col-span-2 lg:col-span-2">
            <div className="flex flex-row gap-[1rem] items-center justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <Gem className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Nossos Valores
              </h3>
            </div>
            <div className="flex gap-4 flex-col lg:flex-row flex-grow">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-gray-100 rounded-lg shadow-sm"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-pink-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
