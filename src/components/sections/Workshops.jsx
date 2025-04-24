import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import workshops from "../../data/workshops";

const Workshops = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleWorkshopClick = (link) => {
    window.open(link, "_blank", "noopener noreferrer");
  };

  return (
    <section id="workshops" className="py-20 bg-white" dir="rtl">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ورش عمل ودورات تدريبية
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            انضم إلى ورش العمل والدورات التدريبية لتطوير مهاراتك واكتشاف ذاتك
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
              onClick={() => handleWorkshopClick(workshop.link)}
              className={`rounded-xl p-6 transition-all duration-300 ${
                hoveredCard === index
                  ? "bg-purple-700 text-white"
                  : "bg-purple-50 text-gray-800"
              } cursor-pointer text-right`}
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
                  اعرف المزيد
                </span>
                <ArrowRight
                  className={`mr-2 w-4 h-4 rotate-180 ${
                    hoveredCard === index ? "transform -translate-x-2" : ""
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
                    التاريخ:
                  </span>
                  <span className="font-medium">{workshop.date}</span>
                </div>
                <div className="flex justify-between">
                  <span
                    className={
                      hoveredCard === index ? "text-white" : "text-gray-600"
                    }
                  >
                    المدة:
                  </span>
                  <span className="font-medium">{workshop.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span
                    className={
                      hoveredCard === index ? "text-white" : "text-gray-600"
                    }
                  >
                    المدرب:
                  </span>
                  <span className="font-medium">{workshop.instructor}</span>
                </div>
                <div className="flex justify-between">
                  <span
                    className={
                      hoveredCard === index ? "text-white" : "text-gray-600"
                    }
                  >
                    النوع:
                  </span>
                  <span className="font-medium">{workshop.location}</span>
                </div>
                <div className="flex justify-between">
                  <span
                    className={
                      hoveredCard === index ? "text-white" : "text-gray-600"
                    }
                  >
                    السعر:
                  </span>
                  <span className="font-medium">
                    {workshop.price > 0 ? `$${workshop.price}` : "مجاني"}
                  </span>
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
