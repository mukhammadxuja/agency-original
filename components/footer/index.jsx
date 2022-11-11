import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useLanguage } from '../../hooks/useLanguage';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <div className="pt-5 md:pt-10  bg-neutral-50 dark:bg-black">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-5 md:pb-10">
        <div className="mt-4 md:mt-0">
          <h3 className="text-xl pb-3">{t('home:about_navbar')}</h3>
          <div className="space-y-1">
            <div>
              <h4 className="text-lg">{t('home:footer_company_info')}:</h4>
              <p className="text-sm">DotSoft LLC A Software Company</p>
            </div>
            <div>
              <h4 className="text-lg">{t('home:footer_adress')}:</h4>
              <p className="text-sm">Uzbekistan, Jizzakh</p>
            </div>
            <div>
              <h4 className="text-lg">{t('home:footer_callus')}:</h4>
              <p className="text-sm">
                <a
                  href="tel:+998992666545"
                  className="text-xl hover:text-[#086E99FF] transition-all"
                >
                  +998992666545
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <h3 className="text-xl pb-3">{t('home:footer_services')}</h3>
          <div className="space-y-1">
            <h4 className="text-lg">{t('home:service_1')}</h4>
            <h4 className="text-lg">{t('home:service_2')}</h4>
            <h4 className="text-lg">{t('home:service_3')}</h4>
            <h4 className="text-lg">{t('home:service_4')}</h4>
            <h4 className="text-lg">{t('home:service_5')}</h4>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <h3 className="text-xl pb-3">Portfolio</h3>
          <div className="flex flex-col space-y-1">
            <Link href="/portfolio/in-report-system">
              <a className="text-lg hover:underline">Inreport System</a>
            </Link>
            <Link href="/portfolio/ed-teach">
              <a className="text-lg hover:underline">edTeach</a>
            </Link>
            <Link href="/portfolio/lazy-dev">
              <a className="text-lg hover:underline">Lazydev - Ui Components</a>
            </Link>
            <Link href="/portfolio/ideal-cleaning">
              <a className="text-lg hover:underline">Ideal Cleaning</a>
            </Link>
            <Link href="/portfolio/jizzax-city">
              <a className="text-lg hover:underline">Jizzax City</a>
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <Link href="/">
            <div className="block dark:hidden cursor-pointer">
              <Image
                width={70}
                height={60}
                objectFit="contain"
                src="/images/dotsoft/dotsoft-light.png"
                alt="Footer logo"
              />
            </div>
          </Link>
          <Link href="/">
            <div className="hidden dark:block cursor-pointer">
              <Image
                width={70}
                height={70}
                objectFit="contain"
                src="/images/dotsoft/dotsoft-dark.png"
                alt="Footer logo"
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="container mx-auto flex flex-row-reverse md:flex-row items-center justify-between py-10 border-t">
        <p className="flex text-lg font-medium text-main dark:text-white">
          <span className="text-[#006B98] md:mr-2">.Soft Group</span>
          <span className="hidden md:block">
            {t('home:all_rights_reserved')}.{' '}
          </span>{' '}
          ©2022
        </p>
        <ul className="flex items-center space-x-3 md:space-x-4 lg:space-x-6 xl:space-x-8 text-black dark:text-white text-lg font-medium md:font-semibold">
          <li className="cursor-pointer block md:hidden">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/dotsoftuz/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="md:w-full w-[20px] svg"
              >
                <path
                  d="M7.73552 4.21494C5.67045 4.21494 3.98669 5.90479 3.98669 7.99981C3.98669 10.0948 5.66045 11.7847 7.73552 11.7847C9.81059 11.7847 11.4843 10.0948 11.4843 7.99981C11.4843 5.90479 9.81059 4.21494 7.73552 4.21494ZM7.73552 10.4605C6.39455 10.4605 5.29829 9.35697 5.29829 7.99981C5.29829 6.64266 6.39129 5.53915 7.73552 5.53915C9.07974 5.53915 10.1727 6.64266 10.1727 7.99981C10.1727 9.35697 9.07648 10.4605 7.73552 10.4605ZM12.5121 4.06012C12.5121 4.55093 12.1206 4.94293 11.6377 4.94293C11.1516 4.94293 10.7633 4.54764 10.7633 4.06012C10.7633 3.5726 11.1548 3.17731 11.6377 3.17731C12.1206 3.17731 12.5121 3.5726 12.5121 4.06012ZM14.995 4.9561C14.9395 3.77354 14.672 2.72603 13.8139 1.86298C12.9591 0.99994 11.9215 0.729827 10.7502 0.670534C9.54305 0.601359 5.92473 0.601359 4.71753 0.670534C3.54949 0.726533 2.51195 0.996646 1.65387 1.85969C0.79578 2.72273 0.531502 3.77024 0.472774 4.95281C0.404258 6.17161 0.404258 9.82472 0.472774 11.0435C0.52824 12.2261 0.79578 13.2736 1.65387 14.1366C2.51195 14.9997 3.54623 15.2698 4.71753 15.3291C5.92473 15.3983 9.54305 15.3983 10.7502 15.3291C11.9215 15.2731 12.9591 15.003 13.8139 14.1366C14.6687 13.2736 14.9363 12.2261 14.995 11.0435C15.0635 9.82472 15.0635 6.17491 14.995 4.9561ZM13.4354 12.3513C13.1809 12.9969 12.6883 13.4943 12.0455 13.7545C11.083 14.1399 8.79915 14.051 7.73552 14.051C6.67188 14.051 4.38474 14.1366 3.42551 13.7545C2.78602 13.4976 2.29335 13.0002 2.0356 12.3513C1.65387 11.3795 1.74196 9.07368 1.74196 7.99981C1.74196 6.92595 1.65713 4.61682 2.0356 3.64836C2.29009 3.00273 2.78276 2.50532 3.42551 2.24509C4.388 1.85969 6.67188 1.94863 7.73552 1.94863C8.79915 1.94863 11.0863 1.86298 12.0455 2.24509C12.685 2.50203 13.1777 2.99943 13.4354 3.64836C13.8172 4.62011 13.7291 6.92595 13.7291 7.99981C13.7291 9.07368 13.8172 11.3828 13.4354 12.3513Z"
                  fill="#001F00"
                ></path>
              </svg>
            </a>
          </li>
          <li className="cursor-pointer hidden md:block">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/dotsoftuz/"
            >
              <p>Instagram</p>
            </a>
          </li>
          <li className="cursor-pointer block md:hidden">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/dotsoftuz"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 640 640"
              >
                <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
              </svg>
            </a>
          </li>
          <li className="cursor-pointer hidden md:block">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/dotsoftuz"
            >
              <p>Github</p>
            </a>
          </li>
          <li className="cursor-pointer block md:hidden">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/dot-soft-330800254/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="md:w-full w-[20px] svg"
              >
                <path
                  d="M3.74191 15.383H0.709835V5.52494H3.74191V15.383ZM2.22424 4.18021C1.25468 4.18021 0.468262 3.36942 0.468262 2.39054C0.468262 1.92035 0.653266 1.46941 0.982576 1.13694C1.31189 0.804459 1.75853 0.617676 2.22424 0.617676C2.68996 0.617676 3.1366 0.804459 3.46591 1.13694C3.79522 1.46941 3.98022 1.92035 3.98022 2.39054C3.98022 3.36942 3.19347 4.18021 2.22424 4.18021ZM15.09 15.383H12.0645V10.5841C12.0645 9.44047 12.0416 7.97379 10.488 7.97379C8.91159 7.97379 8.67001 9.21634 8.67001 10.5017V15.383H5.6412V5.52494H8.54923V6.86967H8.59167C8.99646 6.09513 9.98528 5.27775 11.4605 5.27775C14.5292 5.27775 15.0933 7.31791 15.0933 9.96781V15.383H15.09Z"
                  fill="#001F00"
                ></path>
              </svg>
            </a>
          </li>
          <li className="cursor-pointer hidden md:block">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/dot-soft-330800254/"
            >
              <p>Linkedin</p>
            </a>
          </li>
          <li className="cursor-pointer block md:hidden">
            <a target="_target" href="https://twitter.com/DotSoftUz">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                className="md:w-full w-[20px] svg"
              >
                <path
                  d="M13.6368 3.0213C13.6461 3.15121 13.6461 3.28115 13.6461 3.41106C13.6461 7.37354 10.6302 11.9392 5.11794 11.9392C3.41972 11.9392 1.84216 11.4474 0.515137 10.5937C0.756422 10.6215 0.988394 10.6308 1.23896 10.6308C2.6402 10.6308 3.93012 10.1575 4.96018 9.35018C3.64244 9.32233 2.53814 8.45931 2.15766 7.27148C2.34327 7.2993 2.52885 7.31787 2.72375 7.31787C2.99286 7.31787 3.26199 7.28073 3.51253 7.2158C2.13912 6.93739 1.10902 5.73102 1.10902 4.27408V4.23698C1.50804 4.45969 1.97207 4.59889 2.46387 4.61743C1.65652 4.07919 1.12759 3.16049 1.12759 2.12114C1.12759 1.56436 1.27604 1.05397 1.53589 0.608532C3.01139 2.42738 5.22929 3.61518 7.71626 3.74512C7.66987 3.5224 7.64202 3.29043 7.64202 3.05843C7.64202 1.4066 8.97833 0.0610352 10.6394 0.0610352C11.5024 0.0610352 12.2819 0.422948 12.8295 1.00758C13.5069 0.877668 14.1565 0.627099 14.7318 0.283753C14.5091 0.979758 14.0358 1.56439 13.4141 1.93556C14.0173 1.87063 14.6019 1.70356 15.1401 1.47158C14.7319 2.06547 14.2215 2.5944 13.6368 3.0213Z"
                  fill="#001F00"
                ></path>
              </svg>
            </a>
          </li>
          <li className="cursor-pointer hidden md:block">
            <a target="_target" href="https://twitter.com/DotSoftUz">
              <p>Twitter</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
