import { useEffect } from "react";
import Navbar from "../component/Admin/Navbar";
import TopNavbar from "../component/Admin/TopNavbar";
import { Outlet, useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {

    // Cek apakah belum login
    if (!localStorage.getItem("statusLogin")) return navigate("/login");

    // Cek apakah rolenya alumni
    if (JSON.parse(localStorage.getItem('statusLogin')).role == 'alumni') return navigate('/alumni')
  }, []);

  return (
    <>
      <div className="p-5 font-jura h-screen">
        <div className="grid grid-cols-12 h-fit">
          <div className="col-span-2 h-[calc(100vh-2.5rem)] sticky top-5">
            <Navbar />
          </div>
          <div className="col-span-10 flex flex-col gap-y-5 ms-5">
            <TopNavbar />
            <div className="z-10">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
