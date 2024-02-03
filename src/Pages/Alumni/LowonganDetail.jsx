import { IconArrowNarrowLeft } from "@tabler/icons-react";
import CardLowonganDetail from "../../component/Alumni/CardLowonganDetail";
import { Link } from "react-router-dom";

const AlumniLowonganDetail = () => {
  return (
    <>
      <div className="flex items-center gap-2 m-5">
        <a href="/alumni/lowongan" className="">
          <IconArrowNarrowLeft size={32} />
        </a>
        <h1 className="font-jura font-bold text-xl md:text-2xl">LOWONGAN</h1>
      </div>
      <div className="m-5">
        <CardLowonganDetail></CardLowonganDetail>
      </div>
    </>
  );
};

export default AlumniLowonganDetail;
