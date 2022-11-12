import Link from 'next/link';

import { Language, MobileNavbar, DarkMode, Totop } from '../';
import { useScroll } from '../../hooks/useScroll';
import { useLanguage } from '../../hooks/useLanguage';

const Navbar = () => {
  const { scroll } = useScroll();
  const { t, locale } = useLanguage();

  return (
    <div>
      <div
        className={`${
          scroll ? 'transform -translate-y-36' : 'transform translate-y-0'
        } fixed z-50 top-0 left-0 right-0 w-screen backdrop-blur flex-none transition-all duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-neutral-900/75`}
      >
        <div className="container mx-auto flex items-center justify-between pb-5">
          {/* <div className="ml-0 md:-ml-3 mt-2 cursor-pointer">
            <Link href="/">
              <div className="block dark:hidden">
                <Image
                  width={70}
                  height={60}
                  objectFit="contain"
                  src="/images/dotsoft/dotsoft-light.png"
                  alt="Footer logo"
                />
              </div>
            </Link>
            <Link href="/">
              <div className="hidden dark:block">
                <Image
                  width={70}
                  height={60}
                  objectFit="contain"
                  src="/images/dotsoft/dotsoft-dark.png"
                  alt="Footer logo"
                />
              </div>
            </Link>
          </div> */}
          <Link href="/">
            <img
              className="ml-0 md:-ml-3 mt-4 w-20 md:w-28 cursor-pointer block dark:hidden"
              src="/images/dotsoft/dotsoft-light.png"
              alt=""
            />
          </Link>
          <Link href="/">
            <img
              className="ml-0 md:-ml-3 mt-4 w-20 md:w-28 cursor-pointer hidden dark:block"
              src="/images/dotsoft/dotsoft-dark.png"
              alt=""
            />
          </Link>
          <ul className="mt-4 hidden items-center space-x-2 md:inline-flex md:space-x-5">
            <li className="cursor-pointer text-xl font-medium duration-500 hover:text-gray-600">
              <a href="/#about">{t('home:about_navbar')}</a>
            </li>
            <li className="cursor-pointer text-xl font-medium duration-500 hover:text-gray-600">
              <a href="/#services">{t('home:services_navbar')}</a>
            </li>
            <li className="cursor-pointer text-xl font-medium duration-500 hover:text-gray-600">
              <a href="/#portfolio">{t('home:works_navbar')}</a>
            </li>
            <Link href="/price">
              <li className="cursor-pointer text-xl font-medium duration-500 hover:text-gray-600">
                {t('home:price_navbar')}
              </li>
            </Link>
            <Link href="/blog">
              <li className="cursor-pointer text-xl font-medium duration-500 hover:text-gray-600">
                {t('home:blog_navbr')}
              </li>
            </Link>
            <li className="cursor-pointer text-xl font-medium duration-500 hover:text-gray-600">
              <a href="/#contact">{t('home:contact_navbar')}</a>
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
      </div>
      <Totop />
      <MobileNavbar />
    </div>
  );
};

export default Navbar;
