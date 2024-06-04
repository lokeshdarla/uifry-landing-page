import { PiCubeTransparentLight } from "react-icons/pi";
import { LuSparkle } from "react-icons/lu";
import img from "../assets/features.png"
import cube from "../assets/cube.png";
import Image from "next/image";
import gradient from "../assets/ellipseGradient.png"

const Features = () => {
  return (
    <div>
      <section className=" mx-auto max-w-screen-xl  pb-4 bg-white items-center flex flex-col-reverse lg:flex-row md:px-8">
        <div className="flex-1 text-center  lg:mt-0 lg:ml-3">
          <Image alt="features-image" height={500} width={500} src={img} className="w-full mx-auto sm:w-10/12  lg:w-full" />
        </div>
        <div className="space-y-4 relative flex-1 sm:text-center px-10 lg:text-left">
          <Image src={gradient} alt="gradient" width={500} height={500} className="absolute -top-10 z-0 sm:-right-20 right-0 overflow-hidden" />
          <h1 className="text-gray-800 relative z-10 font-bold text-4xl xl:text-5xl">
            <span className="text-[#FF5555] text-xl ">Features</span>
            <p className="font-bold text-4xl lg:text-5xl xl:text-5xl text-black pb-5">Uifry Premium</p>
          </h1>
          <div className="sm:text-center relative z-10 lg:text-left">
            <div className="pb-5">
              <div className="flex gap-2 font-bold text-[#FF5555] justify-start lg:justify-start sm:justify-center items-center">
                <LuSparkle />
                <p className="font-semibold text-black text-lg">Budgeting Intervals</p>
              </div>
              <p className="text-gray-500 sm:text-center lg:text-left">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            </div>
            <div className="pb-5">
              <div className="flex gap-2 font-bold text-[#FF5555] justify-start lg:justify-start sm:justify-center items-center">
                <Image src={cube} className="w-4" alt="cube" width={50} height={50} />
                <p className="font-semibold text-black text-lg">Budgeting Intervals</p>
              </div>
              <p className="text-gray-500">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            </div>
            <div className="pb-5">
              <div className="flex gap-2 font-bold text-[#FF5555] justify-start lg:justify-start sm:justify-center items-center">
                <PiCubeTransparentLight />
                <p className="font-semibold text-black text-lg">Budgeting Intervals</p>
              </div>
              <p className="text-gray-500">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features
