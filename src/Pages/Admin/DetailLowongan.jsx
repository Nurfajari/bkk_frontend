import HeadPage from "../../component/Admin/HeadPage";

export default function DetailLowongan()
{
    return(
        <div className="">
            <div className="card-admin flex flex-col gap-y-5 mb-5">
                <HeadPage>
                    <HeadPage.Title>Detail Lowongan</HeadPage.Title>
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
                <div className="grid grid-cols-3">
                    <div className="col-span-2">
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
                        <div className="flex flex-wrap gap-5">
                            <img src="/Img/l1.jpeg" className="w-24 h-35" alt="" />
                            <img src="/Img/l2.jpeg" className="w-24 h-35" alt="" />
                            <img src="/Img/l3.jpeg" className="w-24 h-35" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 items-center border-2 p-2 w-max rounded-md">
                <a href="" className="transition ease-in-out delay-150 text-black py-1 px-7 rounded-md hover:bg-black hover:text-white">Chat</a>
                <a href="" className="transition ease-in-out delay-150 text-black py-1 px-7 rounded-md hover:bg-lime-600 hover:text-white">Edit</a>
                <a href="" className="transition ease-in-out delay-150 text-black py-1 px-7 rounded-md hover:bg-red-600 hover:text-white">Hapus</a>
            </div>
        </div>
    )
}