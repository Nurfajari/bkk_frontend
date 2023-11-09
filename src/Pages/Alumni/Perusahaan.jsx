import CardPerusahaan from "../../component/Alumni/CardPerusahaan";
import Navbar from "../../component/Alumni/Navbar";

export default function PagePerusahaan()
{
    return(
        <div className="">
            <Navbar></Navbar>
            <div className="">
                <CardPerusahaan></CardPerusahaan>
                <CardPerusahaan></CardPerusahaan>
            </div>
        </div>
    )
}