import React from 'react';
import { Mail } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{RESUME_DATA.name}</h3>
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            坐标：{RESUME_DATA.location}
          </p>
        </div>

        <div className="flex gap-6">
          <a href={`mailto:${RESUME_DATA.email}`} className="text-slate-500 hover:text-violet-500 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
        
        <div className="text-slate-500 dark:text-slate-600 text-sm">
          © {new Date().getFullYear()} 版权所有
        </div>
      </div>
    </footer>
  );
};

export default Footer;