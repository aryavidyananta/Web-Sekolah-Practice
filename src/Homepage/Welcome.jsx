import React from "react";

const WelcomeSection = () => {
  return (
    <div className="w-full0">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-8 pt-0">
        <div className="flex flex-col items-center text-center mb-8 scroll-mt-32">
          <h1 className="text-4xl font-bold text-gray-900">
            Sambutan Kepala Sekolah
          </h1>
          <h2 className="text-3xl font-semibold text-gray-900 mt-2">
            SMA NEGERI 1 LOREM IPSUM
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8">
          <div className="w-full lg:w-1/2">
            <p className="text-gray-700 text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut earum
              rerum adipisci omnis, asperiores, eaque sed totam laborum alias
              optio exercitationem enim, quo id atque accusamus debitis
              blanditiis! Vero, voluptates.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/Kepala-Sekolah.png"
              alt="Kepala Sekolah"
              className="h-[400px] lg:h-[480px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
