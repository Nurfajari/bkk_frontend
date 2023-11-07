import { IconMessage } from "@tabler/icons-react";
import { IconSearch, IconTrash } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Lowongan = () => {
  return (
    <>
      <div className="card-admin flex flex-col gap-y-5">
        <div className="flex justify-between">
          <h1 className="text-3xl">Lowongan</h1>
          <div className="flex gap-x-5">
            <button className="text-3xl text-white px-3 font-bold rounded-md bg-black drop-shadow-md">
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
        <div className="bg-[#efefef] rounded-lg p-4 flex gap-x-5">
          <div className="flex-initial bg-[#D9D9D9] rounded-md text-center text-4xl">
            Image
          </div>
          <div className="flex-1">
            <p className="text-3xl">PT. Sejahtera Bersama</p>
            <p className="text-2xl mb-4">
              Alamat : Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Ipsum placeat dolorum architecto sit doloremque totam ipsam
              facilis voluptatibus atque praesentium?
            </p>
            <p className="text-2xl">Kualifikasi : </p>
            <ul className="list-disc ml-5">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
            <div className="flex justify-end gap-x-3">
              <button className="border-black border-2 rounded-md p-[1px] hover:bg-black hover:text-white transition-all duration-300 drop-shadow-md">
                <IconTrash className="w-8 h-8" />
              </button>
              <button className="bg-black text-white border-black border-2 rounded-md py-[1px] px-4 flex gap-x-2 items-center hover:bg-inherit hover:text-black transition-all duration-300 drop-shadow-md">
                <IconMessage className="w-8 h-8" />
                <span className="text-xl">Chat</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lowongan;
