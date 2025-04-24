import React from "react";
import { motion } from "framer-motion";
import { Target, Rocket, Check } from "lucide-react";
import milestones from "../../data/milestones";
import { useLanguage } from "../../context/useLanguage";
import { translations } from "../../translations";

const Milestones = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // Translated milestone items that aren't in our translation files
  const translatedContent = {
    ar: {
      heading: "أثرنا وإنجازاتنا",
      subHeading: "كيف نساعد في تخطي أزمة ربع العمر؟",
      features: [
        {
          icon: <Target className="w-8 h-8 text-purple-700" />,
          bgColor: "bg-purple-100",
          title: "اكتشاف الذات",
          description:
            "مساعدتك على التعرف على نفسك بشكل أعمق وفهم مشاعرك واحتياجاتك الحقيقية.",
        },
        {
          icon: <Rocket className="w-8 h-8 text-indigo-700" />,
          bgColor: "bg-indigo-100",
          title: "تحديد الشغف",
          description:
            "تطوير أدوات عملية تساعدك في اكتشاف شغفك وتحويله إلى مسار مهني مناسب.",
        },
        {
          icon: <Check className="w-8 h-8 text-pink-700" />,
          bgColor: "bg-pink-100",
          title: "تطوير الذات",
          description:
            "تعزيز مهاراتك الشخصية والمهنية وتحقيق التوازن في مختلف جوانب الحياة.",
        },
      ],
    },
    en: {
      heading: "Our Impact and Achievements",
      subHeading: "How Do We Help Navigate the Quarter-Life Crisis?",
      features: [
        {
          icon: <Target className="w-8 h-8 text-purple-700" />,
          bgColor: "bg-purple-100",
          title: "Self-Discovery",
          description:
            "Helping you understand yourself more deeply and recognize your true feelings and needs.",
        },
        {
          icon: <Rocket className="w-8 h-8 text-indigo-700" />,
          bgColor: "bg-indigo-100",
          title: "Passion Identification",
          description:
            "Developing practical tools that help you discover your passion and transform it into a suitable career path.",
        },
        {
          icon: <Check className="w-8 h-8 text-pink-700" />,
          bgColor: "bg-pink-100",
          title: "Self-Development",
          description:
            "Enhancing your personal and professional skills and achieving balance across different aspects of life.",
        },
      ],
    },
  }[language];

  return (
    <section
      id="milestones"
      className="py-20 bg-white"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {translatedContent.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.1)",
                transition: { duration: 0.2 },
              }}
              className="bg-white rounded-xl p-8 text-center shadow-lg border border-purple-100"
            >
              <motion.h3
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                className="text-5xl font-bold text-purple-700 mb-2"
              >
                {milestone.number}
              </motion.h3>
              <p className="text-xl text-gray-600">
                {language === "ar" ? milestone.label : milestone.labelEn}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-purple-50 to-indigo-50 p-8 md:p-12 rounded-2xl shadow-sm"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            {translatedContent.subHeading}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {translatedContent.features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.7 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 },
                }}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  className={`rounded-full ${item.bgColor} p-4 mb-4`}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.3 },
                  }}
                >
                  {item.icon}
                </motion.div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-center text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Milestones;
