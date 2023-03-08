import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";
import { getRequest } from "../lib/requests";
import { toDate } from "../lib/date";
import { useSelector, useDispatch } from "react-redux";
import { selectedOption, showModal, searchWish } from "../store/utilsAction";
import NotificationModal from "../components/notificationModal";
import { deleteWish, readWish } from "../store/io";
import Description from "../components/description";

const Category = ({ User }) => {
  const router = useRouter();
  const route = router;
  let { user, utils } = useSelector((state) => state);
  let dispatch = useDispatch();

  useEffect(() => {
    window.onclick = (e) => {
      let className = e.target.className;
      if (className.animVal !== "w-6 h-6 absolute right-0 cursor-pointer opt") {
        dispatch(selectedOption(null));
      }
    };
  }, [dispatch]);

  return (
    <div>
      <Head>
        <title>My Wish List</title>
        <meta name="description" content="My Wishlist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container px-3 py-0 mx-auto m-4">
        <div className="banner w-full h-[12rem] rounded-t-lg"></div>

        <div className="bg-white-400 border-[1px] rounded-b-lg mb-4 border-slate-200 p-3 font-medium">
          {route.query.category.charAt(0).toUpperCase()}
          {route.query.category.slice(1).toLowerCase()}
        </div>

        <div className="bg-white-400  border-[1px] rounded-lg border-slate-200 p-3 mb-4">
          <div className="flex justify-center items-center mb-2">
            <input
              type="text"
              id="search"
              name="search"
              onChange={(e) => dispatch(searchWish(e.target.value))}
              className="w-full py-1 rounded-full bg-gray-100 border border-gray-200 placeholder-gray-500 text-xs focus:outline-none focus:border-orange-400 focus:bg-white px-3 mr-1"
              placeholder="Search wish title"
            />
            <SearchIcon className="w-[1.3rem] text-wish-orange" />
          </div>
        </div>

        {false ? (
          <div className="relative bg-white-400 border-[1px] rounded-lg mb-4 border-slate-200 p-3 font-medium flex flex-col items-center justify-center h-[16vw]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
              />
            </svg>
            <p>No List Found</p>
            <button
              className="mt-3 bg-wish-blue hover:bg-wish-blue-dark text-white font-semibold py-1 px-4 rounded shadow text-[0.9rem]"
              onClick={() => ""}
            >
              Return Back
            </button>
          </div>
        ) : (
          [...User.list]
            .filter(
              (wish) =>
                wish.category.toLowerCase() ===
                route.query.category.toLowerCase()
            )
            .filter((wish) => {
              if (utils.wishSearchValue === "") return wish;

              const searchValue = utils.wishSearchValue.toLowerCase();
              const words = wish.title.toLowerCase().split(" ");

              for (let i = 0; i < words.length; i++) {
                if (searchValue.includes(words[i])) {
                  return wish;
                }
              }
            })
            .map((wish, index) => (
                <div
                  className="relative bg-white-400 border-[1px] rounded-lg mb-4 border-slate-200 p-3 font-medium flex items-center"
                  key={index}
                >
                  <div className="relative w-[6rem] h-[6rem] rounded-lg banner mr-2">
                    {wish.attachment.secure_url === "none" ? (
                      ""
                    ) : (
                      <Image
                        priority
                        className="shrink-0 object-cover rounded"
                        src={wish.attachment.secure_url}
                        alt="img"
                        layout="fill"
                      />
                    )}
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      dispatch(showModal("readModal"));
                      dispatch(readWish({ ...wish }));
                    }}
                  >
                    <h1 className="text-xl">{wish.title}</h1>
                    <p className="text-xs font-normal">{wish.description}</p>
                    <span className="text-gray-400 text-[0.6rem] font-normal">
                      Created at {toDate(wish.date)}
                    </span>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 absolute right-0 cursor-pointer opt"
                    onClick={(e) => {
                      dispatch(selectedOption(index));
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                    />
                  </svg>
                  {utils.selectedOption === index ? (
                    <div className="absolute top-20 right-[-10px] text-xs">
                      <div
                        className="px-2 border-[1px] border-slate-200 bg-white rounded cursor-pointer"
                        onClick={() => {
                          dispatch(showModal("deleteModal"));
                          dispatch(
                            deleteWish({
                              status: "ready",
                              pending: false,
                              message: "",
                              list: {
                                user_id: user.user.id,
                                id: wish.id,
                                title: wish.title,
                                imgid: wish.attachment.public_id,
                              },
                            })
                          );
                        }}
                      >
                        Delete
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  {utils.type === "deleteModal" ? <NotificationModal /> : ""}
                </div>
              )
            )
        )}
      </section>
      <Description />
    </div>
  );
};

export async function getServerSideProps() {
  const user = await getRequest(
    `${process.env.NEXT_PUBLIC_DORMAIN}/api/getuser`
  );

  return {
    props: {
      User: user,
    },
  };
}

export default Category;
