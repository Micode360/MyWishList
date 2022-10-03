import { useEffect } from "react";
import Image from "next/image"
import { useSelector, useDispatch } from "react-redux";
import { selectedOption, showModal } from "../store/utilsAction";
import { deleteWish, readWish } from "../store/io";
import NotificationModal from "./notificationModal";

const WishList = () => {
  let { user, utils } = useSelector((state) => state);
  let dispatch = useDispatch();

  useEffect(() => {
    window.onclick = (e) => {
      let className = e.path[0].className;
      if (className.animVal !== "w-6 h-6 absolute right-0 cursor-pointer opt") {
        dispatch(selectedOption(null));
      }
    };
  }, [dispatch]);

  return (
    <>
      <div className="flex justify-center align-center md:px-5 lg:px-5 xl:px-5">
        <div className="bg-white-400 border-[1px] rounded-lg border-slate-200 w-full md:w-[18rem] lg:w-[18rem] xl:w-[18rem] min-h-fit max-h-[18.5rem] justify-center">
          <div className="p-2 border-b-[1px] border-slate-200">
            <h1 className="font-semibold text-sm">Recently added</h1>
          </div>

          <div className="flex flex-col justify-between">
            {true
              ? [...user.user.list]
                  .reverse()
                  .filter((list, index) => index < 3)
                  .map((list, index) => (
                    <div
                      className="group flex items-center border-b-[1px] border-slate-200 w-full px-3 py-2 relative"
                      id={index}
                      key={list.id}
                    >
                      <Image
                        className="shrink-0 h-12 w-12 object-cover rounded"
                        src={list.attachment.secure_url}
                        alt="img"
                        width={50}
                        height={50}
                      />
                      <div
                        className="ltr:ml-3 rtl:mr-3 ml-3 cursor-pointer"
                        onClick={() => {
                          dispatch(showModal("readModal"));
                          dispatch(readWish({ ...list }));
                        }}
                      >
                        <p className="text-sm font-medium text-black-300">
                          {list.title}
                        </p>
                        <p className="text-xs font-medium text-slate-500">
                          {list.category}
                        </p>
                        <p className="text-xs font-medium text-slate-500">{`date`}</p>
                      </div>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 absolute right-0 cursor-pointer opt"
                        onClick={(e) => {
                          console.log(e.target.parentNode.id, "id");
                          dispatch(
                            selectedOption(Number(e.target.parentNode.id))
                          );
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                        />
                      </svg>
                      {utils.selectedOption === index ? (
                        <div className="absolute right-[-10px] top-12 text-xs">
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
                                    id: list.id,
                                    title: list.title,
                                    imgid: list.attachment.public_id,
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

                      {utils.type === "deleteModal" ? (
                        <NotificationModal />
                      ) : (
                        ""
                      )}
                    </div>
                  ))
              : ""}
            <div className="text-xs text-center pt-2 cursor-pointer">
              View more
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishList;
