import React from "react";
import { skillImages } from "../assets/images";

const About = () => {
  const {html, css, javascript, typescript, react, redux, angular, nodejs, tailwind, bootstrap, materialui, jest, cypress,
    bitbucket, github, gitlab, azuredevops, jenkins, docker, teamcity, sonarQube, shadcn, nextjs, zod, vercel
  } = skillImages
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: react,
      title: "React",
      style: "shadow-cyan-600",
    },
    {
      id: 6,
      src: redux,
      title: "Redux",
      style: "shadow-purple-600",
    },
    {
      id: 7,
      src: angular,
      title: "Angular",
      style: "shadow-red-600",
    },
    {
      id: 21,
      src: nodejs,
      title: "Node JS",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 9,
      src: bootstrap,
      title: "BootStrap",
      style: "shadow-purple-400",
    },
    {
      id: 10,
      src: materialui,
      title: "Material UI",
      style: "shadow-sky-400",
    },
    {
      id: 11,
      src: jest,
      title: "Jest",
      style: "shadow-red-900",
    },
    {
      id: 12,
      src: cypress,
      title: "Cypress",
      style: "shadow-gray-700",
    },
    {
      id: 13,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 14,
      src: azuredevops,
      title: "Azure DevOps",
      style: "shadow-sky-500",
    },{
      id: 15,
      src: bitbucket,
      title: "BitBucket",
      style: "shadow-blue-500",
    },
    {
      id: 16,
      src: jenkins,
      title: "Jenkins",
      style: "shadow-gray-400",
    },
    {
      id: 17,
      src: docker,
      title: "Docker",
      style: "shadow-sky-700",
    },
    {
      id: 18,
      src: teamcity,
      title: "TeamCity",
      style: "shadow-teal-500",
    },
    {
      id: 19,
      src: gitlab,
      title: "GitLab",
      style: "shadow-orange-500",
    },
    {
      id: 20,
      src: sonarQube,
      title: "SonarQube",
      style: "shadow-sky-400",
    },
    {
      id: 22,
      src: nextjs,
      title: "Next.js",
      style: "shadow-gray-400",
    },
    {
      id: 23,
      src: shadcn,
      title: "Shadcn",
      style: "shadow-gray-400",
    },
    {
      id: 24,
      src: vercel,
      title: "Vercel",
      style: "shadow-gray-400",
    },
    {
      id: 25,
      src: zod,
      title: "Zod",
      style: "shadow-blue-500",
    },  
  ];
  return (
    <div
      name="about"
      id="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-lg mt-5">
          I’m a Senior Frontend Developer with 7+ years of experience
          specializing in React, JavaScript, TypeScript, and modern UI
          frameworks. Passionate about building scalable, high-performance web
          applications, I excel in crafting responsive, accessible, and
          user-friendly interfaces.
        </p>

        <br />

        <p className="text-lg">
          Throughout my career, I've worked on more than five projects across
          domains like networking, healthcare, and finance, developing Single
          Page Applications with a focus on performance, scalability, and
          maintainability. I have collaborated with global clients to gather
          requirements, estimate sprint points in an agile environment, and
          ensure smooth project execution. My key contributions include
          optimizing web applications, implementing state management using
          Redux/Context API, ensuring code quality through unit and integration
          testing with Jest and Cypress, and following best practices for
          accessibility and security. I also mentor junior developers and work
          closely with backend teams for seamless API integrations. I stay
          updated with evolving technologies and continuously strive to enhance
          application performance and user experience.
        </p>
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          {/* <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p> */}
          <p className=" text-lg py-3">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
