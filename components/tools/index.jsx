import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const images = [
  {
    id: '1',
    name: 'React.js',
    image: '/images/tools/react.svg',
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
    name: 'Ant Design',
    image: '/images/tools/antd.svg',
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
    id: '4134',
    name: 'Three.js',
    image: '/images/tools/three-js.svg',
    tag: '3D',
  },
  {
    id: '5234',
    name: 'Greensock',
    image: '/images/tools/gsap.svg',
    tag: '3D',
  },
  {
    id: '923423',
    name: 'Spline',
    image: '/images/tools/spline.png',
    tag: '3D',
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
    id: '934',
    name: 'Supabase',
    image: '/images/tools/Supabase.svg',
    tag: 'backend',
  },
  {
    id: '0123',
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
    id: '39',
    name: 'R Native',
    image: '/images/tools/react-native.svg',
    tag: 'mobile',
  },
  {
    id: '54',
    name: 'Solito.js',
    image: 'https://solito.dev/img/solito.svg',
    tag: 'mobile',
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
  const [tag, setTag] = useState('');
  // const [filter, setFilter] = useState([]);





  // useEffect(() => {
  //   tag === 'all'
  //     ? setFilter(images)
  //     : setFilter(images.filter((image) => image.tag === tag));
  // }, [tag]);
   
  return (
    <div className="container mx-auto w-full md:max-w-6xl xl:max-w-7xl py-10 lg:py-16 xl:py-32">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2">
          <h3 className="pb-10 text-2xl lg:text-4xl xl:text-5xl text-center text-black dark:text-white">
            Tools
          </h3>
        </div>
        <div className="py-8 space-x-4">
          {/* <TagBtn name="all" handleSetTag={setTag} /> */}
          <TagBtn name="frontend" handleSetTag={setTag} />
          <TagBtn name="3D" handleSetTag={setTag} />
          <TagBtn name="backend" handleSetTag={setTag} />
          <TagBtn name="mobile" handleSetTag={setTag} />
          <TagBtn name="testing" handleSetTag={setTag} />
          <TagBtn name="ui/ux" handleSetTag={setTag} />
        </div>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 xl:grid-cols-8 gap-4 justify-items-center w-fit mx-auto">
        {images.map((tools) => {
          console.log(tools.tag);
          return (
            <div
              key={tools.id}
              className={tools.tag === tag || tag === "" ? "items-center justify-center space-y-1 h-24 w-24 md:h-28 md:w-28 p-2 md:p-4 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600" :  "items-center justify-center space-y-1 h-24 w-24 md:h-28 md:w-28 p-2 md:p-4 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 opacity-40"}
            >
              <LazyLoadImage
                className="w-10 h-10 ml-5 mx-auto opacity-60"
                src={tools.image}
                effect="blur"
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
