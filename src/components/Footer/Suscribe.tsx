export const Suscribe = () => {
  return (
    <div className="flex flex-col bg-[var(--color-custom-2)] w-full h-auto justify-center p-8">
      <div className="w-full p-6">
        <div className="flex flex-col space-y-6 items-start md:flex-row md:items-center md:space-y-0 md:space-x-6">
          <div className="w-full md:w-auto">
            <p className="font-font3 text-[16px] text-white leading-tight mb-4">
              ¿Quieres estar al tanto de nuestras novedades?
            </p>
            <p className="text-[12px] font-font1 text-white leading-tight">
              Suscríbete a nuestro newsletter y mantente al día
              <br />
              con nuestras novedades, lanzamientos de <br />
              productos y ofertas exclusivas.
            </p>
          </div>

          <div className="flex flex-col space-y-4 w-full md:w-auto">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
              <div className="w-full md:w-auto">
                <label className="block mb-2 text-sm font-font1 text-white">
                  Nombre
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-none text-sm rounded-lg block w-full md:w-[370px] p-2"
                />
              </div>
              <div className="w-full md:w-auto mt-4 md:mt-0">
                <label className="block mb-2 text-sm font-font1 text-white">
                  Dirección de e-mail
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-none text-sm rounded-lg block w-full md:w-[360px] p-2"
                />
              </div>
              <button className="bg-[var(--color-custom-blue)] text-white text-[12px] rounded-md transition w-full md:w-[140px] h-[35px] font-font3 mt-4 md:mt-7 cursor-pointer">
                ¡Suscríbete!
              </button>
            </div>

            <div className="flex flex-row items-start mt-4">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded mr-3 bg-white border-2 border-blue-500 checked:bg-white checked:border-blue-500"
              />
              <p className="text-[12px] text-[var(--color-custom-blue)] leading-tight font-font1">
                Acepto registrarme en la base de datos de Unión de
                Representaciones para recibir información y promociones en esta
                dirección de correo electrónico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
