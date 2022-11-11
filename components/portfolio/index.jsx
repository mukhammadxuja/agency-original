import React from 'react';
import PortfolioCard from './Card';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useLanguage } from '../../hooks/useLanguage';

const Portfolio = () => {
  const { t } = useLanguage();
  return (
    <section className="container mx-auto py-10 md:py-14 lg:py-16 xl:py-20">
      <div className="flex flex-wrap justify-between items-center">
        <div>
          <h3 className="font-bold md:text-xl">{t('home:works_section')}</h3>
          <h1 className="md:text-[4rem] text-[2rem] font-bold leading-none">
            DotSoft -{' '}
            <span className="text-[#006B98]">{t('home:works_highlight')}.</span>{' '}
            <br className="md:block hidden" />
          </h1>
        </div>
      </div>
      {/* Swiper js */}
      <>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            570: {
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
<<<<<<< HEAD
          <SwiperSlide className="swiper-slide">
            <img src="/images/propjects/indebt.jpg" alt="Slide image" />
            <div className="slide-opacity">
              <h4 className=" ">Development</h4>
              <div className="slide-opacity-box">
                <img className="star" src="/svg/star-white.svg" alt="" />
                <p className="">Jizzax City</p>

                <a
                  href="https://jizzaxcity-uz.vercel.app/"
                  target="blank"
                  className="p-5  hover:scale-95 duration-500 bg-[white] rounded-full absolute right-[15px] top-0 transform translate-y-[-50%]"
                >
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
            <img src="/images/propjects/imbastudio.jpg" alt="Slide image" />
            <div className="slide-opacity">
              <h4 className=" ">Development</h4>
              <div className="slide-opacity-box">
                <img className="star" src="/svg/star-white.svg" alt="" />
                <p className="">Video Montage</p>

                <a
                  href="https://imbastudio.uz"
                  target="blank"
                  className="p-5  hover:scale-95 duration-500 bg-[white] rounded-full absolute right-[15px] top-0 transform translate-y-[-50%]"
                >
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
            <img src="/images/propjects/fayzbaraka.jpg" alt="Slide image" />
            <div className="slide-opacity">
              <h4 className=" ">Development</h4>
              <div className="slide-opacity-box">
                <img className="star" src="/svg/star-white.svg" alt="" />
                <p className="">Fayz Baraka</p>

                <a
                  href="https://fayzbaraka.uz"
                  target="blank"
                  className="p-5  hover:scale-95 duration-500 bg-[white] rounded-full absolute right-[15px] top-0 transform translate-y-[-50%]"
                >
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
            <img src="/images/propjects/mamirovgroup.jpg" alt="Slide image" />
            <div className="slide-opacity">
              <h4 className=" ">Development</h4>
              <div className="slide-opacity-box">
                <img className="star" src="/svg/star-white.svg" alt="" />
                <p className="">Mamirov Group</p>

                <a
                  href="https://mamirovgroup.uz"
                  target="blank"
                  className="p-5  hover:scale-95 duration-500 bg-[white] rounded-full absolute right-[15px] top-0 transform translate-y-[-50%]"
                >
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
            <img src="/images/propjects/inreport.jpg" alt="Slide image" />
            <div className="slide-opacity">
              <h4 className=" ">Development</h4>
              <div className="slide-opacity-box">
                <img className="star" src="/svg/star-white.svg" alt="" />
                <p className="">InReport</p>

                <a
                  href="https://inreport.uz/"
                  target="blank"
                  className="p-5  hover:scale-95 duration-500 bg-[white] rounded-full absolute right-[15px] top-0 transform translate-y-[-50%]"
                >
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
            <img src="/images/propjects/lazydev.jpg" alt="Slide image" />
            <div className="slide-opacity">
              <h4 className=" ">Development</h4>
              <div className="slide-opacity-box">
                <img className="star" src="/svg/star-white.svg" alt="" />
                <p className="">Lazydev</p>

                <a
                  href="https://lazydev.vercel.app/"
                  target="blank"
                  className="p-5  hover:scale-95 duration-500 bg-[white] rounded-full absolute right-[15px] top-0 transform translate-y-[-50%]"
                >
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
            <img src="/images/propjects/suvtaminoti.jpg" alt="Slide image" />
            <div className="slide-opacity">
              <h4 className=" ">Development</h4>
              <div className="slide-opacity-box">
                <img className="star" src="/svg/star-white.svg" alt="" />
                <p className="">JS Taminot</p>

                <a
                  href="https://jizzaxsuvtaminoti.uz"
                  target="blank"
                  className="p-5  hover:scale-95 duration-500 bg-[white] rounded-full absolute right-[15px] top-0 transform translate-y-[-50%]"
                >
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
            <img src="/images/propjects/idealcleaning.jpg" alt="Slide image" />
            <div className="slide-opacity">
              <h4 className=" ">Development</h4>
              <div className="slide-opacity-box">
                <img className="star" src="/svg/star-white.svg" alt="" />
                <p className="">Ideal Cleaning</p>

                <a
                  href="https://ideal-cleaning.vercel.app/"
                  target="blank"
                  className="p-5  hover:scale-95 duration-500 bg-[white] rounded-full absolute right-[15px] top-0 transform translate-y-[-50%]"
                >
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
            <img src="/images/propjects/indebt-1.jpg" alt="Slide image" />
            <div className="slide-opacity">
              <h4 className=" ">Development</h4>
              <div className="slide-opacity-box">
                <img className="star" src="/svg/star-white.svg" alt="" />
                <p className="">Indebt...</p>

                <a
                  href="https://indebt.uz"
                  target="blank"
                  className="p-5  hover:scale-95 duration-500 bg-[white] rounded-full absolute right-[15px] top-0 transform translate-y-[-50%]"
                >
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
=======


          <SwiperSlide>
            <PortfolioCard
              title="Development"
              description="Jizzax City"
              imgSrg="/images/propjects/indebt.jpg"
              link="https://jizzaxcity-uz.vercel.app/"
            />
          </SwiperSlide>

          <SwiperSlide>
            <PortfolioCard
              title="Development"
              description="Imba"
              imgSrg="/images/propjects/imbastudio.jpg"
              link="https://imbastudio.uz"
            />
          </SwiperSlide>

          
          <SwiperSlide>
            <PortfolioCard
              title="Development"
              description="Fayz Baraka"
              imgSrg="/images/propjects/fayzbaraka.jpg"
              link="https://fayzbaraka.uz"
            />
          </SwiperSlide>

          <SwiperSlide>
            <PortfolioCard
              title="Development"
              description="Mamirov Group"
              imgSrg="/images/propjects/mamirovgroup.jpg"
              link="https://mamirovgroup.uz"
            />
          </SwiperSlide>

          <SwiperSlide>
            <PortfolioCard
              title="Development"
              description="InReport"
              imgSrg="/images/propjects/inreport.jpg"
              link="https://inreport.uz/"
            />
          </SwiperSlide>

          <SwiperSlide>
            <PortfolioCard
              title="Development"
              description="Lazydev"
              imgSrg="/images/propjects/lazydev.jpg"
              link="https://lazydev.vercel.app/"
            />
          </SwiperSlide>

          <SwiperSlide>
            <PortfolioCard
              title="Development"
              description="JS Taminot"
              imgSrg="/images/propjects/suvtaminoti.jpg"
              link="https://jizzaxsuvtaminoti.uz"
            />
          </SwiperSlide>

          <SwiperSlide>
            <PortfolioCard
              title="Development"
              description="Ideal Cleaning"
              imgSrg="/images/propjects/idealcleaning.jpg"
              link="https://ideal-cleaning.vercel.app/"
            />
          </SwiperSlide>

          <SwiperSlide>
            <PortfolioCard
              title="Development"
              description="Indebt..."
              imgSrg="/images/propjects/indebt-1.jpg"
              link="https://indebt.uz"
            />
          </SwiperSlide>
     
>>>>>>> 185c5eb9587ff5e575b721e9538ae7b8e8a18b9f
        </Swiper>
      </>
    </section>
  );
};

export default Portfolio;
