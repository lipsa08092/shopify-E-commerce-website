import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedAdmin = JSON.parse(localStorage.getItem("users")) || [];
    const admin = storedAdmin.find(
      (a) => a.email === email && a.password === password && a.role === "admin"
    );
    if (!admin) {
      alert("Admin account not found!");
      return;
    }
    localStorage.setItem("adminAuth", "true");
    localStorage.setItem("loggedAdmin", JSON.stringify(admin));
    navigate("/admin");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url('https://watermark.lovepik.com/photo/40008/0007.jpg_wh1200.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Card */}
      <div className="relative w-full max-w-sm sm:max-w-md rounded-2xl backdrop-blur-xl bg-white/10 p-6 sm:p-8 text-white shadow-xl">
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-500">
            <FiUser size={24} />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center">Welcome Admin</h2>
        <p className="text-center text-sm opacity-80 mb-6">
          Sign in to your account
        </p>

        {/* Email */}
        <div className="flex items-center bg-white/20 rounded-lg px-3 mb-4">
          <FiMail className="opacity-70" />
          <input
            type="email"
            placeholder="Email address"
            className="bg-transparent w-full p-3 outline-none text-white placeholder-white/70 text-sm"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="flex items-center bg-white/20 rounded-lg px-3 mb-2">
          <FiLock className="opacity-70" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="bg-transparent w-full p-3 outline-none text-white placeholder-white/70 text-sm"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="ml-2 opacity-80"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>

        <p className="text-right text-xs opacity-80 mb-6 cursor-pointer hover:underline">
          Forgot password?
        </p>

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-orange-500 hover:bg-orange-600 transition py-3 rounded-lg font-semibold text-sm"
        >
          Sign In
        </button>
        <div className="flex items-center justify-center">
          <Link
            to="/"
            className="text-center text-sm mt-4 opacity-80 cursor-pointer hover:underline"
          >
            Go Home →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
