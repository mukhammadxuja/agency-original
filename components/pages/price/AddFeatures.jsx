import React from 'react';

import { CheckIcon, ErrorIcon, Toggle, Tooltip, ArrowBottom } from '../../';

const AddFeatures = () => {
  return (
    <div className="py-3 px-4 md:py-3 md:px-6 rounded-md shadow-md my-3 md:my-5">
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
        <h1 className="text-base md:text-lg">Tungi rejim:</h1>
        <div className="flex items-center justify-center space-x-3 w-36 md:w-40 lg:w-44">
          <Toggle trueOrFalse={false} no="Yo'q" yes="Bor" />
        </div>
      </div>
      <div className="flex items-center justify-between my-2 md:my-4 pb-1 border-b">
        <div className="flex items-center space-x-1">
          <h1 className="text-base md:text-lg">Tashqi API integratsiyasi :</h1>
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
        <div className="flex items-center space-x-1">
          <h1 className="text-base md:text-lg">Bepul Domain:</h1>
          <Tooltip desc="Agar o`zingizni domainingiz bo`lsa, buni o`chirsangiz umimiy narxdan domain narx olib tashlanadi." />
        </div>
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
          <div className="flex items-center space-x-1">
            <h1 className="text-sm">Chegirma:</h1>
            <Tooltip desc="Maxsus topshiriqni yechish orqali chegirmaga ega bo`ling." />
          </div>
          <Toggle trueOrFalse={false} no="Yo'q" yes="Bor" />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-black py-3 px-8
        text-xs md:text-sm font-medium text-white shadow-md
        duration-400 ease-in-out active:scale-95 active:bg-opacity-80"
        >
          Hisoblash
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
  );
};

export default AddFeatures;
