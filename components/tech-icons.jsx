import React from "react";

const TechIcons = ({ children, name }) => {
  return (
    <div className="group flex h-full flex-col items-center justify-center gap-4 rounded-2xl surface surface-hover p-6">
      <div className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
        {children}
      </div>
      <p className="font-mono text-sm text-gray-400 transition-colors group-hover:text-white">
        {name}
      </p>
    </div>
  );
};

export default TechIcons;
