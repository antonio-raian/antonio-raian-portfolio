import "./styles.css";
import CustomImage from "../components/customImage/page";
export default function Skills() {
  return (
    <section id="skills">
      <span className="title">My Skills</span>
      <div className="grid gap-0 grid-cols-3 w-10/12">
        <a href="/skills">
          <div className="skill-box border-solid border-r-4 border-gray-400 shadow-sm ">
            <div className="flex flex-row align-center">
              <CustomImage img1={"/pc-outlined.png"} img2={"/pc-colored.png"} />
              <span className="label">Software Developer</span>
            </div>
            <p>
              Development with fuctional and OOP: Java, JavaScript, TypeScript,
              Python.
            </p>
          </div>
        </a>
        <a
          href="/skills"
          className="shadow-sm skill-box border-solid border-r-4 border-gray-400"
        >
          <label>Backend Deveveloper</label>
          <p>
            Development of APIs using NodeJs, AdonisJs and NestJs frameworks.
            <br />
            SQL and NoSQL databases.
          </p>
        </a>
        <a href="/skills" className="shadow-sm skill-box">
          <label>Mobile/Frontend Deveveloper</label>
          <p>
            Experience developing web and mobile applications: HTML, CSS, JS,
            React, React Native, NextJs.
          </p>
        </a>
      </div>
      <div
        id="separator"
        className="w-3/4 border-solid border-2 border-gray-400 m-5"
      ></div>
      <span>Some Tools</span>
      <div className="grid gap-0 grid-cols-3 w-10/12">
        <div className="col-span-2">Frameworks</div>
        <div>Languages</div>
      </div>
    </section>
  );
}
