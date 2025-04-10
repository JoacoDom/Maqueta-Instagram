"use client";

import Chats from "@/components/Chats";
import { useUser } from "@/context/UserContext";

export default function InboxPage() {
  const { username } = useUser();

  return <Chats username={username} />;
}
