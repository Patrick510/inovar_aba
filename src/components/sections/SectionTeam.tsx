import { Card, CardContent } from "../ui/card";

export default function SectionTeam() {
  const teamMembers = [
    {
      name: "Dra. Maria Silva",
      specialty: "Psicóloga Clínica - ABA",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. João Santos",
      specialty: "Analista do Comportamento",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dra. Ana Costa",
      specialty: "Psicóloga Infantil",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Pedro Lima",
      specialty: "Terapeuta ABA",
      image: "/placeholder.svg?height=300&width=300",
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

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <Card key={index} className="overflow-hidden group cursor-pointer">
            <div className="relative overflow-hidden">
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width="300"
                height="300"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <CardContent className="p-6 text-center">
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
