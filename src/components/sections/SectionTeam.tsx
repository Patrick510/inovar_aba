import { Card, CardContent } from "../ui/card";

export default function SectionTeam() {
  const teamMembers = [
    {
      name: "Dra. Maria Silva",
      specialty: "Psicóloga Clínica - ABA",
      image: "/modelo.png?height=300&width=300",
      bgStyle: "bg-gradient-to-br from-teal-100 via-teal-50 to-cyan-100",
      pattern: "dots",
    },
    {
      name: "Dr. João Santos",
      specialty: "Analista do Comportamento",
      image: "/modelo.png?height=300&width=300",
      bgStyle: "bg-gradient-to-br from-pink-100 via-rose-50 to-orange-100",
      pattern: "waves",
    },
    {
      name: "Dra. Ana Costa",
      specialty: "Psicóloga Infantil",
      image: "/modelo.png?height=300&width=300",
      bgStyle: "bg-gradient-to-br from-yellow-100 via-amber-50 to-orange-100",
      pattern: "circles",
    },
    {
      name: "Dr. Pedro Lima",
      specialty: "Terapeuta ABA",
      image: "/modelo.png?height=300&width=300",
      bgStyle: "bg-gradient-to-br from-purple-100 via-violet-50 to-indigo-100",
      pattern: "geometric",
    },
  ];

  const getPatternSVG = (pattern: string) => {
    switch (pattern) {
      case "dots":
        return (
          <svg
            className="absolute inset-0 w-full h-full opacity-20"
            viewBox="0 0 100 100"
          >
            <defs>
              <pattern
                id="dots"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="10" cy="10" r="2" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        );
      case "waves":
        return (
          <svg
            className="absolute inset-0 w-full h-full opacity-15"
            viewBox="0 0 100 100"
          >
            <defs>
              <pattern
                id="waves"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 20 Q10 10 20 20 T40 20"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#waves)" />
          </svg>
        );
      case "circles":
        return (
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            viewBox="0 0 100 100"
          >
            <defs>
              <pattern
                id="circles"
                x="0"
                y="0"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="15"
                  cy="15"
                  r="8"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circles)" />
          </svg>
        );
      case "geometric":
        return (
          <svg
            className="absolute inset-0 w-full h-full opacity-15"
            viewBox="0 0 100 100"
          >
            <defs>
              <pattern
                id="geometric"
                x="0"
                y="0"
                width="25"
                height="25"
                patternUnits="userSpaceOnUse"
              >
                <polygon
                  points="12.5,2 22,12.5 12.5,23 3,12.5"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#geometric)" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Nossa Equipe
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Conheça os profissionais dedicados que fazem a diferença na vida de
          nossos pacientes.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
          >
            <div className="relative overflow-hidden h-64">
              {/* Background com gradiente */}
              <div className={`absolute inset-0 ${member.bgStyle}`} />

              {/* Padrão decorativo */}
              <div className="absolute inset-0 text-gray-600">
                {getPatternSVG(member.pattern)}
              </div>

              {/* Formas decorativas flutuantes */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full blur-sm" />
              <div className="absolute bottom-6 left-4 w-6 h-6 bg-white/30 rounded-full blur-sm" />
              <div className="absolute top-1/3 left-6 w-4 h-4 bg-white/25 rounded-full blur-sm" />

              {/* Overlay sutil para profundidade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/10" />

              {/* Imagem do modelo */}
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width="300"
                height="300"
                className="relative z-10 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Efeito de brilho no hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </div>
            <CardContent className="p-6 text-center bg-white">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-teal-500 font-medium">{member.specialty}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
