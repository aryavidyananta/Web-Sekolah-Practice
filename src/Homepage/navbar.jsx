import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div class="bg-blue-600">
      <div class="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div class="relative flex items-center justify-center gap-10">

          <div class="inline-flex items-center space-x-2 hover:text-teal-400 transition cursor-pointer">
            <img src="/Logo-Sekolah.png" alt="Logo" class="w-20 h-20" />
            <span class="text-xl font-bold tracking-wide text-white uppercase">SMAN</span>
          </div>
          <ul class="hidden lg:flex items-center space-x-24 mx-auto">
            <li>
              <a
                href="/"
                class="font-medium tracking-wide text-white transition duration-200 hover:text-teal-400"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="/"
                class="font-medium tracking-wide text-white transition duration-200 hover:text-teal-400"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/"
                class="font-medium tracking-wide text-white transition duration-200 hover:text-teal-400"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/"
                class="font-medium tracking-wide text-white transition duration-200 hover:text-teal-400"
              >
                About us
              </a>
            </li>
          </ul>

          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              class="p-2 text-white focus:outline-none"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 5h16M4 12h16M4 19h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div class="absolute top-0 left-0 w-full z-50">
              <div class="p-5 bg-white border rounded shadow-sm">
                <div class="flex items-center justify-between mb-4">
                  <a href="/" class="inline-flex items-center space-x-2">
                    <svg
                      class="w-8 h-8 text-gray-800"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0L15.09 7.36L23.18 8.63L17 13.97L18.18 21.96L12 18.26L5.82 21.96L7 13.97L0.82 8.63L8.91 7.36L12 0Z" />
                    </svg>
                    <span class="text-xl font-bold tracking-wide text-gray-800 uppercase">
                      Company
                    </span>
                  </a>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    class="p-2 text-gray-600 hover:bg-gray-200 rounded"
                  >
                    <svg
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <nav>
                  <ul class="space-y-4">
                    <li>
                      <a
                        href="/"
                        class="font-medium text-gray-700 hover:text-teal-600"
                      >
                        Product
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        class="font-medium text-gray-700 hover:text-teal-600"
                      >
                        Features
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        class="font-medium text-gray-700 hover:text-teal-600"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        class="font-medium text-gray-700 hover:text-teal-600"
                      >
                        About us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        class="inline-block w-full px-6 py-2 text-center font-medium text-white bg-teal-600 rounded hover:bg-teal-700"
                      >
                        Sign up
                      </a>
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
