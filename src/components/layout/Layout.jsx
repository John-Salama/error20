import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLanguage } from "../../context/useLanguage";

const Layout = ({ children }) => {
  const { language } = useLanguage();

  // Update the HTML document language and direction attributes when language changes
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    // Add appropriate font classes for each language
    if (language === "ar") {
      document.documentElement.classList.add("font-arabic");
      document.documentElement.classList.remove("font-latin");
    } else {
      document.documentElement.classList.add("font-latin");
      document.documentElement.classList.remove("font-arabic");
    }
  }, [language]);

  return (
    <div
      className={`bg-purple-50 text-gray-900 ${
        language === "ar" ? "font-arabic" : "font-inter"
      }`}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
