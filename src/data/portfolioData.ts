export interface SocialLinks {
  linkedin: string;
  github: string;
  leetcode: string;
  email: string;
  phone?: string;
}

export interface PersonalInfo {
  name: string;
  tagline: string;
  title: string;
  summary: string;
  socialLinks: SocialLinks;
  summaryLinkedin: string;
}

export interface ProfessionalProject {
  name: string;
  description: string;
  // technologies?: string[]; // As per resume, tech not explicitly listed per sub-project
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  isCurrent?: boolean;
  points: (string | ProfessionalProject)[]; // Can be a string point or a project object
}

export interface PersonalProject {
  name: string;
  date: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  sourceLink?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  cgpa?: string;
}

export interface CertificationItem {
  name: string;
  issuer?: string; // Issuer like "Coding Ninjas"
  year?: string; // If available
  link?: string; // If "[Certificate]" implies a link, though not provided
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  personalProjects: PersonalProject[];
  skills: SkillCategory[];
  education: EducationItem[];
  certifications: CertificationItem[];
  shortSkills: string[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Yuvraj Kumar",
    tagline: "I write a bit of JavaScript here & there!",
    title: "Software Developer", // Or "Frontend Developer | Fullstack Capable" as discussed
    summary:
      "I'm a software developer with expertise in building scalable web and mobile applications using modern frontend technologies. Passionate about enhancing user experiences, optimizing application performance, and contributing to innovative solutions.",
    summaryLinkedin:
      "I'm a software developer with 2+ years expertise in building scalable web and mobile applications which can serve a large audience and are optimised as per industry standards.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/yuvraj1905/",
      github: "https://github.com/yuvraj1905/",
      leetcode: "https://leetcode.com/u/yuvraj_kumar_1905/",
      email: "yuvrajkumar2509@gmail.com",
      phone: "+91 8881108215",
    },
  },
  experiences: [
    {
      role: "Software Developer Engineer",
      company: "GeekyAnts",
      location: "Bengaluru (Hybrid)",
      duration: "April 2024 - present",
      isCurrent: true,
      points: [
        {
          name: "Ignyte",
          description:
            "Built a multi-tenant hiring platform mobile app for managerial roles featuring interview listings, AI-powered chatbot, and activity logging. Integrated SRP (Secure Remote Password) authentication to enhance security in user login flows. Improved candidate engagement through a seamless and secure user experience.",
        },
        {
          name: "Taaza-Kitchen",
          description:
            "Developed an AR-powered food menu visualization app using Three.js, React, and ModelViewer, enabling users to preview food items in 3D and manage orders seamlessly. Enhanced the dining experience, leading to a 30% increase in user engagement and dine-in orders while reducing order processing time by 40%.",
        },
        {
          name: "PinkUmbrella",
          description:
            "An application for assisting people with support and emergency needs. Integrated a real-time live tracking feature, enabling dynamic updates and precise monitoring of user activities. Built with NextJs, redux, tailwind, SocketIO and more. Handled over 5600+ daily active users and 27K+ monthly users, ensuring low-latency updates and seamless user experience across devices.",
        },
      ],
    },
    {
      role: "Software Developer (MERN Fullstack)",
      company: "MomentText",
      location: "Noida (Remote)",
      duration: "June 2023 - March 2024",
      points: [
        {
          name: "SAGE",
          description:
            "Led the transition of a legacy CRM tool from jQuery to React, implementing PWA capabilities, enhancing maintainability, performance & UX while introducing new features helping achieve Improved app speed upto 50%.",
        },
        {
          name: "E-commerce Web App",
          description:
            "Developed from scratch, featuring an intuitive user interface for seamless product browsing, adding to cart, managing wishlists, and address management. Integrated Razorpay for secure payments and implemented JWT-based authentication. Emphasised on performant, reusable and clean code.",
        },
        {
          name: "Component Library",
          description:
            "Built a modular and scalable Component Library using React and Tailwind CSS to accelerate internal application development, reducing code duplication and promoting design consistency. The library significantly improved the development speed and maintainability of multiple projects.",
        },
      ],
    },
  ],
  personalProjects: [
    {
      name: "Yo-Foods",
      date: "May 2023",
      description:
        "AR powered food ordering app. Yo-foods is one stop solution to all your cravings. Choose from a variety of food items , visualise them in real-world environment with generated perceptual information through your mobile camera, cart and order management ,and more.",
      technologies: ["React", "ThreeJs", "modelviewer"],
      liveLink: "https://yo-foods-frontend.netlify.app/",
      sourceLink: "https://github.com/yuvraj1905/yo-foods-frontend",
    },
    {
      name: "Yo-Shop",
      date: "May 2023",
      description:
        "A e-commerce webApp. Yo-Shop is an e-commerce web-app offering latest collections of audio products from different brands. It has features like cart management, wishlist management, payment integration, pagination and primary feature that are required in an e-commerce app.",
      technologies: ["React", "React-router", "Razorpay"],
      liveLink: "https://yo-shop-neogcamp.netlify.app/",
      sourceLink: "https://github.com/yuvraj1905/yoshop",
    },
    {
      name: "YOLO",
      date: "June 2023",
      description:
        "A social media webapp. Yolo is a Social Media webapp where users can share events, activities, memories and more in the form of posts. It has most of the latest and unique features of any social media app.",
      technologies: ["React", "React-router", "mockbee (backend)"],
      liveLink: "https://yolo-neogcamp.netlify.app/",
      sourceLink: "https://github.com/yuvraj1905/yolo",
    },
    {
      name: "Youtube Clone",
      date: "August 2023",
      description:
        "A YouTube clone built entirely with React! 🎬📺 Highlights: Cached and Debounced Search Functionality , Interactive Live chat using API polling concept, watchlist ,liked videos and history management.Infinte scroll, User-Friendly Design , and Seamless Video Playback.",
      technologies: ["React", "Redux-toolkit", "Tailwind CSS", "Youtube APIs"],
      liveLink: "https://github.com/yuvraj1905/youtube", // Assuming live link is same as source for this one based on HTML
      sourceLink: "https://github.com/yuvraj1905/youtube",
    },
    {
      name: "Yo-Mail",
      date: "March 2023",
      description: "An email webApp. It simulates google's Gmail app.",
      technologies: [
        "React",
        "React-router",
        "useContext",
        "useNavigate",
        "useReducer",
      ],
      liveLink: "https://srvj35.csb.app/",
      sourceLink: "https://github.com/yuvraj1905/Yo-Mail",
    },
    {
      name: "PUBG fan?",
      date: "August 2022",
      description:
        "A CLI app. You can send this to your friends and find out who really knows you.",
      technologies: ["nodeJS"],
      liveLink:
        "https://replit.com/@YuvrajKumar3/Mark2-Fandom-Quiz-CLI-Fandom-quiz-app#index.js?embed=1&output=1",
      sourceLink: "https://github.com/yuvraj1905/Mark2__CLI-Fandom-quiz-app-",
    },
    {
      name: "how well do you know me?",
      date: "August 2022",
      description:
        "A CLI app. You can send this to your friends and find out who really knows you.",
      technologies: ["nodeJS"],
      liveLink:
        "https://replit.com/@YuvrajKumar3/Mark1-Do-you-know-me-CLI-Quiz-App#index.js?embed=1&output=1",
      sourceLink: "https://github.com/yuvraj1905/Mark1__DoYouKnowMe",
    },
    // Skipping "Github + Netlify Integration", "Portfolio Website", "Adding Blogs to Portfolio Website" as they are meta or part of the old portfolio itself.
    {
      name: "Minions Speak App",
      date: "August 2022",
      description: "Made the translator app Tanay built in the live session.",
      technologies: [], // Not specified, can add if known
      liveLink: "https://banana-talk-neogcamp-mark6.netlify.app/",
      sourceLink: "https://github.com/yuvraj1905/Mark-6-NeogCamp-banana-speaks",
    },
    {
      name: "Pirate-Speech-Translation",
      date: "August 2022",
      description:
        "Made a translation app that converts text from english to Pirate's language.",
      technologies: [], // Not specified
      liveLink: "https://mark7-neog-pirate-speech-translator.netlify.app/",
      sourceLink:
        "https://github.com/yuvraj1905/Mark-7-NeogCamp-Pirate-speech-translator",
    },
    {
      name: "Emoji Interpreter",
      date: "August 2022",
      description:
        "Made an emoji interpreter using React as it was made in the live Youtube session.",
      technologies: ["React"],
      liveLink: "https://codesandbox.io/s/emoji-interpreter-neog-nl3oh2",
      sourceLink:
        "https://github.com/yuvraj1905/Mark-8-NeogCamp-Emoji-Interpreter",
    },
    {
      name: "Recommendation app",
      date: "August 2022",
      description:
        "Made a game-recommendation app that suggests games of different genres to the users.",
      technologies: [], // Not specified, likely React from context
      liveLink: "https://codesandbox.io/s/github/yuvraj1905/Mark-9-NeogCamp",
      sourceLink: "https://github.com/yuvraj1905/Mark-9-NeogCamp",
    },
    {
      name: "Cash Register Manager",
      date: "August 2022",
      description:
        "Made a Cash Register Manager App. The app tells the cashier/user the amount to be returned in change to the customer with the minimum number of notes.",
      technologies: [], // Not specified
      liveLink: "https://mark10-neogcamp-cash-register.netlify.app/",
      sourceLink: "https://github.com/yuvraj1905/Mark-10-NeogCamp-CashRegister",
    },
    {
      name: "Is your Birthday lucky?",
      date: "August 2022",
      description:
        "Takes user's complete birthday and his/her lucky number. Shows the result to user with some graphics.",
      technologies: [], // Not specified
      liveLink: "https://isbirthday-lucky-neogcamp.netlify.app/",
      sourceLink:
        "https://github.com/yuvraj1905/Mark-11-Neogcamp-IsYourBirthdayLucky",
    },
    {
      name: "Fun with Triangles !",
      date: "August 2022",
      description:
        "A fun app with 4 sections related to knowledge of triangles.",
      technologies: [], // Not specified
      liveLink: "https://fun-with-triangles-mark12-neogcamp.netlify.app/",
      sourceLink:
        "https://github.com/yuvraj1905/Mark-12-NeogCamp-FunWithTriangles",
    },
    {
      name: "Palindrome birthday !",
      date: "August 2022",
      description:
        "User has to enter his/her birthday date. Result tells whether he/she was born on a palindrome day or not.",
      technologies: [], // Not specified
      liveLink: "https://birthday-palindrome-neog13.netlify.app/",
      sourceLink:
        "https://github.com/yuvraj1905/Mark-13-NeogCamp-BirthdayPalindrome",
    },
    {
      name: "Profit or loss calculator",
      date: "August 2022",
      description:
        "User has to input initial stock price, current stock price, and quantity of that stock as well. The app tells the user how much profit or loss he/she is making in percentage in absolute too.",
      technologies: [], // Not specified
      liveLink: "https://neog-stock-profit-or-loss.netlify.app/",
      sourceLink:
        "https://github.com/yuvraj1905/Mark-14-NeogCamp-Stock-Purchase-Profit-Or-Loss",
    },
    // Skipping "Blogs" project from HTML as it's a section of the old portfolio.
  ],
  skills: [
    {
      category: "Languages",
      items: ["JavaScript", "Typescript", "C++"],
    },
    {
      category: "Libraries & Frameworks",
      items: [
        "React",
        "NextJs",
        "Redux",
        "React-Native",
        "Express",
        "Tailwind CSS",
      ],
    },
    {
      category: "Tools",
      items: ["Git/Github", "MongoDB", "Jira"],
    },
  ],
  shortSkills: [
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Redux",
    "React Native",
    "Express",
    "Tailwind",
    "MongoDB",
    "Git",
  ],
  education: [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Sant Longowal Institute of Engineering & Technology",
      duration: "2020-2023",
      cgpa: "[9.3 CGPA]",
    },
    {
      degree: "Diploma in Computer Science",
      institution: "Sant Longowal Institute of Engineering & Technology",
      duration: "2017-2020",
      cgpa: "[9 CGPA]",
    },
  ],
  certifications: [
    {
      name: "Excellence Certificate for Data Structures in C++",
      issuer: "Coding Ninjas.", // Note: Period from resume
      link: "https://drive.google.com/file/d/1xjAoSdy76aSlOJBUA990ExcwxWzajCix/view",
    },
    {
      name: "Certificate of Achievement of an All India Web Dev bootcamp at neoG Camp 2022-23.", // Note: Period from resume
      issuer: "neoG Camp", // Inferred
      link: "https://drive.google.com/file/d/1LnWtWIv_q3qsprvaaM52JqRCSmk3Ryke/view",
    },
  ],
};
