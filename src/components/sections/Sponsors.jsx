import React from "react";
import { motion } from "framer-motion";
import sponsors from "../../data/sponsors";

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sponsored By</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Proud to be supported by industry leaders who believe in our
            mission.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
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
                  className="h-12 md:h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors"
          >
            Become a sponsor
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
