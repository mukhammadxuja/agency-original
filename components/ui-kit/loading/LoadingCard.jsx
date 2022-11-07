import React from 'react';

const LoadingCard = () => {
  return (
    <div className="w-[100%] md:w-[23rem] h-[25rem] relative mx-auto md:ml-0">
      <div className="w-full h-full rounded-xl bg-slate-300 dark:bg-slate-700 animate-pulse" />
      <span className="absolute top-2 right-2 w-12 h-12 flex items-center justify-center text-lg p-2 animate-pulse rounded-full bg-slate-400 dark:bg-slate-800"></span>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[60%] h-12 flex items-center space-x-3 text-lg p-2 rounded-full bg-slate-400 dark:bg-slate-800">
        <div className="w-10 h-10 rounded-full object-cover bg-slate-300 dark:bg-slate-700 animate-pulse" />
        <p className="text-xs md:text-sm text-gray-400"></p>
      </div>
      <div className="space-y-2 mt-2">
        <div className="animate-pulse bg-slate-300 dark:bg-slate-700  w-full h-6 rounded-full"></div>
        <div className="animate-pulse bg-slate-300 dark:bg-slate-700  w-full h-12 rounded-full"></div>
      </div>
    </div>
  );
};

export default LoadingCard;
