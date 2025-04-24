import React, { useState } from "react";
import { motion } from "framer-motion";
import quizData from "../../data/quizData";
import { useLanguage } from "../../context/useLanguage";
import { translations } from "../../translations";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);
  const { language } = useLanguage();
  const t = translations[language];

  // UI Text translations
  const uiText = {
    ar: {
      question: "سؤال",
      of: "من",
      answered: "أسئلة تم الإجابة عليها",
      retakeQuiz: "إعادة الاختبار",
      messageForYou: "رسالة لك:",
    },
    en: {
      question: "Question",
      of: "of",
      answered: "questions answered",
      retakeQuiz: "Retake Quiz",
      messageForYou: "Message for you:",
    },
  }[language];

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });

    // Move to next question
    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    // Count occurrences of each answer type
    const answerCounts = {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
    };

    Object.values(answers).forEach((answer) => {
      answerCounts[answer]++;
    });

    // Find which letter has the most selections
    const maxAnswerType = Object.keys(answerCounts).reduce((a, b) =>
      answerCounts[a] > answerCounts[b] ? a : b
    );

    // Find the corresponding result
    const resultData = quizData.results.find(
      (resultItem) => resultItem.type === maxAnswerType
    );

    setResult(resultData);
    setShowResult(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setResult(null);
  };

  return (
    <section
      id="quiz"
      className="py-20 bg-purple-50 text-right"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === "ar" ? quizData.title : quizData.titleEn}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {language === "ar" ? quizData.description : quizData.descriptionEn}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {!showResult ? (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: language === "ar" ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: language === "ar" ? -100 : 100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <div
                    className={`text-sm text-purple-600 mb-2 text-${
                      language === "ar" ? "right" : "left"
                    }`}
                  >
                    {uiText.question} {currentQuestion + 1} {uiText.of}{" "}
                    {quizData.questions.length}
                  </div>
                  <h3
                    className={`text-xl font-bold text-${
                      language === "ar" ? "right" : "left"
                    }`}
                  >
                    {language === "ar"
                      ? quizData.questions[currentQuestion].text
                      : quizData.questions[currentQuestion].textEn}
                  </h3>
                </div>

                <div className="space-y-4">
                  {quizData.questions[currentQuestion].options.map((option) => (
                    <motion.button
                      key={option.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() =>
                        handleAnswer(
                          quizData.questions[currentQuestion].id,
                          option.id
                        )
                      }
                      className={`w-full text-${
                        language === "ar" ? "right" : "left"
                      } p-4 rounded-lg border border-purple-200 hover:bg-purple-100 hover:border-purple-300 transition-colors`}
                    >
                      {language === "ar" ? option.text : option.textEn}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
              <div
                className={`mt-8 flex justify-between items-center flex-${
                  language === "ar" ? "row" : "row-reverse"
                }`}
              >
                <div className="text-sm text-gray-500">
                  {Object.keys(answers).length} {uiText.of}{" "}
                  {quizData.questions.length} {uiText.answered}
                </div>
                <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-purple-600 h-2.5 rounded-full"
                    style={{
                      width: `${
                        (Object.keys(answers).length /
                          quizData.questions.length) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="text-center">
                <div className="mb-6">
                  <span className="inline-block p-4 bg-purple-100 rounded-full text-purple-700 text-3xl mb-4">
                    ✨
                  </span>
                  <h3 className="text-2xl font-bold mb-2">
                    {language === "ar" ? result.title : result.titleEn}
                  </h3>
                </div>
                <div className="mb-8 text-gray-700">
                  <p className="mb-4">
                    {language === "ar"
                      ? result.description
                      : result.descriptionEn}
                  </p>
                  <div
                    className={`bg-purple-50 p-4 rounded-lg border border-purple-100 text-${
                      language === "ar" ? "right" : "left"
                    }`}
                  >
                    <h4 className="font-semibold mb-2">
                      {uiText.messageForYou}
                    </h4>
                    <p>{language === "ar" ? result.advice : result.adviceEn}</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetQuiz}
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  {uiText.retakeQuiz}
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quiz;
