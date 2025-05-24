"use client";

export default function MainGrid() {
  return (
    <div className=" p-6 flex justify-center h-5/6 w-4/6 my-auto">
      {/* ────────── 12 × 12 GRID ────────── */}
      <div className="grid grid-cols-12 grid-rows-12 gap-4 max-w-7xl w-full">
        {/* 1 ▸ Intro card  (w-5 × h-5) */}
        <div className="col-start-1 col-span-5 row-start-1 row-span-5 rounded-lg bg-neutral-800/60" />

        {/* 2 ▸ Tech-stack card  (w-5 × h-4) */}
        <div className="col-start-1 col-span-5 row-start-6 row-span-4 rounded-lg bg-neutral-800/60" />

        {/* 3 ▸ Language bar  (w-4 × h-2) */}
        <div className="col-start-1 col-span-4 row-start-10 row-span-2 rounded-lg bg-neutral-800/60" />

        {/* 4 ▸ Email bar  (w-4 × h-1) */}
        <div className="col-start-1 col-span-4 row-start-12 row-span-1 rounded-lg bg-neutral-800/60" />

        {/* 5 ▸ Tiny square  (w-1 × h-1) */}
        <div className="col-start-5 col-span-1 row-start-10 row-span-3 rounded-lg bg-neutral-700/60" />

        {/* 6 ▸ LinkedIn tile  (w-2 × h-1) */}
        <div className="col-start-6 col-span-2 row-start-11 row-span-2 rounded-lg bg-neutral-700/60" />

        {/* 7 ▸ GitHub tile  (w-2 × h-1) */}
        <div className="col-start-8 col-span-2 row-start-11 row-span-2 rounded-lg bg-neutral-700/60" />

        {/* 8 ▸ Avatar  (w-4 × h-9) */}
        <div className="col-start-6 col-span-4 row-start-1 row-span-10 rounded-lg bg-neutral-700/60" />

        {/* 9 ▸ Sidebar / nav  (w-3 × h-11) */}
        <div className="col-start-10 col-span-3 row-start-1 row-span-11 rounded-lg bg-neutral-800/60" />

        {/* 10 ▸ Location bar  (w-3 × h-1) */}
        <div className="col-start-10 col-span-3 row-start-12 row-span-1 rounded-lg bg-neutral-800/60" />
      </div>
    </div>
  );
}
