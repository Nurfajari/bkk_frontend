import CardLowongan from "../../component/Alumni/CardLowongan";

const AlumniLowongan = () => {
  return (
    <>
      <div className="container-full">
        <div className="ms-3 mb-3 ps-2 border-s-2 border-black">
          <h1 className="text-2xl">Daftar Lowongan</h1>
        </div>
        <div class="px-5 py-10 flex-col flex md:flex-row justify-center md:justify-start md:flex-wrap gap-5">
          <CardLowongan />
          <CardLowongan />
          <CardLowongan />
          <CardLowongan />
        </div>
      </div>
    </>
  );
};

export default AlumniLowongan;
