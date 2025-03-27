import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import workshops from "../../data/workshops";

const Workshops = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

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
          {workshops.map((workshop, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className={`rounded-xl p-6 transition-all duration-300 ${
                hoveredCard === index
                  ? "bg-purple-700 text-white"
                  : "bg-purple-50 text-gray-800"
              } cursor-pointer`}
            >
              <div
                className={`p-4 rounded-full w-fit ${
                  hoveredCard === index ? "bg-white bg-opacity-20" : "bg-white"
                } mb-6`}
              >
                {/* Workshop icon would go here */}
              </div>
              <h3 className="text-xl font-bold mb-3">{workshop.title}</h3>
              <p
                className={
                  hoveredCard === index ? "text-purple-100" : "text-gray-600"
                }
              >
                {workshop.description}
              </p>
              <div className="mt-6 flex items-center">
                <span
                  className={`font-medium ${
                    hoveredCard === index ? "text-white" : "text-purple-700"
                  }`}
                >
                  Learn more
                </span>
                <ArrowRight
                  className={`ml-2 w-4 h-4 ${
                    hoveredCard === index ? "transform translate-x-2" : ""
                  } transition-transform`}
                />
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex justify-between">
                  <span
                    className={
                      hoveredCard === index ? "text-white" : "text-gray-600"
                    }
                  >
                    Date:
                  </span>
                  <span className="font-medium">{workshop.date}</span>
                </div>
                <div className="flex justify-between">
                  <span
                    className={
                      hoveredCard === index ? "text-white" : "text-gray-600"
                    }
                  >
                    Duration:
                  </span>
                  <span className="font-medium">{workshop.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span
                    className={
                      hoveredCard === index ? "text-white" : "text-gray-600"
                    }
                  >
                    Instructor:
                  </span>
                  <span className="font-medium">{workshop.instructor}</span>
                </div>
                <div className="flex justify-between">
                  <span
                    className={
                      hoveredCard === index ? "text-white" : "text-gray-600"
                    }
                  >
                    Format:
                  </span>
                  <span className="font-medium">{workshop.location}</span>
                </div>
                <div className="flex justify-between">
                  <span
                    className={
                      hoveredCard === index ? "text-white" : "text-gray-600"
                    }
                  >
                    Price:
                  </span>
                  <span className="font-medium">${workshop.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;
