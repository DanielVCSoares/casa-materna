import React from "react";
import logo from "../assets/IA sem fundo.png";

type HeaderProps = {
  currentPage: "home" | "about" | "contact";
  setPage: React.Dispatch<React.SetStateAction<"home" | "about" | "contact">>;
};

const Header: React.FC<HeaderProps> = ({ currentPage, setPage }) => {
  const getButtonClass = (page: "home" | "about" | "contact") => {
    const base =
      "nav-link px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200";
    return currentPage === page
      ? `${base} bg-[#37806A] text-[#E46A2D] shadow-md hover:bg-opacity-90`
      : `${base} text-[#E46A2D] hover:bg-[#37806A]`;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo em PNG */}
        <button
          onClick={() => setPage("home")}
          className="focus:outline-none"
        >
          <img
            src={logo} // caminho da sua logo
            alt="Logo Casa Materna"
            className="h-16 w-auto hover:scale-105 transition-transform duration-200"
          />
        </button>

        {/* Navegação */}
        <nav className="flex space-x-2 sm:space-x-4">
          <button onClick={() => setPage("home")} className={getButtonClass("home")}>
            Home
          </button>
          <button onClick={() => setPage("about")} className={getButtonClass("about")}>
            Sobre
          </button>
          <button onClick={() => setPage("contact")} className={getButtonClass("contact")}>
            Contato
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;