import { useSelector } from "react-redux";
import Link from "next/link";

const Darshboard = () => {
  const { user, utils } = useSelector((state) => state);

  let categories = () => {
    let categoryList = [...user.user.list].map((catInWish) =>
      catInWish.category.toLowerCase()
    );
    return categoryList.filter(
      (wish, index) => categoryList.indexOf(wish) === index
    );
  };

  let categoryList = (category) =>
    [...user.user.list].filter(
      (wish) => wish.category.toLowerCase() === category
    );

  return (
    <div className="bg-white-400 border-[1px] rounded-lg border-slate-200 p-3">
      <div className="mb-4 bg-white-400 border-b-[1px] border-slate-200 py-1">
        <h3 className="font-medium">
          You have created {user.user.list.length} wishlists{" "}
        </h3>
      </div>

      <div className="py-1 mb-4">
        <h3>Categories</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-0">
        {categories()
          .filter((category) => {
            if (utils.categorySearchValue === "") return category;
            else if (
              utils.categorySearchValue
                .toLowerCase()
                .includes(category.toLowerCase())
            )
              return category;
            return false;
          })
          .map((category, index) => {
            let val = 0;
            return (
              <Link
                href={{
                  pathname: "/category",
                  query: { category: category },
                }}
                key={index}
              >
                <div
                  className={`${
                    val === utils.colors.length
                      ? utils.colors[(val = 0)]
                      : utils.colors[(val = index)]
                  } flex justify-center items-center text-center bg-wish-blue m-1 text-white rounded h-[5rem] cursor-pointer`}
                >
                  {category.charAt(0).toUpperCase()}
                  {category.slice(1).toLowerCase()} (
                  {categoryList(category).length})
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Darshboard;
