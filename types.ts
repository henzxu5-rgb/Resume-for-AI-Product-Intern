export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  role: string[];
  techStack: string[];
  link?: string;
  imagePlaceholder?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'AI' | 'Product' | 'Language';
}

export interface Competency {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ResumeData {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  github: string;
  location: string;
  education: {
    school: string;
    degree: string;
    period: string;
    location: string;
  };
  competencies: Competency[];
  projects: Project[];
  skills: Skill[];
}