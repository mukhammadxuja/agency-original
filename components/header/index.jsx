import Image from 'next/image';
import React from 'react';
<<<<<<< HEAD
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import header from './header.jpg';
=======

import header from './header.jpg'
import star from "../../public/svg/star.svg"

>>>>>>> 1082aa90372d0090038243f0da6cec052be949c6
const Header = () => {
  return (
    <div className="relative mt-10 md:mt-20">
      <div className="mt-20">
        <div className="container mx-auto h-auto">
          <p className="text-lg font-semibold md:text-xl">©2022</p>
          <div className="mt-5 mb-10 ">
            <div className="flex items-center">
              <h1 className="flex items-center text-4xl sm:text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl">
                DotSoft
                <div className="text-[#006B98] text-3xl ml-2 md:ml-4 mt-1 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl md:mt-3 flex flex-col h-11 sm:h-13 md:h-14 lg:h-[4.5rem] xl:h-28 overflow-hidden">
                  <span className="px-2 animate-spinWord">Web Sites</span>
                  <span className="px-2 animate-spinWord">Web Apps</span>
                  <span className="px-2 animate-spinWord">Web Design</span>
                  <span className="px-2 animate-spinWord">Web Sites</span>
                  <span className="px-2 animate-spinWord">Web Apps</span>
                  <span className="px-2 animate-spinWord">Web Design</span>
                  <span className="px-2 animate-spinWord">Web Sites</span>
                  <span className="px-2 animate-spinWord">Web Apps</span>
                  <span className="px-2 animate-spinWord">Web Design</span>
                  <span className="px-2 animate-spinWord">Web Sites</span>
                  <span className="px-2 animate-spinWord">Web Apps</span>
                  <span className="px-2 animate-spinWord">Web Design</span>
                </div>
              </h1>
<<<<<<< HEAD
              <img
                className="ml-2 w-10 xl:w-20 duration-500 hover:rotate-180"
                src="/svg/star.svg"
                alt=""
=======
              <div className=" ml-2 w-10 xl:w-20 duration-500 hover:rotate-180 md:ml-10">
              <Image
              
                src={star}
                alt="dotSoft web programming group spinner"
       
                loading="lazy"
>>>>>>> 1082aa90372d0090038243f0da6cec052be949c6
              />
              </div>
            </div>
            <div className="text-4xl sm:text-5xl flex font-bold md:text-6xl lg:text-7xl xl:text-8xl">
              Development Team
            </div>
          </div>
          <div className="mb-5 md:mt-5 flex items-center space-x-2 md:space-x-4">
            <div className="flex items-center -space-x-5 md:-space-x-7">
              <div className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] rounded-full bg-[#006B98]"></div>
              <div className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] rounded-full bg-black dark:bg-white"></div>
            </div>
            <div className="text-sm md:text-base -space-y-1 font-bold text-gray-700 dark:text-white">
              <p>37+</p>
              <p className="whitespace-nowrap">Satisfied Client</p>
            </div>
            <div className="hidden md:block max-w-2xl -space-y-1 text-lg font-semibold text-gray-700 dark:text-white">
              <p className="ml-5 sm:ml-10 md:ml-16 text-xs">
                A creative agency that has been active this year
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="relative mt-16 !bg-[center_bottom_-1rem] object-cover h-[50vh] sm:h-[50vh] md:h-[25rem] lg:h-[25rem] xl:h-[30rem] ">
            <Image
              src={header}
              layout="fill"
              objectFit="cover"
              alt="dotSoft web programming group Banner image"
              className="rounded-t-3xl w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
