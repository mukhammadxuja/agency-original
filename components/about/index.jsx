import Image from 'next/image';
import React, { memo } from 'react';
import img1 from './hero.jpg';
import img2 from './material.jpg';

const About = () => {
  return (
    <section className="mt-20">
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-[50%] flex flex-col items-center">
            <div>
              <h3 className="font-bold text-xl">ABOUT US</h3>
              <h2 className="text-[4rem] font-bold leading-none">
                Creating{' '}
                <span className="text-[#016C9AFF]">User - Friendly</span> Design
              </h2>
              <p className="text-lg text-gray-600 dark:text-white pt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
                illo delectus voluptates vero assumenda porro maxime at laborum,
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="mini-cards pt-4 mt-5">
              <div className="flex ">
                <div>
                  <Image
                    className="rounded-full"
                    width={50}
                    height={50}
                    src={img1}
                    alt=""
                  />
                </div>
                <div className="pl-2">
                  <h3 className="font-bold text-lg">Muhammad Sulton</h3>
                  <p className="text-[#3F3F3FFF] dark:text-gray-400">
                    Ceo Tutordek
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-white pt-3 pb-5 ">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti eos nemo modi fugiat qui. Architecto labore hic,
                facilis laborum adipisci, dolor ut eius porro asperiores"
              </p>
            </div>
          </div>
          <div className="w-[50%] px-20 pt-10 space-y-4">
            <div className="mini-cards">
              <div className="flex ">
                <div>
                  <Image
                    className="rounded-full"
                    width={50}
                    height={50}
                    src={img1}
                    alt=""
                  />
                </div>
                <div className="pl-2">
                  <h3 className="font-bold text-lg">Muhammad Sulton</h3>
                  <p className="text-[#3F3F3FFF] dark:text-gray-400">
                    Ceo Tutordek
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-white pt-3 pb-5">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti eos nemo modi fugiat qui. Architecto labore hic,
                facilis laborum adipisci, dolor ut eius porro asperiores"
              </p>
            </div>
            <div className="mini-cards">
              <div className="flex ">
                <div>
                  <Image
                    className="rounded-full"
                    width={50}
                    height={50}
                    src={img1}
                    alt=""
                  />
                </div>
                <div className="pl-2">
                  <h3 className="font-bold text-lg">Muhammad Sulton</h3>
                  <p className="text-[#3F3F3FFF] dark:text-gray-400">
                    Ceo Tutordek
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-white pt-3 pb-5 border-gray-400">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti eos nemo modi fugiat qui. Architecto labore hic,
                facilis laborum adipisci, dolor ut eius porro asperiores"
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-20">
          <Image src={img2} className="rounded-3xl w-full" height={1300} />
          <div className="flex justify-evenly md:px-10 py-5 text-center text-[#222426FF]">
            <div>
              <h2 className="font-semibold flex md:text-6xl text-2xl ml-6 dark:text-white">
                168{' '}
                <span>
                  <img className="ml-0 w-7" src="/svg/star.svg" alt="" />
                </span>
              </h2>
              <span className="md:text-sm text-[12px] dark:text-gray-200">
                Full Complete Projcets
              </span>
            </div>
            <div>
              <h2 className="font-semibold flex md:text-6xl text-2xl ml-6 dark:text-white">
                92{' '}
                <span>
                  <img className="ml-0 w-7" src="/svg/star.svg" alt="" />
                </span>
              </h2>
              <span className="md:text-sm text-[12px] dark:text-gray-200">our own projects</span>
            </div>
            <div>
              <h2 className="font-semibold flex md:text-6xl text-2xl ml-6 dark:text-white">
                15,300{' '}
                <span>
                  <img className="ml-0 w-7" src="/svg/star.svg" alt="" />
                </span>
              </h2>
              <span className="md:text-sm text-[12px] dark:text-gray-200">
                Our Staid Field Client
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
