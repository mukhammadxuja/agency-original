import Image from 'next/image';
import img1 from './about.png';

import { MarqueeServices } from '../';
import { useLanguage } from '../../hooks/useLanguage';
import star from '../../public/svg/star.svg';
import People from './People';

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
            <h2 className="md:text-[4rem] text-[2rem] font-bold leading-none">
              DotSoft - {t('home:about_title_without_highlight')}
              <span className="text-[#008CFF] mx-1 md:mx-2">
                {t('home:about_title_highlight')}
              </span>
            </h2>
            <h5 className="md:text-base text-gray-600 dark:text-white pt-4">
              DotSoft {t('home:about_paragraph')}
            </h5>
          </div>
          <div className="mt-14 space-y-5">
            <People
              img="/images/team/Bexruz.jpeg"
              alt="dotSoft web programming group: Usmonov Bexruz"
              name="Usmonov Behruz"
              job="Product Manager"
              link="https://t.me/ubehruz"
              paragraph={t('home:about_product_management')}
            />
            <People
              img="/images/team/azizjon.jpg"
              alt="dotSoft web programming group: Abdullayev Aziz"
              name="Abdullayev Aziz"
              job="Full Stack Dev"
              link="https://t.me/AzizjonAbdullayev"
              paragraph={`${t('home:about_fullstack')}`}
            />
          </div>
        </div>
        <div className="md:w-[50%] md:pl-20 space-y-2 md:space-y-3">
          <People
            img="/images/team/anvarov.jpeg"
            name="Anvarov Muhammad"
            job="Fullstack Dev"
            link="https://t.me/akzmsh"
            paragraph={`${t('home:about_fullstack')}`}
          />
          <People
            img="/images/team/sarvar_anvarov.png"
            alt="dotSoft web programming group: Anvarov Sarvar"
            name="Anvarov Sarvar"
            job="SMM Marketolog"
            link="https://t.me/sareanvarov"
            paragraph={t('home:about_smm_marketing')}
          />
          <People
            img="/images/team/komil.jpg"
            alt="dotSoft web programming group: Mahmudov Komil"
            name="Maxmudov Komil"
            job="Backend Dev"
            link="https://t.me/komilmaxmudov"
            paragraph={`${t('home:about_backend')}`}
          />
          {/* <People
            img="/images/team/norpulatov_aziz.jpg"
            name="Norpulatov Aziz"
            job="Sales Manager"
            link="https://t.me/Only_dear"
            paragraph={`${t('home:about_sales_management')}`}
          /> */}
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
              50+
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
              8
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
              100+
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
