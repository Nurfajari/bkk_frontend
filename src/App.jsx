import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import IndexAdmin from "./Pages/Admin/IndexAdmin";
import IndexAlumni from "./Pages/Alumni/IndexAlumni";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* TODO Sementara path nya '/admin' dulu nanti diganti '/' sama kaya alumni dashboard */}
          {/* <Route path="/admin" Component={IndexAdmin} /> */}
          <Route path="/" Component={IndexAlumni} />
          <Route path="*" element={<h1 className="text-5xl text-center mt-10">Page Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}
