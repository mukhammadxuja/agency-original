import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { useTheme } from 'next-themes';

const DarkMode = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const { t } = useTranslation();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const renderChangeTheme = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <button
          onClick={() => setTheme('light')}
          className="mx-auto mt-4 cursor-pointer rounded-lg bg-white py-3 px-8
        text-xs md:text-sm font-medium text-black shadow-md
        duration-500 ease-in-out active:scale-95 active:bg-opacity-80"
        >
          {t('home:ligth_navbar')}
        </button>
      );
    } else {
      return (
        <button
          onClick={() => setTheme('dark')}
          className="mx-auto mt-4 cursor-pointer rounded-lg bg-black py-3 px-8
        text-xs md:text-sm font-medium text-white shadow-md
        duration-500 ease-in-out active:scale-95 active:bg-opacity-80"
        >
          {t('home:dark_navbar')}
        </button>
      );
    }
  };
  return <div className="ml-4 md:ml-6">{renderChangeTheme()}</div>;
};

export default DarkMode;
