import React, { useState, useEffect } from 'react';

const images = [
  {
    id: '1',
    name: 'React.js',
    image: '/images/tools/react.png',
    tag: 'frontend',
  },
  {
    id: '9242',
    name: 'Javascript',
    image: '/images/tools/js.png',
    tag: 'frontend',
  },
  {
    id: '92552',
    name: 'Next.js',
    image: '/images/tools/next.png',
    tag: 'frontend',
  },
  {
    id: '6',
    name: 'Material ui',
    image: '/images/tools/material-ui.png',
    tag: 'frontend',
  },
  {
    id: '911',
    name: 'Sass',
    image: '/images/tools/sass.png',
    tag: 'frontend',
  },
  {
    id: '3',
    name: 'Tailwind css',
    image: '/images/tools/tailwind.png',
    tag: 'frontend',
  },
  {
    id: '8',
    name: 'Node.js',
    image: '/images/tools/node.png',
    tag: 'backend',
  },
  {
    id: '2',
    name: 'Firebase',
    image: '/images/tools/firebase.png',
    tag: 'backend',
  },
  {
    id: '39',
    name: 'Sanity',
    image: '/images/tools/sanity.png',
    tag: 'backend',
  },
  {
    id: '7',
    name: 'MongoDB',
    image: '/images/tools/mongodb.png',
    tag: 'backend',
  },
  {
    id: '4',
    name: 'Figma',
    image: '/images/tools/figma.png',
    tag: 'ui/ux',
  },
  {
    id: '5',
    name: 'Figma',
    image: '/images/tools/figma.png',
    tag: 'ui/ux',
  },
  {
    id: '923',
    name: 'Figma',
    image: '/images/tools/figma.png',
    tag: 'ui/ux',
  },
  {
    id: '9',
    name: 'Figma',
    image: '/images/tools/figma.png',
    tag: 'ui/ux',
  },
  {
    id: '954',
    name: 'Jest',
    image: '/images/tools/jest.png',
    tag: 'testing',
  },
  {
    id: '98567',
    name: 'Cypress',
    image: '/images/tools/cypress.png',
    tag: 'testing',
  },
];

const Tools = () => {
  const [tag, setTag] = useState('all');
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    tag === 'all'
      ? setFilter(images)
      : setFilter(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <div className="container mx-auto w-full md:max-w-6xl py-10 lg:py-16 xl:py-32">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2">
        <h3 className="pb-10 text-2xl lg:text-4xl xl:text-5xl text-center text-black dark:text-white">
            Tools
          </h3>
        </div>
        <div className="py-8 space-x-4">
          <TagBtn className="" name="all" handleSetTag={setTag} />
          <TagBtn className="" name="frontend" handleSetTag={setTag} />
          <TagBtn className="" name="backend" handleSetTag={setTag} />
          <TagBtn className="" name="testing" handleSetTag={setTag} />
          <TagBtn className="" name="ui/ux" handleSetTag={setTag} />
        </div>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 xl:grid-cols-8 gap-4 justify-items-center w-fit mx-auto">
        {filter.map((tools) => {
          return (
            <div className="items-center justify-center space-y-1 h-20 w-20 md:h-28 md:w-28  p-2 md:p-4 rounded-lg bg-gray-100">
              <img
                className="w-12 h-12 mx-auto"
                src={tools.image}
                alt="image"
              />
              <h4 className="text-main text-center font-medium text-sm">
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
