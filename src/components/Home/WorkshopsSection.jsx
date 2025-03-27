import React from "react";
import { motion } from "framer-motion";
import workshopsData from "../../data/workshops";

const WorkshopsSection = () => {
  return (
    <section id="workshops" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Workshops & Training
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join our expert-led workshops to master the Error20 framework and
            transform your decision-making abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {workshopsData.map((workshop, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-4 rounded-full bg-purple-100 mb-6">
                {workshop.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{workshop.title}</h3>
              <p className="text-gray-600 mb-4">{workshop.description}</p>
              <a
                href={workshop.link}
                className="text-purple-700 font-medium hover:text-purple-800 transition-colors"
              >
                Learn more
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
