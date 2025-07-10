import { Card, CardContent } from "../ui/card";
import { Star, Award, Heart, Users } from "lucide-react";

export default function SectionTeam() {
  const teamMembers = [
    {
      name: "Dra. Yaponira Barradas",
      specialty: "Neuropsicóloga",
      image: "/yaponira.png?height=300&width=300",
      bgStyle: "bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50",
      accentColor: "teal",
      icon: Award,
    },
    {
      name: "Animeres Duarte",
      specialty: "Pedagoga",
      image: "/modelo.png?height=300&width=300",
      bgStyle: "bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50",
      accentColor: "pink",
      icon: Heart,
    },
    {
      name: "Ana Paula Silva",
      specialty: "Pedagoga e Coordenadora",
      image: "/anapaula.png?height=300&width=300",
      bgStyle: "bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50",
      accentColor: "amber",
      icon: Users,
    },
    {
      name: "Dr. Pedro Lima",
      specialty: "Terapeuta ABA",
      image: "/modelo.png?height=300&width=300",
      bgStyle: "bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50",
      accentColor: "violet",
      icon: Star,
    },
  ];

  const getAccentClasses = (color: string) => {
    const colorMap = {
      teal: {
        border: "border-teal-200",
        text: "text-teal-600",
        bg: "bg-teal-500",
        ring: "ring-teal-100",
        iconBg: "bg-teal-100",
        iconText: "text-teal-600",
      },
      pink: {
        border: "border-pink-200",
        text: "text-pink-600",
        bg: "bg-pink-500",
        ring: "ring-pink-100",
        iconBg: "bg-pink-100",
        iconText: "text-pink-600",
      },
      amber: {
        border: "border-amber-200",
        text: "text-amber-600",
        bg: "bg-amber-500",
        ring: "ring-amber-100",
        iconBg: "bg-amber-100",
        iconText: "text-amber-600",
      },
      violet: {
        border: "border-violet-200",
        text: "text-violet-600",
        bg: "bg-violet-500",
        ring: "ring-violet-100",
        iconBg: "bg-violet-100",
        iconText: "text-violet-600",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.teal;
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full mb-6">
          <span className="text-gray-700 font-medium text-sm">
            Conheça Nossa Equipe
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Profissionais
          <span className="bg-gradient-to-r from-teal-500 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
            {" "}
            Dedicados
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Conheça os profissionais dedicados que fazem a diferença na vida de
          nossos pacientes com expertise e cuidado personalizado.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => {
          const IconComponent = member.icon;
          const accentClasses = getAccentClasses(member.accentColor);

          return (
            <Card
              key={index}
              className={`group overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-0 gap-0 py-0 ${accentClasses.ring} ring-1 hover:ring-2`}
            >
              {/* Imagem Section */}
              <div className="relative h-72 overflow-hidden">
                {/* Background com gradiente */}
                <div className={`absolute inset-0 ${member.bgStyle}`} />

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full blur-xl" />
                <div className="absolute bottom-6 left-4 w-8 h-8 bg-white/30 rounded-full blur-lg" />

                {/* Imagem enquadrada da cintura para cima */}
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width="300"
                  height="300"
                  className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110"
                  style={{ objectPosition: "center 20%" }}
                />

                {/* Overlay com gradiente sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/10" />

                {/* Ícone da especialidade */}
                <div className="absolute bottom-4 right-4">
                  <div
                    className={`${accentClasses.iconBg} p-2 rounded-full backdrop-blur-sm`}
                  >
                    <IconComponent
                      className={`w-4 h-4 ${accentClasses.iconText}`}
                    />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <CardContent className="p-6 bg-white relative">
                {/* Decorative line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 ${accentClasses.bg}`}
                />

                <div className="text-center space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                    {member.name}
                  </h3>
                  <p className={`font-semibold ${accentClasses.text}`}>
                    {member.specialty}
                  </p>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
