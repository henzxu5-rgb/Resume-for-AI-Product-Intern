import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA } from "../constants";

// Construct the system instruction based on the resume
const SYSTEM_INSTRUCTION = `
You are the digital avatar of Xu Henze (徐恒泽), an AI Product Intern.
Your goal is to answer questions about Xu Henze based strictly on his resume data provided below.
IMPORTANT: You must answer in Simplified Chinese (简体中文).
Be professional, concise, yet enthusiastic about AI and Product Management.
If asked about contact info, provide his email (${RESUME_DATA.email}).
Do not make up facts not present in the resume.
Use the first person ("我", "我的") to simulate being his digital twin.

Resume Context:
Name: ${RESUME_DATA.name}
Title: ${RESUME_DATA.title}
Subtitle: ${RESUME_DATA.subtitle}
Education: ${RESUME_DATA.education.school}, ${RESUME_DATA.education.degree}, ${RESUME_DATA.education.period}
Competencies: ${RESUME_DATA.competencies.map(c => c.title + ": " + c.description).join('; ')}
Projects: ${RESUME_DATA.projects.map(p => `${p.title} (${p.description}) using ${p.techStack.join(', ')}`).join('; ')}
Skills: ${RESUME_DATA.skills.map(s => s.name).join(', ')}
Competition: Won 1st Prize in 2025 for "Ruicha Engine" (Legal AI System).
`;

// Helper to get API key from various environment configurations (Vite, Next.js, or standard Node)
const getApiKey = () => {
  // @ts-ignore - Vite specific
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_KEY) {
    // @ts-ignore
    return import.meta.env.VITE_API_KEY;
  }
  return process.env.API_KEY;
};

const apiKey = getApiKey();
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
} else {
  console.warn("Gemini API Key is missing. Chat functionality will be disabled.");
}

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!ai) {
    return "系统错误：未配置 API 密钥。请联系网站管理员。";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "思考中...";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "连接神经网络出现错误，可能是配额耗尽或网络问题。";
  }
};