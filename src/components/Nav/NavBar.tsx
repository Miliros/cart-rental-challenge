export const NavBar = () => {
  return (
    <nav className="font-font2 flex flex-wrap items-center justify-between w-full px-4   lg:px-8 lg:py-3 text-[var(--color-custom-dark-blue)]">
      <div className="flex items-center w-full lg:w-auto mb-4 lg:mb-0">
        <img
          src="/images/icons_logos/logo-udr.svg"
          alt="Logo"
          className="h-8 w-auto"
        />
      </div>

      <ul className="flex flex-col lg:flex-row lg:gap-8 w-full lg:w-auto text-sm  text-center lg:text-left font-bold">
        <li className="mb-2 lg:mb-0">
          <a
            href="#"
            className="font-[var(--font-font1)] block lg:inline hover:text-blue-600"
          >
            Buscar transacción
          </a>
        </li>
        <li className="mb-2 lg:mb-0">
          <a href="#" className="block lg:inline hover:text-blue-600 font-bold">
            Políticas
          </a>
        </li>
        <li className="mb-2 lg:mb-0">
          <a href="#" className="block lg:inline hover:text-blue-600 font-bold">
            Contáctanos
          </a>
        </li>
      </ul>

      <div className="flex flex-col lg:flex-row items-center w-full lg:w-auto gap-4">
        <div className="flex items-center justify-center gap-2 bg-[var(--color-custom-light-gray)] rounded-md p-3 h-10 w-full lg:w-auto">
          <img
            src="/images/icons_logos/spa-flag.svg"
            alt="Español"
            className="w-5 h-5"
          />
          <span className="text-xs lg:text-sm font-medium">Español</span>
          <button className="ml-1 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
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

        <div className="flex items-center justify-center gap-2 bg-[var(--color-custom-light-gray)] rounded-md p-3 h-10 w-full lg:w-auto">
          <span className="text-xs lg:text-sm font-medium">Hola, Javier</span>
          <div className="flex items-center justify-center w-6 h-6 text-white bg-[var(--color-custom-blue)] rounded-full">
            J
          </div>
        </div>
      </div>
    </nav>
  );
};
