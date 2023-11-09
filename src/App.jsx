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
          <Route path="/alumni" element={<IndexAlumni/>}></Route>
          <Route path ="/pelamar" element={<h1>Halaman belum dibuat</h1>}>
            
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
