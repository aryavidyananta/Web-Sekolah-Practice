import { useEffect, useState } from "react";
import { Tag, Flex } from "antd";
import { getData, getStaffImageUrl } from "../../utils/api";

const Staff = () => {
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
            <h1 className="text-4xl font-bold mb-4">Staff</h1>
          </div>
        </div>
      </div>

      <div className="container px-6 py-10 mx-auto">
        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
          Berikut adalah daftar staf sekolah yang aktif.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {staffs.map((staff) => (
            <div
              key={staff.id}
              className="flex flex-col items-center text-center"
            >
              <div className="rounded-l-lg shadow-md overflow-hidden w-full max-w-sm">
                <img
                  src={getStaffImageUrl(staff.gambar)}
                  alt={staff.nama}
                  className="w-full h-96 object-cover"
                />
              </div>

              <h2 className="mt-4 mb-2 text-xl font-semibold text-gray-800 capitalize">
                {staff.nama}
              </h2>
              <Flex gap="4px 0" wrap className="justify-center">
                <Tag color="blue">{staff.jabatan}</Tag>
              </Flex>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Staff;
