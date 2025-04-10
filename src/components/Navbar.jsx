"use client";

import Logo from "./Logo";
import PrimaryNavbar from "./PrimaryNavbar";
import SecondaryNavbar from "./SecondaryNavbar";
import { usePathname } from "next/navigation";

export default function Navbar({ username }) {
  const pathname = usePathname();
  const isChat = pathname.startsWith("/direct/inbox");

  return (
    <>
      <nav className="h-screen border-r border-gray-800 transition-all duration-300 w-[336px]">
        <div
          className={`${
            isChat ? "w-17 items-center" : "w-[336px]"
          } flex flex-col justify-between h-screen fixed top-0 border-r border-gray-800`}
        >
          <div>
            <Logo minimized={isChat} />
            <PrimaryNavbar username={username} minimized={isChat} />
          </div>
          <SecondaryNavbar minimized={isChat} />
        </div>
      </nav>
    </>
  );
}
