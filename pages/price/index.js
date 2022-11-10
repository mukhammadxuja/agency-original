import React from 'react';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';

import { PriceLayout } from '../../components';
import Head from 'next/head';

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
    <div>
      <Head>
        <title>.Soft - Price page</title>
      </Head>
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.75,
        }}
        className="nav-bar"
      >
        <PriceLayout openTab={openTab}>
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
        </PriceLayout>
      </motion.div>
    </div>
  );
};

export default Calculate;
