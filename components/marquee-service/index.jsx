import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const MarqueeServes = () => {
  const { t } = useLanguage();
  const weCanDoData = [
    {
      id: '12432342432',
      title: `${t('home:service_1')}`,
      img: '/svg/star-white.svg',
    },
    {
      id: '24092102498',
      title: `${t('home:service_2')}`,
      img: '/svg/star-white.svg',
    },
    {
      id: '34230498234',
      title: `${t('home:service_3')}`,
      img: '/svg/star-white.svg',
    },
    {
      id: '4123098200533',
      title: `${t('home:service_5')}`,
      img: '/svg/star-white.svg',
    },
    {
      id: '5239812323097',
      title: `${t('home:service_4')}`,
      img: '/svg/star-white.svg',
    },
    {
      id: '1242342342432',
      title: `${t('home:service_1')}`,
      img: '/svg/star-white.svg',
    },
    {
      id: '2402398102498',
      title: `${t('home:service_2')}`,
      img: '/svg/star-white.svg',
    },
    {
      id: '312349813424239',
      title: `${t('home:service_3')}`,
      img: '/svg/star-white.svg',
    },
    {
      id: '415342309812533',
      title: `${t('home:service_5')}`,
      img: '/svg/star-white.svg',
    },
    {
      id: '52232398123097',
      title: `${t('home:service_4')}`,
      img: '/svg/star-white.svg',
    },
    {
      id: '1223342432',
      title: `${t('home:service_1')}`,
      img: '/svg/star-white.svg',
    },
    {
      id: '2442102498',
      title: `${t('home:service_2')}`,
      img: '/svg/star-white.svg',
    },
    {
      id: '34283498234',
      title: `${t('home:service_3')}`,
      img: '/svg/star-white.svg',
    },
    {
      id: '412323200533',
      title: `${t('home:service_5')}`,
      img: '/svg/star-white.svg',
    },
    {
      id: '523982323097',
      title: `${t('home:service_4')}`,
      img: '/svg/star-white.svg',
    },
    {
      id: '1242342309042432',
      title: `${t('home:service_1')}`,
      img: '/svg/star-white.svg',
    },
    {
      id: '2423423498102498',
      title: `${t('home:service_2')}`,
      img: '/svg/star-white.svg',
    },
    {
      id: '31212312813424239',
      title: `${t('home:service_3')}`,
      img: '/svg/star-white.svg',
    },
    {
      id: '415245209812533',
      title: `${t('home:service_5')}`,
      img: '/svg/star-white.svg',
    },
    {
      id: '52233458123097',
      title: `${t('home:service_4')}`,
      img: '/svg/star-white.svg',
    },
  ];
  return (
    <div className="bg-black overflow-hidden ">
      <div className="h-16 md:h-24 flex items-center whitespace-nowrap animate-marquee">
        {weCanDoData.map((canWe) => (
          <div key={canWe.id} className="flex items-center">
            <img className="w-6 md:w-8 ml-8" src={canWe.img} alt="star img" />
            <h3 className="text-2xl md:text-3xl text-white mx-5">
              {canWe.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeServes;
