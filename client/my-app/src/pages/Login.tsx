import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { loginUser, clearError } from "../features/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";
import bgimage from "../assets/bgimage.avif";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, error, token } = useAppSelector((state) => state.auth);

  // Redirect if already logged in
  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
    // Cleanup error message when leaving the page
    return () => { dispatch(clearError()); };
  }, [token, navigate, dispatch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

return (
  /* Container with Background Image */
  <div 
    className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-4 relative"
    style={{ 
      backgroundImage: `url(${bgimage})` 
    }}
  >
    {/* Dark Overlay to make the card pop */}
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
    
    {/* Form Card - Increased max-width and padding */}
    <div className="relative w-full max-w-lg bg-white/95 rounded-[2rem] shadow-2xl border border-white/20 overflow-hidden backdrop-blur-md">
      
      {/* Header - Astrology Portal Style */}
      <div className="pt-4 pb-6 flex flex-col items-center justify-center">
        <div className="flex items-center gap-3 mb-4">
           {/* Sun Icon */}
           <span className="text-3xl">☀️</span>
           <h1 className="text-4xl font-bold text-[#c67605] tracking-tight">
             Astrology Portal
           </h1>
           {/* Moon Icon */}
           <span className="text-3xl">🌙</span>
        </div>
        {/* Large Central Star */}
        <div className="text-5xl animate-pulse">⭐</div>
      </div>

      {/* Body Section */}
      <div className="px-10 pb-10">
        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-600 text-sm rounded-xl border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          
          {/* Email */}
          <div className="space-y-2">
            <label className="text-lg font-medium text-slate-700 block">
              Email ID
            </label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl border border-yellow-200 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition text-lg bg-white"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-lg font-medium text-slate-700">
                Password
              </label>
            </div>
            <input
              type="password"
              required
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl border border-yellow-200 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition text-lg bg-white"
            />
            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-md font-semibold text-[#c67605] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#f29f05] hover:bg-[#e09304] text-white py-4 rounded-[2rem] text-xl font-bold transition-all transform hover:scale-[1.01] active:scale-[0.98] shadow-lg disabled:bg-gray-300 mt-4"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
        
        {/* Footer */}
        <div className="mt-8 text-center space-y-6">
          <p className="text-lg text-slate-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-[#c67605] font-bold hover:underline"
            >
              Create Account
            </Link>
          </p>
          <div className="border-t border-gray-100 pt-6">
             <p className="text-slate-400 italic">Discover your cosmic journey</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default Login;