import React from 'react';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';

import {
  AddFeatures,
  Breadcrumb,
  CheckIcon,
  ErrorIcon,
  PriceContact,
  // Features
  Express,
  Landing,
  SmallBusiness,
  Vizitka,
  Catalog,
  Commerce,
  Corporative,
  Unique,
} from '../../components';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'footer'])),
    },
  };
}

const Calculate = () => {
  const [activeDialog, setActiveDialog] = React.useState(false);
  const [openTab, setOpenTab] = React.useState(1);

  const dialog = () => {
    setActiveDialog(true);
  };

  const CloseDialog = () => {
    setActiveDialog(false);
  };
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.75,
      }}
      className="nav-bar"
    >
      <div className="container mx-auto">
        <Breadcrumb page="Price" link="/price" page2="Calculated" active />
        <div className="relative flex flex-nowrap items-center overflow-x-scroll scrollbar-default justify-between py-3 px-4 md:py-3 md:px-6 rounded-xl shadow-md my-3 md:my-5">
          <div className="pr-10 lg:pr-20 whitespace-nowrap">
            <p className="text-xs md:text-sm text-gray-500 whitespace-nowrap">
              Sayt Turi
            </p>
            <div className="flex items-center space-x-1">
              <h3 className="text-base md:text-xl">Landing Page</h3>
              <CheckIcon />
            </div>
          </div>
          <div className="pr-10 lg:pr-20 whitespace-nowrap">
            <p className="text-xs md:text-sm text-gray-500">Sahifalar Soni</p>
            <div className="flex items-center space-x-1">
              <h3 className="text-base md:text-xl">1-5 Tagacha</h3>
              <CheckIcon />
            </div>
          </div>
          <div className="pr-10 lg:pr-20 whitespace-nowrap">
            <p className="text-xs md:text-sm text-gray-500">Sayt Dizayni</p>
            <div className="flex items-center space-x-1">
              <h3 className="text-base md:text-xl">Shablon</h3>
              <CheckIcon />
            </div>
          </div>
          <div className="pr-10 lg:pr-20 whitespace-nowrap">
            <p className="text-xs md:text-sm text-gray-500 whitespace-nowrap">
              Qo&apos;cha Imkoniyatlar
            </p>
            <div className="flex items-center space-x-2">
              <span className="flex items-center space-x-1 text-base md:text-xl whitespace-nowrap">
                <h3>Responsive</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </span>
              {/* <span className="flex items-center space-x-1 text-base md:text-xl whitespace-nowrap">
                <h3>Dark Mode</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </span>
              <span className="flex items-center space-x-1 text-base md:text-xl whitespace-nowrap">
                <h3>Language</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </span> */}
            </div>
          </div>
          <div className="pr-10 lg:pr-20 whitespace-nowrap">
            <p className="text-xs md:text-sm text-gray-500">Matn yozish</p>
            <div className="flex items-center space-x-1">
              <h3 className="text-base md:text-xl">Yo&apos;q</h3>
              <ErrorIcon />
            </div>
          </div>
          <div className="pr-10 lg:pr-20 whitespace-nowrap">
            <p className="text-xs md:text-sm text-gray-500">SEO Xizmat</p>
            <div className="flex items-center space-x-1">
              <h3 className="text-base md:text-xl">Bor</h3>
              <CheckIcon />
            </div>
          </div>
          <div className="pr-10 lg:pr-20 whitespace-nowrap">
            <p className="text-xs md:text-sm text-gray-500">Umumiy Chegirma</p>
            <h3 className="text-base md:text-xl">
              2.7<span>$</span>
              <span className="bg-green-100 px-2 py-0.5 rounded-full text-xs md:text-sm text-green-500">
                -12%
              </span>
            </h3>
          </div>
          <div className="pr-10 lg:pr-20 whitespace-nowrap">
            <p className="text-xs md:text-sm text-gray-500">Umumiy summa</p>
            <h3 className="text-base md:text-xl">
              145<span>$</span> 😀
            </h3>
          </div>
        </div>
        <div className="flex items-center justify-between my-5">
          <h3 className="text-lg md:text-2xl">Narxlarni Hisoblash</h3>
          <Link href="/about-sites">
            <div className="flex items-center space-x-1 cursor-pointer group">
              <p>Saytlar haqida</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 group-hover:ml-2 transition-all duration-150 ease-in-ou"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          <div>
            <ul className="space-y-2">
              <li onClick={() => setOpenTab(1)}>
                <div
                  className={`${
                    openTab === 1 ? 'border-black' : 'border-neutral-400'
                  } inline-flex justify-between items-center p-5 w-full text-black bg-white rounded-lg border-2  cursor-pointer dark:hover:text-neutral-300 dark:border-neutral-700 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-black hover:bg-neutral-50 dark:text-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700`}
                >
                  <div className="w-full text-lg md:text-xl">
                    Express Website
                    <span className="w-fit ml-1 text-xs md:text-sm px-2 py-0 rounded-full bg-green-200 text-green-500">
                      -2%
                    </span>
                  </div>
                  <h3 className="text-lg md:text-2xl">$145</h3>
                </div>
              </li>
              <li onClick={() => setOpenTab(2)}>
                <div
                  className={`${
                    openTab === 2 ? 'border-black' : 'border-neutral-400'
                  } inline-flex justify-between items-center p-5 w-full text-black bg-white rounded-lg border-2 cursor-pointer dark:hover:text-neutral-300 dark:border-neutral-700 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-black hover:bg-neutral-50 dark:text-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700`}
                >
                  <div className="w-full text-lg md:text-xl">
                    Vizitka Website
                    <span className="w-fit ml-1 text-xs md:text-sm px-2 py-0 rounded-full bg-green-200 text-green-500">
                      -2%
                    </span>
                  </div>
                  <h3 className="text-lg md:text-2xl">$200</h3>
                </div>
              </li>
              <li onClick={() => setOpenTab(3)}>
                <div
                  className={`${
                    openTab === 3 ? 'border-black' : 'border-neutral-400'
                  } inline-flex justify-between items-center p-5 w-full text-black bg-white rounded-lg border-2  cursor-pointer dark:hover:text-neutral-300 dark:border-neutral-700 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-black hover:bg-neutral-50 dark:text-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700`}
                >
                  <div className="w-full text-lg md:text-xl">
                    Landing Website
                    <span className="w-fit ml-1 text-xs md:text-sm px-2 py-0 rounded-full bg-green-200 text-green-500">
                      -2%
                    </span>
                  </div>
                  <h3 className="text-lg md:text-2xl">$145</h3>
                </div>
              </li>
              <li onClick={() => setOpenTab(4)}>
                <div
                  className={`${
                    openTab === 4 ? 'border-black' : 'border-neutral-400'
                  } inline-flex justify-between items-center p-5 w-full text-black bg-white rounded-lg border-2 cursor-pointer dark:hover:text-neutral-300 dark:border-neutral-700 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-black hover:bg-neutral-50 dark:text-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700`}
                >
                  <div className="w-full text-lg md:text-xl">
                    Small Business Website
                    <span className="w-fit ml-1 text-xs md:text-sm px-2 py-0 rounded-full bg-green-200 text-green-500">
                      -2%
                    </span>
                  </div>
                  <h3 className="text-lg md:text-2xl">$200</h3>
                </div>
              </li>
              <li onClick={() => setOpenTab(5)}>
                <div
                  className={`${
                    openTab === 5 ? 'border-black' : 'border-neutral-400'
                  } inline-flex justify-between items-center p-5 w-full text-black bg-white rounded-lg border-2  cursor-pointer dark:hover:text-neutral-300 dark:border-neutral-700 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-black hover:bg-neutral-50 dark:text-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700`}
                >
                  <div className="w-full text-lg md:text-xl">
                    Katalog Website
                    <span className="w-fit ml-1 text-xs md:text-sm px-2 py-0 rounded-full bg-green-200 text-green-500">
                      -2%
                    </span>
                  </div>
                  <h3 className="text-lg md:text-2xl">$145</h3>
                </div>
              </li>
              <li onClick={() => setOpenTab(6)}>
                <div
                  className={`${
                    openTab === 6 ? 'border-black' : 'border-neutral-400'
                  } inline-flex justify-between items-center p-5 w-full text-black bg-white rounded-lg border-2 cursor-pointer dark:hover:text-neutral-300 dark:border-neutral-700 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-black hover:bg-neutral-50 dark:text-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700`}
                >
                  <div className="w-full text-lg md:text-xl">
                    Online Do`kon` Website
                    <span className="w-fit ml-1 text-xs md:text-sm px-2 py-0 rounded-full bg-green-200 text-green-500">
                      -2%
                    </span>
                  </div>
                  <h3 className="text-lg md:text-2xl">$200</h3>
                </div>
              </li>
              <li onClick={() => setOpenTab(7)}>
                <div
                  className={`${
                    openTab === 7 ? 'border-black' : 'border-neutral-400'
                  } inline-flex justify-between items-center p-5 w-full text-black bg-white rounded-lg border-2  cursor-pointer dark:hover:text-neutral-300 dark:border-neutral-700 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-black hover:bg-neutral-50 dark:text-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700`}
                >
                  <div className="w-full text-lg md:text-xl">
                    Korporativ Website
                    <span className="w-fit ml-1 text-xs md:text-sm px-2 py-0 rounded-full bg-green-200 text-green-500">
                      -2%
                    </span>
                  </div>
                  <h3 className="text-lg md:text-2xl">$145</h3>
                </div>
              </li>
              <li onClick={() => setOpenTab(8)}>
                <div
                  className={`${
                    openTab === 8 ? 'border-black' : 'border-neutral-400'
                  } inline-flex justify-between items-center p-5 w-full text-black bg-white rounded-lg border-2 cursor-pointer dark:hover:text-neutral-300 dark:border-neutral-700 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-black hover:bg-neutral-50 dark:text-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700`}
                >
                  <div className="w-full text-lg md:text-xl">
                    3D Noyob website
                    <span className="w-fit ml-1 text-xs md:text-sm px-2 py-0 rounded-full bg-green-200 text-green-500">
                      -2%
                    </span>
                  </div>
                  <h3 className="text-lg md:text-2xl">$200</h3>
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-xl shadow-md">
            {openTab === 1 && <Express index={1} />}
            {openTab === 2 && <Vizitka index={2} />}
            {openTab === 3 && <Landing index={3} />}
            {openTab === 4 && <SmallBusiness index={4} />}
            {openTab === 5 && <Catalog index={5} />}
            {openTab === 6 && <Commerce index={6} />}
            {openTab === 7 && <Corporative index={7} />}
            {openTab === 8 && <Unique index={8} />}
            <Express />
          </div>
        </div>

        <AddFeatures />

        <PriceContact />
      </div>
    </motion.div>
  );
};

export default Calculate;
