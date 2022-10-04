import Link from "next/link";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { showModal } from "../store/utilsAction";

const Header = () => {
  const dispatch = useDispatch();
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname.split("/")[1]);
  }, [setPathname]);

  return (
    <div className="bg-white-400 flex justify-between items-center shadow-lg shadow-black-500/10">
      <div className="bg-wish-blue p-3">
        <Link href="/">
          <h1 className="text-white font-semibold cursor-pointer">
            My WishList
          </h1>
        </Link>
      </div>
      <nav className="p-1">
        {pathname === "category" ? (
          ""
        ) : (
          <button
            className="bg-wish-blue hover:bg-wish-blue-dark text-white font-semibold py-1 px-4 rounded shadow text-[0.9rem]"
            onClick={() => dispatch(showModal("wishModal"))}
          >
            Add wish
          </button>
        )}
      </nav>
    </div>
  );
};

export default Header;
