"use client";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";


export default function Footer() {

  return (

    <footer className="bg-slate-900 text-slate-300 py-8">


      <div className="
      max-w-7xl
      mx-auto
      px-5
      md:px-8
      flex
      flex-col
      md:flex-row
      justify-between
      items-center
      gap-5
      ">


        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Maheen Jawad. All rights reserved.
        </p>




        <div className="
        flex
        gap-5
        text-xl
        ">


          <a
            href="https://github.com/Maheenjawad31"
            target="_blank"
            className="
            hover:text-white
            transition
            "
          >
            <FaGithub />
          </a>




          <a
            href="https://linkedin.com/in/maheenjawad31"
            target="_blank"
            className="
            hover:text-white
            transition
            "
          >
            <FaLinkedin />
          </a>




          <a
            href="mailto:maheenjawad3110@gmail.com"
            className="
            hover:text-white
            transition
            "
          >
            <FaEnvelope />
          </a>



        </div>


      </div>


    </footer>

  );
}