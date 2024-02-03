import {
  IconChevronCompactDown,
  IconFilePencil,
  IconMessage,
} from "@tabler/icons-react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { IconPencil } from "@tabler/icons-react";

export default function CardLowonganDetail() {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col md:flex-row">
      <img
        src="/Img/card_img.jpg"
        className="w-full h-38 md:w-72 object-cover md:h-[400px]"
        alt=""
      />
      <div className="p-5 h-full w-full flex flex-col justify-between">
        <div className="">
          <div className="mb-5">
            <h1 className="text-xl md:text-3xl mb-2 font-semi-bold">
              PT Verta Logistic
            </h1>
            <h1 className="text-gray-500">Alamat :</h1>
          </div>
          <div className="mb-8">
            <h1 className="text-sm md:text-md">Kualifikasi:</h1>
            <ol
              typeof="list"
              className="me-4 mb-3 list-disc ps-8 text-sm md:text-md"
            >
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, at!
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, at!
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, at!
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, at!
                </p>
              </li>
            </ol>
          </div>
        </div>
        <div class="flex gap-2 mb-0">
          <button
            className="bg-black rounded-0 text-white py-2 px-3 rounded-md flex items-center gap-1 hover:bg-black/75"
            text="Daftar"
          >
            <IconPencil />
            Daftar
          </button>
          <button className="bg-white rounded-0 text-black py-1 px-2 rounded-md border-neutral-950 border hover:bg-black hover:text-white flex gap-1 items-center justify-center">
            <IconMessage />
            Chat Admin
          </button>
        </div>
      </div>
    </div>
  );
}
