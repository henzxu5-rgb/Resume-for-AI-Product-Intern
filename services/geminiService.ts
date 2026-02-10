import { RESUME_DATA } from "../constants";

// 本地预设问答逻辑 (Rule-based Response)
// 由于暂时不接入真实 LLM，使用关键词匹配来模拟对话
// 这样可以确保面试官/访客能获得准确的信息，同时展示逻辑思维

export const sendMessageToGemini = async (message: string): Promise<string> => {
  // 模拟网络延迟，增加真实感
  await new Promise(resolve => setTimeout(resolve, 600 + Math.random() * 800));

  const lowerMsg = message.toLowerCase();

  // 1. 联系方式 / Contact
  if (lowerMsg.includes("联系") || lowerMsg.includes("contact") || lowerMsg.includes("email") || lowerMsg.includes("邮箱") || lowerMsg.includes("电话")) {
    return `很高兴你对我的背景感兴趣！\n\n你可以通过邮箱直接联系我：${RESUME_DATA.email}\n\n期待与您的交流。`;
  }

  // 2. 核心竞争力 / Competency
  if (lowerMsg.includes("优势") || lowerMsg.includes("竞争力") || lowerMsg.includes("强项") || lowerMsg.includes("背景")) {
    return "我的核心优势在于“法学逻辑”与“AI 原生思维”的结合。\n\n1. 复合背景：法学训练赋予了我严谨的逻辑建模能力，非常适合处理复杂的 Agent 业务逻辑。\n2. AI Native：我不仅是使用者，更是构建者，熟练掌握 Prompt Engineering 和 MVP 快速开发。\n3. 技术理解：能用 Vibe Coding 模式跨越技术壁垒，快速落地产品想法。";
  }

  // 3. 项目经历 / Projects
  if (lowerMsg.includes("项目") || lowerMsg.includes("project") || lowerMsg.includes("作品") || lowerMsg.includes("devecho")) {
    return "我强烈推荐您查看我最近**独立完成**的作品 —— **DevEcho**。\n\n这是一个针对开发者反馈的智能化处理 Agent。项目的核心亮点在于：\n\n1. **全链路自动化**：设计了从“非结构化吐槽”到“标准 PRD”的完整处理流。\n2. **Vibe Coding 实践**：利用 Cursor + Streamlit 快速构建 MVP，体现了极强的工程落地能力。\n\n您可以点击左侧卡片体验在线 Demo。";
  }

  // 4. 技术栈 / Skills
  if (lowerMsg.includes("技术") || lowerMsg.includes("skill") || lowerMsg.includes("栈") || lowerMsg.includes("python") || lowerMsg.includes("figma")) {
    return "作为 AI 产品实习生，我的技能树主要分布在：\n\n1. AI 能力：Prompt Engineering (CoT/Few-shot), Dify 工作流编排。\n2. 产品能力：Figma 原型绘制, PRD 逻辑撰写, 需求分析。\n3. 工程基础：Python (自动化脚本), React (基础前端修改), Git 工作流。";
  }

  // 5. 自我介绍 / Intro
  if (lowerMsg.includes("是谁") || lowerMsg.includes("介绍") || lowerMsg.includes("who") || lowerMsg.includes("你好") || lowerMsg.includes("hello")) {
    return `你好！我是${RESUME_DATA.name}的数字分身。\n\n我现在的本体是一名大三在读的 AI 产品实习生，热衷于探索 LLM 在复杂逻辑场景下的应用。\n\n(注：当前为离线演示模式，您可以点击下方预设问题与我交互)`;
  }

  // Default Fallback
  return "【演示模式自动回复】\n\n抱歉，由于当前处于离线演示状态，我的“大脑”暂时无法处理这个特定的自由问题。\n\n您可以尝试询问我的：\n- 核心优势\n- 项目经历\n- 技术栈\n- 联系方式";
};