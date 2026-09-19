"use client";

import Reveal from "./Reveal";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaRobot,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiJavascript,
  SiCplusplus,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiHtml5,
  SiCss,
  SiVercel,
} from "react-icons/si";


const skillGroups = [

  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss /> },
    ],
  },


  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST APIs", icon: "⚡" },
    ],
  },


  {
    title: "Databases",
    skills: [
      { name: "SQL", icon: "🗄️" },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Prisma", icon: <SiPrisma /> },
    ],
  },


  {
    title: "Programming & CS Foundations",
    skills: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Data Structures & Algorithms", icon: "🧠" },
      { name: "OOP", icon: "🧩" },
    ],
  },


  {
    title: "AI & Modern Tooling",
    skills: [
      { name: "AI API Integration", icon: <FaRobot /> },
      { name: "Claude API", icon: "✳️" },
      { name: "AI-Assisted Development", icon: "🤖" },
      { name: "Cursor AI", icon: "🖱️" },
    ],
  },


  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: "💻" },
      { name: "Vercel", icon: <SiVercel /> },
    ],
  },

];


export default function Skills() {

  return (

    <section
      id="skills"
      className="py-28 bg-slate-100 scroll-mt-24"
    >

      <div className="max-w-7xl mx-auto px-5 md:px-8">


        {/* Heading */}

        <Reveal>

          <div className="text-center mb-14 md:mb-16">

            <p className="
            uppercase
            tracking-[5px]
            text-blue-600
            font-semibold
            ">
              Skills
            </p>


            <h2 className="
            mt-4
            text-3xl
            md:text-5xl
            font-bold
            text-slate-900
            ">
              Technologies I Work With
            </h2>


            <p className="
            mt-6
            max-w-2xl
            mx-auto
            text-slate-600
            text-base
            md:text-lg
            ">
              A collection of technologies and tools I use to
              design, develop, and build modern software applications.
            </p>


          </div>

        </Reveal>



        {/* Skill Cards */}


        <div className="
        grid
        md:grid-cols-2
        gap-6
        md:gap-8
        ">


          {skillGroups.map((group, index) => (

            <Reveal
              key={group.title}
              delay={index * 0.1}
            >

              <div

                className="
                bg-white
                rounded-3xl
                p-6
                md:p-8
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition
                duration-300
                "

              >


                <h3 className="
                text-xl
                md:text-2xl
                font-bold
                text-slate-900
                mb-6
                md:mb-8
                ">
                  {group.title}
                </h3>



                <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-4
                md:gap-5
                ">


                  {group.skills.map((skill) => (

                    <div
                      key={skill.name}

                      className="
                      flex
                      items-center
                      gap-4
                      p-4
                      rounded-xl
                      bg-slate-50
                      border
                      border-slate-100
                      hover:bg-blue-50
                      hover:border-blue-200
                      transition
                      "

                    >


                      <div className="
                      w-11
                      h-11
                      rounded-xl
                      bg-blue-100
                      flex
                      items-center
                      justify-center
                      text-blue-600
                      text-xl
                      shrink-0
                      ">

                        {skill.icon}

                      </div>



                      <span className="
                      font-medium
                      text-slate-700
                      ">
                        {skill.name}
                      </span>


                    </div>


                  ))}


                </div>


              </div>

            </Reveal>


          ))}


        </div>


      </div>


    </section>

  );

}