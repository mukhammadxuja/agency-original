import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';

import { Breadcrumb } from '../../components';
import Link from 'next/link';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'footer'])),
    },
  };
}

const Blog = () => {
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
        <Breadcrumb page="Blog" link="/blog" />
        <div>
          <div className="flex items-center justify-between my-5">
            <h3 className="text-lg md:text-2xl">dotSoft team Blog</h3>
            <a target="_black" href="https://twitter.com/DotSoftUz">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                className="hover:opacity-80 cursor-pointer"
              >
                <path
                  d="M13.6368 3.0213C13.6461 3.15121 13.6461 3.28115 13.6461 3.41106C13.6461 7.37354 10.6302 11.9392 5.11794 11.9392C3.41972 11.9392 1.84216 11.4474 0.515137 10.5937C0.756422 10.6215 0.988394 10.6308 1.23896 10.6308C2.6402 10.6308 3.93012 10.1575 4.96018 9.35018C3.64244 9.32233 2.53814 8.45931 2.15766 7.27148C2.34327 7.2993 2.52885 7.31787 2.72375 7.31787C2.99286 7.31787 3.26199 7.28073 3.51253 7.2158C2.13912 6.93739 1.10902 5.73102 1.10902 4.27408V4.23698C1.50804 4.45969 1.97207 4.59889 2.46387 4.61743C1.65652 4.07919 1.12759 3.16049 1.12759 2.12114C1.12759 1.56436 1.27604 1.05397 1.53589 0.608532C3.01139 2.42738 5.22929 3.61518 7.71626 3.74512C7.66987 3.5224 7.64202 3.29043 7.64202 3.05843C7.64202 1.4066 8.97833 0.0610352 10.6394 0.0610352C11.5024 0.0610352 12.2819 0.422948 12.8295 1.00758C13.5069 0.877668 14.1565 0.627099 14.7318 0.283753C14.5091 0.979758 14.0358 1.56439 13.4141 1.93556C14.0173 1.87063 14.6019 1.70356 15.1401 1.47158C14.7319 2.06547 14.2215 2.5944 13.6368 3.0213Z"
                  fill="#001F00"
                ></path>
              </svg>
            </a>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-3 mb-5">
            <div className="relative w-full md:w-fit">
              <input
                name="first_name"
                type="text"
                id="first_name"
                className="w-full md:w-72 lg:w-96 bg-neutral-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-neutral-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search blog!"
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-500 absolute top-2 right-3 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <ul className="flex items-center space-x-2 md:space-x-4 mx-auto md:mr-0">
              <li className="hover:text-opacity-80 cursor-pointer underline">
                All
              </li>
              <li className="hover:text-opacity-80 cursor-pointer">IT News</li>
              <li className="hover:text-opacity-80 cursor-pointer">
                Technology
              </li>
              <li className="hover:text-opacity-80 cursor-pointer">Tutorial</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 h-screen my-10">
            <div className="w-[100%] md:w-[23rem] h-[25rem] relative mx-auto md:ml-0">
              <img
                className="w-full h-full rounded-xl"
                src="https://images.pexels.com/photos/6757564/pexels-photo-6757564.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <span className="absolute top-2 right-2 w-12 h-12 flex items-center justify-center text-lg p-2 rounded-full bg-orange-100">
                🔥
              </span>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[60%] h-12 flex items-center space-x-3 text-lg p-2 rounded-full bg-white">
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src="https://images.pexels.com/photos/1288182/pexels-photo-1288182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <p className="text-xs md:text-sm text-gray-400">
                  Josef Alfa Kroner
                </p>
              </div>
              <div className="space-y-2 mt-2">
                <h2 className="text-lg md:text-xl">
                  Websitelar haqida to&lsquo;liq ma&lsquo;limot!
                </h2>
                <Link href="/blog/websites">
                  <button className="px-3 py-2 border w-full border-gray-300 hover:border-black rounded-full transition duration-300">
                    Sahifaga o&lsquo;tish
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Blog;
