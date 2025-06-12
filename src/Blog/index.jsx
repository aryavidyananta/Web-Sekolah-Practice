const BlogPage = () => {
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
            <h1 className="text-4xl font-bold mb-4">Berita</h1>
          </div>
        </div>
      </div>

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition duration-300 rounded-xl p-5"
            href="#"
          >
            <div className="aspect-w-16 aspect-h-11">
              <img
                className="w-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?auto=format&fit=crop&w=560&q=80"
                alt="Blog 1"
              />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Announcing a free plan for small teams
              </h3>
              <p className="mt-5 text-gray-600">
                At Wake, our mission has always been focused on bringing
                openness.
              </p>
            </div>
          </a>

          <a
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition duration-300 rounded-xl p-5"
            href="#"
          >
            <div className="aspect-w-16 aspect-h-11">
              <img
                className="w-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1562851529-c370841f6536?auto=format&fit=crop&w=560&q=80"
                alt="Blog 2"
              />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800">
                How Google Assistant now helps you record stories for kids
              </h3>
              <p className="mt-5 text-gray-600">
                Google is constantly updating its consumer AI, Google Assistant,
                with new features.
              </p>
            </div>
          </a>

          <a
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition duration-300 rounded-xl p-5"
            href="#"
          >
            <div className="aspect-w-16 aspect-h-11">
              <img
                className="w-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1521321205814-9d673c65c167?auto=format&fit=crop&w=560&q=80"
                alt="Blog 3"
              />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Front accounts - let's work together
              </h3>
              <p className="mt-5 text-gray-600">
                Are you an accountant? Are you a company formation advisor?
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
