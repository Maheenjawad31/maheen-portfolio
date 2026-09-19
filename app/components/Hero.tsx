"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Hero() {
  return (

    <section
      id="home"
      className="
      min-h-screen
      flex
      items-center
      bg-white
      pt-28
      pb-8
      overflow-hidden
      "
    >


      <div className="
      max-w-7xl
      mx-auto
      px-5
      sm:px-8
      w-full
      ">


        <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-10
        md:gap-4
        lg:gap-16
        items-center
        ">



          {/* LEFT TEXT */}


          <div className="text-left">


            <div className="
            inline-flex
            px-3
            py-2
            sm:px-4
            sm:py-2
            rounded-full
            bg-blue-50
            text-blue-700
            text-[10px]
            sm:text-sm
            font-semibold
            mb-5
            ">
              BSCS STUDENT • FULL-STACK DEVELOPER
            </div>




            <h1 className="
            text-4xl
            sm:text-5xl
            md:text-7xl
            font-extrabold
            text-slate-900
            leading-tight
            ">
              Maheen Jawad
            </h1>




            <h2 className="
            mt-4
            text-lg
            sm:text-xl
            md:text-3xl
            font-semibold
            text-blue-600
            ">
              Front-End & Full-Stack Developer
            </h2>




            <p className="
            mt-4
            text-sm
            sm:text-base
            md:text-lg
            leading-6
            sm:leading-8
            text-slate-600
            ">
              Front-end and full-stack developer with internship
              experience, building modern, AI-assisted web applications
              with React, Next.js, TypeScript, Node.js, and SQL.
            </p>




            <div className="
            mt-6
            flex
            gap-3
            flex-wrap
            ">


              <a
                href="#projects"
                className="
                px-4
                py-2
                sm:px-6
                sm:py-3
                rounded-xl
                bg-blue-600
                text-white
                text-sm
                sm:text-base
                font-semibold
                hover:bg-blue-700
                transition
                "
              >
                Projects
              </a>




              <a
                href="#contact"
                className="
                px-4
                py-2
                sm:px-6
                sm:py-3
                rounded-xl
                border
                border-slate-300
                text-slate-700
                text-sm
                sm:text-base
                font-semibold
                hover:border-blue-600
                hover:text-blue-600
                transition
                "
              >
                Contact
              </a>


            </div>





            <div className="
            flex
            gap-5
            mt-6
            ">


              <a
                href="https://github.com/Maheenjawad31"
                target="_blank"
                className="
                text-2xl
                sm:text-3xl
                text-slate-500
                hover:text-blue-600
                transition
                "
              >
                <FaGithub />
              </a>




              <a
                href="https://linkedin.com/in/maheenjawad31"
                target="_blank"
                className="
                text-2xl
                sm:text-3xl
                text-slate-500
                hover:text-blue-600
                transition
                "
              >
                <FaLinkedin />
              </a>


            </div>


          </div>





          {/* RIGHT IMAGE */}


          <div className="
          flex
          justify-center
          ">



            <div className="
            relative
            animate-float
            ">


              <div className="
              absolute
              inset-0
              rounded-full
              bg-blue-300
              blur-3xl
              opacity-30
              "></div>




              <div className="
              relative
              w-[210px]
              h-[210px]
              sm:w-[260px]
              sm:h-[260px]
              md:w-[320px]
              md:h-[320px]
              lg:w-[420px]
              lg:h-[420px]
              rounded-full
              overflow-hidden
              border-8
              border-white
              shadow-[0_25px_60px_rgba(37,99,235,0.25)]
              ">


                <Image
                  src="/profile.jpg"
                  alt="Maheen Jawad"
                  fill
                  className="object-cover"
                  priority
                />


              </div>



            </div>


          </div>



        </div>


      </div>


    </section>

  );
}