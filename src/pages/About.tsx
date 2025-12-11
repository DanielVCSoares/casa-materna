import React from "react";
import DoctorCard from "../components/DoctorCard";

const About: React.FC = () => {
  const doctors = [
    {
      name: "Dra. Lais",
      crm: "CRM/MG 12345",
      specialty: "Obstetrícia e Ginecologia",
      description: "Especialista em Parto Humanizado e saúde da mulher na adolescência.",
      imageSrc: "./Lala.jpeg", // imagem da Dra. Camila
    },
    {
      name: "Dra. Luciana Rabelo",
      crm: "CRM/MG 67890",
      specialty: "Ginecologia e Patologia Cervical",
      description: "Foco em gestações de alto risco e planejamento familiar avançado.",
      imageSrc: "./Lu.jpeg", // imagem da Dra. Isabella
    },
    {
      name: "Dra. Mariana",
      crm: "CRM/MG 11223",
      specialty: "Obstetrícia e Ultrassonografia",
      description: "Responsável pelo acompanhamento por imagem e cursos de gestantes.",
      imageSrc: "./teste.jpeg", // imagem da Dra. Laura
    },
    {
      name: "Dra. Natalia",
      crm: "CRM/MG 44556",
      specialty: "Ginecologia e Endoscopia",
      description: "Atua na prevenção, rotinas ginecológicas e acompanhamento de pré-natal.",
      imageSrc: "./logofooter.png", // imagem da Dra. Sofia
    },
  ];

  return (
    <section id="aboutPage" className="page-content bg-[#E0F7FA] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#37806A] mb-4">Conheça a Equipe</h2>
          <p className="text-xl text-[#263238] max-w-3xl mx-auto">
            Somos 4 médicas ginecologistas e obstetras unidas pelo propósito de oferecer um cuidado humanizado e de excelência em todas as fases da vida da mulher, com foco especial no ciclo gravídico-puerperal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} {...doctor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
