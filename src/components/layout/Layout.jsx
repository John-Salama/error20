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

    // Apply appropriate font classes for each language with focus on mobile compatibility
    if (language === "ar") {
      document.documentElement.classList.add("font-arabic");
      document.documentElement.classList.remove("font-latin");

      // Force browser to refresh the text rendering for better font display on mobiles
      document.body.style.webkitFontSmoothing = "antialiased";
      setTimeout(() => {
        document.body.style.webkitFontSmoothing = "subpixel-antialiased";
        setTimeout(() => {
          document.body.style.webkitFontSmoothing = "antialiased";
        }, 10);
      }, 10);
    } else {
      document.documentElement.classList.add("font-latin");
      document.documentElement.classList.remove("font-arabic");

      // Same refresh trick for Latin fonts
      document.body.style.webkitFontSmoothing = "antialiased";
      setTimeout(() => {
        document.body.style.webkitFontSmoothing = "subpixel-antialiased";
        setTimeout(() => {
          document.body.style.webkitFontSmoothing = "antialiased";
        }, 10);
      }, 10);
    }

    // Add mobile specific optimization
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      document.documentElement.classList.add("text-size-adjust");
    } else {
      document.documentElement.classList.remove("text-size-adjust");
    }
  }, [language]);

  return (
    <div
      className={`bg-purple-50 text-gray-900 ${
        language === "ar" ? "font-arabic" : "font-latin"
      }`}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
