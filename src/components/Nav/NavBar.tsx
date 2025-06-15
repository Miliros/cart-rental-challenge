import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="font-font2 flex flex-wrap items-center justify-between w-full pt-3 pb-3 text-[var(--color-custom-dark-blue)]  mb-2">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <div className="flex items-center">
          <img
            src="/images/icons_logos/logo-udr.svg"
            alt="Logo"
            className="h-8 w-auto"
          />
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[var(--color-custom-dark-blue)] focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? "flex flex-col gap-4 mt-4" : "hidden"
        } lg:flex lg:flex-row lg:items-center lg:gap-8 w-full lg:w-auto`}
      >
        <ul className="flex flex-col lg:flex-row lg:gap-8 w-full lg:w-auto text-sm text-left lg:text-left font-bold">
          <li>
            <a
              href="#"
              className="font-[var(--font-font1)] block lg:inline hover:text-blue-600 font-font3"
            >
              Buscar transacción
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block lg:inline hover:text-blue-600 font-font3"
            >
              Políticas
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block lg:inline hover:text-blue-600 font-font3"
            >
              Contáctanos
            </a>
          </li>
        </ul>

        <div
          className={`flex ${
            isMenuOpen ? "flex-row justify-start gap-x-4" : "flex-col gap-y-2"
          } lg:flex-row lg:gap-4 items-center w-full lg:w-auto`}
        >
          <div className="flex items-center gap-1 lg:gap-2 bg-[var(--color-custom-light-gray)] rounded-md p-2 lg:p-3 h-10 w-full max-w-[150px] lg:max-w-none lg:w-auto">
            <img
              src="/images/icons_logos/spa-flag.svg"
              alt="Español"
              className="w-4 h-4 lg:w-5 lg:h-5"
            />
            <span className="text-xs lg:text-sm font-medium truncate">
              Español
            </span>
            <button className="ml-1 text-xs lg:text-sm cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 lg:w-4 lg:h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.44l3.71-4.21a.75.75 0 011.08 1.04l-4 4.5a.75.75 0 01-1.08 0l-4-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-center gap-1 lg:gap-2 bg-[var(--color-custom-light-gray)] rounded-md p-2 lg:p-3 h-10 w-full max-w-[150px] lg:max-w-none lg:w-auto">
            <span className="text-xs lg:text-sm font-medium truncate">
              Hola, Javier
            </span>
            <div className="flex items-center justify-center w-5 h-5 lg:w-6 lg:h-6 text-white bg-[var(--color-custom-blue)] rounded-full text-xs lg:text-sm">
              J
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
