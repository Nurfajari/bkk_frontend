import { IconSearch } from "@tabler/icons-react";
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
      <div className="h-screen md:h-screen bg-[url('./Img/bg1.jpg')] bg-center bg-auto md:bg-cover">
        <div className="bg-gradient-to-t md:bg-gradient-to-t from-black to-white/0 md:from-black md:to-white/0 bg-black/75 h-screen md:h-screen">
          <div className="w-full md:w-[50%] p-[70px] md:p-20 text-center md:text-center my-auto md:m-auto">
            <h1 className="font-jura font-semibold text-2xl md:text-4xl mb-5 mt-0 md:mt-11 text-white md:text-white">
              Welcome to BKK SMK Negeri 1 Kota Cirebon
            </h1>
            <p className="text-white md:text-white text-sm md:text-md opacity-75">
              Bursa Kerja Khusus (BKK) adalah unit pelaksana yang memberikan
              pelayanan dan informasi lowongan kerja, penyaluran dan penempatan
              tenaga kerja yang ada Sekolah Menengah Kejuruan Negeri dan Swasta
            </p>
            <button className="flex items-center mx-auto gap-2 mt-8 bg-gradient-to-r from-cyan-500 to-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 text-white rounded-md py-3 px-5">
              <IconSearch />
              Cari Lowongan
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black h-contain md:h-52">
        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-7">
            <img
              src="Img/logo2.png"
              className="w-52 md:w-40 grayscale hover:grayscale-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
              alt=""
            />
            <img
              src="Img/Morfonica.png"
              className="w-52 md:w-40 grayscale hover:grayscale-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
              alt=""
            />
            <img
              src="Img/Pastel_Palettes.png"
              className="w-52 md:w-40 grayscale hover:grayscale-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
              alt=""
            />
            <img
              src="Img/Roselia.png"
              className="w-52 md:w-40 grayscale hover:grayscale-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
              alt=""
            />
            <img
              src="Img/RAS.png"
              className="w-52 md:w-40 grayscale hover:grayscale-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="">
        <SectionUse></SectionUse>
      </div>
      {/* <div className="mb-10">
        <h1 className="text-center text-xl md:text-2xl font-jura font-bold mb-10">
          Perusahaan Yang Bekerja Sama
        </h1>
        <div className="flex flex-col w-full items-center md:flex-row md:flex-wrap gap-5 px-1 justify-center">
          <CardPerusahaan></CardPerusahaan>
          <CardPerusahaan></CardPerusahaan>
          <CardPerusahaan></CardPerusahaan>
          <CardPerusahaan></CardPerusahaan>
        </div>
      </div> */}
      <div className="snap-start">
        <h1 className="text-center text-xl md:text-3xl">Lowongan</h1>
        <div className="px-5 py-10 flex flex-col md:flex-row md:flex-wrap gap-5">
          <CardLowongan />
          <CardLowongan />
          <CardLowongan />
          <CardLowongan />
        </div>
      </div>
      <div className="p-6">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-10 md:p-20 rounded-xl">
          <div className="text-start text-white md:text-center mb-10">
            <h1 className="font-jura mb-5 text-xl md:text-3xl font-bold">
              Yuk mulai cari pekerjaan Bersama kami
            </h1>
            <p className="opacity-75 text-sm md:text-md">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              quam accusantium saepe laudantium dignissimos, similique,
              voluptatibus, et atque inventore officia earum minus amet neque
              consequatur? Sunt provident et aliquid perspiciatis.
            </p>
          </div>
          <div className="text-start md:text-center">
            <button className="bg-black text-white p-2 px-5 font-semibold font-jura rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
