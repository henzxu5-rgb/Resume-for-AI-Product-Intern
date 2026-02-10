import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-violet-500/20 dark:bg-violet-500/10 rounded-full blur-3xl animate-blob mix-blend-multiply dark:mix-blend-screen filter opacity-70"></div>
        <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen filter opacity-70"></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-screen filter opacity-70"></div>
      </div>

      <div className="relative z-10 max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-300 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            求职意向：AI 产品实习
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            {RESUME_DATA.name}
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-300 mb-4">
            {RESUME_DATA.title}
          </h2>

          <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-600 dark:from-violet-400 dark:to-blue-400 font-medium mb-8">
            {RESUME_DATA.subtitle}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href={`mailto:${RESUME_DATA.email}`}
              className="flex items-center gap-2 px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-medium hover:scale-105 transition-transform shadow-lg shadow-violet-500/20"
            >
              <Mail className="w-4 h-4" />
              联系我
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-600"
      >
        <ArrowDown className="w-6 h-6 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;