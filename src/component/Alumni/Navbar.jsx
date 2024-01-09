import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Navbar()
{
    const navigate = useNavigate()
    const handleLogOut = () => {
        localStorage.removeItem('statusLogin')
        return navigate('/login')
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-light py-2">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-10 mx-7 p-2 font-jura">
                    <div className="">
                        <img src="/Img/logo.png" className="w-8 rounded-full" alt="" />
                    </div>
                </div>
                <div className="flex gap-6">
                    <a href="/alumni" className="transtition all hover:border px-3 rounded-md delay-150 duration-75">Home</a>
                    <a href="/alumni/lowongan" className="transtition all hover:border px-3 rounded-md delay-150 duration-75">Lowongan</a>
                    <a href="/alumni/perusahaan" className="transtition all hover:border px-3 rounded-md delay-150 duration-75">Perusahaan</a>
                    <button onClick={handleLogOut} className="transtition all hover:border px-3 rounded-md delay-150 duration-75">Logout</button>
                </div>
                <div className="me-6">
                    <a href="">Sign In / </a>
                    <a href="">Sign Up</a>
                </div>
            </div>
        </nav>
    )
}