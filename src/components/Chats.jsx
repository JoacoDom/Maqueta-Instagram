function Chats({ username }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar mini con íconos */}
      <aside className="w-17 bg-black text-white flex flex-col items-center py-4 space-y-6" />

      {/* Lista de chats */}
      <section className="w-[398px] text-white border-r border-gray-800 overflow-y-auto p-4">
        <div className="p-4 text-xl font-semibold flex flex-row justify-between">
          <span className="cursor-pointer">{username}</span>
          <svg
            aria-label="Nuevo mensaje"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 cursor-pointer"
          >
            <title>Nuevo mensaje</title>
            <path
              d="M12.202 3.203H5.25a3 3 0 0 0-3 3V18.75a3 3 0 0 0 3 3h12.547a3 3 0 0 0 3-3v-6.952"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 0 1 2.004 0l1.224 1.225a1.417 1.417 0 0 1 0 2.004Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="16.848"
              y1="3.924"
              x2="20.076"
              y2="7.153"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-right">
          <div className="flex flex-col items-center">
            <img
              src="https://i.pravatar.cc/150?u=857369"
              alt="Profile"
              className="w-[74px] h-[74px] rounded-full"
            />
            <span className="text-xs text-gray-400">Tu nota</span>
          </div>
        </div>
        <div className="flex flex-row justify-between p-3">
          <span>
            <strong>Mensajes</strong>
          </span>
          <span className="text-sm text-gray-400 cursor-pointer">
            <strong>Solicitudes</strong>
          </span>
        </div>

        <ul className="h-full">
          <li className="p-3 hover:bg-gray-800 cursor-pointer min-h-[72px] py-2">
            <div className="flex items-center gap-3 h-[72px]">
              <img
                src="https://picsum.photos/id/1005/60"
                className="w-[56px] h-[56px] rounded-full"
                alt="profile"
              />
              <div>
                <p className="font-medium">username854</p>
                <p className="text-sm text-gray-400">
                  Le gustó un mensaje • 3 h
                </p>
              </div>
            </div>
          </li>
          <li className="p-3 hover:bg-gray-800 cursor-pointer min-h-[72px] py-2">
            <div className="flex items-center gap-3 h-[72px]">
              <img
                src="https://picsum.photos/id/472/60"
                className="w-[56px] h-[56px] rounded-full"
                alt="profile"
              />
              <div>
                <p className="font-medium">username340</p>
                <p className="text-sm text-gray-400">Enviado • 2 sem</p>
              </div>
            </div>
          </li>
        </ul>
      </section>

      {/* Chat activo */}
      <main className="flex-1 text-white flex flex-col justify-center items-center gap-3">
        <svg
          aria-label="Ayuda"
          role="img"
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-24 h-24"
        >
          <title>Ayuda</title>
          <path
            d="M48 0C21.532 0 0 21.533 0 48s21.532 48 48 48 48-21.532 48-48S74.468 0 48 0Zm0 94C22.636 94 2 73.364 2 48S22.636 2 48 2s46 20.636 46 46-20.636 46-46 46Zm12.227-53.284-7.257 5.507c-.49.37-1.166.375-1.661.005l-5.373-4.031a3.453 3.453 0 0 0-4.989.921l-6.756 10.718c-.653 1.027.615 2.189 1.582 1.453l7.257-5.507a1.382 1.382 0 0 1 1.661-.005l5.373 4.031a3.453 3.453 0 0 0 4.989-.92l6.756-10.719c.653-1.027-.615-2.189-1.582-1.453ZM48 25c-12.958 0-23 9.492-23 22.31 0 6.706 2.749 12.5 7.224 16.503.375.338.602.806.62 1.31l.125 4.091a1.845 1.845 0 0 0 2.582 1.629l4.563-2.013a1.844 1.844 0 0 1 1.227-.093c2.096.579 4.331.884 6.659.884 12.958 0 23-9.491 23-22.31S60.958 25 48 25Zm0 42.621c-2.114 0-4.175-.273-6.133-.813a3.834 3.834 0 0 0-2.56.192l-4.346 1.917-.118-3.867a3.833 3.833 0 0 0-1.286-2.727C29.33 58.54 27 53.209 27 47.31 27 35.73 36.028 27 48 27s21 8.73 21 20.31-9.028 20.31-21 20.31Z"
            fill="currentColor"
          />
        </svg>
        <p className="text-xl">Tus mensajes</p>
        <p className="text-sm text-gray-400">
          Envía fotos y mensajes privados a un amigo o un grupo.
        </p>
        <button
          type="button"
          className="p-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white transition-colors cursor-pointer text-sm"
        >
          Enviar mensaje
        </button>
      </main>
    </div>
  );
}

export default Chats;
