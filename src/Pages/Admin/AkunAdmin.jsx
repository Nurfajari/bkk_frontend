import { IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeadPage from "../../component/Admin/HeadPage";

const AkunAdmin = () => {

  const [pelamar, setPelamar] = useState([]);

  useEffect(() => {
    setPelamar([
      {
        nama: "Moh. Faizal Agathon",
      },
      {
        nama: "Moh. Agathon",
      },
      {
        nama: "Moh. Faizal",
      },
    ]);
  }, []);

  return (
    <>
      <div className="card-admin flex flex-col gap-y-5">
        <HeadPage>
          <HeadPage.Title>Akun Admin</HeadPage.Title>
          <HeadPage.SearchAdd></HeadPage.SearchAdd>
        </HeadPage>
        <div className="table rounded-md">
          <table className="w-full border-collapse">
            <thead className="text-left text-md border-b-2 border-black">
              <tr>
                <th className="p-3" width='5%'>#</th>
                <th className="p-3">Nama</th>
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
                    <td className="p-3 flex gap-x-5 text-blue-500">
                      <Link className="transition-all duration-500 hover:text-blue-700 relative group">
                        Detail
                        <div className="absolute bottom-0 w-0 bg-blue-700 h-[1px] transition-all duration-500 group-hover:w-full"></div>
                      </Link>
                      <Link className="transition-all duration-500 hover:text-yellow-500 relative group">
                        Edit
                        <div className="absolute bottom-0 w-0 bg-yellow-500 h-[1px] transition-all duration-500 group-hover:w-full"></div>
                      </Link>
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

export default AkunAdmin;
