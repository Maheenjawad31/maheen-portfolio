
"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Reveal from "./Reveal";

const projects = [
  {
    title: "Nexa",
    badge: "In Progress",
    description:
      "Building a full-stack social networking application with authentication, user profiles, posts, comments, likes, friends and notifications. Designing a normalized PostgreSQL schema with Prisma ORM to support feeds, messaging and search; actively extending features and refining privacy/moderation controls.",
    image: "/projects/nexa/nexa1.png",
    technologies:
      "Next.js • React • TypeScript • Prisma • PostgreSQL",
    github:
      "https://github.com/Maheenjawad31/Nexa",
    live:
      "https://maheen-nexa.vercel.app/",
  },

  {
    title: "Smart Task Manager",
    description:
      "A responsive task management application with an AI-assisted planning workflow, task creation, editing, analytics, search, filtering, and Local Storage persistence.",
    image: "/projects/task-manager/task2.png",
    technologies:
      "Next.js • React • TypeScript • Tailwind CSS • AI SDK (OpenRouter)",
    github:
      "https://github.com/Maheenjawad31/smart-task-manager",
    live:
      "https://smart-task-manager-lovat-kappa.vercel.app/",
  },

  {
    title: "Musify - Music Streaming Web Application",
    badge: "University Group Project",
    description:
      "Contributed to a university group project to engineer a full-stack music streaming platform with a normalized MySQL database and a REST API backend. Helped implement song playback, playlist management, favorites tracking, search functionality and play history on an interactive, Spotify-inspired frontend.",
    image:
      "/projects/musify/musify1.png",
    technologies:
      "Node.js • Express.js • MySQL • JavaScript",
    github: "#",
    live: null,
  },

  {
    title: "Pulse Music Player",
    badge: "Independent Project",
    description:
      "Independently designed and built a music player with playback controls, playlist management, search and genre browsing, with persistent user preferences using localStorage.",
    image: "/projects/pulse/pulse1.png",
    technologies:
      "Next.js • React • TypeScript • Tailwind CSS • HTML5 Audio API",
    github:
      "https://github.com/Maheenjawad31/pulse-music-player",
    live:
      "https://pulse-music-player-xi.vercel.app/",
  },

  {
    title: "InternFlow Dashboard",
    description:
      "An internship management dashboard for tracking interns, groups and tasks, with search/filtering, task status and progress tracking, using localStorage for persistent data.",
    image: "/projects/internflow/internflow1.png",
    technologies:
      "HTML • CSS • JavaScript",
    github:
      "https://github.com/Maheenjawad31/internflow-dashboard",
    live:
      "https://internflow-dashboard.vercel.app/",
  },

  {
    title: "Personal Portfolio",
    description:
      "This portfolio website — designed and built to showcase my projects and skills with a modern, fully responsive interface.",
    image: "/projects/portfolio/portfolio1.png",
    technologies:
      "Next.js • React • TypeScript • Tailwind CSS",
    github:
      "https://github.com/Maheenjawad31/maheen-portfolio",
    live:
      "https://maheen-portfolio-three.vercel.app/",
  },

  {
    title: "Skeleton Loader",
    description:
      "A responsive skeleton-loading UI component demonstrating smooth loading-state patterns for web interfaces.",
    image: "/projects/skeleton/skeleton1.png",
    technologies:
      "HTML • CSS • JavaScript",
    github:
      "https://github.com/Maheenjawad31/skeleton-loader",
    live: null,
  },

  {
    title: "Playlist Management System",
    description:
      "A data structures project using linked lists and binary search trees, with multi-level sorting, search functionality and shuffle operations using optimized algorithms.",
    image: "/projects/playlist/playlist1.png",
    technologies:
      "C++ • Data Structures • Algorithms",
    github: "#",
    live: null,
  },

  {
    title: "Book Inventory Management System",
    description:
      "A console-based inventory system for adding, updating, removing and searching book records, implementing object-oriented programming, file handling, and exception handling.",
    image: "/projects/book-inventory/book1.png",
    technologies:
      "C++ • OOP • File Handling",
    github: "#",
    live: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 bg-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Heading */}
        <Reveal>
          <div className="text-center mb-14 md:mb-16">
            <p
              className="
                uppercase
                tracking-[5px]
                text-blue-600
                font-semibold
              "
            >
              Projects
            </p>

            <h2
              className="
                mt-4
                text-3xl
                md:text-5xl
                font-bold
                text-slate-900
              "
            >
              Featured Work
            </h2>
          </div>
        </Reveal>

        {/* Projects */}
        <div
          className="
            grid
            md:grid-cols-2
            gap-8
            md:gap-10
          "
        >
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 0.08}
            >
              <div
                className="
                  bg-slate-50
                  rounded-3xl
                  overflow-hidden
                  border
                  border-slate-100
                  shadow-sm
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition
                  duration-300
                "
              >

                {/* Image */}
                {project.image ? (
                  <div className="p-4 md:p-5">
                    <div
                      className="
                        relative
                        w-full
                        h-52
                        sm:h-64
                        md:h-72
                        rounded-2xl
                        overflow-hidden
                        bg-white
                        border
                      "
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain hover:scale-105 transition duration-500"
                      />
                    </div>
                  </div>
                ) : (
                  <div
                    className="
                      h-52
                      md:h-72
                      flex
                      items-center
                      justify-center
                      bg-slate-200
                      text-slate-500
                      font-medium
                    "
                  >
                    Project Preview
                  </div>
                )}

                {/* Content */}
                <div className="p-6 md:p-8">

                  {project.badge && (
                    <div
                      className="
                        inline-flex
                        px-3
                        py-1
                        rounded-full
                        bg-blue-50
                        text-blue-700
                        text-[10px]
                        sm:text-xs
                        font-semibold
                        mb-3
                      "
                    >
                      {project.badge}
                    </div>
                  )}

                  <h3
                    className="
                      text-xl
                      md:text-2xl
                      font-bold
                      text-slate-900
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-slate-600
                      leading-7
                      text-sm
                      md:text-base
                    "
                  >
                    {project.description}
                  </p>

                  <p
                    className="
                      mt-5
                      text-blue-600
                      font-medium
                      text-sm
                      md:text-base
                    "
                  >
                    {project.technologies}
                  </p>

                  <div
                    className="
                      flex
                      gap-5
                      mt-7
                      flex-wrap
                    "
                  >
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex
                          items-center
                          gap-2
                          text-slate-700
                          font-medium
                          hover:text-blue-600
                          hover:-translate-y-1
                          transition
                        "
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex
                          items-center
                          gap-2
                          text-slate-700
                          font-medium
                          hover:text-blue-600
                          hover:-translate-y-1
                          transition
                        "
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    )}
                  </div>

                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
