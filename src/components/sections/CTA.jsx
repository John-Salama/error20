import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 py-20 text-white"
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
            Ready to Master the Error20 Framework?
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl opacity-90 mb-10"
          >
            Join thousands of professionals who have transformed their thinking
            and decision-making.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="#"
              initial={{ x: -30, opacity: 0 }}
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
              Schedule a Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>

            <motion.a
              href="#"
              initial={{ x: 30, opacity: 0 }}
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
              Sign Up for Newsletter
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
