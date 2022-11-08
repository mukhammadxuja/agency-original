import React from 'react';

import { CheckIcon, ErrorIcon } from '../../../';
import { useScroll } from '../../../../hooks/useScroll.js';
import { websitesData } from '../../../data/website';

const PriceNavbar = (props) => {
  const { website, index } = props;
  const { scroll } = useScroll();
  return (
    <div
      className={`${
        scroll ? 'top-0 -mt-1' : 'top-20 -mt-1 md:-mt-0'
      } fixed left-1/2 transform -translate-x-1/2 z-50 backdrop-blur bg-white supports-backdrop-blur:bg-white/95 dark:bg-neutral-900/75 transition-all duration-500 overflow-x-scroll w-full scrollbar-hide`}
    >
      {websitesData.map((website) => {
        return (
          <div key={website.id}>
            {website.id === index && (
              <div className="container mx-auto flex flex-nowrap items-center justify-between py-4 md:py-3">
                <div className="pr-10 lg:pr-20 whitespace-nowrap">
                  <p className="text-xs md:text-sm text-gray-500 whitespace-nowrap">
                    Sayt Turi
                  </p>
                  <div className="flex items-center space-x-1">
                    <h3 className="text-base md:text-xl">{website.name}</h3>
                    <CheckIcon />
                  </div>
                </div>
                <div className="pr-10 lg:pr-20 whitespace-nowrap">
                  <p className="text-xs md:text-sm text-gray-500">
                    Sahifalar Soni
                  </p>
                  <div className="flex items-center space-x-1">
                    <h3 className="text-base md:text-xl">
                      {website.features.pages} Tagacha
                    </h3>
                    <CheckIcon />
                  </div>
                </div>
                <div className="pr-10 lg:pr-20 whitespace-nowrap">
                  <p className="text-xs md:text-sm text-gray-500">
                    Sayt Dizayni
                  </p>
                  <div className="flex items-center space-x-1">
                    <h3 className="text-base md:text-xl">{website.features.design}</h3>
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
                  </div>
                </div>
                <div className="pr-10 lg:pr-20 whitespace-nowrap">
                  <p className="text-xs md:text-sm text-gray-500">
                    Matn yozish
                  </p>
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
                  <p className="text-xs md:text-sm text-gray-500">
                    Umumiy Chegirma
                  </p>
                  <h3 className="text-base md:text-xl">
                    0<span>$</span>
                    <span className="bg-green-100 px-2 py-0.5 rounded-full text-xs md:text-sm text-green-500">
                      -{website.discount ? '0' : website.discount}%
                    </span>
                  </h3>
                </div>
                <div className="pr-10 lg:pr-20 whitespace-nowrap">
                  <p className="text-xs md:text-sm text-gray-500">
                    Umumiy summa
                  </p>
                  <h3 className="text-base md:text-xl">
                    {website.price}
                    <span>$</span> 😀
                  </h3>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PriceNavbar;
