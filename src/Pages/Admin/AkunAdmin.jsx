import { IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <div className="flex justify-between">
          <h1 className="text-3xl">Akun Admin</h1>
          <div className="flex gap-x-5">
            <button className="text-3xl text-white px-3 font-bold rounded-md bg-black">
              +
            </button>
            <div className="border-[1px] border-black/40 rounded-md overflow-hidden relative">
              <input
                type="text"
                className="focus:outline-none text-xl pl-1 pr-8 pt-[2px] placeholder:text-black/50"
                placeholder="Search..."
              />
              <div className="absolute right-0 top-0 bottom-0">
                <IconSearch className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
        <div className="table rounded-md">
          <table className="w-full border-collapse">
            <thead className="text-left text-xl border-b-2 border-black">
              <tr>
                <th className="p-3" width='5%'>#</th>
                <th className="p-3">Nama</th>
                <th className="p-3" width="10%">
                  Opsi
                </th>
              </tr>
            </thead>
            <tbody className="text-lg py-2">
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
