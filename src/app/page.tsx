// pages/index.js
"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Footer from "./Components/footer";

const VideoBackground = dynamic(() => import("./Components/videobackground"), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center">
      <VideoBackground />

      <div className="flex-grow-0 pt-10 transition-opacity duration-1000">
        <div className="relative flex flex-col justify-between items-center">
          <Image src="/assets/uniteddigitalsolution.svg" width={200} height={50} alt="logo" />
        </div>
      </div>

      <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex flex-1 flex-col items-center justify-center">
        <h1 className="mb-6 text-4xl xl:text-5xl">United Digital Solution</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl">
          <span>"Bringing Your Ideas to Life with Advanced Digital Solutions."</span>
        </h2>
      </div>

      <Footer />
    </div>
  );
}
