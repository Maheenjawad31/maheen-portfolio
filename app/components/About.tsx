"use client";

import {
  FaGraduationCap,
  FaCode,
  FaRocket,
  FaBrain,
} from "react-icons/fa";

import Reveal from "./Reveal";


export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 py-28 bg-white"
    >

      <div className="max-w-7xl mx-auto px-5 md:px-8">


        {/* Heading */}

        <Reveal>

          <div className="text-center mb-16 md:mb-20">

            <p className="
            text-blue-600
            uppercase
            tracking-[0.3em]
            font-semibold
            ">
              About Me
            </p>


            <h2 className="
            mt-4
            text-3xl
            md:text-5xl
            font-bold
            text-slate-900
            ">
              Building Ideas Into Digital Experiences
            </h2>


            <p className="
            mt-6
            max-w-2xl
            mx-auto
            text-base
            md:text-lg
            text-slate-600
            leading-8
            ">
              A BSCS student at SZABIST University with front-end and
              full-stack internship experience, passionate about creating
              modern, responsive web applications and continuously
              improving through practical projects and learning.
            </p>


          </div>

        </Reveal>




        <div className="
        grid
        lg:grid-cols-2
        gap-12
        lg:gap-20
        items-start
        ">



          {/* LEFT SIDE */}

          <Reveal>

          <div>


            <h3 className="
            text-2xl
            font-bold
            text-slate-900
            mb-8
            ">
              My Journey
            </h3>



            <div className="
            relative
            border-l-2
            border-blue-200
            ml-3
            space-y-10
            ">



              <div className="relative pl-10">

                <div className="
                absolute
                -left-[11px]
                top-1
                w-5
                h-5
                rounded-full
                bg-blue-600
                "></div>


                <h4 className="
                font-bold
                text-xl
                text-slate-900
                ">
                  2024 — Started BSCS
                </h4>


                <p className="
                mt-2
                text-slate-600
                leading-7
                ">
                  Began my Bachelor of Science in Computational
                  Science at SZABIST University Islamabad and
                  started building a strong foundation in programming,
                  algorithms, and software development.
                </p>

              </div>




              <div className="relative pl-10">

                <div className="
                absolute
                -left-[11px]
                top-1
                w-5
                h-5
                rounded-full
                bg-blue-600
                "></div>


                <h4 className="
                font-bold
                text-xl
                text-slate-900
                ">
                  Academic Projects
                </h4>


                <p className="
                mt-2
                text-slate-600
                leading-7
                ">
                  Worked on software development projects involving
                  C++, databases, data structures, and full-stack
                  web development.
                </p>

              </div>




              <div className="relative pl-10">

                <div className="
                absolute
                -left-[11px]
                top-1
                w-5
                h-5
                rounded-full
                bg-blue-600
                "></div>


                <h4 className="
                font-bold
                text-xl
                text-slate-900
                ">
                  Web Development Journey
                </h4>


                <p className="
                mt-2
                text-slate-600
                leading-7
                ">
                  Exploring modern technologies including React,
                  Next.js, TypeScript, Node.js, and building
                  real-world applications.
                </p>

              </div>




              <div className="relative pl-10">

                <div className="
                absolute
                -left-[11px]
                top-1
                w-5
                h-5
                rounded-full
                bg-blue-600
                "></div>


                <h4 className="
                font-bold
                text-xl
                text-slate-900
                ">
                  2026 — Internship Experience
                </h4>


                <p className="
                mt-2
                text-slate-600
                leading-7
                ">
                  Completed a Front-End AI Engineering internship at
                  FlyRank AI and a Web Developer internship at Arch
                  Technologies, building responsive interfaces and
                  full-stack features with React, Next.js, Tailwind
                  CSS, and Node.js.
                </p>

              </div>




              <div className="relative pl-10">

                <div className="
                absolute
                -left-[11px]
                top-1
                w-5
                h-5
                rounded-full
                bg-blue-600
                "></div>


                <h4 className="
                font-bold
                text-xl
                text-slate-900
                ">
                  Future Goals
                </h4>


                <p className="
                mt-2
                text-slate-600
                leading-7
                ">
                  Continue growing as a developer by creating
                  impactful products and exploring AI-powered
                  software development.
                </p>

              </div>



            </div>


          </div>

          </Reveal>





          {/* RIGHT SIDE */}


          <Reveal delay={0.2}>

          <div>


            <h3 className="
            text-2xl
            font-bold
            text-slate-900
            mb-8
            ">
              Quick Overview
            </h3>



            <div className="
            grid
            sm:grid-cols-2
            gap-6
            ">



              {[
                {
                  icon: <FaGraduationCap />,
                  title: "Education",
                  text: <>BSCS<br />SZABIST University</>
                },
                {
                  icon: <FaCode />,
                  title: "Development",
                  text: <>Web Applications<br />Full-Stack Projects</>
                },
                {
                  icon: <FaRocket />,
                  title: "Projects",
                  text: <>Building practical<br />software solutions</>
                },
                {
                  icon: <FaBrain />,
                  title: "Learning",
                  text: <>AI Tools<br />Modern Technologies</>
                },
              ].map((item) => (

                <div
                  key={item.title}
                  className="
                  p-6
                  rounded-2xl
                  bg-slate-50
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition
                  duration-300
                  "
                >

                  <div className="
                  text-blue-600
                  text-3xl
                  mb-4
                  ">
                    {item.icon}
                  </div>


                  <h4 className="
                  font-bold
                  text-lg
                  ">
                    {item.title}
                  </h4>


                  <p className="
                  text-slate-600
                  mt-2
                  ">
                    {item.text}
                  </p>


                </div>

              ))}


            </div>





            {/* Stats */}

            <div className="
            mt-10
            grid
            grid-cols-3
            gap-3
            sm:gap-4
            ">


              {[
                {
                  number:"9",
                  label:"Projects"
                },
                {
                  number:"12",
                  label:"Certifications"
                },
                {
                  number:"20+",
                  label:"Technologies"
                }
              ].map((stat)=>(

                <div
                  key={stat.label}
                  className="
                  text-center
                  p-4
                  sm:p-5
                  rounded-xl
                  bg-blue-50
                  "
                >

                  <h4 className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  text-blue-600
                  ">
                    {stat.number}
                  </h4>


                  <p className="
                  text-xs
                  sm:text-sm
                  text-slate-600
                  ">
                    {stat.label}
                  </p>


                </div>

              ))}


            </div>


          </div>

          </Reveal>


        </div>


      </div>

    </section>
  );
}