'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Pricing", path: "/pricing" },
    { title: "Features", path: "/features" }
  ];

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".menu-btn") && !target.closest(".sidebar")) {
        setState(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <nav className={`bg-white py-7 font-Space font-semibold md:text-sm `}>
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <div className="flex items-center focus:outline-none justify-between py-5 md:block">
          <Link href="/">
            <Image
              src="/logo.png"
              width={125}
              height={50}
              alt="Uifry logo"
            />
          </Link>
          <div className="md:hidden">
            <button className="menu-btn text-black hover:text-[#FF5555]"
              onClick={() => setState(!state)}
            >
              {
                state ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )
              }
            </button>
          </div>
        </div>
        <div className={`sidebar fixed top-0 left-0 h-full w-64 gap-6 px-10 flex flex-col md:flex-row justify-center items-center  bg-white shadow-lg z-50  md:w-full transform ${state ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex md:items-center md:justify-between md:space-x-6 md:bg-transparent md:shadow-none md:w-auto md:mt-0`}>
          <ul className="flex flex-col items-center justify-center  space-y-6 md:flex-row md:space-y-0 md:space-x-6">
            {state && <Image
              src="/logo.png"
              width={125}
              height={50}
              alt="Uifry logo"
            />}
            {navigation.map((item, idx) => (
              <li key={idx} className="text-black hover:text-[#FF5555]">
                <Link href={item.path} className="block text-lg">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-center items-center  mt-0">
            <a href="javascript:void(0)" className="text-lg items-center justify-center py-3 px-8 text-white font-medium bg-gray-800 hover:bg-[#FF5555] active:bg-gray-900 rounded-md md:inline-flex">
              Download
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
