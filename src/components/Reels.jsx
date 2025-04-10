function Reels() {
  return (
    <section
      className="fixed top-8"
      style={{
        left: "calc(331px + ((100vw - 331px - 540px) / 2))",
        width: "540px",
      }}
    >
      <div className="flex flex-row justify-between">
        <div className="relative w-[468px] h-[832px] rounded-md overflow-hidden">
          <img
            src="https://picsum.photos/id/32/500/900"
            alt="Reel"
            className="absolute inset-0 w-full h-full object-cover cursor-pointer"
          />

          <div className="absolute bottom-0 left-0 w-full z-10 p-5 text-white bg-gradient-to-t from-black/60 to-transparent flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <img
                src="https://picsum.photos/id/12/40"
                alt="Profile"
                className="w-8 h-8 rounded-full cursor-pointer"
              />
              <span className="font-semibold cursor-pointer">username</span>
              <span>•</span>
              <button className="text-sm font-medium border border-gray-400 rounded-md p-1 ml-2 cursor-pointer">
                Seguir
              </button>
            </div>
            <p className="text-sm cursor-pointer">Descripción...</p>
            <div className="flex items-center gap-1 text-sm text-white px-2 py-1 rounded-md backdrop-blur-sm rounded-xl">
              <svg
                aria-label="Imagen del audio"
                className="w-3 h-3"
                fill="currentColor"
                role="img"
                viewBox="0 0 24 24"
              >
                <title>Imagen del audio</title>
                <path d="M21.002 16.972V2.044a.999.999 0 0 0-.36-.769 1.012 1.012 0 0 0-.823-.214L6.816 3.479A1 1 0 0 0 6 4.462v10.864A3.75 3.75 0 1 0 9 19V9.56l9.003-1.675v5.442A3.75 3.75 0 1 0 21.005 17c0-.01-.003-.02-.003-.029Z" />
              </svg>
              <span>username • Audio original</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-end items-center gap-6">
          <button className="cursor-pointer hover:scale-110 transition-transform duration-200">
            <svg
              aria-label="Me gusta"
              className="w-6 h-6"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Me gusta</title>
              <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
            </svg>
            <span className="text-xs">35,4 mil</span>
          </button>
          <button className="cursor-pointer hover:scale-110 transition-transform duration-200">
            <svg
              aria-label="Comentar"
              className="w-6 h-6"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Comentar</title>
              <path
                d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            <span className="text-xs">3463</span>
          </button>
          <button className="cursor-pointer hover:scale-110 transition-transform duration-200">
            <svg
              aria-label="Compartir"
              className="w-6 h-6"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Compartir</title>
              <line
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="22"
                x2="9.218"
                y1="3"
                y2="10.083"
              />
              <polygon
                fill="none"
                points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
          <button className="cursor-pointer hover:scale-110 transition-transform duration-200">
            <svg
              aria-label="Guardar"
              className="w-6 h-6"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Guardar</title>
              <polygon
                fill="none"
                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
          <button className="cursor-pointer hover:scale-110 transition-transform duration-200">
            <svg
              aria-label="Más"
              className="w-6 h-6"
              fill="currentColor"
              role="img"
              viewBox="0 0 24 24"
            >
              <title>Más</title>
              <circle cx="12" cy="12" r="1.5"></circle>
              <circle cx="6" cy="12" r="1.5"></circle>
              <circle cx="18" cy="12" r="1.5"></circle>
            </svg>
          </button>
          <img
            src="https://picsum.photos/id/12/40"
            alt="Song"
            className="w-6 h-6 rounded-sm object-cover border border-white"
          />
        </div>
      </div>
    </section>
  );
}

export default Reels;
