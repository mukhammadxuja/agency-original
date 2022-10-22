import React from "react";

const Navbar = () => {
  const [language, setLanguage] = React.useState(false);

  const toggleLanguage = () => {
    setLanguage(!language);
  };
  return (
    <div className="container mx-auto flex items-center justify-between">
      <div>
        <img
          className="-ml-3 w-24 md:w-28 cursor-pointer block dark:hidden"
          src="/images/dotsoft-light.png"
          alt=""
        />
        <img
          className="-ml-3 w-24 md:w-28 cursor-pointer hidden dark:block"
          src="/images/dotsoft-dark.png"
          alt=""
        />
      </div>
      <ul className="mt-4 hidden items-center space-x-2 md:inline-flex md:space-x-5">
        <li className="cursor-pointer text-xl font-medium duration-300 hover:text-gray-600">
          About
        </li>
        <li className="cursor-pointer text-xl font-medium duration-300 hover:text-gray-600">
          Services
        </li>
        <li className="cursor-pointer text-xl font-medium duration-300 hover:text-gray-600">
          Works
        </li>
        <li className="cursor-pointer text-xl font-medium duration-300 hover:text-gray-600">
          Contact
        </li>
      </ul>
      <div>
        <button
          onClick={toggleLanguage}
          className="mx-auto mt-4 w-fit cursor-pointer rounded-lg border bg-black py-3 px-8
        text-sm font-medium text-white shadow-md
        duration-300 ease-in-out active:scale-95 active:bg-opacity-80"
        >
          {language ? "English" : "O`zbek"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
