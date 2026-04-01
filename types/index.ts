export interface NavLink {
  label: string;
  href: string;
}

export interface HeroInfoRow {
  key: string;
  value: string;
  variant?: "default" | "rust" | "green";
}

export interface Service {
  icon: string;
  name: string;
  description: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export type TimelineType = "education" | "work";

export interface TimelineItem {
  id: string;
  organisation: string;
  role: string;
  date: string;
  type: TimelineType;
  subType?: "internship" | "work" | "freelance";
  isActive: boolean;
  description: string;
  tags: string[];
  progress?: {
    label: string;
    percentage: number;
    display: string;
  };
}

export interface ProjectLink {
  type: "live" | "github" | "private";
  href?: string;
}

export interface Project {
  ordinal: string;
  title: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
}

export interface SkillGroup {
  heading: string;
  skills: string[];
}

export interface ContactMethod {
  label: string;
  value: string;
  display: string;
  icon: string;
  href: string;
}

export interface SelectOption {
  value: string;
  label: string;
}
