import { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'footer'])),
    },
  };
}

const CheckIcons = () => {
  return (
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
  );
};

const ErrorIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4 text-red-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

const Toggle = ({ trueOrFalse, no, yes }) => {
  const [enabled, setEnabled] = useState(trueOrFalse);

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <div className="flex">
        <label class="inline-flex relative items-center mr-5 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={enabled}
            readOnly
          />
          <div
            onClick={() => {
              setEnabled(!enabled);
            }}
            className="w-12 h-7 bg-gray-200 rounded-full peer peer-focus:ring-black peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-black"
          ></div>
          <div className="flex items-center">
            <span className="ml-2 text-base md:text-lg">
              {enabled ? `${yes}` : `${no}`}
            </span>
            {enabled ? <CheckIcons /> : <ErrorIcon />}
          </div>
        </label>
      </div>
    </div>
  );
};

const CheckBox = (props) => {
  return (
    <input
      id="default-checkbox"
      type="checkbox"
      value=""
      className="w-5 h-5 accent-black"
    />
  );
};

const price = () => {
  return (
    <div className="container mx-auto mt-[4.5rem] md:mt-20">
      <div className="flex items-center space-x-2 pt-2">
        <Link href="/">
          <a>Home</a>
        </Link>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 mt-1 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <h3 className="text-[#006B98]">Price</h3>
      </div>
      <div className="">
        <div className="flex flex-nowrap items-center overflow-x-scroll justify-between py-3 px-4 md:py-3 md:px-6 rounded-xl shadow-md my-3 md:my-5">
          <div className="pr-10 lg:pr-20 whitespace-nowrap">
            <p className="text-xs md:text-sm text-gray-500 whitespace-nowrap">
              Sayt Turi
            </p>
            <div className="flex items-center space-x-1">
              <h3 className="text-base md:text-xl">Landing Page</h3>
              <CheckIcons />
            </div>
          </div>
          <div className="pr-10 lg:pr-20 whitespace-nowrap">
            <p className="text-xs md:text-sm text-gray-500">Sahifalar Soni</p>
            <div className="flex items-center space-x-1">
              <h3 className="text-base md:text-xl">1-5 Tagacha</h3>
              <CheckIcons />
            </div>
          </div>
          <div className="pr-10 lg:pr-20 whitespace-nowrap">
            <p className="text-xs md:text-sm text-gray-500">Dizayn Darajasi</p>
            <div className="flex items-center space-x-1">
              <h3 className="text-base md:text-xl">Oddiy</h3>
              <CheckIcons />
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
              <CheckIcons />
            </div>
          </div>
          <div className="pr-10 lg:pr-20 whitespace-nowrap">
            <p className="text-xs md:text-sm text-gray-500">Umumiy Chegirma</p>
            <h3 className="text-base md:text-xl">
              22.000 <span>so&apos;m</span>{' '}
              <span className="bg-green-100 px-2 py-0.5 rounded-full text-xs md:text-sm text-green-500">
                -12%
              </span>
            </h3>
          </div>
          <div className="pr-10 lg:pr-20 whitespace-nowrap">
            <p className="text-xs md:text-sm text-gray-500">Umumiy summa</p>
            <h3 className="text-base md:text-xl">
              1.233.000 <span>so&apos;m</span>
            </h3>
          </div>
        </div>
        <div>
          <h3 className="text-lg md:text-2xl">Narxlarni Hisoblash</h3>
        </div>
        <div className="py-3 px-4 md:py-3 md:px-6 rounded-xl shadow-md my-3 md:my-5">
          <div className="flex items-center justify-between my-2 md:my-4">
            <h1 className="text-base md:text-lg">Sayt Turi:</h1>
            <div className="relative w-36 md:w-40 lg:w-44">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-5 h-5 my-auto text-black right-2.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
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
          <div className="flex items-center justify-between my-2 md:my-4">
            <h1 className="text-base md:text-lg">Sahifalr Soni:</h1>
            <div className="relative w-36 md:w-40 lg:w-44">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-5 h-5 my-auto text-black right-2.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <select className="w-full p-2 text-black bg-white text-sm md:text-base border border-black rounded-md shadow-sm outline-none appearance-none focus:border-black">
                <option className="py-1 hover:bg-neutral-200">
                  1-5 Tagacha
                </option>
                <option className="py-1 hover:bg-neutral-200">
                  5-15 Tagacha
                </option>
                <option className="py-1 hover:bg-neutral-200">
                  15-35 Tagacha
                </option>
                <option className="py-1 hover:bg-neutral-200">
                  35-ထ Tagacha
                </option>
              </select>
            </div>
          </div>
          <div className="flex items-center justify-between my-2 md:my-4">
            <h1 className="text-base md:text-lg">Dizayn Darajasi:</h1>
            <div className="relative w-36 md:w-40 lg:w-44">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-5 h-5 my-auto text-black right-2.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <select className="w-full p-2 text-black bg-white text-sm md:text-base border border-black rounded-md shadow-sm outline-none appearance-none focus:border-black">
                <option className="py-1 hover:bg-neutral-200">Oddiy</option>
                <option className="py-1 hover:bg-neutral-200">
                  O&apos;rtacha
                </option>
                <option className="py-1 hover:bg-neutral-200">Maxsus</option>
              </select>
            </div>
          </div>
          <div className="flex items-center justify-between my-2 md:my-4">
            <h1 className="text-base md:text-lg">Saytning Mobil Shakli:</h1>
            <div className="flex items-center justify-center space-x-3 w-36 md:w-40 lg:w-44">
              <Toggle trueOrFalse={true} no="Yo'q" yes="Bor" />
            </div>
          </div>
          <div className="flex items-center justify-between my-2 md:my-4">
            <h1 className="text-base md:text-lg">Tungi rejim:</h1>
            <div className="flex items-center justify-center space-x-3 w-36 md:w-40 lg:w-44">
              <Toggle trueOrFalse={false} no="Yo'q" yes="Bor" />
            </div>
          </div>
          <div className="flex items-center justify-between my-2 md:my-4">
            <h1 className="text-base md:text-lg">Tillar soni:</h1>
            <div className="flex flex-col space-y-2 space-x-0 md:flex-row md:space-y-0 md:space-x-2">
              <button className="flex items-center space-x-2 px-3 py-1 border border-black rounded-full">
                <span className="text-black"> O`zbekcha</span>
                <CheckIcons />
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
          <div className="flex items-center justify-between my-2 md:my-4">
            <h1 className="text-base md:text-lg">Matlarni Kiritish:</h1>
            <div className="flex items-center justify-center space-x-3 w-36 md:w-40 lg:w-44">
              <Toggle trueOrFalse={false} no="Yo'q" yes="Bor" />
            </div>
          </div>
          <div className="flex items-center justify-between my-2 md:my-4">
            <h1 className="text-base md:text-lg">Seo Hizmati:</h1>
            <div className="flex items-center justify-center space-x-3 w-36 md:w-40 lg:w-44">
              <Toggle trueOrFalse={false} no="Yo'q" yes="Bor" />
            </div>
          </div>
          <div className="flex items-center justify-between my-2 md:my-4">
            <h1 className="text-base md:text-lg">Bepul Domain:</h1>
            <div className="flex items-center justify-center space-x-3 w-36 md:w-40 lg:w-44">
              <Toggle trueOrFalse={true} no="Yo'q" yes="Bor" />
            </div>
          </div>
          <div className="flex items-center justify-between my-2 md:my-4">
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
          <div className="flex justify-end my-2 md:my-4">
            <button
              className="mt-4 cursor-pointer rounded-lg bg-black py-3 px-8
            text-xs md:text-sm font-medium text-white shadow-md
            duration-300 ease-in-out active:scale-95 active:bg-opacity-80"
            >
              Hisoblash
            </button>
          </div>
          <hr />
          <div className="flex items-center justify-between my-2 md:mb-4 mt-10">
            <h3 className="text-base md:text-lg">Umumiy Chegirma:</h3>
            <h3 className="text-base md:text-xl">
              22.000 <span>so&apos;m</span>{' '}
              <span className="bg-green-100 px-2 py-0.5 rounded-full text-xs md:text-sm text-green-500">
                -12%
              </span>
            </h3>
          </div>
          <div className="flex items-center justify-between my-2 md:mb-4">
            <h3 className="text-base md:text-lg">Umumiy Summa:</h3>
            <h3 className="text-base md:text-xl">
              1.233.000 <span>so&apos;m</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default price;
