import { SearchIcon } from '@heroicons/react/solid';



const SearchBar = () => {

    return (
        <div>
            <div className="flex justify-center items-center border-b-[1px] border-wish-orange">
                <input type="text" id="search" name="search" className="w-full text-[0.7rem] outline-none" placeholder="Search by name, genre, year....." />
                    <SearchIcon className='w-[0.9rem] text-wish-orange'/>
            </div>
        </div>
    );
}

export default SearchBar;