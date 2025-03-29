import React, { useEffect, useState } from "react";
import { Twitter, Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visibility to true after component mounts to trigger animations
    setIsVisible(true);
  }, []);

  return (
    <footer className="bg-purple-900 text-white py-12 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div
          className={`flex flex-col md:flex-row justify-between transition-all duration-700 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-8 md:mb-0">
            <h2
              className={`text-2xl font-bold mb-4 transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              Error20
            </h2>
            <p
              className={`text-purple-200 max-w-sm transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              Helping professionals overcome cognitive biases and make better
              decisions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div
              className={`transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors hover:translate-x-1 inline-block hover:scale-105 duration-300"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#videos"
                    className="text-purple-200 hover:text-white transition-colors hover:translate-x-1 inline-block hover:scale-105 duration-300"
                  >
                    Videos
                  </a>
                </li>
                <li>
                  <a
                    href="#resources"
                    className="text-purple-200 hover:text-white transition-colors hover:translate-x-1 inline-block hover:scale-105 duration-300"
                  >
                    Free PDFs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors hover:translate-x-1 inline-block hover:scale-105 duration-300"
                  >
                    Research
                  </a>
                </li>
              </ul>
            </div>
            <div
              className={`transition-all duration-700 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors hover:translate-x-1 inline-block hover:scale-105 duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors hover:translate-x-1 inline-block hover:scale-105 duration-300"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors hover:translate-x-1 inline-block hover:scale-105 duration-300"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-purple-200 hover:text-white transition-colors hover:translate-x-1 inline-block hover:scale-105 duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div
              className={`transition-all duration-700 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-all duration-300 hover:scale-125 transform"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-all duration-300 hover:scale-125 transform"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-all duration-300 hover:scale-125 transform"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-all duration-300 hover:scale-125 transform"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`border-t border-purple-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <p className="text-purple-300 text-sm">
            © 2025 Error20. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-purple-300 text-sm hover:text-white transition-colors hover:scale-105 duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-purple-300 text-sm hover:text-white transition-colors hover:scale-105 duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
