import { IconBrandFacebook, IconBrandYoutube } from "@tabler/icons-react";
import { IconBrandInstagram } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer>
      <div className="bg-black text-white font-jura">
        <div className="p-5 mb-10 text-center mb-[100px]">
          <div className="mb-5">
            <img
              src="/Img/logo.png"
              className="w-16 md:w-24 rounded-xl mb-3 m-auto"
              alt=""
            />
            <p>Jl. Perjuangan By Pass Sunyaragi, Cirebon, Indonesia 45132</p>
          </div>
          <div className="flex justify-center gap-5">
            <a href="">
              <IconBrandInstagram />
            </a>
            <a href="">
              <IconBrandFacebook />
            </a>
            <a href="">
              <IconBrandYoutube />
            </a>
          </div>
        </div>
        <div className="text-center py-3 border-t-2">
          <p>Copyright By Smkn 1 Kota Cirebon</p>
        </div>
      </div>
    </footer>
  );
}
