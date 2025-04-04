import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          rotate: { 
            duration: 2, 
            repeat: Infinity, 
            ease: "linear" 
          },
          scale: { 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }
        }}
        className="w-32 h-32"
      >
        <img src={logo} alt="Sugar Studio Logo" className="w-full h-full object-contain" />
      </motion.div>
    </div>
  );
};

export default Loading; 