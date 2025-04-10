function ProfileMain() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-row justify-center gap-x-12 pt-4">
        <button className="flex items-center gap-1 text-xs cursor-pointer">
          <svg
            aria-label="Publicaciones"
            fill="currentColor"
            height="12"
            role="img"
            viewBox="0 0 24 24"
            width="12"
          >
            <rect
              fill="none"
              height="18"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              width="18"
              x="3"
              y="3"
            ></rect>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="9.015"
              x2="9.015"
              y1="3"
              y2="21"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="14.985"
              x2="14.985"
              y1="3"
              y2="21"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="21"
              x2="3"
              y1="9.015"
              y2="9.015"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="21"
              x2="3"
              y1="14.985"
              y2="14.985"
            ></line>
          </svg>
          <span className="uppercase tracking-widest">Publicaciones</span>
        </button>
        <button className="flex items-center gap-1 text-xs cursor-pointer">
          <svg
            aria-label="Guardado"
            fill="currentColor"
            height="12"
            role="img"
            viewBox="0 0 24 24"
            width="12"
          >
            <polygon
              fill="none"
              points="20 21 12 13.44 4 21 4 3 20 3 20 21"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></polygon>
          </svg>
          <span className="uppercase tracking-widest">Guardado</span>
        </button>
        <button className="flex items-center gap-1 text-xs cursor-pointer">
          <svg
            aria-label="Etiquetado"
            fill="currentColor"
            height="12"
            role="img"
            viewBox="0 0 24 24"
            width="12"
          >
            <path
              d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
            <path
              d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
            <circle
              cx="12.072"
              cy="11.075"
              fill="none"
              r="3.556"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></circle>
          </svg>
          <span className="uppercase tracking-widest">Etiquetas</span>
        </button>
      </div>
      <div className="grid grid-cols-3 gap-1">
        <img
          src="https://picsum.photos/id/6/300/300"
          alt="Post"
          className="w-[307px] h-[410px] cursor-pointer"
        />
        <img
          src="https://picsum.photos/id/10/300/300"
          alt="Post"
          className="w-[307px] h-[410px] cursor-pointer"
        />
      </div>
      <footer className="w-full flex flex-col items-center text-xs text-gray-400 mt-8 mb-12 gap-y-6">
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 text-center">
          <span className="cursor-pointer hover:underline">Meta</span>
          <span className="cursor-pointer hover:underline">Información</span>
          <span className="cursor-pointer hover:underline">Blog</span>
          <span className="cursor-pointer hover:underline">Empleo</span>
          <span className="cursor-pointer hover:underline">Ayuda</span>
          <span className="cursor-pointer hover:underline">API</span>
          <span className="cursor-pointer hover:underline">Privacidad</span>
          <span className="cursor-pointer hover:underline">Condiciones</span>
          <span className="cursor-pointer hover:underline">Ubicaciones</span>
          <span className="cursor-pointer hover:underline">Instagram Lite</span>
          <span className="cursor-pointer hover:underline">Threads</span>
          <span className="cursor-pointer hover:underline">
            Importación de contactos y no usuarios
          </span>
          <span className="cursor-pointer hover:underline">Meta Verified</span>
        </div>
        <div className="flex flex-row gap-4">
          <select className="cursor-pointer">
            <option value="Español">Español</option>
          </select>
          <p className="mt-3">© 2025 Instagram from Meta</p>
        </div>
      </footer>
    </div>
  );
}

export default ProfileMain;
