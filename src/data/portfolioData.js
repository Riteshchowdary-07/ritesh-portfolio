export const personalData = {
  name: "Kalapaneni Ritesh Chowdary",
  shortName: "Ritesh",
  roles: ["AI & ML Student", "Computer Vision & AI Intern", "Frontend Developer"],
  headline: "Building Intelligent Ideas Into Real-World Products.",
  bio: "Motivated AI & ML student passionate about artificial intelligence, computer vision, software development, web technologies, and building practical solutions that solve real-world problems.",
  status: "Available for Internship Opportunities",
  contact: {
    phone: "+91 9866594904",
    email: "riteshmedasani2007@gmail.com",
    linkedin: "https://www.linkedin.com/in/ritesh-chowdary-7b1169333/",
    github: "https://github.com",
  },
  stats: [
    { value: "08+", label: "AI & ML Projects", detail: "Built AI Counselor, OpenCV Traffic Models, Healthcare & SIH Apps" },
    { value: "03", label: "Developer Roles", detail: "Computer Vision Intern at Doneshswari Tech, AI & Frontend Developer" },
    { value: "7.22", label: "CGPA", detail: "B.Tech AI & ML at R.M.D Eng. College" },
    { value: "2024–2028", label: "B.Tech Journey", detail: "4-Year Specialized AI/ML Degree" }
  ]
};

export const aboutData = {
  title: "Turning Curiosity Into Code.",
  paragraphs: [
    "I'm an Artificial Intelligence & Machine Learning student with a strong foundation in Python, Data Structures & Algorithms, computer vision, machine learning, and web development.",
    "I enjoy building practical applications that combine AI and Computer Vision with user-friendly interfaces. My experience includes developing OpenCV-based traffic signal detection models at Doneshswari Technologies, building LLM applications with Flask & Gemini, and crafting responsive frontend UIs."
  ]
};

export const skillsCategories = [
  {
    title: "Programming Languages",
    icon: "Code2",
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "Python", desc: "Core language for ML algorithms, OpenCV computer vision, and Flask micro-backends." },
      { name: "Java", desc: "Object-oriented programming, data structures, and foundational algorithms." },
      { name: "C++", desc: "High-performance problem solving and system-level data structures." }
    ]
  },
  {
    title: "AI & Computer Vision",
    icon: "BrainCircuit",
    color: "from-purple-500 to-indigo-400",
    skills: [
      { name: "OpenCV & Image Processing", desc: "Real-time video stream analysis, traffic signal detection, and contour filtering." },
      { name: "YOLOv8 & Computer Vision", desc: "Object detection, ALPR license plate recognition, and traffic violation detection." },
      { name: "K-Nearest Neighbors (KNN)", desc: "Supervised classification & distance metric evaluation." },
      { name: "Decision Trees & K-Means", desc: "Predictive decision trees, centroid clustering, and data grouping." },
      { name: "Data Preprocessing & Evaluation", desc: "Feature scaling, accuracy metrics, precision, and recall analysis." }
    ]
  },
  {
    title: "Web Development",
    icon: "Layout",
    color: "from-cyan-400 to-emerald-400",
    skills: [
      { name: "HTML", desc: "Semantic, accessible HTML5 structure and markup." },
      { name: "CSS", desc: "Modern styling, flexbox/grid, glassmorphism, and animations." },
      { name: "JavaScript", desc: "ES6+, DOM manipulation, dynamic UI components, and API integration." },
      { name: "Flask", desc: "Lightweight Python web framework for connecting AI/CV models with frontend UIs." }
    ]
  },
  {
    title: "Core Skills",
    icon: "Cpu",
    color: "from-amber-400 to-orange-500",
    skills: [
      { name: "Data Structures & Algorithms", desc: "Arrays, lists, trees, graphs, sorting, and algorithmic efficiency." },
      { name: "Problem Solving", desc: "Analytical mindset for debugging complex computational tasks." },
      { name: "UI/UX Design", desc: "Designing clean, intuitive, user-focused web interfaces." },
      { name: "Debugging", desc: "Root cause analysis, browser tools, and code troubleshooting." }
    ]
  }
];

export const experienceData = [
  {
    id: 1,
    role: "Computer Vision & AI Developer Intern",
    type: "Internship",
    period: "2025 – Present",
    company: "Doneshswari Technologies",
    companyUrl: "https://dtskills.tech",
    responsibilities: [
      "Developed OpenCV-based computer vision solutions for real-time traffic signal recognition and traffic analysis.",
      "Designed and implemented video processing pipelines for automated traffic monitoring and signal status detection.",
      "Integrated OpenCV computer vision modules with web interfaces to display real-time traffic analytics.",
      "Optimized object tracking algorithms and image preprocessing to improve detection accuracy across lighting conditions."
    ],
    tech: ["OpenCV", "Python", "Computer Vision", "YOLOv8", "Image Processing", "Traffic Signal Detection"]
  },
  {
    id: 2,
    role: "AI Developer Intern",
    type: "Project-Based",
    period: "2025",
    company: "AI & ML Development Initiatives",
    responsibilities: [
      "Developed an AI Career Counselor Web App using Flask, HTML, CSS, and JavaScript.",
      "Integrated AI APIs including Gemini to generate personalized career guidance.",
      "Designed responsive user interfaces tailored for high usability.",
      "Improved response accuracy using prompt engineering techniques."
    ],
    tech: ["Python", "Flask", "Gemini AI API", "JavaScript", "HTML/CSS", "Prompt Engineering"]
  },
  {
    id: 3,
    role: "Frontend Developer",
    type: "Project Role",
    period: "2024 – 2025",
    company: "Web Development Initiatives",
    responsibilities: [
      "Built interactive web interfaces using HTML, CSS, and JavaScript.",
      "Focused on UI/UX improvements and usability across mobile and desktop devices.",
      "Created reusable components to maintain code cleanliness and performance.",
      "Optimized website performance and responsiveness."
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"]
  }
];

export const projectCategories = [
  "All Projects",
  "AI / Machine Learning",
  "Computer Vision & Traffic",
  "Healthcare & Emergency",
  "SIH & Public Impact",
  "Web Applications & Startups"
];

export const projectsData = [
  {
    id: "ai-career-counselor",
    title: "AI Career Counselor",
    subtitle: "Personalized Career Guidance Platform",
    category: "AI / Machine Learning",
    description: "An AI-powered web application designed to provide personalized career guidance to users through structured prompt engineering and Gemini AI.",
    isFeatured: true,
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Gemini AI API", "Prompt Engineering"],
    features: [
      "AI-powered career guidance recommendations",
      "Personalized responses tailored to user background",
      "Responsive and intuitive glassmorphic user interface",
      "Seamless Gemini AI API integration",
      "Enhanced response accuracy via structured prompt engineering"
    ],
    problem: "Students and entry-level aspirants frequently struggle to navigate suitable career pathways aligned with their specific programming skills, ML interest, and educational background.",
    solution: "Built a web app combining a Flask micro-backend with Google's Gemini AI API. Custom prompt engineering structures raw user inputs into structured, actionable career roadmaps.",
    howItWorks: "1. User submits their current technical skills and preferences.\n2. Backend validates input and injects context-tuned system prompts.\n3. Gemini AI processes the prompt and streams personalized career recommendations back to the client UI.",
    githubUrl: "#",
    liveDemoUrl: "#",
    status: "Active Showcase"
  },
  {
    id: "trivia-x-traffic",
    title: "Trivia-X — Traffic Violation & Signal Detection",
    subtitle: "Automated OpenCV & YOLOv8 Traffic Signal Monitoring",
    category: "Computer Vision & Traffic",
    description: "An intelligent computer vision system utilizing OpenCV and YOLOv8 for automated traffic signal recognition, traffic violation detection, ALPR license plate recognition, and mobile phone usage identification.",
    isFeatured: false,
    tech: ["OpenCV", "Python", "YOLOv8", "Computer Vision", "ALPR", "Deep Learning"],
    features: [
      "OpenCV real-time traffic signal recognition and state analysis",
      "YOLOv8 vehicle and driver behavior detection",
      "Automatic License Plate Recognition (ALPR)",
      "Mobile-phone usage & helmet violation detection",
      "Automated violation logging and alert system"
    ],
    problem: "Manual traffic signal and violation monitoring is inefficient, error-prone, and incapable of continuous 24/7 oversight across dense city intersections.",
    solution: "Developed OpenCV video processing pipelines paired with YOLOv8 vision models to detect traffic signal changes, helmetless riding, mobile phone usage while driving, and automatically extract license plates.",
    howItWorks: "1. Traffic camera stream ingested into OpenCV frame processor.\n2. Bounding boxes and ROI identify signal state and driver violations.\n3. License plate ROI cropped and passed to ALPR pipeline for automatic ticket generation.",
    githubUrl: "#",
    liveDemoUrl: "#",
    status: "Internship Project (Doneshswari Tech)"
  },
  {
    id: "hospital-bed-management",
    title: "Hospital Bed Management System",
    subtitle: "Real-Time Availability & AI Emergency Surge Platform",
    category: "Healthcare & Emergency",
    description: "A comprehensive multi-portal healthcare platform connecting Citizens, Doctors, Ambulances, and Government Officials with real-time bed tracking and AI emergency prediction.",
    isFeatured: false,
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "AI Surge Prediction", "GPS Routing"],
    features: [
      "Multi-portal architecture (Citizen, Doctor, Ambulance, Government)",
      "Real-time bed availability search and filter",
      "AI-based emergency and surge prediction model",
      "GPS-assisted ambulance routing concept"
    ],
    problem: "During health emergencies or seasonal surges, patients waste critical time searching for available hospital beds without real-time visibility.",
    solution: "Architected a unified digital platform providing live bed inventory across ICU and general wards, combined with predictive AI models for emergency surge forecasting.",
    howItWorks: "1. Hospitals update live bed counts via Doctor/Government portals.\n2. Citizens search nearby facilities.\n3. Ambulances receive optimal GPS routes based on live hospital capacity.",
    githubUrl: "#",
    liveDemoUrl: "#",
    status: "Healthcare Innovation"
  },
  {
    id: "smart-blood-bank",
    title: "Smart Blood Bank Management System",
    subtitle: "Verified Donor Matching & Proximity Network",
    category: "Healthcare & Emergency",
    description: "A digital blood donor management system facilitating live hospital-to-donor connectivity, verified donor authentication, and GPS proximity matching.",
    isFeatured: false,
    tech: ["JavaScript", "HTML", "CSS", "Python", "GPS Proximity Matching", "Web UI"],
    features: [
      "Digital blood donor registration and management",
      "Verified donor authentication system",
      "GPS proximity-based donor matching algorithm",
      "Live hospital & donor connectivity portal"
    ],
    problem: "Blood banks often face critical supply shortages during emergencies due to slow manual donor outreach and lack of real-time proximity matching.",
    solution: "Designed a digital management system connecting hospitals directly with verified blood donors within a specific GPS radius for instant emergency dispatch.",
    howItWorks: "1. Hospital issues emergency blood request for specific group.\n2. System scans GPS radius for verified eligible donors.\n3. Automated notification sent to donor with hospital navigation details.",
    githubUrl: "#",
    liveDemoUrl: "#",
    status: "Emergency Response"
  },
  {
    id: "sih-college-guidance",
    title: "Digital Guidance for Govt College Enrollment",
    subtitle: "Smart India Hackathon (SIH) 2025 Flagship Solution",
    category: "SIH & Public Impact",
    description: "Personalized college and career guidance platform developed for Smart India Hackathon 2025 to streamline government college admissions and recommendations.",
    isFeatured: false,
    tech: ["Web Architecture", "Mobile Design", "Python", "Recommendation Engine", "UI/UX"],
    features: [
      "Personalized college and career pathway guidance",
      "Government college enrollment assistance",
      "Recommendation-based college matching platform",
      "Cross-platform Web + Mobile responsive architecture"
    ],
    problem: "Students in rural and tier-2/3 regions lack structured counseling regarding government college courses, cutoffs, and scholarship opportunities.",
    solution: "Created an accessible, recommendation-driven digital platform helping students discover suitable government colleges based on academic scores and career goals.",
    howItWorks: "1. Student enters marks, location, and field of interest.\n2. Recommendation engine filters government colleges matching eligibility.\n3. Step-by-step guidance provided for application completion.",
    githubUrl: "#",
    liveDemoUrl: "#",
    status: "SIH 2025 Project"
  },
  {
    id: "smart-crop-advisory",
    title: "Smart Crop Advisory System",
    subtitle: "AI Crop Recommendation for Small & Marginal Farmers",
    category: "SIH & Public Impact",
    description: "An AI-based agricultural recommendation system analyzing environmental factors, soil parameters, and climate data to suggest optimal crops for small farmers.",
    isFeatured: false,
    tech: ["Python", "Machine Learning", "Environmental Analytics", "Data Preprocessing"],
    features: [
      "AI/ML-based crop recommendation algorithm",
      "Soil parameter & climate factor evaluation",
      "Tailored advisory for small & marginal farmers",
      "User-friendly advisory report UI"
    ],
    problem: "Small farmers often experience crop failures due to traditional guesswork in crop selection without analyzing soil composition or shifting weather patterns.",
    solution: "Trained classification models (Decision Trees/KNN) on soil NPK ratios, rainfall, and temperature to recommend high-yield crop varieties.",
    howItWorks: "1. Soil composition and regional weather metrics are inputted.\n2. ML model predicts top 3 suitable crops.\n3. Advisory report generated with fertilizer and care guidelines.",
    githubUrl: "#",
    liveDemoUrl: "#",
    status: "Agriculture AI"
  },
  {
    id: "ai-fashion-startup",
    title: "AI Fashion Startup / Virtual Try-On",
    subtitle: "AI-Powered Fashion Platform Concept & Virtual Fitting",
    category: "Web Applications & Startups",
    description: "An innovative AI fashion platform concept featuring virtual try-on simulation, personalized outfit recommendations, and digital retail UI/UX design.",
    isFeatured: false,
    tech: ["Python", "UI/UX Design", "Virtual Try-On Concept", "HTML", "CSS", "JavaScript"],
    features: [
      "Virtual try-on simulation experience",
      "Personalized fashion & outfit recommendations",
      "Startup/business model exploration",
      "Modern, sleek UI/UX design prototype"
    ],
    problem: "Online fashion shoppers face high return rates because traditional e-commerce photos cannot show how clothing fits individual body shapes.",
    solution: "Developed an AI fashion startup concept utilizing virtual fitting simulations and intelligent style recommendation engines.",
    howItWorks: "1. User selects clothing items or uploads style preferences.\n2. AI projects clothing onto user avatar concept.\n3. Smart recommendations suggest complementary accessories and sizing.",
    githubUrl: "#",
    liveDemoUrl: "#",
    status: "Startup Concept"
  },
  {
    id: "ai-meme-generator",
    title: "AI Meme Generator",
    subtitle: "AI-Assisted Canvas Meme Creation",
    category: "Web Applications & Startups",
    description: "An interactive web application featuring image upload and canvas-based meme creation powered by AI-generated contextual text captions.",
    isFeatured: false,
    tech: ["HTML", "CSS", "JavaScript", "Canvas API", "Python", "Flask"],
    features: [
      "AI-assisted meme caption synthesis",
      "Image upload and custom template support",
      "Interactive Canvas interface with drag & edit text",
      "Instant meme download & social sharing"
    ],
    problem: "Content creators often want quick, witty memes tailored to specific developer or tech scenarios without manual photo editing software.",
    solution: "Developed a web tool combining AI caption suggestions with an HTML5 Canvas editing interface.",
    howItWorks: "1. User uploads an image or chooses a template.\n2. AI generates contextual developer captions.\n3. User customizes text on Canvas and downloads the image.",
    githubUrl: "#",
    liveDemoUrl: "#",
    status: "Interactive Web Tool"
  }
];

export const educationData = [
  {
    institution: "R.M.D Engineering College",
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    period: "2024 – 2028",
    grade: "CGPA: 7.22",
    details: "Specializing in AI/ML fundamentals, OpenCV & Computer Vision (YOLOv8), Data Structures & Algorithms, Python software development, and web application engineering."
  },
  {
    institution: "Narayana Junior College",
    degree: "Intermediate (10+2) – MPC",
    period: "2022 – 2024",
    grade: "Percentage: 86%",
    details: "Focused on Mathematics, Physics, and Chemistry (MPC), building strong analytical and problem-solving foundations."
  }
];

export const aiAssistantKnowledge = [
  {
    keywords: ["name", "who", "ritesh", "about"],
    answer: "Ritesh (Kalapaneni Ritesh Chowdary) is an AI & ML student at R.M.D Engineering College (2024–2028, CGPA 7.22), working as a Computer Vision & AI Developer Intern at Doneshswari Technologies."
  },
  {
    keywords: ["skills", "technologies", "tech", "stack", "know", "python", "java", "c++", "opencv", "yolo"],
    answer: "Ritesh works with Python, OpenCV, Computer Vision, YOLOv8 (ALPR & Traffic Signals), Java, C++, HTML, CSS, JavaScript, Flask, and machine learning techniques including KNN, Decision Trees, and K-Means."
  },
  {
    keywords: ["project", "projects", "work", "built", "counselor", "trivia", "hospital", "blood", "sih", "crop", "fashion", "meme", "doneshswari", "dtskills"],
    answer: "Ritesh has done an internship on OpenCV traffic signal detection at Doneshswari Technologies (dtskills.tech) and built 8 major projects including AI Career Counselor, Trivia-X Traffic Violation Detection (YOLOv8), Hospital Bed Management System, Smart Blood Bank, SIH 2025 Govt College Guidance Platform, Smart Crop Advisory System, AI Fashion Virtual Try-On, and AI Meme Generator!"
  },
  {
    keywords: ["education", "college", "cgpa", "school", "rmd", "narayana"],
    answer: "Ritesh is pursuing B.Tech in AI & ML at R.M.D Engineering College (2024–2028) with a 7.22 CGPA. He completed Intermediate at Narayana Junior College (2022–2024) with 86%."
  },
  {
    keywords: ["experience", "intern", "internship", "job", "role", "doneshswari", "dtskills"],
    answer: "Ritesh completed a Computer Vision & AI Developer Internship at Doneshswari Technologies (dtskills.tech) working on OpenCV-based traffic signals & monitoring, alongside AI Developer Intern (Flask & Gemini API) and Frontend Developer roles."
  },
  {
    keywords: ["contact", "email", "phone", "linkedin", "hire", "reach"],
    answer: "You can reach Ritesh via Email at riteshmedasani2007@gmail.com, Phone at +91 9866594904, or LinkedIn at linkedin.com/in/ritesh-chowdary-7b1169333/."
  }
];
