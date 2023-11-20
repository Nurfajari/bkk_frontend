import { IconEdit, IconTrash } from "@tabler/icons-react";

export default function CardPerusahaan()
{
    return(
        <div className="bg-white my-5 font-jura border-s-4 border-black shadow-md card-admin">
            <div className="flex flex-wrap justify-between items-center p-3 py-5">
                <div className="flex gap-2 items-center">
                    <div className="">
                        <img src="/Img/logo3.jpg" className="w-24 rounded-full" alt="" />
                    </div>
                    <div className="">
                        <a href="" className="text-2xl mb-2 font-bold">PT Endfield Industries</a>
                        <p>Jl. Raya Cikarang Kemayoran No 27, Kecamatan Beji</p>
                    </div>
                </div>
                <div className="text-center">
                    <div className="">
                        <a href="" className="bg-black text-white p-2 rounded-full flex mb-2">
                            <IconEdit/>
                        </a>
                    </div>
                    <div className="">
                        <a href="" className="border border-black p-2 rounded-full flex hover:bg-black hover:text-white transition ease-in-out delay-150">
                            <IconTrash/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}