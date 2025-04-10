"use client";

import { createContext, useContext } from "react";

const UserContext = createContext({ username: "" });

export const UserProvider = ({ children, username }) => {
  return (
    <UserContext.Provider value={{ username }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
