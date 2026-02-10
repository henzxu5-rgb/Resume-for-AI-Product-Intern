import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA, getIcon } from '../constants';

const Competencies: React.FC = () => {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">核心竞争力</h2>
          <div className="w-20 h-1 bg-violet-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESUME_DATA.competencies.map((comp, index) => (
            <motion.div
              key={comp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-3xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 backdrop-blur-sm shadow-sm hover:shadow-xl hover:shadow-violet-500/5 hover:border-violet-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {getIcon(comp.iconName, "w-6 h-6")}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{comp.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                {comp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competencies;