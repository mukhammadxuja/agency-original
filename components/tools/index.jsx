import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useLanguage } from '../../hooks/useLanguage.js';

import { tools } from '../data/tools.js';
const Tools = () => {
  const [tag, setTag] = useState('');
  const { t } = useLanguage();

  return (
    <div className="container mx-auto w-full md:max-w-6xl xl:max-w-7xl py-10 lg:py-16 xl:py-32">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2">
          <h3 className="md:pb-10 text-2xl lg:text-4xl xl:text-5xl text-center text-black dark:text-white">
            {t('home:tools')}
          </h3>
        </div>

        <div className="my-8 space-x-4 px-4 md:px-0 flex items-center justify-start sm:justify-center flex-nowrap overflow-x-scroll scrollbar-hide">
          <TagBtn name="frontend" handleSetTag={setTag} />
          <TagBtn name="3D" handleSetTag={setTag} />
          <TagBtn name="backend" handleSetTag={setTag} />
          <TagBtn name="mobile" handleSetTag={setTag} />

          <TagBtn name="design" handleSetTag={setTag} />
          <TagBtn name="testing" handleSetTag={setTag} />
        </div>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-8 justify-items-center w-fit mx-auto">
        {tools.map((tools) => {
          console.log(tools.tag);
          return (
            <div
              key={tools.id}
              className={
                tools.tag === tag || tag === ''
                  ? 'items-center justify-center space-y-1 h-20 w-20 md:h-28 md:w-28 p-2 md:p-4 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600'
                  : 'items-center justify-center space-y-1 h-20 w-20 md:h-28 md:w-28 p-2 md:p-4 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 opacity-40'
              }
            >
              <LazyLoadImage
                className="w-8 h-8 md:w-10 ml-4 md:ml-5 md:h-10 mx-auto opacity-60 object-cover"
                src={tools.image}
                effect="blur"
                alt="dotSoft web programming group"
              />
              <h4 className="text-main text-center font-medium text-xs md:text-sm whitespace-nowrap">
                {tools.name}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const TagBtn = ({ name, handleSetTag }) => {
  return (
    <button
      className="text-black dark:text-white font-medium lg:font-semibold text-base lg:text-xl transition-all duration-200 capitalize"
      onClick={() => handleSetTag(name)}
    >
      {name}
    </button>
  );
};

export default Tools;
