import { IconEdit, IconTrash } from '@tabler/icons-react';
import axios from 'axios';
// import axios from "axios"
// import { useEffect, useState } from "react"
export default function CardPerusahaan({ perusahaanData }) {
  const handleDelete = async (id) => {
    try {
      await axios.delete('http://127.0.0.1:8000/api/perusahaanDelete/' + id);
      console.log(`Perusahaan dengan ID ${id} telah dihapus.`);
      // Setelah penghapusan berhasil, Anda dapat memperbarui state atau melakukan hal lain yang diperlukan.
    } catch (err) {
      console.error('Gagal menghapus perusahaan', err);
    }
  };
  return (
    <div>
      <div className="bg-white my-5 font-jura border-s-4 border-black shadow-md card-admin">
        <div className="flex flex-wrap justify-between items-center p-3 py-5">
          <div className="flex gap-2 items-center">
            <div className="">
              <img src="/Img/logo3.jpg" className="w-24 rounded-full" alt="" />
            </div>
            <div className="">
              <h1 className="text-2xl mb-2 font-bold">{perusahaanData.nama_perusahaan}</h1>
              <p>{perusahaanData.alamat_perusahaan}</p>
            </div>
          </div>
          <div className="text-center">
            <div className="">
              <a href="" className="bg-black text-white p-2 rounded-full flex mb-2">
                <IconEdit />
              </a>
            </div>
            <div className="z-50">
              <button
                onClick={() => {
                  const confirmation = window.confirm(`Apakah Anda yakin ingin menhapus perusahaan ini`);
                  if (confirmation) {
                    handleDelete(perusahaanData.id_perusahaan);
                  }
                }}
                href=""
                className="border border-black p-2 rounded-full flex hover:bg-black hover:text-white transition ease-in-out delay-150"
              >
                <IconTrash />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
