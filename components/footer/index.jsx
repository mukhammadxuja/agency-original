import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="pt-5 md:pt-10 bg-gray-50 dark:bg-black">
      <div className="container mx-auto flex items-center justify-between pb-5 md:pb-10">
        <div className="hidden md:block">
          <Link href="/">
            <img
              className="w-20 md:w-28 cursor-pointer block dark:hidden"
              src="/images/dotsoft-light.png"
              alt=""
            />
          </Link>
          <Link href="/">
            <img
              className="w-20 md:w-28 cursor-pointer hidden dark:block"
              src="/images/dotsoft-dark.png"
              alt=""
            />
          </Link>
        </div>
        <div className="space-y-2 text-start md:text-right">
          <div>
            <h4 className="text-lg md:text-xl">Company information:</h4>
            <p className="text-sm">DotSoft LLC A Software Company</p>
          </div>
          <div>
            <h4 className="text-lg md:text-xl">Address:</h4>
            <p className="text-sm">Uzbekistan, Jizzakh</p>
          </div>
          <div>
            <h4 className="text-lg md:text-xl">Call us:</h4>
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
      <div className="container mx-auto flex flex-row-reverse md:flex-row items-center justify-between py-10 border-t">
        <p className="text-lg font-medium text-main dark:text-white">
          <span className="text-[#006B98] md:mr-2">.Soft Group</span>
          <span className="hidden md:block">All rights reserved. </span> ©2022
        </p>
        <ul className="flex items-center space-x-3 md:space-x-4 lg:space-x-6 xl:space-x-8 text-black dark:text-white text-lg font-medium md:font-semibold">
          <li className="cursor-pointer block md:hidden">
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/dotsoftuz/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="md:w-full w-[20px] svg"
              >
                <path
                  d="M7.73552 4.21494C5.66045 4.21494 3.98669 5.90479 3.98669 7.99981C3.98669 10.0948 5.66045 11.7847 7.73552 11.7847C9.81059 11.7847 11.4843 10.0948 11.4843 7.99981C11.4843 5.90479 9.81059 4.21494 7.73552 4.21494ZM7.73552 10.4605C6.39455 10.4605 5.29829 9.35697 5.29829 7.99981C5.29829 6.64266 6.39129 5.53915 7.73552 5.53915C9.07974 5.53915 10.1727 6.64266 10.1727 7.99981C10.1727 9.35697 9.07648 10.4605 7.73552 10.4605ZM12.5121 4.06012C12.5121 4.55093 12.1206 4.94293 11.6377 4.94293C11.1516 4.94293 10.7633 4.54764 10.7633 4.06012C10.7633 3.5726 11.1548 3.17731 11.6377 3.17731C12.1206 3.17731 12.5121 3.5726 12.5121 4.06012ZM14.995 4.9561C14.9395 3.77354 14.672 2.72603 13.8139 1.86298C12.9591 0.99994 11.9215 0.729827 10.7502 0.670534C9.54305 0.601359 5.92473 0.601359 4.71753 0.670534C3.54949 0.726533 2.51195 0.996646 1.65387 1.85969C0.79578 2.72273 0.531502 3.77024 0.472774 4.95281C0.404258 6.17161 0.404258 9.82472 0.472774 11.0435C0.52824 12.2261 0.79578 13.2736 1.65387 14.1366C2.51195 14.9997 3.54623 15.2698 4.71753 15.3291C5.92473 15.3983 9.54305 15.3983 10.7502 15.3291C11.9215 15.2731 12.9591 15.003 13.8139 14.1366C14.6687 13.2736 14.9363 12.2261 14.995 11.0435C15.0635 9.82472 15.0635 6.17491 14.995 4.9561ZM13.4354 12.3513C13.1809 12.9969 12.6883 13.4943 12.0455 13.7545C11.083 14.1399 8.79915 14.051 7.73552 14.051C6.67188 14.051 4.38474 14.1366 3.42551 13.7545C2.78602 13.4976 2.29335 13.0002 2.0356 12.3513C1.65387 11.3795 1.74196 9.07368 1.74196 7.99981C1.74196 6.92595 1.65713 4.61682 2.0356 3.64836C2.29009 3.00273 2.78276 2.50532 3.42551 2.24509C4.388 1.85969 6.67188 1.94863 7.73552 1.94863C8.79915 1.94863 11.0863 1.86298 12.0455 2.24509C12.685 2.50203 13.1777 2.99943 13.4354 3.64836C13.8172 4.62011 13.7291 6.92595 13.7291 7.99981C13.7291 9.07368 13.8172 11.3828 13.4354 12.3513Z"
                  fill="#001F00"
                ></path>
              </svg>
            </a>
          </li>
          <li className="cursor-pointer hidden md:block">
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/dotsoftuz/">
              <p>Instagram</p>
            </a>
          </li>
          <li className="cursor-pointer block md:hidden">
            <a target="_blank" rel="noreferrer" href="google.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16.516"
                width="16"
                height="16.516"
                className="md:w-full w-[20px] svg"
              >
                <path d="M8 0.258C3.582 0.258 0 3.84 0 8.258S3.582 16.258 8 16.258 16 12.676 16 8.258 12.418 0.258 8 0.258ZM11.708 5.699c-0.12 1.265 -0.641 4.335 -0.906 5.752 -0.112 0.599 -0.333 0.801 -0.547 0.82 -0.465 0.043 -0.817 -0.307 -1.267 -0.602 -0.704 -0.462 -1.102 -0.749 -1.785 -1.199 -0.79 -0.52 -0.278 -0.806 0.172 -1.274 0.118 -0.122 2.165 -1.984 2.204 -2.153 0.005 -0.021 0.01 -0.1 -0.037 -0.141s-0.116 -0.027 -0.166 -0.016q-0.106 0.024 -3.374 2.23 -0.479 0.329 -0.868 0.32c-0.286 -0.006 -0.835 -0.161 -1.244 -0.294 -0.501 -0.163 -0.899 -0.249 -0.865 -0.526q0.027 -0.216 0.595 -0.442 3.498 -1.524 4.665 -2.01c2.222 -0.924 2.683 -1.085 2.984 -1.09 0.066 -0.001 0.214 0.015 0.31 0.093a0.337 0.337 0 0 1 0.114 0.217A1.412 1.412 0 0 1 11.708 5.699Z"></path>
              </svg>
            </a>
          </li>
          <li className="cursor-pointer hidden md:block">
            <a target="_blank" rel="noreferrer" href="google.com">
              <p>Telegram</p>
            </a>
          </li>
          <li className="cursor-pointer block md:hidden">
            <a
              target="_blank" rel="noreferrer"
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
              target="_blank" rel="noreferrer"
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
