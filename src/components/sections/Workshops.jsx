import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import workshops from "../../data/workshops";
import { useLanguage } from "../../context/useLanguage";
import { translations } from "../../translations";

const Workshops = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { language } = useLanguage();
  const t = translations[language];

  // Translated section content
  const content = {
    ar: {
      title: "ورش عمل ودورات تدريبية",
      subtitle:
        "انضم إلى ورش العمل والدورات التدريبية لتطوير مهاراتك واكتشاف ذاتك",
      learnMore: "اعرف المزيد",
      date: "التاريخ:",
      duration: "المدة:",
      instructor: "المدرب:",
      type: "النوع:",
      price: "السعر:",
    },
    en: {
      title: "Workshops and Training Courses",
      subtitle:
        "Join workshops and training courses to develop your skills and discover yourself",
      learnMore: "Learn More",
      date: "Date:",
      duration: "Duration:",
      instructor: "Instructor:",
      type: "Type:",
      price: "Price:",
    },
  }[language];

  const handleWorkshopClick = (link) => {
    window.open(link, "_blank", "noopener noreferrer");
  };

  const formatDate = (dateString) => {
    if (language === "ar") {
      // Keep the original format for Arabic
      return dateString;
    } else {
      // Format as Month Day, Year for English
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
  };

  return (
    <section
      id="workshops"
      className="py-20 bg-white"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {content.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {workshops.map((workshop, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => handleWorkshopClick(workshop.link)}
              className={`rounded-xl p-6 transition-all duration-300 ${
                hoveredCard === index
                  ? "bg-purple-700 text-white"
                  : "bg-purple-50 text-gray-800"
              } cursor-pointer text-${language === "ar" ? "right" : "left"}`}
            >
              <div
                className={`p-4 rounded-full w-fit ${
                  hoveredCard === index ? "bg-white bg-opacity-20" : "bg-white"
                } mb-6`}
              >
                {/* Workshop icon would go here */}
              </div>
              <h3 className="text-xl font-bold mb-3">
                {language === "ar" ? workshop.title : workshop.titleEn}
              </h3>
              <p
                className={
                  hoveredCard === index ? "text-purple-100" : "text-gray-600"
                }
              >
                {language === "ar"
                  ? workshop.description
                  : workshop.descriptionEn}
              </p>
              <div className="mt-6 flex items-center">
                <span
                  className={`font-medium ${
                    hoveredCard === index ? "text-white" : "text-purple-700"
                  }`}
                >
                  {content.learnMore}
                </span>
                <ArrowRight
                  className={`${
                    language === "ar" ? "mr-2 rotate-180" : "ml-2"
                  } w-4 h-4 ${
                    hoveredCard === index
                      ? language === "ar"
                        ? "transform -translate-x-2"
                        : "transform translate-x-2"
                      : ""
                  } transition-transform`}
                />
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex justify-between">
                  <span
                    className={
                      hoveredCard === index ? "text-white" : "text-gray-600"
                    }
                  >
                    {content.date}
                  </span>
                  <span className="font-medium">
                    {formatDate(workshop.date)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span
                    className={
                      hoveredCard === index ? "text-white" : "text-gray-600"
                    }
                  >
                    {content.duration}
                  </span>
                  <span className="font-medium">
                    {language === "ar"
                      ? workshop.duration
                      : workshop.durationEn}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span
                    className={
                      hoveredCard === index ? "text-white" : "text-gray-600"
                    }
                  >
                    {content.instructor}
                  </span>
                  <span className="font-medium">
                    {language === "ar"
                      ? workshop.instructor
                      : workshop.instructorEn}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span
                    className={
                      hoveredCard === index ? "text-white" : "text-gray-600"
                    }
                  >
                    {content.type}
                  </span>
                  <span className="font-medium">
                    {language === "ar"
                      ? workshop.location
                      : workshop.locationEn}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span
                    className={
                      hoveredCard === index ? "text-white" : "text-gray-600"
                    }
                  >
                    {content.price}
                  </span>
                  <span className="font-medium">
                    {workshop.price > 0
                      ? `$${workshop.price}`
                      : language === "ar"
                      ? workshop.freeTextAr
                      : workshop.freeTextEn}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;
