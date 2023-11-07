import { IconSearch } from "@tabler/icons-react";

const Perusahaan = () => {
  return (
    <>
      <div className="card-admin flex flex-col gap-y-5">
        <div className="flex justify-between">
          <h1 className="text-3xl">Perusahaan</h1>
          <div className="flex gap-x-5">
            <button className="text-3xl text-white px-3 font-bold rounded-md bg-black">
              +
            </button>
            <div className="border-[1px] border-black/40 rounded-md overflow-hidden relative">
              <input
                type="text"
                className="focus:outline-none text-xl pl-1 pr-8 pt-[2px] placeholder:text-black/50"
                placeholder="Search..."
              />
              <div className="absolute right-0 top-0 bottom-0">
                <IconSearch className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Perusahaan;
