import { IconBellFilled, IconCalendar } from "@tabler/icons-react";
import { useEffect } from "react";
import { useState } from "react";

const TopNavbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // useEffect(() => {
  //   const timerID = setInterval(() => {
  //     setCurrentTime(new Date());
  //   }, 1000);

  //   return () => {
  //     clearInterval(timerID);
  //   };
  // }, []);

  return (
    <div className="bg-white ms-5 p-4 rounded-xl drop-shadow-lg">
      <div className="flex gap-3">
        <div className="bg-slate-200 p-2 inline-block px-6 rounded-md">
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
      <div className="rounded-full overflow-hidden w-[64px] aspect-square">
        <img
          src="Img/profile-admin.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default TopNavbar;
