export type iProject = {
  num: string;
  category: string;
  title: string;
  description: string;
  href: string;
  stack: {
    name: string;
    icon?: JSX.Element;
  }[];
  image: string;
  live: string;
  github: string;
};

const projects: iProject[] = [
  {
    num: "01",
    category: "Sistemas WEB",
    title: "Cacttus",
    description: "Sistema para gestão de candidatudas em vagas de emprego.",
    href: "",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "PostgreSQL",
      },
      {
        name: "Tailwind",
      },
    ],
    image: "/assets/work/cacttus.png",
    live: "https://cacttus-demonstration.vercel.app/",
    github: "https://github.com/antonio-raian/cacttus-demonstration",
  },
  {
    num: "02",
    category: "UI/UX",
    title: "Portfólio WEB",
    description: "Projeto figma deste portfólio.",
    href: "",
    stack: [
      {
        name: "Figma",
      },
      {
        name: "UI/UX",
      },
    ],
    image: "/assets/work/portfolio.png",
    live: "https://www.figma.com/proto/dqQdYgEoBGNguZUL7OlEhX/Portfolio?page-id=0%3A1&node-id=28-2&node-type=canvas&viewport=413%2C200%2C0.26&t=vqID7kvA8ls6U8jh-1&scaling=scale-down&content-scaling=fixed",
    github:
      "https://www.figma.com/design/dqQdYgEoBGNguZUL7OlEhX/Portfolio?node-id=0-1&t=oXwDmR0loiRL1Ozb-1",
  },
];

export default projects;
