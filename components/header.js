import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { showModal } from "../store/utilsAction";
import Link from "next/link";

const Header = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(router.pathname.split("/")[1]);
  }, [router.pathname]);


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
