import Image from "next/image";
import ProjectCard from "@/components/projects-card";
import TechIcons from "@/components/tech-icons";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaCss3Alt,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import {
  IoLogoFacebook,
  IoLogoFirebase,
  IoLogoJavascript,
} from "react-icons/io5";
import ScrollTop from "@/components/scroll-top";
import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";
import React from "react";
import CustomCursor from "@/components/custom-cursor";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`bg-gradient-to-br from-rose-50 to-indigo-50 min-h-screen ${jetBrainsMono.className}`}
    >
      <CustomCursor />
      <main className="max-w-6xl mx-auto p-4 pt-20">
        <section className="h-[80vh] flex flex-col justify-center relative overflow-hidden">
          <div className="animate-fadeIn">
            <div className="max-w-[800px] relative z-10">
              <div className="space-y-4">
                <h2 className="text-3xl text-violet-600 font-medium tracking-wide animate-slideIn">
                  Hey! This is
                </h2>
                <div className="space-y-2">
                  <h1
                    className="text-7xl md:text-8xl text-indigo-700 font-bold hover:text-violet-600 transition-colors duration-300 animate-slideIn"
                    style={{ animationDelay: "0.2s" }}
                  >
                    Fagun
                  </h1>
                  <h1
                    className="text-7xl md:text-8xl text-indigo-700 font-bold hover:text-violet-600 transition-colors duration-300 animate-slideIn"
                    style={{ animationDelay: "0.4s" }}
                  >
                    Mridha
                  </h1>
                </div>
                <h3
                  className="text-2xl md:text-3xl text-gray-700 font-medium leading-relaxed animate-slideIn"
                  style={{ animationDelay: "0.6s" }}
                >
                  A self-taught
                  <span className="text-violet-500 font-semibold">
                    {" "}
                    Frontend Developer{" "}
                  </span>
                  from Bangladesh.
                </h3>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-violet-50 opacity-50 transform -skew-x-12 -z-0" />
        </section>

        <section className="py-16 bg-white/80 backdrop-blur-sm rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300">
          <div className="md:space-y-5 space-y-2 px-6">
            <p className="text-xl font-light text-violet-500 animate-slideIn">
              About me __
            </p>
            <h6
              className="text-4xl font-bold animate-slideIn"
              style={{ animationDelay: "0.2s" }}
            >
              Who I am 😎
            </h6>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-6 py-6 md:py-10 gap-10 px-6">
            <div className="relative group animate-scaleIn">
              <Image
                src="/fagun-mridha.jpg"
                alt="pictures"
                height={380}
                width={400}
                className="rounded-2xl shadow-lg transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-violet-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
            <div className="max-w-[600px] space-y-6">
              <p className="text-xl md:text-2xl font-normal text-gray-700 leading-relaxed">
                Hi! I&apos;m Fagun Mridha, a self-taught frontend developer
                skilled in HTML, CSS, JavaScript, and modern frameworks like
                React and Next.js.
              </p>
              <p className="text-xl md:text-2xl font-normal text-gray-700 leading-relaxed">
                I enjoy turning complex problems into simple, beautiful, and
                intuitive designs. I enjoy crafting visually appealing and
                user-friendly web applications.
              </p>
              <p className="text-xl md:text-2xl font-normal text-gray-700 leading-relaxed">
                Currently, I define myself as a beginner but, I believe in
                continuous learning and always looking for opportunities to grow
                my skills and knowledge. Let&apos;s connect and create something
                amazing together!
              </p>
              <div className="pt-4">
                <Link
                  href="https://drive.google.com/file/d/1F3mxkInqIaUBDqecLYoYmqVbR0JVgcWa/view?usp=sharing"
                  target="blank"
                  className="bg-violet-500 py-3 px-6 rounded-full text-lg font-semibold text-white shadow-lg hover:bg-violet-600 hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 hover:-translate-y-1"
                >
                  <span>Download CV</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 animate-bounce"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-100/30 via-rose-100/20 to-indigo-100/30 rounded-3xl animate-pulse-slow" />
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-200/30 rounded-full blur-3xl animate-float-slow" />
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl animate-float-slow"
            style={{ animationDelay: "2s" }}
          />

          <div className="relative">
            <div className="md:space-y-5 space-y-2">
              <p className="text-xl font-light text-violet-500 animate-slideIn gradient-text">
                Projects __
              </p>
              <h6
                className="text-4xl font-bold animate-slideIn"
                style={{ animationDelay: "0.2s" }}
              >
                Some of my recent works 📂
              </h6>
            </div>

            <div className="py-10">
              <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                <div
                  className="animate-scaleIn hover-lift-2"
                  style={{ animationDelay: "0.1s" }}
                >
                  <ProjectCard
                    img="/sscc.png"
                    name="Xeno EV Landing Page"
                    url="https://xenoev.com/"
                  />
                </div>
                <div
                  className="animate-scaleIn hover-lift-2"
                  style={{ animationDelay: "0.3s" }}
                >
                  <ProjectCard
                    img="/womany.png"
                    name="Wowmoney Landing Page"
                    url="https://wowmoney.me/"
                  />
                </div>
                <div
                  className="animate-scaleIn hover-lift-2"
                  style={{ animationDelay: "0.5s" }}
                >
                  <ProjectCard
                    img="/xnoev.png"
                    name="Zantrik's Service Order Form"
                    url="https://order.zantrik.com/"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/80 backdrop-blur-sm rounded-3xl shadow-sm">
          <div className="md:space-y-5 space-y-2 px-6">
            <p className="text-xl font-light text-violet-500 animate-slideIn">
              Tech stack __
            </p>
            <h6
              className="text-4xl font-bold animate-slideIn"
              style={{ animationDelay: "0.2s" }}
            >
              Tools & Technologies 👨‍💻
            </h6>
          </div>

          <div className="relative py-12 px-6">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-100/50 to-indigo-100/50 rounded-3xl"></div>

            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6">
              <div
                className="hover-scale animate-scaleIn"
                style={{ animationDelay: "0.1s" }}
              >
                <TechIcons name="HTML5">
                  <FaHtml5
                    size={56}
                    className="text-[#E44D26] transition-all duration-300 animate-float"
                  />
                </TechIcons>
              </div>

              <div
                className="hover-scale animate-scaleIn"
                style={{ animationDelay: "0.2s" }}
              >
                <TechIcons name="CSS3">
                  <FaCss3Alt
                    size={56}
                    className="text-[#2965F1] transition-all duration-300 animate-float"
                    style={{ animationDelay: "0.5s" }}
                  />
                </TechIcons>
              </div>

              <div
                className="hover-scale animate-scaleIn"
                style={{ animationDelay: "0.3s" }}
              >
                <TechIcons name="JavaScript">
                  <IoLogoJavascript
                    size={56}
                    className="text-[#F7DF1E] transition-all duration-300 animate-float"
                    style={{ animationDelay: "1s" }}
                  />
                </TechIcons>
              </div>

              <div
                className="hover-scale animate-scaleIn"
                style={{ animationDelay: "0.4s" }}
              >
                <TechIcons name="React">
                  <FaReact
                    size={56}
                    className="text-[#61DAFB] transition-all duration-300 animate-float animate-spin-slow"
                  />
                </TechIcons>
              </div>

              <div
                className="hover-scale animate-scaleIn"
                style={{ animationDelay: "0.5s" }}
              >
                <TechIcons name="Firebase">
                  <IoLogoFirebase
                    size={56}
                    className="text-[#FFCA28] transition-all duration-300 animate-float"
                    style={{ animationDelay: "1.5s" }}
                  />
                </TechIcons>
              </div>

              <div
                className="hover-scale animate-scaleIn"
                style={{ animationDelay: "0.6s" }}
              >
                <TechIcons name="GitHub">
                  <FaGithub
                    size={56}
                    className="text-[#181717] transition-all duration-300 animate-float"
                    style={{ animationDelay: "2s" }}
                  />
                </TechIcons>
              </div>

              <div
                className="hover-scale animate-scaleIn"
                style={{ animationDelay: "0.7s" }}
              >
                <TechIcons name="Figma">
                  <FaFigma
                    size={56}
                    className="text-[#F24E1E] transition-all duration-300 animate-float"
                    style={{ animationDelay: "2.5s" }}
                  />
                </TechIcons>
              </div>

              <div
                className="hover-scale animate-scaleIn"
                style={{ animationDelay: "0.8s" }}
              >
                <TechIcons name="Redux">
                  <SiRedux
                    size={56}
                    className="text-[#764ABC] transition-all duration-300 animate-float"
                    style={{ animationDelay: "3s" }}
                  />
                </TechIcons>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="md:space-y-5 space-y-2">
            <p className="text-xl font-light text-violet-500 animate-slideIn">
              Contacts __
            </p>
            <h6
              className="text-4xl font-bold animate-slideIn"
              style={{ animationDelay: "0.2s" }}
            >
              Get in touch 📲💻
            </h6>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl mt-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="max-w-[880px] flex flex-col md:flex-row p-10 justify-between mx-auto space-y-7 md:space-y-0">
              <div className="group">
                <p className="text-gray-500 mb-2">Email 📬</p>
                <p className="text-lg font-medium group-hover:text-violet-500 transition-colors duration-300">
                  fagunandy@gmail.com
                </p>
              </div>

              <div className="group">
                <p className="text-gray-500 mb-2">Phone 📱</p>
                <p className="text-lg font-medium group-hover:text-violet-500 transition-colors duration-300">
                  +880 1401-381242
                </p>
              </div>
            </div>
          </div>

          <div className="py-10 flex justify-center">
            <div className="flex justify-between space-x-8">
              <Link href="https://github.com/Fagunmridha" target="blank">
                <FaGithub
                  size={40}
                  className="text-gray-700 hover:text-violet-500 transition-colors duration-300"
                />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100078731898525"
                target="blank"
              >
                <IoLogoFacebook
                  size={40}
                  className="text-gray-700 hover:text-violet-500 transition-colors duration-300"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/fagun-mridha/"
                target="blank"
              >
                <FaLinkedinIn
                  size={40}
                  className="text-gray-700 hover:text-violet-500 transition-colors duration-300"
                />
              </Link>
              <Link href="https://www.instagram.com/fagun_vi/" target="blank">
                <FaInstagram
                  size={40}
                  className="text-gray-700 hover:text-violet-500 transition-colors duration-300"
                />
              </Link>
            </div>
          </div>
        </section>

        <section className="flex justify-end ">
          <ScrollTop />
        </section>
      </main>
    </div>
  );
}
