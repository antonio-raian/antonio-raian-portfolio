import { FaWhatsapp } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const socials: { icon: JSX.Element; link: string }[] = [
  {
    icon: <FiGithub />,
    link: "https://github.com/antonio-raian",
  },
  {
    icon: <FiLinkedin />,
    link: "https://www.linkedin.com/in/antonio-raian-mendes-42887ba4/",
  },
  {
    icon: <FaWhatsapp />,
    link: "https://wa.me/5511998258761",
  },
];

export { socials };
