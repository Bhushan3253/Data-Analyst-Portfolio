// Single source of truth for the portfolio content.
export const personalInfo = {
  name: "Bhushan Nagpure",
  role: "Aspiring Data Analyst",
  tagline: "SQL | Python | Power BI | Excel | Tableau",
  email: "bhushannagpure25@gmail.com",
  portfolio: "https://portfoliobhushan.vercel.app",
  github: "https://github.com/Bhushan3253",
  linkedin: "https://www.linkedin.com/in/bhushan-nagpure-16351925a/",
  status: "Open to Entry-Level Opportunities",
  resumeUrl: "#resume", // [PLACEHOLDER: Replace with actual PDF URL when available]
};

// ─── Hero Section ────────────────────────────────────────────
export const heroContent = {
  headline: "Turning Data Into Insights. Insights Into Action.",
  subheadline:
    "I'm an aspiring Data Analyst skilled in SQL, Python, Power BI, Excel, and Tableau. I transform raw data into clear insights that help businesses understand performance and make better decisions.",
  primaryCTA: "Explore My Projects",
  secondaryCTA: "Download Resume",
};

// ─── About Section ──────────────────────────────────────────
export const aboutContent = {
  intro:
    "I'm Bhushan Nagpure, a B.Tech graduate building practical Data Analyst skills through hands-on projects. I enjoy working with data — from cleaning messy datasets and writing SQL queries to building dashboards that tell clear business stories.",
  description:
    "My approach focuses on understanding the business context first, then letting the data guide decisions. I believe in thorough data validation, clear visualizations, and insights that drive action rather than just looking impressive on a slide.",
  highlights: [
    {
      title: "Analytical Thinking",
      description:
        "Breaking complex business questions into structured analysis steps that deliver actionable answers.",
    },
    {
      title: "Data Cleaning & Validation",
      description:
        "Ensuring data accuracy and consistency before analysis — because insights are only as good as the data behind them.",
    },
    {
      title: "SQL-Based Analysis",
      description:
        "Writing queries using JOINs, CTEs, window functions, and aggregations to extract meaningful patterns from databases.",
    },
    {
      title: "Dashboard Design",
      description:
        "Creating interactive dashboards in Power BI and Tableau that make complex data accessible to stakeholders.",
    },
    {
      title: "Business-Focused Insights",
      description:
        "Translating data findings into clear recommendations that help organizations understand performance trends.",
    },
    {
      title: "Continuous Learning",
      description:
        "Actively building new projects and exploring techniques in EDA, statistical analysis, and data storytelling.",
    },
  ],
};

// ─── Skills ─────────────────────────────────────────────────
export interface Skill {
  name: string;
}

export interface SkillCategory {
  category: string;
  icon: string; // Lucide icon name
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Data Analysis",
    icon: "BarChart3",
    skills: [
      { name: "Exploratory Data Analysis" },
      { name: "Data Cleaning" },
      { name: "Data Validation" },
      { name: "KPI Reporting" },
      { name: "Business Insights" },
    ],
  },
  {
    category: "SQL & Databases",
    icon: "Database",
    skills: [
      { name: "MySQL" },
      { name: "Joins" },
      { name: "GROUP BY & Aggregations" },
      { name: "Subqueries" },
      { name: "CTEs" },
      { name: "Window Functions" },
    ],
  },
  {
    category: "Programming",
    icon: "Code2",
    skills: [
      { name: "Python" },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Matplotlib" },
    ],
  },
  {
    category: "Business Intelligence",
    icon: "PieChart",
    skills: [
      { name: "Power BI" },
      { name: "DAX" },
      { name: "Power Query" },
      { name: "Tableau" },
      { name: "Excel" },
      { name: "Pivot Tables" },
      { name: "Charts & Reporting" },
    ],
  },
];

// ─── Projects ───────────────────────────────────────────────
export interface Project {
  id: string;
  title: string;
  tools: string[];
  description: string;
  businessQuestions: string[];
  keyAnalysis: string[];
  dashboardVisuals?: string[];
  github: string;
  dashboardLink: string;
  status: "completed" | "in-progress";
}

export const projectsData: Project[] = [
  {
    id: "supply-chain",
    title: "Supply Chain & Order Fulfillment Analytics",
    tools: ["Python", "MySQL", "Power BI"],
    description:
      "Analyze order-level sales, product profitability, customer segments, and delivery risk to identify performance trends and operational improvement opportunities.",
    businessQuestions: [
      "Which product categories contribute most to sales and profit?",
      "How do delivery risk patterns vary by shipping mode?",
      "Which customer segments drive the strongest revenue performance?",
    ],
    keyAnalysis: [
      "Monthly sales trends",
      "Product category performance",
      "Customer segment comparisons",
      "Shipping mode and delivery risk",
      "Data quality checks",
      "Profitability analysis after validating the dataset's financial definitions",
    ],
    dashboardVisuals: [
      "Sales trend line chart",
      "Category performance bar chart",
      "Delivery risk by shipping mode",
      "Customer segment comparison",
      "KPI cards",
    ],
    github: "https://github.com/Bhushan3253/supply-chain-analytics",
    dashboardLink: "#", // [PLACEHOLDER: Add published dashboard URL]
    status: "completed",
  },
  {
    id: "retail-sales",
    title: "Retail Sales Analytics",
    tools: ["SQL", "Excel", "Power BI"],
    description:
      "Analyze retail sales performance, product categories, revenue trends, and customer purchasing patterns. Includes business questions, data preparation, visualizations, and findings.",
    businessQuestions: [
      "How are sales trending across months and categories?",
      "Which products or segments are contributing most to revenue?",
      "What reporting views help leadership review performance quickly?",
    ],
    keyAnalysis: [
      "Revenue trend analysis",
      "Product category breakdown",
      "Customer purchasing patterns",
      "Seasonal performance trends",
      "Data preparation & cleaning",
    ],
    github: "https://github.com/Bhushan3253/Retail-Sales-Performance-Profitability-Analysis",
    dashboardLink: "#", // [PLACEHOLDER: Add published dashboard URL]
    status: "completed",
  },
  {
    id: "data-exploration",
    title: "Data Exploration & Visualization",
    tools: ["Python", "Pandas", "NumPy", "Matplotlib"],
    description:
      "Demonstrate exploratory data analysis skills including missing-value investigation, distribution analysis, outlier inspection, and data visualization techniques.",
    businessQuestions: [
      "What data quality issues need attention before analysis?",
      "Which variables show the clearest patterns or outliers?",
      "What charts best communicate the shape of the dataset?",
    ],
    keyAnalysis: [
      "Missing value investigation",
      "Distribution analysis",
      "Outlier inspection",
      "Correlation analysis",
      "Visual storytelling",
    ],
    github: "#", // [PLACEHOLDER: Add GitHub repository URL when available]
    dashboardLink: "#", // [PLACEHOLDER: Add published dashboard URL]
    status: "in-progress",
  },
];

// ─── Dashboard Gallery ─────────────────────────────────────
export interface DashboardItem {
  id: string;
  title: string;
  description: string;
  tools: string[];
  imageUrl: string;
  projectLink: string;
  dashboardUrl: string;
  isPlaceholder: boolean;
}

export const dashboardGallery: DashboardItem[] = [
  {
    id: "supply-chain-dash",
    title: "Supply Chain Dashboard",
    description:
      "Interactive Power BI dashboard showing sales trends, category performance, delivery risk, and KPIs.",
    tools: ["Power BI", "DAX"],
    imageUrl: "/supply-chain-dashboard.svg",
    projectLink: "https://github.com/Bhushan3253/supply-chain-analytics",
    dashboardUrl: "#", // [PLACEHOLDER: Add published dashboard URL]
    isPlaceholder: false,
  },
  {
    id: "retail-sales-dash",
    title: "Retail Sales Dashboard",
    description:
      "Dashboard visualizing retail sales metrics, product performance, and customer insights.",
    tools: ["Power BI", "Excel"],
    imageUrl: "/retail-sales-dashboard.svg",
    projectLink: "https://github.com/Bhushan3253/Retail-Sales-Performance-Profitability-Analysis",
    dashboardUrl: "#", // [PLACEHOLDER: Add published dashboard URL]
    isPlaceholder: false,
  },
];

// ─── Education ──────────────────────────────────────────────
export const educationData = [
  {
    degree: "B.Tech in Information Technology",
    institution: "Priyadarshini College of Engineering, Nagpur",
    university: "Rashtrasant Tukadoji Maharaj Nagpur University",
    cgpa: "8.15 / 10",
    year: "", // [PLACEHOLDER: Add graduation year]
  },
];

// ─── Resume ─────────────────────────────────────────────────
export const resumeData = {
  summary:
    "Aspiring Data Analyst with a B.Tech in Information Technology. Skilled in SQL, Python, Power BI, Excel, and Tableau. Building practical analytics experience through projects focused on data cleaning, business analysis, dashboard development, and data-driven insights.",
  coreSkills: [
    "SQL (MySQL — Joins, CTEs, Window Functions)",
    "Python (Pandas, NumPy, Matplotlib)",
    "Power BI (DAX, Power Query)",
    "Tableau",
    "Excel (Pivot Tables, Charts)",
    "Data Cleaning & Validation",
    "Exploratory Data Analysis",
    "KPI Reporting & Dashboard Design",
  ],
  downloadUrl: "", // [PLACEHOLDER: Add a real PDF URL such as "/resume.pdf" or a hosted file link]
  downloadNote:
    "Place your exported resume in the public folder as resume.pdf, then update this link to /resume.pdf.",
};

export const contactData = {
  intro:
    "Open to entry-level Data Analyst roles, paid internships, and project collaborations in India.",
  emailPlaceholder: personalInfo.email,
  formNote:
    "This form validates locally. Connect a backend or form service before using it in production.",
};

export const footerData = {
  copyright: `© ${new Date().getFullYear()} Bhushan Nagpure.`,
  note: "Built for data-focused hiring conversations.",
};

// ─── Navigation ─────────────────────────────────────────────
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Dashboards", href: "#dashboards" },
  { label: "Education", href: "#education" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];
