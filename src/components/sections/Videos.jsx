import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import videos from "../../data/videos";
import { useLanguage } from "../../context/useLanguage";
import { translations } from "../../translations";

const Videos = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  // Translated section content
  const content = {
    ar: {
      title: "البودكاست والمحتوى المرئي",
      featuredEpisodes: "حلقات مميزة",
      discoverContent:
        "اكتشف محتوى متنوع لمساعدتك على فهم أزمة ربع العمر وتخطي التحديات النفسية والمهنية",
      viewFullLibrary: "عرض المكتبة كاملة",
      playVideo: "تشغيل الفيديو",
    },
    en: {
      title: "Podcasts and Video Content",
      featuredEpisodes: "Featured Episodes",
      discoverContent:
        "Discover diverse content to help you understand the quarter-life crisis and overcome psychological and professional challenges",
      viewFullLibrary: "View Full Library",
      playVideo: "Play Video",
    },
  }[language];

  // Memoized handler functions to prevent unnecessary re-renders
  const handlePlayClick = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const handleVideoItemClick = useCallback(
    (index) => {
      if (activeVideo !== index) {
        setActiveVideo(index);
        setIsPlaying(false);
      }
    },
    [activeVideo]
  );

  return (
    <section
      id="videos"
      className="py-20 bg-purple-100"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {content.title}
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
                  )}&show_text=false&mute=0`}
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
                  title={
                    language === "ar"
                      ? videos[activeVideo].title
                      : videos[activeVideo].titleEn
                  }
                  loading="lazy"
                />
              ) : (
                <>
                  <img
                    src={videos[activeVideo].thumbnail}
                    alt={
                      language === "ar"
                        ? videos[activeVideo].title
                        : videos[activeVideo].titleEn
                    }
                    className="w-full h-full object-cover opacity-80"
                    loading="lazy"
                    width="640"
                    height="360"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      className="w-20 h-20 bg-purple-700 rounded-full flex items-center justify-center hover:bg-purple-800 transition-colors text-white"
                      aria-label={content.playVideo}
                      onClick={handlePlayClick}
                    >
                      <Play
                        className={`w-10 h-10 ${
                          language === "ar" ? "ml-1" : "mr-1"
                        }`}
                      />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-1 sm:p-6">
                    <div
                      className={`text-white text-${
                        language === "ar" ? "right" : "left"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-0">
                          {language === "ar"
                            ? videos[activeVideo].title
                            : videos[activeVideo].titleEn}
                        </h3>
                        <span
                          className={`bg-purple-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm w-fit ${
                            language === "ar"
                              ? "mr-auto sm:mr-0"
                              : "ml-auto sm:ml-0"
                          }`}
                        >
                          {videos[activeVideo].duration}
                        </span>
                      </div>
                      <div className="hidden sm:block mt-2">
                        <span className="text-gray-300">
                          {language === "ar"
                            ? videos[activeVideo].description
                            : videos[activeVideo].descriptionEn}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </div>

          <div className="lg:w-1/3">
            <div
              className={`mb-8 text-${language === "ar" ? "right" : "left"}`}
            >
              <h3 className="text-2xl font-bold mb-4">
                {content.featuredEpisodes}
              </h3>
              <p className="text-gray-700 mb-6">{content.discoverContent}</p>
            </div>

            <div className="space-y-4">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg cursor-pointer transition-all text-${
                    language === "ar" ? "right" : "left"
                  } ${
                    activeVideo === index
                      ? `bg-white shadow-md ${
                          language === "ar" ? "border-r-4" : "border-l-4"
                        } border-purple-600`
                      : "bg-purple-50 hover:bg-white"
                  }`}
                  onClick={() => handleVideoItemClick(index)}
                >
                  <div className="flex gap-3 items-center">
                    <div className="relative flex-shrink-0 w-16 h-16 rounded overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={language === "ar" ? video.title : video.titleEn}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width="64"
                        height="64"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm md:text-base line-clamp-1">
                        {language === "ar" ? video.title : video.titleEn}
                      </h4>
                      <span className="text-xs text-purple-700">
                        {video.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
