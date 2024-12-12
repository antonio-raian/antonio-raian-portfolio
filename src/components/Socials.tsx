import { socials } from "@/mocks/personal";
import Link from "next/link";

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
        <Link
          href={social.link}
          target="_blank"
          key={index}
          className={iconStyles}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
