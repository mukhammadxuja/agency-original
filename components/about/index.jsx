import Image from 'next/image';
import React from 'react';
import img1 from './about.png';

import { useLanguage } from '../../hooks/useLanguage';
import { MarqueeServices } from '../';
import star from '../../public/svg/star.svg';

const About = () => {
  const { t } = useLanguage();
  return (
    <section className="md:pb-14 lg:pb-16 xl:pb-20">
      <MarqueeServices />
      <div id="about" className="container mx-auto md:flex mt-5 md:mt-20">
        <div className="md:w-[50%] flex flex-col">
          <div>
            <h3 className="font-semibold md:text-xl">
              {t('home:about_us_section')}
            </h3>
            <h1 className="md:text-[4rem] text-[2rem] font-bold leading-none">
              DotSoft -
              <span className="text-[#016C9AFF] mr-1 md:mr-2">
                {t('home:about_title_highlight')}
              </span>
              <br className="md:block hidden" />{' '}
              {t('home:about_title_without_highlight')}
            </h1>
            <h5 className="md:text-base text-gray-600 dark:text-white pt-4">
              DotSoft {t('home:about_paragraph')}
            </h5>
          </div>
          <div className=" pt-4 mt-5">
            <div className="flex">
              <div>
                <Image
                  src="/images/team/Bexruz.jpeg"
                  className="rounded-full"
                  width={50}
                  height={50}
                  loading="lazy"
                  alt="dotSoft web programming group: Usmonov Bexruz"
                />
              </div>
              <div className="pl-2">
                <a target="blank" href="https://t.me/ubehruz">
                  <h3 className="font-bold text-lg">Usmonov Behruz</h3>
                </a>
                <p className="text-[#3F3F3FFF] dark:text-gray-400">
                  Product Manager
                </p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-white pt-3 pb-5">
              Prodact menejer mahsulotning ko`rinishini, maqsadlarini va biznes
              traektoriyasini belgilaydi,
            </p>
          </div>
          <div className=" pt-4 mt-5">
            <div className="flex">
              <div>
                <Image
                  src="/images/team/G`olib.jpg"
                  className="rounded-full"
                  width={50}
                  height={50}
                  objectFit="cover"
                  loading="lazy"
                  alt="dotSoft web programming group: Usmonov Bexruz"
                />
              </div>
              <div className="pl-2">
                <a target="blank" href="https://t.me/your_frontendDev">
                  <h3 className="font-bold text-lg">
                    Maxmudov G&apos;olibxo&apos;ja
                  </h3>
                </a>
                <p className="text-[#3F3F3FFF] dark:text-gray-400">
                  Sales Manager
                </p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-white pt-3 pb-5">
              Savdoni rivojlantirish bo`yicha menejerlar tashkilot ichidagi
              savdo bo`limini nazorat qilish va takomillashtirish, shuningdek,
              yangi biznes imkoniyatlarini yaratish va xodimlarni o`qitish va
              rag`batlantirish strategiyalarini ishlab chiqish uchun
              javobgardir.
            </p>
          </div>
        </div>
        <div className="md:w-[50%] md:px-20 md:pt-10 space-y-2 md:space-y-4  ">
          <div className="">
            <div className="flex ">
              <div>
                <Image
                  src={img1}
                  className="rounded-full"
                  width={50}
                  height={50}
                  objectFit="cover"
                  loading="lazy"
                  alt="dotSoft web programming group: Anvarov Muhammad"
                />
              </div>
              <div className="pl-2">
                <a target="blank" href="https://t.me/akzmsh">
                  <h3 className="font-bold text-lg">Safarov Muzaffar</h3>
                </a>
                <p className="text-[#3F3F3FFF] dark:text-gray-400">
                  Front End Dev
                </p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-white pt-3 pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium laudantium placeat, ullam quam ipsam facilis.
            </p>
          </div>
          <div className="">
            <div className="flex ">
              <div>
                <Image
                  src="/images/team/Anvarov.jpg"
                  className="rounded-full"
                  width={50}
                  height={50}
                  objectFit="cover"
                  loading="lazy"
                  alt="dotSoft web programming group: Anvarov Muhammad"
                />
              </div>
              <div className="pl-2">
                <a target="blank" href="https://t.me/akzmsh">
                  <h3 className="font-bold text-lg">Anvarov Muhammad</h3>
                </a>
                <p className="text-[#3F3F3FFF] dark:text-gray-400">
                  Front End Dev
                </p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-white pt-3 pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium laudantium placeat, ullam quam ipsam facilis.
            </p>
          </div>
          <div className="">
            <div className="flex">
              <div>
                <Image
                  src="/images/team/Aziz.jpg"
                  className="rounded-full"
                  width={50}
                  height={50}
                  objectFit="cover"
                  alt="dotSoft web programming group: Abdullayev Aziz"
                />
              </div>
              <div className="pl-2">
                <a target="blank" href="https://t.me/AzizjonAbdullayev">
                  <h3 className="font-bold text-lg">Abdullayev Aziz</h3>
                </a>
                <p className="text-[#3F3F3FFF] dark:text-gray-400">
                  Full Stack Dev
                </p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-white pt-3 pb-5 border-gray-400">
              Web sayt va web dasturlarni xavfsiz, kamchiliklarsiz, yengil
              ishlashini taminlash va yuklashga javob beruvchi
            </p>
          </div>
          <div className="">
            <div className="flex ">
              <div>
                <Image
                  src="/images/team/Komil.webp"
                  className="rounded-full"
                  width={50}
                  height={50}
                  objectFit="cover"
                  alt="dotSoft web programming group: Mahmudov Komil"
                />
              </div>
              <div className="pl-2">
                <a target="blank" href="https://t.me/komilmaxmudov">
                  <h3 className="font-bold text-lg">Maxmudov Komil</h3>
                </a>
                <p className="text-[#3F3F3FFF] dark:text-gray-400">
                  Backend Dev
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
                <Image src={star} alt="dotSoft web programming group" />
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
                <Image src={star} alt="dotSoft web programming group" />
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
                <Image src={star} alt="dotSoft web programming group" />
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
