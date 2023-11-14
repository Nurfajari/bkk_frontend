import { Outlet } from "react-router-dom";
import Navbar from "../component/Alumni/Navbar";
import Footer from "../component/Alumni/Footer";

const AlumniLayout = () => {
  return <div className="snap-y">
    <Navbar />

    <Outlet />

    <Footer />

  </div>;
};

export default AlumniLayout;
