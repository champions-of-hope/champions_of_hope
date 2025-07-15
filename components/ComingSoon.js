"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ComingSoon = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black p-6 sm:p-12">
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          className="relative mb-8"
          animate={{
            background: [
              'linear-gradient(45deg, #1e3a8a, #7e22ce)',
              'linear-gradient(45deg, #7e22ce, #1e3a8a)',
              'linear-gradient(45deg, #1e3a8a, #7e22ce)',
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Coming Soon
          </h2>
          <motion.span
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
            animate={{ scaleX: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Something exciting is on the way! Stay tuned for updates.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ComingSoon;