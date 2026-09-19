"use client";

import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import Reveal from "./Reveal";


const contactItems = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    text: "maheenjawad3110@gmail.com",
    link: "mailto:maheenjawad3110@gmail.com",
  },

  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    text: "Connect with me",
    link: "https://linkedin.com/in/maheenjawad31",
  },

  {
    icon: <FaGithub />,
    title: "GitHub",
    text: "View my projects",
    link: "https://github.com/Maheenjawad31",
  },
];


export default function Contact() {

  return (

    <section
      id="contact"
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
              Contact
            </p>


            <h2 className="
            mt-4
            text-3xl
            md:text-5xl
            font-bold
            text-slate-900
            ">
              Let's Connect
            </h2>


            <p className="
            mt-5
            text-base
            md:text-lg
            text-slate-600
            max-w-2xl
            mx-auto
            leading-7
            ">
              I'm always interested in learning, collaborating, and
              exploring new opportunities in software development.
            </p>


          </div>

        </Reveal>





        {/* Contact Cards */}

        <div className="
        grid
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
        max-w-5xl
        mx-auto
        ">


          {contactItems.map((item,index)=>(

            <Reveal
              key={item.title}
              delay={index * 0.08}
            >

              <a
                href={item.link}
                target={
                  item.link.startsWith("http")
                  ? "_blank"
                  : undefined
                }
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
                flex
                flex-col
                items-center
                text-center
                gap-4
                h-full
                "
              >


                <div className="
                w-14
                h-14
                rounded-2xl
                bg-blue-100
                text-blue-600
                flex
                items-center
                justify-center
                text-2xl
                ">
                  {item.icon}
                </div>




                <div>

                  <h3 className="
                  font-bold
                  text-xl
                  text-slate-900
                  ">
                    {item.title}
                  </h3>


                  <p className="
                  mt-2
                  text-slate-600
                  text-sm
                  md:text-base
                  break-all
                  ">
                    {item.text}
                  </p>


                </div>


              </a>


            </Reveal>

          ))}


        </div>


      </div>


    </section>

  );
}