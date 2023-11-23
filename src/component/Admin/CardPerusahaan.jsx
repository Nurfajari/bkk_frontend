import { IconEdit, IconTrash } from '@tabler/icons-react';
import axios from 'axios';
import ModalEdit from './ModalEdit';
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
              <h1 className="text-2xl mb-2 font-bold"><a href="/admin/perusahaan/detail">{perusahaanData.nama_perusahaan}</a></h1>
              <p>{perusahaanData.alamat_perusahaan}</p>
            </div>
          </div>
          <div className="text-center">
            <div className="">
              <ModalEdit>
                <form action="" className="flex flex-col h-max">
                  <div className="mb-3">
                    <label htmlFor="">Nama Perusahaan :</label>
                    <input type="text" className="p-2 mt-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="">Kontak :</label>
                    <input type="number" className="p-2 mt-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="">Alamat :</label>
                    <textarea className="p-2 mt-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
                    name="" id="" cols="30" rows="5"></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="">Logo Perusahaan :</label>
                    <input type="file" class="block w-full mt-2 text-sm text-slate-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-violet-50 file:text-violet-700
                      hover:file:bg-violet-100
                    "/>
                  </div>
                  <div className="flex justify-end gap-1">
                    <button type='reset' className="bg-red-500 text-white px-5 py-1 rounded-md">
                      <a href="" className="">Reset</a>
                    </button>
                    <button type='submit' className="bg-blue-500 text-white px-5 py-1 rounded-md">
                      <a href="" className="">Submit</a>
                    </button>
                  </div>
                </form>
              </ModalEdit>
            </div>
            <div className="">
              <button
                onClick={() => {
                  const confirmation = window.confirm(`Apakah Anda yakin ingin menhapus perusahaan ini`);
                  if (confirmation) {
                    handleDelete(perusahaanData.id_perusahaan);
                  }
                }}
                href="" 
                className="border border-black p-1 rounded-full flex hover:bg-black hover:text-white transition ease-in-out delay-150"
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
