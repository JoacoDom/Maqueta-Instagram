import PostButtons from "./PostButtons";
import PostHeader from "./PostHeader";
import PostInfo from "./PostInfo";

function MainPost() {
  return (
    <section className="w-[470px] flex flex-col justify-between px-4 py-2 mt-6">
      <PostHeader />

      <div>
        <img
          src="post.png"
          className="w-[468px] h-[585px] rounded-md border border-gray-800"
          alt="Main Post"
        />
      </div>

      <PostButtons />

      <PostInfo />
    </section>
  );
}

export default MainPost;
