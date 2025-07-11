import type React from "react";

import { useState } from "react";
import { MapPin, Clock, Send } from "lucide-react";
import zap from "@/assets/whatsapp.svg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, phone, message } = formData;

    const text = `Olá, meu nome é ${name}.\nMeu telefone é: ${phone}\n\nMensagem:\n${message}`;

    const encodedText = encodeURIComponent(text);

    const whatsappNumber = "5567993171331";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(whatsappURL, "_blank");
  };

  const ZapIcon = () => {
    return <img src={zap} alt="WhatsApp" className="w-6 h-6" />;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: ZapIcon,
      title: "Telefone",
      info: "(67) 9317-1331",
      link: "tel:+5567993171331",
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "R. Mário César Mancini, 1329\nTrês Lagoas, MS",
      link: "https://maps.app.goo.gl/9Z9fWG45iiqm6zfq6",
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Segunda à Sexta\n7:00 - 17:00",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full mb-6">
            <span className="text-teal-700 font-medium text-sm">
              Entre em Contato
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Vamos{" "}
            <span className="bg-gradient-to-r from-teal-500 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              Conversar?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos aqui para ajudar. Entre em contato conosco para agendar uma
            consulta ou esclarecer suas dúvidas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100 block"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-pink-400 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                    {item.info}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="(67) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Como podemos ajudar você?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-pink-400 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
              >
                Enviar Mensagem
                <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="overflow-hidden rounded-2xl h-64 md:h-80 mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.5485496528504!2d-51.687970924750495!3d-20.769084380816103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9490990007029f59%3A0x4dd17511d8125abf!2sInovar%20ABA!5e0!3m2!1spt-BR!2sbr!4v1752240848984!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
