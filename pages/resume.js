import Head from "next/head";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";

/* ---------- Data ---------- */
const contact = [
  { icon: <FaMapMarkerAlt />, text: "Faridpur, Bangladesh" },
  { icon: <FaPhoneAlt />, text: "+880 1401-381242", href: "tel:+8801401381242" },
  { icon: <FaEnvelope />, text: "fagunandy@gmail.com", href: "mailto:fagunandy@gmail.com" },
  { icon: <FaGlobe />, text: "fagun-mridha.vercel.app", href: "https://fagun-mridha.vercel.app/" },
  { icon: <FaGithub />, text: "github.com/Fagunmridha", href: "https://github.com/Fagunmridha" },
  { icon: <FaLinkedinIn />, text: "linkedin.com/in/fagun-mridha", href: "https://www.linkedin.com/in/fagun-mridha/" },
];

const experience = [
  {
    role: "Freelance Frontend Developer",
    org: "Self-employed · Faridpur, Bangladesh",
    date: "June 2024 – Present",
    points: [
      "Built and shipped production frontends for clients, including Xeno EV's product landing page and Zantrik's car-service platform.",
      "Developed responsive, accessible interfaces with React, Next.js and Tailwind CSS, integrating REST APIs and managing client-side state.",
      "Worked directly with clients from requirements through to deployment on Vercel.",
    ],
  },
  {
    role: "Frontend Developer — Intern",
    org: "Qubiqe Technologies",
    date: "February 2024 – May 2024",
    points: [
      "Collaborated with a multifunctional team to develop user-friendly features for their SaaS products.",
      "Built websites with impressive styling and responsiveness for local clients.",
      "Integrated REST APIs into React interfaces, managing client-side state and data flow.",
    ],
  },
];

const education = [
  { degree: "Web Development Bootcamp (1-year intensive)", school: "Webclan", year: "2023" },
  { degree: "Masters of Social Science on Social Work", school: "Rajendra College, Faridpur", year: "2021" },
  { degree: "Bachelor of Social Science on Social Work", school: "Rajendra College, Faridpur", year: "2020" },
];

const skills = [
  { label: "Languages", items: "JavaScript, TypeScript, HTML5, CSS3" },
  { label: "Frontend", items: "React, Next.js, React Native (Expo), Tailwind CSS, Bootstrap, shadcn/ui" },
  { label: "State Management", items: "Redux, Redux Toolkit" },
  { label: "API & Data Integration", items: "REST API, Next.js API Routes, PostgreSQL, Drizzle ORM, Prisma, Neon, Supabase, Firebase" },
  { label: "Tools & Platforms", items: "Git & GitHub, Docker, Vercel, Figma, AI Integration" },
];

const projects = [
  { name: "Xeno EV Landing Page", url: "https://xenoev.com/" },
  { name: "Zantrik Certified Car Service", url: "https://certify.zantrik.com/" },
  { name: "Zantrik Service Order Form", url: "https://order.zantrik.com/" },
];

/* ---------- UI helpers ---------- */
const SectionTitle = ({ children }) => (
  <h2 className="mb-3 border-b-2 border-violet-500/70 pb-1 text-[13px] font-bold uppercase tracking-[0.15em] text-violet-700">
    {children}
  </h2>
);

export default function Resume() {
  return (
    <>
      <Head>
        <title>Md. Rakibul Abedin (Fagun Mridha) — Resume</title>
      </Head>

      <div className="resume-page min-h-screen bg-neutral-200 py-8 text-gray-800 print:bg-white print:py-0">
        {/* Toolbar (hidden in print) */}
        <div className="print-hide mx-auto mb-6 flex max-w-[820px] items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-violet-700">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to portfolio
          </Link>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-violet-700"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF
          </button>
        </div>

        {/* A4 sheet */}
        <article className="resume-sheet mx-auto max-w-[820px] bg-white px-10 py-10 shadow-xl print:shadow-none sm:px-12">
          {/* Header */}
          <header className="border-b border-gray-200 pb-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
              Md. Rakibul Abedin{" "}
              <span className="text-2xl font-semibold text-gray-500">
                (Fagun Mridha)
              </span>
            </h1>
            <p className="mt-1 text-lg font-semibold text-violet-700">
              Frontend Developer (React &amp; Next.js)
            </p>

            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-1.5 text-sm text-gray-600 sm:grid-cols-2">
              {contact.map((c, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-violet-600">{c.icon}</span>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noreferrer" className="hover:text-violet-700">
                      {c.text}
                    </a>
                  ) : (
                    <span>{c.text}</span>
                  )}
                </div>
              ))}
            </div>
          </header>

          {/* Summary */}
          <section className="py-6">
            <p className="text-[15px] leading-relaxed text-gray-700">
              Self-taught Frontend Developer from Bangladesh who builds fast,
              accessible and visually refined applications with TypeScript, React
              &amp; Next.js. Comfortable across the integration layer — consuming
              REST APIs, integrating AI models and APIs, and working with
              PostgreSQL-backed services like Drizzle, Prisma, Neon and Supabase
              to ship production-ready products.
            </p>
          </section>

          {/* Two columns */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.55fr_1fr]">
            {/* Left / main */}
            <div className="space-y-7">
              <section>
                <SectionTitle>Experience</SectionTitle>
                <div className="space-y-5">
                  {experience.map((e) => (
                    <div key={e.org}>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                        <h3 className="text-[15px] font-bold text-gray-900">{e.role}</h3>
                        <span className="font-mono text-xs text-gray-500">{e.date}</span>
                      </div>
                      <p className="text-sm font-semibold text-violet-700">{e.org}</p>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-[13.5px] leading-relaxed text-gray-700 marker:text-violet-400">
                        {e.points.map((p, i) => (
                          <li key={i}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <SectionTitle>Education</SectionTitle>
                <div className="space-y-3.5">
                  {education.map((ed) => (
                    <div key={ed.degree} className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <div>
                        <h3 className="text-[14px] font-bold text-gray-900">{ed.degree}</h3>
                        <p className="text-[13px] text-gray-600">{ed.school}</p>
                      </div>
                      <span className="font-mono text-xs text-gray-500">{ed.year}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right / sidebar */}
            <div className="space-y-7">
              <section>
                <SectionTitle>Skills</SectionTitle>
                <div className="space-y-3">
                  {skills.map((s) => (
                    <div key={s.label}>
                      <p className="text-[13px] font-bold text-gray-900">{s.label}</p>
                      <p className="text-[13px] leading-relaxed text-gray-600">{s.items}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <SectionTitle>Projects</SectionTitle>
                <ul className="space-y-2.5">
                  {projects.map((p) => (
                    <li key={p.url}>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[13.5px] font-semibold text-violet-700 hover:underline"
                      >
                        {p.name}
                      </a>
                      <p className="font-mono text-[11px] text-gray-400">
                        {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <SectionTitle>Languages</SectionTitle>
                <p className="text-[13.5px] text-gray-700">
                  Bangla (Native), English (Professional working proficiency)
                </p>
              </section>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
