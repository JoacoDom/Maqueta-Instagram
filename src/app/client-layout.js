"use client";

import { UserProvider } from "@/context/UserContext";
import Navbar from "@/components/Navbar";
import Create from "@/components/Create";
const username = "usuario123";

function ClientLayout({ children }) {
  return (
    <UserProvider username={username}>
      <Navbar username={username} />
      {children}
    </UserProvider>
  );
}

export default ClientLayout;
