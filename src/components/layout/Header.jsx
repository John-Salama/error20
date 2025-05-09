import React, { useState, useEffect, useCallback } from "react";
// eslint-disable-next-line
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import logoImage from "../../data/thumbnail/logo.png";
import { useLanguage } from "../../context/useLanguage";
import { translations } from "../../translations";

// Extracting static variants outside component to prevent recreation
const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
  hover: {
    scale: 1.1,
    color: "#7e22ce", // Purple-700 in hex
    transition: { duration: 0.2 },
  },
};

const logoVariants = {
  normal: { scale: 1 },
  hover: {
    scale: 1.1,
    rotate: [0, -5, 5, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  // Array of nav links with translations
  const translatedNavLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.milestones, href: "#milestones" },
    { name: t.nav.testimonials, href: "#testimonials" },
    { name: t.nav.resources, href: "#resources" },
    { name: t.nav.videos, href: "#videos" },
    { name: t.nav.workshops, href: "#workshops" },
    { name: t.nav.quiz, href: "#quiz" },
  ];

  // Optimized scroll handler with useCallback
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);

    // Track active section based on scroll position
    const sections = translatedNavLinks.map((link) => link.href.substring(1));
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveLink(section);
          break;
        }
      }
    }
  }, [translatedNavLinks]);

  // Handle scroll for navbar appearance and active section tracking
  useEffect(() => {
    // Use passive listener to improve performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Toggle nav function
  const toggleNav = useCallback(() => {
    setIsNavOpen((prev) => !prev);
  }, []);

  // Close nav when a mobile nav link is clicked
  const handleMobileNavClick = useCallback(() => {
    setIsNavOpen(false);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-2 backdrop-blur-lg bg-white/70 shadow-lg"
          : "py-4 bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#home"
          className="text-2xl font-bold text-purple-700 flex items-center"
          variants={logoVariants}
          whileHover="hover"
          initial="normal"
        >
          <img
            src={logoImage}
            alt="Error 20 Logo"
            className={language === "ar" ? "h-20 mr-2" : "h-20 ml-2"}
          />
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex gap-1 mx-8">
            {translatedNavLinks.map((link, index) => (
              <motion.li
                key={link.name}
                custom={index}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.a
                  href={link.href}
                  className={`relative px-4 py-2 font-medium rounded-lg transition-colors ${
                    activeLink === link.href.substring(1)
                      ? "text-purple-700"
                      : "text-gray-700 hover:text-purple-700"
                  }`}
                  whileHover="hover"
                >
                  {link.name}
                  {activeLink === link.href.substring(1) && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-purple-500 rounded-t-full"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.a>
              </motion.li>
            ))}
          </ul>

          {/* Language Toggle Button */}
          <motion.button
            onClick={toggleLanguage}
            className="px-3 py-2 mx-2 rounded-lg bg-purple-100 text-purple-700 flex items-center hover:bg-purple-200 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={t.language.toggle}
          >
            <Globe className="w-4 h-4 mr-1" />
            <span className="text-sm font-medium">
              {language === "ar" ? "EN" : "عربي"}
            </span>
          </motion.button>

          <motion.a
            href="#contact"
            className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:shadow-lg hover:shadow-purple-300 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {t.nav.contact}
          </motion.a>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center gap-2">
          {/* Language Toggle Button (Mobile) */}
          <motion.button
            onClick={toggleLanguage}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md border border-purple-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={t.language.toggle}
          >
            <Globe className="w-5 h-5 text-purple-700" />
          </motion.button>

          {/* Menu Toggle Button */}
          <motion.button
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md border border-purple-100"
            onClick={toggleNav}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isNavOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isNavOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                {isNavOpen ? (
                  <X className="w-5 h-5 text-purple-700" />
                ) : (
                  <Menu className="w-5 h-5 text-purple-700" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-[60px] z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={handleMobileNavClick}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className={`absolute top-0 ${
                language === "ar" ? "left-0" : "right-0"
              } w-4/5 h-screen bg-white shadow-2xl`}
              initial={{ x: language === "ar" ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: language === "ar" ? "-100%" : "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div
                className={`p-6 overflow-y-auto h-full flex flex-col text-${
                  language === "ar" ? "right" : "left"
                }`}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <img
                      src={logoImage}
                      alt="Error 20 Logo"
                      className={language === "ar" ? "h-8 ml-2" : "h-8 mr-2"}
                    />
                    <span className="text-purple-700 font-bold">
                      {language === "ar" ? "ايرور 20" : "Error 20"}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-purple-700">
                    {t.menu}
                  </h2>
                </div>

                <nav className="flex-grow">
                  <ul className="space-y-1">
                    {translatedNavLinks.map((link, index) => (
                      <motion.li
                        key={link.name}
                        initial={{
                          x: language === "ar" ? -50 : 50,
                          opacity: 0,
                        }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.1 }}
                      >
                        <a
                          href={link.href}
                          className={`flex items-center py-3 px-4 rounded-lg ${
                            language === "ar" ? "justify-end" : "justify-start"
                          } ${
                            activeLink === link.href.substring(1)
                              ? "bg-purple-100 text-purple-700 font-medium"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                          onClick={handleMobileNavClick}
                        >
                          {language === "ar" &&
                            activeLink === link.href.substring(1) && (
                              <motion.div className="w-1.5 h-1.5 mr-2 rounded-full bg-purple-700" />
                            )}
                          <span>{link.name}</span>
                          {language !== "ar" &&
                            activeLink === link.href.substring(1) && (
                              <motion.div className="w-1.5 h-1.5 ml-2 rounded-full bg-purple-700" />
                            )}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <motion.div
                  className="mt-8 pt-8 border-t"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <a
                    href="#contact"
                    className="flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg font-medium hover:shadow-lg"
                    onClick={handleMobileNavClick}
                  >
                    {t.nav.contact}
                  </a>

                  <div className="mt-6 flex justify-center gap-4">
                    {/* Social links could go here */}
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-purple-700">🌐</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-purple-700">📱</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-purple-700">✉️</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
