"use client";

import React from "react";
import Image from "next/image";

const scrollTop = () => {
  return (
    <div
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="cursor-pointer"
    >
      <Image src="/uper.png" alt="footer" width={120} height={120} />
    </div>
  );
};

export default scrollTop;
