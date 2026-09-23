export const profile = {
  name: "Neha Biswas",
  role: "AI Engineer",
  tagline: "Building intelligent systems.",
  summary:
    "Final-year Computer Science Engineering student specializing in production RAG systems, LLM application development, and agentic AI workflows.",
  status: "SYSTEM STATUS: EXPLORING INTELLIGENCE",
  email: "itsnehab.official@gmail.com",
  github: "https://github.com/BiswasNehaa",
  linkedin: "https://www.linkedin.com/in/neha-biswas-/",
};

export const about = {
  heading: "Curious by Nature. Building with Intelligence.",
  body: "Final-year Computer Science Engineering student specializing in AI Engineering, production RAG systems, and LLM application development. I enjoy building intelligent systems that combine retrieval, reasoning, validation, and practical user experiences.",
  highlights: [
    "Strong Python fundamentals",
    "RAG and LLM applications",
    "Vector databases and embeddings",
    "LangGraph orchestration",
    "Backend development",
    "Cloud deployment",
    "Open-source contributions",
  ],
};

export type SkillCategory = {
  id: string;
  label: string;
  color: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "ai-llm",
    label: "AI / LLM",
    color: "#8b5cf6",
    skills: [
      "LangChain",
      "LangGraph",
      "RAG Pipelines",
      "Corrective RAG",
      "Prompt Engineering",
      "LLM Evaluation",
      "FAISS",
      "ChromaDB",
      "Groq API",
      "LLaMA 3.3 70B",
      "HuggingFace Transformers",
      "Embeddings",
      "Machine Learning",
    ],
  },
  {
    id: "backend",
    label: "Backend & Languages",
    color: "#7fdfff",
    skills: ["Python (Primary)", "FastAPI", "Pydantic v2", "C", "C++", "Java"],
  },
  {
    id: "databases",
    label: "Databases",
    color: "#d946ef",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "FAISS", "ChromaDB"],
  },
  {
    id: "cloud",
    label: "Cloud & Tools",
    color: "#34d399",
    skills: ["Git", "GitHub Actions", "AWS EC2", "Docker", "Streamlit Cloud", "Render"],
  },
  {
    id: "nlp-ml",
    label: "NLP / ML",
    color: "#f59e0b",
    skills: ["NLTK", "spaCy", "Pandas", "Matplotlib", "PyMuPDF"],
  },
];

export type Project = {
  id: string;
  code: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  features: string[];
  pipeline?: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "astra",
    code: "PROJECT_01",
    title: "ASTRA",
    tagline: "Self-Correcting RAG Research Assistant",
    description:
      "A Corrective RAG research assistant built over arXiv paper abstracts. The system generates answers grounded in retrieved sources and independently fact-checks each answer using a second, separate LLM call.",
    technologies: [
      "Python",
      "FastAPI",
      "Groq LLaMA 3.3",
      "LangGraph",
      "HuggingFace Embeddings",
      "ChromaDB",
      "arXiv API",
      "Docker",
    ],
    features: [
      "Corrective RAG pipeline",
      "Self-correcting LangGraph agent",
      "Conditional retry logic",
      "Capped retry loop with a maximum of 2 attempts",
      "Source-grounded answer generation",
      "Independent answer verification",
      "arXiv ingestion and chunking",
      "Embeddings and vector storage",
      "FastAPI backend",
    ],
    pipeline: [
      "Documents",
      "Chunking",
      "Embeddings",
      "Retrieval",
      "Generation",
      "Verification",
      "Corrective Retry",
    ],
    github: "https://github.com/BiswasNehaa/Astra",
  },
  {
    id: "checkmynotes",
    code: "PROJECT_02",
    title: "CheckMyNotes",
    tagline: "AI Notebook Grading Web App",
    description:
      "A full-stack AI application that evaluates handwritten notebook pages using multimodal vision models and returns per-step correctness checks with pinpointed mistake coordinates.",
    technologies: ["Python", "FastAPI", "React", "Vite", "Groq Vision LLMs", "SQLite", "PyMuPDF"],
    features: [
      "Handwritten notebook image evaluation",
      "Multimodal AI vision analysis",
      "Per-step correctness checks",
      "Mistake coordinate detection",
      "Exponential-backoff retries",
      "Offline fallback engine",
      "FastAPI + SQLite backend",
      "React + Vite frontend",
      "Zoomable notebook viewer",
      "Interactive mistake-pin overlays",
      "PDF export for single-day and merged semester documents",
    ],
    github: "https://github.com/BiswasNehaa/CheckMyNotes",
    demo: "https://acadine-frontend.onrender.com",
  },
  {
    id: "advisor",
    code: "PROJECT_03",
    title: "AI Academic Advisor",
    tagline: "RAG System",
    description:
      "An end-to-end RAG system that recommends courses based on career goals, completed courses, and credit limits.",
    technologies: ["Python", "LangChain", "FAISS", "Groq LLaMA 3.3", "Streamlit", "Pydantic v2"],
    features: [
      "Career goal-based course recommendations",
      "FAISS semantic search",
      "LLaMA 3.3 70B via Groq",
      "Prerequisite validation",
      "Credit limit handling",
      "Streamlit Cloud deployment",
      "Pydantic v2 input/output schema validation",
    ],
    pipeline: ["Career Goal", "Skill Mapping", "Course Retrieval", "Prerequisite Validation", "Recommendations"],
    github: "https://github.com/BiswasNehaa/universal-academic-advisor",
    demo: "https://ai-academic-rag-based-system.streamlit.app/",
  },
];

export const openSource = {
  heading: "Building in Public. Contributing to Open Source.",
  summary: "Active contributor with 19+ merged/opened pull requests across open-source AI and developer tooling.",
  maintainer: "Maintainer of ASTRA, an MIT-licensed open-source project with contributor documentation.",
  repos: [
    {
      name: "i-am-bee/beeai-framework",
      org: "IBM",
      description: "Bug fixes and a 29-file model migration.",
      url: "https://github.com/i-am-bee/beeai-framework",
    },
    {
      name: "adam2go/tilo-framework",
      org: "adam2go",
      description: "Semantic embedding support in the memory pipeline.",
      url: "https://github.com/adam2go/tilo-framework",
    },
    {
      name: "matplotlib",
      org: "matplotlib",
      description: "Core rendering-bug fix.",
      url: "https://github.com/matplotlib/matplotlib",
    },
    {
      name: "JohannsenLum/canvas-api-mcp",
      org: "JohannsenLum",
      description: "Contribution to canvas-api-mcp.",
      url: "https://github.com/JohannsenLum/canvas-api-mcp",
    },
    {
      name: "py-pdf/pypdf",
      org: "py-pdf",
      description: "Contribution to pypdf.",
      url: "https://github.com/py-pdf/pypdf",
    },
    {
      name: "taksh1507/secret-guard",
      org: "taksh1507",
      description: "6 merged pull requests.",
      url: "https://github.com/taksh1507/secret-guard",
    },
  ],
};

export const experience = [
  {
    role: "Software Engineer Intern",
    org: "Iskraemeco India Pvt. Ltd.",
    location: "Kolkata",
    points: [
      "Contributed to a Workforce Management System supporting enterprise metering installation operations.",
      "Designed and documented database schemas, system architecture, and workflows for field engineer operations.",
    ],
  },
];

export const education = [
  {
    degree: "B.E. in Computer Science and Engineering",
    school: "Acharya Institute of Technology, Bangalore",
    detail: "CGPA: 8.6 / 10",
  },
  {
    degree: "Higher Secondary (PCMC)",
    school: "Aditya Educational Institute",
    detail: "83%",
  },
  {
    degree: "Secondary Education",
    school: "Jawahar Navodaya Vidyalaya",
    detail: "90.4%",
  },
];

export const coursework = [
  "Operating Systems",
  "Computer Networks",
  "DBMS",
  "Data Structures & Algorithms",
  "OOP",
  "DevOps",
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Open Source", href: "#open-source" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
