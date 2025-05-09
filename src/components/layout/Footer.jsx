import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";
import logoImage from "../../data/thumbnail/logo.png";
import { useLanguage } from "../../context/useLanguage";
import { translations } from "../../translations";

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

// Custom Google Play icon component
const GooglePlayIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M3.609 1.814L13.792 12 3.609 22.186c-.181.181-.45.235-.686.145-.236-.091-.394-.307-.394-.545V2.214c0-.238.158-.454.394-.545.236-.09.505-.036.686.145z" />
    <path d="M14.391 12.601l2.539 2.539-8.78 4.947a.502.502 0 0 1-.454.031.5.5 0 0 1-.232-.232L14.391 12.6z" />
    <path d="M16.93 8.859l-2.539 2.54-6.927-7.287c.127-.234.373-.358.632-.33.076.008.152.03.224.066l8.61 5.011z" />
    <path d="M19.463 12.33c.676.294.676 1.039 0 1.334l-2.103 1.274-2.539-2.539 2.539-2.54 2.103 1.271z" />
  </svg>
);

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  // Define translated footer links and sections
  const resources = {
    ar: [
      { label: "المدونة", href: "#" },
      { label: "البودكاست", href: "#videos" },
      { label: "ملفات مجانية", href: "#resources" },
      { label: "دراسات وأبحاث", href: "#" },
    ],
    en: [
      { label: "Blog", href: "#" },
      { label: "Podcast", href: "#videos" },
      { label: "Free Resources", href: "#resources" },
      { label: "Research", href: "#" },
    ],
  }[language];

  const aboutUs = {
    ar: [
      { label: "قصتنا", href: "#" },
      { label: "فريق العمل", href: "#" },
      { label: "انضم إلينا", href: "#" },
      { label: "تواصل معنا", href: "#contact" },
    ],
    en: [
      { label: "Our Story", href: "#" },
      { label: "Our Team", href: "#" },
      { label: "Join Us", href: "#" },
      { label: "Contact Us", href: "#contact" },
    ],
  }[language];

  const socialText = {
    ar: {
      instagram: "انستجرام",
      facebook: "فيسبوك",
      tiktok: "تيك توك",
      about:
        "مساعدة الشباب على تخطي التحديات النفسية وتحقيق التوازن في حياتهم المهنية والشخصية",
    },
    en: {
      instagram: "Instagram",
      facebook: "Facebook",
      tiktok: "TikTok",
      about:
        "Helping young adults overcome psychological challenges and achieve balance in their professional and personal lives",
    },
  }[language];

  const footerSections = {
    ar: [
      { title: "موارد", links: resources },
      { title: "من نحن", links: aboutUs },
    ],
    en: [
      { title: "Resources", links: resources },
      { title: "About Us", links: aboutUs },
    ],
  }[language];

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
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div
          className={`flex flex-col md:flex-row justify-between transition-all duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="mb-8 md:mb-0 text-right">
            <img
              src={logoImage}
              alt="Error 20 Logo"
              className={`h-25 ${language === "ar" ? "mr-2" : "ml-2"}`}
            />
            <p className="text-purple-200 max-w-sm">{socialText.about}</p>

            {/* App Download Section */}
            <div className="mt-6">
              <h3 className="font-semibold mb-3">{t.footer.downloadApp}</h3>
              <a
                href="#"
                className="inline-flex items-center bg-white text-purple-900 px-4 py-2 rounded-lg hover:bg-purple-100 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GooglePlayIcon className="w-5 h-5 mr-2" />
                <span>{t.footer.getOnGooglePlay}</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-right">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-purple-200 hover:text-white transition-colors hover:translate-x-1 inline-block hover:scale-105 duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="font-semibold mb-4">{t.footer.followUs}</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/error_20_cu?igsh=YTJvcnRseDV3d2pr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-200 hover:text-white transition-all duration-300 hover:scale-125 transform"
                  aria-label={socialText.instagram}
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/share/1A2iKBpkps/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-200 hover:text-white transition-all duration-300 hover:scale-125 transform"
                  aria-label={socialText.facebook}
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@error_20__?_t=ZS-8vo0SJDL2gP&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-200 hover:text-white transition-all duration-300 hover:scale-125 transform"
                  aria-label={socialText.tiktok}
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
            © 2025 {language === "ar" ? "ايرور 20" : "Error 20"}.{" "}
            {t.footer.rights}
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              to="/privacy-policy"
              className="text-purple-300 text-sm hover:text-white transition-colors"
            >
              {t.footer.privacyPolicy}
            </Link>
            <a
              href="#"
              className="text-purple-300 text-sm hover:text-white transition-colors"
            >
              {t.footer.termsOfService}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
