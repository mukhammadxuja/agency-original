import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Slide = (props) => {
  const { title, description, img, link } = props;
  return (
    <div className="swiper-slide">
      {' '}
      <img src={img} alt="Slide image" />
      <div className="slide-opacity">
        <h4 className="dark:bg-[white] dark:text-[black]">{title}</h4>
        <div className="slide-opacity-box  dark:bg-[white]">
          <img className="star filter dark:!brightness-0" src="/svg/star-white.svg" alt="" />
          <p className="dark:!text-[black]">{description}</p>
          <Link href={link}>
            <a className="p-5 dark:bg-[black] hover:scale-95 duration-300 bg-[white] rounded-full absolute right-[15px] top-0 transform translate-y-[-50%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 stroke-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
