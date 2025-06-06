const Footer = () => {
  return (
    <div className="w-full bg-blue-400 px-4 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <img src="/Logo-Sekolah.png" alt="Logo" class="w-20 h-20" />
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                SMA NEGERI 1 LOREM IPSUM
              </span>
            </a>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt quaerat natus odit? Esse pariatur vero dignissimos,
                unde eveniet exercitationem odit hic officia quibusdam, amet
                officiis autem quo quam! Accusamus, placeat.
              </p>
              <p className="mt-4 text-sm text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                iure nisi quos voluptate hic quae maxime fugit maiores nobis
                impedit accusantium, error, aliquam sequi quia ea facere iusto
                quis minima.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">
              Kontak
            </p>
            <div className="flex">
              <p className="mr-1 text-gray-800">Telepon:</p>
              <a
                href="tel:+628501235021"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                +62 850 1235 021
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Email:</p>
              <a
                href="mailto:info@company.com"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                info@company.com
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Alamat:</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Jl. Srikandi No. 10, Bali
              </a>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-gray-900">
              Sosial Media
            </span>
            <div className="flex items-center mt-1 space-x-3">
              {/* Replace with your own social media links */}
              <a
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                {/* Twitter */}
              </a>
              <a
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                {/* Instagram */}
              </a>
              <a
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                {/* Facebook */}
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-600">
            © 2025 Company Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
