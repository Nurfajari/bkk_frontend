import { Outlet } from "react-router-dom";
import Footer from "../component/Alumni/Footer";
import Navbar from "../component/Alumni/Navbar";

const AlumniLayout = () => {
  return (
    <div className="snap-y">
      <Navbar />

      <Outlet />

      <Footer />

    </div>
  );
};

export default AlumniLayout;
