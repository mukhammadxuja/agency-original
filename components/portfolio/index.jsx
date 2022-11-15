import React from 'react';
import PortfolioCard from './Card';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useLanguage } from '../../hooks/useLanguage';
import indebt from '../../public/images/propjects/indebt.jpg';
import imbastudio from '../../public/images/propjects/imbastudio.jpg';
import fayzbaraka from '../../public/images/propjects/fayzbaraka.jpg';
import mamirovgroup from '../../public/images/propjects/mamirovgroup.jpg';
import inreport from '../../public/images/propjects/inreport.jpg';
import lazydev from '../../public/images/propjects/lazydev.jpg';
import suvtaminoti from '../../public/images/propjects/suvtaminoti.jpg';
import idealcleaning from '../../public/images/propjects/idealcleaning.jpg';
import indebt_1 from '../../public/images/propjects/indebt-1.jpg';

const Portfolio = () => {
  const { t } = useLanguage();
  return (
    <section className="container mx-auto py-10 md:py-14 lg:py-16 xl:py-20">
      <div
        id="portfolio"
        className="flex flex-wrap justify-between items-center"
      >
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
          <SwiperSlide>
            <PortfolioCard
              title="Development"
              description="InReport"
              imgSrg={inreport}
              link="https://inreport.uz/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard
              title="Development"
              description="Lazydev"
              imgSrg={lazydev}
              link="https://lazydev.uz"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard
              title="Development"
              description="Indebt"
              imgSrg={indebt_1}
              link="https://indebt.uz"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard
              title="Development"
              description="Imba Studio "
              imgSrg={imbastudio}
              link="https://imbastudio.uz"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard
              title="Development"
              description="Fayz Baraka"
              imgSrg={fayzbaraka}
              link="https://fayzbaraka.uz"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard
              title="Development"
              description="Mamirov Group"
              imgSrg={mamirovgroup}
              link="https://mamirovgroup.uz"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard
              title="Development"
              description="Jizzax City"
              imgSrg={indebt}
              link="https://jizzaxcity-uz.vercel.app/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard
              title="Development"
              description="JS Taminot"
              imgSrg={suvtaminoti}
              link="https://jizzaxsuvtaminoti.uz"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard
              title="Development"
              description="Ideal Cleaning"
              imgSrg={idealcleaning}
              link="https://ideal-cleaning.vercel.app/"
            />
          </SwiperSlide>
        </Swiper>
      </>
    </section>
  );
};

export default Portfolio;
