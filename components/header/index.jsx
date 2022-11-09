import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Header = () => {
  return (
    <div className="relative mt-10 md:mt-20">
      <div className="mt-20">
        <div className="container mx-auto h-auto">
          <p className="text-lg font-semibold md:text-xl">©2022</p>
          <div className="mt-5 mb-10">
            <div className="flex items-center">
              <h1 className="text-4xl sm:text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl">
                Full 
              </h1>
              <img
                className="ml-2 w-10 xl:w-20 duration-500 hover:rotate-180 md:ml-10"
                src="/svg/star.svg"
                alt=""
              />
            </div>
            <div className="text-4xl sm:text-5xl flex font-bold md:text-6xl lg:text-7xl xl:text-8xl">
              A
              <div className="text-[#006B98] text-3xl mt-1 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl md:mt-0 flex flex-col h-11 sm:h-13 md:h-14 lg:h-[4.5rem] xl:h-24 overflow-hidden">
                <span className="px-2 animate-spinWord">creative</span>
                <span className="px-2 animate-spinWord">awesome</span>
                <span className="px-2 animate-spinWord">fantastic</span>
                <span className="px-2 animate-spinWord">incredible</span>
                <span className="px-2 animate-spinWord">creative</span>
                <span className="px-2 animate-spinWord">awesome</span>
                <span className="px-2 animate-spinWord">fantastic</span>
                <span className="px-2 animate-spinWord">incredible</span>
                <span className="px-2 animate-spinWord">creative</span>
                <span className="px-2 animate-spinWord">awesome</span>
                <span className="px-2 animate-spinWord">fantastic</span>
                <span className="px-2 animate-spinWord">incredible</span>
                <span className="px-2 animate-spinWord">creative</span>
                <span className="px-2 animate-spinWord">awesome</span>
                <span className="px-2 animate-spinWord">fantastic</span>
                <span className="px-2 animate-spinWord">incredible</span>
              </div>{' '}
              Agency
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                eligendi temporibus illum deleniti repellendus! Nemo nostrum
                reprehenderit.
              </p>
            </div>
          </div>
        </div>
        <div className="relative mt-16 px-[1rem] sm:px-[2rem] lg:px-[4rem] xl:px-[5rem]">
          <LazyLoadImage
            className="w-screen object-cover h-[50vh] sm:h-[50vh] md:h-[25rem] lg:h-[25rem] xl:h-[30rem] rounded-t-3xl"
            src="/images/hero.jpg"
            effect="blur"
            alt="Banner image"
          />
          {/* <div className="absolute -top-10 right-5 h-20 w-20 rounded-full bg-black duration-500 hover:scale-95 md:-top-16 md:right-20 md:h-32 md:w-32">
            <div className="mt-6 md:mt-10 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8 md:h-12 md:w-12 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                />
              </svg>
            </div>
          </div> */}
        </div>
      </div>

      {/* https://youtu.be/l89_urbsTtk */}
    </div>
  );
};

export default Header;
