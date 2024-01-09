import CardLowongan from '../../component/Alumni/CardLowongan';

const AlumniLowongan = () => {
  return (
    <>
      <div className="container-full">
        <div className="ms-3 mb-3 ps-2 border-s-2 border-black">
          <h1 className="text-2xl">Daftar Lowongan</h1>
        </div>
        <div class="flex flex-wrap gap-5 mx-4 my-7">
            <CardLowongan/>
            <CardLowongan/>
            <CardLowongan/>
            <CardLowongan/>
        </div>
      </div>
    </>
  );
};

export default AlumniLowongan;
