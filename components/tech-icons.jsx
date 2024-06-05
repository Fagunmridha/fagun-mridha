import React from "react";

const TechIcons = ({ children }) => {
  return (
    <div className="flex bg-lime-300 p-6 rounded-lg hover:scale-110 hover:transition-all hover:duration-500">
      {children}
    </div>
  );
};

export default TechIcons;
