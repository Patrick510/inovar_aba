import { Card, CardContent } from "../ui/card";

export default function SectionTeam() {
  const teamMembers = [
    {
      name: "Dra. Yaponira Barradas",
      specialty: "Neuropsicóloga Clínica - ABA",
      image: "/yaponira.png?height=300&width=300",
      bgStyle: "bg-gradient-to-br from-teal-50 via-cyan-25 to-blue-50",
    },
    {
      name: "Dr. João Santos",
      specialty: "Analista do Comportamento",
      image: "/modelo.png?height=300&width=300",
      bgStyle: "bg-gradient-to-br from-rose-50 via-pink-25 to-purple-50",
    },
    {
      name: "Dra. Ana Costa",
      specialty: "Psicóloga Infantil",
      image: "/modelo.png?height=300&width=300",
      bgStyle: "bg-gradient-to-br from-amber-50 via-yellow-25 to-orange-50",
    },
    {
      name: "Dr. Pedro Lima",
      specialty: "Terapeuta ABA",
      image: "/modelo.png?height=300&width=300",
      bgStyle: "bg-gradient-to-br from-violet-50 via-purple-25 to-indigo-50",
    },
  ];

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
      <div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        id="card-functi"
      >
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            className="py-0 gap-0 overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-64 flex items-center justify-center">
              {/* Background com gradiente pastel */}
              <div className={`absolute inset-0 ${member.bgStyle}`} />

              {/* Imagem do modelo centralizada */}
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width="300"
                height="300"
                className="relative z-10 max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-105"
              />
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
