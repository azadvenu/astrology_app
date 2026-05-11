// // src/pages/Horoscope.tsx
// import { useState } from "react";
// import { generateHoroscopeApi } from "../services/horoscope.api";
// import { useAppSelector, useAppDispatch } from "../hooks";
// import { logout } from "../features/auth/authSlice";

// interface FormData {
//   name: string;
//   dob: string;
//   tob: string;
//   place: string;
// }

// export default function Horoscope() {
//   const dispatch = useAppDispatch();
//   const [form, setForm] = useState<FormData>({
//     name: "",
//     dob: "",
//     tob: "",
//     place: "",
//   });

//   const handleSubmit = async () => {
//     try {
//       await generateHoroscopeApi(form);
//     } catch (err: any) {
//       alert(err.response?.data?.msg || "Something went wrong");
//     }
//   };

//   return (
//         <div className="min-h-screen bg-[#fdfaf5] font-sans">
//           {/* Navigation Bar */}
//           <nav className="bg-white shadow-sm border-b border-yellow-100 px-6 py-4 flex justify-between items-center">
//             <div className="flex items-center gap-2">
//               <span className="text-2xl">☀️</span>
//               <h1 className="text-2xl font-bold text-[#c67605]">ASTRA</h1>
//             </div>
//             <button 
//               onClick={() => dispatch(logout())}
//               className="text-[#c67605] font-semibold hover:text-orange-700 transition"
//             >
//               Logout
//             </button>
//           </nav>
//     <div className="p-5 space-y-3">
//       <input placeholder="Name" className="border p-2"
//         onChange={e => setForm({ ...form, name: e.target.value })} />

//       <input type="date" className="border p-2"
//         onChange={e => setForm({ ...form, dob: e.target.value })} />

//       <input type="time" className="border p-2"
//         onChange={e => setForm({ ...form, tob: e.target.value })} />

//       <input placeholder="Place" className="border p-2"
//         onChange={e => setForm({ ...form, place: e.target.value })} />

//       <button className="bg-blue-500 text-white px-4 py-2"
//         onClick={handleSubmit}>
//         Generate Horoscope
//       </button>
//     </div>
//      </div>
//   );
// }

import { useState } from "react";
import { Sparkles, History, MapPin, Clock, Calendar } from "lucide-react";

export default function Horoscope() {
  const [activeTab, setActiveTab] = useState("daily"); // daily, weekly, monthly

  return (
    <div className="min-h-screen bg-[#fdfaf5] font-sans">
      {/* Navigation - Note: No Login button here as user is logged in */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-yellow-100 px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-[#c67605]" />
            <span className="font-serif text-2xl font-bold">Astra</span>
          </div>
          <div className="flex items-center gap-4">
             <span className="text-sm text-slate-500 font-medium">Welcome, Azad</span>
             <div className="w-10 h-10 rounded-full bg-[#c67605] text-white flex items-center justify-center font-bold">AV</div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 md:p-12">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Side: Input Form */}
          <section className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-yellow-100">
            <h2 className="text-3xl font-serif font-bold text-slate-800 mb-6">Birth Details</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-600"><Calendar size={16}/> Date of Birth</label>
                  <input type="date" className="w-full p-4 rounded-2xl border border-yellow-100 bg-[#fdfaf5] outline-none focus:ring-2 focus:ring-[#c67605]" />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-600"><Clock size={16}/> Birth Time</label>
                  <input type="time" className="w-full p-4 rounded-2xl border border-yellow-100 bg-[#fdfaf5] outline-none focus:ring-2 focus:ring-[#c67605]" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-slate-600"><MapPin size={16}/> Place of Birth</label>
                <input type="text" placeholder="e.g. Kochi, Kerala" className="w-full p-4 rounded-2xl border border-yellow-100 bg-[#fdfaf5] outline-none focus:ring-2 focus:ring-[#c67605]" />
              </div>
              <button className="w-full bg-[#c67605] text-white py-4 rounded-full font-bold shadow-lg hover:bg-[#a45c40] transition-all">
                Generate My Chart
              </button>
            </form>
          </section>

          {/* Right Side: Results Display */}
          <section className="bg-[#5c4033] text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-serif font-bold text-yellow-400">Your Horoscope</h2>
                <div className="flex bg-white/10 rounded-full p-1">
                  {["daily", "weekly", "monthly"].map((t) => (
                    <button 
                      key={t}
                      onClick={() => setActiveTab(t)}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${activeTab === t ? 'bg-yellow-500 text-[#5c4033]' : 'text-white/60'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                  <p className="text-lg leading-relaxed italic text-yellow-50/90">
                    "The celestial alignment suggests a powerful day for your career. Jupiter is in your house of finance, making this a great time for investments..."
                  </p>
                </div>
                {/* Additional Insight Boxes */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <span className="text-xs text-yellow-400 font-bold uppercase">Lucky Number</span>
                    <p className="text-2xl font-bold">7</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <span className="text-xs text-yellow-400 font-bold uppercase">Lucky Color</span>
                    <p className="text-2xl font-bold">Saffron</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Background Decorative Element */}
            <div className="absolute -bottom-10 -right-10 opacity-10">
               <History size={300} />
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}