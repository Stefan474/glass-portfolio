"use client";

import { useState } from "react";
import * as motion from "motion/react-client";
import MainGrid from "../components/MainGrid";
import { DotPattern } from "@/components/magicui/dot-pattern";

export default function Home() {
  return (
    <div className="flex h-svh w-svw justify-center">
      <MainGrid />
      <DotPattern className="bg-black -z-10"></DotPattern>
    </div>
  );
}
