"use client";

import { useState } from "react";
import * as motion from "motion/react-client";

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  return (
    <motion.div>
      <h1 className="text-4xl font-bold text-center">
        Hi, I'm Stefan, a web developer from Belgrade
      </h1>
      <div className="h-svh w-svw flex justify-center ">
        <div className={`grid  bg-white h-1/2 w-1/2 my-auto grid-cols-2 `}>
          <div
            className={`h-full w-full bg-gray-500 transition-all duration-500 ${
              isActive ? "-translate-x-4" : ""
            }`}
          >
            {" "}
            …{" "}
          </div>
          <div
            className={`h-full w-full bg-green-500 transition-all duration-500 ${
              isActive ? "translate-x-4" : ""
            }`}
            onClick={() => setIsActive(!isActive)}
          ></div>
        </div>
      </div>
    </motion.div>
  );
}
