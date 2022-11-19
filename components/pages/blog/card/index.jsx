import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../../../../hooks/useLanguage';

const BlogCard = (props) => {
  const {
    cardImg,
    creatorImg,
    cardImageAlt,
    creatorName,
    blogTitle,
    link,
    creatorImageAlt,
  } = props;

  const { t } = useLanguage();

  return (
    <div className="w-[100%] md:w-[23rem] h-[25rem] relative mx-auto md:ml-0">
      <img
        className="w-full h-full rounded-xl"
        src={cardImg}
        alt={cardImageAlt}
      />
      <span className="absolute top-2 right-2 w-12 h-12 flex items-center justify-center text-lg p-2 rounded-full bg-orange-100 dark:bg-gray-500">
        🔥
      </span>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[60%] h-12 flex items-center space-x-3 text-lg p-1 rounded-full bg-white dark:bg-gray-500">
        <Image
          src={creatorImg}
          className="rounded-full"
          width={33}
          height={33}
          objectFit="cover"
          loading="lazy"
          alt={creatorImageAlt}
        />
        <p className="text-xs md:text-sm text-gray-400 dark:text-white truncate">
          {creatorName}
        </p>
      </div>
      <div className="space-y-2 mt-2">
        <h2 className="text-lg md:text-xl font-bold">{blogTitle}</h2>
        <Link href={link}>
          <button className="px-3 py-2 border w-full border-gray-300 hover:border-black dark:border-gray-500 rounded-full transition duration-500">
            {t('blog:blog_go_to_page')}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
