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
    <div className="bg-white ms-5 p-4 rounded-xl h-[1200px]">
      <div className="flex gap-3">
        <div className="bg-slate-200 p-2 inline-block px-6 rounded-md">
          <p className="flex gap-2">
            <IconCalendar />
            {currentTime.toLocaleDateString()}
          </p>
        </div>
        <div className="flex items-center">
          <a href="">
            <IconBellFilled />
          </a>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default TopNavbar;
