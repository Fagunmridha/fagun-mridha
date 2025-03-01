import { JetBrains_Mono } from "next/font/google";
import CustomCursor from "@/components/custom-cursor";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import Link from "next/link";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export default function ContactPage() {
  return (
    <div
      className={`bg-gradient-to-br from-rose-50 to-indigo-50 min-h-screen ${jetBrainsMono.className}`}
    >
      <CustomCursor />
      <main className="max-w-6xl mx-auto p-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-16"
        >
          <div className="md:space-y-5 space-y-2">
            <p className="text-xl font-light text-violet-500 gradient-text">
              Get in Touch __
            </p>
            <h1 className="text-4xl md:text-5xl font-bold">
              Let&apos;s Work Together! 🤝
            </h1>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all duration-300"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-violet-500 text-white py-3 px-6 rounded-lg hover:bg-violet-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
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
              className="space-y-8"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-violet-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600">Email</p>
                      <p className="font-medium">fagunandy@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-violet-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600">Phone</p>
                      <p className="font-medium">+880 1401-381242</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <Link
                    href="https://github.com/Fagunmridha"
                    target="blank"
                    className="hover-glow p-3 bg-violet-100 rounded-full"
                  >
                    <FaGithub className="w-6 h-6 text-violet-600" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/profile.php?id=100078731898525"
                    target="blank"
                    className="hover-glow p-3 bg-violet-100 rounded-full"
                  >
                    <IoLogoFacebook className="w-6 h-6 text-violet-600" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/fagun-mridha/"
                    target="blank"
                    className="hover-glow p-3 bg-violet-100 rounded-full"
                  >
                    <FaLinkedinIn className="w-6 h-6 text-violet-600" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/fagun_vi/"
                    target="blank"
                    className="hover-glow p-3 bg-violet-100 rounded-full"
                  >
                    <FaInstagram className="w-6 h-6 text-violet-600" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
