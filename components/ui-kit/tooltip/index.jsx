import React from 'react';

const Tooltip = (props) => {
    const { desc } = props;
  return (
    <div className="relative flex flex-col items-center group">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
        />
      </svg>

      <div className="absolute bottom-1 hidden flex-col items-center mb-6 group-hover:flex">
        <div className="relative z-10 w-56 p-3 dark:text-white bg-white dark:bg-black shadow-lg rounded-lg">
          <p className="text-xs md:text-sm text-center">{desc}</p>
        </div>
        <div className="w-3 h-3 -mt-1 rotate-45 bg-gray-100 dark:bg-black"></div>
      </div>
    </div>
  );
};

export default Tooltip;
