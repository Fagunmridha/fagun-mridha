import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ img, name, url, tag }) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="group relative block overflow-hidden rounded-2xl surface surface-hover"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={img}
          alt={name}
          width={680}
          height={500}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent" />

        {/* Live badge */}
        <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-ink-900/70 px-3 py-1.5 backdrop-blur-md border border-white/10">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          <span className="text-xs font-medium text-gray-200">Live</span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 p-5">
        <div>
          {tag && <p className="eyebrow text-brand-400">{tag}</p>}
          <p className="mt-1.5 font-semibold text-white">{name}</p>
        </div>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 group-hover:border-brand-500/50 group-hover:bg-brand-500/10 group-hover:text-brand-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 17L17 7M17 7H8M17 7V16"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default ProjectCard;
