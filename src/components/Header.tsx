import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  const baseClass =
    "nav-link px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <NavLink to="/" className="text-left focus:outline-none">
          <div className="text-2xl font-bold text-[#00838F] tracking-tight">
            <span className="block">Equipe</span>
            <span className="block text-sm font-normal text-gray-600 -mt-1">Vida Nova</span>
          </div>
        </NavLink>

        <nav className="flex space-x-2 sm:space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${baseClass} bg-[#00838F] text-white shadow-md hover:bg-opacity-90`
                : `${baseClass} text-[#263238] hover:bg-[#E0F7FA]`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? `${baseClass} bg-[#00838F] text-white shadow-md hover:bg-opacity-90`
                : `${baseClass} text-[#263238] hover:bg-[#E0F7FA]`
            }
          >
            Sobre
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? `${baseClass} bg-[#00838F] text-white shadow-md hover:bg-opacity-90`
                : `${baseClass} text-[#263238] hover:bg-[#E0F7FA]`
            }
          >
            Contato
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;