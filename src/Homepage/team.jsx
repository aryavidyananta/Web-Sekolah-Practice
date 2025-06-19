import { useEffect, useState } from "react";
import { Divider, Flex, Tag } from "antd";
import { getData, getStaffImageUrl } from "../../utils/api"; // sesuaikan path

const Teacher = () => {
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    const fetchStaffs = async () => {
      try {
        const res = await getData("/staff");
        if (res?.data && Array.isArray(res.data)) {
          setStaffs(res.data);
        }
      } catch (error) {
        console.error("Gagal mengambil data staff:", error);
      }
    };

    fetchStaffs();
  }, []);

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
          terbaik bagi siswa kami.
        </p>
      </div>

      {/* Dynamic Teachers Grid */}
      <div className="grid gap-12 mx-auto lg:grid-cols-2 xl:grid-cols-2 lg:max-w-screen-xl">
        {staffs.map((staff) => (
          <div
            key={staff.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            <div className="sm:flex">
              <div className="sm:w-1/3 relative">
                <img
                  className="w-full h-64 sm:h-full object-cover"
                  src={getStaffImageUrl(staff.gambar)}
                  alt={staff.nama}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="sm:w-2/3 p-6 sm:p-8">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {staff.nama}
                    </h3>
                    <Flex gap="4px 0" wrap>
                      <Tag color="#2db7f5">{staff.jabatan}</Tag>
                    </Flex>
                    {/* Opsional deskripsi jika ada di API */}
                    {/* <p className="text-gray-600 mt-4">
                      {staff.deskripsi}
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teacher;
