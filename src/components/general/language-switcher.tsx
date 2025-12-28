'use client';

import { useLanguage } from "@/app/language-context";


const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <div
      className="relative inline-flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1 cursor-pointer select-none w-20 h-8"
      onClick={toggleLanguage}
    >
      <div
        className={`absolute top-0 left-0 w-10 h-8 bg-white dark:bg-gray-800 rounded-full shadow-md transform transition-transform duration-300 ${
          language === 'fr' ? 'translate-x-full' : 'translate-x-0'
        }`}
      />

      <span className={`relative z-10 w-1/2 text-center text-sm font-medium ${
        language === 'en' ? 'text-black dark:text-white' : 'text-gray-400'
      }`}>
        EN
      </span>

      <span className={`relative z-10 w-1/2 text-center text-sm font-medium ${
        language === 'fr' ? 'text-black dark:text-white' : 'text-gray-400'
      }`}>
        FR
      </span>
    </div>
  );
};

export default LanguageSwitcher;
