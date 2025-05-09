import React from "react";
import { motion } from "framer-motion";
import sponsors from "../../data/sponsors";
import { useLanguage } from "../../context/useLanguage";
import { translations } from "../../translations";

const Sponsors = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // Translated section texts
  const content = {
    ar: {
      title: "شركاؤنا",
      subtitle: "نفتخر بدعم مؤسسات رائدة تؤمن برسالتنا ومهمتنا.",
    },
    en: {
      title: "Our Partners",
      subtitle:
        "We are proud to be supported by leading organizations that believe in our mission.",
    },
  }[language];

  return (
    <section
      id="sponsors"
      className="py-16 bg-white"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                filter: "brightness(1.1)",
                transition: { duration: 0.2 },
              }}
              className="flex flex-col items-center"
            >
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  width={sponsor.logoWidth}
                  height={sponsor.logoHeight}
                  className="h-12 md:h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
                {(sponsor.fullName || sponsor.fullNameEn) && (
                  <p className="mt-3 text-sm text-gray-700 font-medium text-center">
                    {language === "ar" ? sponsor.fullName : sponsor.fullNameEn}
                  </p>
                )}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
