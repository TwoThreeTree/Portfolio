//  icons
import { FiGithub, FiLinkedin } from "react-icons/fi";

// skills images
import SkillImg1 from "./assets/img/skills/html.png";
import SkillImg2 from "./assets/img/skills/javascript.png";
import SkillImg3 from "./assets/img/skills/typescript.png";
import SkillImg4 from "./assets/img/skills/react.png";
import SkillImg5 from "./assets/img/skills/java.png";
import SkillImg6 from "./assets/img/skills/sql.png";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
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
    image: SkillImg6,
  },
];

export const projects = [
  {
    title: "web Chat",
    image: "https://i.ytimg.com/vi/9Qzmri1WaaE/maxresdefault.jpg",

    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum sapiente eveniet cum! Sit autem suscipit sequi architecto accusantium ",
  },
  {
    title: "qr Code Generator",
    image: "https://i.ytimg.com/vi/9Qzmri1WaaE/maxresdefault.jpg",

    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum sapiente eveniet cum! Sit autem suscipit sequi architecto accusantium ",
  },
  {
    title: "grocery List",
    image: "https://i.ytimg.com/vi/9Qzmri1WaaE/maxresdefault.jpg",

    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum sapiente eveniet cum! Sit autem suscipit sequi architecto accusantium ",
  },
  {
    title: "Marvel Wiki",
    image: "https://i.ytimg.com/vi/9Qzmri1WaaE/maxresdefault.jpg",

    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum sapiente eveniet cum! Sit autem suscipit sequi architecto accusantium ",
  },
];
