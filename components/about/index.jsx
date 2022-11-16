import Image from 'next/image';
import React from 'react';
import img1 from './about.png';

import People from './People';
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
          <div className="mt-5 space-y-5">
            <People
              img="/images/team/Bexruz.jpeg"
              alt="dotSoft web programming group: Usmonov Bexruz"
              name="Usmonov Behruz"
              job="Product Manager"
              link="https://t.me/ubehruz"
              paragraph={t('home:about_product_manager')}
            />
            <People
              img="/images/team/G`olib.jpg"
              alt="dotSoft web programming group: Usmonov Bexruz"
              name="Maxmudov G'olibxo'ja"
              job="Sales Manager"
              link="https://t.me/your_frontendDev"
              paragraph={t('home:about_sales_mangment')}
            />
          </div>
        </div>
        <div className="md:w-[50%] md:px-20 md:pt-10 space-y-2 md:space-y-3">
          <People
            img={img1}
            name="Saforv Muzaffar"
            job="Front End Dev"
            link="https://t.me/your_frontendDev"
            paragraph={`${t('home:about_frontend')}`}
          />
          <People
            img="/images/team/Anvarov.jpg"
            name="Anvarov Muhammad"
            job="Front End Dev"
            link="https://t.me/akzmsh"
            paragraph={`${t('home:about_frontend')}`}
          />
          <People
            img="/images/team/Aziz.jpg"
            alt="dotSoft web programming group: Abdullayev Aziz"
            name="Abdullayev Aziz"
            job="Full Stack Dev"
            link="https://t.me/AzizjonAbdullayev"
            paragraph={`${t('home:about_fullstack')}`}
          />
          <People
            img="/images/team/Komil.jpeg"
            alt="dotSoft web programming group: Mahmudov Komil"
            name="Maxmudov Komil"
            job="Backend Dev"
            link="https://t.me/komilmaxmudov"
            paragraph={`${t('home:about_backend')}`}
          />
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
