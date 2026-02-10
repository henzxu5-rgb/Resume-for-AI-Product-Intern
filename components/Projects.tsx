import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Tag } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Projects: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">精选项目</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            全周期产品开发展示，从逻辑建模到 MVP 落地。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RESUME_DATA.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden bg-slate-200 dark:bg-slate-800 relative">
                 {/* Decorative Overlay for image placeholder */}
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
                 <img 
                    src={project.imagePlaceholder} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3 py-1 text-xs font-semibold bg-violet-500 text-white rounded-full">
                        {project.category}
                    </span>
                 </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-violet-500 transition-colors">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-violet-500 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-2">担任角色</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.role.map((r, i) => (
                            <span key={i} className="text-xs text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">
                                {r}
                            </span>
                        ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-2">技术栈</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((t, i) => (
                            <span key={i} className="text-xs font-mono text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/20 border border-violet-100 dark:border-violet-500/20 px-2 py-1 rounded-md flex items-center gap-1">
                                <Tag className="w-3 h-3" /> {t}
                            </span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;