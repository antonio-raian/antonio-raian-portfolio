import { FaGithub, FaLinkedin } from "react-icons/fa";

const personal: {
  name: string;
  email: string;
  phone: string;
  address: string;
} = {
  name: "Antonio Mendes",
  email: "mendes.antonioraian@gmail.com",
  phone: "+55 11 99999-9999",
  address: "São Paulo, Brazil",
};

const socials: { icon: JSX.Element; link: string }[] = [
  {
    icon: <FaGithub />,
    link: "https://github.com/antonio-mendes",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/antonio-raian-mendes-42887ba4/",
  },
];

const about: {
  title: string;
  description: string;
  infos: { title: string; content: string | number; sufix?: string }[];
} = {
  title: "About Me",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
  infos: [
    {
      title: "Name",
      content: personal.name,
    },
    {
      title: "Location",
      content: personal.address,
    },
    {
      title: "Experience",
      content: new Date().getFullYear() - 2018,
      sufix: "+ Years",
    },
    {
      title: "Languages",
      content: "Portuguese, English",
    },
    {
      title: "Freelance",
      content: "Available",
    },
    {
      title: "Email",
      content: personal.email,
    },
  ],
};

export { about, personal, socials };
