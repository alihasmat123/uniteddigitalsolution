import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      
      <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
      <source src="/assets/earth.m4v" type="video/mp4; codecs=hvc1" />
        <source src="/assets/weavy.webm" type="video/webm; codecs=vp9" />
      </video>

      <div className={`flex-grow-0 pt-10 transition-opacity duration-1000`}>
        <div className="relative flex flex-clo justify-between items-center">
          <Image src="/assets/uniteddigitalsolution.svg" width={200} height={50} alt="logo"
          />
        </div>
        
      </div>
      
      <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex flex-1 flex-col items-center justify-center">
        <h1 className="mb-6 text-4xl xl:text-5xl">United Digital Solution</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl"><span>"Bringing Your Ideas to Life with Advanced Digital Solutions."
        </span></h2>
      </div>

      <footer className="relative flex flex-wrap gap-8 items-center justify-center px-4 py-10">
          <h3 className="font-bold">© Copyright 2017 | Email: info@uniteddigitalsolution.com</h3>
      </footer>
      
    </div>
  );
}
