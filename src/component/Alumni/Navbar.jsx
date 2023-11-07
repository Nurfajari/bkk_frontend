import Button from "./Button";

export default function Navbar()
{
    return(
        <nav className="navbar navbar-expand-lg navbar-ligh mb-5">
            <div className="flex justify-between mx-7 p-3 font-jura">
                <div className="">
                    <h1>Logo</h1>
                </div>
                <div className="flex gap-10 font-bold">
                    <a href="">Home</a>
                    <a href="">Lowongan</a>
                    <a href="">Perusahaan</a>
                    <a href="">Logout</a>
                </div>
            </div>
        </nav>
    )
}