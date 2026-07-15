"use client";

import React from "react";

const ScrollTop = () => {
  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="group flex items-center gap-2 rounded-full surface surface-hover px-4 py-2 text-sm text-gray-400 hover:text-white"
    >
      <span className="font-mono">Back to top</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-brand-400 transition-transform group-hover:-translate-y-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  );
};

export default ScrollTop;
