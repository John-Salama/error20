import React from "react";
import resources from "../../data/resources";
import { motion } from "framer-motion";
import { ChevronRight, Download } from "react-feather";

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Free Resources
        </h2>
        <p className="text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Download these complimentary resources to start implementing Error20
          principles today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-300 transition-all flex flex-col h-full"
            >
              <div className="bg-purple-100 text-purple-600 p-3 rounded-lg w-fit mb-6">
                {resource.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                {resource.description}
              </p>
              <a
                href={resource.link}
                className="flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors group"
              >
                <Download className="w-5 h-5 mr-2" />
                Download PDF
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
