import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import white from '../../public/svg/star-white.svg';

const PortfolioCard = (props) => {
  let { imgSrg, title, description, link } = props;
  return (
    <div className="cardSwiper">
      <Image src={imgSrg} alt="dotSoft web programming group Slide image" />
      <div className="slide-opacity">
        <h4 className=" ">{title}</h4>
        <div className="slide-opacity-box">
          <div className="w-8 h-8">
            <Image
              className="star"
              src={white}
              alt="dotSoft web programming group"
            />
          </div>
          <p>{description}</p>
          <Link href={link}>
            <a
              target="_blank"
              className="p-5 hover:scale-95 duration-500 bg-[white] rounded-full absolute right-[15px] top-0 transform translate-y-[-50%]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="!w-4 !h-4 stroke-2 dark:text-[black]"
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

export default PortfolioCard;
