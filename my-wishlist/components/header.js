import { useDispatch } from "react-redux";
import { showModal } from "../store/utilsAction";


const Header = () => {
    const dispatch = useDispatch();

    return (
        <div className="bg-white-400 flex justify-between items-center shadow-lg shadow-black-500/10">
            <div className="bg-wish-blue p-3">
                <h1 className="text-white">My WishList</h1>
            </div>
            <nav className="p-1">
                <button 
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow text-[0.9rem]"
                    onClick={() => dispatch(showModal(true))}
                >add wish</button>
            </nav>
        </div>
    );
}


export default Header;