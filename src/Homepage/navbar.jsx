import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-blue-400">
      <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-center gap-10">
          <Link to="/" className="inline-flex items-center space-x-2 hover:text-blue-400 transition cursor-pointer">
            <img src="/Logo-Sekolah.png" alt="Logo" className="w-20 h-20" />
            <span className="text-xl font-bold tracking-wide text-white uppercase">SMAN</span>
          </Link>

          <ul className="hidden lg:flex items-center space-x-24 mx-auto">
            <li>
              <Link
                to="/homepage"
                className="font-medium tracking-wide text-white transition duration-200 hover:text-blue-800"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="font-medium tracking-wide text-white transition duration-200 hover:text-blue-800"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="font-medium tracking-wide text-white transition duration-200 hover:text-blue-800"
              >
                Berita
              </Link>
            </li>
            <li>
              <Link
                to="/staff"
                className="font-medium tracking-wide text-white transition duration-200 hover:text-blue-800"
              >
                Staff
              </Link>
            </li>
            <li>
              <Link
                to="/ekstrakulikuler"
                className="font-medium tracking-wide text-white transition duration-200 hover:text-blue-800"
              >
                Ekstrakulikuler
              </Link>
            </li>
            <li>
              <Link
                to="/fasilitas"
                className="font-medium tracking-wide text-white transition duration-200 hover:text-blue-800"
              >
                Fasilitas
              </Link>
            </li>
          </ul>

          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              className="p-2 text-white focus:outline-none"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 5h16M4 12h16M4 19h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-50">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <Link to="/" className="inline-flex items-center space-x-2">
                    <svg
                      className="w-8 h-8 text-gray-800"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0L15.09 7.36L23.18 8.63L17 13.97L18.18 21.96L12 18.26L5.82 21.96L7 13.97L0.82 8.63L8.91 7.36L12 0Z" />
                    </svg>
                    <span className="text-xl font-bold tracking-wide text-gray-800 uppercase">
                      Company
                    </span>
                  </Link>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-gray-600 hover:bg-gray-200 rounded"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="/product"
                        className="font-medium text-gray-700 hover:text-teal-600"
                      >
                        Product
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/features"
                        className="font-medium text-gray-700 hover:text-teal-600"
                      >
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/pricing"
                        className="font-medium text-gray-700 hover:text-teal-600"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="font-medium text-gray-700 hover:text-teal-600"
                      >
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/signup"
                        className="inline-block w-full px-6 py-2 text-center font-medium text-white bg-teal-600 rounded hover:bg-teal-700"
                      >
                        Sign up
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
