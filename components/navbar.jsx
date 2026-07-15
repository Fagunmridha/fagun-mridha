import React, { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex items-center justify-between gap-6 w-full max-w-5xl rounded-full px-5 py-3 transition-all duration-300 ${
          scrolled
            ? "surface shadow-glow bg-ink-900/70"
            : "border border-transparent"
        }`}
      >
        <Link
          href="#top"
          className="flex items-center gap-2 font-semibold tracking-tight text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 font-mono text-sm text-white shadow-glow">
            F
          </span>
          <span className="hidden sm:block">Fagun</span>
        </Link>

        <ul className="hidden md:flex items-center gap-1 text-sm text-gray-400">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="px-3 py-2 rounded-full transition-colors hover:text-white hover:bg-white/5"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="https://drive.google.com/file/d/1cVT9H73vTWoUIBWGhbOk5weHXyDq1ttl/view?usp=sharing"
          target="_blank"
          className="group flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm font-medium text-white transition-all hover:border-brand-500/50 hover:bg-brand-500/10"
        >
          <span>Resume</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-brand-400 transition-transform group-hover:translate-y-0.5"
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
      </nav>
    </header>
  );
};

export default Navbar;
