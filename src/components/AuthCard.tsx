// export default function AuthCard({ children }: { children: React.ReactNode }) {
//   return (
//     <div
//       className="min-h-screen flex"
//       style={{
//         background: "linear-gradient(160deg, #06091c 0%, #080d24 40%, #0a1035 70%, #0c1550 100%)",
//       }}
//     >
//       {/* Global star layer */}
//       <div
//         className="fixed inset-0 pointer-events-none z-0"
//         style={{
//           backgroundImage: `
//             radial-gradient(1.2px 1.2px at 7%   5%,  rgba(255,255,255,0.80) 0%, transparent 100%),
//             radial-gradient(1px   1px   at 18%  13%, rgba(255,255,255,0.55) 0%, transparent 100%),
//             radial-gradient(1.5px 1.5px at 32%  3%,  rgba(255,255,255,0.65) 0%, transparent 100%),
//             radial-gradient(1px   1px   at 47%  8%,  rgba(255,255,255,0.45) 0%, transparent 100%),
//             radial-gradient(1.2px 1.2px at 60%  2%,  rgba(255,255,255,0.70) 0%, transparent 100%),
//             radial-gradient(1px   1px   at 73%  10%, rgba(255,255,255,0.50) 0%, transparent 100%),
//             radial-gradient(1px   1px   at 87%  6%,  rgba(255,255,255,0.60) 0%, transparent 100%),
//             radial-gradient(1px   1px   at 93%  18%, rgba(255,255,255,0.35) 0%, transparent 100%),
//             radial-gradient(1px   1px   at 4%   27%, rgba(255,255,255,0.45) 0%, transparent 100%),
//             radial-gradient(1.2px 1.2px at 15%  32%, rgba(255,255,255,0.55) 0%, transparent 100%),
//             radial-gradient(1px   1px   at 28%  21%, rgba(255,255,255,0.35) 0%, transparent 100%),
//             radial-gradient(1px   1px   at 43%  29%, rgba(255,255,255,0.30) 0%, transparent 100%),
//             radial-gradient(1px   1px   at 57%  17%, rgba(255,255,255,0.45) 0%, transparent 100%),
//             radial-gradient(1px   1px   at 70%  26%, rgba(255,255,255,0.35) 0%, transparent 100%),
//             radial-gradient(1.2px 1.2px at 83%  21%, rgba(255,255,255,0.50) 0%, transparent 100%),
//             radial-gradient(1px   1px   at 90%  34%, rgba(255,255,255,0.25) 0%, transparent 100%),
//             radial-gradient(1px   1px   at 5%   43%, rgba(255,255,255,0.30) 0%, transparent 100%),
//             radial-gradient(1px   1px   at 24%  47%, rgba(255,255,255,0.20) 0%, transparent 100%),
//             radial-gradient(1px   1px   at 39%  41%, rgba(255,255,255,0.25) 0%, transparent 100%),
//             radial-gradient(1px   1px   at 53%  49%, rgba(255,255,255,0.15) 0%, transparent 100%),
//             radial-gradient(1px   1px   at 66%  43%, rgba(255,255,255,0.20) 0%, transparent 100%),
//             radial-gradient(1px   1px   at 78%  51%, rgba(255,255,255,0.12) 0%, transparent 100%),
//             radial-gradient(1px   1px   at 95%  45%, rgba(255,255,255,0.18) 0%, transparent 100%)
//           `,
//         }}
//       />

//       {/* Blue glow at bottom */}
//       <div
//         className="fixed bottom-0 left-0 right-0 pointer-events-none z-0"
//         style={{
//           height: "35%",
//           background:
//             "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(60,80,220,0.35) 0%, rgba(30,50,180,0.18) 45%, transparent 75%)",
//         }}
//       />

//       {/* ─── LEFT PANEL (desktop only) ─────────────────────────── */}
//       <div
//         className="hidden lg:flex w-[420px] xl:w-[480px] shrink-0 flex-col relative z-10 overflow-hidden"
//         style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}
//       >
//         {/* Indigo glow top-left */}
//         <div
//           className="absolute -top-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
//           style={{ background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)" }}
//         />
//         {/* Blue glow bottom */}
//         <div
//           className="absolute -bottom-20 -right-10 w-72 h-72 rounded-full pointer-events-none"
//           style={{ background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)" }}
//         />

//         <div className="flex flex-col items-center justify-center h-full px-12 text-center">
//           {/* Logo */}
//           <div
//             className="w-16 h-16 rounded-2xl flex items-center justify-center mb-7 shadow-xl"
//             style={{ background: "linear-gradient(135deg, #4f5ef7 0%, #3b82f6 100%)" }}
//           >
//             <span className="text-white text-3xl font-black italic select-none">if</span>
//           </div>

//           <h2 className="text-white text-[28px] font-bold mb-3 leading-tight tracking-tight">
//             Secure. Simple. Smart.
//           </h2>
//           <p className="text-white/40 text-sm leading-relaxed max-w-[240px]">
//             Store your will and important messages safely for your loved ones.
//           </p>

//           {/* Features */}
//           <div className="mt-10 w-full space-y-3 text-left">
//             {[
//               { icon: "🔒", title: "Bank-level Security",   desc: "End-to-end encrypted" },
//               { icon: "⚡", title: "Always Available",      desc: "Access anytime, anywhere" },
//               { icon: "💙", title: "Peace of Mind",         desc: "Your legacy, protected" },
//             ].map((f) => (
//               <div
//                 key={f.title}
//                 className="flex items-center gap-3 p-3.5 rounded-xl"
//                 style={{
//                   background: "rgba(255,255,255,0.05)",
//                   border: "1px solid rgba(255,255,255,0.07)",
//                 }}
//               >
//                 <span className="text-xl shrink-0">{f.icon}</span>
//                 <div>
//                   <p className="text-white text-sm font-semibold">{f.title}</p>
//                   <p className="text-white/35 text-xs">{f.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ─── RIGHT PANEL (form) ─────────────────────────────────── */}
//       <div className="flex flex-1 items-center justify-center relative z-10 px-6 py-10 sm:px-10">
//         <div className="w-full max-w-[420px]">

//           {/* Mobile logo */}
//           <div className="flex lg:hidden justify-center mb-8">
//             <div
//               className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
//               style={{ background: "linear-gradient(135deg, #4f5ef7 0%, #3b82f6 100%)" }}
//             >
//               <span className="text-white text-xl font-black italic select-none">if</span>
//             </div>
//           </div>

//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }
