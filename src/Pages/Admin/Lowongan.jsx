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
      </div>
    </>
  );
};

export default Lowongan;
