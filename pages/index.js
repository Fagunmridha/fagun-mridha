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
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`bg-gray-100 ${jetBrainsMono.className}`}>
      <main className="max-w-6xl mx-auto p-4">
        <section className="h-[70vh] flex flex-col justify-center">
          <div className="">
            <div className="max-w-[800px]">
              <div className="space-y-3">
                <h2 className="text-3xl text-[#0D4F6A] font-medium">
                  Hey! This is
                </h2>
                <h1 className="text-8xl text-[#0D4F6A] font-bold">
                  Fagun Mridha
                </h1>
                <h3 className="text-3xl text-[#0D4F6A] font-medium">
                  A self-taught
                  <span className="text-blue-400">
                    {" "}
                    Frontend Developer <br />
                  </span>{" "}
                  from Bangladesh.
                </h3>

                <div className="flex flex-row pt-4 md:pt-8">
                  <Link
                    href="https://drive.google.com/file/d/1WXm4fiGPEFOKeFPzcpQzO5LThEmSRLcm/view?usp=sharing"
                    target="blank"
                    className="bg-blue-400 py-3 px-4 rounded-full text-md font-semibold text-white shadow-xl hover:bg-blue-500  "
                  >
                    Download CV
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="md:space-y-5 space-y-2">
            <p className="text-xl font-light">About me __</p>
            <h6 className="text-4xl">Who I am 😎</h6>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-6 py-6 md:py-10 gap-10">
            <div>
              <Image
                src="/fagun-mridha.jpg"
                alt="pictures"
                height={380}
                width={400}
                className="rounded-xl"
              />
            </div>
            <div className="max-w-[600px] space-y-8">
              <p className="text-xl md:text-2xl font-normal">
                Hi! I&apos;m Fagun Mridha, a self-taught frontend developer
                skilled in HTML, CSS, JavaScript, and modern frameworks like
                React and Next.js.
              </p>
              <p className="text-xl md:text-2xl font-normal">
                I enjoy turning complex problems into simple, beautiful, and
                intuitive designs. I enjoy crafting visually appealing and
                user-friendly web applications.
              </p>
              <p className="text-xl md:text-2xl font-normal">
                Currently, I define myself as a beginner but, I believe in
                continuous learning and always looking for opportunities to grow
                my skills and knowledge. Let&apos;s connect and create something
                amazing together!
              </p>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="md:space-y-5 space-y-2">
            <p className="text-xl font-light">Projects __</p>
            <h6 className="text-4xl">Some of my recent works 📂 </h6>
          </div>
          <div className="flex flex-col md:flex-row py-6">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
              <ProjectCard
                img="/sscc.png"
                name=" Xeno EV Landing Page"
                url="https://xenoev.com/"
              />
              <ProjectCard
                img="/womany.png"
                name="Wowmoney Landing Page"
                url="https://wowmoney.me/"
              />
              <ProjectCard
                img="/xnoev.png"
                name="Zantrik's Service Order Form"
                url="https://order.zantrik.com/"
              />
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="md:space-y-5 space-y-2">
            <p className="text-xl font-light">Tech stack __</p>
            <h6 className="text-4xl">Tools & Technologies 👨‍💻</h6>
          </div>
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 py-6">
            <TechIcons>
              <FaHtml5 size={56} />
            </TechIcons>
            <TechIcons>
              <FaCss3Alt size={56} />
            </TechIcons>
            <TechIcons>
              <IoLogoJavascript size={56} />
            </TechIcons>
            <TechIcons>
              <FaReact size={56} />
            </TechIcons>
            <TechIcons>
              <IoLogoFirebase size={56} />
            </TechIcons>
            <TechIcons>
              <FaGithub size={56} />
            </TechIcons>
            <TechIcons>
              <FaFigma size={56} />
            </TechIcons>
            <TechIcons>
              <SiRedux size={56} />
            </TechIcons>
          </div>
        </section>

        <section className="py-10">
          <div className="md:space-y-5 space-y-2">
            <p className="text-xl font-light">Contacts __</p>
            <h6 className="text-4xl">Get in touch 📲💻</h6>
          </div>
          <div className="border border-green-500 mt-8 shadow-lg ">
            <div className="max-w-[880px] flex flex-col md:flex-row p-10 justify-between mx-auto space-y-7 md:space-y-0">
              <div>
                <p>Email 📬</p>
                <p>fagunandy@gmail.com</p>
              </div>

              <div>
                <p> Phone 📱</p>
                <p>+880 1401-381242 </p>
              </div>
            </div>
          </div>

          <div className="py-10 flex justify-center">
            <div className="flex justify-between space-x-6">
              <Link href="https://github.com/Fagunmridha" target="blank">
                <FaGithub
                  size={40}
                  className="text-black hover:text-lime-300 hover:transition-all hover:ease-in-out hover:duration-300"
                />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100078731898525"
                target="blank"
              >
                <IoLogoFacebook
                  size={40}
                  className="text-black hover:text-lime-300 hover:transition-all hover:ease-in-out hover:duration-300"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/fagun-mridha/"
                target="blank"
              >
                <FaLinkedinIn
                  size={40}
                  className="text-black hover:text-lime-300 hover:transition-all hover:ease-in-out hover:duration-300"
                />
              </Link>
              <Link href="https://www.instagram.com/fagun_vi/" target="blank">
                <FaInstagram
                  size={40}
                  className="text-black hover:text-lime-300 hover:transition-all hover:ease-in-out hover:duration-300"
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
