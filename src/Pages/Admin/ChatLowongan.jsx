import {
  IconArrowLeft,
  IconLink,
  IconRobot,
  IconSend,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

const ChatLowongan = () => {
  return (
    <>
      <div className="flex gap-x-5">
        <div className="card-admin flex flex-col gap-y-5 h-full flex-1">
          <div className="flex items-center gap-x-5 border-b-2 border-black">
            <Link>
              <IconArrowLeft className="w-8 h-8" />
            </Link>
            <h1 className="text-3xl">PT. Anugrah Bakti</h1>
          </div>
          <div className="chat flex flex-col-reverse gap-y-4 h-[calc(100vh-245px)] overflow-y-auto">
            <div className="card-item bg-[#d9d9d9] rounded-xl rounded-br-none self-end p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
              Non voluptatem ut dicta laboriosam sequi officia iusto vero
              commodi asperiores optio?
            </div>
            <div className="card-item bg-[#d9d9d9] rounded-xl rounded-bl-none self-start p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
              Non voluptatem ut dicta laboriosam sequi officia iusto vero
              commodi asperiores optio?
            </div>
          </div>
          <div className="bg-[#efefef] p-2 flex gap-x-2 rounded-md">
            <IconLink />
            <input
              type="text"
              className="focus:outline-none w-full bg-inherit text-xl"
              placeholder="Your Message"
            />
            <IconRobot />
            <IconSend />
          </div>
        </div>
        <div className="card-admin flex flex-col gap-y-5">
          <Link className="rounded-full w-[50px] h-[50px] overflow-hidden drop-shadow-lg">
            <img src="/img/profile-company-1.jpg" alt="" className="image-cover object-top" />
          </Link>
          <Link className="rounded-full w-[50px] h-[50px] overflow-hidden drop-shadow-lg">
            <img src="/img/profile-company-2.jpg" alt="" className="image-cover object-top" />
          </Link>
          <Link className="rounded-full w-[50px] h-[50px] overflow-hidden drop-shadow-lg">
            <img src="/img/profile-company-3.jpg" alt="" className="image-cover object-top" />
          </Link>
          <Link className="rounded-full w-[50px] h-[50px] overflow-hidden drop-shadow-lg">
            <img src="/img/profile-company-4.jpg" alt="" className="image-cover object-top" />
          </Link>
          <Link className="rounded-full w-[50px] h-[50px] overflow-hidden drop-shadow-lg">
            <img src="/img/profile-company-5.jpg" alt="" className="image-cover object-top" />
          </Link>
          <Link className="rounded-full w-[50px] h-[50px] overflow-hidden drop-shadow-lg">
            <img src="/img/profile-company-6.jpg" alt="" className="image-cover object-top" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ChatLowongan;
