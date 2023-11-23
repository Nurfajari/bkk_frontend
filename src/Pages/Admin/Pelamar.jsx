import { IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeadPage from "../../component/Admin/HeadPage";
import ModalDetailTable from "../../component/Admin/ModalDetailTable";
import ModalEditTable from "../../component/Admin/ModalEditTable";

const Pelamar = () => {
  const [pelamar, setPelamar] = useState([]);

  useEffect(() => {
    setPelamar([
      {
        nama: "Moh. Faizal Agathon",
        perusahaan: "PT Pilar Solusi Indonesia",
        status: "Melamar",
      },
      {
        nama: "Moh. Agathon",
        perusahaan: "PT Pilar Solusi Indonesia",
        status: "Melamar",
      },
      {
        nama: "Moh. Faizal",
        perusahaan: "PT Pilar Solusi Indonesia",
        status: "Melamar",
      },
    ]);
  }, []);

  return (
    <>
      <div className="card-admin flex flex-col gap-y-5">
        <HeadPage>
          <HeadPage.Title>Daftar Pelamar</HeadPage.Title>
          <HeadPage.SearchAdd></HeadPage.SearchAdd>
        </HeadPage>
        <div className="table rounded-md">
          <table className="w-full border-collapse">
            <thead className="text-left text-md border-b-2 border-black">
              <tr>
                <th className="p-3">#</th>
                <th className="p-3">Nama</th>
                <th className="p-3">Perusahaan</th>
                <th className="p-3">Status</th>
                <th className="p-3" width="10%">
                  Opsi
                </th>
              </tr>
            </thead>
            <tbody className="text-sm py-2">
              {pelamar.map((item, i) => {
                return (
                  <tr
                    className={"border-t-2 " + (i == 0 && "border-black")}
                    key={i}
                  >
                    <td className="p-3">{i + 1}</td>
                    <td className="p-3">{item.nama}</td>
                    <td className="p-3">{item.perusahaan}</td>
                    <td className="p-3">{item.status}</td>
                    <td className="p-3 flex gap-x-5 text-blue-500">
                      <ModalDetailTable></ModalDetailTable>
                      <ModalEditTable></ModalEditTable>
                      <Link className="transition-all duration-500 hover:text-red-500 relative group">
                        Hapus
                        <div className="absolute bottom-0 w-0 bg-red-500 h-[1px] transition-all duration-500 group-hover:w-full"></div>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Pelamar;
