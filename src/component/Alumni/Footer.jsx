import { IconBrandFacebook, IconBrandYoutube } from "@tabler/icons-react";
import { IconBrandInstagram } from "@tabler/icons-react";

export default function Footer()
{
    return(
        <footer>
            <div className="bg-black text-white font-jura">
                <div className="p-5 mb-10 text-center mb-[100px]">
                    <div className="mb-5">
                        <img src="/Img/logo.png" className="w-24 rounded-xl mb-3 m-auto" alt="" />
                        <p>Jl. Perjuangan By Pass Sunyaragi, Cirebon, Indonesia 45132</p>
                    </div>
                    {/* <div className="flex gap-10 justify-center mb-8">
                        <div className="">
                            <a href="/alumni">Home</a>
                        </div>
                        <div className="">
                            <a href="/alumni/lowongan">Lowongan</a>
                        </div>
                        <div className="">
                            <a href="/alumni/perusahaan">Perusahaan</a>
                        </div>
                    </div> */}
                    <div className="flex justify-center gap-5">
                        <a href="">
                            <IconBrandInstagram/>
                        </a>
                        <a href="">
                            <IconBrandFacebook/>
                        </a>
                        <a href="">
                            <IconBrandYoutube/>
                        </a>
                    </div>
                </div>
                {/* <div className="grid grid-cols-3 p-5 gap-5 mb-10">
                    <div className="">
                        <div className="mb-5 border-b-2 pb-2">
                            <h1 className="text-2xl">Tentang Sekolah</h1>
                        </div>
                        <div className="">
                            <p>Jl. Perjuangan By Pass Sunyaragi, Cirebon, Indonesia 45132</p>
                            <p>Telp & Fax: +62-0231-480202</p>
                            <p>Email: info@smkn1-cirebon.sch.id</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="mb-5 border-b-2 pb-2">
                            <h1 className="text-2xl">Sosial Media</h1>
                        </div>
                        <div className="">
                            <p>Facebook : SMK Negeri 1 Cirebon</p>
                            <p>Instagram : @smkn1crb</p>
                            <p>Youtube : SMK Negeri 1 Cirebon Official</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="mb-5 border-b-2 pb-2">
                            <h1 className="text-2xl">Menu</h1>
                        </div>
                        <div className="">
                            <div className="">
                                <a href="/alumni">Home</a>
                            </div>
                            <div className="">
                                <a href="/alumni/lowongan">Lowongan</a>
                            </div>
                            <div className="">
                                <a href="/alumni/perusahaan">Perusahaan</a>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="text-center py-3 border-t-2">
                    <p>Copyright By Smkn 1 Kota Cirebon</p>
                </div>
            </div>
        </footer>
    )
}