// src/pages/Horoscope.tsx
import { useState } from "react";
import { generateHoroscopeApi } from "../services/horoscope.api";

interface FormData {
  name: string;
  dob: string;
  tob: string;
  place: string;
}

export default function Horoscope() {
  const [form, setForm] = useState<FormData>({
    name: "",
    dob: "",
    tob: "",
    place: "",
  });

  const handleSubmit = async () => {
    try {
      await generateHoroscopeApi(form);
    } catch (err: any) {
      alert(err.response?.data?.msg || "Something went wrong");
    }
  };

  return (
    <div className="p-5 space-y-3">
      <input placeholder="Name" className="border p-2"
        onChange={e => setForm({ ...form, name: e.target.value })} />

      <input type="date" className="border p-2"
        onChange={e => setForm({ ...form, dob: e.target.value })} />

      <input type="time" className="border p-2"
        onChange={e => setForm({ ...form, tob: e.target.value })} />

      <input placeholder="Place" className="border p-2"
        onChange={e => setForm({ ...form, place: e.target.value })} />

      <button className="bg-blue-500 text-white px-4 py-2"
        onClick={handleSubmit}>
        Generate Horoscope
      </button>
    </div>
  );
}