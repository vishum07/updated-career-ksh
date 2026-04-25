// Personal Information
export const personalInfo = {
  name: "Pruthavik Gavali",
  title: "Full Stack Developer",
  email: "pruthavik.gavali22@vit.edu",
  phone: "8421713789",
  location: "Pune, Maharashtra, India",
  linkedin: "https://www.linkedin.com/in/pruthavik-gavali/",
  github: "https://github.com/Pruthavik01",
  leetcode: "https://leetcode.com/u/pruthavik/",
  tagline: "Building scalable web solutions with modern technologies",
  resume:"https://drive.google.com/file/d/1s3n6TpXDiKVSqpl_ECuYR0n9Gmay7SAB/view?usp=drive_link"
};


export const skillsStack = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Next.js',
  'React Native',
  'Node.js',
  'Express.js',
  'MongoDB',
  'PostgreSQL',
  'MySQL',
  'Git',
  'GitHub',
  'Docker',
  'AWS',
  'Firebase',
  'Postman',
]


// Projects Data
export const projectsData = [
  {
    id: 1,
    title: "Roombuddy",
    subtitle: "Hostel/Flat Listing Platform",
    description:
      "Built a full-stack hostel/flat listing platform with MVC architecture, featuring user authentication, review system, and interactive maps using OpenStreetMap and MapTiler. Implemented robust error handling with custom middleware.",
    tech: ["MongoDB", "Node.js", "Express.js", "Passport.js", "OpenStreetMap"],
    liveUrl: "https://roombuddy-kj4v.onrender.com/listings",
    githubUrl: "#",
    image: "RoombuddyLogo.png",
    featured: true,
    highlights: [
      "MVC Architecture",
      "User Authentication",
      "Interactive Maps",
      "Review System",
    ],
  },
  {
    id: 2,
    title: "Smart Tiffin Ordering",
    subtitle: "Mobile + Web Application",
    description:
      "Cross-platform application using Expo (React Native) and Web that enables students to book customizable daily tiffins. Features role-based provider dashboard for publishing menus, tracking real-time orders, and managing bookings efficiently.",
    tech: ["React Native", "Expo", "React", "Node.js","MongoDB"],
    githubUrl: "#",
    image: "tiffin.png",
    featured: true,
    highlights: [
      "Cross-Platform",
      "Role-Based Access",
      "Real-time Orders",
      "Daily Menu Management",
    ],
  },
  {
    id: 3,
    title: "AskDB",
    subtitle: "AI-powered SQL Query Generator",
    description:
      "Developed an AI-driven tool using the Gemini API to generate SQL queries from natural language inputs. Supports CSV, Excel, images, and direct SQL database connections. Enables non-technical users to interact with databases effortlessly and visualize data through interactive charts.",
    tech: ["Gemini API", "SQL", "React", "Data Visualization"],
    liveUrl: "https://askdata.onrender.com/",
    githubUrl: "#",
    image: "askdb.png",
    featured: true,
    highlights: [
      "Natural Language Processing",
      "Multi-Format Support",
      "Interactive Charts",
      "Database Integration",
    ],
  },
  {
    id: 4,
    title: "Color Sudoku N-Queens Solver",
    subtitle: "Computer Vision + Algorithm Puzzle",
    description:
      "Hybrid Python-Java solver for a color-based N-Queens Sudoku variant. Integrated computer vision using OpenCV and KMeans to detect a live grid via webcam. Generated interactive HTML visualizations of all valid solutions.",
    tech: ["Python", "Java", "OpenCV", "KMeans", "Computer Vision"],
    githubUrl: "#",
    image: "ncolorqueen.png",
    featured: false,
    highlights: [
      "Computer Vision",
      "Live Grid Detection",
      "Algorithm Optimization",
      "Interactive Visualization",
    ],
  },
];

// Education Data
export const educationData = [
  {
    id: 1,
    institution: "Vishwakarma Institute of Technology, Pune",
    degree: "Bachelor of Technology in Electronics and Telecommunication",
    duration: "2022 - 2026",
    cgpa: "8.73",
    icon: "🎓",
    achievements: [
      "Current CGPA: 8.73",
      "Relevant Coursework: DSA, OOP, DBMS, OS, Computer Network Security",
    ],
  },
  {
    id: 2,
    institution: "Manere High School, Ichalkaranji",
    degree: "Higher and Secondary Education in Science",
    duration: "2020 - 2022",
    percentage: "83.67%",
    icon: "📚",
    achievements: [
      "CET: 95.1 percentile",
      "JEE: 90.68 percentile",
    ],
  },
  {
    id: 3,
    institution: "Mount Litera Zee School, Hatkanangale",
    degree: "Secondary and Higher Secondary Education",
    duration: "2019 - 2020",
    percentage: "84.2%",
    icon: "🏫",
    achievements: [],
  },
];

// Certifications Data
export const certificationsData = [
  {
    id: 1,
    title: "IBM Full Stack Software Developer",
    issuer: "IBM",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/7YET51B0LB4U",
    icon: "/IBM.png",
    year: "2024",
  },
  {
    id: 2,
    title: "Java Foundations Professional Certificate",
    link:"https://www.linkedin.com/learning/certificates/4bde8197d3654b468c71795c63da9d5b0d30300ccedeba1b1206bd5a0c03e423?trk=share_certificate",
    issuer: "JetBrains",
    icon: "/java.png",
    year: "2024",
  },
  {
    id: 3,
    link: "https://www.linkedin.com/learning/certificates/02db82367d89d8cae0fdd0bca798cffe16bf652c26fb1aca48a7ae65069416d9?trk=share_certificate",
    title: "Docker Foundations Professional Certificate",
    issuer: "Docker, LinkdIn",
    icon: "/docker.png",
  },
  {
    id: 4,
    link: "https://www.linkedin.com/learning/certificates/70f75936ac776129b8de15049c204b02c5c5aae7ec6bd65f333ebf22461695d1?trk=share_certificate",
    title: "Career Essentials in GitHub Professional Certificate",
    issuer: "Git, LinkdIn",
    icon: "/github.png",
  },
  {
    id: 5,
    link:"#",
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA - Greg Estes, VP",
    icon: "/nvidia.png",
  },

];

// Experience Data
export const experienceData = [
  {
    id: 1,
    role: "Sponsorship Head",
    organization: "Abhivriddhi - Student Training and Development Committee",
    duration: "2023 - Present",
    description:
      "Led 3 technical and soft-skills training events impacting over 2000 students",
    teamSize: 140,
    icon: "🎯",
    achievements: [
      "Managed team of 140 members",
      "Organized events for 2000+ students",
      "Led technical and soft-skills training",
    ],
  },
];

// Fun Zone - Mini Games Data
export const miniGamesData = [
  {
    id: 1,
    title: "N Color Queens",
    link: "https://ncolorqueens.netlify.app/",
    description: "Place N queens on an N x N chessboard",
    icon: '/queen.png',
    color: "#FF6B6B",
    route: "/games/tictactoe",
  },
  {
    id: 2,
    title: "Ping Pong",
    link:"https://aiping.netlify.app/",
    description: "Test your reaction time and hand-eye coordination",
    icon: "/ping-pong_icon.png", // ✅ correct
    color: "#4ECDC4",
    route: "/games/memory",
  },
  {
    id: 3,
    title: "Tango Game",
    link:"https://ptango.netlify.app/",
    description: "check you logical thinking by solving the tango puzzle",
    icon: "/tango.png", // ✅ correct
    color: "#F38181",
    route: "/games/snake",
  },
  {
    id: 4,
    title: "2048",
    description: "Number puzzle game objective is to slide numbered tiles",
    icon: "/2048.png", // ✅ correct
    color: "#95E1D3",
    route: "/games/2048",
  },
];

// Social Links
export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/pruthavik",
    color: "#181717",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/pruthavik",
    color: "#0077B5",
  },
  {
    name: "Leetcode",
    url: "https://leetcode.com/u/pruthavik/",
    color: "#0077B5",
  },
  {
    name: "Email",
    url: "mailto:pruthavik.gavali22@vit.edu",
    color: "#EA4335",
  },
];  