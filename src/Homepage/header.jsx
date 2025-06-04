import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-[500px] overflow-hidden"> {/* Removed margin-bottom */}
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/sekolah.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black-900 bg-opacity-70"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">SMA NEGERI 1 LOREM IPSUM</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;