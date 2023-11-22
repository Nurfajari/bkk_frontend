import { IconSearch, IconSquareRoundedPlus } from '@tabler/icons-react';
import CardPerusahaan from '../../component/Admin/CardPerusahaan';
import HeadPage from '../../component/Admin/HeadPage';
import axios from "axios";
import { useEffect, useState } from "react";
import BasicModal from '../../component/Admin/Modal';

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
            <BasicModal>

            </BasicModal>
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
