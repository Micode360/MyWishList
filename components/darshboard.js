const Darshboard = () => {
  return (
    <div className="bg-white-400 border-[1px] rounded-lg border-slate-200 p-3">
      <div className="mb-4 bg-white-400 border-b-[1px] border-slate-200 py-1">
        <h3>You have created {14} wishlists </h3>
      </div>

      <div className="py-1 mb-4">
        <h3>Categories</h3>
      </div>
      <div className=" flex flex-wrap md:justify-between lg:justify-start xl:justify-start justify-start align-center">
        <div className="bg-red-500 m-1 text-white rounded p-5">
          {4} Movie List
        </div>

        <div className="bg-blue-500 m-1 text-white rounded p-5">
          {5} Travel List
        </div>

        <div className="bg-green-500 m-1 text-white rounded p-5">
          {5} Other List
        </div>
      </div>
    </div>
  );
};

export default Darshboard;
