import CardPerusahaan from "../../component/Alumni/CardPerusahaan";

export default function PagePerusahaan() {
  return (
    <div className="p-3">
      <div className="ms-3 mb-3 ps-2 border-s-2 border-black">
        <h1 className="text-2xl">Daftar Perusahaan</h1>
      </div>
      <div className="flex gap-10 flex-wrap p-5">
        <CardPerusahaan></CardPerusahaan>
        <CardPerusahaan></CardPerusahaan>
        <CardPerusahaan></CardPerusahaan>
        <CardPerusahaan></CardPerusahaan>
      </div>
    </div>
  );
}
