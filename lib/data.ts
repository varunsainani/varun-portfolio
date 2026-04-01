import type {
  NavLink,
  HeroInfoRow,
  Service,
  ProcessStep,
  TimelineItem,
  Project,
  SkillGroup,
  ContactMethod,
  SelectOption,
} from "@/types";

// ─── Navigation

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// ─── Hero

export const HERO_INFO_ROWS: HeroInfoRow[] = [
  { key: "Status", value: "Open to Opportunities", variant: "green" },
  { key: "University", value: "SZABIST Karachi" },
  { key: "Year", value: "2nd Year · BS CS", variant: "rust" },
  { key: "Experience", value: "1 Year" },
  { key: "Stack", value: "React · Next.js · TS · Node", variant: "rust" },
  { key: "Freelance", value: "Fiverr · Active since 2024" },
];

// ─── Services

export const SERVICES: Service[] = [
  {
    icon: "⚛️",
    name: "Web Applications",
    description:
      "Scalable, performant full-stack apps built with React & Next.js. TypeScript throughout, REST APIs, and clean component architecture.",
  },
  {
    icon: "🖥️",
    name: "Landing Pages",
    description:
      "High-converting, pixel-perfect landing pages built for speed, clarity, and a strong first impression — optimised for all devices.",
  },
  {
    icon: "🔌",
    name: "Backend & APIs",
    description:
      "Node.js REST APIs, database integration with MongoDB & MySQL, and seamless front-to-back wiring on production applications.",
  },
  {
    icon: "🛠️",
    name: "Site Improvements & Fixes",
    description:
      "Existing site improvements & fixes — joining active codebases, squashing bugs, refactoring messy code, and improving live sites.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "Understand",
    description:
      "I listen first. I dig into your goals, constraints, and audience before writing a single line of code.",
  },
  {
    number: 2,
    title: "Scope",
    description:
      "Together we define clear deliverables, timeline, and tech approach — no surprises mid-project.",
  },
  {
    number: 3,
    title: "Build",
    description:
      "Clean, maintainable code with regular check-ins. You see progress early and often.",
  },
  {
    number: 4,
    title: "Deliver",
    description:
      "Tested, documented, deployed. I hand over ownership cleanly and stay available for follow-ups.",
  },
];

// ─── Experience & Education

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: "szabist",
    organisation: "SZABIST University, Karachi",
    role: "BS Computer Science",
    date: "Sep 2024 — Present",
    type: "education",
    isActive: true,
    description:
      "Currently in my 2nd Year of a four-year BS Computer Science programme. Coursework covers data structures, OOP, algorithms, and software engineering fundamentals. Maintaining a CGPA of 3.07 while simultaneously freelancing and building real-world projects.",
    tags: ["Data Structures", "OOP", "Algorithms", "Software Engineering"],
    progress: {
      label: "Year 2 of 4",
      percentage: 40,
      display: "~40%",
    },
  },
  {
    id: "airtecture",
    organisation: "Airtective",
    role: "Backend Developer Intern",
    date: "Jun 2025 — Aug 2025",
    type: "work",
    subType: "internship",
    isActive: false,
    description:
      "Completed a backend development internship where I developed and maintained server-side features using Node.js. Contributed to API development and supported the company's digital operations during a fast-paced internship period.",
    tags: ["Node.js", "Backend Development", "API Development"],
  },
  {
    id: "fiverr",
    organisation: "Fiverr — Freelance",
    role: "Freelance Full-Stack Developer",
    date: "Jan 2024 — Present",
    type: "work",
    subType: "freelance",
    isActive: true,
    description:
      "Delivering client projects in React, Next.js, and Node.js since 2024. Managing the full project lifecycle independently — from requirement gathering and scoping through to final deployment. Also developed OOP-based applications in Java and C++ for clients with specific technical requirements.",
    tags: [
      "React",
      "Next.js",
      "Node.js",
      "Client Relations",
      "Full Project Lifecycle",
    ],
  },
];

// ─── Projects

export const PROJECTS: Project[] = [
  {
    ordinal: "I",
    title: "Amazon E-Commerce Clone",
    description:
      "Responsive e-commerce frontend with dynamic search, product filtering, and cart state managed entirely in vanilla JavaScript. Structured with reusable UI components and documented version control across 20+ commits.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    links: [
      {
        type: "live",
        href: "https://amazon-varun-sainanis-projects.vercel.app/",
      },
      { type: "github", href: "https://github.com/varunsainani/amazon-clone" },
    ],
  },
  {
    ordinal: "II",
    title: "Shopping Cart Web App",
    description:
      "Type-safe cart with real-time updates and state managed entirely through React hooks — no external state libraries. Strict TypeScript interfaces across all components improved code predictability and eliminated common runtime errors.",
    stack: ["React", "TypeScript", "CSS3"],
    links: [
      {
        type: "live",
        href: "https://shopping-cart-varun-sainanis-projects.vercel.app/",
      },
      { type: "github", href: "https://github.com/varunsainani/shopping-cart" },
    ],
  },
  {
    ordinal: "III",
    title: "TaskFlow",
    description:
      "TaskFlow: a dynamic state-driven task manager with full CRUD, typed hooks, and a fully responsive UI.",
    stack: ["React", "TypeScript", "Hooks"],
    links: [
      {
        type: "live",
        href: "https://todo-list-varun-sainanis-projects.vercel.app/",
      },
      { type: "github", href: "https://github.com/varunsainani/todo-list" },
    ],
  },
  {
    ordinal: "IV",
    title: "Java Systems Projects",
    description:
      "Two independent systems: an Artisan Inventory Management System architected using OOP principles with modular design, and a Cognitive Load Management System that schedules tasks by calculating cognitive load using DSA-based algorithms.",
    stack: ["Java", "OOP", "Data Structures"],
    links: [
      {
        type: "github",
        href: "https://github.com/varunsainani/artisan-inventory-management",
      },
      {
        type: "github",
        href: "https://github.com/varunsainani/cognitive-load-management-system",
      },
    ],
  },
  {
    ordinal: "V",
    title: "Full-Stack Team Contributions",
    description:
      "Converted pixel-accurate HTML/CSS designs into production React components and integrated REST APIs in live Next.js applications. Collaborated with backend team members on API contracts and maintained consistent component patterns across the codebase.",
    stack: ["Next.js", "Node.js", "React", "REST API"],
    links: [{ type: "private" }, { type: "private" }],
  },
];

// ─── Skills

export const SKILL_GROUPS: SkillGroup[] = [
  {
    heading: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "UI/UX",
    ],
  },
  {
    heading: "Backend & Databases",
    skills: ["Node.js", "REST APIs", "MongoDB", "MySQL"],
  },
  {
    heading: "Languages",
    skills: ["JavaScript", "TypeScript", "Java", "C", "C++"],
  },
  {
    heading: "Tools & Workflow",
    skills: ["Git", "GitHub", "VS Code", "IntelliJ", "Yarn"],
  },
];

// ─── Contact

export const CONTACT_METHODS: ContactMethod[] = [
  {
    label: "Email",
    value: "varunsainani0990@gmail.com",
    display: "varunsainani0990@gmail.com",
    icon: "@",
    href: "mailto:varunsainani0990@gmail.com",
  },
  {
    label: "Phone",
    value: "+92 309 7565902",
    display: "+92 309 7565902",
    icon: "WA",
    href: "https://wa.me/923097565902",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/varunsainani",
    display: "linkedin.com/in/varunsainani",
    icon: "in",
    href: "https://linkedin.com/in/varunsainani",
  },
  {
    label: "GitHub",
    value: "github.com/varunsainani",
    display: "github.com/varunsainani",
    icon: "gh",
    href: "https://github.com/varunsainani",
  },
];

export const CONTACT_TYPE_OPTIONS: SelectOption[] = [
  { value: "recruiter", label: "Recruiter / HR" },
  { value: "founder", label: "Startup Founder" },
  { value: "client", label: "Freelance Client" },
  { value: "agency", label: "Agency" },
  { value: "other", label: "Other" },
];

export const BUDGET_OPTIONS: SelectOption[] = [
  { value: "na", label: "N/A — Internship / Job" },
  { value: "100", label: "$100 – $500" },
  { value: "500", label: "$500 – $1,500" },
  { value: "1500", label: "$1,500 – $5,000" },
  { value: "5000", label: "$5,000+" },
];
