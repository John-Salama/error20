import React from "react";
import { motion } from "framer-motion";
import { Target, Rocket, Check } from "lucide-react";
import milestones from "../../data/milestones";

const Milestones = () => {
  return (
    <section id="milestones" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {milestones.map((milestone, index) => (
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-purple-50 to-indigo-50 p-8 md:p-12 rounded-2xl shadow-sm"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            How Error20 Transforms Your Thinking
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-purple-100 p-4 mb-4">
                <Target className="w-8 h-8 text-purple-700" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Identify Biases</h4>
              <p className="text-center text-gray-600">
                Learn to recognize when your thinking is affected by cognitive
                biases.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-indigo-100 p-4 mb-4">
                <Rocket className="w-8 h-8 text-indigo-700" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Apply Frameworks</h4>
              <p className="text-center text-gray-600">
                Use structured approaches to overcome limitations in thinking.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-pink-100 p-4 mb-4">
                <Check className="w-8 h-8 text-pink-700" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Better Outcomes</h4>
              <p className="text-center text-gray-600">
                Make decisions that lead to improved results in work and life.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Milestones;
