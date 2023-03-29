import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../store/utilsAction";
import { toDate } from "../lib/date";

function Description() {
  const dispatch = useDispatch();
  const { utils, io } = useSelector((state) => state);

  return (
    <>
      {utils.type === "readModal" ? (
        <div className="fixed z-10 inset-0">
          <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="w-auto mx-auto max-w-3xl">
              <div className="overflow-y-auto z-20 border-0 rounded-lg absolute top-0 right-0 bottom-0 shadow-lg flex flex-col justify-start items-start py-6 px-5 pb-8 overflow-hidden w-full md:w-[40%] lg:w-[40%] xl:w-[40%] bg-white outline-none focus:outline-none">
                <span
                  className="text-black opacity-1 h-6 w-6 text-2xl block outline-none focus:outline-none self-end cursor-pointer absolute top-0 right-0"
                  onClick={() => {
                    dispatch(showModal("none"));
                  }}
                >
                  ×
                </span>
                <div className="mb-4 w-full">
                  <h1 className="font-medium text-4xl mb-6 bg-white-400 border-b-[1px] border-slate-200">
                    {io.readWish.title}
                  </h1>
                  <p className="px-2 w-fit bg-wish-orange rounded text-white mb-2">
                    {io.readWish.category}
                  </p>
                  <p className="text-xs">{toDate(io.readWish.date)}</p>
                </div>

                <div className="flex justify-center mb-4 w-full pb-6 bg-white-400 border-b-[1px] border-slate-200">
                  <div className="relative w-[60%] h-[20rem]">
                    {io.readWish.attachment.secure_url === "none" ? (
                      <div className="relative w-full h-full rounded bg-wish-orange mr-2"></div>
                    ) : (
                      <Image
                        className="shrink-0 object-cover rounded"
                        src={io.readWish.attachment.secure_url}
                        alt="img"
                        layout="fill"
                      />
                    )}
                  </div>
                </div>

                <p>{io.readWish.description}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Description;
