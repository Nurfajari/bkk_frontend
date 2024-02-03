import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Navbar() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("statusLogin");
    return navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white py-2 border-b">
      <div className="flex justify-between items-center px-3">
        <div className="flex items-center gap-10 mx-7 p-2 font-jura">
          <div className="flex items-center gap-2">
            <img src="/Img/logo.png" className="w-8 rounded-full" alt="" />
            <h1 className="font-bold">BKK NEPPER</h1>
          </div>
        </div>
        <div className="flex gap-8 items-center justify-center">
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
        {/* <div className="me-6">
          <a href="" className="text-green-500">
            Sign In{" "}
          </a>
          ||
          <a href="" className="text-red-500">
            {" "}
            Sign Up
          </a>
        </div> */}
      </div>
    </nav>
  );
}
