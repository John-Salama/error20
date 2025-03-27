import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-purple-600 to-indigo-600 py-20 text-white"
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Master the Error20 Framework?
          </h2>
          <p className="text-xl opacity-90 mb-10">
            Join thousands of professionals who have transformed their thinking
            and decision-making.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="px-8 py-4 text-lg font-semibold rounded-lg bg-white text-purple-700 hover:bg-gray-100 transition-colors"
            >
              Schedule a Consultation
            </a>
            <a
              href="#"
              className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white bg-transparent hover:bg-white hover:text-purple-700 transition-all"
            >
              Sign Up for Newsletter
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
