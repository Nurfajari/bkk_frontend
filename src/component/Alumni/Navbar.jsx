import Button from "./Button";

export default function Navbar()
{
    return(
        <nav className="navbar navbar-expand-lg navbar-ligh mb-5 bg-white py-2">
            <div className="flex justify-between items-center mx-7 p-3 font-jura">
                <div className="">
                    <img src="/Img/logo.png" className="w-8 rounded-full" alt="" />
                </div>
                <div className="flex gap-10 font-bold">
                    <a href="/alumni">Home</a>
                    <a href="/alumni/lowongan">Lowongan</a>
                    <a href="/alumni/perusahaan">Perusahaan</a>
                    <a href="">Logout</a>
                </div>
            </div>
        </nav>
    )
}