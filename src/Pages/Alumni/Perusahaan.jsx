import CardPerusahaan from "../../component/Alumni/CardPerusahaan";

export default function PagePerusahaan() {
  return (
    <div className="">
      <div className="ms-3 ps-2 border-s-2 border-black">
        <h1 className="text-2xl">Daftar Perusahaan</h1>
      </div>
      <CardPerusahaan></CardPerusahaan>
      <CardPerusahaan></CardPerusahaan>
    </div>
  );
}
