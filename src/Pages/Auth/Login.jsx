import { IconReload } from "@tabler/icons-react";
import { IconEye, IconEyeOff, IconLogin2, IconUser } from "@tabler/icons-react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [messageFailedLogin, setMessageFailedLogin] = useState("");
  const [isFailedLogin, setIsFailedLogin] = useState(false);

  const navigate = useNavigate();

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    // Ubah button login agar tidak bisa di klik
    setLoadingLogin(true);

    try {
      let item = {
        email: email,
        password: pass,
      };

      const response = await axios
        .post("http://127.0.0.1:8000/api/login", item, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          // Ubah button login agar bisa di klik lagi
          setLoadingLogin(false);
          console.log("Response: ", res.data);

          // Cek apakah user berhasil login atau tidak
          if (!res.data.statusLogin) {
            // User Tidak berhasil login

            setIsFailedLogin(true);
            setMessageFailedLogin(res.data.messageLogin);
          } else {
            // Simpan Data User Yang Berhasil Login ke localStorage
            localStorage.setItem(
              "statusLogin",
              JSON.stringify(res.data.dataUser)
            );

            // Cek apabila role user merupakan super-admin || admin
            if (
              res.data.dataUser.role == "super-admin" ||
              res.data.dataUser.role == "admin"
            )
              return navigate("/admin");

            // Bila Bukan admin, maka akan langsung menuju alumni
            return navigate("/alumni");
          }
        });
    } catch (error) {
      setLoadingLogin(false)
      setIsFailedLogin(true)
      console.error(error);
      setMessageFailedLogin(error.response.data.message)
    }
    // e.eventPreventDefault();
    console.log("Submit Login");
  };

  console.log(isFailedLogin);

  return (
    <>
      <div className="relative h-screen w-full">
        <img
          src="/Img/profile-company-4.jpg"
          alt=""
          className="image-cover object-center"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 p-5 min-w-[400px] rounded-2xl border-2 border-white backdrop-blur-sm">
        {isFailedLogin ? (
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500/50 p-5 min-w-[400px] rounded-2xl text-white">
            {messageFailedLogin}
          </div>
        ) : null}
          <div className="flex items-center gap-x-4 mb-5">
            <img
              src="/Img/LogoSMK.png"
              alt=""
              className="w-20 h-20 bg-white p-1 rounded-lg"
            />
            <p className="text-3xl font-bold text-white italic">BKK NEPER</p>
          </div>
          <div className="border-b-2 border-white mb-4">
            <p className="text-2xl text-white font-semibold mb-3">Login</p>
            <p className="text-xl text-white ">Welcome login to your account</p>
          </div>
          <form
            className="flex flex-col gap-y-4"
            onSubmit={handleSubmitLogin}
          >
            <div className="input-form flex flex-col gap-y-4">
              <div className="p-2 flex bg-white rounded-lg">
                <input
                  type="email"
                  className="w-full focus:outline-none"
                  placeholder="Email..."
                  onChange={(e) => setEmail(e.target.value)}
                />
                <IconUser />
              </div>
              <div className="p-2 flex bg-white rounded-lg">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full focus:outline-none"
                  placeholder="Password..."
                  onChange={(e) => setPass(e.target.value)}
                />
                <div onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <IconEye /> : <IconEyeOff />}
                </div>
              </div>
            </div>
            <div className="flex justify-between text-white select-none">
              <div className="flex">
                <input
                  type="checkbox"
                  name=""
                  id="rememberMe"
                  className="accent-white checked:text-blue-500"
                />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <Link to="/register">Create Account</Link>
            </div>

            <button
              type="submit"
              disabled={loadingLogin}
              className="flex items-center justify-center text-white bg-inherit w-full border-2 border-white rounded-lg py-1 gap-x-"
            >
              {loadingLogin ? (
                <IconReload className="animate-spin" />
              ) : (
                <IconLogin2 />
              )}
              <span className="text-xl font-semibold">Login</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
