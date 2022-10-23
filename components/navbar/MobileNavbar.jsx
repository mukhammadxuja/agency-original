import React from 'react';

import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const MobileNavbar = () => {
  // Language support
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = router;

  const [openNav, setOpenNav] = React.useState(false);
  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  const [scroll, setScroll] = React.useState(false);

  React.useEffect(() => {
    let lastScroll = window.scrollY;
    window.addEventListener('scroll', () => {
      if (lastScroll < window.scrollY) {
        setScroll(true);
      } else {
        setScroll(false);
      }

      lastScroll = window.scrollY;
    });
  }, []);

  return (
    <div
      className={`${
        scroll
          ? 'transform translate-y-80 duration-300'
          : 'transform translate-y-0 duration-300'
      } fixed bottom-8 z-50 left-1/2 md:hidden transform -translate-x-1/2 overflow-y-scroll`}
    >
      <div
        className={`${
          openNav ? 'w-[92vw]' : 'w-38'
        }  bg-[#222] bg-opacity-80 p-2 rounded-xl`}
      >
        <div
          className={`${
            openNav ? 'h-56' : 'h-0 hidden'
          } py-2 px-4 text-white bg-black bg-opacity-90 rounded-t-xl`}
        >
          <div className=" border-dashed border-l pl-4">
            <ul className="my-2items-center space-y-1">
              <li className="cursor-pointer text-base">
                <p>{t('home:about_navbar')}</p>
              </li>
              <li className="cursor-pointer text-base">
                <p>{t('home:services_navbar')}</p>
              </li>
              <li className="cursor-pointer text-base">
                <p>{t('home:works_navbar')}</p>
                <ul className="ml-3">
                <p>
                  <li>- InReport - system</li>
                </p>
                <p>
                  <li>- edTeach - quiz app</li>
                </p>
                <p>
                  <li>- Lazydev - React ui kit</li>
                </p>
              </ul>
              </li>
              <li className="cursor-pointer text-base">
                <p>{t('home:contact_navbar')}</p>
              </li>
            </ul>
            <ul className="flex space-x-2 mt-1">
              <li
                onClick={() => router.push('/en', '/en', { locale: 'en' })}
                className="text-base text-white"
              >
                En
              </li>
              <li
                onClick={() => router.push('/ru', '/ru', { locale: 'ru' })}
                className="text-base text-white"
              >
                Ru
              </li>
              <li
                onClick={() => router.push('/uz', '/uz', { locale: 'uz' })}
                className="text-base text-white"
              >
                Uz
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`${
            openNav
              ? 'rounded-b-xl border-t border-white border-opacity-20'
              : 'rounded-xl border-0'
          } bg-black bg-opacity-90 p-3`}
        >
          <div
            className={`${
              openNav ? 'justify-between' : ''
            } container mx-auto w-full flex items-center text-center space-x-2`}
          >
            <h4 className="text-white">Home.soft</h4>
            <svg
              onClick={toggleNav}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`${
                openNav ? 'hidden' : 'block'
              } w-6 h-6 text-white mt-0.5 cursor-pointer`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              onClick={toggleNav}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`${
                openNav ? 'block' : 'hidden'
              } w-6 h-6 text-white mt-0.5 cursor-pointer`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
