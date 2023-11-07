import { IconBellFilled, IconCalendar } from "@tabler/icons-react";
import { useEffect } from "react";
import { useState } from "react";
import Divider from "./Divider";

const TopNavbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [openMenuProfile, setOpenMenuProfile] = useState(false);

  // useEffect(() => {
  //   const timerID = setInterval(() => {
  //     setCurrentTime(new Date());
  //   }, 1000);

  //   return () => {
  //     clearInterval(timerID);
  //   };
  // }, []);

  return (
    <div className="bg-white p-4 rounded-xl drop-shadow-lg flex justify-between items-center">
      <div className="flex gap-3">
        <div className="bg-slate-200 p-2 inline-block px-6 rounded-md h-fit">
          <p className="flex gap-2">
            <IconCalendar />
            <span className="text-[16px] font-medium">
              {currentTime.toLocaleString("id-ID", {
                year: undefined,
                month: "long",
                day: "numeric",
              })}
            </span>
          </p>
        </div>
        <div className="flex items-center">
          <a href="">
            <IconBellFilled />
          </a>
        </div>
      </div>
      <div
        className="w-[48px] aspect-square relative transition-all duration-500"
        onClick={() => setOpenMenuProfile(!openMenuProfile)}
      >
        <div className="overflow-hidden rounded-full w-full">
          <img
            src="/img/profile-admin.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div
          className={
            "transition-all duration-500 absolute bg-white w-max h-fit right-0 p-3 rounded-xl text-[16px] flex flex-col gap-y-2 cursor-default " +
            (openMenuProfile
              ? "bottom-[-100px] opacity-100"
              : "bottom-[0px] opacity-0")
          }
        >
          <div>Profile</div>
          <Divider />
          <div>Log Out</div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
