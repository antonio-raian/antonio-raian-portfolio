const projects: {
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
}[] = [
  {
    num: "01",
    category: "Software Architeture",
    title: "Software Architeture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum.",
    href: "",
    stack: [
      {
        name: "HTML",
        // icon: <FaHtml5 />,
      },
      {
        name: "CSS",
        // icon: <FaCss3 />,
      },
      {
        name: "Javascript",
        // icon: <FaJs />,
      },
    ],
    image: "/assets/work/thumb1.png",
    live: "ascascasc",
    github: "github.com",
  },
  {
    num: "02",
    category: "Software Architeture",
    title: "Software Architeture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum.",
    href: "",
    stack: [
      {
        name: "HTML",
        // icon: <FaHtml5 />,
      },
      {
        name: "CSS",
        // icon: <FaCss3 />,
      },
      {
        name: "Javascript",
        // icon: <FaJs />,
      },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Software Architeture",
    title: "Software Architeture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum.",
    href: "",
    stack: [
      {
        name: "HTML",
        // icon: <FaHtml5 />,
      },
      {
        name: "CSS",
        // icon: <FaCss3 />,
      },
      {
        name: "Javascript",
        // icon: <FaJs />,
      },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

export default projects;
