import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-purple-300 opacity-20"
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "10%", left: "5%" }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-indigo-400 opacity-20"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: "10%", right: "10%" }}
      />
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-pink-300 opacity-20"
        animate={{
          x: [0, 40, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "40%", right: "25%" }}
      />
    </div>
  );
};

export default AnimatedBackground;