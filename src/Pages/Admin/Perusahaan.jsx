import { IconSearch, IconSquareRoundedPlus } from '@tabler/icons-react';
import CardPerusahaan from '../../component/Admin/CardPerusahaan';
import HeadPage from '../../component/Admin/HeadPage';

const Perusahaan = () => {
  return (
    <>
      <div className="card-admin flex flex-col gap-y-5">
        <HeadPage>
          <HeadPage.Title>Daftar Perusahaan</HeadPage.Title>
          <HeadPage.SearchAdd></HeadPage.SearchAdd>
        </HeadPage>
      </div>
      <CardPerusahaan></CardPerusahaan>
    </>
  );
};

export default Perusahaan;
