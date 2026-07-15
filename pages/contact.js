import CustomCursor from "@/components/custom-cursor";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import Link from "next/link";

const socials = [
  { icon: <FaGithub className="h-5 w-5" />, url: "https://github.com/Fagunmridha", label: "GitHub" },
  { icon: <IoLogoFacebook className="h-5 w-5" />, url: "https://www.facebook.com/profile.php?id=100078731898525", label: "Facebook" },
  { icon: <FaLinkedinIn className="h-5 w-5" />, url: "https://www.linkedin.com/in/fagun-mridha/", label: "LinkedIn" },
  { icon: <FaInstagram className="h-5 w-5" />, url: "https://www.instagram.com/fagun_vi/", label: "Instagram" },
];

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-brand-500/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-brand-500/20";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink-900 text-gray-200">
      <CustomCursor />
      <Navbar />

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/4 h-[420px] w-[420px] rounded-full bg-brand-600/20 blur-[130px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-indigo-600/20 blur-[130px] animate-pulse-slow" style={{ animationDelay: "3s" }} />
      </div>

      <main className="mx-auto max-w-6xl px-5 pt-28 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-12"
        >
          <div className="flex items-center gap-3">
            <span className="eyebrow text-brand-400">Get in touch</span>
            <span className="h-px w-8 bg-brand-500/50" />
          </div>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Let&apos;s work together
          </h1>
          <p className="mt-4 max-w-lg text-gray-400">
            Tell me about your project and I&apos;ll get back to you as soon as I
            can.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="rounded-2xl surface p-6 sm:p-8"
            >
              <form className="space-y-5">
                <div>
                  <label className="eyebrow mb-2 block text-gray-400">Name</label>
                  <input type="text" className={inputClasses} placeholder="Your name" />
                </div>
                <div>
                  <label className="eyebrow mb-2 block text-gray-400">Email</label>
                  <input type="email" className={inputClasses} placeholder="your@email.com" />
                </div>
                <div>
                  <label className="eyebrow mb-2 block text-gray-400">Message</label>
                  <textarea rows="5" className={inputClasses} placeholder="Your message..." />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-brand-500 px-6 py-3 font-medium text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-glow-lg"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="space-y-6"
            >
              <div className="rounded-2xl surface p-6 sm:p-8">
                <h3 className="text-xl font-bold text-white">Contact information</h3>
                <div className="mt-6 space-y-5">
                  <a href="mailto:fagunandy@gmail.com" className="group flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-500/10 text-brand-400 transition-colors group-hover:bg-brand-500/20">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="eyebrow text-gray-500">Email</p>
                      <p className="font-medium text-white group-hover:text-brand-400">fagunandy@gmail.com</p>
                    </div>
                  </a>
                  <a href="tel:+8801401381242" className="group flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-500/10 text-brand-400 transition-colors group-hover:bg-brand-500/20">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="eyebrow text-gray-500">Phone</p>
                      <p className="font-medium text-white group-hover:text-brand-400">+880 1401-381242</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="rounded-2xl surface p-6 sm:p-8">
                <h3 className="text-xl font-bold text-white">Follow me</h3>
                <div className="mt-5 flex gap-3">
                  {socials.map((s) => (
                    <Link
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      aria-label={s.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full surface text-gray-300 transition-all hover:-translate-y-1 hover:border-brand-500/50 hover:text-brand-400"
                    >
                      {s.icon}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Back to home
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
