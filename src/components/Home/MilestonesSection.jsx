import React from "react";
import { motion } from "framer-motion";
import milestonesData from "../../data/milestones";

const MilestonesSection = () => {
  return (
    <section id="milestones" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {milestonesData.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 text-center shadow-lg border border-purple-100"
            >
              <h3 className="text-5xl font-bold text-purple-700 mb-2">
                {milestone.number}
              </h3>
              <p className="text-xl text-gray-600">{milestone.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;
