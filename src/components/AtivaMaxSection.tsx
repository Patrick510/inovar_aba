import {
  CheckCircle,
  Clock,
  Home,
  DollarSign,
  Users,
  BookOpen,
} from "lucide-react";

export default function AtivaMaxSection() {
  const benefits = [
    {
      icon: CheckCircle,
      text: "Consultas pelo nosso CARTÃO ATIVAMAX",
    },
    {
      icon: Clock,
      text: "24 horas por dia em qualquer dia da semana",
    },
    {
      icon: Home,
      text: "Sem sair de casa realize sua consulta",
    },
    {
      icon: DollarSign,
      text: "Baixo custo com preços acessíveis",
    },
    {
      icon: Users,
      text: "Equipe qualificada com médicos especializados",
    },
  ];

  const specialties = [
    "Alergia e Imunologia",
    "Cardiologia",
    "Clínica Geral",
    "Dermatologia",
    "Endocrinologia",
    "Fonoaudiologia",
    "Gastroenterologia",
    "Geriatria",
    "Ginecologia e Obstetrícia",
    "Neurologia",
    "Oftalmologia",
    "Ortopedia",
    "Otorrinolaringologia",
    "Pediatria",
    "Psiquiatria",
    "Reumatologia",
    "Urologia",
    "Psicologia",
    "Nutrição",
  ];

  return (
    <section
      id="ativamax"
      className="py-16 md:py-24 bg-gradient-to-br from-yellow-50 to-orange-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-6">
            <span className="text-yellow-700 font-medium text-sm">
              AtivaMAX Saúde
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Seu Acesso Facilitado à
            <span className="bg-gradient-to-r from-yellow-500 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              {" "}
              Saúde
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            O AtivaMAX Saúde é o seu cartão de descontos para acesso facilitado
            a serviços essenciais. Embora não seja um plano de saúde, ele
            funciona como uma ponte para uma ampla rede de parceiros nas áreas
            de saúde, educação e lazer, garantindo preços reduzidos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* AtivaMAX Logo and Benefits */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="flex justify-center lg:justify-center mb-8">
              <img
                src="/ativamax.jpeg"
                alt="AtivaMAX Saúde Logo"
                width={250}
                height={120}
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center lg:text-left">
              Benefícios do
              <span className="bg-gradient-to-r from-yellow-500 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                {" "}
                AtivaMAX
              </span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm"
                >
                  <benefit.icon className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-base md:text-lg">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Specialties */}
          <div className="space-y-8 order-1 lg:order-2">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center lg:text-left">
              Nossas
              <span className="bg-gradient-to-r from-yellow-500 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                {" "}
                Especialidades
              </span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
              {specialties.map((specialty, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <BookOpen className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">
                    {specialty}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
