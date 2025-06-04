import React from "react";

const CardsSection = () => {
  return (
    <div className="relative z-20 w-full px-4 -mt-20 mb-8 sm:-mt-24 sm:mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mx-auto max-w-screen-lg">
        {/* Card 1 */}
        <div className="w-full p-4 text-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4">
            <img src="/Unggul.png" alt="Unggul" className="w-full h-full object-contain" />
          </div>
          <p className="font-bold text-gray-800">Unggul</p>
        </div>

        {/* Card 2 */}
        <div className="w-full p-4 text-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4">
            <img src="/Karakter.png" alt="Berkarakter" className="w-full h-full object-contain" />
          </div>
          <p className="font-bold text-gray-800">Berkarakter</p>
        </div>

        {/* Card 3 */}
        <div className="w-full p-4 text-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4">
            <img src="/Modern.png" alt="Modern" className="w-full h-full object-contain" />
          </div>
          <p className="font-bold text-gray-800">Modern</p>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;