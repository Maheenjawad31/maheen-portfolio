"use client";

import { FaCertificate } from "react-icons/fa";
import Reveal from "./Reveal";


const certificates = [
  {
    title: "Front-End AI Engineering Internship",
    org: "FlyRank AI",
    date: "Aug 2026",
  },
  {
    title: "Web Development Internship",
    org: "Arch Technologies",
    date: "Aug 2026",
  },
  {
    title: "Python: Zero to Hero (Intermediate)",
    org: "Udemy",
    date: "Aug 2026",
  },
  {
    title: "Building with the Claude API",
    org: "Anthropic",
    date: "Aug 2026",
  },
  {
    title: "Claude 101",
    org: "Anthropic",
    date: "Aug 2026",
  },
  {
    title: "Claude Code 101",
    org: "Anthropic",
    date: "Aug 2026",
  },
  {
    title: "Leonardo AI Bootcamp: Visual Storytelling with AI",
    org: "Udemy",
    date: "Jul 2026",
  },
  {
    title: "AI Fluency: Framework & Foundations",
    org: "Anthropic",
    date: "Jul 2026",
  },
  {
    title: "Cursor AI for Beginners: AI Coding Crash Course",
    org: "Udemy",
    date: "Jul 2026",
  },
  {
    title: "Master Canva AI & Magic Studio",
    org: "Udemy",
    date: "Jul 2026",
  },
  {
    title: "Complete UI/UX Design with Canva",
    org: "Udemy",
    date: "Jul 2026",
  },
  {
    title: "Cybersecurity",
    org: "ADBI Institute",
    date: "Jul 2026",
  },
];


export default function Certificates() {

  return (

    <section
      id="certifications"
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
              Certifications
            </p>


            <h2 className="
            mt-4
            text-3xl
            md:text-5xl
            font-bold
            text-slate-900
            ">
              Courses & Credentials
            </h2>


            <p className="
            mt-6
            max-w-2xl
            mx-auto
            text-slate-600
            text-base
            md:text-lg
            ">
              Certifications from internships and self-paced learning in
              software development and AI-assisted tooling.
            </p>


          </div>

        </Reveal>



        {/* Certificate Cards */}

        <div className="
        grid
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
        md:gap-8
        ">


          {certificates.map((cert, index) => (

            <Reveal
              key={cert.title}
              delay={(index % 3) * 0.08}
            >

              <div
                className="
                bg-white
                rounded-3xl
                p-6
                md:p-7
                shadow-sm
                border
                border-slate-100
                hover:shadow-xl
                hover:-translate-y-1
                transition
                duration-300
                h-full
                flex
                flex-col
                gap-4
                "
              >


                <div className="
                w-12
                h-12
                rounded-2xl
                bg-blue-100
                text-blue-600
                flex
                items-center
                justify-center
                text-xl
                shrink-0
                ">
                  <FaCertificate />
                </div>



                <div>

                  <h3 className="
                  font-bold
                  text-lg
                  text-slate-900
                  leading-snug
                  ">
                    {cert.title}
                  </h3>


                  <p className="
                  mt-2
                  text-sm
                  text-slate-600
                  ">
                    {cert.org} — {cert.date}
                  </p>

                </div>


              </div>

            </Reveal>

          ))}


        </div>


      </div>

    </section>

  );

}
