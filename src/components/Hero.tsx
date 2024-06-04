import home from "../assets/hero1.png"
import home2 from "../assets/hero2.png"
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import gradient from '../assets/ellipseGradient.png'

const Home = () => {
  return (
    <div>
      <section className="mx-auto max-w-screen-xl  pb-4  items-center flex flex-col px-10 lg:px-0 lg:flex-row justify-center  bg-white">
        <div className="space-y-4 flex-1 relative sm:text-center lg:text-left lg:pl-20 flex lg:items-start z-20 md:items-center  justify-center flex-col">
          <Image src={gradient} width={500} height={500} alt="gradient" className="absolute -top-16 z-10 -right-16" />
          <h1 className="text-gray-800 relative z-20 font-bold pt-16 text-3xl sm:text-4xl md:text-5xl lg:text-5xl  ">
            Make The Best Financial Decisions
          </h1>
          <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.                    </p>
          <div className='flex'>
            <a href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-md md:inline-flex">
              Get Started
              <FaArrowRight />
            </a>

            <a href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-2 px-4 t  text-gray-700 hover:text-gray-900">

              <FaRegCirclePlay />
              Watch Video
            </a>

          </div>
          <div>
            <Image src={home} className="min-w-2xl w-full" alt="hero image" width={400} height={200} />

          </div>


        </div>
        <div className="flex-1">
          <Image src={home2} className="min-w-2xl w-full   " alt="hero image" width={500} height={500} />
        </div>
      </section>
    </div>
  )
}

export default Home
