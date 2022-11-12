import Link from 'next/link';
import React from 'react';

import { useScroll } from '../../../hooks/useScroll';
import {
  AddFeatures,
  Breadcrumb,
  PriceContact,
  Express,
  Landing,
  SmallBusiness,
  Vizitka,
  Catalog,
  Commerce,
  Corporative,
  Unique,
} from '../../';

const PriceLayout = (props) => {
  const { children, openTab } = props;
  const { scroll } = useScroll();
  return (
    <div className="container mx-auto">
      <div
        className={`${
          scroll ? 'mt-24 md:mt-28' : 'mt-36 md:mt-36'
        } transition duration-500`}
      >
        <Breadcrumb page="Price" link="/price" />
      </div>
      <div className="flex items-center justify-between my-5">
        <h3 className="text-lg md:text-2xl">Narxlarni Hisoblash</h3>
        <Link href="/blog/websites">
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
        {children}
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
  );
};

export default PriceLayout;
