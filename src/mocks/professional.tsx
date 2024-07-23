import {
  FaCss3,
  FaGit,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

// interfaces
interface iResume {
  title: string;
  description: string;
  itens?: iItens[];
  tools?: iSkillItens[];
}

interface iItens {
  instituition: string;
  degree: string;
  date: string;
  description: string;
}

interface iSkillItens {
  name: string;
  icon: JSX.Element;
}
// Resume
const experiences: iResume = {
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
  itens: [
    {
      instituition: "Company Name",
      degree: "Position",
      date: "2020 - 2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    },
    {
      instituition: "Company Name",
      degree: "Position",
      date: "2020 - 2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    },
    {
      instituition: "Company Name",
      degree: "Position",
      date: "2020 - 2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    },
    {
      instituition: "Company Name",
      degree: "Position",
      date: "2020 - 2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    },
  ],
};

const educations: iResume = {
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
  itens: [
    {
      instituition: "Instituition Name",
      degree: "Position",
      date: "2020 - 2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    },
    {
      instituition: "Instituition Name",
      degree: "Position",
      date: "2020 - 2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    },
    {
      instituition: "Instituition Name",
      degree: "Position",
      date: "2020 - 2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    },
    {
      instituition: "Instituition Name",
      degree: "Position",
      date: "2020 - 2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    },
  ],
};

const skills: iResume = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
  tools: [
    {
      name: "HTML 5",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS 3",
      icon: <FaCss3 />,
    },
    {
      name: "Javascript",
      icon: <FaJs />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Next JS",
      icon: <SiNextdotjs />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
    },
    {
      name: "Git",
      icon: <FaGit />,
    },
    {
      name: "Node JS",
      icon: <FaNodeJs />,
    },
  ],
};

const stats: { name: string; value: number; suffix: string }[] = [
  {
    name: "Years of Experience",
    value: new Date().getFullYear() - 2018,
    suffix: "+",
  },
  {
    name: "Projects Completed",
    value: 5,
    suffix: "",
  },
  {
    name: "Technologies Mastered",
    value: 5,
    suffix: "",
  },
  {
    name: "Code Commits",
    value: 500,
    suffix: "+",
  },
];

// Services
const services: {
  num: string;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    num: "01",
    title: "Software Architeture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    href: "",
  },
  {
    num: "02",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    href: "",
  },
  {
    num: "03",
    title: "Mobile Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    href: "",
  },
  {
    num: "04",
    title: "Content Writing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    href: "",
  },
];

export { experiences, educations, skills, stats, services };
