import Link from "next/link";

function SecondaryNavbar({ minimized }) {
  return (
    <ul className={minimized ? "w-12 flex flex-col" : ""}>
      <li>
        <Link
          href="https://aistudio.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row gap-[12px]"
        >
          <svg
            aria-label=""
            className="x1lliihq x1n2onr6 xyb1xck"
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <title></title>
            <path
              clipRule="evenodd"
              d="M3 17C3 19.2091 4.79086 21 7 21C9.20914 21 11 19.2091 11 17C11 14.7909 9.20914 13 7 13C4.79086 13 3 14.7909 3 17ZM7 19C5.89543 19 5 18.1046 5 17C5 15.8954 5.89543 15 7 15C8.10457 15 9 15.8954 9 17C9 18.1046 8.10457 19 7 19Z"
              fill="ig-primary-icon"
              fillRule="evenodd"
            ></path>
            <path
              clipRule="evenodd"
              d="M3 7C3 9.20914 4.79086 11 7 11C9.20914 11 11 9.20914 11 7C11 4.79086 9.20914 3 7 3C4.79086 3 3 4.79086 3 7ZM7 9C5.89543 9 5 8.10457 5 7C5 5.89543 5.89543 5 7 5C8.10457 5 9 5.89543 9 7C9 8.10457 8.10457 9 7 9Z"
              fill="ig-primary-icon"
              fillRule="evenodd"
            ></path>
            <path
              clipRule="evenodd"
              d="M13 17C13 19.2091 14.7909 21 17 21C19.2091 21 21 19.2091 21 17C21 14.7909 19.2091 13 17 13C14.7909 13 13 14.7909 13 17ZM17 19C15.8954 19 15 18.1046 15 17C15 15.8954 15.8954 15 17 15C18.1046 15 19 15.8954 19 17C19 18.1046 18.1046 19 17 19Z"
              fill="ig-primary-icon"
              fillRule="evenodd"
            ></path>
            <path
              d="M16.441 10.6266C16.6549 11.1245 17.3625 11.1245 17.5765 10.6266L18.3939 8.72443C18.4564 8.57898 18.5725 8.46316 18.7183 8.40081L20.6256 7.58558C21.1248 7.37223 21.1248 6.66646 20.6256 6.45313L18.7183 5.63788C18.5725 5.57554 18.4564 5.45972 18.3939 5.31427L17.5598 3.37331C17.3484 2.88143 16.6518 2.87387 16.4297 3.36107L15.5339 5.32659C15.471 5.46452 15.3594 5.57455 15.2203 5.63554L13.369 6.44802C12.8744 6.66499 12.8778 7.36588 13.3744 7.57819L15.299 8.40081C15.4449 8.46316 15.5611 8.57898 15.6235 8.72443L16.441 10.6266Z"
              fill="ig-primary-icon"
            ></path>
          </svg>
          {!minimized && <span>AI Studio</span>}
        </Link>
      </li>
      <li>
        <Link
          href="https://www.threads.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row gap-[12px]"
        >
          <svg
            aria-label=""
            className="x1lliihq x1n2onr6 x5n08af"
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 192 192"
            width="24"
          >
            <title></title>
            <path
              className="xcslo1z"
              d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"
            ></path>
          </svg>
          {!minimized && <span>Threads</span>}
        </Link>
      </li>
      <li>
        <svg
          aria-label="Configuración"
          className="x1lliihq x1n2onr6 x5n08af"
          fill="currentColor"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <title>Configuración</title>
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="3"
            x2="21"
            y1="4"
            y2="4"
          ></line>
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="3"
            x2="21"
            y1="12"
            y2="12"
          ></line>
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="3"
            x2="21"
            y1="20"
            y2="20"
          ></line>
        </svg>
        {!minimized && <span>Más</span>}
      </li>
    </ul>
  );
}

export default SecondaryNavbar;
