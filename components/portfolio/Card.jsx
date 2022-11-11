import React from 'react';

const PortfolioCard = props => {
  let { imgSrg, title, description, link } = props

  // Swiper card

  return (

    <div className="cardSwiper">
      <img
        src={imgSrg}
        alt="Slide image"
      />
      <div className="slide-opacity">
        <h4 className=" ">{title}</h4>
        <div className="slide-opacity-box">
          <img
            className="star"
            src="/svg/star-white.svg"
            alt=""
          />
          <p className="">{description}</p>
          <a href={link} target="blank" className="p-5  hover:scale-95 duration-500 bg-[white] rounded-full absolute right-[15px] top-0 transform translate-y-[-50%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 stroke-2 dark:text-[black]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;

