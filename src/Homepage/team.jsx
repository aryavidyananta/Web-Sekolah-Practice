import { Divider, Flex, Tag } from "antd";
const Teacher = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-white">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6 relative inline-block">
          <span className="relative z-10">
            Tenaga Pendidik Kami
            <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-100 z-[-1] opacity-70 transform translate-y-1"></span>
          </span>
        </h2>
        <p className="text-lg text-gray-600 md:text-xl">
          Tim pengajar profesional yang berdedikasi untuk memberikan pendidikan
          terbaik bagi siswa SMA Negeri 1 Lorem Ipsum.
        </p>
      </div>

      {/* Teachers Grid */}
      <div className="grid gap-12 mx-auto lg:grid-cols-2 xl:grid-cols-2 lg:max-w-screen-xl">
        {/* Teacher 1 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="sm:flex">
            <div className="sm:w-1/3 relative">
              <img
                className="w-full h-64 sm:h-full object-cover"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Oliver Aguilerra"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="sm:w-2/3 p-6 sm:p-8">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Oliver Aguilerra
                  </h3>

                  <Flex gap="4px 0" wrap>
                    <Tag color="#2db7f5">Kepala Sekolah</Tag>
                  </Flex>
                  <p className="text-gray-600 mb-6">
                    Spesialis dalam pengembangan kurikulum berbasis teknologi
                    dengan pengalaman 10 tahun di bidang pendidikan.
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        {/* Teacher 2 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="sm:flex">
            <div className="sm:w-1/3 relative">
              <img
                className="w-full h-64 sm:h-full object-cover"
                src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Marta Clermont"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="sm:w-2/3 p-6 sm:p-8">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Marta Clermont
                  </h3>
                   <Flex gap="4px 0" wrap>
                    <Tag color="#2db7f5">Kepala Perpustakaan</Tag>
                  </Flex>
                  <p className="text-gray-600 mb-6">
                    Ahli dalam pendidikan seni dan desain dengan pendekatan
                    kreatif yang menginspirasi siswa untuk berpikir
                    out-of-the-box.
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        {/* Teacher 3 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="sm:flex">
            <div className="sm:w-1/3 relative">
              <img
                className="w-full h-64 sm:h-full object-cover"
                src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Alice Melbourne"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="sm:w-2/3 p-6 sm:p-8">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Alice Melbourne
                  </h3>
                   <Flex gap="4px 0" wrap>
                    <Tag color="#2db7f5">Bidang kurikulum</Tag>
                  </Flex>
                  <p className="text-gray-600 mb-6">
                    Spesialis pengembangan SDM pendidikan dengan fokus pada
                    pengembangan profesionalisme guru dan staf.
                  </p>
                </div>
              
              </div>
            </div>
          </div>
        </div>

        {/* Teacher 4 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="sm:flex">
            <div className="sm:w-1/3 relative">
              <img
                className="w-full h-64 sm:h-full object-cover"
                src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="John Doe"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="sm:w-2/3 p-6 sm:p-8">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    John Doe
                  </h3>
                   <Flex gap="4px 0" wrap>
                    <Tag color="#2db7f5">Bidang Kewahasiswaan</Tag>
                  </Flex>
                  <p className="text-gray-600 mb-6">
                    Ahli dalam pendidikan sains dengan pendekatan eksperimental
                    yang mendorong siswa untuk berpikir kritis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
