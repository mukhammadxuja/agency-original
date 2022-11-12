import React, { useState, useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';

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
            <li className={link}>eCommerce -</li>
            <li className={link}>Business -</li>
            <li className={link}>Blog -</li>
            <li className={link}>Portfolio -</li>
            <li className={link}>Event -</li>
            <li className={link}>Personal -</li>
            <li className={link}>Membership -</li>
            <li className={link}>Nonprofit -</li>
            <li className={link}>Informational -</li>
            <li className={link}>Online forum -</li>
          </ul>
        </div>
        <div className="max-w-4xl">
          <div className="my-5">
            <a className="text-sm">Jun 13 - 7 min read</a>
            <h3 className="text-3xl md:text-3xl lg:text-5xl md:mt-5 md:mb-16">
              Websayt Turlari
            </h3>
          </div>
          <div>
            <div className="space-y-2 md:space-y-4 mb-10">
              <h1 className="text-xl md:text-2xl lg:text-3xl">
                1. eCommerce - website.
              </h1>
              <a className="text-sm">
                Veb -sayt ko`plab veb-sahifalar to`plamidir va veb-sahifalar
                HTML (HyperText Markup Language) yordamida yozilgan raqamli
                fayllardir. Sizning veb-saytingiz dunyodagi har bir inson uchun
                mavjud bo`lishi uchun u kun bo`yi Internetga ulangan kompyuterda
                saqlanishi yoki joylashtirilishi kerak. Bunday kompyuterlar
                veb-server deb nomlanadi.
              </a>
              <div>
                <h3 className="text-lg md:text-2xl">
                  Haqiqiy hayotdagi elektron tijorat misollari:
                </h3>
                <ul className="ml-5 mt-5">
                  <li>
                    1.
                    <a
                      href="https://www.mediapark.uz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#006B98] ml-2"
                    >
                      Mediapark - online do`kon
                    </a>
                  </li>
                  <li>
                    2.
                    <a
                      href="https://olcha.uz/ru"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#006B98] ml-2"
                    >
                      Olcha.uz - online do`kon
                    </a>
                  </li>
                </ul>
              </div>
              <img
                className="rounded-xl"
                src="https://static.wixstatic.com/media/2f9f4e_5b47bbd5deba42c2bbd51d0e30f06806~mv2.jpg/v1/fill/w_724,h_1028,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2f9f4e_5b47bbd5deba42c2bbd51d0e30f06806~mv2.jpg"
                alt="dotSoft web programming group"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Websites;
