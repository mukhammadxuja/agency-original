import Image from 'next/image';
import React, { memo } from 'react';
import img1 from "./hero.jpg"
const About = memo(() => {
  return (
    <section className='mt-20'>
      <div className='container mx-auto'>
        <div className='flex'>
          <div className='w-[50%]'>
          <h3 className='font-bold text-xl'>ABOUT US</h3>
          <h2 className='text-[4rem] font-bold leading-none'>Creating <span className='text-[#016C9AFF]'>User - Friendly</span>  Design</h2>
          <p className='text-lg text-gray-600 pt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam illo delectus voluptates vero assumenda porro maxime at laborum, Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='w-[50%] px-20 pt-10 '>
            <div className="mini-cards">

            <div className='flex '>
              <div>

              <Image
              className='rounded-full'
              width={50}
              height={50}
              src={img1} alt="" />
              </div>
              <div className='pl-2'>
                <h3 className='font-bold text-lg'>Muhammad Sulton</h3>
                <p className='text-[#3F3F3FFF]'>Ceo Tutordek</p>
              </div>
            </div>

              <p className='text-gray-600 pt-3 border-b-2 pb-5 border-gray-400'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eos nemo modi fugiat qui. Architecto labore hic, facilis laborum adipisci, dolor ut eius porro asperiores"</p>
            </div>
            <div className="mini-cards mt-10">

            <div className='flex '>
              <div>

              <Image
              className='rounded-full'
              width={50}
              height={50}
              src={img1} alt="" />
              </div>
              <div className='pl-2'>
                <h3 className='font-bold text-lg'>Safarov Muzaffar</h3>
                <p className='text-[#3F3F3FFF]'>FrontEnd Developer</p>
              </div>
            </div>

              <p className='text-gray-600 pt-3 border-b-2 pb-5 border-gray-400'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eos nemo modi fugiat qui. Architecto labore hic, facilis laborum adipisci, dolor ut eius porro asperiores"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;