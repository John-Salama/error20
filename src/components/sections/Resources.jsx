import React from "react";
import { motion } from "framer-motion";
import { Download, ChevronRight } from "lucide-react";
import resources from "../../data/resources";
import { useLanguage } from "../../context/useLanguage";
import { translations } from "../../translations";

const Resources = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // Translated section content
  const content = {
    ar: {
      title: "موارد الدعم النفسي",
      subtitle:
        "روابط وموارد موصى بها لمساعدتك على تخطي أزمة ربع العمر وتطوير مهاراتك وصحتك النفسية",
      visitSite: "زيارة الموقع",
    },
    en: {
      title: "Mental Health Resources",
      subtitle:
        "Recommended links and resources to help you navigate your quarter-life crisis and develop your skills and mental health",
      visitSite: "Visit Website",
    },
  }[language];

  return (
    <section
      id="resources"
      className="py-20 bg-white"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          {content.title}
        </h2>
        <p className="text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          {content.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)",
              }}
              className={`bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-300 transition-all flex flex-col h-full text-${
                language === "ar" ? "right" : "left"
              }`}
            >
              <div className="bg-purple-100 text-purple-600 p-3 rounded-lg w-fit mb-6">
                {resource.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                {language === "ar"
                  ? resource.description
                  : resource.descriptionEn}
              </p>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors group"
              >
                {language === "ar" ? (
                  <>
                    <ChevronRight className="w-4 h-4 ml-1 rotate-180 transform group-hover:-translate-x-1 transition-transform" />
                    {content.visitSite}
                  </>
                ) : (
                  <>
                    {content.visitSite}
                    <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
