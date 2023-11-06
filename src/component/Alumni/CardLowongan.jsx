import Button from "./Button";

export default function CardLowongan()
{
    return(
        <div className="border-solid border-2 border-slate-800 flex">
            <div className=" p-2">
                <img src="Img/card_img.jpg" className="w-60" alt="" />
            </div>
            <div className="p-2">
                <h1 className="text-3xl">Nama Perusahaan</h1>
                <h1 className="italic">Alamat : ...</h1>
                <h1 className="text-green-500">*Lowongan Buka</h1>
                <div className="text-bottom">
                    <Button text="Detail"></Button>
                </div>
            </div>
        </div>
    )
}