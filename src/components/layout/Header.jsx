import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import navLinks from "../../data/navLinks";
import logoImage from "../../data/thumbnail/logo.png";

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

  // Optimized scroll handler with useCallback
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);

    // Track active section based on scroll position
    const sections = navLinks.map((link) => link.href.substring(1));
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
  }, []);

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
      dir="rtl"
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#home"
          className="text-2xl font-bold text-purple-700 flex items-center"
          variants={logoVariants}
          whileHover="hover"
          initial="normal"
        >
          <img src={logoImage} alt="Error 20 Logo" className="h-20 mr-2" />
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex gap-1 ml-8">
            {navLinks.map((link, index) => (
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
          <motion.a
            href="#contact"
            className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:shadow-lg hover:shadow-purple-300 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            تواصل معنا
          </motion.a>
        </nav>

        {/* Mobile Navigation Button */}
        <motion.button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md border border-purple-100"
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
              className="absolute top-0 left-0 w-4/5 h-screen bg-white shadow-2xl"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="p-6 overflow-y-auto h-full flex flex-col text-right">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-bold text-purple-700">القائمة</h2>
                  <div className="flex items-center">
                    <img
                      src={logoImage}
                      alt="Error 20 Logo"
                      className="h-8 ml-2"
                    />
                    <span className="text-purple-700 font-bold">ايرور 20</span>
                  </div>
                </div>

                <nav className="flex-grow">
                  <ul className="space-y-1">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.name}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.1 }}
                      >
                        <a
                          href={link.href}
                          className={`flex items-center py-3 px-4 rounded-lg justify-end ${
                            activeLink === link.href.substring(1)
                              ? "bg-purple-100 text-purple-700 font-medium"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                          onClick={handleMobileNavClick}
                        >
                          <span>{link.name}</span>
                          {activeLink === link.href.substring(1) && (
                            <motion.div className="w-1.5 h-1.5 mr-2 rounded-full bg-purple-700" />
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
                    تواصل معنا
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
