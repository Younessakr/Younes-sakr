import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const languageFlags = {
  en: "🇺🇸",
  fr: "🇫🇷",
  de: "🇩🇪"
};

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentFlag = languageFlags[i18n.language as keyof typeof languageFlags] || languageFlags.en;
  const currentLang = i18n.language.toUpperCase();

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
      >
        <span className="text-lg">{currentFlag}</span>
        <span className="font-medium text-gray-700">{currentLang}</span>
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40"
            onClick={handleClickOutside}
          />
          <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg py-1 z-50">
            {Object.entries(languageFlags).map(([lang, flag]) => (
              <button
                key={lang}
                onClick={() => {
                  i18n.changeLanguage(lang);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                  i18n.language === lang ? 'bg-primary-50 text-primary-700' : 'text-gray-700'
                }`}
              >
                <span className="text-lg">{flag}</span>
                <span className="font-medium">{lang.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};