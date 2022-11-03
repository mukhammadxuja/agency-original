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
            Bizning <span className="text-[#006B98]">Bajargan</span>{' '}
            <br className="md:block hidden" /> Loyhalarimiz
          </h1>
        </div>
        <div>
          <p className="text-base md:text-lg xl:mt-0 mt-4 mb-[22px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
            <br className="md:block hidden" />
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <a className="font-bold text-lg flex items-center gap-[6px]" href="#">
            Discover More{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3.5  h-3.5 stroke-2"
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
              src="https://images.wallpaperscraft.ru/image/single/kraska_relef_tekstura_135781_3840x2400.jpg"
              alt="Slide image"
            />
            <div className="slide-opacity">
              <h4 className="dark:bg-[white] dark:text-[black]">Development</h4>
              <div className="slide-opacity-box  dark:bg-[white]">
                <img
                  className="star filter dark:!brightness-0"
                  src="/svg/star-white.svg"
                  alt=""
                />
                <p className="dark:!text-[black]">Glassy Sky</p>
                <Link href="/">
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
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            {' '}
            <img
              src="https://catherineasquithgallery.com/uploads/posts/2021-02/1613256331_70-p-sinyaya-kraska-fon-103.jpg"
              alt="Slide image"
            />
            <div className="slide-opacity">
              <h4 className="dark:bg-[white] dark:text-[black]">Development</h4>
              <div className="slide-opacity-box  dark:bg-[white]">
                <img
                  className="star filter dark:!brightness-0"
                  src="/svg/star-white.svg"
                  alt=""
                />
                <p className="dark:!text-[black]">Glassy Sky</p>
                <Link href="/">
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
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            {' '}
            <img
              src="https://i.pinimg.com/originals/f2/d6/e2/f2d6e2ed1722fd986b862973532b6bc0.jpg"
              alt="Slide image"
            />
            <div className="slide-opacity">
              <h4 className="dark:bg-[white] dark:text-[black]">Development</h4>
              <div className="slide-opacity-box  dark:bg-[white]">
                <img
                  className="star filter dark:!brightness-0"
                  src="/svg/star-white.svg"
                  alt=""
                />
                <p className="dark:!text-[black]">Glassy Sky</p>
                <Link href="/">
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
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            {' '}
            <img
              src="https://images.pexels.com/photos/3276032/pexels-photo-3276032.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Slide image"
            />
            <div className="slide-opacity">
              <h4 className="dark:bg-[white] dark:text-[black]">Development</h4>
              <div className="slide-opacity-box  dark:bg-[white]">
                <img
                  className="star filter dark:!brightness-0"
                  src="/svg/star-white.svg"
                  alt=""
                />
                <p className="dark:!text-[black]">Glassy Sky</p>
                <Link href="/">
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
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            {' '}
            <img
              src="https://images.wallpaperscraft.ru/image/single/kraska_relef_tekstura_135781_3840x2400.jpg"
              alt="Slide image"
            />
            <div className="slide-opacity">
              <h4 className="dark:bg-[white] dark:text-[black]">Development</h4>
              <div className="slide-opacity-box  dark:bg-[white]">
                <img
                  className="star filter dark:!brightness-0"
                  src="/svg/star-white.svg"
                  alt=""
                />
                <p className="dark:!text-[black]">Glassy Sky</p>
                <Link href="/">
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
          </SwiperSlide>
        </Swiper>
      </>
    </section>
  );
};

export default Portfolio;
