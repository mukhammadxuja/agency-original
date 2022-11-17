import React from 'react';
import Image from 'next/image';

const People = (props) => {
  const { img, name, job, link, paragraph, alt } = props;

  return (
    <>
      <div className="flex">
        <div>
          <Image
            src={img}
            className="rounded-full"
            width={50}
            height={50}
            objectFit="cover"
            loading="lazy"
            alt={alt}
          />
        </div>
        <div className="pl-2">
          <a target="blank" href={link}>
            <h3 className="font-bold text-lg">{name}</h3>
          </a>
          <p className="text-[#3F3F3FFF] dark:text-gray-400">{job}</p>
        </div>
      </div>

      <p className="text-gray-600 dark:text-white pb-5">{paragraph}</p>
    </>
  );
};

export default People;
