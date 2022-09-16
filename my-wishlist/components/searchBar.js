import { SearchIcon } from '@heroicons/react/solid';



const SearchBar = () => {

    return (
        <div className='bg-white-400  border-[1px] rounded border-slate-200 p-3 mb-4'>
            <div className="flex justify-center items-center mb-2">
                <input type="text" id="search" name="search" className="w-full text-[0.7rem] outline-none border-[1px] border-slate-200 mx-1 rounded-full py-1 px-3" placeholder="Categories" />
                <input type="text" id="search" name="search" className="w-full text-[0.7rem] outline-none border-[1px] border-slate-200 mx-1 rounded-full py-1 px-3" placeholder="Search by name, genre, year....." />
                <SearchIcon className='w-[2.3rem] text-wish-orange'/>
            </div>
            <div>
                <span className="inline-block bg-[#fe8b00] rounded-full px-2 py-1 text-xs font-semibold text-white mx-1">#Selected Category</span>
            </div>
        </div>
    );
}

export default SearchBar;