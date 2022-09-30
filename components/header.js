import { useDispatch } from "react-redux";
import { showModal } from "../store/utilsAction";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white-400 flex justify-between items-center shadow-lg shadow-black-500/10">
      <div className="bg-wish-blue p-3">
        <h1 className="text-white font-semibold">My WishList</h1>
      </div>
      <nav className="p-1">
        <button
          className="bg-wish-blue hover:bg-wish-blue-dark text-white font-semibold py-1 px-4 rounded shadow text-[0.9rem]"
          onClick={() => dispatch(showModal("wishModal"))}
        >
          Add wish
        </button>
      </nav>
    </div>
  );
};

export default Header;
