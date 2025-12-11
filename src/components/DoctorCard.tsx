import React from "react";

type DoctorCardProps = {
  name: string;
  crm: string;
  specialty: string;
  description: string;
  imageSrc?: string; // URL da foto do médico
};

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  crm,
  specialty,
  description,
  imageSrc,
}) => (
  <div className="doctor-card bg-white rounded-xl shadow-lg overflow-hidden text-center transition-transform transform hover:scale-[1.02] duration-300">
    <div className="w-full h-56 bg-[#37806A] bg-opacity-20 flex items-center justify-center overflow-hidden">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={name}
          className="object-cover w-full h-full"
        />
      ) : (
        <span className="text-4xl text-[#E46A2D] font-bold">
          {/* fallback caso não tenha imagem */}
          {name[0]}
        </span>
      )}
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-dark-text mb-1">{name}</h3>
      <p className="text-sm text-[#E46A2D] font-semibold mb-3">
        {crm} - {specialty}
      </p>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

export default DoctorCard;