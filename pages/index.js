import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Banner from '../components/banner'
import Darshboard from '../components/darshboard'
import SearchBar from '../components/searchBar'
import WishList from '../components/wishlist'
import AddWish from '../components/addWish'
// import Categories from '../components/categories'


export default function Home() {
  const date = new Date();
  
  return (
    <div className={styles.container}>
      <Head>
        <title>My Wish List</title>
        <meta name="description" content="My Wishlist init" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner/>

      <section className='container px-3 py-0 mx-auto'>

        <div className='md:grid md:grid-cols-3 sm:flex sm:flex-col sm:justify-center py-6'>
          <div className="col-span-2 mb-4 md:mb-0 lg:mb-0">
            {/* <button className="bg-white hover:bg-gray-100 text-gray-800 text-[0.7rem] text-left font-semibold py-1 px-4 border border-gray-400 rounded w-full">Add wish.....</button> */}
            <SearchBar/>
            {/* <Categories/> */}
            <Darshboard />
          </div>
          <WishList/>

          <AddWish/>
        </div>
      </section>
     
    </div>
  )
}
