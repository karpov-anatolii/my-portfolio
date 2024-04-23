import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className="max-container">
      <div className="bg "></div>
      <div className="about-container hologram rounded-lg px-6 py-10">
        <h1 className="head-text">
          My{" "}
          <span className="blue-gradient_text drop-shadow font-semibold">
            Projects
          </span>
        </h1>

        <p className=" mt-2 leading-relaxed">
          In my personal projects, I have demonstrated my ability to plan and
          design projects using tools like Figma, host applications on AWS or
          Vercel, and conduct real-user testing. My technical skills include
          React, Next.js, Express, PostgreSQL, Redux, NestJS, MongoDB, and more.
          I have also gained experience in DevOps, deploying serverful and
          serverless applications on AWS EC2, Nginx, Apache, Vercel, and
          Netlify, as well as creating Docker containers.
        </p>

        <div className="flex flex-wrap my-20 gap-16">
          {[...projects].reverse().map((project) => (
            <div className="lg:w-[400px] w-full" key={project.name}>
              <div className="mt-5 flex flex-col">
                <h3 className="text-2xl text-white font-kode font-semibold">
                  {project.name}
                </h3>
                <p className="mt-2">{project.description}</p>
                <div className="mt-5 flex items-center gap-2 font-kode">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Live Link
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-slate-200" />

        <CTA />
      </div>
    </section>
  );
};

export default Projects;
