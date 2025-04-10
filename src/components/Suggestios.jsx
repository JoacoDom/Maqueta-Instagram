function Suggestios({ username }) {
  return (
    <section className="w-[319px] h-[564px] fixed right-65 top-5">
      <div className="rounded-lg shadow p-4 flex flex-col gap-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-x-2">
            <img
              src="https://i.pravatar.cc/48?u=857369"
              className="w-10 h-10 rounded-full cursor-pointer"
              alt="mi perfil"
            />
            <div>
              <p className="text-sm font-medium cursor-pointer">{username}</p>
              <p className="text-xs text-gray-500">Usuario</p>
            </div>
          </div>
          <button className="text-xs font-semibold text-blue-500 cursor-pointer hover:text-white">
            Cambiar
          </button>
        </div>

        <div className="flex flex-row justify-between">
          <h2 className="font-semibold mb-6 text-sm text-gray-400">
            Sugerencias para ti
          </h2>
          <button className="text-sm cursor-pointer">Ver todo</button>
        </div>
        <div className="flex flex-col gap-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <img
                  src={`https://i.pravatar.cc/40?u=${i}`}
                  className="w-[44px] h-[44px] rounded-full cursor-pointer"
                  alt="user image"
                />
                <div>
                  <p className="text-sm font-medium cursor-pointer">
                    usuario{i + 9}
                  </p>
                  <p className="text-xs text-gray-500">Te sigue</p>
                </div>
              </div>
              <button className="text-sm font-semibold text-blue-500 cursor-pointer hover:text-white">
                Seguir
              </button>
            </div>
          ))}
        </div>
        <div
          className="mt-3 text-[11px] leading-5 flex flex-wrap gap-x-2"
          style={{ color: "rgb(115, 115, 115)" }}
        >
          <span className="cursor-pointer hover:underline">Información</span>
          <span className="cursor-pointer hover:underline">Ayuda</span>
          <span className="cursor-pointer hover:underline">Prensa</span>
          <span className="cursor-pointer hover:underline">API</span>
          <span className="cursor-pointer hover:underline">Empleo</span>
          <br />
          <span className="cursor-pointer hover:underline">Privacidad</span>
          <span className="cursor-pointer hover:underline">Condiciones</span>
          <span className="cursor-pointer hover:underline">Ubicaciones</span>
          <span className="cursor-pointer hover:underline">Idioma</span>
          <span className="cursor-pointer hover:underline">Meta Verified</span>
        </div>

        <p
          className="-mt-2 text-xs relative -top-[8px]"
          style={{ color: "rgb(115, 115, 115)" }}
        >
          © 2025 INSTAGRAM FROM META
        </p>
      </div>
    </section>
  );
}

export default Suggestios;
