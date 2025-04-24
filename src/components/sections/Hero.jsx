import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

// Predefined animation variants for better performance
const textAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5 },
  }),
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-50 to-purple-200"
      dir="rtl"
    >
      {/* Hero content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 text-right">
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0.2}
              variants={textAnimation}
              className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900"
            >
              تخطي <span className="text-purple-700">أزمة ربع العمر</span> بوعي
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.4}
              variants={textAnimation}
              className="text-xl md:text-2xl mb-8 text-gray-800"
            >
              اكتشف ذاتك، حدد شغفك، وتغلب على التحديات النفسية والمهنية التي
              تواجه الشباب
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.6}
              variants={textAnimation}
              className="flex flex-col sm:flex-row gap-4 justify-start"
            >
              <a
                href="#quiz"
                className="px-8 py-4 text-lg font-semibold rounded-lg bg-purple-700 text-white hover:bg-purple-800 transition-colors flex items-center justify-center"
              >
                اختبار الوعي الذاتي{" "}
                <ArrowRight className="mr-2 w-5 h-5 rotate-180" />
              </a>
              <a
                href="#resources"
                className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white transition-all flex items-center justify-center"
              >
                الموارد والدعم
              </a>
            </motion.div>
          </div>

          <div className="hidden md:block md:w-1/2 mt-16 md:mt-0">
            <div className="relative">
              <div className="w-full h-auto bg-white rounded-2xl shadow-2xl overflow-hidden p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-4 text-right">
                  <div className="h-10 bg-purple-100 rounded-md w-3/4 mr-auto"></div>
                  <div className="h-32 bg-purple-100 rounded-md"></div>
                  <div className="flex gap-3 justify-end">
                    <div className="h-8 bg-purple-300 rounded-md w-1/4"></div>
                    <div className="h-8 bg-purple-200 rounded-md w-1/3"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full opacity-60 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - positioned at bottom of section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        dir="ltr"
      >
        <a
          href="#milestones"
          className="flex flex-col items-center text-gray-700 hover:text-purple-800 transition-colors"
        >
          <span className="mb-2">اكتشف المزيد</span>
          <ArrowDown className="animate-bounce" />
        </a>
      </motion.div>

      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-purple-300 opacity-20"
          style={{ top: "10%", right: "5%" }}
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-indigo-400 opacity-20"
          style={{ bottom: "10%", left: "10%" }}
          animate={{
            y: [0, -40, 0],
            x: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-pink-300 opacity-20"
          style={{ top: "40%", left: "25%" }}
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
