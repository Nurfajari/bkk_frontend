import { IconBriefcase } from "@tabler/icons-react";
import Navbar from "../../component/Alumni/Navbar";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { IconArrowUpRight } from "@tabler/icons-react";

export default function PageDetailPerusahaan() {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="w-full p-5">
        <div className="flex items-center gap-1 mb-3">
          <a href="/alumni/perusahaan">
            <IconArrowNarrowLeft />
          </a>
          <h1 className="text-xl">Detail Perusahaan</h1>
        </div>
        <div className="">
          <img
            src="/Img/building.jpg"
            className="rounded-xl h-[400px] w-full object-cover object-center mb-5"
            alt=""
          />
          <div className="">
            <h1 className="text-xl font-semibold mb-3">PT. ABC Company</h1>
            <h1 className="mb-3">
              Alamat : Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sed, eius.
            </h1>
            <h1>Kontak :</h1>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[30%] border-s p-5">
        <div className="flex items-center justify-between px-1 mb-5">
          <h1 className="font-semibold">Lowongan</h1>
          <IconBriefcase color="#4A9CCB" />
        </div>
        <div className="flex items-center justify-between mb-3 hover:text-white hover:bg-[#4A9CCB]/75 p-1 px-2 rounded-md">
          <div className="">
            <p>Lowongan Admin</p>
            <small className="opacity-75">PT. ABC Company</small>
          </div>
          <a href="">
            <IconArrowUpRight />
          </a>
        </div>
        <div className="flex items-center justify-between mb-3 hover:text-white hover:bg-[#4A9CCB]/75 p-1 px-2 rounded-md">
          <div className="">
            <p>Lowongan Admin</p>
            <small className="opacity-75">PT. ABC Company</small>
          </div>
          <a href="">
            <IconArrowUpRight />
          </a>
        </div>
        <div className="flex items-center justify-between mb-3 hover:text-white hover:bg-[#4A9CCB]/75 p-1 px-2 rounded-md">
          <div className="">
            <p>Lowongan Admin</p>
            <small className="opacity-75">PT. ABC Company</small>
          </div>
          <a href="">
            <IconArrowUpRight />
          </a>
        </div>
      </div>
    </div>
  );
}
