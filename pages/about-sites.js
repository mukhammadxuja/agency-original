import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

import { Breadcrumb, Accordion, CheckIcon } from '../components';
import { aboutWebsiteData } from '../components/data/about-website-data';

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
        <h3 className="text-lg md:text-2xl">
          Saytlar haqida to&lsquo;liq ma&lsquo;lumot
        </h3>
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
        {aboutWebsiteData.map((data) => (
          <div key={data.id}>
            <Accordion
              title={data.name}
              paragraph="Two issues to fix right now"
            >
              <div>
                <div className="space-y-2">
                  <div>
                    <h4 className="text-lg">
                      &quot;{data.features.about}&quot;
                    </h4>
                  </div>
                  <div className="py-3">
                    {data.features.suite.map((suite, index) => (
                      <span
                        key={index + 1212}
                        className="flex items-center space-x-2"
                      >
                        <h5>
                          {index + 1}. {suite}
                        </h5>
                        <CheckIcon />
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-base md:text-lg">
                    Boshlang&lsquot;ich narx:{' '}
                    <span className="text-[#006B98] text-lg md:text-xl">
                      ${data.features.price}
                    </span>
                  </h3>
                  <div className="px-2 rounded-full bg-green-200 text-green-500 w-fit">
                    {data.features.date} kun
                  </div>
                </div>
              </div>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default calculated;
