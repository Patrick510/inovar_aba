import { Brain, Heart, Users } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import MissionCarousel from "../MissionCarousel";

export default function SectionAbout() {
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

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Card className="text-center p-8 hover:shadow-lg transition-shadow">
          <CardContent className="space-y-4">
            <Brain className="h-12 w-12 text-teal-500 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900">
              Baseado em Evidências
            </h3>
            <p className="text-gray-600">
              Utilizamos métodos cientificamente comprovados para garantir os
              melhores resultados.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center p-8 hover:shadow-lg transition-shadow">
          <CardContent className="space-y-4">
            <Users className="h-12 w-12 text-pink-400 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900">
              Equipe Especializada
            </h3>
            <p className="text-gray-600">
              Profissionais altamente qualificados e certificados em ABA.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center p-8 hover:shadow-lg transition-shadow">
          <CardContent className="space-y-4">
            <Heart className="h-12 w-12 text-yellow-400 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900">
              Cuidado Personalizado
            </h3>
            <p className="text-gray-600">
              Cada plano de tratamento é único e adaptado às necessidades
              individuais.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Mission Section */}
      <div className="bg-gradient-to-r from-teal-50 to-pink-50 rounded-2xl p-8">
        <MissionCarousel />
      </div>
    </div>
  );
}
