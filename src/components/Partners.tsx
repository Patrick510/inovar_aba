import { LinkIcon } from "lucide-react";

export default function Partners() {
  const partners = [
    { name: "Kumon", logo: "/kumon.png?height=100&width=200" },
    {
      name: "Escolinha Raira Freitas",
      logo: "/raira.jpeg?height=100&width=200",
    },
    // {
    //   name: "Escolinha de Capoeira",
    //   logo: "/placeholder.svg?height=100&width=200",
    // },
    {
      name: "Meditação Celinei",
      logo: "/celinei.webp?height=100&width=200",
    },
  ];

  const additionalLinks = [
    { label: "Local", href: "#" },
    { label: "Pais", href: "#" },
    { label: "Administrativo", href: "#" },
    { label: "Financeiro", href: "#" },
  ];

  return (
    <section id="partners" className="py-16 md:py-24 bg-white mb-[-7rem]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full mb-6">
            <span className="text-teal-700 font-medium text-sm">
              Nossos Parceiros
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Colaborando para
            <span className="bg-gradient-to-r from-teal-500 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              {" "}
              o Desenvolvimento
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trabalhamos em conjunto com instituições e profissionais que
            compartilham nossa missão de transformar vidas.
          </p>
        </div>

        {/* Partners Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center mb-16">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center space-y-3">
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={150}
                height={75}
                className="object-contain h-16 md:h-20 w-auto rounded-4xl"
              />
              <span className="text-gray-700 text-sm md:text-base font-medium text-center">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Additional Links */}
        {/* <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full mb-6">
            <span className="text-teal-700 font-medium text-sm">
              Links Úteis
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Acesso Rápido a
            <span className="bg-gradient-to-r from-teal-500 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              {" "}
              Informações
            </span>
          </h3>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {additionalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 hover:text-teal-600 transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                <LinkIcon className="w-5 h-5 mr-2" />
                {link.label}
              </a>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
