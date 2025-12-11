import React, { useState } from "react";
import type { FormEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [formStatus, setFormStatus] = useState<"success" | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
    const response = await fetch("https://email-api-ln5c.onrender.com/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
    });
    if (!response.ok) throw new Error("Erro ao enviar mensagem");
    setFormStatus("success");
    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => setFormStatus(null), 3000);
    } catch (error) {
      alert("Erro ao enviar a mensagem. Tente novamente.");
      console.error(error);
    }
  };

  return (
    <section id="contactPage" className="page-content py-16 bg-[#E0F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#37806A] mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600">
            Estamos prontas para te acolher. Escolha o melhor canal para falar
            conosco.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 bg-white p-8 rounded-xl shadow-xl">
          {/* Canais de contato */}
          <div>
            <h3 className="text-2xl font-semibold text-[#263238] mb-4">
              Nossos Canais
            </h3>
            <div className="space-y-4 text-lg text-gray-700">
              <p className="flex items-center">
                <Phone className="h-6 w-6 mr-3 text-[#E46A2D]" />
                Telefone: (31) 97191-2061
              </p>
              <p className="flex items-center">
                <Mail className="h-6 w-6 mr-3 text-[#E46A2D]" />
                E-mail: contato@casamaterna.com.br
              </p>
              <p className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 mt-1 text-[#E46A2D] flex-shrink-0" />
                Endereço: R. Rio Grande do Norte, 53 - Santa Efigênia - Sala XXX <br /> Belo Horizonte, MG
              </p>
              <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Localização - Casa Materna"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.075868122035!2d-43.92751182478402!3d-19.926614481472417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699f3b2ffb555%3A0xb56c1c12a637c2a4!2sR.%20Rio%20Grande%20do%20Norte%2C%2053%20-%20Santa%20Efig%C3%AAnia%2C%20Belo%20Horizonte%20-%20MG%2C%2030140-080!5e0!3m2!1spt-BR!2sbr!4v1731197100000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
            </div>
          </div>

          {/* Formulário */}
          <div>
            <h3 className="text-2xl font-semibold text-[#263238] mb-4">
              Envie uma Mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Seu Nome
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#37806A] focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Seu E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#37806A] focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#37806A] focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#37806A] text-white font-semibold px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-200"
              >
                Enviar
              </button>
            </form>

            {formStatus === "success" && (
              <div className="mt-4 p-3 rounded-lg text-sm text-center bg-green-100 text-green-800">
                Mensagem enviada com sucesso! Em breve, entraremos em contato.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;