




const WishList = () => {
    return (
        <div className="flex justify-center align-center md:px-5 lg:px-5 xl:px-5 max-h-[15rem] ">
            <div className="bg-white-400 border-[1px] rounded-lg border-slate-200 w-full md:w-[18rem] lg:w-[18rem] xl:w-[18rem] min-h-fit justify-center overflow-hidden">
                <div className="p-2 border-b-[1px] border-slate-200">
                    <h1 className="font-semibold text-sm">My wishList</h1>
                </div>

                <div className="flex">

                    <div className="group flex items-center border-b-[1px] border-slate-200 w-full px-3 py-2 relative">
                        <img className="shrink-0 h-12 w-12 object-cover rounded" src="/img/0f5fff6262fdefb855e3a9a3f0fdd361.jpg" alt="img" />
                        <div className="ltr:ml-3 rtl:mr-3 ml-3 cursor-pointer">
                            <p className="text-sm font-medium text-black-300">Freedom</p>
                            <p className="text-xs font-medium text-slate-500">2019</p>
                            <p className="text-xs font-medium text-slate-500">Reality, Christain</p>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute right-0 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                        </svg>

                    </div>

                </div>

            </div>
        </div>
    );
}


export default WishList;