import React from "react";

const TechIcons = ({ children, name }) => {
  return (
    <div className="group inline-flex items-center gap-2.5 rounded-full surface surface-hover px-4 py-2.5">
      <span className="shrink-0 transition-transform duration-300 group-hover:scale-110">
        {children}
      </span>
      <p className="whitespace-nowrap font-mono text-sm text-gray-400 transition-colors group-hover:text-white">
        {name}
      </p>
    </div>
  );
};

export default TechIcons;
