import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ img, name, url }) => {
  return (
    <Link
      href={url}
      target="blank"
      className="group relative block overflow-hidden rounded-2xl bg-white/90 shadow-md hover:shadow-2xl transition-all duration-500 hover-glow"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={img}
          alt={name}
          width={680}
          height={500}
          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 w-40 h-40 bg-violet-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
        <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-[60%] group-hover:translate-y-0 transition-transform duration-500">
        <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-gray-100/20">
          <p className="font-bold text-lg text-gray-800 mb-1">{name}</p>
          <div className="flex items-center justify-between magnetic-effect">
            <span className="text-sm font-medium text-violet-600 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-violet-600 after:left-0 after:bottom-0 after:transition-all after:duration-300 group-hover:after:w-full">
              View Project
            </span>
            <div className="flex items-center space-x-1">
              <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
              <span
                className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"
                style={{ animationDelay: "0.2s" }}
              />
              <span
                className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Live indicator */}
      <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-medium text-gray-800">
            Live Project
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
