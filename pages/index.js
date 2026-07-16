import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectCard from "@/components/projects-card";
import TechIcons from "@/components/tech-icons";
import ScrollTop from "@/components/scroll-top";
import CustomCursor from "@/components/custom-cursor";
import Navbar from "@/components/navbar";
import {
  FaLinkedinIn,
  FaInstagram,
  FaCss3Alt,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import {
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiSupabase,
  SiDocker,
  SiDrizzle,
  SiPrisma,
  SiNeon,
  SiShadcnui,
  SiBootstrap,
  SiVercel,
  SiFirebase,
} from "react-icons/si";
import { TbApi, TbBrain, TbBrandReactNative } from "react-icons/tb";
import { IoLogoFacebook, IoLogoJavascript } from "react-icons/io5";

const SectionLabel = ({ index, children }) => (
  <div className="flex items-center gap-3">
    <span className="eyebrow text-brand-400">{index}</span>
    <span className="h-px w-8 bg-brand-500/50" />
    <span className="eyebrow text-gray-500">{children}</span>
  </div>
);

const ICON = 22;

const techStack = [
  {
    group: "Frontend",
    items: [
      { name: "HTML5", icon: <FaHtml5 size={ICON} className="text-[#E44D26]" /> },
      { name: "CSS3", icon: <FaCss3Alt size={ICON} className="text-[#2965F1]" /> },
      { name: "JavaScript", icon: <IoLogoJavascript size={ICON} className="text-[#F7DF1E]" /> },
      { name: "TypeScript", icon: <SiTypescript size={ICON} className="text-[#3178C6]" /> },
      { name: "React", icon: <FaReact size={ICON} className="text-[#61DAFB] animate-spin-slow" /> },
      { name: "React Native", icon: <TbBrandReactNative size={ICON} className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs size={ICON} className="text-white" /> },
      { name: "Tailwind", icon: <SiTailwindcss size={ICON} className="text-[#38BDF8]" /> },
      { name: "Bootstrap", icon: <SiBootstrap size={ICON} className="text-[#7952B3]" /> },
      { name: "shadcn/ui", icon: <SiShadcnui size={ICON} className="text-white" /> },
      { name: "Redux", icon: <SiRedux size={ICON} className="text-[#764ABC]" /> },
      { name: "Redux Toolkit", icon: <SiRedux size={ICON} className="text-[#764ABC]" /> },
    ],
  },
  {
    group: "API & Data",
    items: [
      { name: "REST API", icon: <TbApi size={ICON} className="text-[#a78bfa]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={ICON} className="text-[#4169E1]" /> },
      { name: "Drizzle", icon: <SiDrizzle size={ICON} className="text-[#C5F74F]" /> },
      { name: "Prisma", icon: <SiPrisma size={ICON} className="text-white" /> },
      { name: "Neon", icon: <SiNeon size={ICON} className="text-[#00E599]" /> },
      { name: "Supabase", icon: <SiSupabase size={ICON} className="text-[#3ECF8E]" /> },
      { name: "Firebase", icon: <SiFirebase size={ICON} className="text-[#FFCA28]" /> },
    ],
  },
  {
    group: "Tools & Platforms",
    items: [
      { name: "GitHub", icon: <FaGithub size={ICON} className="text-white" /> },
      { name: "Docker", icon: <SiDocker size={ICON} className="text-[#2496ED]" /> },
      { name: "Vercel", icon: <SiVercel size={ICON} className="text-white" /> },
      { name: "Figma", icon: <FaFigma size={ICON} className="text-[#F24E1E]" /> },
      { name: "AI", icon: <TbBrain size={ICON} className="text-[#f472b6]" /> },
    ],
  },
];

const techCount = techStack.reduce((n, g) => n + g.items.length, 0);

const stats = [
  { value: "3+", label: "Live projects" },
  { value: `${techCount}+`, label: "Technologies" },
  { value: "Frontend", label: "React & Next.js" },
];

const projects = [
  { img: "/sscc.png", name: "Xeno EV Landing Page", url: "https://xenoev.com/", tag: "Landing Page" },
  { img: "/jantrik.png", name: "Zantrik Certified Car Service", url: "https://certify.zantrik.com/", tag: "Web App" },
  { img: "/xnoev.png", name: "Zantrik Service Order Form", url: "https://order.zantrik.com/", tag: "Web App" },
];

const socials = [
  { icon: <FaGithub size={20} />, url: "https://github.com/Fagunmridha", label: "GitHub" },
  { icon: <IoLogoFacebook size={20} />, url: "https://www.facebook.com/profile.php?id=100078731898525", label: "Facebook" },
  { icon: <FaLinkedinIn size={20} />, url: "https://www.linkedin.com/in/fagun-mridha/", label: "LinkedIn" },
  { icon: <FaInstagram size={20} />, url: "https://www.instagram.com/fagun_vi/", label: "Instagram" },
];

export default function Home() {
  return (
    <div id="top" className="relative min-h-screen bg-ink-900 text-gray-200 overflow-x-hidden">
      <CustomCursor />
      <Navbar />

      {/* Ambient background glows */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/4 h-[420px] w-[420px] rounded-full bg-brand-600/20 blur-[130px] animate-pulse-slow" />
        <div className="absolute top-1/3 -right-40 h-[380px] w-[380px] rounded-full bg-indigo-600/20 blur-[130px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-fuchsia-600/10 blur-[130px] animate-pulse-slow" style={{ animationDelay: "4s" }} />
      </div>

      <main className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* ============ HERO ============ */}
        <section className="relative flex min-h-screen flex-col justify-center pt-24">
          <div className="absolute inset-x-0 top-0 -z-10 h-full grid-bg" />

          <div className="animate-fadeIn max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full surface px-4 py-1.5 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-gray-300">Available for freelance & full-time</span>
            </div>

            <p className="eyebrow mb-4 text-brand-400 animate-slideIn">Frontend Developer (React &amp; Next.js) — Bangladesh</p>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl md:text-[5.5rem] animate-slideIn" style={{ animationDelay: "0.1s" }}>
              Fagun <span className="gradient-text">Mridha</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl animate-slideIn" style={{ animationDelay: "0.25s" }}>
              I build fast, accessible interfaces with{" "}
              <span className="text-gray-200">React</span> &{" "}
              <span className="text-gray-200">Next.js</span> — then bring them to
              life by integrating <span className="text-gray-200">REST APIs</span>{" "}
              and handling <span className="text-gray-200">data flow</span> across
              the app, so what ships feels effortless and stays reliable.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4 animate-slideIn" style={{ animationDelay: "0.4s" }}>
              <Link href="#work" className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 font-medium text-white shadow-glow transition-all hover:bg-brand-600 hover:shadow-glow-lg">
                View my work
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="#contact" className="inline-flex items-center gap-2 rounded-full surface surface-hover px-6 py-3 font-medium text-white">
                Get in touch
              </Link>
            </div>

            <div className="mt-14 flex flex-wrap gap-x-12 gap-y-6 border-t border-white/10 pt-8 animate-fadeIn" style={{ animationDelay: "0.55s" }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-bold text-white">{s.value}</p>
                  <p className="eyebrow mt-1 text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ ABOUT ============ */}
        <section id="about" className="scroll-mt-28 py-24">
          <SectionLabel index="01">About me</SectionLabel>
          <h2 className="mt-5 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Designing & building for the web
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-[minmax(0,400px)_1fr] md:gap-14">
            <div className="group relative">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-brand-500/40 to-indigo-500/30 opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-70" />
              <Image
                src="/fagun.jpeg"
                alt="Fagun Mridha — Frontend Developer"
                height={520}
                width={430}
                className="relative aspect-[4/5] w-full rounded-2xl border border-white/10 object-cover object-center shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>

            <div className="space-y-5 text-lg leading-relaxed text-gray-400">
              <p>
                Hi, I&apos;m <span className="text-white">Fagun Mridha</span> — a
                self-taught Frontend Developer from Bangladesh passionate about
                building modern, responsive, and user-focused digital products.
              </p>
              <p>
                I build web and mobile applications using{" "}
                <span className="text-white">
                  TypeScript, React, Next.js, and React Native (Expo)
                </span>
                , focusing on clean, maintainable code and seamless user
                experiences. I&apos;m experienced in integrating{" "}
                <span className="text-white">REST APIs</span>, managing
                application state, and working with{" "}
                <span className="text-white">
                  PostgreSQL, Drizzle ORM, Prisma, Neon, Supabase, and Firebase
                </span>{" "}
                to develop scalable, data-driven applications.
              </p>
              <p>
                I also leverage modern{" "}
                <span className="text-white">AI models and APIs</span>, including{" "}
                <span className="text-white">OpenAI, Gemini, and Claude</span>, to
                integrate intelligent features such as AI chatbots, content
                generation, workflow automation, smart search, and AI-powered
                assistants. By combining frontend development, backend
                integrations, and AI capabilities, I build modern digital products
                — including SaaS platforms, dashboards, e-commerce applications,
                and business solutions.
              </p>
              <p>
                I&apos;m passionate about solving real-world problems with
                technology and continuously improving my skills to build products
                that are fast, reliable, and impactful.
              </p>
              <div className="pt-3">
                <Link
                  href="/resume"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-ink-900 transition-all hover:-translate-y-0.5 hover:shadow-glow"
                >
                  View Resume
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============ WORK ============ */}
        <section id="work" className="scroll-mt-28 py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionLabel index="02">Selected work</SectionLabel>
              <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Recent projects
              </h2>
            </div>
            <p className="max-w-xs text-gray-500">
              A few things I&apos;ve built and shipped to production.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <div key={p.url} className="animate-scaleIn hover-lift-2" style={{ animationDelay: `${0.1 * i}s` }}>
                <ProjectCard {...p} />
              </div>
            ))}
          </div>
        </section>

        {/* ============ STACK ============ */}
        <section id="stack" className="scroll-mt-28 py-24">
          <SectionLabel index="03">Toolbox</SectionLabel>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Tools &amp; technologies
          </h2>

          <div className="mt-12 space-y-10">
            {techStack.map((g, gi) => (
              <div key={g.group}>
                <div className="flex items-center gap-4">
                  <p className="eyebrow shrink-0 text-gray-500">{g.group}</p>
                  <span className="h-px flex-1 bg-white/10" />
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  {g.items.map((t, i) => (
                    <div
                      key={t.name}
                      className="animate-scaleIn"
                      style={{ animationDelay: `${0.15 * gi + 0.04 * i}s` }}
                    >
                      <TechIcons name={t.name}>{t.icon}</TechIcons>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section id="contact" className="scroll-mt-28 py-24">
          <div className="relative overflow-hidden rounded-3xl surface px-6 py-16 text-center sm:px-12">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-500/25 blur-[100px]" />
            <div className="relative">
              <SectionLabel index="04">
                <span className="mx-auto flex justify-center">Contact</span>
              </SectionLabel>
              <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Let&apos;s work together
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-gray-400">
                Have a project in mind or just want to say hi? My inbox is always
                open.
              </p>

              <div className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row sm:justify-center">
                <a href="mailto:fagunandy@gmail.com" className="group flex-1 rounded-2xl surface surface-hover p-5 text-left">
                  <p className="eyebrow text-gray-500">Email</p>
                  <p className="mt-1 font-medium text-white group-hover:text-brand-400">fagunandy@gmail.com</p>
                </a>
                <a href="tel:+8801401381242" className="group flex-1 rounded-2xl surface surface-hover p-5 text-left">
                  <p className="eyebrow text-gray-500">Phone</p>
                  <p className="mt-1 font-medium text-white group-hover:text-brand-400">+880 1401-381242</p>
                </a>
              </div>

              <div className="mt-10 flex justify-center gap-3">
                {socials.map((s) => (
                  <Link key={s.label} href={s.url} target="_blank" aria-label={s.label} className="flex h-11 w-11 items-center justify-center rounded-full surface text-gray-300 transition-all hover:-translate-y-1 hover:border-brand-500/50 hover:text-brand-400">
                    {s.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ FOOTER ============ */}
        <footer className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-10 sm:flex-row">
          <p className="font-mono text-sm text-gray-500">
            © {new Date().getFullYear()} Fagun Mridha
          </p>
          <ScrollTop />
        </footer>
      </main>
    </div>
  );
}
