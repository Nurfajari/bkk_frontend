import { IconSearch, IconSquareRoundedPlus } from '@tabler/icons-react';
import CardPerusahaan from '../../component/Admin/CardPerusahaan';
import HeadPage from '../../component/Admin/HeadPage';
import axios from "axios";
import { useEffect, useState } from "react";
import BasicModal from '../../component/Admin/ModalTambah';
import { Form } from 'react-router-dom';
import ModalTambah from '../../component/Admin/ModalTambah';

const Perusahaan = () => {
  
  const [perusahaanData, setPerusahaanData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); // useEffect hanya dijalankan saat komponen dipasang

  useEffect(() => {
    // useEffect kedua untuk merespon perubahan pada perusahaanData
    fetchData();
  }, [perusahaanData]); // useEffect akan dijalankan kembali jika perusahaanData berubah

  const fetchData = async () => {
    try {
      const result = await axios.get("http://127.0.0.1:8000/api/perusahaan");
      setPerusahaanData(result.data.data);
    } catch (err) {
      console.log('ada yang salah', err);
    }
  }
  
  return (
    <>
      <div className="card-admin flex flex-col gap-y-5">
        <HeadPage>
          <HeadPage.Title>Daftar Perusahaan</HeadPage.Title>
          <HeadPage.SearchAdd>
            <ModalTambah>
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
            </ModalTambah>
          </HeadPage.SearchAdd>
        </HeadPage>
      </div>
      {perusahaanData.map((perusahaan, i) => (
        <CardPerusahaan key={i} perusahaanData={perusahaan}></CardPerusahaan>
      ))}
    </>
  );
};

export default Perusahaan;
