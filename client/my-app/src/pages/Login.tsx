// src/pages/Login.tsx
import { useState } from "react";
import { useAppDispatch } from "../hooks";
import { loginUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    const res: any = await dispatch(loginUser(form));

    if (res.meta.requestStatus === "fulfilled") {
      navigate("/dashboard");
    }
  };

  return (
    <div className="p-5 space-y-3">
      <input placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })} />

      <input type="password" placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })} />

      <button onClick={handleLogin}
        className="bg-green-500 text-white px-4 py-2">
        Login
      </button>
    </div>
  );
}