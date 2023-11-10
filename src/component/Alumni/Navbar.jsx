import Button from "./Button";

export default function Navbar()
{
    return(
        <nav className="navbar navbar-expand-lg navbar-ligh mb-5 bg-white py-2">
            <div className="flex justify-between items-center mx-7 p-3 font-jura">
                <div className="">
                    <img src="/Img/logo.png" className="w-8 rounded-full" alt="" />
                </div>
                <div className="flex gap-12 font-bold">
                    <a href="/alumni" className="hover:bg-black hover:text-white hover:px-5 transition-all ease-in-out delay-150">Home</a>
                    <a href="/alumni/lowongan" className="hover:bg-black hover:text-white hover:px-5 transition-all ease-in-out delay-150">Lowongan</a>
                    <a href="/alumni/perusahaan" className="hover:bg-black hover:text-white hover:px-5 transition-all ease-in-out delay-150">Perusahaan</a>
                    <a href="" className="hover:bg-black hover:text-white hover:px-5 transition-all ease-in-out delay-150">Logout</a>
                </div>
            </div>
        </nav>
    )
}