import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="bg-white pt-5 rounded-xl h-full drop-shadow-lg flex flex-col overflow-hidden">
      <div className="mb-10">
        <h1 className="text-center text-base">Logo</h1>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="p-7 text-[16px] flex flex-col gap-y-8">
          <Link
            to='/admin'
            className="group w-full relative transition-all duration-500"
          >
            Dashboard
            <div className="absolute bottom-0 w-0 bg-black h-[1px] transition-all duration-500 group-hover:w-full"></div>
          </Link>
          <Link
            to="/admin/akun-admin"
            className="group w-full relative transition-all duration-500"
          >
            Akun Admin
            <div className="absolute bottom-0 w-0 bg-black h-[1px] transition-all duration-500 group-hover:w-full"></div>
          </Link>
          <Link
            to="/admin/perusahaan"
            className="group w-full relative transition-all duration-500"
          >
            Perusahaan
            <div className="absolute bottom-0 w-0 bg-black h-[1px] transition-all duration-500 group-hover:w-full"></div>
          </Link>
          <Link
            to="/admin/lowongan"
            className="group w-full relative transition-all duration-500"
          >
            Lowongan
            <div className="absolute bottom-0 w-0 bg-black h-[1px] transition-all duration-500 group-hover:w-full"></div>
          </Link>
          <Link
            to="/admin/pelamar"
            className="group w-full relative transition-all duration-500"
          >
            Pelamar
            <div className="absolute bottom-0 w-0 bg-black h-[1px] transition-all duration-500 group-hover:w-full"></div>
          </Link>
        </div>
        <div className="bg-black py-2 text-center">
          <span className="text-white text-xs">Created By ...</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
