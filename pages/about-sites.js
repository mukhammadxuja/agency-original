import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

import { Breadcrumb, Accordion, CheckIcon } from '../components';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'footer'])),
    },
  };
}

const calculated = () => {
  return (
    <div className="container mx-auto">
      <Breadcrumb page="About Websites" link="/about-sites" />
      <div className="flex items-center justify-between my-5">
        <h3 className="text-lg md:text-2xl">Saytlar haqida to&lsquo;liq ma&lsquo;lumot</h3>
        <Link href="/price/calculate">
          <div className="flex items-center space-x-1 cursor-pointer group">
            <p>Narxlarni hisoblash</p>
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
      <div className="my-3 md:my-5">
        <Accordion
          title="Express web site"
          paragraph="Two issues to fix right now"
        >
          <div className="py-3">
            <span className="flex items-center space-x-2">
              <h5>1. Bir sahifadan iborat web sahifa</h5>
              <CheckIcon />
            </span>
            <span className="flex items-center space-x-2">
              <h5>2. Shablon yordamida qurligan</h5>
              <CheckIcon />
            </span>
            <span className="flex items-center space-x-2">
              <h5>3. Mobile formatga moslashgan</h5>
              <CheckIcon />
            </span>
            <span className="flex items-center space-x-2">
              <h5>4. Bepul domain</h5>
              <CheckIcon />
            </span>
          </div>
        </Accordion>
        <Accordion
          title="Express web site"
          paragraph="Two issues to fix right now"
        >
          <div className="py-3">
            <span className="flex items-center space-x-2">
              <h5>1. Bir sahifadan iborat web sahifa</h5>
              <CheckIcon />
            </span>
            <span className="flex items-center space-x-2">
              <h5>2. Shablon yordamida qurligan</h5>
              <CheckIcon />
            </span>
            <span className="flex items-center space-x-2">
              <h5>3. Mobile formatga moslashgan</h5>
              <CheckIcon />
            </span>
            <span className="flex items-center space-x-2">
              <h5>4. Bepul domain</h5>
              <CheckIcon />
            </span>
          </div>
        </Accordion>
        <Accordion
          title="Express web site"
          paragraph="Two issues to fix right now"
        >
          <div className="py-3">
            <span className="flex items-center space-x-2">
              <h5>1. Bir sahifadan iborat web sahifa</h5>
              <CheckIcon />
            </span>
            <span className="flex items-center space-x-2">
              <h5>2. Shablon yordamida qurligan</h5>
              <CheckIcon />
            </span>
            <span className="flex items-center space-x-2">
              <h5>3. Mobile formatga moslashgan</h5>
              <CheckIcon />
            </span>
            <span className="flex items-center space-x-2">
              <h5>4. Bepul domain</h5>
              <CheckIcon />
            </span>
          </div>
        </Accordion>
        <Accordion
          title="Express web site"
          paragraph="Two issues to fix right now"
        >
          <div className="py-3">
            <span className="flex items-center space-x-2">
              <h5>1. Bir sahifadan iborat web sahifa</h5>
              <CheckIcon />
            </span>
            <span className="flex items-center space-x-2">
              <h5>2. Shablon yordamida qurligan</h5>
              <CheckIcon />
            </span>
            <span className="flex items-center space-x-2">
              <h5>3. Mobile formatga moslashgan</h5>
              <CheckIcon />
            </span>
            <span className="flex items-center space-x-2">
              <h5>4. Bepul domain</h5>
              <CheckIcon />
            </span>
          </div>
        </Accordion>
        <Accordion
          title="Express web site"
          paragraph="Two issues to fix right now"
        >
          <div className="py-3">
            <span className="flex items-center space-x-2">
              <h5>1. Bir sahifadan iborat web sahifa</h5>
              <CheckIcon />
            </span>
            <span className="flex items-center space-x-2">
              <h5>2. Shablon yordamida qurligan</h5>
              <CheckIcon />
            </span>
            <span className="flex items-center space-x-2">
              <h5>3. Mobile formatga moslashgan</h5>
              <CheckIcon />
            </span>
            <span className="flex items-center space-x-2">
              <h5>4. Bepul domain</h5>
              <CheckIcon />
            </span>
          </div>
        </Accordion>
        <Accordion
          title="Express web site"
          paragraph="Two issues to fix right now"
        >
          <div className="py-3">
            <span className="flex items-center space-x-2">
              <h5>1. Bir sahifadan iborat web sahifa</h5>
              <CheckIcon />
            </span>
            <span className="flex items-center space-x-2">
              <h5>2. Shablon yordamida qurligan</h5>
              <CheckIcon />
            </span>
            <span className="flex items-center space-x-2">
              <h5>3. Mobile formatga moslashgan</h5>
              <CheckIcon />
            </span>
            <span className="flex items-center space-x-2">
              <h5>4. Bepul domain</h5>
              <CheckIcon />
            </span>
          </div>
        </Accordion>
      </div>
    </div>
  );
};

export default calculated;
