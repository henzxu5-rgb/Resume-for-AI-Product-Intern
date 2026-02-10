import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../constants';
import { Globe, Zap, GitBranch, Cpu, Layout } from 'lucide-react';

const Skills: React.FC = () => {
  const categoryMap: Record<string, string> = {
    'AI': 'AI 技术栈',
    'Product': '产品能力',
    'Language': '语言能力'
  };

  const categoryIcons: Record<string, React.ReactNode> = {
    'AI': <Cpu className="w-5 h-5" />,
    'Product': <Layout className="w-5 h-5" />,
    'Language': <Globe className="w-5 h-5" />
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 text-sm font-medium mb-4">
            <GitBranch className="w-4 h-4" />
            <span className="uppercase tracking-wide">Skill Tree</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">技术能力图谱</h2>
          <p className="text-slate-600 dark:text-slate-400">
            跨领域技能组合，构建 AI 产品经理的核心竞争力。
          </p>
        </motion.div>

        <div className="flex flex-col gap-24">
          {['AI', 'Product', 'Language'].map((cat) => {
            const catSkills = RESUME_DATA.skills.filter(s => s.category === cat);
            if (catSkills.length === 0) return null;

            return (
              <div key={cat} className="relative">
                {/* Category Node (Root) */}
                <div className="flex justify-center mb-8 relative z-20">
                    <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full shadow-xl shadow-violet-500/5 text-slate-900 dark:text-white font-semibold"
                    >
                        <span className="p-1.5 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full">
                            {categoryIcons[cat] || <Zap className="w-4 h-4" />}
                        </span>
                        {categoryMap[cat] || cat}
                    </motion.div>
                </div>

                {/* Tree Structure Visuals */}
                <div className="relative">
                    {/* Vertical Line from Root */}
                    <div className="absolute left-1/2 -translate-x-1/2 -top-8 h-8 w-px bg-slate-300 dark:bg-slate-700"></div>
                    
                    {/* Horizontal Connector Bar */}
                    <div className="hidden md:block absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>

                    {/* Skills Grid (Leaves) */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10 pt-8 md:pt-8">
                        {catSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group"
                            >
                                {/* Vertical Line from Bar to Node (Desktop) */}
                                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -top-8 h-8 w-px bg-slate-200 dark:bg-slate-800 group-hover:bg-violet-500/50 transition-colors"></div>
                                {/* Top Connector Dot */}
                                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -top-[1px] w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-violet-500 transition-colors"></div>

                                {/* Skill Card */}
                                <div className="w-[160px] md:w-[180px] p-4 bg-white dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-xl hover:shadow-lg hover:shadow-violet-500/10 hover:border-violet-500/40 transition-all duration-300 flex flex-col items-center text-center">
                                    <div className="mb-2 w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-400 dark:text-slate-500 group-hover:text-violet-500 group-hover:bg-violet-50 dark:group-hover:bg-violet-900/20 transition-colors">
                                        {skill.level}
                                    </div>
                                    <h4 className="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                        {skill.name}
                                    </h4>
                                    
                                    {/* Animated Glow Border */}
                                    <div className="absolute inset-0 rounded-xl border border-violet-500/0 group-hover:border-violet-500/20 transition-all duration-500"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;