import React from "react";
import { motion } from "framer-motion";
import testimonialsData from "../../data/testimonials";

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = React.useState(0);

  return (
    <section id="testimonials" className="py-20 bg-purple-100">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          What People Are Saying
        </h2>

        <div className="relative">
          <div className="max-w-4xl mx-auto">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-8 md:p-12 shadow-xl relative"
            >
              <svg
                className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 h-16 w-16 text-purple-300 opacity-50"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.7662 12.86C3.84628 12.86 3.09047 12.5533 2.49877 11.94C1.93086 11.3266 1.6469 10.4467 1.6469 9.29999C1.6469 8.07332 1.96663 6.87332 2.6061 5.69999C3.24557 4.49999 4.24485 3.55332 5.60394 2.85999L6.4445 4.25999C5.51410 4.73999 4.81380 5.27332 4.34359 5.85999C3.87338 6.44666 3.6379 7.12666 3.62715 7.89999C4.29662 7.79332 4.85333 7.93999 5.29884 8.33999C5.7711 8.71332 6.01365 9.23332 6.02747 9.89999C6.02747 10.05 6.01366 10.2 5.98603 10.35L7.39762 10.3ZM15.3586 10.3C15.3586 11.0733 15.1099 11.7 14.6124 12.18C14.1149 12.6333 13.4865 12.86 12.7272 12.86C11.8073 12.86 11.0515 12.5533 10.4598 11.94C9.89187 11.3266 9.60791 10.4467 9.60791 9.29999C9.60791 8.07332 9.92764 6.87332 10.5671 5.69999C11.2066 4.49999 12.2058 3.55332 13.5649 2.85999L14.4055 4.25999C13.4751 4.73999 12.7748 5.27332 12.3046 5.85999C11.8344 6.44666 11.5989 7.12666 11.5881 7.89999C12.2576 7.79332 12.8143 7.93999 13.2598 8.33999C13.7321 8.71332 13.9746 9.23332 13.9884 9.89999C13.9884 10.05 13.9746 10.2 13.947 10.35L15.3586 10.3Z"
                  fill="currentColor"
                ></path>
              </svg>

              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="md:w-1/4">
                  <img
                    src={testimonialsData[activeTestimonial].image}
                    alt={testimonialsData[activeTestimonial].name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto"
                  />
                </div>
                <div className="md:w-3/4">
                  <blockquote className="text-xl md:text-2xl italic mb-6">
                    "{testimonialsData[activeTestimonial].quote}"
                  </blockquote>
                  <div>
                    <div className="font-bold text-lg">
                      {testimonialsData[activeTestimonial].name}
                    </div>
                    <div className="text-purple-600">
                      {testimonialsData[activeTestimonial].role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center mt-8 gap-2">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeTestimonial
                      ? "bg-purple-600"
                      : "bg-purple-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
