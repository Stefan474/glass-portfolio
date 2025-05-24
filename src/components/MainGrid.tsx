"use client";

import * as motion from "motion/react-client";
import Bio from "./grid-components/Bio";
import TechStack from "./grid-components/TechStack";
import Avatar from "./grid-components/Avatar";
import MainMenu from "./grid-components/MainMenu";
import Image from "next/image";

const parent = {
  animate: {
    transition: {
      // 9 gaps × 0.12 s = 1.08 s  ➜  plus one child-duration ≈ 1.4 s total
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const child = {
  initial: { opacity: 0, y: 25, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

export default function MainGrid() {
  return (
    <div className="p-6 flex justify-center h-5/6 w-4/6 my-auto">
      {/* ────────── 12 × 12 GRID ────────── */}
      <motion.div
        variants={parent}
        initial="initial"
        animate="animate"
        className="grid grid-cols-12 grid-rows-12 gap-4 max-w-7xl w-full"
      >
        {/* 1 ▸ Intro card */}
        <motion.div
          variants={child}
          className="col-start-1 col-span-5 row-start-1 row-span-5 "
        >
          <Bio />
        </motion.div>

        {/* 2 ▸ Tech-stack card */}
        <motion.div
          variants={child}
          className="col-start-1 col-span-5 row-start-6 row-span-4 rounded-lg bg-neutral-800/60 p-4"
        >
          <TechStack />
        </motion.div>

        {/* 3 ▸ Language bar */}
        <motion.div
          variants={child}
          className="col-start-1 col-span-4 row-start-10 row-span-2 rounded-lg bg-neutral-800/60"
        />

        {/* 4 ▸ Email bar */}
        <motion.div
          variants={child}
          className="col-start-1 col-span-4 row-start-12 row-span-1 rounded-lg bg-neutral-800/60"
        />

        {/* 5 ▸ Tiny square */}
        <motion.div
          variants={child}
          className="col-start-5 col-span-1 row-start-10 row-span-3 rounded-lg bg-neutral-700/60"
        />

        {/* 6 ▸ LinkedIn tile */}
        <motion.div
          variants={child}
          className="col-start-6 col-span-2 row-start-11 row-span-2 rounded-lg bg-white/80 flex justify-center items-center"
        >
          <Image
            src="/assets/tech_images/LinkedIn.png"
            alt="linkedin"
            width={60}
            height={60}
          />
        </motion.div>

        {/* 7 ▸ GitHub tile */}
        <motion.div
          variants={child}
          className="col-start-8 col-span-2 row-start-11 row-span-2 rounded-lg bg-cyan-400/80 flex justify-center items-center"
        >
          {" "}
          <Image
            src="/assets/tech_images/GitHub.png"
            alt="github"
            width={60}
            height={60}
          />
        </motion.div>

        {/* 8 ▸ Avatar */}
        <motion.div
          variants={child}
          className="col-start-6 col-span-4 row-start-1 row-span-10 rounded-lg bg-neutral-900/60"
        >
          <Avatar />
        </motion.div>

        {/* 9 ▸ Sidebar / nav */}
        <motion.div
          variants={child}
          className="col-start-10 col-span-3 row-start-1 row-span-6 rounded-lg bg-neutral-600/60"
        >
          <MainMenu />
        </motion.div>
        <motion.div
          variants={child}
          className="col-start-10 col-span-3 row-start-7 row-span-5 rounded-lg bg-neutral-700/60"
        />

        {/* 10 ▸ Location bar */}
        <motion.div
          variants={child}
          className="col-start-10 col-span-3 row-start-12 row-span-1 rounded-lg bg-neutral-800/60"
        />
      </motion.div>
    </div>
  );
}
