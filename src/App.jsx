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

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* TODO Sementara path nya '/admin' dulu nanti diganti '/' sama kaya alumni dashboard */}

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<IndexAdmin />} />
            <Route path="akun-admin" element={<AkunAdmin />} />
            <Route path="perusahaan" element={<Perusahaan />} />
            <Route path="lowongan" element={<Lowongan />} />
            <Route path="lowongan/1" element={<ChatLowongan />} />
            <Route path="pelamar" element={<Pelamar />} />
          </Route>
          {/* NOTE Route alumni belum bisa memanggil page */}
          <Route path="/alumni">
            <Route index element={<IndexAlumni />} />
            <Route path="lowongan" element={<AlumniLowongan />} />
            <Route path="perusahaan" element={<PagePerusahaan />} />
          </Route>
          <Route
            path="*"
            element={
              <h1 className="text-5xl text-center mt-10">Page Not Found</h1>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
