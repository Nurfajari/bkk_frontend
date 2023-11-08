import Button from "../../component/Alumni/Button";
import CardLowongan from "../../component/Alumni/CardLowongan";
import Footer from "../../component/Alumni/Footer";
import Navbar from "../../component/Alumni/Navbar";

export default function IndexAlumni()
{
    return(
        <div className="">
            <Navbar></Navbar>
            <div className="text-center py-20 h-[550px]">
                <div className="m-10">
                    <h1 className="font-jura font-semibold text-3xl mb-5">Welcome to BKK SMK Negeri 1 Kota Cirebon</h1>
                    <p className="px-20 mb-6">Bursa Kerja Khusus (BKK) adalah sebuah lembaga yang dibentuk di Sekolah Menengah Kejuruan Negeri dan Swasta, sebagai unit pelaksana yang memberikan pelayanan dan informasi lowongan kerja, pelaksana pemasaran, penyaluran dan penempatan tenaga kerja, merupakan mitra Dinas Tenaga Kerja dan Transmigrasi.</p>
                    <Button text="Get Started" className="mt-8 bg-black text-white py-1 px-5"></Button>
                </div>
            </div>
            <div className="bg-black">
                <div className="grid grid-cols-2 auto-cols-auto	">
                    <div className="flex items-center justify-center">
                        <div className="">
                            <img src="Img/img3d.png" className="w-[500px]" alt="" />
                        </div>
                    </div>
                    <div className="text-center py-7 flex items-center justify-center">
                        <div className="">
                            <marquee behavior="" direction="up" className="">
                                <h1 className="text-4xl mb-5 text-white">Logo Perusahaan</h1>
                                <h1 className="text-4xl mb-5 text-white">Logo Perusahaan</h1>
                                <h1 className="text-4xl mb-5 text-white">Logo Perusahaan</h1>
                                <h1 className="text-4xl mb-5 text-white">Logo Perusahaan</h1>
                                <h1 className="text-4xl mb-5 text-white">Logo Perusahaan</h1>
                                <h1 className="text-4xl mb-5 text-white">Logo Perusahaan</h1>
                                <h1 className="text-4xl mb-5 text-white">Logo Perusahaan</h1>
                                <h1 className="text-4xl mb-5 text-white">Logo Perusahaan</h1>
                                <h1 className="text-4xl mb-5 text-white">Logo Perusahaan</h1>
                            </marquee>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="p-3 grid grid-cols-2 gap-3">
                    <CardLowongan></CardLowongan>
                    <CardLowongan></CardLowongan>
                </div>
            </div>
            <div className="">
                <Footer></Footer>
            </div>
        </div>
    )
}