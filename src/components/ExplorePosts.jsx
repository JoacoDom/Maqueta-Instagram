function ExplorePosts() {
  return (
    <section
      className="fixed top-16"
      style={{
        left: "calc(331px + ((100vw - 331px - 963px) / 2))",
        width: "963px",
      }}
    >
      <div className="grid grid-cols-3 grid-rows-6 gap-[2px] mx-auto">
        <img
          src="https://picsum.photos/300/300?1"
          alt="Post 1"
          className="w-[317px] h-[317px] object-cover"
        />
        <img
          src="https://picsum.photos/300/300?2"
          alt="Post 2"
          className="w-[317px] h-[317px] object-cover"
        />
        <img
          src="https://picsum.photos/300/600?3"
          alt="Post 3"
          className="w-[317px] h-[638px] object-cover row-span-2"
        />

        <img
          src="https://picsum.photos/300/300?4"
          alt="Post 4"
          className="w-[317px] h-[317px] object-cover"
        />
        <img
          src="https://picsum.photos/300/300?5"
          alt="Post 5"
          className="w-[317px] h-[317px] object-cover"
        />
        <img
          src="https://picsum.photos/300/600?6"
          alt="Post 6"
          className="w-[317px] h-[317px] object-cover row-span-2"
        />

        <img
          src="https://picsum.photos/300/300?7"
          alt="Post 7"
          className="w-[317px] h-[317px] object-cover"
        />
        <img
          src="https://picsum.photos/300/300?8"
          alt="Post 8"
          className="w-[317px] h-[317px] object-cover"
        />
      </div>
    </section>
  );
}

export default ExplorePosts;
