import React from "react";
import Slide from "./Slide";

const Portfolio = () => {

  window.onload = function () {
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 20,
      breakpoints: {
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
        }
      },
      resistanceRatio: 0,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

  }


  return (
    <section className="pt-[50px]">
      <div className="flex flex-wrap justify-between items-center">
        <h1 className="md:text-[4rem] text-[2rem] font-bold leading-none">Bizning <span className="text-[#006B98]">Bajargan</span> <br className="md:block hidden" /> Loyhalarimiz</h1>
        <div>
          <p className="text-[18px] xl:mt-0 mt-4 mb-[22px]">Lorem ipsum dolor sit amet consectetur adipisicing  elit. <br className="md:block hidden" />Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <a className="font-bold text-[18px] flex items-center gap-[6px]" href="#">Discover  More <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5  h-3.5 stroke-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg></a>
        </div>
      </div>
      <div className="swiper mySwiper pt-[50px]">
        <div className="swiper-wrapper">
          <Slide
            title="Development"
            description="Glassy Sky"
            img="https://images.wallpaperscraft.ru/image/single/kraska_relef_tekstura_135781_3840x2400.jpg"
            link="#!"
          />
            <Slide
              title="Development"
              description="Glassy Sky"
              img="https://catherineasquithgallery.com/uploads/posts/2021-02/1613256331_70-p-sinyaya-kraska-fon-103.jpg"
              link="#!"
            />
          <Slide
            title="Development"
            description="Glassy Sky"
            img="https://i.pinimg.com/originals/f2/d6/e2/f2d6e2ed1722fd986b862973532b6bc0.jpg"
            link="#!"
          />
            <Slide
            title="Development"
            description="Glassy Sky"
            img="https://images.pexels.com/photos/3276032/pexels-photo-3276032.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            link="#!"
          />
           <Slide
            title="Development"
            description="Glassy Sky"
            img="https://images.wallpaperscraft.ru/image/single/kraska_relef_tekstura_135781_3840x2400.jpg"
            link="#!"
          />
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Portfolio;
