import { Divider, Flex, Tag } from "antd";
const Staff = () => {
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

      <div class="container px-6 py-10 mx-auto">
        <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
        </p>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
          <div class="flex flex-col items-center">
            <img
              class="object-cover w-full rounded-xl aspect-square"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
            />

            <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
              arthur melo
            </h1>

            <Flex gap="4px 0" wrap>
              <Tag color="#2db7f5">Kepala Sekolah</Tag>
            </Flex>
          </div>

          <div class="flex flex-col items-center">
            <img
              class="object-cover w-full rounded-xl aspect-square"
              src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt=""
            />

            <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
              Pamela Anderson
            </h1>

            <p class="mt-2 text-gray-500 capitalize dark:text-gray-300">
              Lead Developer
            </p>
          </div>

          <div class="flex flex-col items-center">
            <img
              class="object-cover w-full rounded-xl aspect-square"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
            />

            <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
              John Doe
            </h1>

            <p class="mt-2 text-gray-500 capitalize dark:text-gray-300">
              Full stack developer
            </p>
          </div>
          <div class="flex flex-col items-center">
            <img
              class="object-cover w-full rounded-xl aspect-square"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
            />

            <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
              arthur melo
            </h1>

            <p class="mt-2 text-gray-500 capitalize dark:text-gray-300">
              design director
            </p>
          </div>

          <div class="flex flex-col items-center">
            <img
              class="object-cover w-full rounded-xl aspect-square"
              src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt=""
            />

            <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
              Pamela Anderson
            </h1>

            <p class="mt-2 text-gray-500 capitalize dark:text-gray-300">
              Lead Developer
            </p>
          </div>

          <div class="flex flex-col items-center">
            <img
              class="object-cover w-full rounded-xl aspect-square"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
            />

            <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
              John Doe
            </h1>

            <p class="mt-2 text-gray-500 capitalize dark:text-gray-300">
              Full stack developer
            </p>
          </div>
          <div class="flex flex-col items-center">
            <img
              class="object-cover w-full rounded-xl aspect-square"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
            />

            <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
              arthur melo
            </h1>

            <p class="mt-2 text-gray-500 capitalize dark:text-gray-300">
              design director
            </p>
          </div>

          <div class="flex flex-col items-center">
            <img
              class="object-cover w-full rounded-xl aspect-square"
              src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt=""
            />

            <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
              Pamela Anderson
            </h1>

            <p class="mt-2 text-gray-500 capitalize dark:text-gray-300">
              Lead Developer
            </p>
          </div>

          <div class="flex flex-col items-center">
            <img
              class="object-cover w-full rounded-xl aspect-square"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
            />

            <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
              John Doe
            </h1>

            <p class="mt-2 text-gray-500 capitalize dark:text-gray-300">
              Full stack developer
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Staff;
