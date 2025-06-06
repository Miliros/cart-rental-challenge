export const Footer = () => {
  return (
    <div>
      <div className="w-full pl-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 ">
          <div className="flex flex-row py-14 mr-18 gap-x-1">
            <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0 w-2xs mr-20">
              <img
                src="/images/icons_logos/logo-udr.svg"
                className="w-[200px] mb-6 mx-auto lg:mx-0"
              />

              <div className="flex space-x-4 justify-center lg:justify-start sm:mt-0 w-[200px]">
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
                    className="w-7 h-7 mr-3 rounded-lg bg-[var(--color-custom-blue)] flex justify-center items-center hover:bg-indigo-600"
                  >
                    <img src={`/images/${icon}`} className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

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
              <div
                key={index}
                className="text-center sm:text-left w-[300px] grid"
              >
                <h4 className="font-font3 text-[var(--color-custom-blue)] text-[18px] mb-4 bg">
                  {section.title}
                </h4>
                <ul className="text-sm space-y-3 ">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="w-[230px]">
                      <a
                        href="javascript:;"
                        className="font-font1 text-[var(--custom-dark-blue)] text-[13px] "
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-b border-gray-200">
            <div className="flex flex-row w-full justify-between items-center py-5">
              <img
                src="/images/company_logos/anato-logo.png"
                className="w-[120px] h-auto"
              />
              <img
                src="/images/company_logos/camara-colombiana-comercio-logo.png"
                className="w-[120px] h-auto"
              />
              <img
                src="/images/company_logos/superintendencia-logo.png"
                className="w-[120px] h-auto"
              />
              <img
                src="/images/company_logos/super-transporte-logo.png"
                className="w-[120px] h-auto"
              />
              <img
                src="/images/company_logos/aeronautica-logo.png"
                className="w-[120px] h-auto"
              />
              <img
                src="/images/icons_logos/iata-logo.svg"
                className="w-[120px] h-[36PX]"
              />
            </div>
            <div className="py-4 border-t border-gray-200 ">
              <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                <span className="font-font1 text-[var(--custom-dark-blue)] text-[13px]">
                  © 2025 - Copyright Unión de Representaciones S.A.S. Todos los
                  derechos reservados.
                </span>
                <ul className="flex items-center gap-9 mt-4 lg:mt-0">
                  <img
                    src="images/icons_logos/greenFlame-logo.svg"
                    className="w-[110px]"
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
