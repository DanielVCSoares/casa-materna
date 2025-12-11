import React from "react";
import { Heart, ShieldCheck, ClipboardCheck } from "lucide-react";
import ValueCard from "../components/ValueCard";

interface HomeProps {
  setPage: React.Dispatch<React.SetStateAction<"home" | "about" | "contact">>;
}

const Home: React.FC<HomeProps> = ({ setPage }) => (
  <section id="homePage" className="page-content">
    <div 
      className="hero-section h-[60vh] md:h-[75vh] flex items-center justify-center relative shadow-xl"
      style={{
        backgroundImage: "url('https://placehold.co/1200x800/80DEEA/ffffff?text=Acolhimento+e+Saúde')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-[#37806A] opacity-50"></div>
      <div className="z-10 text-center max-w-4xl p-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
          Cuidado e Acolhimento em Cada Etapa
        </h1>
        <p className="text-xl sm:text-2xl text-[#E0F7FA] font-light drop-shadow-md">
          Sua jornada com a confiança e expertise de 4 especialistas em obstetrícia.
        </p>
        <button onClick={() => setPage("about")} className="mt-8 inline-block bg-white text-[#E46A2D] font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105">
          Conheça a Equipe
        </button>
      </div>
    </div>

    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-[#E46A2D] mb-10">Nossa Missão</h2>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <ValueCard icon={<Heart className="h-10 w-10 mx-auto mb-4 text-[#37806A]" />} title="Acolhimento" description="Criamos um ambiente seguro e de suporte para todas as gestantes." />
        <ValueCard icon={<ShieldCheck className="h-10 w-10 mx-auto mb-4 text-[#37806A]" />} title="Segurança" description="Protocolos rigorosos e expertise para garantir a saúde da mãe e do bebê." />
        <ValueCard icon={<ClipboardCheck className="h-10 w-10 mx-auto mb-4 text-[#37806A]" />} title="Evidência" description="Trabalhamos com base nas melhores e mais atuais evidências científicas." />
      </div>
    </div>
  </section>
);

export default Home;