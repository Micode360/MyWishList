import { SearchIcon } from '@heroicons/react/solid';



const SearchBar = () => {

    return (
        <div className='bg-white-400  border-[1px] rounded-lg border-slate-200 p-3 mb-4'>
            <div className="flex justify-center items-center mb-2">
                <input type="text" id="search" name="search" className="w-full px-4 py-1 rounded-full bg-gray-100 border border-gray-200 placeholder-gray-500 text-xs focus:outline-none focus:border-gray-400 focus:bg-white px-3 mr-1" placeholder="Categories" />
                <input type="text" id="search" name="search" className="w-full px-4 py-1 rounded-full bg-gray-100 border border-gray-200 placeholder-gray-500 text-xs focus:outline-none focus:border-gray-400 focus:bg-white px-3 mr-1" placeholder="Search by name, genre, year....." />
                <SearchIcon className='w-[2.3rem] text-wish-orange'/>
            </div>
            <div>
                <span className="inline-block bg-[#fe8b00] rounded-full px-2 py-1 text-xs font-semibold text-white mx-1">#Selected Category</span>
            </div>
        </div>
    );
}

export default SearchBar;