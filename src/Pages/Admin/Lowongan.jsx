import { IconMessage } from "@tabler/icons-react";
import { IconSearch, IconTrash } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import CardLowongan from "../../component/Admin/CardLowongan";
import HeadPage from "../../component/Admin/HeadPage";
import ModalTambah from "../../component/Admin/ModalTambah";

const Lowongan = () => {
  return (
    <>
      <div className="card-admin flex flex-col gap-y-5 mb-3">
        <HeadPage>
          <HeadPage.Title>Daftar Lowongan</HeadPage.Title>
          <HeadPage.SearchAdd>
            <ModalTambah></ModalTambah>
          </HeadPage.SearchAdd>
        </HeadPage>
        <CardLowongan></CardLowongan>
        <CardLowongan></CardLowongan>
        {/* <div className="bg-[#efefef] rounded-lg p-4 flex gap-x-5">
          <div className="flex-initial bg-[#D9D9D9] rounded-md text-center text-4xl">
            Image
          </div>
          <div className="flex-1">
            <p className="text-3xl">PT. Sejahtera Bersama</p>
            <p className="text-2xl mb-4">
              Alamat : Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Ipsum placeat dolorum architecto sit doloremque totam ipsam
              facilis voluptatibus atque praesentium?
            </p>
            <p className="text-2xl">Kualifikasi : </p>
            <ul className="list-disc ml-5">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
            <div className="flex justify-end gap-x-3">
              <Link to='1' className="border-black border-2 rounded-md p-[1px] hover:bg-black hover:text-white transition-all duration-300 drop-shadow-md">
                <IconTrash className="w-8 h-8" />
              </Link>
              <Link to='1' className="bg-black text-white border-black border-2 rounded-md py-[1px] px-4 flex gap-x-2 items-center hover:bg-inherit hover:text-black transition-all duration-300 drop-shadow-md">
                <IconMessage className="w-8 h-8" />
                <span className="text-xl">Chat</span>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Lowongan;
