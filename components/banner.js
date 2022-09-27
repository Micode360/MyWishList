import Image from 'next/image';




const Banner = () => {

    return (
        <div className="relative">
            <Image
                priority
                src="/img/5fsd54fsdf5445454566dfs3fsd6.jpg"
                alt="cinema setup"
                width={300}
                height={200}
            />
            
            <div className="banner flex items-center absolute top-0 bottom-1 left-0 right-0 z-10">
                <h1 className='text-white ml-[20%] text-[1.5rem]'>View my wishList</h1>
            </div>
        </div>
    );
}


export default Banner;