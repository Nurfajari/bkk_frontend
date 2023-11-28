import Button from "../../component/Alumni/Button";
import CardLowongan from "../../component/Alumni/CardLowongan";
import CardPerusahaan from "../../component/Alumni/CardPerusahaan";
import CarouselSlide from "../../component/Alumni/CarouselSlide";
import Carousel from "../../component/Alumni/CarouselSlide";
import Footer from "../../component/Alumni/Footer";
import Navbar from "../../component/Alumni/Navbar";
import SectionUse from "../../component/Alumni/SectionUse";

export default function IndexAlumni() {
  return (
    <>
      <div className="h-[550px] bg-[url('./Img/bg1.jpg')] bg-cover">
        <div className="bg-gradient-to-r from-black to-white/0 h-[550px]">
          <div className="w-[50%] p-20 ">
            <h1 className="font-jura font-semibold text-4xl mb-5 mt-11 text-white">
              Welcome to BKK SMK Negeri 1 Kota Cirebon
            </h1>
            <p className="text-white opacity-75">
              Bursa Kerja Khusus (BKK) adalah sebuah lembaga yang dibentuk di
              Sekolah Menengah Kejuruan Negeri dan Swasta, sebagai unit pelaksana
              yang memberikan pelayanan dan informasi lowongan kerja, penyaluran dan penempatan tenaga kerja.
            </p>
            <Button text="Cari Lowongan" className="mt-8 bg-blue-600 hover:bg-blue-600/75 text-white rounded-md py-2 px-5"></Button>
          </div>
        </div>
      </div>
      <div className="">
        <SectionUse></SectionUse>
      </div>
      <div className="mb-10">
        <h1 className="text-center text-2xl font-jura font-bold mb-10">Perusahaan Yang Bekerja Sama</h1>
        <div className="flex flex-wrap gap-10 px-3 justify-center">
          <CardPerusahaan></CardPerusahaan>
          <CardPerusahaan></CardPerusahaan>
          <CardPerusahaan></CardPerusahaan>
          <CardPerusahaan></CardPerusahaan>
          <CardPerusahaan></CardPerusahaan>
          <CardPerusahaan></CardPerusahaan>
        </div>
      </div>
      <div className="snap-start">
        <h1 className="text-center text-3xl">Lowongan</h1>
        <div className="p-3 py-10 grid grid-cols-2 gap-5">
          <CardLowongan />
          <CardLowongan />
          <CardLowongan />
          <CardLowongan />
        </div>
      </div>
      <div className="mb-5">
        <div className="p-6">
          <div className="flex justify-center gap-7">
            <img src="Img/logo2.png" className="w-40 grayscale hover:grayscale-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" alt="" />
            <img src="Img/Morfonica.png" className="w-40 grayscale hover:grayscale-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" alt="" />
            <img src="Img/Pastel_Palettes.png" className="w-40 grayscale hover:grayscale-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" alt="" />
            <img src="Img/Roselia.png" className="w-40 grayscale hover:grayscale-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" alt="" />
            <img src="Img/RAS.png" className="w-40 grayscale hover:grayscale-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
