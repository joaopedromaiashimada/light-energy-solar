import React from 'react';
import { motion } from 'framer-motion';

function StepCard({ number, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative"
    >
      <div className="bg-white rounded-2xl p-8 shadow-lg shadow-[#8DBA2F]/10 hover:shadow-xl hover:shadow-[#8DBA2F]/20 transition-all duration-300">
        <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-[#8DBA2F] to-[#7AA528] rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-2xl font-bold text-white">{number}</span>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ textWrap: 'balance' }}>
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default StepCard;