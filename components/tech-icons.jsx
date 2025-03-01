import React from "react";

const TechIcons = ({ children, name }) => {
  return (
    <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group hover-glow">
      <div className="flex flex-col items-center space-y-3">
        <div className="transform transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-110">
          {children}
        </div>
        <p className="text-gray-600 font-medium opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          {name}
        </p>
        <div className="h-1 w-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 transition-all duration-300 group-hover:w-full rounded-full"></div>
      </div>
    </div>
  );
};

export default TechIcons;
