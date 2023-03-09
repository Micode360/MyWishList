import Head from "next/head";
import { useRouter } from "next/router";
//import { getRequest } from "../lib/requests";
import { getUser } from "../store/user";
import { useDispatch } from "react-redux";
import Banner from "../components/banner";
import Darshboard from "../components/darshboard";
import SearchBar from "../components/searchBar";
import WishList from "../components/wishlist";
import AddWish from "../components/addWish";
import Description from "../components/description";
import data from "./api/data.json"

const Home = ({ user }) => {
  const router = useRouter();
  let dispatch = useDispatch();
  dispatch(getUser(user));

  return (
    <div>
      <Head>
        <title>My Wish List</title>
        <meta name="description" content="My Wishlist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />

      <section className="container px-3 py-0 mx-auto">
        <div className="md:grid md:grid-cols-3 sm:flex sm:flex-col sm:justify-center py-6">
          <div className="col-span-2 mb-4 md:mb-0 lg:mb-0">
            <SearchBar />
            <Darshboard />
          </div>
          <WishList />
          <AddWish />
          <Description />
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps() {
  // const user = await getRequest(
  //   `${process.env.NEXT_PUBLIC_DORMAIN}/api/getuser`
  // );

  return {
    props: {
      user: data,
    },
  };
}

export default Home;
