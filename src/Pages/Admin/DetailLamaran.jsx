import { IconArrowNarrowLeft } from "@tabler/icons-react";
import HeadPage from "../../component/Admin/HeadPage";
import { Link } from "react-router-dom";

export default function DetailLamaran()
{
    return(
        <div className="card-admin flex flex-col gap-y-5">
            <HeadPage>
                <HeadPage.Title>
                        <Link to="/admin/pelamar">
                            <IconArrowNarrowLeft/>
                        </Link>
                    Detail Lamaran
                </HeadPage.Title>
                <HeadPage.SearchAdd></HeadPage.SearchAdd>
            </HeadPage>
            <div className="px-6 rounded-md">
                <div className="flex gap-5">
                    <div className="mb-5">
                        <img src="/public/Img/profile.jpg" className="object-cover w-36 h-48" alt="" />
                    </div>
                    <div className="">
                        <h1>Nama : Muhammad Azis Nurfajari</h1>
                        <h1>Jenis Kelamin : Laki-laki</h1>
                        <h1>Lulusan : SMKN 1 Kota Cirebon</h1>
                        <h1>Usia : 18</h1>
                        <h1>Email : Nurfajari@gmail.com</h1>
                    </div>
                </div>
                <div className="">
                    <h1>Kualifikasi :</h1>
                    <div className="ps-5">
                        <p>1. Berpenampilan Menarik</p>
                        <p>2. Lulusan SMK/SMA atau sederajat</p>
                        <p>3. Disiplin waktu</p>
                        <p>4. Team Worker</p>
                        <p>5. Sabar</p>
                    </div>
                </div>
            </div>
        </div>
    )
}