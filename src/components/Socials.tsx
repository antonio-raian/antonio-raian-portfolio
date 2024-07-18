import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    link: "https://github.com/antonio-mendes",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/antonio-raian-mendes-42887ba4/",
  },
];
const Socials = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link href={social.link} key={index} className={iconStyles}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
