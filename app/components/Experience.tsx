"use client";

import { FaRobot, FaCode } from "react-icons/fa";
import Reveal from "./Reveal";


const experiences = [
  {
    icon: <FaRobot />,
    title: "Front-End AI Engineering Intern — FlyRank AI",
    period: "Jul 2026 - Aug 2026 · Remote",
    description:
      "Built responsive, user-friendly web interfaces using modern front-end technologies as part of the engineering team's AI-powered web applications. Collaborated with engineers on feature development, following industry best practices for version control (Git/GitHub) and collaborative software development. Strengthened front-end development and problem-solving skills while contributing to AI-driven product features.",
  },

  {
    icon: <FaCode />,
    title: "Web Developer Intern — Arch Technologies",
    period: "Jul 2026 - Aug 2026 · Remote",
    description:
      "Developed web application features using React.js, Next.js, Tailwind CSS and Node.js, including responsive UI components and REST API integrations. Used Git/GitHub for version control and participated in code reviews within an agile development workflow. Debugged and tested application functionality to improve performance and reliability.",
  },
];


export default function Experience() {

  return (

    <section
      id="experience"
      className="py-28 bg-white scroll-mt-24"
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
            Experience
          </p>


          <h2 className="
          mt-4
          text-3xl
          md:text-5xl
          font-bold
          text-slate-900
          ">
            My Journey
          </h2>


          <p className="
          mt-5
          text-slate-600
          max-w-2xl
          mx-auto
          leading-7
          ">
            My learning journey, development experience, and continuous growth as a software developer.
          </p>


        </div>

        </Reveal>




        <div className="
        relative
        max-w-4xl
        mx-auto
        ">


          {/* Timeline line */}

          <div className="
          absolute
          left-5
          md:left-6
          top-0
          h-full
          w-[2px]
          bg-blue-200
          "></div>




          <div className="space-y-8 md:space-y-10">


            {experiences.map((item,index)=>(

              <Reveal
                key={item.title}
                delay={index * 0.1}
              >

              <div
                className="
                relative
                pl-14
                md:pl-16
                "
              >


                {/* Icon Circle */}

                <div className="
                absolute
                left-0
                top-2
                w-10
                h-10
                md:w-12
                md:h-12
                rounded-full
                bg-blue-600
                text-white
                flex
                items-center
                justify-center
                text-lg
                md:text-xl
                shadow-lg
                ">
                  {item.icon}
                </div>




                {/* Card */}

                <div className="
                bg-slate-50
                rounded-3xl
                p-5
                md:p-7
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition
                duration-300
                ">


                  <div className="
                  flex
                  flex-col
                  md:flex-row
                  md:items-center
                  md:justify-between
                  gap-2
                  ">


                    <h3 className="
                    text-lg
                    md:text-xl
                    font-bold
                    text-slate-900
                    ">
                      {item.title}
                    </h3>


                    <span className="
                    text-blue-600
                    font-semibold
                    ">
                      {item.period}
                    </span>


                  </div>



                  <p className="
                  mt-4
                  text-slate-600
                  leading-7
                  text-sm
                  md:text-base
                  ">
                    {item.description}
                  </p>



                </div>



              </div>

              </Reveal>

            ))}


          </div>


        </div>


      </div>


    </section>

  );
}

