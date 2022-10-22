import React from 'react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';

import Language from './Language';

const Navbar = () => {
  const [language, setLanguage] = React.useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const { locale } = router;

  const { t } = useTranslation();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const renderChangeTheme = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <button
          onClick={() => setTheme('light')}
          className="mx-auto mt-4 w-fit cursor-pointer rounded-lg border bg-white py-3 px-8
        text-sm font-medium text-black shadow-md
        duration-300 ease-in-out active:scale-95 active:bg-opacity-80"
        >
          {t('home:ligth_navbar')}
        </button>
      );
    } else {
      return (
        <button
          onClick={() => setTheme('dark')}
          className="mx-auto mt-4 w-fit cursor-pointer rounded-lg border bg-black py-3 px-8
        text-sm font-medium text-white shadow-md
        duration-300 ease-in-out active:scale-95 active:bg-opacity-80"
        >
          {t('home:dark_navbar')}
        </button>
      );
    }
  };

  const toggleLanguage = () => {
    setLanguage(!language);
  };
  return (
    <div className="container mx-auto flex items-center justify-between">
      <div>
        <img
          className="-ml-3 w-24 md:w-28 cursor-pointer block dark:hidden"
          src="/images/dotsoft-light.png"
          alt=""
        />
        <img
          className="-ml-3 w-24 md:w-28 cursor-pointer hidden dark:block"
          src="/images/dotsoft-dark.png"
          alt=""
        />
      </div>
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
      <div className="flex items-center">
        <Language />
        <h1 className="text-xs -ml-0.5 text-black dark:text-white">{locale}</h1>
        <div className="ml-4 md:ml-6">{renderChangeTheme()}</div>
      </div>
    </div>
  );
};

export default Navbar;
