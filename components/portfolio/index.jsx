import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useLanguage } from '../../hooks/useLanguage';
import edteach from '../../public/images/propjects/edteach.png';
import fayzbaraka from '../../public/images/propjects/fayzbaraka.jpg';
import forward from '../../public/images/propjects/forward.jpg';
import idealcleaning from '../../public/images/propjects/idealcleaning.jpg';
import imbastudio from '../../public/images/propjects/imbastudio.jpg';
import indebt_1 from '../../public/images/propjects/indebt-1.jpg';
import inmenu from '../../public/images/propjects/inmenu.jpg';
import inreport from '../../public/images/propjects/inreport.jpg';
import intoday from '../../public/images/propjects/intoday.png';
import japan from '../../public/images/propjects/japan.png';
import jmc from '../../public/images/propjects/jms.jpg';
import JQuruvchi from '../../public/images/propjects/jquruvchi.jpg';
import lazydev from '../../public/images/propjects/lazydev.jpg';
import gilamchi from '../../public/images/propjects/gilamchi.jpg';
import mamirovgroup from '../../public/images/propjects/mamirovgroup.jpg';
import PortfolioCard from './Card';

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
          <h2 className="md:text-[4rem] text-[2rem] font-bold leading-none">
            DotSoft -{' '}
            <span className="text-[#008CFF]">{t('home:works_highlight')}.</span>{' '}
            <br className="md:block hidden" />
          </h2>
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
              description="Gilamchi"
              imgSrg={gilamchi}
              link="https://gilamchi.uz/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard
              title="Development"
              description="Edteach"
              imgSrg={edteach}
              link="https://edteach.uz"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard
              title="Development & Design"
              description="Intoday"
              imgSrg={intoday}
              link="https://app.intoday.uz"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard
              title="Development"
              description="Japan univercity"
              imgSrg={japan}
              link="https://jiuuni.uz/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard
              title="Development & Design"
              description="Inmenu - online Qr kod menu"
              imgSrg={inmenu}
              link="https://www.inmenu.uz/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard
              title="Development & Design"
              description="JMC - Metal Konstruksiya"
              imgSrg={jmc}
              link="https://jasurmc.netlify.app"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard
              title="Development & Design"
              description="Forward Advertising"
              imgSrg={forward}
              link="https://forward-landing-new.vercel.app/uz"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard
              title="Development & Design"
              description="JQuruvchi"
              imgSrg={JQuruvchi}
              link="https://jquruvchi-rouge.vercel.app/"
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
              link="https://fayzbaraka.netlify.app/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard
              title="Development"
              description="Mamirov Group"
              imgSrg={mamirovgroup}
              link="https://imbastudio.uz/photoedit"
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
          <SwiperSlide>
            <PortfolioCard
              title="Development"
              description="Lazydev"
              imgSrg={lazydev}
              link="https://lazydev.vercel.app/"
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
        </Swiper>
      </>
    </section>
  );
};

export default Portfolio;
