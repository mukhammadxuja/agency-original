import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Breadcrumb, CheckIcon, ErrorIcon, Toggle } from '../../components';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'footer'])),
    },
  };
}

const calculated = () => {
  return (
    <div className="container mx-auto">
      <Breadcrumb page="Price" link="/price" page2="Calculated" active />
      <h3 className="text-lg md:text-2xl my-5">Oldindan hisoblangan saytlar</h3>
      <div className="grid grid-cols-2 gap-5 md:gap-8">
        <div className="rounded-xl shadow-md p-2 md:p-6 lg:p-8 space-y-2">
          <div className="flex items-center justify-between">
            <h5 className="text-lg md:text-base lg:text-lg">- Sayt Turi:</h5>
            <div className="flex items-center space-x-1 md:space-x-2">
              <h6 className="text-base">Express sayt</h6>
              <CheckIcon />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h5 className="text-lg md:text-base lg:text-lg">- Sahifalr soni</h5>
            <div className="flex items-center space-x-1 md:space-x-2">
              <h6 className="text-base">1-5</h6>
              <CheckIcon />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h5 className="text-lg md:text-base lg:text-lg">- Sayt dizayni:</h5>
            <div className="flex items-center space-x-1 md:space-x-2">
              <h6 className="text-base">Shablon</h6>
              <CheckIcon />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h5 className="text-lg md:text-base lg:text-lg">
              - Saytning Mobil Shakli:
            </h5>
            <div className="flex items-center space-x-1 md:space-x-2">
              <h6 className="text-base">Bor</h6>
              <CheckIcon />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h5 className="text-lg md:text-base lg:text-lg">- Tungi rejim:</h5>
            <div className="flex items-center space-x-1 md:space-x-2">
              <h6 className="text-base">Yo&lsquo;q</h6>
              <ErrorIcon />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h5 className="text-lg md:text-base lg:text-lg">
              - Ro‘yxatdan o‘tish qismi:
            </h5>
            <div className="flex items-center space-x-1 md:space-x-2">
              <h6 className="text-base">Yo&lsquo;q</h6>
              <ErrorIcon />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h5 className="text-lg md:text-base lg:text-lg">
              - Matlarni Kiritish:
            </h5>
            <div className="flex items-center space-x-1 md:space-x-2">
              <h6 className="text-base">Yo&lsquo;q</h6>
              <ErrorIcon />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h5 className="text-lg md:text-base lg:text-lg">
              - Tashqi API integratsiyasi :
            </h5>
            <div className="flex items-center space-x-1 md:space-x-2">
              <h6 className="text-base">Yo&lsquo;q</h6>
              <ErrorIcon />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h5 className="text-lg md:text-base lg:text-lg">- SEO Hizmati:</h5>
            <div className="flex items-center space-x-1 md:space-x-2">
              <h6 className="text-base">Yo&lsquo;q</h6>
              <ErrorIcon />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h5 className="text-lg md:text-base lg:text-lg">- Tillar soni:</h5>
            <div className="flex items-center space-x-1 md:space-x-2">
              <h6 className="text-base">O&lsquo;zbek</h6>
              <CheckIcon />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h5 className="text-lg md:text-base lg:text-lg">- Bepul Domain:</h5>
            <div className="flex items-center space-x-1 md:space-x-2">
              <h6 className="text-base">Bor</h6>
              <CheckIcon />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h5 className="text-lg md:text-base lg:text-lg">- Brending:</h5>
            <div className="flex items-center space-x-1 md:space-x-2">
              <h6 className="text-base">Yo‘q</h6>
              <ErrorIcon />
            </div>
          </div>
        </div>
        <div>
          <ul className="space-y-2">
            <li>
              <input
                type="radio"
                id="Price-one"
                name="hosting"
                value="Price-one"
                className="hidden peer"
                required=""
              />
              <label
                for="Price-one"
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
                for="Price-two"
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
                id="Price-three"
                name="hosting"
                value="Price-three"
                className="hidden peer"
                required=""
              />
              <label
                for="Price-three"
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
                id="Price-four"
                name="hosting"
                value="Price-four"
                className="hidden peer"
                required=""
              />
              <label
                for="Price-four"
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
                id="Price-five"
                name="hosting"
                value="Price-five"
                className="hidden peer"
                required=""
              />
              <label
                for="Price-five"
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
                id="Price-six"
                name="hosting"
                value="Price-six"
                className="hidden peer"
                required=""
              />
              <label
                for="Price-six"
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
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between my-5">
        <div className='flex items-center space-x-1'>
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
    </div>
  );
};

export default calculated;
