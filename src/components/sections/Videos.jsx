import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import videos from "../../data/videos";

const Videos = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handleVideoItemClick = (index) => {
    if (activeVideo !== index) {
      setActiveVideo(index);
      setIsPlaying(false);
    }
  };

  return (
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
              {isPlaying ? (
                <iframe
                  src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                    videos[activeVideo].url
                  )}&show_text=false&data-autoplay="true"&mute=0`}
                  className="w-full h-full"
                  style={{
                    border: "none",
                    overflow: "hidden",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title={videos[activeVideo].title}
                />
              ) : (
                <>
                  <img
                    src={videos[activeVideo].thumbnail}
                    alt={videos[activeVideo].title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      className="w-20 h-20 bg-purple-700 rounded-full flex items-center justify-center hover:bg-purple-800 transition-colors text-white"
                      aria-label="Play video"
                      onClick={handlePlayClick}
                    >
                      <Play className="w-10 h-10 ml-1" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-1 sm:p-6">
                    <div className="text-white">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-0">
                          {videos[activeVideo].title}
                        </h3>
                        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm w-fit">
                          {videos[activeVideo].duration}
                        </span>
                      </div>
                      <div className="hidden sm:block mt-2">
                        <span className="text-gray-300">
                          {videos[activeVideo].description}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </div>

          <div className="lg:w-1/3">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
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
                  onClick={() => handleVideoItemClick(index)}
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
  );
};

export default Videos;
