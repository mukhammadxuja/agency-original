import React from 'react';
import Link from 'next/link';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Portfolio = () => {
  return (
    <section className="container mx-auto py-10 md:py-14 lg:py-16 xl:py-20">
      <div className="flex flex-wrap justify-between items-center">
        <div>
          <h3 className="font-bold md:text-xl">Works</h3>
          <h1 className="md:text-[4rem] text-[2rem] font-bold leading-none">
            DotSoft -{' '}
            <span className="text-[#006B98]">
              bajargan <br /> loyihalar.
            </span>{' '}
            <br className="md:block hidden" />
          </h1>
        </div>
      </div>
      <>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1279: {
              slidesPerView: 4,
            },
          }}
          resistanceRatio={0}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: false,
          }}
          modules={[Autoplay]}
          className="mySwiper !pt-[3rem]"
        >

          <SwiperSlide className="swiper-slide">
            <img
              src="/images/propjects/indebt.jpg"
              alt="Slide image"
            />
            <div className="slide-opacity">
              <h4 className=" ">Development</h4>
              <div className="slide-opacity-box">
                <img
                  className="star"
                  src="/svg/star-white.svg"
                  alt=""
                />
                <p className="">Jizzax City</p>

                  <a href='https://jizzaxcity-uz.vercel.app/' target="blank"  className="p-5  hover:scale-95 duration-500 bg-[white] rounded-full absolute right-[15px] top-0 transform translate-y-[-50%]">
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
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            {' '}
            <img
              src="/images/propjects/imbastudio.jpg"
              alt="Slide image"
            />
            <div className="slide-opacity">
              <h4 className=" ">Development</h4>
              <div className="slide-opacity-box">
                <img
                  className="star"
                  src="/svg/star-white.svg"
                  alt=""
                />
                <p className="">Video Montage</p>

                  <a href='https://imbastudio.uz' target="blank"  className="p-5  hover:scale-95 duration-500 bg-[white] rounded-full absolute right-[15px] top-0 transform translate-y-[-50%]">
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
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            {' '}
            <img
              src="/images/propjects/fayzbaraka.jpg"
              alt="Slide image"
            />
            <div className="slide-opacity">
              <h4 className=" ">Development</h4>
              <div className="slide-opacity-box">
                <img
                  className="star"
                  src="/svg/star-white.svg"
                  alt=""
                />
                <p className="">Fayz Baraka</p>

                  <a href='https://fayzbaraka.uz' target="blank"  className="p-5  hover:scale-95 duration-500 bg-[white] rounded-full absolute right-[15px] top-0 transform translate-y-[-50%]">
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
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            {' '}
            <img
              src="/images/propjects/mamirovgroup.jpg"
              alt="Slide image"
            />
            <div className="slide-opacity">
              <h4 className=" ">Development</h4>
              <div className="slide-opacity-box">
                <img
                  className="star"
                  src="/svg/star-white.svg"
                  alt=""
                />
                <p className="">Mamirov Group</p>

                  <a href='https://mamirovgroup.uz' target="blank"  className="p-5  hover:scale-95 duration-500 bg-[white] rounded-full absolute right-[15px] top-0 transform translate-y-[-50%]">
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
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            {' '}
            <img
              src="/images/propjects/inreport.jpg"
              alt="Slide image"
            />
            <div className="slide-opacity">
              <h4 className=" ">Development</h4>
              <div className="slide-opacity-box">
                <img
                  className="star"
                  src="/svg/star-white.svg"
                  alt=""
                />
                <p className="">InReport</p>

                  <a href='https://inreport.uz/' target="blank"  className="p-5  hover:scale-95 duration-500 bg-[white] rounded-full absolute right-[15px] top-0 transform translate-y-[-50%]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 stroke-2 dark:text-[black]"
                    >
                      <path
                        strokebordLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </a>

              </div>
            </div>
          </SwiperSlide>
                 
          <SwiperSlide className="swiper-slide">
            {' '}
            <img
              src="/images/propjects/lazydev.jpg"
              alt="Slide image"
            />
            <div className="slide-opacity">
              <h4 className=" ">Development</h4>
              <div className="slide-opacity-box">
                <img
                  className="star"
                  src="/svg/star-white.svg"
                  alt=""
                />
                <p className="">Lazydev</p>

                  <a href='https://lazydev.vercel.app/' target="blank"  className="p-5  hover:scale-95 duration-500 bg-[white] rounded-full absolute right-[15px] top-0 transform translate-y-[-50%]">
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
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            {' '}
            <img
              src="/images/propjects/suvtaminoti.jpg"
              alt="Slide image"
            />
            <div className="slide-opacity">
              <h4 className=" ">Development</h4>
              <div className="slide-opacity-box">
                <img
                  className="star"
                  src="/svg/star-white.svg"
                  alt=""
                />
                <p className="">JS Taminot</p>

                  <a href='https://jizzaxsuvtaminoti.uz' target="blank"  className="p-5  hover:scale-95 duration-500 bg-[white] rounded-full absolute right-[15px] top-0 transform translate-y-[-50%]">
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
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            {' '}
            <img
              src="/images/propjects/idealcleaning.jpg"
              alt="Slide image"
            />
            <div className="slide-opacity">
              <h4 className=" ">Development</h4>
              <div className="slide-opacity-box">
                <img
                  className="star"
                  src="/svg/star-white.svg"
                  alt=""
                />
                <p className="">Ideal Cleaning</p>

                  <a href='https://ideal-cleaning.vercel.app/' target="blank"  className="p-5  hover:scale-95 duration-500 bg-[white] rounded-full absolute right-[15px] top-0 transform translate-y-[-50%]">
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
          </SwiperSlide>
          
          <SwiperSlide className="swiper-slide">
            {' '}
            <img
              src="/images/propjects/indebt-1.jpg"
              alt="Slide image"
            />
            <div className="slide-opacity">
              <h4 className=" ">Development</h4>
              <div className="slide-opacity-box">
                <img
                  className="star"
                  src="/svg/star-white.svg"
                  alt=""
                />
                <p className="">Indebt...</p>

                  <a href='https://indebt.uz' target="blank"  className="p-5  hover:scale-95 duration-500 bg-[white] rounded-full absolute right-[15px] top-0 transform translate-y-[-50%]">
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
          </SwiperSlide>

        </Swiper>
      </>
    </section>
  );
};

export default Portfolio;
