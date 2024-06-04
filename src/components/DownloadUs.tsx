import { FaApple } from "react-icons/fa";
import download from "../assets/download.png"
import Image from "next/image";

const DownloadPage = () => {
  return (
    <div>
      <div className="relative w-full flex items-center justify-center">
        <div className="py-16 md:py-32 relative">
          <Image
            width={1200}
            height={400}
            src={download}
            className="sm:max-w-screen-sm md:max-w-screen-md h-[30rem]  object-cover lg:max-w-screen-lg xl:max-w-screen-xl px-2"
            alt="Download"
          />
          <div className="absolute inset-0 flex flex-col items-center md:items-start p-5 md:p-20 gap-5  justify-center text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-extrabold text-white">
              Ready To Get Started?
            </h1>
            <p className="text-lg md:text-xl text-white">
              Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus Vulputate.
            </p>
            <button className="bg-white text-black font-bold flex items-center gap-2 mt-4 px-4 py-2 rounded">
              Download App <FaApple />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadPage;
