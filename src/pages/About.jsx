import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const About = () => {
  const [skillIsHovered, setSkillIsHovered] = useState("");
  return (
    <section className=" max-container">
      <div className="bg"></div>
      <div className="about-container hologram rounded-lg px-6 py-10">
        <h1 className="head-text">
          Hello, I'm{" "}
          <span className="blue-gradient_text font-black drop-shadow">
            {" "}
            Anatolii Karpov
          </span>{" "}
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I am a dedicated and passionate Full Stack Developer with experience
            ranging from planning web applications to hosting them in the cloud
            and conducting real-user testing. I have a solid technical
            background and an ability to accurately discover client needs,
            ensuring consistent and high-quality results.
          </p>
        </div>

        <div className="py-10 flex flex-col">
          <h3 className="subhead-text">My Skills</h3>

          <div className="mt-16 flex flex-wrap gap-12">
            {skills.map((skill) => (
              <div
                className="block-container w-20 h-20 relative"
                onMouseEnter={() => setSkillIsHovered(skill.name)}
                onMouseLeave={() => setSkillIsHovered("")}
                key={skill.name}
              >
                <div
                  className={`p-2 absolute left-[50%] translate-x-[-50%] top-0 w-fit rounded-lg  z-50 bg-purple-600/70 text-white ${
                    skillIsHovered === skill.name ? "block" : "hidden"
                  }`}
                >
                  {skill.name}
                </div>
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16">
          <h3 className="subhead-text">Work Experience.</h3>

          <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <VerticalTimelineElement
                  key={index}
                  date={experience.date}
                  iconStyle={{ background: experience.iconBg }}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className="text-black sm:text-xl text-lg font-kode font-semibold">
                      {experience.title}
                    </h3>
                    <p className="!my-3  text-black-500 font-semibold ">
                      {experience.company_name}
                    </p>
                  </div>

                  <ul className="sm:my-5 m-0 sm:list-disc list-none  space-y-2">
                    {experience.points.map((point, index2) => {
                      const regex =
                        /(.*?)<Link to='([^']*)'>(.*?)<\/Link>(.*?)/;
                      const match = point.match(regex);

                      if (match) {
                        const beforeText = match[1]; // Text before the link
                        const linkUrl = match[2]; // URL of the link
                        const linkSiteName = match[3]; // Name of the link
                        const afterText = match[4]; // Text after the link

                        return (
                          <li
                            key={index2 + index}
                            className="experience-content "
                          >
                            {beforeText}
                            <Link
                              to={linkUrl}
                              target="_blank"
                              className=" text-purple-600 font-semibold"
                            >
                              {linkSiteName}
                            </Link>
                            {afterText}
                            <hr className="w-[80%] my-3 m-auto  block sm:hidden" />
                          </li>
                        );
                      } else
                        return (
                          <li
                            key={index2 + index}
                            className="experience-content"
                          >
                            {point}
                            <hr className="w-[80%] my-3 m-auto  block sm:hidden" />
                          </li>
                        );
                    })}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>

        <hr className="border-slate-200" />

        <CTA />
      </div>
    </section>
  );
};

export default About;
