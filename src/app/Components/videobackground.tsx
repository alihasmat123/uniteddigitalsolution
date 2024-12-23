"use client";

export default function VideoBackground() {
  return (
    <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover px-0 py-0">
      <source src="/assets/weavy.m4v" type="video/mp4; codecs=hvc1" />
      <source src="/assets/weavy.webm" type="video/webm; codecs=vp9" />
      Your browser does not support the video tag.
    </video>
  );
}