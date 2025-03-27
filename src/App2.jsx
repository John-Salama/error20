import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Book,
  Download,
  Users,
  ArrowRight,
  Headphones,
  FileText,
  Play,
  Podcast,
  Target,
  Rocket,
  PenTool,
  Layers,
  Check,
  ChevronRight,
  Star,
  Mail,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  ArrowDown,
  Menu,
  X,
} from "lucide-react";
import navLinks from "./data/navLinks";
import milestones from "./data/milestones";
import testimonials from "./data/testimonials";
import workshops from "./data/workshops";
import videos from "./data/videos";
import resources from "./data/resources";

const Error20LandingPage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);

  // Handle scroll for navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-purple-50 text-gray-900 font-inter">
      {/* Navigation Bar */}
      <motion.header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-purple-700">
            Error20
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`${
                  scrolled ? "text-gray-800" : "text-gray-800"
                } hover:text-purple-700 transition-colors font-medium`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 rounded-lg bg-purple-700 text-white hover:bg-purple-800 transition-colors"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          className={`md:hidden bg-white ${isNavOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isNavOpen ? 1 : 0,
            height: isNavOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-6 py-4 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-2 text-gray-800 hover:text-purple-700 transition-colors"
                onClick={() => setIsNavOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 px-5 py-2 rounded-lg bg-purple-700 text-white hover:bg-purple-800 transition-colors text-center"
              onClick={() => setIsNavOpen(false)}
            >
              Get Started
            </a>
          </div>
        </motion.div>
      </motion.header>

      {/* Hero Section with enhanced gradient */}
      <motion.section
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #f0e6ff 0%, #e4c1f9 25%, #d0a9f5 50%, #c093f0 75%, #b57edc 100%)",
          backgroundSize: "400% 400%",
          animation: "gradient 15s ease infinite",
        }}
      >
        {/* Hero content */}
        <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900"
              >
                Master the <span className="text-purple-700">Error20</span>{" "}
                framework
              </motion.h1>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl mb-8 text-gray-800"
              >
                Overcome cognitive biases and make better decisions in your
                professional and personal life.
              </motion.p>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="#milestones"
                  className="px-8 py-4 text-lg font-semibold rounded-lg bg-purple-700 text-white hover:bg-purple-800 transition-colors flex items-center justify-center"
                >
                  Learn More <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="#workshops"
                  className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white transition-all flex items-center justify-center"
                >
                  View Workshops
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="md:w-1/2 mt-16 md:mt-0"
            >
              <div className="relative">
                <div className="w-full h-auto bg-white rounded-2xl shadow-2xl overflow-hidden p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-10 bg-purple-100 rounded-md w-3/4"></div>
                    <div className="h-32 bg-purple-100 rounded-md"></div>
                    <div className="flex gap-3">
                      <div className="h-8 bg-purple-200 rounded-md w-1/3"></div>
                      <div className="h-8 bg-purple-300 rounded-md w-1/4"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full opacity-60 blur-2xl"></div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <a
              href="#milestones"
              className="flex flex-col items-center text-gray-700 hover:text-purple-800 transition-colors"
            >
              <span className="mb-2">Scroll to discover</span>
              <ArrowDown className="animate-bounce" />
            </a>
          </motion.div>
        </div>

        {/* Add animated background shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <motion.div
            className="absolute w-64 h-64 rounded-full bg-purple-300 opacity-20"
            style={{ top: "10%", left: "5%" }}
            animate={{
              x: [0, 30, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-indigo-400 opacity-20"
            style={{ bottom: "10%", right: "10%" }}
            animate={{
              x: [0, -50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute w-48 h-48 rounded-full bg-pink-300 opacity-20"
            style={{ top: "40%", right: "25%" }}
            animate={{
              x: [0, 40, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.section>

      {/* Milestones Section */}
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-purple-100">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What People Are Saying
          </h2>

          <div className="relative">
            <div className="max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
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
                        src={testimonials[activeTestimonial].image}
                        alt={testimonials[activeTestimonial].name}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto"
                      />
                    </div>
                    <div className="md:w-3/4">
                      <blockquote className="text-xl md:text-2xl italic mb-6">
                        "{testimonials[activeTestimonial].quote}"
                      </blockquote>
                      <div>
                        <div className="font-bold text-lg">
                          {testimonials[activeTestimonial].name}
                        </div>
                        <div className="text-purple-600">
                          {testimonials[activeTestimonial].role}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center mt-8 gap-2">
                {testimonials.map((_, index) => (
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

      {/* Downloadable PDFs Section */}
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
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)",
                }}
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
                  href="#"
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

      {/* Video Preview Section (replaced Podcast section) */}
      <section id="videos" className="py-20 bg-purple-100">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Video Learning Resources
          </h2>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-xl aspect-video bg-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img
                  src={videos[activeVideo].thumbnail}
                  alt={videos[activeVideo].title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    className="w-20 h-20 bg-purple-700 rounded-full flex items-center justify-center hover:bg-purple-800 transition-colors text-white"
                    aria-label="Play video"
                  >
                    <Play className="w-10 h-10 ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <div className="text-white">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      {videos[activeVideo].title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                        {videos[activeVideo].duration}
                      </span>
                      <span className="text-gray-300">
                        {videos[activeVideo].description}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h3 className="text-2xl font-bold mb-4">Featured Videos</h3>
                <p className="text-gray-700 mb-6">
                  Learn about cognitive biases and decision-making through our
                  curated video collection.
                </p>
              </motion.div>

              <div className="space-y-4">
                {videos.map((video, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      activeVideo === index
                        ? "bg-white shadow-md border-l-4 border-purple-600"
                        : "bg-purple-50 hover:bg-white"
                    }`}
                    onClick={() => setActiveVideo(index)}
                  >
                    <div className="flex gap-3 items-center">
                      <div className="relative flex-shrink-0 w-16 h-16 rounded overflow-hidden">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                          <Play className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm md:text-base line-clamp-1">
                          {video.title}
                        </h4>
                        <span className="text-xs text-purple-700">
                          {video.duration}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <a
                  href="#"
                  className="inline-flex items-center font-semibold bg-white text-purple-700 px-6 py-3 rounded-lg shadow-sm hover:bg-purple-50 transition-colors"
                >
                  View Complete Library <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
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
                    : `${workshop.color} text-gray-800`
                } cursor-pointer`}
              >
                <div
                  className={`p-4 rounded-full w-fit ${
                    hoveredCard === index
                      ? "bg-white bg-opacity-20"
                      : "bg-white"
                  } mb-6`}
                >
                  {workshop.icon}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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
              Join thousands of professionals who have transformed their
              thinking and decision-making.
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

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Error20</h2>
              <p className="text-purple-200 max-w-sm">
                Helping professionals overcome cognitive biases and make better
                decisions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-purple-200 hover:text-white transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#videos"
                      className="text-purple-200 hover:text-white transition-colors"
                    >
                      Videos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#resources"
                      className="text-purple-200 hover:text-white transition-colors"
                    >
                      Free PDFs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-purple-200 hover:text-white transition-colors"
                    >
                      Research
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-purple-200 hover:text-white transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-purple-200 hover:text-white transition-colors"
                    >
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-purple-200 hover:text-white transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-purple-200 hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Connect</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-purple-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-purple-300 text-sm">
              © 2025 Error20. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-purple-300 text-sm hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-purple-300 text-sm hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Error20LandingPage;
