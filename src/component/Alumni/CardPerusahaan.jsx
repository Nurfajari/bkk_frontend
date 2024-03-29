export default function CardPerusahaan() {
  return (
    <a
      href="/alumni/perusahaan/detail"
      className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100"
    >
      <div className=" w-full">
        <div className="mb-1">
          <img
            src="/Img/building.jpg"
            className="w-full md:w-[300px] h-[200px] object-cover rounded-xl"
            alt=""
          />
        </div>
        <div className="p-1">
          <h1 className="text-md font-bold">PT Endfield Industries</h1>
          <p className="text-xs opacity-75">
            Jl. Raya Cikarang Kemayoran No 27, Kecamatan Beji
          </p>
        </div>
      </div>
    </a>
  );
}
