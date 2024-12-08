import React from 'react';
import { motion } from 'framer-motion';

interface ToastProps {
  message: string;
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({ message }) => {
  return (
    <div className="fixed top-[32px] left-0 w-full flex justify-center z-50">
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: -20, scale: 0.3 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.5 }}
        transition={{
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1],
          scale: {
            type: 'spring',
            damping: 15,
            stiffness: 200,
          },
        }}
      >
        <motion.div
          className="mb-0 flex flex-col items-center justify-center p-6 w-screen bg-gray-100 text-gray-500 text-3xl font-bold px-6 py-3 rounded-xl shadow-lg"
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          exit={{ y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {message}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Toast;
