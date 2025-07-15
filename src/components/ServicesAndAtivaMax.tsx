import {
  Stethoscope,
  Hand,
  GraduationCap,
  Lightbulb,
  Brain,
  ClipboardList,
  Mic,
  Smile,
  PlusCircle,
} from "lucide-react";

export default function ServicesAndAtivaMax() {
  const services = [
    { name: "Atendente Terapia", icon: Stethoscope },
    { name: "Terapia Ocupacional", icon: Hand },
    { name: "Acompanhamento escolar", icon: GraduationCap },
    { name: "Reforço Escolar", icon: Lightbulb },
    { name: "ABA", icon: Brain },
    { name: "Avaliação Neuropsicológica", icon: ClipboardList },
    { name: "Fono", icon: Mic },
    { name: "Psicoterapia", icon: Smile },
    { name: "Mais Em Breve", icon: PlusCircle },
  ];

  return (
    <section id="services-ativamax" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Clínica 100% Supervisionada */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full mb-6">
            <span className="text-teal-700 font-medium text-sm">
              Nosso Diferencial
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Clínica
            <span className="bg-gradient-to-r from-teal-500 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              {" "}
              100% Supervisionada
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Garantimos a excelência e a segurança em todos os nossos
            tratamentos, com acompanhamento contínuo de nossa equipe de
            especialistas.
          </p>
        </div>

        {/* O que temos na clínica */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full mb-6">
            <span className="text-teal-700 font-medium text-sm">
              Nossos Serviços
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O que você encontra na
            <span className="bg-gradient-to-r from-teal-500 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              {" "}
              Inovar ABA
            </span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <service.icon className="w-8 h-8 text-teal-500 mb-3" />
                <h4 className="text-lg font-semibold text-gray-800">
                  {service.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* AtivaMAX */}
        <div className="bg-gradient-to-br from-white to-gray-50 p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-6">
            <span className="text-pink-700 font-medium text-sm">
              Parceria Especial
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Conheça o
            <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              {" "}
              AtivaMAX Saúde
            </span>
          </h2>
          <div className="flex justify-center mb-8">
            <img
              src="/ativamax-logo.png"
              alt="AtivaMAX Saúde Logo"
              width={200}
              height={100}
              className="object-contain"
            />
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            O AtivaMAX Saúde é o seu cartão de descontos para acesso facilitado
            a serviços essenciais. Embora não seja um plano de saúde, ele
            funciona como uma ponte para uma ampla rede de parceiros nas áreas
            de saúde, educação e lazer, garantindo preços reduzidos.
          </p>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Com o AtivaMAX Saúde, você tem acesso a consultas médicas e
            terapêuticas, exames e medicamentos com valores mais acessíveis. Um
            de nossos destaques é o acesso à Terapia ABA (Análise do
            Comportamento Aplicada), entre diversas outras especialidades. Nosso
            compromisso é com a inclusão, por isso operamos com uma tabela
            social, possibilitando que pessoas de baixa renda tenham acesso a um
            tratamento adequado, de qualidade e que cabe no orçamento.
          </p>
        </div>
      </div>
    </section>
  );
}
