import { IconSearch } from '@tabler/icons-react';
import CardPerusahaan from '../../component/Admin/CardPerusahaan';

const Perusahaan = () => {
  return (
    <>
      <div className="card-admin flex flex-col gap-y-5">
        <div className="flex justify-between">
          <h1 className="text-3xl">Perusahaan</h1>
          <div className="flex gap-x-5">
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="text-3xl text-white px-3 font-bold rounded-md bg-black" onClick={() => document.getElementById('my_modal_3').showModal()}>
              +
            </button>
            <dialog id="my_modal_3" className="modal w-full">
              <div className="modal-box w-full">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click on ✕ button to close</p>
              </div>
            </dialog>
            <div className="border-[1px] border-black/40 rounded-md overflow-hidden relative">
              <input type="text" className="focus:outline-none text-xl pl-1 pr-8 pt-[2px] placeholder:text-black/50" placeholder="Search..." />
              <div className="absolute right-0 top-0 bottom-0">
                <IconSearch className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardPerusahaan></CardPerusahaan>
    </>
  );
};

export default Perusahaan;
