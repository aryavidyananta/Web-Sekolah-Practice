import React from "react";
import {
  BookOutlined,
  CheckCircleOutlined,
  EyeOutlined
} from "@ant-design/icons";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[200px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/sekolah.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Tentang Kami</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 space-y-20">
        {/* Card Sejarah */}
        <div>
          <div className="group relative bg-gradient-to-r  from-purple-100 to-indigo-100 p-1 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
            <div className="relative flex flex-col h-full p-6 bg-white rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white shadow-md">
                  <BookOutlined className="text-2xl" />
                </div>
                <h3 className="ml-4 text-2xl font-bold text-orange-800">SEJARAH</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Desa Demulih memiliki sejarah panjang dalam membangun komunitas yang kuat,
                berbasis budaya dan kearifan lokal. Berdiri sejak zaman kerajaan Bali,
                desa ini berkembang menjadi wilayah yang aktif secara sosial dan spiritual,
                mempertahankan nilai-nilai tradisional sambil menyambut perkembangan zaman.
              </p>
            </div>
          </div>
        </div>

        {/* Grid Card */}
        <div className="grid gap-10 gap-y-16 row-gap-8 md:grid-cols-2">
          {/* Card Visi */}
          <div className="group relative bg-gradient-to-r from-purple-100 to-indigo-100 p-1 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
            <div className="relative flex flex-col h-full p-6 bg-white rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500 text-white shadow-md">
                  <EyeOutlined className="text-xl" />
                </div>
                <h3 className="ml-4 text-2xl font-bold text-deep-purple-800">VISI</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Menjadi pelopor perubahan menuju masyarakat yang berdaya, berbudaya,
                dan melek teknologi melalui kolaborasi dan semangat kebersamaan.
              </p>
            </div>
          </div>

          {/* Card Misi */}
          <div className="group relative bg-gradient-to-r from-indigo-100 to-purple-100 p-1 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
            <div className="relative flex flex-col h-full p-6 bg-white rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500 text-white shadow-md">
                  <CheckCircleOutlined className="text-xl" />
                </div>
                <h3 className="ml-4 text-2xl font-bold text-indigo-800">MISI</h3>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>Menumbuhkan semangat gotong royong dan kebersamaan dalam masyarakat.</li>
                <li>Meningkatkan kualitas pendidikan dan literasi digital generasi muda.</li>
                <li>Mendorong pemanfaatan teknologi untuk pembangunan desa berkelanjutan.</li>
                <li>Melestarikan budaya dan kearifan lokal sebagai identitas komunitas.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default About;
