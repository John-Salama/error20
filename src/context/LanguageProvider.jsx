import React, { useState, useEffect } from "react";
import { LanguageContext } from "./LanguageContext";

// Language provider component
export const LanguageProvider = ({ children }) => {
  // Get initial language from localStorage or default to 'ar'
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage || "ar"; // Default to Arabic
  });

  // Update language in localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language);
    // Update document direction based on language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  // Toggle between Arabic and English
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "ar" ? "en" : "ar"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
