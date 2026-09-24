export const profile = {
  name: "Neha Biswas",
  role: "AI Engineer",
  roleLine: "RAG & LLM Systems — Final-Year CSE Student",
  location: "Bangalore, India",
  intro:
    "She builds AI systems — production RAG pipelines, LLM applications — and contributes to open-source projects along the way.",
  email: "itsnehab.official@gmail.com",
  github: "https://github.com/BiswasNehaa",
  linkedin: "https://www.linkedin.com/in/neha-biswas-/",
};

export type LocationId = "house" | "studio" | "archive" | "lab" | "university" | "theatre";

export const locations: {
  id: LocationId;
  exhibit: string;
  label: string;
  prompt: string;
  position: [number, number, number];
  rotation: number;
}[] = [
  { id: "house", exhibit: "EXHIBIT 01", label: "The House", prompt: "MEET NEHA →", position: [-10, 0, 6], rotation: 0.5 },
  { id: "studio", exhibit: "EXHIBIT 02", label: "The Studio", prompt: "SEE THE PROJECTS →", position: [-3, 0, -7], rotation: -0.3 },
  { id: "university", exhibit: "EXHIBIT 03", label: "The University", prompt: "EDUCATION →", position: [-9, 0, -15], rotation: 0.9 },
  { id: "lab", exhibit: "EXHIBIT 04", label: "The Lab", prompt: "SKILLS & TOOLS →", position: [8, 0, -4], rotation: -0.7 },
  { id: "archive", exhibit: "EXHIBIT 05", label: "The Archive", prompt: "OPEN SOURCE →", position: [6, 0, -16], rotation: 0.2 },
  { id: "theatre", exhibit: "FINALE", label: "The Theatre", prompt: "WATCH THE STORY →", position: [-2, 0, -28], rotation: 0 },
];

export const about = {
  points: [
    "Strong Python fundamentals",
    "RAG and LLM applications",
    "Vector databases and embeddings",
    "LangGraph orchestration",
    "Backend development",
    "Cloud deployment",
    "Open-source contributions",
  ],
};

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  architecture: string;
  decisions: string[];
  technologies: string[];
  features: string[];
  stages?: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "astra",
    title: "ASTRA",
    tagline: "Self-Correcting RAG Research Assistant",
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
      "Conditional retry logic, capped at 2 attempts",
      "Source-grounded answer generation",
      "Independent answer verification",
      "arXiv ingestion, chunking, and embedding",
      "FastAPI backend",
    ],
    stages: ["Question", "Retrieval", "Generation", "Verification", "Correction"],
    github: "https://github.com/BiswasNehaa/Astra",
  },
  {
    id: "checkmynotes",
    title: "CheckMyNotes",
    tagline: "AI Notebook Grading Web App",
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
      "Per-step correctness checks",
      "Mistake coordinate detection",
      "Exponential-backoff retries",
      "Offline fallback engine",
      "Zoomable notebook viewer with mistake-pin overlays",
      "PDF export for single-day and merged semester documents",
    ],
    stages: ["Handwritten Page", "Vision Analysis", "Mistake Detection", "Feedback"],
    github: "https://github.com/BiswasNehaa/CheckMyNotes",
    demo: "https://acadine-frontend.onrender.com",
  },
  {
    id: "advisor",
    title: "AI Academic Advisor",
    tagline: "RAG-Based Academic Recommendation System",
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
      "Prerequisite validation",
      "Credit limit handling",
      "Streamlit Cloud deployment",
      "Pydantic v2 input/output schema validation",
    ],
    stages: ["Career Goal", "Course Retrieval", "Prerequisite Check", "Recommendation"],
    github: "https://github.com/BiswasNehaa/universal-academic-advisor",
    demo: "https://ai-academic-rag-based-system.streamlit.app/",
  },
];

export const openSource = {
  summary: "Active contributor with 19+ merged/opened pull requests across open-source AI and developer tooling.",
  maintainer: "Maintainer of ASTRA, an MIT-licensed open-source project with contributor documentation.",
  repos: [
    { name: "i-am-bee/beeai-framework", org: "IBM", description: "Bug fixes and a 29-file model migration.", url: "https://github.com/i-am-bee/beeai-framework" },
    { name: "adam2go/tilo-framework", org: "adam2go", description: "Semantic embedding support in the memory pipeline.", url: "https://github.com/adam2go/tilo-framework" },
    { name: "matplotlib", org: "matplotlib", description: "Core rendering-bug fix.", url: "https://github.com/matplotlib/matplotlib" },
    { name: "JohannsenLum/canvas-api-mcp", org: "JohannsenLum", description: "Contribution to canvas-api-mcp.", url: "https://github.com/JohannsenLum/canvas-api-mcp" },
    { name: "py-pdf/pypdf", org: "py-pdf", description: "Contribution to pypdf.", url: "https://github.com/py-pdf/pypdf" },
    { name: "taksh1507/secret-guard", org: "taksh1507", description: "6 merged pull requests.", url: "https://github.com/taksh1507/secret-guard" },
  ],
};

export const skillCategories: { label: string; skills: string[] }[] = [
  { label: "AI / LLM", skills: ["LangChain", "LangGraph", "RAG Pipelines", "Corrective RAG", "Prompt Engineering", "LLM Evaluation", "FAISS", "ChromaDB", "Groq API", "LLaMA 3.3 70B", "HuggingFace Transformers", "Embeddings", "Machine Learning"] },
  { label: "Backend & Languages", skills: ["Python (Primary)", "FastAPI", "Pydantic v2", "C", "C++", "Java"] },
  { label: "Databases", skills: ["PostgreSQL", "MySQL", "MongoDB", "FAISS", "ChromaDB"] },
  { label: "Cloud & Tools", skills: ["Git", "GitHub Actions", "AWS EC2", "Docker", "Streamlit Cloud", "Render"] },
  { label: "NLP / ML", skills: ["NLTK", "spaCy", "Pandas", "Matplotlib", "PyMuPDF"] },
];

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
  { degree: "B.E. in Computer Science and Engineering", school: "Acharya Institute of Technology, Bangalore", detail: "CGPA: 8.6 / 10" },
  { degree: "Higher Secondary (PCMC)", school: "Aditya Educational Institute", detail: "83%" },
  { degree: "Secondary Education", school: "Jawahar Navodaya Vidyalaya", detail: "90.4%" },
];

export const coursework = ["Operating Systems", "Computer Networks", "DBMS", "Data Structures & Algorithms", "OOP", "DevOps"];

export const filmCards = [
  { title: "THE STORY OF A BUILDER", subtitle: "A portfolio, in one act" },
  { title: "A student who kept building", body: "Final-year CSE, specializing in AI Engineering — RAG systems, LLM applications, agentic workflows." },
  { title: "Three systems, shipped", body: "ASTRA. CheckMyNotes. The AI Academic Advisor. Each one built, broken, and rebuilt until it worked." },
  { title: "19+ contributions, elsewhere", body: "IBM's BeeAI framework. tilo-framework. matplotlib. pypdf. secret-guard. Small fixes, left in other people's code." },
  { title: "Still building.", body: "Open to AI Engineering opportunities, internships, and meaningful collaborations." },
];

export const credits = {
  directedBy: "DIRECTED & BUILT BY",
  name: "NEHA BISWAS",
  role: "AI ENGINEER — RAG & LLM SYSTEMS",
};
