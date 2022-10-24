import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto flex items-center py-10 lg:py-16">
      <div className="mx-auto space-x-4">
        <div className="flex items-center justify-center space-x-2 py-8">
          <h3 className="text-2xl md:text-4xl xl:text-5xl text-center text-black dark:text-white">
            Let&apos;s connect
          </h3>
        </div>
        <div className="flex items-center space-x-4 py-2 px-4 lg:py-6 xl:pt-10">
          <div className="w-56 sm:w-64 md:w-96 bg-white rounded-lg border-2">
            <input
              className="bg-transparent rounded-lg focus:outline focus:outline-[#3393bc] focus:outline-2 w-full p-3 truncate"
              type="email"
              placeholder="Type your email address"
            />
          </div>
          <div>
            <button
              className="mx-auto cursor-pointer rounded-lg bg-black py-4 px-8
            text-xs md:text-sm font-medium text-white shadow-md
            duration-300 ease-in-out active:scale-95 active:bg-opacity-80"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
