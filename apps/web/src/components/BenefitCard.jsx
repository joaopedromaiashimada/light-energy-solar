import React from 'react';
import { motion } from 'framer-motion';

function BenefitCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-8 shadow-lg shadow-[#8DBA2F]/10 hover:shadow-xl hover:shadow-[#8DBA2F]/20 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-14 h-14 bg-gradient-to-br from-[#8DBA2F] to-[#7AA528] rounded-xl flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ textWrap: 'balance' }}>
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export default BenefitCard;