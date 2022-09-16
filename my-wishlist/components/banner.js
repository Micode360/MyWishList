import Image from 'next/image';
import styles from '../styles/Home.module.scss'



const Banner = () => {

    return (
        <div className="relative">
            <Image
                priority
                src="/img/3465868734553363.jpg"
                alt="cinema setup"
                width={300}
                height={200}
            />
            
            <div className={`${styles.banner} flex items-center absolute top-0 bottom-0 left-0 right-0 z-10`}>
                <h1 className='text-white ml-[20%] text-[1.5rem]'>View my wishList</h1>
            </div>
        </div>
    );
}


export default Banner;