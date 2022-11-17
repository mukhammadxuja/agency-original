import Image from 'next/image';
import React from 'react';

import { useLanguage } from '../../hooks/useLanguage';

import header2 from './header.png';
import star from '../../public/svg/star.svg';
import moment from 'moment';

const Header = () => {
  const { t } = useLanguage();
  const year = moment().format('YYYY');
  return (
    <div className="relative mt-10 md:mt-20">
      <div className="mt-20">
        <div className="container mx-auto h-auto">
          <p className="text-lg font-semibold md:text-xl">&copy;{year}</p>
          <div className="mb-10 ">
            <div className="flex items-center">
              <div className="flex flex-col md:flex-row md:items-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold">
                  DotSoft -
                </h1>
                <div className="flex items-center -mt-3 md:mt-0 whitespace-nowrap">
                  <h5 className="text-4xl mt-2 md:ml-4 md:mt-4 font-semibold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                    {t('home:heading_web')}
                  </h5>
                  <div className="text-[#006B98] text-4xl md:ml-4 mt-6 md:mt-8 xl:mt-10 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl flex flex-col h-11 sm:h-13 md:h-14 lg:h-[4.5rem] xl:h-24 overflow-hidden">
                    <span className="px-2 font-semibold animate-spinWord">
                      {t('home:heading_service_1')}
                    </span>
                    <span className="px-2 font-semibold animate-spinWord">
                      {t('home:heading_service_2')}
                    </span>
                    <span className="px-2 font-semibold animate-spinWord">
                      {t('home:heading_service_3')}
                    </span>
                    <span className="px-2 font-semibold animate-spinWord">
                      {t('home:heading_service_1')}
                    </span>
                    <span className="px-2 font-semibold animate-spinWord">
                      {t('home:heading_service_2')}
                    </span>
                    <span className="px-2 font-semibold animate-spinWord">
                      {t('home:heading_service_3')}
                    </span>
                    <span className="px-2 font-semibold animate-spinWord">
                      {t('home:heading_service_1')}
                    </span>
                    <span className="px-2 font-semibold animate-spinWord">
                      {t('home:heading_service_2')}
                    </span>
                    <span className="px-2 font-semibold animate-spinWord">
                      {t('home:heading_service_3')}
                    </span>
                    <span className="px-2 font-semibold animate-spinWord">
                      {t('home:heading_service_1')}
                    </span>
                    <span className="px-2 font-semibold animate-spinWord">
                      {t('home:heading_service_2')}
                    </span>
                    <span className="px-2 font-semibold animate-spinWord">
                      {t('home:heading_service_3')}
                    </span>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block ml-2 md:mt-12 w-10 h-10 xl:w-20 xl:w-20 duration-500 hover:rotate-180">
                <Image
                  src={star}
                  alt="dotSoft web programming group spinner"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="text-4xl sm:text-5xl flex md:text-6xl lg:text-7xl xl:text-8xl font-semibold">
              {t('home:heading_end')}
            </div>
          </div>
          <div className="mb-5 md:mt-5 flex items-center space-x-2 md:space-x-4">
            <div className="flex items-center -space-x-5 md:-space-x-7">
              <div className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] rounded-full bg-[#006B98]"></div>
              <div className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] rounded-full bg-black dark:bg-white"></div>
            </div>
            <div className="text-sm md:text-base -space-y-1 font-bold text-gray-700 dark:text-white">
              <p className='font-semibold'>37+</p>
              <p className="whitespace-nowrap">{t('home:about_complete_projects')}</p>
            </div>
            <div className="hidden md:block max-w-2xl -space-y-1 text-lg font-semibold text-gray-700 dark:text-white">
              <p className="ml-5 sm:ml-10 md:ml-16 text-xs">
              {t('home:heading_paragraph')}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="relative mt-16 !bg-[center_bottom_-1rem] w-full object-cover h-[50vh] sm:h-[50vh] md:h-[25rem] lg:h-[25rem] xl:h-[30rem] ">
            <Image
              src={header2}
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
