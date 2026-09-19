"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <div className="max-w-6xl mx-auto px-4 pt-5">

        <div className="
        flex items-center justify-between
        px-6 py-4
        rounded-2xl
        bg-slate-950/80
        backdrop-blur-xl
        border border-slate-700/60
        shadow-[0_0_30px_rgba(59,130,246,0.15)]
        ">

          {/* Logo */}
          <Link
            href="/"
            className="
            text-2xl
            font-bold
            text-white
            hover:scale-105
            transition
            "
          >
            Maheen<span className="text-blue-500">.</span>
          </Link>


          {/* Desktop */}
          <nav className="hidden md:flex gap-8">

            {links.map((link)=>(
              <a
                key={link.name}
                href={link.href}
                className="
                text-slate-300
                relative
                transition
                hover:text-blue-400

                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:w-0
                after:bg-blue-500
                after:transition-all

                hover:after:w-full
                "
              >
                {link.name}
              </a>
            ))}

          </nav>


          {/* Mobile Button */}
          <button
            onClick={()=>setOpen(!open)}
            className="
            md:hidden
            text-white
            text-3xl
            transition
            hover:text-blue-400
            "
          >
            {open ? "×" : "☰"}
          </button>

        </div>


        {/* Mobile Menu */}

        <div
          className={`
          md:hidden
          mt-3
          overflow-hidden
          transition-all
          duration-500

          ${
            open
            ?"max-h-[34rem] opacity-100"
            :"max-h-0 opacity-0"
          }
          `}
        >

          <nav
          className="
          rounded-2xl
          bg-slate-950/95
          backdrop-blur-xl
          border border-slate-700/60
          shadow-[0_0_30px_rgba(59,130,246,0.15)]
          p-4
          "
          >

          {links.map((link,index)=>(
            <a
              key={link.name}
              href={link.href}
              onClick={()=>setOpen(false)}
              className="
              block
              px-4
              py-3
              rounded-xl
              text-slate-300
              hover:text-white
              hover:bg-blue-500/10
              transition
              "
              style={{
                transitionDelay:`${index*50}ms`
              }}
            >
              {link.name}
            </a>
          ))}

          </nav>

        </div>


      </div>

    </header>
  );
}