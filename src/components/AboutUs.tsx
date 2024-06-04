import aboutus from "../assets/aboutus.png"
import Image from "next/image";

const AboutUs = () => {
  return (
    <div>
      <section className=" mx-auto max-w-screen-xl pb-4 px-4 items-center justify-center lg:flex lg:flex-col md:px-8">
        <div className='text-center'>
          <h2 className='font-bold text-[#FF5555] text-2xl'>Testimonial</h2>
          <p className='text-black font-black  text-4xl  lg:text-5xl  text-center max-w-xl'>What our users say About Us?</p>
        </div>
        <div className=" mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">
          <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
            <Image alt="about-us" width={400} height={400} src={aboutus} className="mx-auto sm:w-10/12  lg:w-full" />
          </div>
          <div className="space-y-4 flex-1 lg:text-left">
            <h1 className="text-gray-800 font-bold text-2xl xl:text-5xl">
              <p className="text-2xl text-center sm:text-3xl md:text-4xl pb-2 lg:text-left" >The Best Financial Accounting App Ever! </p>
            </h1>
            <p className="text-gray-500 max-w-2xl text-lg leading-relaxed sm:mx-auto lg:ml-0">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
            </p>

            <div className="flex px-0  md:px-0 flex-col items-start justify-center">
              <p className="font-bold text-xl">Nick Jonas</p>
            </div>


          </div>
        </div>

      </section>
    </div>
  )
}

export default AboutUs;

