import Link from "next/link";

const NotFound = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-wish-orange">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-wish-blue text-white px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <Link href="/">
        <span className="text-white cursor-pointer hover:underline">
          Go Home
        </span>
      </Link>
    </div>
  );
};

export default NotFound;
