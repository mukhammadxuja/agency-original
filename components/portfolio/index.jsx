import React from "react";

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
        delay: 2000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

  }

  const [language, setLanguage] = React.useState(false);

  const toggleLanguage = () => {
    setLanguage(!language);
  };

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
      {/* <!-- Swiper --> */}
      <div class="swiper mySwiper pt-[50px]">
        <div class="swiper-wrapper">
          {/* swiper slide 1 */}
          <div className="swiper-slide"> <img src="/images/port1.jpg" alt="" />
            <div className="slide-opacity">
              <h4 className="dark:bg-[white] dark:text-[black]">Development</h4>
              <div className="slide-opacity-box  dark:bg-[white]">
                <img className="star" src="/images/star.png" alt="" />
                <p className="dark:!text-[black]">Glassy Sky</p>
                <a href="" className="p-[15px] dark:bg-[black] scale-1 hover:scale-[0.9] hover:duration-200 bg-[white] rounded-full absolute right-[15px] top-[0] translate-y-[-50%]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 stroke-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* swiper slide 2 */}
          <div className="swiper-slide"> <img src="/images/port2.jpg" alt="" />
            <div className="slide-opacity">
              <h4 className="dark:bg-[white] dark:text-[black]">Development</h4>
              <div className="slide-opacity-box  dark:bg-[white]">
                <img className="star" src="/images/star.png" alt="" />
                <p className="dark:!text-[black]">Glassy Sky</p>
                <a href="" className="p-[15px] dark:bg-[black] scale-1 hover:scale-[0.9] hover:duration-200 bg-[white] rounded-full absolute right-[15px] top-[0] translate-y-[-50%]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 stroke-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
           {/* swiper slide 3 */}
          <div className="swiper-slide"> <img src="/images/port3.jpg" alt="" />
            <div className="slide-opacity">
              <h4 className="dark:bg-[white] dark:text-[black]">Development</h4>
              <div className="slide-opacity-box  dark:bg-[white]">
                <img className="star" src="/images/star.png" alt="" />
                <p className="dark:!text-[black]">Glassy Sky</p>
                <a href="" className="p-[15px] dark:bg-[black] scale-1 hover:scale-[0.9] hover:duration-200 bg-[white] rounded-full absolute right-[15px] top-[0] translate-y-[-50%]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 stroke-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
           {/* swiper slide 4 */}
          <div className="swiper-slide"> <img src="/images/port1.jpg" alt="" />
            <div className="slide-opacity">
              <h4 className="dark:bg-[white] dark:text-[black]">Development</h4>
              <div className="slide-opacity-box  dark:bg-[white]">
                <img className="star" src="/images/star.png" alt="" />
                <p className="dark:!text-[black]">Glassy Sky</p>
                <a href="" className="p-[15px] dark:bg-[black] scale-1 hover:scale-[0.9] hover:duration-200 bg-[white] rounded-full absolute right-[15px] top-[0] translate-y-[-50%]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 stroke-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
           {/* swiper slide 5 */}
          <div className="swiper-slide"> <img src="/images/port2.jpg" alt="" />
            <div className="slide-opacity">
              <h4 className="dark:bg-[white] dark:text-[black]">Development</h4>
              <div className="slide-opacity-box  dark:bg-[white]">
                <img className="star" src="/images/star.png" alt="" />
                <p className="dark:!text-[black]">Glassy Sky</p>
                <a href="" className="p-[15px] dark:bg-[black] scale-1 hover:scale-[0.9] hover:duration-200 bg-[white] rounded-full absolute right-[15px] top-[0] translate-y-[-50%]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 stroke-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
           {/* swiper slide 6 */}
          <div className="swiper-slide"> <img src="/images/port3.jpg" alt="" />
            <div className="slide-opacity">
              <h4 className="dark:bg-[white] dark:text-[black]">Development</h4>
              <div className="slide-opacity-box  dark:bg-[white]">
                <img className="star" src="/images/star.png" alt="" />
                <p className="dark:!text-[black]">Glassy Sky</p>
                <a href="" className="p-[15px] dark:bg-[black] scale-1 hover:scale-[0.9] hover:duration-200 bg-[white] rounded-full absolute right-[15px] top-[0] translate-y-[-50%]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 stroke-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
           {/* swiper slide 7 */}
          <div className="swiper-slide"> <img src="/images/port1.jpg" alt="" />
            <div className="slide-opacity">
              <h4 className="dark:bg-[white] dark:text-[black]">Development</h4>
              <div className="slide-opacity-box  dark:bg-[white]">
                <img className="star" src="/images/star.png" alt="" />
                <p className="dark:!text-[black]">Glassy Sky</p>
                <a href="" className="p-[15px] dark:bg-[black] scale-1 hover:scale-[0.9] hover:duration-200 bg-[white] rounded-full absolute right-[15px] top-[0] translate-y-[-50%]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 stroke-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
           {/* swiper slide 8 */}
          <div className="swiper-slide"> <img src="/images/port2.jpg" alt="" />
            <div className="slide-opacity">
              <h4 className="dark:bg-[white] dark:text-[black]">Development</h4>
              <div className="slide-opacity-box  dark:bg-[white]">
                <img className="star" src="/images/star.png" alt="" />
                <p className="dark:!text-[black]">Glassy Sky</p>
                <a href="" className="p-[15px] dark:bg-[black] scale-1 hover:scale-[0.9] hover:duration-200 bg-[white] rounded-full absolute right-[15px] top-[0] translate-y-[-50%]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 stroke-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
             {/* swiper slide 9 */}
          <div className="swiper-slide"> <img src="/images/port3.jpg" alt="" />
            <div className="slide-opacity">
              <h4 className="dark:bg-[white] dark:text-[black]">Development</h4>
              <div className="slide-opacity-box  dark:bg-[white]">
                <img className="star" src="/images/star.png" alt="" />
                <p className="dark:!text-[black]">Glassy Sky</p>
                <a href="" className="p-[15px] dark:bg-[black] scale-1 hover:scale-[0.9] hover:duration-200 bg-[white] rounded-full absolute right-[15px] top-[0] translate-y-[-50%]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 stroke-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Portfolio;
