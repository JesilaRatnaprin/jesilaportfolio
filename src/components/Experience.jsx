import React from "react";

const Experience = () => {
  const experienceArr = [
    {
      id: 1,
      period: "10/2021 - 07/2024",
      companyLink: "https://www.accenture.com",
      role: "Senior Analyst, Accenture",
      altext: "Senior Analyst, Accenture(opens in a new tab)",
      description: `Designed and Developed responsive and user-friendly web
              applications for multiple projects across various domains.
              Collaborated with cross-functional teams, including designers,
              backend developers, and product managers, to deliver scalable and
              maintainable front-end solutions.Mentored junior developers,
              reviewed code, and shared best practices to enhance team
              productivity. Worked extensively with modern JavaScript frameworks
              like React, React Hooks, TypeScript and state management tools
              such as Redux, React - Redux. Learned Cypress and have written
              automation test scripts for the RBS Cradle application. Ensured
              cross-browser compatibility and adhered to web accessibility
              standards (WCAG). Built and maintained CI/CD pipelines for
              efficient deployment and testing. Conducted regular code reviews,
              debugging, and performance testing to improve application quality.
              Stayed updated with the latest frontend technologies and
              implemented innovative solutions to enhance user experience.`,
      projectList: [
        "Comcast Corporation - My Account Web & Xfinity Bill Pay",
        "United Utilities - Monitoring & Control System ",
        "Natwest/RBS - Lease Management System & Cradle",
      ],
      skills: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "ReactJS",
        "TypeScript",
        "Angular",
        "Jest",
        "Cypress",
        "Bootstrap",
        "Tailwind CSS",
        "Git",
        "BitBucket",
      ],
    },
    {
      id: 2,
      period: "01/2019 - 10/2021",
      companyLink: "https://www.hcltech.com",
      role: "Member Technical Staff, HCL Technologies",
      altext: "Member Technical Staff, Hcl Technologies(opens in a new tab)",
      description: `I worked as a UI developer in JavaScript and React Framework for the client CISCO.
    Contributed to the development of Cisco Network Planner and Cisco Network Controller Websites.
    Created reusable React components and managed application state with Redux and applied Redux middleware.
    Enhanced the coding standards, improved the code coverage to 80% and code quality of the application that covers code smells, bugs in CNP and optimized the web pages for maximum speed and scalability.
    Successfully led the development of new Network Design feature that resulted in increase customer engagement by 30%.
    Helped in transforming the legacy codes using class components into functional components which improved the overall performance of the application by 40%.
    Got recognized for giving enhancement ideas and implemented the same using React Hooks.
    Demonstrated the latest React Hooks concepts to my fellow team members and implemented the same in CNP`,
      projectList: ["Cisco - Cisco Network Controller"],
      skills: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "ReactJS",
        "Redux",
        "ContextAPI",
        "TypeScript",
        "Jest",
        "Bootstrap",
        "Git",
        "BitBucket",
        "Jenkin",
        "Docker",
        "SonarQube",
      ],
    },
    {
      id: 3,
      period: "02/2017 - 01/2019",
      companyLink: "https://www.cognizant.com",
      role: "Programmer Analyst, Cognizant",
      altext: "Programmer Analyst, Cognizant(opens in a new tab)",
      description: `Worked on LRT application using JavaScript, React and Redux.
    Involved in maintenance and enhancement of the project.
    Created reusable components using React and have written Unit Test Cases in Jest.
    Monitored and maintained the health and performance of LRT frontend applications to ensure seamless user experience.
    Reduced incident resolution time by implementing a streamlined debugging process using browser developer tools.
    Collaborated with QA, backend teams, and stakeholders to troubleshoot issues, validate fixes, and deploy hotfixes.
    Implemented Initial setup and component migration to Redux.`,
      projectList: ["Abbot - License Request Tool"],
      skills: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "ReactJS",
        "Redux",
        "TypeScript",
        "Angular",
        "Jest",
        "Bootstrap",
        "Git",
        "BitBucket",
        "JIRA",
        "Java",
      ],
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">My Work Experience below</p>
        </div>
        {experienceArr.map(({id, period, companyLink, role, altext, description, skills, projectList}) => (
          <div key={'experience-'+id} className="flex flex-col md:flex-row gap-4 mt-5">
          <div className="basis-1/4 md:basis-1/4 sm:basis-0">
            <header class="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2024 to Present">{period}</header>
          </div>
          <div className="basis-3/4 md:basis-3/4 sm:basis-0">
            <h3 class="font-medium leading-snug text-slate-200">
              <div>
                <a
                  class="flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-base"
                  href={companyLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={altext}
                >
                  <span>
                    {role}
                    <span class="inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </a>
              </div>
            </h3>
            <p class="mt-2 text-sm leading-normal">
              {description}
            </p>
            <p className="mt-2 text-sm leading-normal">
              <span className="text-teal-300">Projects Worked:</span> {projectList.join(', ')}
            </p>
            <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
              {skills.map((item, index) => (
                <li key = {'skill-'+id+index} class="mr-1.5 mt-2">
                <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  {item}
                </div>
              </li>
              ))}
            </ul>
          </div>
        </div>
        ))}
        
      </div>
    </div>
  );
};

export default Experience;
