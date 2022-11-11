import Image from 'next/image';
import React from 'react';
import img1 from './about.jpeg';
// import img2 from 'https://miro.medium.com/max/4096/1*rg15Zbos-3RZ_TCKe4bdhg.jpeg';

import { weCanDo } from './headerData';

const About = () => {

  return (
    <section className="md:pb-14 lg:pb-16 xl:pb-20">
      <div className="bg-black overflow-hidden ">
        <div className="h-16 md:h-24 flex items-center whitespace-nowrap animate-marquee">
          {weCanDo.map((canWe) => (
            <div key={canWe.id} className="flex items-center">
              <img className="w-6 md:w-8 ml-8" src={canWe.img} alt="star img" />
              <h3 className="text-2xl md:text-3xl text-white mx-5">
                {canWe.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto md:flex mt-5 md:mt-20">
        <div className="md:w-[50%] flex flex-col items-center">
          <div>
            <h3 className="font-bold md:text-xl">ABOUT US</h3>
            <h2 className="md:text-[4rem] text-[2rem] font-bold leading-none">
              DotSoft -{' '}
              <span className="text-[#016C9AFF] mr-1 md:mr-2">
                barchasiga NUQTA
              </span>
              qo`yadi. <span className="text-2xl md:text-4xl">😉</span>
            </h2>
            <h5 className="md:text-base text-gray-600 dark:text-white pt-4">
              DotSoft — bu 2021 yildan boshlab IT bozorida mijozlar uchun xizmat
              qiluvchi professional mutaxasislar jamoasidir. DotSoft
              asoschilarining oliy maqsadi kompaniyani dunyo IT bozorida
              yetakchilaridan qilish va dunyo IT sohasidagi xalqaro
              standartlariga javob bera oladigan dasturchilar jamoasini
              shakllantirish. Shu òrinda ularga rasman ishga joylash va oliy
              maqsad sari birga harakat qilish.
            </h5>
          </div>
          <div className="mini-cards pt-4 mt-5">
            <div className="flex">
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
                <a target="blank" href="https://t.me/your_frontendDev">

                  <h3 className="font-bold text-lg">Safarov Muzaffar</h3>
                </a>
                <p className="text-[#3F3F3FFF] dark:text-gray-400">
                  Front End - problem solving dev
                </p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-white pt-3 pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium laudantium placeat, ullam quam ipsam facilis.
            </p>
          </div>
        </div>
        <div className="md:w-[50%] md:px-20 space-y-2 md:space-y-4  ">
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
                <a target="blank" href="https://t.me/komilmaxmudov">

                  <h3 className="font-bold text-lg">Anvarov Muhammad</h3>
                </a>
                <p className="text-[#3F3F3FFF] dark:text-gray-400">
                  Front End - Creative dev
                </p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-white pt-3 pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium laudantium placeat, ullam quam ipsam facilis.
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
                <a target="blank" href="https://t.me/AzizjonAbdullayev">

                  <h3 className="font-bold text-lg">Abdullayev Aziz</h3>
                </a>
                <p className="text-[#3F3F3FFF] dark:text-gray-400">
                  Full Stack dev
                </p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-white pt-3 pb-5 border-gray-400">
              a person who provides general review and support for web sites
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
                <a target="blank" href="https://t.me/komilmaxmudov">
                  <h3 className="font-bold text-lg">Mahmudov Komil</h3>
                </a>
                <p className="text-[#3F3F3FFF] dark:text-gray-400">
                  Backend dev
                </p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-white pt-3 pb-5 border-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium laudantium placeat, ullam quam ipsam facilis.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-5 md:mt-20">
        <div className="relative h-[23rem] md:h-[29rem] bg-center rounded-xl w-full bg-cover ">
          {/* <div className='h-[23rem] md:h-[29rem] bg-center rounded-xl w-full bg-cover' style={ sectionStyle } ></div> */}
          
          {/* <img className='h-[23rem] md:h-[29rem] bg-center rounded-xl w-full bg-cover' src={img1} alt="fdgdf" style={{backgroundPosition: "center", backgroundSize: "cover"}}/> */}

          <Image
            src={img1}
            layout="fill"
            objectFit="cover"
            alt="Banner image"
            className="rounded-3xl w-full"
          />
        </div>
        <div className="flex justify-evenly md:px-10 py-5 text-center text-[#222426FF]">
          <div>
            <h2 className="font-semibold flex md:text-6xl text-2xl ml-6 dark:text-white">
              168{' '}
              <span>
                <img className="w-5 md:w-7" src="/svg/star.svg" alt="" />
              </span>
            </h2>
            <span className="md:text-sm text-xs md:text-[12px] dark:text-gray-100">
              Full Complete Projcets
            </span>
          </div>
          <div>
            <h2 className="font-semibold flex md:text-6xl text-2xl ml-6 dark:text-white">
              92{' '}
              <span>
                <img className="w-5 md:w-7" src="/svg/star.svg" alt="" />
              </span>
            </h2>
            <span className="md:text-sm text-xs md:text-[12px] dark:text-gray-100">
              our own projects
            </span>
          </div>
          <div>
            <h2 className="font-semibold flex md:text-6xl text-2xl ml-6 dark:text-white">
              15,300{' '}
              <span>
                <img className="w-5 md:w-7" src="/svg/star.svg" alt="" />
              </span>
            </h2>
            <span className="md:text-sm text-xs md:text-[12px] dark:text-gray-100">
              Our Staid Field Client
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
