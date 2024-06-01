import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ img, name, url }) => {
  return (
    <Link href={url} target="blank" className="">
      <Image src={img} alt={name} width={680} height={500} className="" />
      <div className="p-3 bg-white">
        <p className="font-semibold">{name}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
