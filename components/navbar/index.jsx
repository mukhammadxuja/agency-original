import React from 'react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import Language from './Language';
import Totop from './Totop';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  // Scroll navbar animation
  const [scroll, setScroll] = React.useState(false);

  useEffect(() => {
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

  // Language support
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = router;
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const renderChangeTheme = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <button
          onClick={() => setTheme('light')}
          className="mx-auto mt-4 cursor-pointer rounded-lg bg-white py-3 px-8
        text-xs md:text-sm font-medium text-black shadow-md
        duration-300 ease-in-out active:scale-95 active:bg-opacity-80"
        >
          {t('home:ligth_navbar')}
        </button>
      );
    } else {
      return (
        <button
          onClick={() => setTheme('dark')}
          className="mx-auto mt-4 cursor-pointer rounded-lg bg-black py-3 px-8
        text-xs md:text-sm font-medium text-white shadow-md
        duration-300 ease-in-out active:scale-95 active:bg-opacity-80"
        >
          {t('home:dark_navbar')}
        </button>
      );
    }
  };

  return (
    <div>
      <div
        className={`${
          scroll ? 'transform -translate-y-36' : 'transform translate-y-0'
        } fixed z-50 top-0 left-0 right-0 container mx-auto flex items-center justify-between duration-500`}
      >
        <Link href="/">
          <img
            className="ml-0 md:-ml-3 mt-4 w-20 md:w-28 cursor-pointer block dark:hidden"
            src="/images/dotsoft-light.png"
            alt=""
          />
        </Link>
        <Link href="/">
          <img
            className="ml-0 md:-ml-3 mt-4 w-20 md:w-28 cursor-pointer hidden dark:block"
            src="/images/dotsoft-dark.png"
            alt=""
          />
        </Link>
        <ul className="mt-4 hidden items-center space-x-2 md:inline-flex md:space-x-5">
          <li className="cursor-pointer text-xl font-medium duration-300 hover:text-gray-600">
            {t('home:about_navbar')}
          </li>
          <li className="cursor-pointer text-xl font-medium duration-300 hover:text-gray-600">
            {t('home:services_navbar')}
          </li>
          <li className="cursor-pointer text-xl font-medium duration-300 hover:text-gray-600">
            {t('home:works_navbar')}
          </li>
          <li className="cursor-pointer text-xl font-medium duration-300 hover:text-gray-600">
            {t('home:contact_navbar')}
          </li>
        </ul>
        <div className="relative z-50 flex items-center">
          <div className="hidden md:inline-flex">
            <Language />
            <h1 className="text-xs -ml-0.5 mt-2 text-black dark:text-white">
              {locale}
            </h1>
          </div>
          <div className="ml-4 md:ml-6">{renderChangeTheme()}</div>
        </div>
      </div>
      <Totop />
      <MobileNavbar />
    </div>
  );
};

export default Navbar;
