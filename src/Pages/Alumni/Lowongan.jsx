import CardLowongan from "../../component/Alumni/CardLowongan";

const AlumniLowongan = () => {
  return (
    <>
      <div className="container-full mt-3 mb-10">
        <div className="ms-3 mb-10 ps-2 border-s-2 border-black">
          <h1 className="text-2xl">Daftar Lowongan</h1>
        </div>
        <div class="px-5 flex-col flex md:flex-row justify-center md:justify-start md:flex-wrap gap-5">
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
