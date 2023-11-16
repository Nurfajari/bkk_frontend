import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import IndexAdmin from "./Pages/Admin/IndexAdmin";
import AkunAdmin from "./Pages/Admin/AkunAdmin";
import Perusahaan from "./Pages/Admin/Perusahaan";
import Lowongan from "./Pages/Admin/Lowongan";
import ChatLowongan from "./Pages/Admin/ChatLowongan";
import Pelamar from "./Pages/Admin/Pelamar";
import AdminLayout from "./Layout/AdminLayout";
import IndexAlumni from "./Pages/Alumni/IndexAlumni";
import PagePerusahaan from "./Pages/Alumni/Perusahaan";
import AlumniLowongan from "./Pages/Alumni/Lowongan";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import AlumniLowonganDetail from "./Pages/Alumni/LowonganDetail";
import AlumniLayout from "./Layout/AlumniLayout";

export default function App() {
  const statusLoginUser = localStorage.getItem("statusLogin") ?? null;
  const parseStatusLoginUser = JSON.parse(statusLoginUser);

  console.log("statusLogin", JSON.parse(statusLoginUser));

  return (
    <>
      <Router>
        <Routes>
          {/* TODO Sementara path nya '/admin' dulu nanti diganti '/' */}

          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<IndexAdmin />} />
            <Route path="akun-admin" element={<AkunAdmin />} />
            <Route path="perusahaan" element={<Perusahaan />} />
            <Route path="lowongan" element={<Lowongan />} />
            <Route path="lowongan/1" element={<ChatLowongan />} />
            <Route path="pelamar" element={<Pelamar />} />
          </Route>
          <Route path="/alumni" element={<AlumniLayout />}>
            <Route index element={<IndexAlumni />} />
            <Route path="lowongan" element={<AlumniLowongan />} />
            <Route path="lowongan/detail" element={<AlumniLowonganDetail />} />
            <Route path="perusahaan" element={<PagePerusahaan />} />
          </Route>

          <Route
            path="*"
            element={
              <div className="h-screen w-full">
                <img
                  src="/Img/page-not-found.png"
                  alt=""
                  className="image-cover object-center"
                />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
