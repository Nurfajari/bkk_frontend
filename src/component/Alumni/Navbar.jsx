import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Navbar() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("statusLogin");
    return navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white py-2 mb-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-10 mx-7 p-2 font-jura">
          <div className="">
            <img src="/Img/logo.png" className="w-8 rounded-full" alt="" />
          </div>
          <div className="flex gap-6 items-center">
            <a
              href="/alumni"
              className="hover:border hover:border-black px-3 rounded-md"
            >
              Home
            </a>
            <a
              href="/alumni/lowongan"
              className="hover:border hover:border-black px-3 rounded-md"
            >
              Lowongan
            </a>
            <a
              href="/alumni/perusahaan"
              className="hover:border hover:border-black px-3 rounded-md"
            >
              Perusahaan
            </a>
            <button
              onClick={handleLogOut}
              className="hover:border hover:border-black px-3 rounded-md"
            >
              Logout
            </button>
          </div>
        </div>
        <div className="me-6">
          <a href="" className="text-green-500">
            Sign In{" "}
          </a>
          ||
          <a href="" className="text-red-500">
            {" "}
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}
