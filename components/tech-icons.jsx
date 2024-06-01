import React from "react";

const TechIcons = ({ children }) => {
  return (
    <div className="flex flex-row space-x-4 space-y-4 flex-shrink bg-lime-200 p-6 rounded-lg">
      {children}
    </div>
  );
};

export default TechIcons;
