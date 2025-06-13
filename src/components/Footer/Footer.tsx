export const Footer = () => {
  return (
    <div className="w-full bg-white">
      <div className="px-4 md:px-20">
        <div className="mx-auto max-w-7xl">
          {/* Sección superior del footer */}
          <div className="flex flex-col md:flex-row py-10 gap-y-10 md:gap-y-0 md:gap-x-8">
            {/* Logo y redes sociales */}
            <div className="flex flex-col items-center md:items-start md:w-1/4">
              <img
                src="/images/icons_logos/logo-udr.svg"
                className="w-[200px] mb-6"
                alt="Logo Unión de Representaciones"
              />
              <div className="flex space-x-4">
                {[
                  "wa.png",
                  "instagram.png",
                  "fb.png",
                  "linkedin.png",
                  "Path.png",
                ].map((icon, index) => (
                  <a
                    key={index}
                    href="javascript:;"
                    className="w-8 h-8 rounded-lg bg-[var(--color-custom-blue)] flex justify-center items-center hover:bg-indigo-600"
                  >
                    <img
                      src={`/images/${icon}`}
                      className="w-4 h-4"
                      alt={`${icon} icon`}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Secciones del footer */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-x-8 w-full">
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
                <div key={index}>
                  <h4 className="font-font3 text-[var(--color-custom-blue)] text-[16px] mb-4">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a
                          href="javascript:;"
                          className="font-font1 text-[var(--custom-dark-blue)] text-[14px]"
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

          {/* Sección intermedia con logos */}
          <div className="border-t border-b border-gray-200 py-6 flex flex-wrap justify-center gap-6">
            {[
              "anato-logo.png",
              "camara-colombiana-comercio-logo.png",
              "superintendencia-logo.png",
              "super-transporte-logo.png",
              "aeronautica-logo.png",
              "iata-logo.svg",
            ].map((logo, index) => (
              <div
                key={index}
                className="w-[100px] h-auto flex justify-center items-center"
              >
                <img
                  src={`/images/company_logos/${logo}`}
                  className="max-w-full"
                  alt={logo}
                />
              </div>
            ))}
          </div>

          {/* Sección inferior con copyright */}
          <div className="py-6 border-t border-gray-200">
            <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
              <span className="font-font1 text-[var(--custom-dark-blue)] text-[12px] text-center">
                © 2025 - Copyright Unión de Representaciones S.A.S. Todos los
                derechos reservados.
              </span>
              <img
                src="/images/icons_logos/greenFlame-logo.svg"
                className="w-[110px]"
                alt="Green Flame Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
