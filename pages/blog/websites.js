import React, { useState, useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import Data from '../../data.json';
import { Breadcrumb } from '../../components';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'footer'])),
    },
  };
}

const Websites = () => {
  const [scroll, setScroll] = useState(false);

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

  const link =
    'text-xs text-right cursor-pointer hover:opacity-80 md:hover:mr-1 md:duration-500';
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
        <Breadcrumb page="Blog" link="/blog" page2="Websaytlar Haqida" active />
        <div>
          <ul
            className={`${
              scroll ? 'top-3' : ''
            } hidden md:block fixed z-50 top-24 right-2 md:right-4 transition-all pb-5 duration-[400ms]`}
          >
            {Data.map((item) => (
              <>
                <li className={link}>
                  <a href={'#' + item.id}> {item['Sayt turi']} </a> -
                </li>
              </>
            ))}
          </ul>
        </div>
        <div className="max-w-4xl">
          <div className="my-5">
            <a className="text-sm">Nov 12 - 7 min read</a>
            <h3 className="text-3xl md:text-3xl lg:text-5xl md:mt-5 md:mb-16">
              Websayt Turlari
            </h3>
          </div>
          {Data.map((item, index) => (
            <>
              <div id={item.id}>
                <div className="space-y-2 md:space-y-4 mb-10">
                  <h1 className="text-xl md:text-2xl lg:text-3xl">
                    {index + 1}. {item['Sayt turi']} - website.
                  </h1>
                  <a className="text-sm">{item.about}</a>
                  <div>
                    {item.real_example.length === 0 ? (
                      ''
                    ) : (
                      <>
                        <h3 className="text-lg md:text-2xl">
                          Hayotdagi{' '}
                          {item['Sayt turi'] === 'eCommerce'
                            ? 'elektron tijorat'
                            : item['Sayt turi']}{' '}
                          misollar:
                        </h3>
                      </>
                    )}
                    <ul className="ml-5 mt-5">
                      {item.real_example.map((item1, index) => {
                        return (
                          <>
                            <li>
                              {index + 1}.
                              <a
                                href={`https://${item1}/`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#006B98] ml-2"
                              >
                                {item1} -
                              </a>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </div>

                  <img
                    className="rounded-xl"
                    src={item.picture}
                    alt="dotSoft web programming group"
                  />
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Websites;
