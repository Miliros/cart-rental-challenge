export const Footer = () => {
  return (
    <div>
      <div className="w-full">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row py-14 gap-x-6 gap-y-10">
            {/* Logo + redes sociales */}
            <div className="w-full lg:w-[200px] mr-0 lg:mr-20 text-center lg:text-left mb-10 lg:mb-0">
              <img
                src="/images/icons_logos/logo-udr.svg"
                className="w-[200px] mb-6 mx-auto lg:mx-0"
                alt="Logo UDR"
              />
              <div className="flex justify-center lg:justify-start space-x-4 w-full max-w-[200px] mx-auto lg:mx-0">
                {[
                  "wa.png",
                  "instagram.png",
                  "fb.png",
                  "linkedin.png",
                  "Path.png",
                ].map((icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-7 h-7 rounded-lg bg-[var(--color-custom-blue)] flex justify-center items-center hover:bg-indigo-600"
                  >
                    <img
                      src={`/images/${icon}`}
                      className="w-4 h-4"
                      alt={`Icono ${icon}`}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Secciones en grid responsive: 2 cols mobile, 4 cols desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full lg:w-auto">
              {[
                {
                  title: "¿Necesitas ayuda?",
                  items: [
                    "union@udr.com.co",
                    "Teléfono: +57 601 589 7880 / 99",
                    "Calle 20 No. 4-55, Piso 3, Bogotá",
                  ],
                },
                {
                  title: "Instructivos",
                  items: ["Disney", "Universal", "Avis Budget", "Terrawind"],
                  className: "pl-0 md pl-7",
                },
                {
                  title: "Información",
                  items: [
                    "Aviso legal",
                    "Políticas de privacidad",
                    "Términos y condiciones",
                    "Ver mis transacciones",
                  ],
                },
                {
                  title: "Nosotros",
                  items: [
                    "¿Quiénes somos?",
                    "NIT: 860535628-1",
                    "Registro Nacional de Turismo No. 1041",
                  ],
                },
              ].map((section, index) => (
                <div
                  key={index}
                  className={`text-center sm:text-left w-full ${
                    section.className || ""
                  }`}
                >
                  <h4 className="font-font3 text-[var(--color-custom-blue)] text-[18px] mb-4">
                    {section.title}
                  </h4>
                  <ul className="text-sm space-y-3 justify-start">
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="w-full max-w-[220px] mx-auto sm:mx-0"
                      >
                        <a
                          href="#"
                          className="font-font1 text-[var(--custom-dark-blue)] text-[13px]"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Logos en la parte inferior */}
          <div className="border-t border-b border-gray-200">
            <div className="flex flex-wrap justify-between items-center py-5 gap-4">
              <img
                src="/images/company_logos/anato-logo.png"
                className="w-[120px] h-auto"
                alt="Anato"
              />
              <img
                src="/images/company_logos/camara-colombiana-comercio-logo.png"
                className="w-[120px] h-auto"
                alt="Cámara de Comercio"
              />
              <img
                src="/images/company_logos/superintendencia-logo.png"
                className="w-[120px] h-auto"
                alt="Superintendencia"
              />
              <img
                src="/images/company_logos/super-transporte-logo.png"
                className="w-[120px] h-auto"
                alt="Super Transporte"
              />
              <img
                src="/images/company_logos/aeronautica-logo.png"
                className="w-[120px] h-auto"
                alt="Aeronautica"
              />
              <img
                src="/images/icons_logos/iata-logo.svg"
                className="w-[120px] h-[36px]"
                alt="IATA"
              />
            </div>

            <div className="py-4 border-t border-gray-200">
              <div className="flex flex-col lg:flex-row items-center lg:justify-between">
                <span className="font-font1 text-[var(--custom-dark-blue)] text-[13px] text-center lg:text-left">
                  © 2025 - Copyright Unión de Representaciones S.A.S. Todos los
                  derechos reservados.
                </span>
                <ul className="flex items-center gap-9 mt-4 lg:mt-0">
                  <img
                    src="images/icons_logos/greenFlame-logo.svg"
                    className="w-[110px]"
                    alt="Green Flame"
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
