import Image from 'next/image';
import React from 'react';
import img1 from './about.jpeg';

import { useLanguage } from '../../hooks/useLanguage';
import { MarqueeServices } from '../';
import star from "../../public/svg/star.svg"

const About = () => {
  const { t } = useLanguage();
  return (
    <section className="md:pb-14 lg:pb-16 xl:pb-20">
      <MarqueeServices />
      <div id="about" className="container mx-auto md:flex mt-5 md:mt-20">
        <div className="md:w-[50%] flex flex-col items-center">
          <div>
            <h3 className="font-bold md:text-xl">
              {t('home:about_us_section')}
            </h3>
            <h2 className="md:text-[4rem] text-[2rem] leading-none">
              DotSoft -
              <span className="text-[#016C9AFF] mr-1 md:mr-2">
                {t('home:about_title_highlight')}
              </span>
              {t('home:about_title_without_highlight')}.
              <Image
                src="/images/emojes/winking-face.png"
                className="rounded-full"
                width={35}
                height={35}
              />
            </h2>
            <h5 className="md:text-base text-gray-600 dark:text-white pt-4">
              DotSoft — {t('home:about_paragraph')}
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
                  alt="dotSoft web programming group: Safarov Muzaffar"
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
                  src="/images/team/Anvarov.jpg"
                  className="rounded-full"
                  width={50}
                  height={50}
                  loading="lazy"
                  alt="dotSoft web programming group: Anvarov Muhammad"
                />
              </div>
              <div className="pl-2">
                <a target="blank" href="https://t.me/akzmsh">
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
            <div className="flex">
              <div>
                <Image
                  src="/images/team/Aziz.jpg"
                  className="rounded-full"
                  width={50}
                  height={50}
<<<<<<< HEAD
                  loading="lazy"
                  alt="Abdullayev Aziz"
=======
                  src={img1}
                  alt="dotSoft web programming group: Abdullayev Aziz"
>>>>>>> 1082aa90372d0090038243f0da6cec052be949c6
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
              Web sayt va web dasturlarni xavfsiz, kamchiliklarsiz, yengil
              ishlashini taminlash va yuklashga javob beruvchi
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
                  alt="dotSoft web programming group: Mahmudov Komil"
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
          <Image
            src={img1}
            layout="fill"
            objectFit="cover"
            alt="dotSoft web programming group Banner image"
            className="rounded-3xl w-full"
          />
        </div>
        <div className="flex justify-evenly md:px-10 py-5 text-center text-[#222426FF]">
          <div>
            <h2 className="font-semibold flex md:text-6xl text-2xl ml-6 dark:text-white">
              37
              <span className="w-5 md:w-7">
                <Image  src={star} alt="dotSoft web programming group" />
              </span>
            </h2>
            <span className="md:text-sm text-xs md:text-[12px] dark:text-gray-100">
              {t('home:about_complete_projects')}
            </span>
          </div>
          <div>
            <h2 className="font-semibold flex md:text-6xl text-2xl ml-6 dark:text-white">
              17
              <span className="w-5 md:w-7">
                <Image  src={star} alt="dotSoft web programming group" />
              </span>
            </h2>
            <span className="md:text-sm text-xs md:text-[12px] dark:text-gray-100">
              {t('home:about_own_projects')}
            </span>
          </div>
          <div>
            <h2 className="font-semibold flex md:text-6xl text-2xl ml-6 dark:text-white">
              46
              <span className="w-5 md:w-7">
                <Image  src={star} alt="dotSoft web programming group" />
              </span>
            </h2>
            <span className="md:text-sm text-xs md:text-[12px] dark:text-gray-100">
              {t('home:about_customers')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
