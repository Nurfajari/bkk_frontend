import {
  IconChevronCompactDown,
  IconFilePencil,
  IconInfoSquareFilled,
} from "@tabler/icons-react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { IconInfoCircle } from "@tabler/icons-react";

export default function CardLowongan() {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-md p-2 border">
      <div className="p-2">
        <img
          src="/Img/card_img.jpg"
          className="w-full h-40 object-cover rounded-md"
          alt=""
        />
      </div>
      <div className="p-2 flex flex-col justify-between">
        <div className="mb-3">
          <h1 className="text-xl mb-2">PT Verta Logistic</h1>
          <h1 className="text-sm text-green-500 bg-green-300/50 w-max px-[6px] rounded-md">
            Lowongan Buka
          </h1>
        </div>
        <div className="">
          <Link
            to="/alumni/lowongan/detail"
            className="flex items-center justify-center rounded-sm text-white gap-1 bg-[#4A9CCB] p-1"
          >
            <IconInfoCircle />
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
}
