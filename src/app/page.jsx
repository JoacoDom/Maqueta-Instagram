"use client";

import Main from "@/components/Main";
import Stories from "@/components/Stories";
import MainPost from "@/components/MainPost";
import Suggestios from "@/components/Suggestios";
import { useUser } from "@/context/UserContext";

export default function HomePage() {
  const { username } = useUser();
  return (
    <Main>
      <Stories />
      <MainPost />
      <Suggestios username={username} />
    </Main>
  );
}
