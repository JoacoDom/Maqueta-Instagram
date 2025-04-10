function ProfileHeader({ username }) {
  return (
    <header>
      <div className="flex gap-16 items-start pb-10">
        {/* Imagen de perfil */}
        <div className="flex-shrink-0">
          <img
            src="https://i.pravatar.cc/150?u=857369"
            alt="Profile Image"
            className="w-36 h-36 rounded-full object-cover cursor-pointer"
          />
        </div>

        {/* Info del usuario */}
        <div className="flex flex-col gap-4">
          {/* Usuario + botones */}
          <div className="flex items-center gap-3">
            <h2 className="text-2xl cursor-pointer">{username}</h2>
            <button
              className="px-4 py-1 text-sm font-semibold rounded-md hover:bg-gray-700 cursor-pointer"
              style={{ backgroundColor: "rgba(115, 115, 115, 0.4)" }}
            >
              Editar perfil
            </button>
            <button
              className="px-4 py-1 text-sm font-semibold rounded-md hover:bg-gray-700 cursor-pointer"
              style={{ backgroundColor: "rgba(115, 115, 115, 0.4)" }}
            >
              Ver archivo
            </button>

            {/* Icono de configuración */}
            <button className="p-2 rounded-full cursor-pointer">
              <svg
                aria-label="Opciones"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <title>Opciones</title>
                <circle
                  cx="12"
                  cy="12"
                  fill="none"
                  r="8.635"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 
         16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 
         .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 
         1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 
         12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 
         4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 
         5.587l.348 1.062a1.269 1.269 0 0 1-.096 
         1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 
         1.318-1.317-.348-1.062a1.269 1.269 0 0 1 
         .096-1.03m-14.956.001a1.269 1.269 0 0 1 
         .096 1.03l-.348 1.06 1.317 1.318 
         1.062-.348a1.269 1.269 0 0 1 
         1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 
         1.269 0 0 1-1.03-.096"
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>

          {/* Stats: publicaciones, seguidores, seguidos */}
          <div className="flex gap-8 text-sm">
            <p>
              <span className="font-semibold">2</span> publicaciones
            </p>
            <p className="cursor-pointer">
              <span className="font-semibold cursor-pointer">4,321</span>{" "}
              seguidores
            </p>
            <p className="cursor-pointer">
              <span className="font-semibold">378</span> seguidos
            </p>
          </div>

          {/* Nombre real y bio */}
          <div>
            <p className="font-semibold">Usuario</p>
            <p className="text-sm">Descripción</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ProfileHeader;
