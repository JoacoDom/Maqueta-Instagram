export default function Stories() {
  return (
    <section className="flex gap-4 pb-6">
      {Array.from({ length: 8 }).map((_, i) => {
        return (
          <div key={i} className="flex flex-col gap-1">
            <div className="w-[64px] h-[64px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px] flex items-center justify-center">
              <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
                <img
                  src={`https://i.pravatar.cc/48?u=${i}84032`}
                  alt={`Story ${i + 1}`}
                  className="w-[56px] h-[56px] rounded-full"
                />
              </div>
            </div>
            <span className="text-xs text-center">usuario{i + 1}</span>
          </div>
        );
      })}
    </section>
  );
}
