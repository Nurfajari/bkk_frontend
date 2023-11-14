import { IconEye, IconEyeOff, IconLogin2, IconUser } from "@tabler/icons-react"
import { IconReload } from "@tabler/icons-react"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Register = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    // Cek apakah sudah login dan role nya adalah alumni
    if (
      localStorage.getItem("statusLogin") &&
      JSON.parse(localStorage.getItem("statusLogin")).role == "alumni"
    )
      return navigate("/alumni");

    // Cek apakah sudah login dan role nya adalah admin atau super-admin
    if (
      localStorage.getItem("statusLogin") &&
      (JSON.parse(localStorage.getItem("statusLogin")).role == "admin" ||
        JSON.parse(localStorage.getItem("statusLogin")).role == "super-admin")
    )
      return navigate("/admin");
  }, []);

  const handleSubmitRegister = async (e) => {
    e.preventDefault();

    // Ubah button login agar tidak bisa di klik
    setLoadingLogin(true);

  }

  return <>
    <div className="relative h-screen w-full">
        <img
          src="/Img/profile-company-4.jpg"
          alt=""
          className="image-cover object-center"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 p-5 min-w-[400px] rounded-2xl border-2 border-white backdrop-blur-sm">
        {/* {isFailedLogin ? (
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500/50 p-5 min-w-[400px] rounded-2xl text-white">
            {messageFailedLogin}
          </div>
        ) : null} */}
          <div className="flex items-center gap-x-4 mb-5">
            <img
              src="/Img/LogoSMK.png"
              alt=""
              className="w-20 h-20 bg-white p-1 rounded-lg"
            />
            <p className="text-3xl font-bold text-white italic">BKK NEPER</p>
          </div>
          <div className="border-b-2 border-white mb-4">
            <p className="text-2xl text-white font-semibold mb-3">Register</p>
          </div>
          <form
            className="flex flex-col gap-y-4"
            onSubmit={handleSubmitRegister}
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
              <span className="text-xl font-semibold">Register</span>
            </button>
          </form>
        </div>
      </div>
  </>
}

export default Register