import {
  FaAws,
  FaCss3,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiGooglecloud,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { GrConnect, GrDocker } from "react-icons/gr";
import { MdDevicesOther, MdOutlineDesignServices } from "react-icons/md";
import { PiPlugsConnectedBold } from "react-icons/pi";

// interfaces
interface iResume {
  title: string;
  description: string;
  itens?: iItens[];
  tools: iSkillItens[];
}

interface iItens {
  instituition: string;
  degree: string;
  date: string;
  description: string;
}

interface iSkillItens {
  name: string;
  component: JSX.Element;
}

export interface iStat {
  name: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

const skills: iSkillItens[] = [
  // Linguagens
  {
    name: "Javascript",
    component: <FaJs className="w-14 h-14" />,
  },
  {
    name: "Typescript",
    component: <SiTypescript className="w-14 h-14" />,
  },
  {
    name: "HTML 5",
    component: <FaHtml5 className="w-14 h-14" />,
  },
  {
    name: "CSS 3",
    component: <FaCss3 className="w-14 h-14" />,
  },
  // Framework
  {
    name: "Node JS",
    component: <FaNodeJs className="w-14 h-14" />,
  },
  {
    name: "Next JS",
    component: <SiNextdotjs className="w-14 h-14" />,
  },
  {
    name: "Nest JS",
    component: <SiNestjs className="w-14 h-14" />,
  },
  // Bibliotecas
  {
    name: "React",
    component: <FaReact className="w-14 h-14" />,
  },
  {
    name: "Tailwind",
    component: <SiTailwindcss className="w-14 h-14" />,
  },
  // Banco de Dados
  {
    name: "PostgreSQL",
    component: <SiPostgresql className="w-14 h-14" />,
  },
  {
    name: "MongoDB",
    component: <SiMongodb className="w-14 h-14" />,
  },
  // Ferramentas
  {
    name: "Github",
    component: <FaGithub className="w-14 h-14" />,
  },
  {
    name: "Docker",
    component: <GrDocker className="w-14 h-14" />,
  },
  {
    name: "AWS",
    component: <FaAws className="w-14 h-14" />,
  },
  {
    name: "GCP",
    component: <SiGooglecloud className="w-14 h-14" />,
  },
];

// Services
export interface iServices {
  num: string;
  title: string;
  description: string;
  href: string;
  component?: JSX.Element;
}
const services: iServices[] = [
  {
    num: "01",
    title: "Desenvolvimento de Sistemas",
    description:
      "Posso lhe ajudar a desenvolver um sistema computacional, desde o planejamento, design até a implantação.",
    href: "/contact?service=development",
    component: <MdDevicesOther className="w-12 h-12" />,
  },
  {
    num: "02",
    title: "Integrações",
    description:
      "Desenvolvimento de interfaces para comunicações com sistemas externos, como APIs, bancos de dados, etc.",
    href: "/contact?service=integrations",
    // component: <PiPlugsConnectedBold className="w-14 h-14" />,
    component: <GrConnect className="w-12 h-12" />,
  },
  {
    num: "03",
    title: "UI/UX",
    description:
      "Criação de uma identidade visual atrativa e intuitiva para o seu produto ou serviço, garantindo uma experiência de usuário agradação.",
    href: "/contact?service=ui-ux",
    component: <MdOutlineDesignServices className="w-12 h-12" />,
  },
];

const servicesMensages: Record<string, string> = {
  development: "Poderia me ajudar com o desenvolvimento de um sistema?",
  integrations:
    "Poderia me ajudar com a conectar meu sistema com outros sistemas?",
  "ui-ux": "Poderia me ajudar com o design do meu produto?",
};

export { skills, services, servicesMensages };
