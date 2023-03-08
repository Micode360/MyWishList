import { SearchIcon } from "@heroicons/react/solid";
import { searchCategory } from "../store/utilsAction";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white-400  border-[1px] rounded-lg border-slate-200 p-3 mb-4">
      <div className="flex justify-center items-center mb-2">
        <input
          type="text"
          id="search"
          onChange={(e)=>dispatch(searchCategory(e.target.value))}
          name="search"
          className="w-full py-1 rounded-full bg-gray-100 border border-gray-200 placeholder-gray-500 text-xs focus:outline-none focus:border-orange-400 focus:bg-white px-3 mr-1"
          placeholder="Categories"
        />
        <SearchIcon className="w-[1.3rem] text-wish-orange" />
      </div>
      <div>
        {false ? (
          <span className="inline-block bg-[#fe8b00] rounded-full px-2 py-1 text-xs font-semibold text-white mx-1">
            #Selected Category
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SearchBar;
