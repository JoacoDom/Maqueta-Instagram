function PostHeader() {
  return (
    <div className="flex justify-between items-center px-2">
      <div className="flex items-center gap-x-2">
        <img
          src="https://i.pravatar.cc/48?u=372124"
          alt="profile image"
          className="w-[32px] h-[32px] rounded-full cursor-pointer"
        />
        <span className="cursor-pointer text-sm">usuario834</span>
        <span className="text-gray-500 cursor-pointer text-sm">● 8 h</span>
      </div>
      <span className="cursor-pointer text-xl translate-y-[-5px]">...</span>
    </div>
  );
}

export default PostHeader;
