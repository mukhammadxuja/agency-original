import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';

import { Language, MobileNavbar, DarkMode, Totop } from '../';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation();

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
          <DarkMode />
        </div>
      </div>
      <Totop />
      <MobileNavbar />
    </div>
  );
};

export default Navbar;
