import React, { useState, useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';

import { Breadcrumb, LoadingCard, BlogCard } from '../../components';
import Head from 'next/head';
import { useLanguage } from '../../hooks/useLanguage';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'blog'])),
    },
  };
}

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 1000);
    setInterval(() => {
      setData(true);
    }, 1000);
  }, []);

  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.75,
      }}
      className="nav-bar"
    >
      <Head>
      <title>Dotsoftuz Blog page</title>
        <meta name="title" content="Dotsoftuz - Blog page" />
        <meta
          name="description"
          content="Dotsoftuz web programming company - through this page you can find interesting and useful articles from each other "
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dotsoft.uz/" />
        <meta property="og:title" content="Dotsoftuz - Blog page" />
        <meta
          property="og:description"
          content="Dotsoftuz web programming company - through this page you can find interesting and useful articles from each other "
        />
        <meta
          property="og:image"
          content="https://www.dotsoft.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdotsoft-dark.de3a0cde.png&w=1920&q=75"
        />
      </Head>
      <div className="container mx-auto">
        <Breadcrumb page={t('blog:breadcrumb_blog')} link="/blog" />
        <div>
          <div className="flex items-center justify-between my-5">
            <h3 className="text-lg md:text-2xl font-bold">
              {t('blog:blog_title')}
            </h3>
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
                placeholder={t('blog:blog_search_placeholder')}
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
              <li className="text-white dark:text-black cursor-pointer font-semibold px-4 py-1 rounded-full bg-black dark:bg-white">
                {t('blog:blog_nav_all')}
              </li>
              <li className="hover:text-opacity-80 cursor-pointer font-semibold">
                {t('blog:blog_nav_itNews')}
              </li>
              <li className="hover:text-opacity-80 cursor-pointer font-semibold">
                {t('blog:blog_nav_technology')}
              </li>
              <li className="hover:text-opacity-80 cursor-pointer font-semibold">
                {t('blog:blog_nav_tutorial')}
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-4 gap-5 h-auto md:h-screen my-10">
            {data && (
              <BlogCard
                cardImg="https://images.pexels.com/photos/6757564/pexels-photo-6757564.jpeg?auto=compress&cs=tinysrgb&w=600"
                cardImageAlt="dotsoftuz: About websites"
                creatorImg="/images/team/Anvarov.jpg"
                creatorName="Anvarov Muxammad"
                creatorImageAlt="dotSoft web programming group: Anvarov Muhammad"
                blogTitle={t('blog:blog_websites_title')}
                link="/blog/websites"
              />
            )}
            {loading && (
              <div>
                <LoadingCard />
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Blog;
