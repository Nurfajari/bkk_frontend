import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { IconMenu2 } from "@tabler/icons-react";
import { IconSquareRoundedX } from "@tabler/icons-react";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("statusLogin");
    return navigate("/login");
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white py-2 border-b">
      <div className="flex justify-between items-center md:px-3">
        <div className="flex items-center gap-10 md:mx-7 p-2 font-jura">
          <div className="flex items-center gap-2">
            <img src="/Img/logo.png" className="w-8 rounded-full" alt="" />
            <h1 className="font-bold">BKK NEPPER</h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="flex gap-8 items-center justify-center hidden md:inline-block">
          <a
            href="/alumni"
            className="hover:border hover:bg-[#4A9CCB] hover:text-white py-2 px-5 rounded-md"
          >
            Home
          </a>
          <a
            href="/alumni/lowongan"
            className="hover:border hover:bg-[#4A9CCB] hover:text-white py-2 px-5 rounded-md"
          >
            Lowongan
          </a>
          <a
            href="/alumni/perusahaan"
            className="hover:border hover:bg-[#4A9CCB] hover:text-white py-2 px-5 rounded-md"
          >
            Perusahaan
          </a>
          <button
            onClick={handleLogOut}
            className="hover:border hover:bg-[#4A9CCB] hover:text-white py-2 px-5 rounded-md"
          >
            Logout
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="me-3 inline-block md:hidden">
          <button className="menuButton" onClick={toggleMenu}>
            <IconMenu2 />
          </button>
        </div>

        {/* Sidebar Menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50"
            onClick={closeMenu}
          >
            <div className="fixed flex flex-col justify-between inset-y-0 right-0 max-w-xs w-full bg-white p-4">
              <div className="">
                <a
                  href="/alumni"
                  className="block py-2 px-4 hover:bg-[#4A9CCB] w-full hover:text-white rounded-md"
                >
                  Home
                </a>
                <a
                  href="/alumni/lowongan"
                  className="block py-2 px-4 hover:bg-[#4A9CCB] w-full hover:text-white rounded-md"
                >
                  Lowongan
                </a>
                <a
                  href="/alumni/perusahaan"
                  className="block py-2 px-4 hover:bg-[#4A9CCB] w-full hover:text-white rounded-md"
                >
                  Perusahaan
                </a>
                <button
                  onClick={handleLogOut}
                  className="block text-start py-2 px-4 hover:bg-[#4A9CCB] w-full hover:text-white rounded-md"
                >
                  Logout
                </button>
              </div>
              <button
                onClick={closeMenu}
                className="m-5 border p-2 flex items-center gap-2 justify-center text-white bg-red-500 rounded-md"
              >
                <IconSquareRoundedX />
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
