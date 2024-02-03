import { IconReportSearch } from "@tabler/icons-react";
import { IconFileCv } from "@tabler/icons-react";
import { IconMessage } from "@tabler/icons-react";
import { IconUserPlus } from "@tabler/icons-react";
import { IconCalendarBolt } from "@tabler/icons-react";

export default function SectionUse() {
  return (
    <div className="p-5">
      <div className="flex flex-col md:flex-row items-center">
        <div className="p-5 md:p-10 w-full md:w-[50%]">
          <img
            src="/Img/easy_use.jpg"
            className="w-[500px] h-[300px] md:w-[500px] md:h-[500px] object-cover rounded-xl"
            alt=""
          />
        </div>
        <div className="md:py-20 px-5 w-full md:w-[50%]">
          <div className="mb-5">
            <h1 className="text-3xl md:text-4xl mb-3 font-bold font-jura">
              Sulit Cari Pekerjaan?
            </h1>
            <p className="font-jura opacity-75">
              Cari lowongan Pekerjaan Yang Anda Inginkan hanya dari Ponsel Anda
              Dimanapun kapanpun
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5 mb-3">
            <div className="">
              <div className="bg-cyan-200 p-5 rounded-xl mb-5">
                <div className="mb-3 bg-gradient-to-r from-cyan-500 to-blue-500 p-2 max-w-max rounded-md">
                  <span className="text-white">
                    <IconUserPlus />
                  </span>
                </div>
                <h1 className="text-xl font-jura font-bold mb-2">
                  Buat Profile
                </h1>
                <p className="text-sm opacity-75">
                  Buat akun profile untuk menarik perusahaan yang akan anda cari
                </p>
              </div>
              <div className="bg-blue-200 p-5 rounded-xl">
                <div className="mb-3 bg-gradient-to-r from-cyan-500 to-blue-500 p-2 max-w-max rounded-md">
                  <span className="text-white">
                    <IconReportSearch />
                  </span>
                </div>
                <h1 className="text-xl font-jura font-bold mb-2">
                  Cari Lowongan
                </h1>
                <p className="text-sm opacity-75">
                  Cari lowongan yang anda inginkan sesuai dengan skill anda
                </p>
              </div>
            </div>
            <div className="">
              <div className="bg-blue-200 p-5 rounded-xl mb-5">
                <div className="mb-3 bg-gradient-to-r from-cyan-500 to-blue-500 p-2 max-w-max rounded-md">
                  <span className="text-white">
                    <IconMessage />
                  </span>
                </div>
                <h1 className="text-xl font-jura font-bold mb-2">
                  Bantuan Admin
                </h1>
                <p className="text-sm opacity-75">
                  Chat admin jika ada kendala ataupun pertanyaan yang ingin anda
                  tanyakan
                </p>
              </div>
              <div className="bg-cyan-200 p-5 rounded-xl">
                <div className="mb-3 bg-gradient-to-r from-cyan-500 to-blue-500 p-2 max-w-max rounded-md">
                  <span className="text-white">
                    <IconFileCv />
                  </span>
                </div>
                <h1 className="text-xl font-jura font-bold mb-2">Kirim CV</h1>
                <p className="text-sm opacity-75">
                  Kirimkan CV anda tentang data diri, kemampuan dan pengalaman
                  anda
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
