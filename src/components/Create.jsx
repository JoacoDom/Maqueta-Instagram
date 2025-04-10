function Create() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <button className="w-[200px] h-[44px]">Publicación</button>
        <svg
          aria-label="Publicación"
          role="img"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-current"
          fill="currentColor"
        >
          <title>Publicación</title>
          <path d="m18.509 14.757-4.285-2.474a.857.857 0 0 0-1.286.743v4.948a.857.857 0 0 0 1.286.742l4.285-2.474a.857.857 0 0 0 0-1.485Z" />
          <path d="M5.225 3.977a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25Z" />
          <path d="M19.5 7.5h-3v-3a4.004 4.004 0 0 0-4-4h-8a4.004 4.004 0 0 0-4 4v8a4.004 4.004 0 0 0 4 4h3v3a4.004 4.004 0 0 0 4 4h8a4.004 4.004 0 0 0 4-4v-8a4.004 4.004 0 0 0-4-4Zm-12 7h-3a1.997 1.997 0 0 1-1.882-1.349l2.607-2.607L7.5 12.819Zm.23-4.28L6.41 8.9a1.679 1.679 0 0 0-2.37 0L2.5 10.44V4.5a2.003 2.003 0 0 1 2-2h8a2.003 2.003 0 0 1 2 2v3h-3a3.992 3.992 0 0 0-3.77 2.72ZM21.5 19.5a2.003 2.003 0 0 1-2 2h-8a2.003 2.003 0 0 1-2-2v-8a2.003 2.003 0 0 1 2-2h8a2.003 2.003 0 0 1 2 2Z" />
        </svg>
      </div>
      <div className="flex flex-row justify-between">
        <button className="w-[200px] h-[44px]">IA</button>
        <svg
          aria-label="IA"
          role="img"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-current"
          fill="currentColor"
        >
          <title>IA</title>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 17a4 4 0 1 0 8 0 4 4 0 0 0-8 0Zm4 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM3 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0Zm4 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm6 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Zm4 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
          />
          <path d="M16.441 10.627a.618.618 0 0 0 1.136 0l.817-1.903a.617.617 0 0 1 .324-.323l1.908-.815a.616.616 0 0 0 0-1.133l-1.908-.815a.617.617 0 0 1-.324-.324l-.834-1.94a.618.618 0 0 0-1.13-.013l-.896 1.966a.617.617 0 0 1-.314.309l-1.851.812a.615.615 0 0 0 .005 1.13l1.925.823a.616.616 0 0 1 .325.323l.817 1.903Z" />
        </svg>
      </div>
    </div>
  );
}

export default Create;
