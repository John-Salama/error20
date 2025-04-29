import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../context/useLanguage";
import { translations } from "../../translations";

const CTA = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // Translated CTA content that's not in our translation files
  const ctaContent = {
    ar: {
      heading: "هل أنت مستعد لتجاوز أزمة ربع العمر مع ايرور 20؟",
      description:
        "انضم إلى آلاف الشباب الذين تمكنوا من تغيير حياتهم وتطوير مهاراتهم واكتشاف ذواتهم.",
      contactButton: "تواصل معنا الآن",
      joinButton: "انضم إلى مجتمعنا",
    },
    en: {
      heading:
        "Are you ready to overcome your quarter-life crisis with Error 20?",
      description:
        "Join thousands of young adults who have changed their lives, developed their skills, and discovered themselves.",
      contactButton: "Contact Us Now",
      joinButton: "Join Our Community",
    },
  }[language];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 py-20 text-white"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-white opacity-10"
          style={{ top: "-10%", right: "15%" }}
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-white opacity-10"
          style={{ bottom: "-5%", left: "10%" }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            {ctaContent.heading}
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl opacity-90 mb-10"
          >
            {ctaContent.description}
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="https://www.facebook.com/share/1A2iKBpkps/"
              initial={{ x: language === "ar" ? -30 : 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255,255,255,0.3)",
                transition: { duration: 0.2 },
              }}
              viewport={{ once: true }}
              className="px-8 py-4 text-lg font-semibold rounded-lg bg-white text-purple-700 hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              {ctaContent.contactButton}
              {language === "ar" ? (
                <ArrowRight className="mr-2 w-5 h-5 rotate-180" />
              ) : (
                <ArrowRight className="ml-2 w-5 h-5" />
              )}
            </motion.a>

            <motion.a
              href="https://www.facebook.com/share/1A2iKBpkps/"
              initial={{ x: language === "ar" ? 30 : -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255,255,255,0.3)",
                transition: { duration: 0.2 },
              }}
              viewport={{ once: true }}
              className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white bg-transparent hover:bg-white hover:text-purple-700 transition-all flex items-center justify-center"
            >
              {ctaContent.joinButton}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
