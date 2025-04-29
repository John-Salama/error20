import React, { useState, useEffect } from "react";
import { LanguageContext } from "./LanguageContext";

// Language provider component
export const LanguageProvider = ({ children }) => {
  // Get initial language from localStorage or default to 'ar'
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage || "ar"; // Default to Arabic
  });

  // Preload appropriate fonts based on language
  const preloadFonts = (lang) => {
    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.type = "text/css";

    if (lang === "ar") {
      fontLink.href =
        "https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300;400;500;600;700&display=swap";
    } else {
      fontLink.href =
        "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
    }

    // Remove any existing preloaded font links to avoid duplication
    const existingLinks = document.head.querySelectorAll(
      'link[rel="stylesheet"][href*="fonts.googleapis.com"]'
    );
    existingLinks.forEach((link) => {
      if (link.href !== fontLink.href) {
        document.head.appendChild(fontLink);
      }
    });

    // If no existing links, just append
    if (existingLinks.length === 0) {
      document.head.appendChild(fontLink);
    }
  };

  // Update language in localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language);

    // Update document direction based on language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;

    // Preload fonts based on current language
    preloadFonts(language);
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
