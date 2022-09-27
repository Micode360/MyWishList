import Head from "next/head";
import axios from "axios";
import Banner from "../components/banner";
import Darshboard from "../components/darshboard";
import SearchBar from "../components/searchBar";
import WishList from "../components/wishlist";
import AddWish from "../components/addWish";

const Home = () => {
  
  return (
    <div>
      <Head>
        <title>My Wish List</title>
        <meta name="description" content="My Wishlist init" />
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
        </div>
      </section>
    </div>
  );
}




export default Home;