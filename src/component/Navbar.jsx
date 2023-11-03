export default function Navbar()
{
    return(
        <div className="flex justify-between justify-center items-center px-9 bg-black text-white py-5">
        <div className="">
          <h1 className='text-base'>Logo</h1>
        </div>
        <div className="flex gap-9 text-base items-center">
          <a href="">Home</a>
          <a href="">Lowongan</a>
          <a href="">Perusahaan</a>
          <a href="">Logout</a>
        </div>
      </div>
    )
}