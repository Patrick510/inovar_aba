"use client";

import { Instagram, Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "Sobre" },
    { id: "mission", label: "Missão" },
    { id: "team", label: "Equipe" },
    { id: "contact", label: "Contato" },
  ];

  const socialLinks = [
    // { icon: Facebook, href: "#", label: "Facebook" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/inovar_aba?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      label: "Instagram",
    },
    // { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {/* Logo and Description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="Inovar ABA"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-2xl font-bold">Inovar ABA</span>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-md">
              Transformando vidas através da Análise do Comportamento Aplicada.
              Promovemos o desenvolvimento de habilidades sociais, comunicativas
              e comportamentais com métodos cientificamente comprovados.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-teal-500 hover:to-pink-400 transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-400 hover:text-white transition-colors duration-200 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">(67) 9317-1331</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 break-words">
                    centromultidisciplinardepsicol@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">
                    R. Mário César Mancini, 1329
                    <br />
                    Três Lagoas, MS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Inovar ABA. Todos os direitos
            reservados.
          </p>

          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
