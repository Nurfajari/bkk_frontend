import { useEffect, useState } from "react";
import HeadPage from "../../component/Admin/HeadPage";
import { Link } from "react-router-dom";

export default function DetailLowongan()
{
    const [pelamar, setPelamar] = useState([]);

    useEffect(() => {
      setPelamar([
        {
          nama: "FaizalAgathon@gmail.com",
          perusahaan: "Mohamad Faizal Agathon",
          status: "L",
        },
        {
          nama: "AzisNurfajari@gmail.com",
          perusahaan: "Muhammad Azis Nurfajari",
          status: "L",
        },
        {
          nama: "YoumiyaHina@gmail.com",
          perusahaan: "Hina Youmiya",
          status: "P",
        },
      ]);
    }, []);

    return(
        <div className="">
            <div className="card-admin flex flex-col gap-y-5 mb-5">
                <HeadPage>
                    <HeadPage.Title>Detail Lowongan</HeadPage.Title>
                    <div className="flex gap-2 items-center border-2 p-1 w-max rounded-md">
                        <a href="" className="transition ease-in-out delay-150 text-black py-1 px-7 rounded-md hover:bg-black hover:text-white">Chat</a>
                        <a href="" className="transition ease-in-out delay-150 text-black py-1 px-7 rounded-md hover:bg-lime-600 hover:text-white">Edit</a>
                        <a href="" className="transition ease-in-out delay-150 text-black py-1 px-7 rounded-md hover:bg-red-600 hover:text-white">Hapus</a>
                    </div>
                </HeadPage>
                <div className="flex gap-3 items-center justify-between border-b-2 pb-3 border-slate-300">
                    <div className="flex items-center gap-3">
                        <div className="">
                            <img src="/Img/card_img.jpg" className="w-20 h-20 object-cover rounded-full" alt="" />
                        </div>
                        <div className="">                            
                            <h1 className="text-3xl mb-2">
                                <a href="">PT Verta Logistic</a>
                            </h1>
                            <h1 className="">Alamat : </h1>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="text-green-500">*Lowongan Buka</h1>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="">
                        <h1>Kualifikasi :</h1>
                        <ul className="list-decimal list-inside pl-3">
                            <li>Berpenampilan menarik</li>
                            <li>Lulusan SMK atau sederajat</li>
                            <li>Mudah berkomunikasi</li>
                            <li>Team Worker</li>
                            <li>Sabar</li>
                        </ul>
                    </div>
                    <div className="">
                        <h1 className="mb-5">Flier/Brosur :</h1>
                        <div className="">
                            <img src="/Img/l1.jpeg" className="w-44" alt="" />
                        </div>
                    </div>
                </div>
                <div className="table rounded-md">
                    <h1 className="text-xl mb-3">Daftar Pelamar</h1>
                    <table className="w-full border-collapse">
                        <thead className="text-left text-md border-b-2 border-black">
                        <tr>
                            <th className="p-3">#</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Nama</th>
                            <th className="p-3">JK</th>
                        </tr>
                        </thead>
                        <tbody className="text-sm py-2">
                        {pelamar.map((item, i) => {
                            return (
                            <tr
                                className={"border-t-2 " + (i == 0 && "border-black")}
                                key={i}
                            >
                                <td className="p-3">{i + 1}</td>
                                <td className="p-3">{item.nama}</td>
                                <td className="p-3">{item.perusahaan}</td>
                                <td className="p-3">{item.status}</td>
                            </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}