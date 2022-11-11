import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const Works = () => {
  const { t } = useLanguage();

  const weCanDo = [
    {
      id: '12432342432',
      title: `${t('home:service_1')}`,
      paragraph: `${t('home:services_paragraph_1')}`,
      img: '/svg/star-white.svg',
    },
    {
      id: '24092102498',
      title: `${t('home:service_2')}`,
      paragraph: `${t('home:services_paragraph_2')}`,
      img: '/svg/star-white.svg',
    },
    {
      id: '34230498234',
      title: `${t('home:service_3')}`,
      paragraph: `${t('home:services_paragraph_3')}`,
      img: '/svg/star-white.svg',
    },
    {
      id: '4123098200533',
      title: `${t('home:service_4')}`,
      paragraph: `${t('home:services_paragraph_4')}`,
      img: '/svg/star-white.svg',
    },
    {
      id: '5239812323097',
      title: `${t('home:service_5')}`,
      paragraph: `${t('home:services_paragraph_5')}`,
      img: '/svg/star-white.svg',
    },
  ];

  return (
    <section className="container mx-auto">
      <div className="flex flex-wrap justify-between pb-10 md:pb-14 lg:pb-16 xl:pb-20 items-center">
        <div>
          <h3 className="font-bold md:text-xl">
            {t('home:what_we_can_do_section')}
          </h3>
          <h1 className="md:text-[4rem] text-[2rem] font-bold leading-none">
            DotSoft -
            <span className="text-[#006B98]">
              {' '}
              {t('home:we_can_highlight')}
            </span>{' '}
            <br className="md:block hidden" />{' '}
            {t('home:we_can_without_highlight')}
          </h1>
        </div>
        {/* <div>
          <p className="text-sm md:text-base xl:mt-0 mt-4">
            {t('home:we_can_paragraph_1')}
            <br className="md:block hidden" />
            {t('home:we_can_paragraph_2')}
            <br className="md:block hidden" />
            {t('home:we_can_paragraph_3')}
          </p>
<<<<<<< HEAD
        </div> */}
      </div>

      <div>
        {weCanDo.map((item) => (
          <div
            key={item.id}
            className="lg:flex justify-between border-t py-5 md:py-7 lg:py-7 items-center"
          >
            <div className="flex items-center justify-between">
              <div className="rounded-full sm:w-[70px] sm:h-[70px] w-[60px] h-[60px] bg-[#3b3939] dark:bg-[#E1E1E1] sm:p-[18px] p-[16px] block">
                <img
                  className="w-full h-full dark:brightness-0"
                  height
                  src={item.img}
                  alt=""
                />
              </div>

              <h3 className="sm:text-3xl text-2xl xl:ml-[100px] lg:ml-[50px] text-[#202020] dark:text-[white]">
                {item.title}
              </h3>
            </div>
            <div className="flex xl:mt-0 mt-5 md:mt-10 justify-between lg:w-[43%] xl:ml-auto">
              <p className="">{item.paragraph}</p>
              <img
                className="w-[37px] h-[37px] sm:block hidden brightness-0 dark:brightness-100"
                height
                src={item.img}
                alt=""
              />
            </div>
          </div>
        ))}
=======
        </div>
      </div>
      {/* forks table */}
      <div className="lg:flex justify-between border-t  py-5 md:py-7 lg:py-7 items-center">
        <div className="flex items-center justify-between">
          <div className="rounded-full sm:w-[70px] sm:h-[70px] w-[60px] h-[60px] bg-[#3b3939] dark:bg-[#E1E1E1] sm:p-[18px] p-[16px] block">
            <img
              className="w-full h-full dark:brightness-0"
              height
              src="/svg/star-white.svg"
              alt=""
            />
          </div>
          <h3 className="sm:text-3xl text-2xl xl:ml-[100px] lg:ml-[50px] text-[#202020] dark:text-[white]">
            Web apps
          </h3>
        </div>
        <div className="flex xl:mt-0 mt-5 md:mt-10 lg:mt-0  justify-between lg:w-[45%] xl:ml-auto">
          <p className="">
            Zamonaviy, xavfsiz, qulay, funksional
            <br className='lg:hidden sm:block hidden ' /> web dasturlar qilamiz.
          </p>
          <img
            className="w-[37px] h-[37px] sm:block hidden brightness-0 dark:brightness-100"
            height
            src="/svg/star-white.svg"
            alt=""
          />
        </div>
      </div>
      <div className="lg:flex justify-between border-t  py-5 md:py-7 lg:py-7 items-center">
        <div className="flex items-center justify-between">
          <div className="rounded-full sm:w-[70px] sm:h-[70px] w-[60px] h-[60px] bg-[#3b3939] dark:bg-[#E1E1E1] sm:p-[18px] p-[16px] block">
            <img
              className="w-full h-full dark:brightness-0"
              height
              src="/svg/star-white.svg"
              alt=""
            />
          </div>
          <h3 className="sm:text-3xl text-2xl xl:ml-[100px] lg:ml-[50px] text-[#202020] dark:text-[white]">
            Website development
          </h3>
        </div>
        <div className="flex xl:mt-0 mt-5 md:mt-10 lg:mt-0 justify-between lg:w-[45%] xl:ml-auto">
          <p className="">
            Zamonaviy, kreativ didingizga  <br className='lg:hidden sm:block hidden ' /> mos websaytlar qilamiz.
          </p>
          <img
            className="w-[37px] h-[37px] sm:block hidden brightness-0 dark:brightness-100"
            height
            src="/svg/star-white.svg"
            alt=""
          />
        </div>
      </div>
      <div className="lg:flex justify-between border-t  py-5 md:py-7 lg:py-7 items-center">
        <div className="flex items-center justify-between">
          <div className="rounded-full sm:w-[70px] sm:h-[70px] w-[60px] h-[60px] bg-[#3b3939] dark:bg-[#E1E1E1] sm:p-[18px] p-[16px] block">
            <img
              className="w-full h-full dark:brightness-0"
              height
              src="/svg/star-white.svg"
              alt=""
            />
          </div>
          <h3 className="sm:text-3xl text-2xl xl:ml-[100px] lg:ml-[50px] text-[#202020] dark:text-[white]">
            Mobile development
          </h3>
        </div>
        <div className="flex xl:mt-0 mt-5 md:mt-10 lg:mt-0 justify-between lg:w-[45%] xl:ml-auto">
          <p className="">
            Android va IOS operatsion sistemalari  <br className='lg:hidden sm:block hidden ' /> uchun mukammal mobil dasturlar
            yaratamiz.
          </p>
          <img
            className="w-[37px] h-[37px] sm:block hidden brightness-0 dark:brightness-100"
            height
            src="/svg/star-white.svg"
            alt=""
          />
        </div>
      </div>
      <div className="lg:flex justify-between border-t  py-5 md:py-7 lg:py-7 items-center">
        <div className="flex items-center justify-between">
          <div className="rounded-full sm:w-[70px] sm:h-[70px] w-[60px] h-[60px] bg-[#3b3939] dark:bg-[#E1E1E1] sm:p-[18px] p-[16px] block">
            <img
              className="w-full h-full dark:brightness-0"
              height
              src="/svg/star-white.svg"
              alt=""
            />
          </div>
          <h3 className="sm:text-3xl text-2xl xl:ml-[100px] lg:ml-[50px] text-[#202020] dark:text-[white]">
            Design
          </h3>
        </div>
        <div className="flex xl:mt-0 mt-5 md:mt-10 lg:mt-0 justify-between lg:w-[45%] xl:ml-auto">
          <p className="">
            Shablon yoki sizning istagingizga ko`ra,  <br className='lg:hidden sm:block hidden ' /> web dizayn, mobayl dizayn
            va ui/ux qilamiz.
          </p>
          <img
            className="w-[37px] h-[37px] sm:block hidden brightness-0 dark:brightness-100"
            height
            src="/svg/star-white.svg"
            alt=""
          />
        </div>
      </div>
      <div className="lg:flex justify-between border-t  py-5 md:py-7 lg:py-7 items-center">
        <div className="flex items-center justify-between">
          <div className="rounded-full sm:w-[70px] sm:h-[70px] w-[60px] h-[60px] bg-[#3b3939] dark:bg-[#E1E1E1] sm:p-[18px] p-[16px] block">
            <img
              className="w-full h-full dark:brightness-0"
              height
              src="/svg/star-white.svg"
              alt=""
            />
          </div>
          <h3 className="sm:text-3xl text-2xl xl:ml-[100px] lg:ml-[50px] text-[#202020] dark:text-[white]">
            Branding
          </h3>
        </div>
        <div className="flex xl:mt-0 mt-5 md:mt-10 lg:mt-0 justify-between lg:w-[45%] xl:ml-auto">
          <p className="">
            Biznesingizni brend darajasiga olib  <br className='lg:hidden sm:block hidden ' /> chiqishga, sizga yaqindan yordam
          </p>
          <img
            className="w-[37px] h-[37px] sm:block hidden brightness-0 dark:brightness-100"
            height
            src="/svg/star-white.svg"
            alt=""
          />
        </div>
>>>>>>> 185c5eb9587ff5e575b721e9538ae7b8e8a18b9f
      </div>
    </section>
  );
};

export default Works;
