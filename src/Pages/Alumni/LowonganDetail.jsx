import { IconArrowNarrowLeft } from "@tabler/icons-react";
import CardLowonganDetail from "../../component/Alumni/CardLowonganDetail";
import { Link } from "react-router-dom";

const AlumniLowonganDetail = () => {
    return (
        <div className="flex flex-row p-5 gap-5">
            <div className="w-[70%]">
                <a
                    href="/alumni/lowongan"
                    className="flex items-center gap-2 text-xl mb-3"
                >
                    <IconArrowNarrowLeft size={24} />
                    Detail Lowongan
                </a>
                <div className="">
                    <img
                        src="/Img/card_img.jpg"
                        className="w-full h-38 md:w-full rounded-xl object-cover md:h-[400px]"
                        alt=""
                    />
                    <h1 className="font-semibold text-xl my-2">
                        PT. Air Logistic
                    </h1>
                    <h1 className="my-2">Alamat : </h1>
                    <p className="my-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laboriosam, ullam atque ea eligendi, molestiae tempora,
                        labore maiores ipsa veritatis optio totam nemo in
                        numquam dolores voluptatibus! Necessitatibus nulla
                        voluptatibus eos?
                    </p>
                </div>
                <p className="my-2">Kontak : ...</p>
                <h1>Kualifikasi : </h1>
                <ul className="list-inside list-disc">
                    <li>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Doloremque, aliquid?
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Doloremque, aliquid?
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Doloremque, aliquid?
                    </li>
                </ul>
            </div>
            <div className="w-[30%] mt-10">
                <button className="w-full bg-[#4A9CCB] py-2 px-4 text-white font-semibold rounded-md mb-3">
                    Daftar
                </button>
                <button className="w-full border border-[#4A9CCB] py-2 px-4 text-[#4A9CCB] font-semibold rounded-md">
                    Chat BKK
                </button>
            </div>
        </div>
    );
};

export default AlumniLowonganDetail;
