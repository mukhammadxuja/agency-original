import React from 'react';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import {
  Breadcrumb,
  CheckIcon,
  ErrorIcon,
  Toggle,
  Tooltip,
  ArrowBottom,
} from '../../components';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'footer'])),
    },
  };
}

const Calculate = () => {
  const [activeDialog, setActiveDialog] = React.useState(false);

  const dialog = () => {
    setActiveDialog(true);
  };

  const CloseDialog = () => {
    setActiveDialog(false);
  };
  return (
    <div className="container mx-auto">
      <Breadcrumb page="Price" link="/price" page2="Calculated" active />
      <div className="relative flex flex-nowrap items-center overflow-x-scroll scrollbar-default justify-between py-3 px-4 md:py-3 md:px-6 rounded-xl shadow-md my-3 md:my-5">
        <div className="pr-10 lg:pr-20 whitespace-nowrap">
          <p className="text-xs md:text-sm text-gray-500 whitespace-nowrap">
            Sayt Turi
          </p>
          <div className="flex items-center space-x-1">
            <h3 className="text-base md:text-xl">Landing Page</h3>
            <CheckIcon />
          </div>
        </div>
        <div className="pr-10 lg:pr-20 whitespace-nowrap">
          <p className="text-xs md:text-sm text-gray-500">Sahifalar Soni</p>
          <div className="flex items-center space-x-1">
            <h3 className="text-base md:text-xl">1-5 Tagacha</h3>
            <CheckIcon />
          </div>
        </div>
        <div className="pr-10 lg:pr-20 whitespace-nowrap">
          <p className="text-xs md:text-sm text-gray-500">Sayt Dizayni</p>
          <div className="flex items-center space-x-1">
            <h3 className="text-base md:text-xl">Shablon</h3>
            <CheckIcon />
          </div>
        </div>
        <div className="pr-10 lg:pr-20 whitespace-nowrap">
          <p className="text-xs md:text-sm text-gray-500 whitespace-nowrap">
            Qo&apos;cha Imkoniyatlar
          </p>
          <div className="flex items-center space-x-2">
            <span className="flex items-center space-x-1 text-base md:text-xl whitespace-nowrap">
              <h3>Responsive</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </span>
            {/* <span className="flex items-center space-x-1 text-base md:text-xl whitespace-nowrap">
                <h3>Dark Mode</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </span>
              <span className="flex items-center space-x-1 text-base md:text-xl whitespace-nowrap">
                <h3>Language</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </span> */}
          </div>
        </div>
        <div className="pr-10 lg:pr-20 whitespace-nowrap">
          <p className="text-xs md:text-sm text-gray-500">Matn yozish</p>
          <div className="flex items-center space-x-1">
            <h3 className="text-base md:text-xl">Yo&apos;q</h3>
            <ErrorIcon />
          </div>
        </div>
        <div className="pr-10 lg:pr-20 whitespace-nowrap">
          <p className="text-xs md:text-sm text-gray-500">SEO Xizmat</p>
          <div className="flex items-center space-x-1">
            <h3 className="text-base md:text-xl">Bor</h3>
            <CheckIcon />
          </div>
        </div>
        <div className="pr-10 lg:pr-20 whitespace-nowrap">
          <p className="text-xs md:text-sm text-gray-500">Umumiy Chegirma</p>
          <h3 className="text-base md:text-xl">
            2.7<span>$</span>
            <span className="bg-green-100 px-2 py-0.5 rounded-full text-xs md:text-sm text-green-500">
              -12%
            </span>
          </h3>
        </div>
        <div className="pr-10 lg:pr-20 whitespace-nowrap">
          <p className="text-xs md:text-sm text-gray-500">Umumiy summa</p>
          <h3 className="text-base md:text-xl">
            145<span>$</span> 😀
          </h3>
        </div>
      </div>
      <div className="flex items-center justify-between my-5">
        <h3 className="text-lg md:text-2xl">Narxlarni Hisoblash</h3>
        <Link href="/about-sites">
          <div className="flex items-center space-x-1 cursor-pointer group">
            <p>Saytlar haqida</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 group-hover:ml-2 transition-all duration-150 ease-in-ou"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
        <div>
          <ul className="space-y-2">
            <li onClick={dialog}>
              <input
                type="radio"
                id="Price-one"
                name="hosting"
                value="Price-one"
                className="hidden peer"
                required=""
              />
              <label
                htmlFor="Price-one"
                className="inline-flex justify-between items-center p-5 w-full text-black bg-white rounded-lg border-2 border-neutral-400 cursor-pointer dark:hover:text-neutral-300 dark:border-neutral-700 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-black hover:bg-neutral-50 dark:text-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <div className="block">
                  <div className="w-full text-lg md:text-xl">
                    Express Website
                    <span className="w-fit ml-1 text-xs md:text-sm px-2 py-0 rounded-full bg-green-200 text-green-500">
                      -2%
                    </span>
                  </div>
                </div>
                <h3 className="text-lg md:text-2xl">$145</h3>
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="Price-two"
                name="hosting"
                value="Price-two"
                className="hidden peer"
                required=""
              />
              <label
                htmlFor="Price-two"
                className="inline-flex justify-between items-center p-5 w-full text-black bg-white rounded-lg border-2 border-neutral-400 cursor-pointer dark:hover:text-neutral-300 dark:border-neutral-700 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-black hover:bg-neutral-50 dark:text-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <div className="block">
                  <div className="w-full text-lg md:text-xl">
                    Sayt vizitka
                    <span className="w-fit ml-1 text-xs md:text-sm px-2 py-0 rounded-full bg-green-200 text-green-500">
                      -2%
                    </span>
                  </div>
                </div>
                <h3 className="text-lg md:text-2xl">$200</h3>
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="Price-three"
                name="hosting"
                value="Price-three"
                className="hidden peer"
                required=""
              />
              <label
                htmlFor="Price-three"
                className="inline-flex justify-between items-center p-5 w-full text-black bg-white rounded-lg border-2 border-neutral-400 cursor-pointer dark:hover:text-neutral-300 dark:border-neutral-700 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-black hover:bg-neutral-50 dark:text-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <div className="block">
                  <div className="w-full text-lg md:text-xl">
                    Landing sahifa
                    <span className="w-fit ml-1 text-xs md:text-sm px-2 py-0 rounded-full bg-green-200 text-green-500">
                      -2%
                    </span>
                  </div>
                </div>
                <h3 className="text-lg md:text-2xl">$250</h3>
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="Price-four"
                name="hosting"
                value="Price-four"
                className="hidden peer"
                required=""
              />
              <label
                htmlFor="Price-four"
                className="inline-flex justify-between items-center p-5 w-full text-black bg-white rounded-lg border-2 border-neutral-400 cursor-pointer dark:hover:text-neutral-300 dark:border-neutral-700 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-black hover:bg-neutral-50 dark:text-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <div className="block">
                  <div className="w-full text-lg md:text-xl">
                    Kichik biznes
                    <span className="w-fit ml-1 text-xs md:text-sm px-2 py-0 rounded-full bg-green-200 text-green-500">
                      -2%
                    </span>
                  </div>
                </div>
                <h3 className="text-lg md:text-2xl">$412</h3>
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="Price-five"
                name="hosting"
                value="Price-five"
                className="hidden peer"
                required=""
              />
              <label
                htmlFor="Price-five"
                className="inline-flex justify-between items-center p-5 w-full text-black bg-white rounded-lg border-2 border-neutral-400 cursor-pointer dark:hover:text-neutral-300 dark:border-neutral-700 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-black hover:bg-neutral-50 dark:text-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <div className="block">
                  <div className="w-full text-lg md:text-xl">
                    Sayt katalog
                    <span className="w-fit ml-1 text-xs md:text-sm px-2 py-0 rounded-full bg-green-200 text-green-500">
                      -2%
                    </span>
                  </div>
                </div>
                <h3 className="text-lg md:text-2xl">$445</h3>
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="Price-six"
                name="hosting"
                value="Price-six"
                className="hidden peer"
                required=""
              />
              <label
                htmlFor="Price-six"
                className="inline-flex justify-between items-center p-5 w-full text-black bg-white rounded-lg border-2 border-neutral-400 cursor-pointer dark:hover:text-neutral-300 dark:border-neutral-700 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-black hover:bg-neutral-50 dark:text-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <div className="block">
                  <div className="w-full text-lg md:text-xl">
                    Online do`kon va Korporativ sayt
                    <span className="w-fit ml-1 text-xs md:text-sm px-2 py-0 rounded-full bg-green-200 text-green-500">
                      -2%
                    </span>
                  </div>
                </div>
                <h3 className="text-lg md:text-2xl">$999</h3>
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="Price-seven"
                name="hosting"
                value="Price-seven"
                className="hidden peer"
                required=""
              />
              <label
                htmlFor="Price-seven"
                className="inline-flex justify-between items-center p-5 w-full text-black bg-white rounded-lg border-2 border-neutral-400 cursor-pointer dark:hover:text-neutral-300 dark:border-neutral-700 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-black hover:bg-neutral-50 dark:text-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <div className="block">
                  <div className="w-full text-lg md:text-xl">
                    Korporativ sayt
                    <span className="w-fit ml-1 text-xs md:text-sm px-2 py-0 rounded-full bg-green-200 text-green-500">
                      -2%
                    </span>
                  </div>
                </div>
                <h3 className="text-lg md:text-2xl">$999</h3>
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="Price-eight"
                name="hosting"
                value="Price-eight"
                className="hidden peer"
                required=""
              />
              <label
                htmlFor="Price-eight"
                className="inline-flex justify-between items-center p-5 w-full text-black bg-white rounded-lg border-2 border-neutral-400 cursor-pointer dark:hover:text-neutral-300 dark:border-neutral-700 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-black hover:bg-neutral-50 dark:text-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <div className="block">
                  <div className="w-full text-lg md:text-xl">
                    3D noyob sayt
                    <span className="w-fit ml-1 text-xs md:text-sm px-2 py-0 rounded-full bg-green-200 text-green-500">
                      -2%
                    </span>
                  </div>
                </div>
                <h3 className="text-lg md:text-2xl">$2.500</h3>
              </label>
            </li>
          </ul>
        </div>
        <div
          className={
            activeDialog
              ? 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 right-0 bottom-0 w-[90%] h-[80%] bg-white shadow-2xl rounded-xl p-3'
              : 'hidden md:block rounded-xl shadow-md'
          }
        >
          <div
            onClick={CloseDialog}
            className="absolute -top-1 -right-1 hover:top-0 hover:right-0 p-1.5 rounded-lg bg-white shadow-lg cursor-pointer duration-200"
          >
            <ErrorIcon />
          </div>
          <div className="p-2 md:p-6 lg:p-8 space-y-2">
            <div className="flex items-center justify-between border-b">
              <h5 className="text-lg md:text-base lg:text-lg">- Sayt Turi:</h5>
              <div className="flex items-center space-x-1 md:space-x-2">
                <h6 className="text-base">Express sayt</h6>
                <CheckIcon />
              </div>
            </div>
            <div className="flex items-center justify-between border-b">
              <h5 className="text-lg md:text-base lg:text-lg">
                - Sahifalr soni
              </h5>
              <div className="flex items-center space-x-1 md:space-x-2">
                <h6 className="text-base">1-5</h6>
                <CheckIcon />
              </div>
            </div>
            <div className="flex items-center justify-between border-b">
              <h5 className="text-lg md:text-base lg:text-lg">
                - Sayt dizayni:
              </h5>
              <div className="flex items-center space-x-1 md:space-x-2">
                <h6 className="text-base">Shablon</h6>
                <CheckIcon />
              </div>
            </div>
            <div className="flex items-center justify-between border-b">
              <h5 className="text-lg md:text-base lg:text-lg">
                - Saytning Mobil Shakli:
              </h5>
              <div className="flex items-center space-x-1 md:space-x-2">
                <h6 className="text-base">Bor</h6>
                <CheckIcon />
              </div>
            </div>
            <div className="flex items-center justify-between border-b">
              <h5 className="text-lg md:text-base lg:text-lg">
                - Tungi rejim:
              </h5>
              <div className="flex items-center space-x-1 md:space-x-2">
                <h6 className="text-base">Yo&lsquo;q</h6>
                <ErrorIcon />
              </div>
            </div>
            <div className="flex items-center justify-between border-b">
              <h5 className="text-lg md:text-base lg:text-lg">
                - Online obuna tizimi:
              </h5>
              <div className="flex items-center space-x-1 md:space-x-2">
                <h6 className="text-base">Yo&lsquo;q</h6>
                <ErrorIcon />
              </div>
            </div>
            <div className="flex items-center justify-between border-b">
              <h5 className="text-lg md:text-base lg:text-lg">
                - Reklama joylari:
              </h5>
              <div className="flex items-center space-x-1 md:space-x-2">
                <h6 className="text-base">Yo&lsquo;q</h6>
                <ErrorIcon />
              </div>
            </div>
            <div className="flex items-center justify-between border-b">
              <h5 className="text-lg md:text-base lg:text-lg">
                - Pullik obuna:
              </h5>
              <div className="flex items-center space-x-1 md:space-x-2">
                <h6 className="text-base">Yo&lsquo;q</h6>
                <ErrorIcon />
              </div>
            </div>
            <div className="flex items-center justify-between border-b">
              <h5 className="text-lg md:text-base lg:text-lg">
                - Ro‘yxatdan o‘tish qismi:
              </h5>
              <div className="flex items-center space-x-1 md:space-x-2">
                <h6 className="text-base">Yo&lsquo;q</h6>
                <ErrorIcon />
              </div>
            </div>
            <div className="flex items-center justify-between border-b">
              <h5 className="text-lg md:text-base lg:text-lg">
                - Matlarni Kiritish:
              </h5>
              <div className="flex items-center space-x-1 md:space-x-2">
                <h6 className="text-base">Yo&lsquo;q</h6>
                <ErrorIcon />
              </div>
            </div>
            <div className="flex items-center justify-between border-b">
              <h5 className="text-lg md:text-base lg:text-lg">
                - Tashqi API integratsiyasi :
              </h5>
              <div className="flex items-center space-x-1 md:space-x-2">
                <h6 className="text-base">Yo&lsquo;q</h6>
                <ErrorIcon />
              </div>
            </div>
            <div className="flex items-center justify-between border-b">
              <h5 className="text-lg md:text-base lg:text-lg">
                - SEO Hizmati:
              </h5>
              <div className="flex items-center space-x-1 md:space-x-2">
                <h6 className="text-base">Yo&lsquo;q</h6>
                <ErrorIcon />
              </div>
            </div>
            <div className="flex items-center justify-between border-b">
              <h5 className="text-lg md:text-base lg:text-lg">
                - Tillar soni:
              </h5>
              <div className="flex items-center space-x-1 md:space-x-2">
                <h6 className="text-base">O&lsquo;zbek</h6>
                <CheckIcon />
              </div>
            </div>
            <div className="flex items-center justify-between border-b">
              <h5 className="text-lg md:text-base lg:text-lg">
                - Bepul Domain:
              </h5>
              <div className="flex items-center space-x-1 md:space-x-2">
                <h6 className="text-base">Bor</h6>
                <CheckIcon />
              </div>
            </div>
            <div className="flex items-center justify-between border-b">
              <h5 className="text-lg md:text-base lg:text-lg">- Brending:</h5>
              <div className="flex items-center space-x-1 md:space-x-2">
                <h6 className="text-base">Yo‘q</h6>
                <ErrorIcon />
              </div>
            </div>
            <div className="flex items-center justify-between border-b">
              <h5 className="text-lg md:text-base lg:text-lg">
                - 3D va animatsiya:
              </h5>
              <div className="flex items-center space-x-1 md:space-x-2">
                <h6 className="text-base">Yo‘q</h6>
                <ErrorIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 px-4 md:py-3 md:px-6 rounded-md shadow-md my-3 md:my-5">
        <div className="flex items-center justify-between my-2 md:my-4 pb-1 border-b">
          <div className="flex items-center space-x-1">
            <h1 className="text-base md:text-lg">Sayt Turi:</h1>
            <Tooltip desc="Saytlar haqida bilmoqchi bo`lsangiz, pastda saytlar haqida bo`limiga o`ting!" />
          </div>
          <div className="relative w-36 md:w-40 lg:w-44">
            <ArrowBottom />
            <select className="w-full p-2 text-black bg-white border text-sm md:text-base border-black rounded-md shadow-sm outline-none appearance-none focus:border-black">
              <option>Express Sayt</option>
              <option>Sayt Vizitka</option>
              <option>Landing Sahifa</option>
              <option>Kichik Biznes</option>
              <option>Sayt Katalog</option>
              <option>Onlayn Do`kon</option>
              <option>Korparativ Sayt</option>
              <option>Noyob Web Loyiha</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between my-2 md:my-4 pb-1 border-b">
          <h1 className="text-base md:text-lg">Sahifalr Soni:</h1>
          <div className="relative w-36 md:w-40 lg:w-44">
            <ArrowBottom />
            <select className="w-full p-2 text-black bg-white text-sm md:text-base border border-black rounded-md shadow-sm outline-none appearance-none focus:border-black">
              <option className="py-1 hover:bg-neutral-200">1-5</option>
              <option className="py-1 hover:bg-neutral-200">5-15</option>
              <option className="py-1 hover:bg-neutral-200">15-35</option>
              <option className="py-1 hover:bg-neutral-200">35+</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between my-2 md:my-4 pb-1 border-b">
          <h1 className="text-base md:text-lg">Sayt Dizayni:</h1>
          <div className="relative w-36 md:w-40 lg:w-44">
            <ArrowBottom />
            <select className="w-full p-2 text-black bg-white text-sm md:text-base border border-black rounded-md shadow-sm outline-none appearance-none focus:border-black">
              <option className="py-1 hover:bg-neutral-200">Shablon</option>
              <option className="py-1 hover:bg-neutral-200">Maxsus</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between my-2 md:my-4 pb-1 border-b">
          <h1 className="text-base md:text-lg">Saytning Mobil Shakli:</h1>
          <div className="flex items-center justify-center space-x-3 w-36 md:w-40 lg:w-44">
            <Toggle trueOrFalse={true} no="Yo'q" yes="Bor" />
          </div>
        </div>
        <div className="flex items-center justify-between my-2 md:my-4 pb-1 border-b">
          <h1 className="text-base md:text-lg">Tungi rejim:</h1>
          <div className="flex items-center justify-center space-x-3 w-36 md:w-40 lg:w-44">
            <Toggle trueOrFalse={false} no="Yo'q" yes="Bor" />
          </div>
        </div>
        <div className="flex items-center justify-between my-2 md:my-4 pb-1 border-b">
          <h1 className="text-base md:text-lg">
            Ro&lsquo;yxatdan o&lsquo;tish qismi:
          </h1>
          <div className="flex items-center justify-center space-x-3 w-36 md:w-40 lg:w-44">
            <Toggle trueOrFalse={false} no="Yo'q" yes="Bor" />
          </div>
        </div>
        <div className="flex items-center justify-between my-2 md:my-4 pb-1 border-b">
          <div className="flex items-center space-x-1">
            <h1 className="text-base md:text-lg">
              Tashqi API integratsiyasi :
            </h1>
            <Tooltip desc="" />
          </div>
          <div className="flex items-center justify-center space-x-3 w-36 md:w-40 lg:w-44">
            <Toggle trueOrFalse={false} no="Yo'q" yes="Bor" />
          </div>
        </div>
        <div className="flex items-center justify-between my-2 md:my-4 pb-1 border-b">
          <div className="flex items-center space-x-1">
            <h1 className="text-base md:text-lg">Tillar soni:</h1>
            <Tooltip desc="Saytingizga bir necha til qo`shiladi." />
          </div>
          <div className="flex flex-col space-y-2 space-x-0 md:flex-row md:space-y-0 md:space-x-2">
            <button className="flex items-center space-x-2 px-3 py-1 border border-black rounded-full">
              <span className="text-black"> O`zbekcha</span>
              <CheckIcon />
            </button>
            <button className="flex items-center space-x-2 px-3 py-1 border border-gray-400 rounded-full">
              <span className="text-gray-400">Ruscha</span>
              <ErrorIcon />
            </button>
            <button className="flex items-center space-x-2 px-3 py-1 border border-gray-400 rounded-full">
              <span className="text-gray-400">Inglizcha</span>
              <ErrorIcon />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between my-2 md:my-4 pb-1 border-b">
          <div className="flex items-center space-x-1">
            <h1 className="text-base md:text-lg">Matlarni Kiritish:</h1>
            <Tooltip desc="Sayt ichidagi matnlarni (copywriter) to`ldrib beradi." />
          </div>
          <div className="flex items-center justify-center space-x-3 w-36 md:w-40 lg:w-44">
            <Toggle trueOrFalse={false} no="Yo'q" yes="Bor" />
          </div>
        </div>
        <div className="flex items-center justify-between my-2 md:my-4 pb-1 border-b">
          <div className="flex items-center space-x-1">
            <h1 className="text-base md:text-lg">SEO Hizmati:</h1>
            <Tooltip desc="SEO bilan saytingiz Google qidiruv natijalarida ko`proq chiqadigan bo`ladi." />
          </div>
          <div className="flex items-center justify-center space-x-3 w-36 md:w-40 lg:w-44">
            <Toggle trueOrFalse={false} no="Yo'q" yes="Bor" />
          </div>
        </div>
        <div className="flex items-center justify-between my-2 md:my-4 pb-1 border-b">
          <h1 className="text-base md:text-lg">Bepul Domain:</h1>
          <div className="flex items-center justify-center space-x-3 w-36 md:w-40 lg:w-44">
            <Toggle trueOrFalse={true} no="Yo'q" yes="Bor" />
          </div>
        </div>
        <div className="flex items-center justify-between my-2 md:my-4 pb-1 border-b">
          <h1 className="text-base md:text-lg">Brending:</h1>
          <div className="flex flex-col space-y-2 space-x-0 md:flex-row md:space-y-0 md:space-x-2">
            <button className="flex items-center space-x-2 px-3 py-1 border border-gray-400 rounded-full">
              <span className="text-gray-400">Brendga Nom</span>
              <ErrorIcon />
            </button>
            <button className="flex items-center space-x-2 px-3 py-1 border border-gray-400 rounded-full">
              <span className="text-gray-400">Logo Yaratish</span>
              <ErrorIcon />
            </button>
            <button className="flex items-center space-x-2 px-3 py-1 border border-gray-400 rounded-full">
              <span className="text-gray-400">Brend Rang</span>
              <ErrorIcon />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between my-5">
          <div className="flex items-center space-x-1">
            <h5>Chegirma</h5>
            <Toggle trueOrFalse={false} no="Yo'q" yes="Bor" />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-black py-3 px-8
        text-xs md:text-sm font-medium text-white shadow-md
        duration-300 ease-in-out active:scale-95 active:bg-opacity-80"
          >
            Submit
          </button>
        </div>
        <hr />
        <div className="flex items-center justify-between my-2 md:mb-4 mt-10">
          <h3 className="text-base md:text-lg">Tayyorlash muddati:</h3>
          <h3 className="text-base md:text-xl">17-30 kun</h3>
        </div>
        <div className="flex items-center justify-between my-2 md:mb-4">
          <h3 className="text-base md:text-lg">Umumiy Chegirma:</h3>
          <h3 className="text-base md:text-xl">
            2.7 <span>$</span>{' '}
            <span className="bg-green-100 px-2 py-0.5 rounded-full text-xs md:text-sm text-green-500">
              -12%
            </span>
          </h3>
        </div>
        <div className="flex items-center justify-between my-2 md:mb-4">
          <h3 className="text-base md:text-lg">Umumiy Summa:</h3>
          <h3 className="text-base md:text-xl">
            145 <span>$</span>
          </h3>
        </div>
      </div>
      <div className="my-10 md:my-16 lg:my-20">
        <h2 className="text-lg md:text-2xl lg:text-3xl text-center my-5 md:my-10">
          Biz Bilan Bog`lanish
        </h2>
        <div className="flex items-center justify-center space-x-4">
          <input
            name="first_name"
            type="text"
            id="first_name"
            className="w-56 md:w-72 lg:w-96 bg-neutral-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-neutral-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="
            Telefon raqamingizni kiriting!"
            required
          />
          <button
            type="submit"
            className="rounded-lg bg-black py-3 px-8
        text-xs md:text-sm font-medium text-white shadow-md
        duration-300 ease-in-out active:scale-95 active:bg-opacity-80"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculate;
