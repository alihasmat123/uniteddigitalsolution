"use client";

export default function VideoBackground() {
  return (
    <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
    >
        <source src="/assets/weavy.mp4" type="video/mp4" />
        <source src="/assets/weavy.webm" type="video/webm" />
        Your browser does not support the video tag.
    </video>

  );
}