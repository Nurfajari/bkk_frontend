export default function Footer()
{
    return(
        <footer>
            <div className="bg-black text-white font-jura">
                <div className="grid grid-cols-3 p-5 gap-5 mb-10">
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
                            {/* <p><IconBrandFacebook/></p> */}
                            <p>Facebook : SMK Negeri 1 Cirebon</p>
                            <p>Instagram : @smkn1crb</p>
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
                                <a href="">Home</a>
                            </div>
                            <div className="">
                                <a href="">Lowongan</a>
                            </div>
                            <div className="">
                                <a href="">Perushaan</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center py-3 border-t-2">
                    <p>Created By ANDes</p>
                </div>
            </div>
        </footer>
    )
}