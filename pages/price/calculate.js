import React from 'react';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import {
  AddFeatures,
  Breadcrumb,
  CheckIcon,
  ErrorIcon,
  PriceContact,
  // Features
  // Express,
  // Landing,
  // SmallBusiness,
  // Vizitka,
  // Catalog,
  // Commerce,
  // Corporative,
  // Unique,
} from '../../components';
import Data from '../../data.json';
import { useState } from 'react';
// import { websitesData } from '../../components/data/';
// import { CheckIcon, ErrorIcon } from '../../../';
// import { websitesData } from '../../../data/website';
import { useScroll } from '../../hooks/useScroll';
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'footer'])),
    },
  };
}

const Calculate = () => {
  const [activeDialog, setActiveDialog] = React.useState(false);

  const [webId, setWebId] = useState(0);

  const dialog = () => {
    setActiveDialog(true);
  };

  const CloseDialog = () => {
    setActiveDialog(false);
  };

  const { scroll } = useScroll();

  return (
    <div className="container mx-auto">
      <div
        className={`${
          scroll ? 'top-0 -mt-1' : 'top-20 -mt-1 md:-mt-0'
        } fixed left-1/2 transform -translate-x-1/2 z-50 backdrop-blur bg-white supports-backdrop-blur:bg-white/95 dark:bg-neutral-900/75 transition-all duration-500 overflow-x-scroll w-full scrollbar-hide`}
      >
        <div>
          <div className="container mx-auto flex flex-nowrap items-center justify-between py-4 md:py-3">
            <div className="pr-10 lg:pr-20 whitespace-nowrap">
              <p className="text-xs md:text-sm text-gray-500 whitespace-nowrap">
                Sayt Turi
              </p>
              <div className="flex items-center space-x-1">
                <h3 className="text-base md:text-xl">
                  {Data[webId]['Sayt turi']}
                </h3>
                <CheckIcon />
              </div>
            </div>
            <div className="pr-10 lg:pr-20 whitespace-nowrap">
              <p className="text-xs md:text-sm text-gray-500">Muddati</p>
              <div className="flex items-center space-x-1">
                <h3 className="text-base md:text-xl">{Data[webId].complete}</h3>
                <CheckIcon />
              </div>
            </div>

            <div className="pr-10 lg:pr-20 whitespace-nowrap">
              <p className="text-xs md:text-sm text-gray-500">
                Umumiy chegirma
              </p>
              <div className="flex items-center space-x-1">
                <h3 className="text-base md:text-xl">
                  {!Data[webId].discount ? '😔' : Data[webId].discount + '%'}
                </h3>
                {Data[webId].discount ? <CheckIcon /> : <ErrorIcon />}
              </div>
            </div>

            <div className="pr-10 lg:pr-20 whitespace-nowrap">
              <p className="text-xs md:text-sm text-gray-500">Umumiy summa</p>
              <h3 className="text-base md:text-xl">
                <span>${Data[webId].price}</span> 😀
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          scroll ? 'mt-24 md:mt-28' : 'mt-36 md:mt-36'
        } transition duration-500`}
      >
        <Breadcrumb page="Price" link="/price" />
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
        <div >
          <ul className="space-y-2">
            {Data.map((item, index) => {
              return (
                <li onClick={() => setWebId(index)} key={item.id}>
                  <div
                    className={` inline-flex justify-between items-center p-5 w-full text-black bg-white rounded-lg border-2  cursor-pointer dark:hover:text-neutral-300 dark:border-neutral-700 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-black hover:bg-neutral-50 dark:text-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700`}
                  >
                    <div className="w-full text-lg md:text-xl">
                      {item['Sayt turi']}
                      <span
                        className={
                          item.discount
                            ? 'w-fit ml-1 text-xs md:text-sm px-2 py-1 rounded-full bg-green-200 text-green-500'
                            : 'w-fit ml-1 text-xs md:text-sm p-2 rounded-full bg-red-100 text-red-500'
                        }
                      >
                        {!item.discount ? '😔' : item.discount + '%'}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-2xl">${item.price}</h3>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="rounded-xl shadow-md  flex flex-col justify-between ">
          <div className="p-8 space-y-2">
            {Data[webId].xususiyatlar.map((item) => {
              return (
                <>
                  <div className=" items-center  border-b">
                    <h5 className="text-lg md:text-base  lg:text-lg transition-all">
                      
                      - {item} 
                    </h5>
                  </div>
                </>
              );
            })}
          </div>
            <div className="flex justify-between items-center p-5 ">
              <h5 className="text-lg md:text-base lg:text-lg">
                Tayyorlash muddati: {Data[webId].complete}
              </h5>

              <h5 className="text-lg md:text-base lg:text-lg">
                Umumiy Summa: ${Data[webId].price}
              </h5>
            </div>

        </div>
      </div>

      <PriceContact />
    </div>
  );
};

export default Calculate;