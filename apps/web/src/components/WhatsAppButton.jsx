import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

function WhatsAppButton({ variant = 'floating', className = '', text = 'Solicitar Orçamento' }) {
  const whatsappUrl = 'https://wa.me/message/27DNWQR3MTEZM1';

  if (variant === 'floating') {
    return (
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-[#8DBA2F] to-[#7AA528] text-white p-4 rounded-full shadow-2xl shadow-[#8DBA2F]/50 hover:scale-110 hover:shadow-[#8DBA2F]/70 transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      >
        <MessageCircle className="w-7 h-7" />
        <motion.div
          className="absolute inset-0 rounded-full bg-[#8DBA2F]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ opacity: 0.3 }}
        />
      </motion.a>
    );
  }

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 bg-gradient-to-br from-[#8DBA2F] to-[#7AA528] text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-[#8DBA2F]/30 hover:shadow-xl hover:shadow-[#8DBA2F]/50 hover:scale-105 active:scale-[0.98] transition-all duration-200 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <MessageCircle className="w-6 h-6" />
      {text}
    </motion.a>
  );
}

export default WhatsAppButton;