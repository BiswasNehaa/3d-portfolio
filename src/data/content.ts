export const profile = {
  name: "Neha Biswas",
  role: "AI Engineer",
  roleLine: "RAG & LLM Systems — Final-Year CSE Student",
  description:
    "Final-year Computer Science Engineering student specializing in AI Engineering, production RAG systems, and LLM application development.",
  email: "itsnehab.official@gmail.com",
  github: "https://github.com/BiswasNehaa",
  linkedin: "https://www.linkedin.com/in/neha-biswas-/",
};

export const intro = {
  status: "SYSTEM STATUS — CHARTING",
  cta: "Begin the Chart",
  skip: "Skip to the chart",
  lines: [
    "Every system starts as an unmapped territory.",
    "This is a chart of what's been built, retrieved, and verified.",
  ],
};

export type BearingId = "engineer" | "workshop" | "instruments" | "archive" | "log" | "signal";

export const bearings: {
  id: BearingId;
  heading: string; // compass heading e.g. "000°"
  label: string;
  subtitle: string;
  fragment: string;
  angle: number; // degrees, 0 = N, clockwise
}[] = [
  {
    id: "engineer",
    heading: "000°",
    label: "The Engineer",
    subtitle: "About",
    fragment: "Where the chart begins.",
    angle: 0,
  },
  {
    id: "workshop",
    heading: "060°",
    label: "The Workshop",
    subtitle: "Projects",
    fragment: "Three systems, built and rebuilt.",
    angle: 60,
  },
  {
    id: "instruments",
    heading: "120°",
    label: "The Instruments",
    subtitle: "Skills",
    fragment: "What this engineer navigates with.",
    angle: 120,
  },
  {
    id: "archive",
    heading: "180°",
    label: "The Archive",
    subtitle: "Open Source",
    fragment: "Marks left in other people's charts.",
    angle: 180,
  },
  {
    id: "log",
    heading: "240°",
    label: "The Log",
    subtitle: "Experience & Education",
    fragment: "Entries from the voyage so far.",
    angle: 240,
  },
  {
    id: "signal",
    heading: "300°",
    label: "The Signal",
    subtitle: "Contact",
    fragment: "A frequency, left open.",
    angle: 300,
  },
];

export const about = {
  fragment: "Where the chart begins.",
  body: "Final-year CSE student specializing in AI Engineering, production RAG systems, and LLM application development. Built and deployed ASTRA, an AI Academic Advisor, and CheckMyNotes. Strong Python fundamentals with experience in vector databases, embeddings, LangGraph orchestration, and cloud deployment.",
  notes: [
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
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "ai-llm",
    label: "AI / LLM",
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
    skills: ["Python (Primary)", "FastAPI", "Pydantic v2", "C", "C++", "Java"],
  },
  {
    id: "databases",
    label: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "FAISS", "ChromaDB"],
  },
  {
    id: "cloud",
    label: "Cloud & Tools",
    skills: ["Git", "GitHub Actions", "AWS EC2", "Docker", "Streamlit Cloud", "Render"],
  },
  {
    id: "nlp-ml",
    label: "NLP / ML",
    skills: ["NLTK", "spaCy", "Pandas", "Matplotlib", "PyMuPDF"],
  },
];

export type Project = {
  id: string;
  chartName: string;
  title: string;
  tagline: string;
  fragment: string;
  description: string;
  architecture: string;
  decisions: string[];
  technologies: string[];
  features: string[];
  route?: string[];
  accent: "brass" | "amber" | "teal";
  layout: "route" | "notebook" | "map";
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "astra",
    chartName: "ASTRA",
    title: "ASTRA",
    tagline: "Self-Correcting RAG Research Assistant",
    fragment: "A route that checks its own bearing before arriving.",
    description:
      "A Corrective RAG research assistant built over arXiv paper abstracts. The system generates answers grounded in retrieved sources and independently fact-checks each answer using a second, separate LLM call.",
    architecture:
      "Documents are ingested from the arXiv API, chunked, embedded with HuggingFace embeddings, and stored in ChromaDB. A LangGraph agent retrieves relevant chunks, generates a grounded answer with Groq LLaMA 3.3, then hands that answer to an independent verification call. If the verifier flags it unsupported, the graph loops back through a corrective retry — capped at 2 attempts — before returning a final, source-grounded answer via FastAPI.",
    decisions: [
      "Verification runs as a separate LLM call, not a self-critique in the same context — keeps the check honest.",
      "Retry logic is conditional and capped at 2 attempts, so the graph can't loop forever on a stubborn question.",
      "Embeddings and vector storage are decoupled from generation, so the retrieval layer can be re-indexed independently.",
    ],
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
    route: ["Ingest", "Chunk", "Embed", "Retrieve", "Generate", "Verify", "Correct"],
    accent: "brass",
    layout: "route",
    github: "https://github.com/BiswasNehaa/Astra",
  },
  {
    id: "checkmynotes",
    chartName: "CheckMyNotes",
    title: "CheckMyNotes",
    tagline: "AI Notebook Grading Web App",
    fragment: "Marginalia, written by a model instead of a teacher.",
    description:
      "A full-stack AI application that evaluates handwritten notebook pages using multimodal vision models and returns per-step correctness checks with pinpointed mistake coordinates.",
    architecture:
      "A React + Vite frontend uploads notebook page images to a FastAPI backend, which sends them to Groq's vision LLMs for step-by-step evaluation. Results — including mistake coordinates — are persisted in SQLite and rendered back as an interactive, zoomable page with mistake pins. PyMuPDF assembles graded pages into single-day or merged semester PDF exports. Vision calls use exponential-backoff retries, with an offline fallback engine when the API is unreachable.",
    decisions: [
      "Mistake locations are returned as coordinates, not just text, so the UI can pin them directly on the page image.",
      "An offline fallback engine keeps the app usable when the vision API is unavailable, instead of failing outright.",
      "Exponential-backoff retries absorb transient vision-API errors without surfacing them to the user.",
    ],
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
    accent: "amber",
    layout: "notebook",
    github: "https://github.com/BiswasNehaa/CheckMyNotes",
    demo: "https://acadine-frontend.onrender.com",
  },
  {
    id: "advisor",
    chartName: "AI Academic Advisor",
    title: "AI Academic Advisor",
    tagline: "RAG-Based Academic Recommendation System",
    fragment: "A map of courses, drawn from where you want to end up.",
    description:
      "An end-to-end RAG system that recommends courses based on career goals, completed courses, and credit limits.",
    architecture:
      "A career goal is embedded and matched against a FAISS index of course descriptions to surface semantically relevant courses. Groq LLaMA 3.3, orchestrated with LangChain, reasons over the retrieved courses against the student's completed courses and credit limit, validating prerequisites before returning a recommendation. Pydantic v2 schemas enforce strict input and output validation across the pipeline, and the interface is deployed on Streamlit Cloud.",
    decisions: [
      "Prerequisite validation runs as an explicit check against completed courses, not left to the LLM's judgment alone.",
      "Pydantic v2 schemas validate both input and output, so malformed course data can't silently reach the model.",
      "Credit limit handling is enforced in code, keeping recommendations within what a student can actually enroll in.",
    ],
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
    route: ["Career Goal", "Skill Mapping", "Course Retrieval", "Prerequisite Validation", "Recommendation"],
    accent: "teal",
    layout: "map",
    github: "https://github.com/BiswasNehaa/universal-academic-advisor",
    demo: "https://ai-academic-rag-based-system.streamlit.app/",
  },
];

export const openSource = {
  fragment: "Marks left in other people's charts.",
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

export const signal = {
  fragment: "A frequency, left open.",
  heading: "OPEN TO NEW COORDINATES.",
  body: "I'm open to AI Engineering opportunities, internships, and meaningful collaborations involving RAG systems, LLM applications, and intelligent software.",
};
