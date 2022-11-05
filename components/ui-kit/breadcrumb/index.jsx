import React from 'react';
import Link from 'next/link';

const Breadcrumb = (props) => {
  const { page, page2, link, active = false } = props;
  return (
    <div className="flex items-center space-x-1 md:space-x-2 pt-2 mt-[4.5rem] md:mt-20">
      <Link href="/">
        <a>Home</a>
      </Link>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 mt-1 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </span>
      <Link href={link}>
        <a
          className={
            active ? 'text- cursor-pointer' : 'text-[#006B98] cursor-text'
          }
        >
          {page}
        </a>
      </Link>
      {page2 && (
        <span className="flex items-center space-x-1 md:space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 mt-1 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
          <h3 className={active ? 'text-[#006B98]' : 'text-black'}>{page2}</h3>
        </span>
      )}
    </div>
  );
};

export default Breadcrumb;
