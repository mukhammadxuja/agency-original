import React from 'react';
import PortfolioCard from './Card';
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
     
        </Swiper>
      </>
    </section>
  );
};

export default Portfolio;
