// // src/pages/Horoscope.tsx
// import { useState } from "react";
// import { useAppSelector, useAppDispatch } from "../hooks";
// // import { logout } from "../features/auth/authSlice";
// import { Navigate } from "react-router";
// import { Sparkles, Moon, Sun, Star, Compass } from "lucide-react";
// import heroImage from "../assets/hero-vedic.jpg";
// import { Link, useNavigate } from "react-router-dom";

// export default function Index() {
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   // const user = useAppSelector((state) => state.auth.user);

//     const features = [
//     { icon: Sun, title: "Birth Chart", desc: "Janma Kundli generated from your exact birth details." },
//     { icon: Moon, title: "Daily Predictions", desc: "Daily, weekly & monthly guidance from the cosmos." },
//     { icon: Compass, title: "Compatibility", desc: "Guna milan & relationship compatibility reports." },
//     { icon: Star, title: "Astrologer Consult", desc: "Book sessions with verified Vedic astrologers." },
//   ];

//   return (
//     <div className="min-h-screen ">
//       {/* Navigation Bar */}
//       <nav className="bg-white shadow-sm border-b border-yellow-100 px-8 py-5">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//         <div className="flex items-center gap-3">
//           <Sparkles className="w-7 h-7 text-[#c67605]" />
//           <Link to ="/"><span className="font-display text-3xl font-bold tracking-tight text-gray-900">Astra<span className="text-[#c67605]">.</span></span></Link>
//         </div>
//         <button 
//           className="bg-[#5c4033] hover:bg-[#3e2b22] text-white px-8 py-2.5 rounded-full font-medium transition-all shadow-md active:scale-95"
//           onClick={() => navigate("/login")}
//         >
//           Login
//         </button>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="max-w-6xl mx-auto p-8">

//       <section className="container py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
//         <div>
//           <p className="font-sanskrit text-accent mb-4 text-lg">॥ ज्योतिष ॥</p>
//           <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-6">
//             Ancient wisdom for your <span className="text-gold">modern path</span>
//           </h1>
//           <p className="text-lg text-muted-foreground mb-8 max-w-lg">
//             Personalized Vedic horoscopes, birth charts, and consultations with master astrologers — guided by the timeless wisdom of Jyotish.
//           </p>
//           <div className="flex flex-wrap gap-4">
//             <button  onClick={() => navigate("/horoscope")} className="bg-gradient-royal lg text-primary-foreground shadow-royal hover:opacity-90">
//               Reveal my horoscope
//             </button>
//             <button>Explore services</button>
//           </div>
//         </div>
//         <div className="relative">
//           <div className="absolute inset-0 bg-gradient-gold blur-3xl opacity-30 rounded-full" />
//           <img src={heroImage} alt="Vedic zodiac wheel with golden mandala" width={1536} height={1024} className="relative rounded-lg shadow-royal ornate-border" />
//         </div>
//       </section>


//         <header className="mb-10">
//           <h1 className="text-3xl font-bold text-slate-800">Ancient wisdom for your <span className="text-gold">modern path</span></h1>
//           <p className="text-slate-600 mt-2 text-lg">The stars have much to reveal today.</p>
//         </header>

//         {/* Feature Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//           {/* Daily Horoscope Card */}
//           <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-yellow-50 hover:scale-105 transition-transform cursor-pointer">
//             <div className="text-4xl mb-4">🔮</div>
//             <h3 className="text-xl font-bold text-slate-800 mb-2">Daily Horoscope</h3>
//             <p className="text-slate-600">Check what the planets have in store for your zodiac sign today.</p>
//           </div>

//           {/* Kundli Matching Card */}
//           <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-yellow-50 hover:scale-105 transition-transform cursor-pointer">
//             <div className="text-4xl mb-4">☸️</div>
//             <h3 className="text-xl font-bold text-slate-800 mb-2">Kundli Matching</h3>
//             <p className="text-slate-600">Check compatibility between two birth charts for a perfect union.</p>
//           </div>

//           {/* Planetary Positions Card */}
//           <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-yellow-50 hover:scale-105 transition-transform cursor-pointer">
//             <div className="text-4xl mb-4">🪐</div>
//             <h3 className="text-xl font-bold text-slate-800 mb-2">Planetary Transit</h3>
//             <p className="text-slate-600">Track current movements of Mars, Jupiter, and Saturn in real-time.</p>
//           </div>

//         </div>

//         {/* Recent Insights Section */}
//         <section className="mt-16 bg-[#f29f05]/10 rounded-[3rem] p-10 border border-[#f29f05]/20">
//           <div className="flex flex-col md:flex-row items-center gap-10">
//             <div className="text-6xl">⭐</div>
//             <div>
//               <h3 className="text-2xl font-bold text-[#c67605] mb-2">Your Cosmic Tip of the Day</h3>
//               <p className="text-lg text-slate-700 leading-relaxed">
//                 "Mercury is moving into a favorable position. It’s an excellent time for clear communication
//                 and starting new projects at work."
//               </p>
//             </div>
//           </div>
//         </section>

//               <section className="container py-16 md:py-24">
//         <div className="text-center mb-12">
//           <p className="font-sanskrit text-accent mb-2">पञ्च तत्त्व</p>
//           <h2 className="font-display text-4xl md:text-5xl">Everything the stars whisper</h2>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {features.map((f) => (
//             <div key={f.title} className="bg-card p-8 rounded-lg shadow-soft border border-border/60 hover:shadow-gold transition-shadow">
//               <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center mb-4">
//                 <f.icon className="w-6 h-6 text-primary" />
//               </div>
//               <h3 className="font-display text-2xl mb-2">{f.title}</h3>
//               <p className="text-muted-foreground text-sm">{f.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//       </main>
//             <footer className="border-t border-border/50 py-8 mt-16">
//         <div className="container text-center text-sm text-muted-foreground">
//           <p className="font-sanskrit text-base mb-1">सर्वे भवन्तु सुखिनः</p>
//           <p>© 2026 Astra. May all beings be happy.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

import { Sparkles, Moon, Sun, Star, Compass, ArrowRight } from "lucide-react";
import heroImage from "../assets/hero-vedic.jpg";
import { Link, useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  const features = [
    { icon: Sun, title: "Birth Chart", desc: "Janma Kundli generated from your exact birth details.", color: "text-orange-500" },
    { icon: Moon, title: "Daily Predictions", desc: "Daily, weekly & monthly guidance from the cosmos.", color: "text-indigo-500" },
    { icon: Compass, title: "Compatibility", desc: "Guna milan & relationship compatibility reports.", color: "text-emerald-600" },
    { icon: Star, title: "Astrologer Consult", desc: "Book sessions with verified Vedic astrologers.", color: "text-amber-500" },
  ];

  return (
    <div className="min-h-screen bg-[#fdfaf5] font-sans selection:bg-yellow-200">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-yellow-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <Sparkles className="w-7 h-7 text-[#c67605] group-hover:rotate-12 transition-transform" />
            <Link to="/">
              <span className="font-serif text-3xl font-bold tracking-tight text-gray-900">
                Astra<span className="text-[#c67605]">.</span>
              </span>
            </Link>
          </div>
          <button 
            className="bg-[#5c4033] hover:bg-[#3e2b22] text-white px-8 py-2.5 rounded-full font-medium transition-all shadow-lg hover:shadow-xl active:scale-95"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main>
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-[#c67605] font-medium tracking-[0.2em] mb-4 uppercase text-sm">॥ अस्त्र ॥ Ancient Wisdom</p>
              <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-slate-900">
                Your path, <br />
                <span className="text-[#c67605] italic">written in stars.</span>
              </h1>
            </div>
            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
              Personalized Vedic horoscopes and birth charts guided by the timeless wisdom of Astra. Discover clarity in your modern journey.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigate("/horoscope")} 
                className="bg-[#c67605] text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-[#a45c40] transition-all flex items-center gap-2 group"
              >
                Reveal My Horoscope
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full font-bold border-2 border-slate-200 hover:border-[#c67605] transition-all">
                Explore Services
              </button>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-yellow-200 to-orange-100 blur-2xl opacity-40 rounded-full group-hover:opacity-60 transition-opacity" />
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl  border-white">
              <img 
                src={heroImage} 
                alt="Vedic zodiac wheel" 
                className="w-full h-auto object-cover transform  transition-duration-700" 
              />
            </div>
          </div>
        </section>

        {/* Feature Grid - The "Everything the stars whisper" Section */}
        <section className="bg-white py-24 border-y border-yellow-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[#c67605] font-serif text-xl mb-2">पञ्च तत्त्व</p>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900">Everything the stars whisper</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((f) => (
                <div key={f.title} className="group bg-[#fdfaf5] p-10 rounded-[2.5rem] border border-transparent hover:border-yellow-200 hover:bg-white hover:shadow-2xl transition-all">
                  <div className={`w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform`}>
                    <f.icon className={`w-7 h-7 ${f.color}`} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-800 mb-3">{f.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cosmic Tip Section */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className="bg-[#5c4033] rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="relative flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
              <div className="bg-white/10 p-6 rounded-full backdrop-blur-sm">
                <Sparkles className="w-12 h-12 text-yellow-300" />
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-yellow-400 mb-2 font-bold">Cosmic Tip of the Day</h3>
                <p className="text-2xl font-serif leading-relaxed italic">
                  "Mercury is moving into a favorable position. It’s an excellent time for clear communication and starting new projects at work."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-serif text-2xl mb-4 text-yellow-500">सर्वे भवन्तु सुखिनः</p>
          <div className="w-12 h-px bg-white/20 mx-auto mb-6" />
          <p className="text-slate-400">© 2026 Astra Portal. Guided by Celestial Wisdom.</p>
        </div>
      </footer>
    </div>
  );
}