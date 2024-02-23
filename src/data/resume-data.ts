import { Mail, Phone } from "lucide-react";
import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiFacebook,
} from "@icons-pack/react-simple-icons";

export const RESUME_DATA = {
  name: "Taha Ahmed",
  about: "Software engineer with a strong interest in web development.",
  location: "Alexandria, Egypt",
  locationLink: "https://maps.app.goo.gl/qTAUUGTjF9g6N7pf7",
  image: "https://avatars.githubusercontent.com/u/92264237",
  contacts: {
    email: {
      value: "taha.m8875@gmail.com",
      icon: Mail,
    },
    telephone: {
      value: "+201289845197",
      icon: Phone,
    },
    github: {
      value: "https://github.com/taham8875",
      icon: SiGithub,
    },
    linkedin: {
      value: "https://www.linkedin.com/in/taha-ahmed-7b552a1a2/",
      icon: SiLinkedin,
    },
    twitter: {
      value: "https://twitter.com/Taha_Ahmed_Taha",
      icon: SiX,
    },
    facebook: {
      value: "https://www.facebook.com/taha.ahmedtaha.90/",
      icon: SiFacebook,
    },
  },
  objective:
    "Hello, I’m Taha Ahmed, a passionate software engineer eager to apply my skills and knowledge in a professional environment. Currently seeking opportunities for internship, part-time or full-time positions to further enhance my practical experience.",
  education: {
    value: "Faculty of Engineering, Alexandria University ",
    description: "B.Sc. in Electronics and Communication Engineering",
    date: "2019 - present",
  },
  workExperience: [
    {
      company: "Techhive (Software House)",
      position: "Intern Software Engineer",
      location: "Alexandria, Egypt",
      date: "Jul 2023 - Oct 2023",
      description: `
* Contributed to the development and maintenance of the low-code development tool [(appasap)](https://www.appasap.ai/), the company’s
flagship product.
AppAsap offers a unique blend of chat-based AI assistance, user-friendly database visualization, automatic API
documentation, and a customized admin panel, setting it apart from other no-code solutions.
* Worked as a team member in developing and maintaining the admin panel for the product, providing users with a
seamless application management experience.
* Contributed to feature development, enriching the product’s functionality and user experience.
* UI Enhancement: Improved the user interface of appasap, enhancing user engagement.
* Bug Resolution : Collaborated on identifying and resolving software bugs, ensuring a smoother user experience.
* Tech Stack: Worked with the following technologies (React, Next.js, TypeScript, Material UI, Node.js, Express.js,
Postgres, Prisma, Docker).
      `,
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Go",
    "Java",
    "Python",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Postgres",
    "Prisma",
    "Docker",
    "HTML",
    "CSS",
    "Git",
  ],
  projects: [
    {
      title: "Url Shortener",
      description:
        "Built with the T3 Stack. It is a simple service allows you to shorten any URL and keep tracking of the number of clicks on your URL.",
      stack: ["Typescript", "Next", "tRPC", "Prisma", "Tailwind"],
      link: "https://github.com/taham8875/url-shortener",
    },
    {
      title: "GitHub repositories clone",
      description:
        "I cloned the repositories tab in GitHub, type any username and see his repositories.",
      stack: ["React", "Redux"],
      link: "https://github.com/taham8875/github-repositories-clone",
    },
    {
      title: "Youtube Home Page Clone",
      description:
        "YouTube Home Page Clone With Tailwind, React, and TypeScript.",
      stack: ["React", "Tailwind", "Typescript"],
      link: "https://github.com/taham8875/youtube-home-page-clone",
    },
    {
      title: "ECE24 Whatsapp bot",
      description:
        "A WhatsApp bot forwards ECE24 Telegram channel messages to the ECE24 WhatsApp community, simplifying cross-platform communication with students.",
      stack: ["Node", "Whatsapp web js", "Telegraf"],
      link: "https://github.com/taham8875/ece24-whatsapp-bot",
    },
    {
      title: "Mern Auth Skeleton",
      description:
        "A skeleton application for authentication and authorization only, good starting point for any new project.",
      stack: ["MERN stack"],
      link: "https://github.com/taham8875/mern-auth-skeleton",
    },
    {
      title: "Blog app - a front end project",
      description:
        "A blog app with CRUD operation with React, Redux and Bootstrap.",
      stack: ["React", "Redux"],
      link: "https://github.com/taham8875/react-redux-blog-app",
    },
    {
      title: "Vue Task Tracker",
      description: "A simple task tracker app with Vue.",
      stack: ["Vue"],
      link: "https://github.com/taham8875/vue-task-tracker",
    },
    {
      title: "Vue Expense Tracker",
      description: "A simple expense tracker app with Vue.",
      stack: ["Vue"],
      link: "https://github.com/taham8875/vue-expense-tracker",
    },
    {
      title: "Django Blog",
      description: "I created a fully functioning blog with Django.",
      stack: ["Django"],
      link: "https://github.com/taham8875/django-blog",
    },
    {
      title: "Flask Blog",
      description:
        "The same blog I created but in Flask. Instead of using a battery included framework I tried a simpler one to see more details.",
      stack: ["Flask"],
      link: "https://github.com/taham8875/flask-blog",
    },
    {
      title: "Numerical Methods Project with Sage",
      description:
        "This project implements various numerical methods using SageMath.",
      stack: ["Python", "SageMath"],
      link: "https://github.com/taham8875/numerical-methods-project-with-sage",
    },
  ],
  problemSolving: {
    title: "Problem Solving",
    description: "A collection of my solutions to various programming problems",
    stack: [
      "Leetcode",
      "Codeforces",
      "C++",
      "Python",
      "Go",
      "Java",
      "JavaScript",
    ],
    github: "https://github.com/taham8875/problem-solving",
  },
};
