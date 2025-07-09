"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Brain,
  Users,
  Heart,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";

function MissionCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: "/placeholder.svg?height=400&width=500",
      alt: "Terapia ABA em ação",
    },
    {
      src: "/placeholder.svg?height=400&width=500",
      alt: "Crianças em atividades terapêuticas",
    },
    {
      src: "/placeholder.svg?height=400&width=500",
      alt: "Ambiente acolhedor da clínica",
    },
    {
      src: "/placeholder.svg?height=400&width=500",
      alt: "Profissionais trabalhando com crianças",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000); // Muda a cada 3 segundos

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-gray-900">Nossa Missão</h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          Promover o desenvolvimento de habilidades sociais, comunicativas e
          comportamentais através da Análise do Comportamento Aplicada,
          proporcionando maior qualidade de vida e independência para nossos
          pacientes e suas famílias.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Acreditamos no potencial de cada indivíduo e trabalhamos com dedicação
          para alcançar objetivos significativos e duradouros.
        </p>
      </div>

      <div className="relative">
        {/* Container das imagens */}
        <div className="relative h-96 overflow-hidden rounded-xl shadow-lg">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 translate-x-0"
                  : index < currentSlide
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
              }`}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Indicadores */}
        <div className="flex justify-center space-x-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-teal-500 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ver imagem ${index + 1}`}
            />
          ))}
        </div>

        {/* Barra de progresso */}
        <div className="mt-3 w-full bg-gray-200 rounded-full h-1">
          <div
            className="bg-gradient-to-r from-teal-500 to-pink-400 h-1 rounded-full transition-all duration-100 ease-linear"
            style={{
              width: `${((currentSlide + 1) / images.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function InovarABALanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="Inovar ABA"
                width="50"
                height="50"
                className="rounded-full"
              />
              <span className="text-2xl font-bold text-gray-900">
                Inovar ABA
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-teal-500 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-teal-500 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-gray-700 hover:text-teal-500 transition-colors"
              >
                Our Team
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-teal-500 transition-colors"
              >
                Contact Us
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-left text-gray-700 hover:text-teal-500 transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-gray-700 hover:text-teal-500 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("team")}
                  className="text-left text-gray-700 hover:text-teal-500 transition-colors"
                >
                  Our Team
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-gray-700 hover:text-teal-500 transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Home Section */}
      <section
        id="home"
        className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-teal-50 via-pink-50 to-yellow-50"
      >
        <div
          className="container mx-auto px-4"
          style={{ marginLeft: "3rem", marginRight: "3rem" }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Transformando Vidas com
                  <span className="bg-gradient-to-r from-teal-500 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                    {" "}
                    ABA
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Especialistas em Análise do Comportamento Aplicada, oferecendo
                  tratamento personalizado e baseado em evidências científicas
                  para crianças e adolescentes.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="bg-teal-500 hover:bg-teal-600"
                >
                  Agendar Consulta
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("about")}
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Terapia ABA"
                width="600"
                height="500"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-white"
        style={{ marginLeft: "3rem", marginRight: "3rem" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sobre a Inovar ABA
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos uma clínica especializada em Análise do Comportamento
              Aplicada (ABA), dedicada a promover o desenvolvimento e bem-estar
              de crianças e adolescentes.
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
                  Utilizamos métodos cientificamente comprovados para garantir
                  os melhores resultados.
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
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="py-20 bg-gray-50"
        style={{ marginLeft: "3rem", marginRight: "3rem" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Equipe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça os profissionais dedicados que fazem a diferença na vida
              de nossos pacientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden group cursor-pointer"
              >
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
                  <p className="text-teal-500 font-medium">
                    {member.specialty}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos aqui para ajudar. Entre em contato conosco para agendar
              uma consulta ou esclarecer suas dúvidas.
            </p>
          </div>

          <div
            className="grid lg:grid-cols-2 gap-12"
            style={{ marginLeft: "3rem", marginRight: "3rem" }}
          >
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-teal-500" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Telefone</h3>
                    <p className="text-gray-600">(11) 9999-9999</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-teal-500" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">contato@inovaraba.com.br</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-teal-500" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Endereço</h3>
                    <p className="text-gray-600">
                      Rua das Flores, 123
                      <br />
                      São Paulo, SP - 01234-567
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Horário de Funcionamento
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: Fechado</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <CardContent className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Envie uma Mensagem
                </h3>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome
                      </label>
                      <Input placeholder="Seu nome" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input type="email" placeholder="seu@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <Input placeholder="(11) 99999-9999" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      placeholder="Como podemos ajudar você?"
                      rows={4}
                    />
                  </div>
                  <Button className="w-full bg-teal-500 hover:bg-teal-600">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
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
              <p className="text-gray-400">
                Transformando vidas através da Análise do Comportamento
                Aplicada.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Links Rápidos</h3>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("home")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("team")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Our Team
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contato</h3>
              <div className="space-y-2 text-gray-400">
                <p>(11) 9999-9999</p>
                <p>contato@inovaraba.com.br</p>
                <p>
                  Rua das Flores, 123
                  <br />
                  São Paulo, SP
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Inovar ABA. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
