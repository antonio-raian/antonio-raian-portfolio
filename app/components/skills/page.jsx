import Image from "next/image";
import "./styles.css";

export default function Skills() {
  return (
    <section id="skills">
      <span>My Skills</span>
      <div className="grid gap-0 grid-cols-3 border-solid border-4 w-10/12">
        <a href="/#projects" className="skill-box">
          <Image alt="" src="" />
          <label className="">Software Developer</label>
          <p></p>
        </a>
        <a href="/#projects" className="skill-box">
          <label>Backend Deveveloper</label>
          <p></p>
        </a>
        <a href="/#projects" className="skill-box">
          <label>Mobile Deveveloper</label>
          <p></p>
        </a>
      </div>
    </section>
  );
}
