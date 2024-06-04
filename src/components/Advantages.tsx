import { FaRegBell } from "react-icons/fa";
import advantages from "../assets/advantages.png"
import Image from "next/image";
import { LuSparkle } from "react-icons/lu";
import customize from "../assets/customizable.png"
const Advantages = () => {
  return (
    <div>
      <section className="mx-auto max-w-screen-xl  px-10 items-center lg:flex ">
        <div className="space-y-1 font-bold flex-1  sm:text-center lg:text-left lg:ml-3">
          <p className="text-[#FF5555] text-2xl">Advantages</p>
          <p className="text-black font-black  text-4xl lg:text-5xl  sm:text-center lg:text-left">why choose Uifry?</p>
          <div className="flex pb-6 pt-4 text-whit items-center justify-start sm:justify-center lg:justify-start">
            <div className=" rounded-full text-2xl flex items-center justify-center w-8 h-8 bg-[#FF5555]"><FaRegBell color="white" size={15} /></div>
            <p className="bg-white font-semibold text-black pl-4 text-2xl">Clever Notifications</p>
          </div>
          <p className="text-gray-500 text-lg leading-relaxed font-normal max-w-xl  sm:mx-auto  lg:ml-0">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
          </p>

        </div>
        <div className="flex-1  text-center  lg:mt-0 lg:ml-3">
          <Image alt="img" width={500} height={500} src={advantages} className="w-full mx-auto sm:w-10/12  lg:w-full" />
        </div>
      </section>
      <section className=" mx-auto max-w-screen-xl pb-4 px-4 items-center flex flex-col-reverse lg:flex-row md:px-8">
        <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
          <Image alt="customizable" src={customize} className="w-full mx-auto sm:w-10/12  lg:w-full" />
        </div>
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <div className=" flex pb-6 pt-4 text-whit items-center justify-start sm:justify-center lg:justify-start ">
            <div className=" rounded-full text-2xl flex items-center justify-center w-8 h-8 bg-[#FF5555]">
              <LuSparkle size={18} color="white" />
            </div>
            <p className="bg-white font-semibold text-black pl-4 text-2xl">Fully Customizable</p>
          </div>
          <p className="text-gray-500 leading-relaxed font-normal max-w-xl  sm:mx-auto  lg:ml-0 text-lg">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
          </p>

        </div>

      </section>
    </div>
  )
}

export default Advantages
