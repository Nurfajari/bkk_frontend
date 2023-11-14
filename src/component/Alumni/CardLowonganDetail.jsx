import { IconChevronCompactDown, IconFilePencil } from "@tabler/icons-react";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function CardLowonganDetail()
{
    return(
        <div className="bg-white shadow-md">
            <img src="/Img/card_img.jpg" className="w-full object-cover h-[400px]" alt="" />
            <div className="p-5">
                <div className="p-2">
                    <div className="mb-5">
                        <h1 className="text-3xl mb-2 font-semi-bold">PT Verta Logistic</h1>
                        <h1 className="text-gray-500">Alamat :</h1>
                    </div>
                    <div className="mb-8">                        
                        <h1>Kualifikasi:</h1>
                        <ol typeof="list" className="me-4 mb-3 list-disc ps-8">
                            <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, at!</p></li>
                            <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, at!</p></li>
                            <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, at!</p></li>
                            <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, at!</p></li>
                        </ol>
                    </div>
                    <div class="flex flex-wrpa gap-2">
                        <Button className="bg-black w-[80%] rounded-0 text-white py-1 px-2" text="Daftar"></Button>
                        <Button className="bg-white w-[20%] rounded-0 text-black py-1 px-2 border-neutral-950 border" text="Chat"></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}