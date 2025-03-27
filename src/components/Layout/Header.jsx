import React from "react";
import navLinks from "../../data/navLinks";

const Header = () => {
  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-purple-700">
          Error20
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`${
                scrolled ? "text-gray-800" : "text-gray-800"
              } hover:text-purple-700 transition-colors font-medium`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-lg bg-purple-700 text-white hover:bg-purple-800 transition-colors"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        className={`md:hidden bg-white ${isNavOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isNavOpen ? 1 : 0,
          height: isNavOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-2 text-gray-800 hover:text-purple-700 transition-colors"
              onClick={() => setIsNavOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 px-5 py-2 rounded-lg bg-purple-700 text-white hover:bg-purple-800 transition-colors text-center"
            onClick={() => setIsNavOpen(false)}
          >
            Get Started
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
