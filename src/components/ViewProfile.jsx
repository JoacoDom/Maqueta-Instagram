import ProfileHeader from "./ProfileHeader";
import ProfileMain from "./ProfileMain";

function ViewProfile({ username }) {
  return (
    <section
      className="fixed top-16"
      style={{
        left: "calc(331px + ((100vw - 331px - 935px) / 2))",
        width: "935px",
      }}
    >
      <ProfileHeader username={username} />
      <hr className="border-gray-800" />
      <ProfileMain />
    </section>
  );
}

export default ViewProfile;
