import { Brain, Heart, BadgeIcon as IdCard, Users } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export default function SectionAbout() {
  const features = [
    {
      icon: Brain,
      title: "Baseado em Evidências",
      description:
        "Utilizamos métodos cientificamente comprovados para garantir os melhores resultados.",
      color: "text-teal-500",
      bgColor: "bg-teal-50",
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description:
        "Profissionais altamente qualificados e certificados em ABA.",
      color: "text-pink-400",
      bgColor: "bg-pink-50",
    },
    {
      icon: Heart,
      title: "Cuidado Personalizado",
      description:
        "Cada plano de tratamento é único e adaptado às necessidades individuais.",
      color: "text-yellow-400",
      bgColor: "bg-yellow-50",
    },
    {
      icon: IdCard,
      title: "AtivaMAX",
      description:
        "O AtivaMAX Saúde é o seu cartão de descontos com acesso a consultas médicas e terapêuticas, exames e medicamentos com valores mais acessíveis.",
      color: "text-green-400",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Sobre a Inovar ABA
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Somos uma clínica especializada em Análise do Comportamento Aplicada
          (ABA), dedicada a promover o desenvolvimento e bem-estar de crianças e
          adolescentes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <Card
              key={index}
              className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full"
            >
              <CardContent className="p-6 flex flex-col items-center space-y-4 h-full">
                {/* Ícone com fundo colorido */}
                <div className={`${feature.bgColor} p-4 rounded-full`}>
                  <IconComponent className={`h-12 w-12 ${feature.color}`} />
                </div>

                {/* Título */}
                <h3 className="text-xl font-semibold text-gray-900 min-h-[3rem] flex items-center">
                  {feature.title}
                </h3>

                {/* Descrição */}
                <p className="text-gray-600 leading-relaxed flex-grow text-center">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
