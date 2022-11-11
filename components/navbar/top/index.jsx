import React from 'react';
import { useTop } from '../../../hooks/useTop';

const Totop = () => {
  const { show } = useTop();

  return (
    <>
      <div
        className={`${
          show ? 'hidden' : ''
        } fixed bottom-9 right-8 z-50 sm:right-12 text-white group`}
      >
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-14 h-14 stoke-2 p-3 rounded-xl bg-black dark:bg-white dark:text-black group-hover:bg-opacity-70 group-hover:text-gray-200 duration-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            />
          </svg>
        </a>
      </div>
    </>
  );
};

export default Totop;
