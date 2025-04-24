import React, { useEffect, useState } from "react";
import { Twitter, Instagram, Facebook, Mail } from "lucide-react";

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
            <h2 className="text-2xl font-bold mb-4">أزمة ربع العمر</h2>
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
                  href="#"
                  className="text-purple-200 hover:text-white transition-all duration-300 hover:scale-125 transform"
                  aria-label="تويتر"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-all duration-300 hover:scale-125 transform"
                  aria-label="انستجرام"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-all duration-300 hover:scale-125 transform"
                  aria-label="فيسبوك"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-all duration-300 hover:scale-125 transform"
                  aria-label="البريد الإلكتروني"
                >
                  <Mail className="w-5 h-5" />
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
            © 2025 أزمة ربع العمر. جميع الحقوق محفوظة.
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
