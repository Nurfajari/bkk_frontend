import CardLowonganDetail from "../../component/Alumni/CardLowonganDetail";
import Footer from "../../component/Alumni/Footer";
import Navbar from "../../component/Alumni/Navbar";

const AlumniLowonganDetail = () => {
  return (
    <>
      <Navbar></Navbar>
      <h1 className="text-center font-jura font-bold text-3xl m-10">
        LOWONGAN
      </h1>
      <div className="container-full m-10">
        <CardLowonganDetail></CardLowonganDetail>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AlumniLowonganDetail;
