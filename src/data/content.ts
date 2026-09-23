export const profile = {
  name: "Neha Biswas",
  role: "AI Engineer | RAG & LLM Systems | Final-Year CSE Student",
  email: "itsnehab.official@gmail.com",
  github: "https://github.com/BiswasNehaa",
  linkedin: "https://www.linkedin.com/in/neha-biswas-/",
};

export const intro = {
  title: "THE UNFINISHED MACHINE",
  byline: "A portfolio by Neha Biswas",
  lines: [
    "Somewhere between a question and a working system, something begins.",
    "This machine is unfinished. You can explore it anyway.",
    "Every system starts with curiosity.",
  ],
  cta: "START EXPLORATION",
  skip: "Skip intro",
};

export type RoomId = "person" | "workshop" | "mind" | "archive" | "fieldnotes" | "contact";

export const rooms: {
  id: RoomId;
  number: string;
  name: string;
  subtitle: string;
  fragment: string;
}[] = [
  {
    id: "person",
    number: "01",
    name: "The Person",
    subtitle: "About",
    fragment: "Before the machine, there was a question.",
  },
  {
    id: "workshop",
    number: "02",
    name: "The Workshop",
    subtitle: "Projects",
    fragment: "Where the parts get built, tested, and corrected.",
  },
  {
    id: "mind",
    number: "03",
    name: "The Mind",
    subtitle: "Skills",
    fragment: "The instruments this engineer reaches for.",
  },
  {
    id: "archive",
    number: "04",
    name: "The Contribution Archive",
    subtitle: "Open Source",
    fragment: "Small fixes, left in other people's machines.",
  },
  {
    id: "fieldnotes",
    number: "05",
    name: "The Field Notes",
    subtitle: "Experience & Education",
    fragment: "What was learned, and where.",
  },
  {
    id: "contact",
    number: "06",
    name: "The Communication Room",
    subtitle: "Contact",
    fragment: "A channel, left open.",
  },
];

export const about = {
  fragment: "Before the machine, there was a question.",
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
  worldName: string;
  title: string;
  tagline: string;
  fragment: string;
  description: string;
  architecture: string;
  decisions: string[];
  technologies: string[];
  features: string[];
  pipeline?: string[];
  accent: "blue" | "red" | "ink";
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "astra",
    worldName: "ASTRA: The Self-Correcting Machine",
    title: "ASTRA",
    tagline: "Self-Correcting RAG Research Assistant",
    fragment: "A machine that checks its own work before it speaks.",
    description:
      "A Corrective RAG research assistant built over arXiv paper abstracts. The system generates answers grounded in retrieved sources and independently fact-checks each answer using a second, separate LLM call.",
    architecture:
      "Documents are ingested from the arXiv API, chunked, embedded with BAAI/bge-small-en-v1.5, and stored in ChromaDB. A LangGraph agent retrieves relevant chunks, generates a grounded answer with Groq LLaMA 3.3, then hands that answer to an independent verification call. If the verifier flags it unsupported, the graph loops back through a corrective retry — capped at 2 attempts — before returning a final, source-grounded answer via FastAPI.",
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
      "BAAI/bge-small-en-v1.5",
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
    pipeline: ["Ingest", "Chunk", "Embed", "Retrieve", "Generate", "Verify", "Corrective Retry"],
    accent: "blue",
    github: "https://github.com/BiswasNehaa/Astra",
  },
  {
    id: "checkmynotes",
    worldName: "CheckMyNotes: The Living Notebook",
    title: "CheckMyNotes",
    tagline: "AI Notebook Grading Web App",
    fragment: "A notebook that reads handwriting and marks its own margins.",
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
    accent: "red",
    github: "https://github.com/BiswasNehaa/CheckMyNotes",
    demo: "https://acadine-frontend.onrender.com",
  },
  {
    id: "advisor",
    worldName: "The Academic Compass",
    title: "AI Academic Advisor",
    tagline: "RAG System",
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
    pipeline: ["Career Goal", "Skill Mapping", "Course Retrieval", "Prerequisite Validation", "Recommendations"],
    accent: "ink",
    github: "https://github.com/BiswasNehaa/universal-academic-advisor",
    demo: "https://ai-academic-rag-based-system.streamlit.app/",
  },
];

export const openSource = {
  fragment: "Small fixes, left in other people's machines.",
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

export const contact = {
  fragment: "A channel, left open.",
  heading: "THE MACHINE IS STILL LEARNING.",
  body: "I'm open to AI Engineering opportunities, internships, and meaningful collaborations involving RAG systems, LLM applications, and intelligent software.",
};
