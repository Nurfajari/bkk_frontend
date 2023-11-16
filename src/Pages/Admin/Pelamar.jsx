import { IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <div className="flex justify-between">
          <h1 className="text-2xl">Daftar Pelamar</h1>
          <div className="flex gap-x-5">
            <button className="text-3xl text-white px-3 font-bold rounded-md bg-black">
              +
            </button>
            <div className="border-[1px] border-black/40 rounded-md overflow-hidden relative">
              <input
                type="text"
                className="focus:outline-none text-md pl-2 pr-8 pt-[3px] placeholder:text-black/50"
                placeholder="Search..."
              />
              <div className="absolute right-2 top-1 bottom-0">
                <IconSearch className="w-6 h-6" stroke={1} />
              </div>
            </div>
          </div>
        </div>
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

export default Pelamar;
