"use client";
import React from 'react';
import { ArrowUp, ArrowDown, Users, UserCheck, Star, DollarSign, HelpCircle, ChevronRight, ChevronDown, Bell, ShieldCheck } from 'lucide-react';

// --- Responsive Stat Card ---
export const StatCard = ({ title, value, trend, trendValue, icon: Icon, color = "#377DFF", sparkData = [30, 45, 35, 50, 40, 60] }: any) => (
  <div className="dashboard-widget p-3 flex flex-col justify-between h-28 relative overflow-hidden group">
    <div className="absolute inset-x-0 bottom-0 h-10 -z-10 opacity-20 group-hover:opacity-40 transition-opacity">
        <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
            <path d={`M 0 40 ${sparkData.map((d: number, i: number) => `L ${i * 20} ${40 - d}`).join(' ')} L 100 40 Z`} fill={color} />
            <path d={`M 0 ${40 - sparkData[0]} ${sparkData.map((d: number, i: number) => `L ${i * 20} ${40 - d}`).join(' ')}`} fill="none" stroke={color} strokeWidth="2" />
        </svg>
    </div>

    <div className="flex justify-between items-start">
      <div className="flex flex-col gap-0.5">
        <h4 className="text-white/40 text-[9px] uppercase tracking-[0.1em] font-semibold">{title}</h4>
        <h5 className="text-xl font-bold text-white leading-tight tracking-tight mt-1">{value}</h5>
      </div>
      <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-black/20" style={{ backgroundColor: `${color}30`, border: `1px solid ${color}40` }}>
        <Icon className="w-3.5 h-3.5" style={{ color: color }} />
      </div>
    </div>
    
    <div className="flex items-center justify-between mt-auto">
      <div className={`flex items-center text-[9px] font-bold px-1.5 py-0.5 rounded ${trend === 'up' ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'}`}>
        {trend === 'up' ? <ArrowUp className="w-2.5 h-2.5 mr-0.5" /> : <ArrowDown className="w-2.5 h-2.5 mr-0.5" />}
        {trendValue}
      </div>
      <span className="text-[8px] text-white/30 font-medium uppercase hidden xs:inline">v.s last month</span>
    </div>
  </div>
);

// --- Responsive Active Users Chart ---
export const ActiveUsersChart = ({ value, trend }: any) => (
  <div className="dashboard-widget p-4 flex flex-col gap-3 h-64 overflow-hidden relative">
    <div className="flex items-center justify-between z-10">
      <div className="flex flex-col gap-0.5">
        <h3 className="text-[13px] font-bold text-white/80">Active Users</h3>
        <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white leading-none tracking-tighter">{value}</span>
            <span className="bg-green-500/10 text-green-400 text-[9px] font-bold px-1.5 py-0.5 rounded-lg flex items-center gap-0.5 leading-none">
                {trend} <ArrowUp className="w-2.5 h-2.5" />
            </span>
        </div>
      </div>
      <div className="flex items-center gap-1 bg-white/5 border border-white/10 px-2 py-1 rounded text-[10px] text-white/50">
         <span>Monthly</span>
         <ChevronDown className="w-3 h-3" />
      </div>
    </div>
    
    <div className="relative flex-1 w-full flex overflow-hidden">
        <div className="flex flex-col justify-between text-[8px] text-white/20 font-bold pb-6 pr-2 shrink-0">
            <span>$80k</span><span>$60k</span><span>$40k</span><span>$20k</span><span>$0</span>
        </div>
        
        <div className="flex-1 relative overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                 {[0, 25, 50, 75, 100].map((y) => (
                    <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
                 ))}
                 <path d="M 0 85 C 20 85, 30 65, 50 65 S 80 85, 100 85 S 130 35, 150 35 S 180 75, 200 75 S 230 15, 250 15 S 280 65, 300 65 S 330 25, 350 25 S 380 55, 400 55" fill="none" stroke="#377DFF" strokeWidth="2.5" strokeLinecap="round" />
                 <path d="M 0 85 C 20 85, 30 65, 50 65 S 80 85, 100 85 S 130 35, 150 35 S 180 75, 200 75 S 230 15, 250 15 S 280 65, 300 65 S 330 25, 350 25 S 380 55, 400 55 V 100 H 0 Z" fill="url(#grad-ac-responsive)" opacity="0.1" />
                 <defs><linearGradient id="grad-ac-responsive" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#377DFF" /><stop offset="100%" stopColor="transparent" /></linearGradient></defs>
            </svg>
            <div className="flex justify-between w-full text-[8px] text-white/20 font-bold uppercase tracking-widest mt-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
                <span className="min-w-[30px]">Jan</span><span className="min-w-[30px]">Feb</span><span className="min-w-[30px]">Mar</span><span className="min-w-[30px]">Apr</span><span className="min-w-[30px]">May</span><span className="min-w-[30px]">Jun</span>
                <span className="hidden sm:inline min-w-[30px]">Jul</span><span className="hidden sm:inline min-w-[30px]">Aug</span><span className="hidden sm:inline min-w-[30px]">Sep</span><span className="hidden sm:inline min-w-[30px]">Oct</span><span className="hidden sm:inline min-w-[30px]">Nov</span><span className="hidden sm:inline min-w-[30px]">Dec</span>
            </div>
        </div>
    </div>
  </div>
);

// --- Responsive Subscriber Bar Chart ---
export const SubscriberBarChart = ({ value, trend }: any) => {
  const data = [60, 45, 75, 95, 65, 85, 40, 70, 50, 90, 60, 80];
  const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
  
  return (
    <div className="dashboard-widget p-4 flex flex-col gap-3 h-64">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <h3 className="text-[13px] font-bold text-white/80">Total Subscribers</h3>
          <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-white leading-none tracking-tighter">{value}</span>
              <span className="text-green-400 text-[9px] font-bold px-1.5 py-0.5 bg-green-400/10 rounded-lg flex items-center gap-0.5 leading-none">
                  {trend} <ArrowUp className="w-2.5 h-2.5" />
              </span>
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col mt-2">
        <div className="flex-1 flex items-end justify-between gap-1 px-0.5 relative">
             {data.map((h, i) => (
                <div key={i} className={`flex-1 flex flex-col items-center h-full justify-end group ${i > 5 ? 'hidden xs:flex' : 'flex'}`}>
                    <div className="w-4 sm:w-6 bg-theme-primary rounded-t-sm opacity-60 group-hover:opacity-100" style={{ height: `${h}%` }} />
                    <span className="text-[8px] text-white/20 font-bold mt-1.5">{months[i]}</span>
                </div>
             ))}
        </div>
      </div>
    </div>
  );
};

// --- Responsive Support Donut ---
export const SupportDonutCard = () => (
  <div className="dashboard-widget p-4 flex flex-col gap-3 h-64">
     <div className="flex items-center justify-between">
        <h3 className="text-[13px] font-bold text-white/80">Support Status</h3>
        <div className="flex items-center gap-1 bg-white/5 border border-white/10 px-2 py-1 rounded text-[10px] text-white/50">
            <span>Today</span>
            <ChevronDown className="w-3 h-3" />
        </div>
     </div>
     
     <div className="flex-1 flex flex-col items-center justify-center gap-4 py-2">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                 <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="12" />
                 <circle cx="50" cy="50" r="42" fill="none" stroke="#377DFF" strokeWidth="12" strokeDasharray="263.8" strokeDashoffset="79.14" strokeLinecap="round" />
                 <circle cx="50" cy="50" r="42" fill="none" stroke="#FFA114" strokeWidth="12" strokeDasharray="263.8" strokeDashoffset="211.04" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                 <span className="text-xl font-bold text-white leading-none">800</span>
                 <span className="text-[8px] text-white/30 font-bold uppercase mt-0.5">Tickets</span>
            </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 sm:gap-4 w-full px-1">
            <div className="flex items-center justify-between p-1.5 sm:p-2 bg-white/[0.03] border border-white/5 rounded-lg">
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-sm bg-[#377DFF]" />
                    <span className="text-[8px] sm:text-[9px] text-white/50 font-black uppercase">NEW</span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-white">500</span>
            </div>
            <div className="flex items-center justify-between p-1.5 sm:p-2 bg-white/[0.03] border border-white/5 rounded-lg">
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-sm bg-[#FFA114]" />
                    <span className="text-[8px] sm:text-[9px] text-white/50 font-black uppercase">SOLVED</span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-white">300</span>
            </div>
        </div>
     </div>
  </div>
);

// --- Fully Responsive Activity Table ---
export const ActivityTable = () => {
    const users = [
        { name: 'Dianne Russell', email: 'redaniel@mail.ru', date: '23 Mar 2025', plan: 'Basic', status: 'Active', amount: '$450', avatar: 'https://i.pravatar.cc/150?u=1' },
        { name: 'Wade Warren', email: 'xterris@gmail.com', date: '22 Mar 2025', plan: 'Basic', status: 'Active', amount: '$450', avatar: 'https://i.pravatar.cc/150?u=2' },
        { name: 'Albert Flores', email: 'seanand@mail.ru', date: '21 Mar 2025', plan: 'Standard', status: 'Active', amount: '$850', avatar: 'https://i.pravatar.cc/150?u=3' },
        { name: 'Bessie Cooper', email: 'igerrin@gmail.com', date: '20 Mar 2025', plan: 'Business', status: 'Active', amount: '$1200', avatar: 'https://i.pravatar.cc/150?u=4' },
        { name: 'Arlene McCoy', email: 'fellora@mail.ru', date: '19 Mar 2025', plan: 'Enterprise', status: 'Active', amount: '$2500', avatar: 'https://i.pravatar.cc/150?u=5' },
    ];

    return (
        <div className="dashboard-widget overflow-hidden flex flex-col h-full min-h-[300px]">
            <div className="px-4 py-3 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/[0.01]">
                <div className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide shrink-0 -mb-px">
                    <button className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.1em] text-theme-primary border-b-2 border-theme-primary pb-2 whitespace-nowrap">Latest Registered</button>
                    <button className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] text-white/30 pb-2 whitespace-nowrap">Latest Subscribe</button>
                </div>
                <button className="text-[9px] sm:text-[10px] text-theme-primary font-black uppercase flex items-center gap-1 self-end sm:self-auto shrink-0 bg-theme-primary/5 sm:bg-transparent px-2 py-1 sm:p-0 rounded sm:rounded-none">
                    VIEW ALL <ChevronRight className="w-3 h-3" />
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[700px] lg:min-w-full">
                    <thead>
                        <tr className="text-white/40 text-[9px] font-bold border-b border-white/5 uppercase tracking-widest bg-white/[0.01]">
                            <th className="px-4 sm:px-6 py-3">User info</th>
                            <th className="px-4 sm:px-3 py-3">Plan</th>
                            <th className="px-4 sm:px-3 py-3 hidden md:table-cell">Date joined</th>
                            <th className="px-4 sm:px-3 py-3 hidden lg:table-cell">Amount</th>
                            <th className="px-4 sm:px-3 py-3 text-right">Status</th>
                            <th className="px-4 sm:px-6 py-3 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {users.map((user, idx) => (
                            <tr key={idx} className="hover:bg-white/[0.02] transition-colors group">
                                <td className="px-4 sm:px-6 py-2.5">
                                    <div className="flex items-center gap-3">
                                        <img src={user.avatar} className="w-8 h-8 rounded-lg border border-white/10 shrink-0" />
                                        <div className="min-w-0">
                                            <p className="text-[11px] sm:text-[12px] font-bold text-white group-hover:text-theme-primary transition-colors truncate">{user.name}</p>
                                            <p className="text-[8px] sm:text-[9px] text-white/40 tracking-tight truncate">{user.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 sm:px-3 py-2.5">
                                    <span className="text-[10px] text-white/60 font-semibold uppercase">{user.plan}</span>
                                </td>
                                <td className="px-4 sm:px-3 py-2.5 hidden md:table-cell">
                                    <span className="text-[10px] text-white/40 font-medium">{user.date}</span>
                                </td>
                                <td className="px-4 sm:px-3 py-2.5 hidden lg:table-cell">
                                    <span className="text-[11px] text-white/80 font-bold">{user.amount}</span>
                                </td>
                                <td className="px-4 sm:px-3 py-2.5 text-right">
                                    <span className="text-green-400 text-[8px] sm:text-[9px] font-bold uppercase px-2 py-0.5 bg-green-400/10 rounded-full">{user.status}</span>
                                </td>
                                <td className="px-4 sm:px-6 py-2.5 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="p-1.5 bg-white/5 border border-white/10 rounded-md hover:bg-white/10 transition-colors">
                                            <ChevronRight className="w-3 h-3 text-white/40" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
