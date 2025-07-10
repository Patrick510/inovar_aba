import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function SectionContact() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Entre em Contato
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Estamos aqui para ajudar. Entre em contato conosco para agendar uma
          consulta ou esclarecer suas dúvidas.
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
                <p className="text-gray-600">(67) 9317-1331</p>
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
                  R. Mário César Mancini, 1329
                  <br />
                  Três Lagoas, MS - 79645-250
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
            <h3 className="text-2xl font-bold text-gray-900">Falo Conosco</h3>
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
                <Textarea placeholder="Como podemos ajudar você?" rows={4} />
              </div>
              <Button className="w-full bg-teal-500 hover:bg-teal-600">
                Enviar Mensagem
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
