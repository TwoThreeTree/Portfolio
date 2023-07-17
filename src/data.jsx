//  icons
import { FiGithub, FiLinkedin } from "react-icons/fi";

// skills images
import SkillImg1 from "./assets/img/skills/html.png";
import SkillImg2 from "./assets/img/skills/javascript.png";
import SkillImg3 from "./assets/img/skills/react.png";
import SkillImg4 from "./assets/img/skills/java.png";
import SkillImg5 from "./assets/img/skills/sql.png";
import SkillImg6 from "./assets/img/skills/css3.png";
import SkillImg7 from "./assets/img/skills/python.png";
import SkillImg8 from "./assets/img/skills/firebase.png";
import SkillImg9 from "./assets/img/skills/node.png";
import SkillImg10 from "./assets/img/skills/c.png";
import SkillImg11 from "./assets/img/skills/c++.png";

import marvelPic from "./assets/img/portfolio/marvel.gif";
import chatPic from "./assets/img/portfolio/chat.gif";
import qrPic from "./assets/img/portfolio/qrPic.gif";
import groceryList from "./assets/img/portfolio/groceryList.gif";
import other from "./assets/img/portfolio/other.gif";
import winnipeg from "./assets/img/portfolio/winnipeg.gif";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  // {
  //   name: "about",
  //   href: "about",
  // },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiGithub />,
    href: "https://github.com/TwoThreeTree",
    color: "text-white",
    colorHover: "hover:text-gray-500",
  },
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/kai-z-b8646425a",
    color: "text-blue-500",
    colorHover: "hover:text-blue-900",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },

  {
    image: SkillImg7,
  },
  {
    image: SkillImg9,
  },
  {
    image: SkillImg10,
  },
  {
    image: SkillImg11,
  },
];

export const projects = [
  {
    title: "web Chat",
    image: chatPic,
    url: "https://webchat-firebase-137c8.web.app/login",
    content:
      "Developed a responsive web chatting site using React.js, Sass, and Firebase. Integrated Firebase Firestore for database, Firebase Authentication for user authentication, and Firebase Storage for file storage. Test username:test1, password: 123456",
  },
  {
    title: "qr Code Generator",
    url: "https://qrcode-f8451.web.app/",
    image: qrPic,

    content:
      "Developed a QR code generator project utilizing JavaScript (JS), HTML, and CSS, showcasing proficiency in front-end web technologies.",
  },
  {
    title: "grocery budget helper",
    url: "https://twothreetree.github.io/Grocery-List/",
    image: groceryList,

    content:
      "Developed a responsive React app as a comprehensive grocery list manager, utilizing React.js, local storage, search functionality, and data persistence.",
  },
  {
    title: "Marvel Wiki",
    url: "https://marvelsite-929a8.web.app/",
    image: marvelPic,

    content:
      "Developed Marvel Wiki Pedia, a responsive React app integrating the Marvel API and React.js, ensuring a seamless user experience across devices. Implemented search functionality to retrieve detailed information about superheroes from the Marvel API.",
  },
  {
    title: "Travel Site - Winnipeg",
    url: "https://hciproject-2019.github.io/SightsOfWinnipeg/contactUs/index.html",
    image: winnipeg,

    content:
      " I had the privilege of collaborating with a team to develop a high-fidelity website prototype(HTML/CSS/JS) showcasing Winnipeg's hidden charm as a tourist destination. Our journey involved applying various prototyping techniques, from low to high fidelity, while incorporating valuable user feedback and meticulous planning.",
  },
  {
    title: "Other projects",
    url: "https://github.com/TwoThreeTree",
    image: other,

    content:
      " Garbage Collector (in C), Maze Solver (in C), DVD Store Management System (in C++), Min/Max Heap (in Java), Hashing Algorithms (in Java), Path Finder (in Prolog).",
  },
];
