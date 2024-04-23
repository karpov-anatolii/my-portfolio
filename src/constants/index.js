import { meta, shopify, stupeni_a, studentspeak } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  three,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  shadcn,
  postgresql,
  aws,
  nginx,
  docker,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: postgresql,
    name: "PostgreSQL",
    type: "Database",
  },

  {
    imageUrl: aws,
    name: "AWS",
    type: "Server",
  },
  {
    imageUrl: nginx,
    name: "NGINX",
    type: "Server",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "Frontend",
  },
  {
    imageUrl: three,
    name: "Three.js",
    type: "3D Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: shadcn,
    name: "Shadcn/UI",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "PHP JS Developer",
    company_name: "Stair-A",
    icon: stupeni_a,
    iconBg: "#fff",
    date: "March 2012 - Feb 2020",
    points: [
      "Creating and maintaining a constructional business web site stupeni-a.com.ua, using PHP, JavaScript, jQuery, CSS .",
      "Designing and creating 3D models of concrete staircases and interior design with ArchiCAD and 3ds Max for constructional needs.",
    ],
  },
  {
    title: "React  Developer",
    company_name: "Home projects",
    icon: react,
    iconBg: "#fff",
    date: "Jan 2021 - Jan 2022",
    points: [
      "Deep learning of React.js library, Redux, and Next.js.",
      "Developing and deploying some home projects. ",
      "Creating an online store called   <Link to='http://107.20.166.129/sweetytron/'>Sweetytron</Link>.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Studentspeak",
    icon: studentspeak,
    iconBg: "#b7e4c7",
    date: "Jan 2022 - Jan 2023",
    points: [
      "One year of commercial experience in Studentspeak.",
      "Working on the range of a full-stack tasks including Frontend improvements, API extension, hosting of different applications environments.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Home projects",
    icon: nextjs,
    iconBg: "#a2d2ff",
    date: "Feb 2023 - Present",
    points: [
      "Developing and deploying web applications using Next.js, AWS EC2 and other related technologies.",
      "Creating Web AI image editor  <Link to='https://imaginarium-a.vercel.app/'>Imaginarium</Link>  using Cloudinary and remove.bg.",
      "Learning the Three.js library, creating 3D models with Blender and 3ds Max, and integrating them with react-three-fiber for an incredible portfolio.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Stair-А",
    description:
      "Creating and maintaining a constructional business web site stupeni-a.com.ua (PHP, JS, HTML) ",
    link: "https://stupeni-a.com.ua",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Sweetytron",
    description:
      "Developing an online store with CMS Sweetytron (React,Express,PostgreSQL)",
    link: "http://107.20.166.129/sweetytron/",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Music platform",
    description:
      " Music cloud social platform with custom CMS.  (Next.js, Redux (RTKQuery), MaterialUI, NestJS, MongoDB) .",
    link: "http://107.20.166.129/music-platform",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Cloud disk",
    description:
      "Cloud file storage with features include creating folders, uploading files to the server, downloading from the server to the device, deleting and renaming folders and files. (React, Redux, Express, MongoDB) ",
    link: "https://github.com/karpov-anatolii/cloud-disk",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "MyWeather",
    description:
      "It was created with React Native/SQLite stack. The MyWeather app can provide the current weather with forecast (for 5 days with 3 hours gap) for any city on earth. You don't need to enter the whole name of city, just 1-2 letters in the input field. The search provides similar cities for your choice. If you click on `My location weather`, you will get the coordinates of you current location and the proper weather. There is the world's map where the city location is indicated. Also, all your requests are written in history and can be reviewed. You may download this .apk file on https://drive.google.com/file/d/1mfylwduYST1-ABrL9Iy6UrONAicHJFN0/view?usp=drive_link ",
    link: "https://github.com/karpov-anatolii/myweather",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Imaginarium",
    description:
      "Web AI image editor.  Built with Next.js 14, Cloudinary AI, Clerk, Imaginarium is a Software-as-a-Service app with AI features and a payments and credits system. One of the key enhancements is the Background Replacement feature, which leverages the remove.bg API for highly accurate background removal. ",
    link: "https://imaginarium-a.vercel.app/",
  },
];
