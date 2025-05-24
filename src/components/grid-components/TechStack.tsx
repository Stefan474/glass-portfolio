"use client";

import Image from "next/image";

export default function TechStack() {
  interface TechStack {
    name: string;
    logo_path: string;
  }

  const techStack: TechStack[] = [
    { name: "React", logo_path: "/assets/tech_images/React.png" },
    { name: "Next.js", logo_path: "/assets/tech_images/nextjs.png" },
    { name: "Angular", logo_path: "/assets/tech_images/Angular.png" },
    { name: "Vue", logo_path: "/assets/tech_images/Vue.js.png" },
    { name: "TypeScript", logo_path: "/assets/tech_images/TypeScript.png" },
    { name: "Node.js", logo_path: "/assets/tech_images/Node.js.png" },
    { name: ".NET", logo_path: "/assets/tech_images/Net core.png" },
    { name: "Tailwind", logo_path: "/assets/tech_images/Tailwind CSS.png" },
  ];

  return (
    <div className="flex flex-col h-full w-full">
      <h3 className="text-white text-2xl font-semibold  my-auto">Tech Stack</h3>
      <div className="grid grid-cols-4 grid-rows-2 gap-2 h-full w-full p-1 pl-0 ">
        {techStack.map((tech, index) => (
          <div className=" size-12 mt-2 flex flex-col gap-0.5 " key={index}>
            <Image
              src={tech.logo_path}
              alt={tech.name}
              width={80}
              height={80}
            />
            <p className="text-white text-sm mx-auto">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
