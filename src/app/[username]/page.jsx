import Main from "@/components/Main";
import ViewProfile from "@/components/ViewProfile";

export async function generateMetadata({ params }) {
  const { username } = params;

  return {
    title: `Usuario (@${username}) • Fotos y videos de Instagram`,
    description: `Perfil de ${username} en la maqueta de Instagram`,
  };
}

export default function ProfilePage({ params }) {
  return (
    <Main>
      <ViewProfile username={params.username} />
    </Main>
  );
}
