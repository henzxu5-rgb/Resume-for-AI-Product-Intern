import React from 'react';
import { ResumeData } from './types';
import { BrainCircuit, Scale, Zap, Code, Terminal, MessageSquare } from 'lucide-react';

export const RESUME_DATA: ResumeData = {
  name: "徐恒泽",
  title: "AI Product Intern",
  subtitle: "法学逻辑建模 + AI Native 实践",
  email: "13611779662@163.com",
  github: "https://github.com/henzxu5-rgb",
  location: "Shanghai, China",
  education: {
    school: "北京航空航天大学 (Beihang University)",
    degree: "本科在读",
    period: "09/2022 – 06/2026",
    location: "北京"
  },
  competencies: [
    {
      id: "comp1",
      title: "复合背景 (Legal Logic)",
      description: "法学背景在读，具备严谨的法律逻辑建模与复杂业务抽象能力，擅长处理长文本逻辑拆解。",
      iconName: "Scale"
    },
    {
      id: "comp2",
      title: "AI 原生实践 (AI Native)",
      description: "具备 AI Native 思维，能熟练运用大模型辅助完成从需求定义、Prompt 调优到 MVP 构建的全链路闭环。",
      iconName: "Zap"
    },
    {
      id: "comp3",
      title: "技术理解 (Tech Savvy)",
      description: "了解 LLM 工作原理，具备强烈的工程安全意识。熟练运用 Vibe Coding 模式快速跨越技术门槛。",
      iconName: "BrainCircuit"
    }
  ],
  projects: [
    {
      id: "proj1",
      title: "DevEcho - 开发者反馈智能化 Agent",
      category: "AI Agent",
      description: "针对开发者生态中碎片化的技术反馈，设计了从“非结构化吐槽”到“标准 PRD”的自动化处理链路。",
      role: ["Agent Architecture", "Prompt Engineering", "Product Logic"],
      techStack: ["VibeCoding", "Cursor", "Claude Code", "Streamlit"],
      link: "https://devecho.streamlit.app/",
      imagePlaceholder: "https://picsum.photos/seed/devecho/600/400"
    },
    {
      id: "proj2",
      title: "Roblox 3D 意图识别驱动引擎",
      category: "Interactive AI",
      description: "结构化意图解析，将自然语言指令转化为视觉反馈，实现了“需求描述-语义解析-视觉表现”的交互链路。",
      role: ["Intent Parsing", "Prompt Design", "Rapid Prototyping"],
      techStack: ["LLM", "JSON", "Game Engine"],
      link: "https://henzxu5-rgb.github.io/ai-interactive-demo/",
      imagePlaceholder: "https://picsum.photos/seed/roblox/600/400"
    },
    {
      id: "proj3",
      title: "AI 产品经理面试模拟器",
      category: "EdTech",
      description: "MVP 快速构建，借助 AI 工具完成 UI/UX 设计，在 Dify 中集成大模型，基于 GitHub Actions 实现自动化部署。",
      role: ["MVP Builder", "CI/CD Setup", "Dify Integration"],
      techStack: ["Dify", "GitHub Actions", "React"],
      link: "https://henzxu5-rgb.github.io/",
      imagePlaceholder: "https://picsum.photos/seed/interviewer/600/400"
    },
    {
      id: "proj4",
      title: "睿察引擎 - 法律检察 AI 系统",
      category: "Competition (1st Prize)",
      description: "针对检察工作痛点进行逻辑拆解，设计三层提示工程框架，使通用模型具备专业法律推理能力。",
      role: ["Product Definition", "Logic Modeling", "Prompt Iteration"],
      techStack: ["Legal AI", "Prompt Engineering"],
      imagePlaceholder: "https://picsum.photos/seed/legal/600/400"
    }
  ],
  skills: [
    { name: "Prompt Engineering (CoT/Few-shot)", level: 95, category: "AI" },
    { name: "Python / AI Flow Automation", level: 85, category: "AI" },
    { name: "Figma & Prototyping", level: 90, category: "Product" },
    { name: "PRD Writing & Logic Analysis", level: 92, category: "Product" },
    { name: "English (CET-6 553)", level: 88, category: "Language" },
    { name: "AIGC Visual Tools (MJ/SD)", level: 80, category: "Product" }
  ]
};

// Helper to get icon component
export const getIcon = (name: string, className?: string) => {
  const icons: Record<string, React.ReactNode> = {
    Scale: <Scale className={className} />,
    Zap: <Zap className={className} />,
    BrainCircuit: <BrainCircuit className={className} />,
    Code: <Code className={className} />,
    Terminal: <Terminal className={className} />,
    MessageSquare: <MessageSquare className={className} />
  };
  return icons[name] || <Zap className={className} />;
};