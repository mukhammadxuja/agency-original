import React from 'react';

const PriceContact = () => {
  return (
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
        duration-400 ease-in-out active:scale-95 active:bg-opacity-80"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PriceContact;
