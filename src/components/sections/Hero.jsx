import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f0e6ff 0%, #e4c1f9 25%, #d0a9f5 50%, #c093f0 75%, #b57edc 100%)",
        backgroundSize: "400% 400%",
        animation: "gradient 15s ease infinite",
      }}
    >
      {/* Hero content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900"
            >
              Master the <span className="text-purple-700">Error20</span>{" "}
              framework
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl mb-8 text-gray-800"
            >
              Overcome cognitive biases and make better decisions in your
              professional and personal life.
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#milestones"
                className="px-8 py-4 text-lg font-semibold rounded-lg bg-purple-700 text-white hover:bg-purple-800 transition-colors flex items-center justify-center"
              >
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#workshops"
                className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white transition-all flex items-center justify-center"
              >
                View Workshops
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="hidden md:block md:w-1/2 mt-16 md:mt-0"
          >
            <div className="relative">
              <div className="w-full h-auto bg-white rounded-2xl shadow-2xl overflow-hidden p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-10 bg-purple-100 rounded-md w-3/4"></div>
                  <div className="h-32 bg-purple-100 rounded-md"></div>
                  <div className="flex gap-3">
                    <div className="h-8 bg-purple-200 rounded-md w-1/3"></div>
                    <div className="h-8 bg-purple-300 rounded-md w-1/4"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full opacity-60 blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - positioned at bottom of section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <a
          href="#milestones"
          className="flex flex-col items-center text-gray-700 hover:text-purple-800 transition-colors"
        >
          <span className="mb-2">Scroll to discover</span>
          <ArrowDown className="animate-bounce" />
        </a>
      </motion.div>

      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-purple-300 opacity-20"
          style={{ top: "10%", left: "5%" }}
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-indigo-400 opacity-20"
          style={{ bottom: "10%", right: "10%" }}
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-pink-300 opacity-20"
          style={{ top: "40%", right: "25%" }}
          animate={{
            x: [0, 40, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.section>
  );
};

export default Hero;
