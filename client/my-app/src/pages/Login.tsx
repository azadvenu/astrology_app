import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { loginUser, registerUser, clearError } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, AlertCircle } from "lucide-react"; // Added AlertCircle
import heroImage from "../assets/hero-vedic.jpg";

const Login: React.FC = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, error, token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (token) navigate("/dashboard");
  }, [token, navigate, dispatch]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isRegister) {
      // We use .unwrap() to catch errors locally in the component
      try {
        await dispatch(registerUser(formData)).unwrap();
        alert("Please check your email to verify your account.");
        setIsRegister(false); // Only switches if success!
      } catch (err) {
        // The error is now in Redux, and we DID NOT change isRegister,
        // so the useEffect won't clear it.
      }
    } else {
      dispatch(loginUser({ email: formData.email, password: formData.password }));
    }
  };

  const handleInputChange = (field: string, value: string) => {
    if (error) {
      dispatch(clearError())
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  // Only clear errors when the user MANUALLY toggles the form mode
  const toggleMode = () => {
    setIsRegister(!isRegister);
    setFormData({
      name: "",
      email: "",
      password: "",
    });

    dispatch(clearError());
    setShowPassword(false);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-4 relative"
      style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      <div className="relative w-full max-w-lg bg-[#fdfaf5]/95 rounded-[2.5rem] shadow-2xl border border-white/20 overflow-hidden backdrop-blur-md p-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif font-bold text-[#5c4033] tracking-tight">
            {isRegister ? "Join Astra" : "Welcome Back"}
          </h1>
          <p className="text-[#c67605] italic mt-2">Discover your cosmic journey</p>
        </div>

        {/* --- ERROR MESSAGE START --- */}
        {error && (
          <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-100 flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
            <AlertCircle className="text-red-500 w-5 h-5 flex-shrink-0" />
            <p className="text-sm font-semibold text-red-700">{error}</p>
          </div>
        )}
        {/* --- ERROR MESSAGE END --- */}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* ... (Keep your existing Name/Email inputs) ... */}

          {isRegister && (
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700 ml-2">Full Name</label>
              <input
                type="text"
                required
                placeholder="name"
                value={formData.name}
                className="w-full px-5 py-3 rounded-2xl border border-yellow-200 outline-none focus:ring-2 focus:ring-[#c67605] bg-white/50"
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>
          )}

          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700 ml-2">Email ID</label>
            <input
              type="email"
              required
              placeholder="name@email.com"
              value={formData.email}
              className="w-full px-5 py-3 rounded-2xl border border-yellow-200 outline-none focus:ring-2 focus:ring-[#c67605] bg-white/50"
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700 ml-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="Password"
                value={formData.password}
                className="w-full px-5 py-3 rounded-2xl border border-yellow-200 outline-none focus:ring-2 focus:ring-[#c67605] bg-white/50 pr-12"
                onChange={(e) => handleInputChange('password', e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#c67605]"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button type="submit" disabled={loading} className="w-full bg-[#5c4033] hover:bg-[#3e2b22] text-white py-4 rounded-full text-lg font-bold transition-all shadow-lg mt-4 disabled:opacity-70">
            {loading ? "Processing..." : isRegister ? "Create Account" : "Sign In"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={toggleMode}
            className="text-[#c67605] font-bold hover:underline"
          >
            {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;