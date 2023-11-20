import { IconChevronCompactDown, IconEdit, IconFilePencil, IconInfoCircle } from "@tabler/icons-react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { IconTrash } from "@tabler/icons-react";

export default function CardLowongan()
{
    return(
        <div className="bg-white shadow-md border rounded-lg">
            <div className="p-2"> 
                <div className="p-3 flex justify-between items-center">
                    <div className="flex items-center gap-5">
                        <div className="">
                            <img src="/Img/card_img.jpg" className="w-20 h-20 object-cover rounded-full" alt="" />
                        </div>
                        <div className="">                            
                            <h1 className="text-3xl mb-2">
                                <a href="/admin/lowongan/detail">PT Verta Logistic</a>
                            </h1>
                            <h1 className="text-green-500">*Lowongan Buka</h1>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <a href="" className="bg-black text-white p-1 rounded-full flex">
                            <IconEdit />
                        </a>
                        <button
                            onClick={() => {
                            const confirmation = window.confirm(`Apakah Anda yakin ingin menhapus perusahaan ini`);
                            if (confirmation) {
                                handleDelete(perusahaanData.id_perusahaan);
                            }
                            }}
                            href=""
                            className="border border-black p-1 rounded-full flex hover:bg-black hover:text-white transition ease-in-out delay-150"
                        >
                            <IconTrash />
                        </button>
                    </div>
                </div>
                {/* <div className="p-2 flex gap-3">
                    <img src="/Img/card_img.jpg" className="w-[50%] h-auto object-cover rounded-md" alt="" />
                    <div className="flex flex-col justify-between">
                        <div className="">
                            <div className="mb-3">                            
                                <h1 className="text-xl font-medium">Alamat :</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quam ducimus nemo, excepturi aut non saepe. Expedita, facere praesentium illo accusamus aperiam, eius similique in ea dolorem et neque fugiat.</p>
                            </div>
                            <div className="">
                                <b>Kualifikasi :</b>
                                <ul className="list-disc list-inside ps-3">
                                    <li>Maks 25 tahun</li>
                                    <li>Pekerja keras</li>
                                    <li>Dll</li>
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <a href="" className="py-1 px-5 bg-red-600 text-white rounded-sm flex items-center justify-center">
                                <IconTrash className="text-white"/>hapus
                            </a>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}