
const Ekskul = () => {
    return(
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6 relative inline-block">
          <span className="relative z-10">
            Kegiatan Ekstrakurikuler
            <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-100 z-[-1] opacity-70 transform translate-y-1"></span>
          </span>
        </h2>
      </div>
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="/Sepak-bola.jpeg"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75 text-center">
              <p className="text-sm font-medium tracking-wide text-white">
                Sepakbola
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="Pramuka.jpeg"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75 text-center">
              <p className="text-sm font-medium tracking-wide text-white">
                Pramuka
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="/Basket.jpeg"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75 text-center">
              <p className="text-sm font-medium tracking-wide text-white">
                Basket
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="/Badminton.jpeg"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75 text-center">
              <p className="text-sm font-medium tracking-wide text-white">
                Bulutangkis
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
    )
}

export default Ekskul;