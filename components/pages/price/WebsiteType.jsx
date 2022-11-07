import React from 'react';

const WebsiteType = (props) => {
  const { openTab, setOpenTab, index, title, price, discount } = props;
  return (
    <ul>
      <li onClick={() => setOpenTab(index)}>
        <div
          className={`${
            openTab === index ? 'border-black' : 'border-neutral-400'
          } inline-flex justify-between items-center p-5 w-full text-black bg-white rounded-lg border-2 border-neutral-400 cursor-pointer dark:hover:text-neutral-300 dark:border-neutral-700 hover:text-black hover:bg-neutral-50 dark:text-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700`}
        >
          <div className="w-full text-lg md:text-xl">
            {title}
            {discount && (
              <span className="w-fit ml-1 text-xs md:text-sm px-2 py-0 rounded-full bg-green-200 text-green-500">
                -{discount}%
              </span>
            )}
          </div>
          <h3 className="text-lg md:text-2xl">${price}</h3>
        </div>
      </li>
    </ul>
  );
};

export default WebsiteType;
