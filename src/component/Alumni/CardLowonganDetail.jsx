import { IconChevronCompactDown, IconFilePencil } from "@tabler/icons-react";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function CardLowonganDetail()
{
    return(
        <div className="bg-white">
            <img src="/Img/card_img.jpg" className="w-full object-cover h-[400px]" alt="" />
            <div className="p-2">
                <div className="p-2">
                    <div className="">
                        <h1 className="text-3xl mb-2 font-semi-bold">PT Verta Logistic</h1>
                        <h1 className="text-gray-500">Alamat</h1>

                        <h1>Kualifikasi:</h1>
                        <ul typeof="list" className="me-4 mb-3">
                            <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, at!</p></li>
                            <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, at!</p></li>
                            <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, at!</p></li>
                            <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, at!</p></li>
                        </ul>
                        <div class="grid grid-cols-2 gap-2">
                            <div>
                                <Button className="bg-black w-full rounded-0 text-white py-1 px-2" text="Daftar"></Button>
                            </div>
                            <div>
                                <Button className="bg-white w-full rounded-0 text-black py-1 px-2 border-neutral-950" text="Menu"></Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}