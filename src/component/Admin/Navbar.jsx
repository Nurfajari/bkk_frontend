const Navbar = () => {
  return (
    <div className="bg-white py-5 rounded-xl h-full">
      <div className="mb-10">
        <h1 className="text-center text-base">Logo</h1>
      </div>
      <div className="p-7">
        <div className="mb-8">
          <a href="">Dashboard</a>
        </div>
        <div className="mb-8">
          <a href="">Akun Admin</a>
        </div>
        <div className="mb-8">
          <a href="">Perusahaan</a>
        </div>
        <div className="mb-8">
          <a href="">Lowongan</a>
        </div>
        <div className="mb-8">
          <a href="">Pelamar</a>
        </div>
      </div>
      <div className="bg-black">
        <span className="text-white">Created By ...</span>
      </div>
    </div>
  );
};

export default Navbar;
