import { IconChevronCompactDown, IconFilePencil } from "@tabler/icons-react";
import Button from "./Button";

export default function CardLowongan()
{
    return(
        <div className="bg-white rounded-xl">
            <div className="p-2">
                <div className="p-2 flex justify-between items-center border-b-2 mb-2 border-slate-300">
                    <div className="">
                        <h1 className="text-3xl mb-2">PT Verta Logistic</h1>
                        <h1 className="text-green-500">*Lowongan Buka</h1>
                    </div>
                    <div className="">
                        <Button text="Detail" className="font-semibold"><IconChevronCompactDown/></Button>
                    </div>
                </div>
                <div className=" p-2">
                    <img src="Img/card_img.jpg" className="w-full h-40 object-cover rounded-md" alt="" />
                </div>
            </div>
        </div>
    )
}