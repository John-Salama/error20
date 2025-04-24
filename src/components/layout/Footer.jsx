import React, { useEffect, useState } from "react";
import { Instagram, Facebook } from "lucide-react";
import logoImage from "../../data/thumbnail/logo.png";

// Custom TikTok icon component
const TikTokIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4c0 1.1.9 2 2 2h3" />
    <path d="M12 16v-2" />
  </svg>
);

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Use requestAnimationFrame for better performance
    const timeout = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    return () => cancelAnimationFrame(timeout);
  }, []);

  return (
    <footer
      className="bg-purple-900 text-white py-12 overflow-hidden"
      dir="rtl"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div
          className={`flex flex-col md:flex-row justify-between transition-all duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="mb-8 md:mb-0 text-right">
            <img src={logoImage} alt="Error 20 Logo" className="h-25 mr-2" />
            <p className="text-purple-200 max-w-sm">
              مساعدة الشباب على تخطي التحديات النفسية وتحقيق التوازن في حياتهم
              المهنية والشخصية
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-right">
            <div>
              <h3 className="font-semibold mb-4">موارد</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors hover:-translate-x-1 inline-block hover:scale-105 duration-300"
                  >
                    المدونة
                  </a>
                </li>
                <li>
                  <a
                    href="#videos"
                    className="text-purple-200 hover:text-white transition-colors hover:-translate-x-1 inline-block hover:scale-105 duration-300"
                  >
                    البودكاست
                  </a>
                </li>
                <li>
                  <a
                    href="#resources"
                    className="text-purple-200 hover:text-white transition-colors hover:-translate-x-1 inline-block hover:scale-105 duration-300"
                  >
                    ملفات مجانية
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors hover:-translate-x-1 inline-block hover:scale-105 duration-300"
                  >
                    دراسات وأبحاث
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">من نحن</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors hover:-translate-x-1 inline-block hover:scale-105 duration-300"
                  >
                    قصتنا
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors hover:-translate-x-1 inline-block hover:scale-105 duration-300"
                  >
                    فريق العمل
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors hover:-translate-x-1 inline-block hover:scale-105 duration-300"
                  >
                    انضم إلينا
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-purple-200 hover:text-white transition-colors hover:-translate-x-1 inline-block hover:scale-105 duration-300"
                  >
                    تواصل معنا
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">تابعنا</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/error_20_cu?igsh=YTJvcnRseDV3d2pr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-200 hover:text-white transition-all duration-300 hover:scale-125 transform"
                  aria-label="انستجرام"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/share/1A2iKBpkps/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-200 hover:text-white transition-all duration-300 hover:scale-125 transform"
                  aria-label="فيسبوك"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@error_20__?_t=ZS-8vo0SJDL2gP&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-200 hover:text-white transition-all duration-300 hover:scale-125 transform"
                  aria-label="تيك توك"
                >
                  <TikTokIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`border-t border-purple-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-purple-300 text-sm">
            © 2025 ايرور 20. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-purple-300 text-sm hover:text-white transition-colors"
            >
              سياسة الخصوصية
            </a>
            <a
              href="#"
              className="text-purple-300 text-sm hover:text-white transition-colors"
            >
              شروط الاستخدام
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
