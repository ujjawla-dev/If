"use client";
import React from 'react';
import AdminDashboardWrapper from '@/components/admin/AdminDashboardWrapper';
import { 
  StatCard, 
  ActiveUsersChart,
  SubscriberBarChart,
  SupportDonutCard,
  ActivityTable 
} from '@/components/admin/DashboardComponents';
import { Users, UserCheck, Star, DollarSign, HelpCircle, Bell, Settings, ShieldCheck } from 'lucide-react';

export default function AdminDashboardPage() {
  return (
    <AdminDashboardWrapper>
      <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-[1600px] mx-auto animate-in fade-in slide-in-from-bottom-2 duration-700 pb-10 px-0 sm:px-4">
        
        {/* Full Header Section: Responsive Column Stacking */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/5 border border-white/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl backdrop-blur-md mx-2 sm:mx-0">
           <div className="flex items-center gap-3 sm:gap-4 font-inter">
              <div className="relative shrink-0">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces" className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl border border-theme-primary shadow-lg shadow-theme-primary/20" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 border-2 border-[#1A1C1E] rounded-full" />
              </div>
              <div className="min-w-0">
                <h1 className="text-base sm:text-xl font-black text-white tracking-tight leading-none truncate">Welcome back, Admin!</h1>
                <p className="text-[9px] sm:text-[10px] text-white/40 font-bold uppercase tracking-widest mt-1 truncate">System is running smooth • 12 Alerts</p>
              </div>
           </div>
           
           <div className="flex items-center justify-between md:justify-end gap-2">
              <div className="flex items-center gap-1 bg-black/20 border border-white/5 px-2 py-1 rounded-lg">
                 <span className="text-[8px] sm:text-[10px] text-white/30 font-bold uppercase tracking-widest">Load:</span>
                 <span className="text-[8px] sm:text-[10px] text-green-400 font-black">24%</span>
              </div>
              <div className="flex items-center gap-2">
                  <button className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors relative">
                     <Bell className="w-4 h-4 text-white/60" />
                     <span className="absolute top-1 right-1 w-2 h-2 bg-theme-primary rounded-full border border-[#1A1C1E]" />
                  </button>
                  <button className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
                     <Settings className="w-4 h-4 text-white/60" />
                  </button>
              </div>
           </div>
        </div>

        {/* Top Stats: Responsive Grid (1 col -> 2 col -> 3 col -> 5 col) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 px-2 sm:px-0">
          <StatCard title="Total Users" value="20,000" trend="up" trendValue="+5k" icon={Users} color="#377DFF" sparkData={[20, 40, 30, 60, 45, 80]} />
          <StatCard title="Active Now" value="5,000" trend="up" trendValue="+200" icon={UserCheck} color="#00D2D2" sparkData={[60, 50, 70, 65, 85, 75]} />
          <StatCard title="Sub-Rate" value="75.2%" trend="down" trendValue="-2.4%" icon={Star} color="#9D4EDD" sparkData={[80, 70, 60, 50, 55, 45]} />
          <StatCard title="Revenue" value="$42.5k" trend="up" trendValue="+$20k" icon={DollarSign} color="#2ECC71" sparkData={[30, 45, 55, 40, 60, 90]} />
          <StatCard title="Tickets" value="250" trend="up" trendValue="+50" icon={HelpCircle} color="var(--theme-danger)" sparkData={[40, 35, 45, 50, 40, 60]} />
        </div>

        {/* Dynamic Charts Section: Full Stacking on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 items-stretch px-2 sm:px-0">
           <ActiveUsersChart value="5,000" trend="19%" />
           <SubscriberBarChart value="5,000" trend="19%" />
           <SupportDonutCard />
        </div>

        {/* Comprehensive Activity Area: Stacking Info Sidebar */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 lg:gap-6 px-2 sm:px-0">
            <div className="xl:col-span-3">
                <ActivityTable />
            </div>
            {/* Sidebar "Quick Insight": Hidden on very small screens or integrated better */}
            <div className="dashboard-widget p-5 flex flex-col gap-5 border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent">
                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-theme-primary">Quick Insights</h3>
                
                <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center shrink-0">
                            <ShieldCheck className="w-4 h-4 text-green-400" />
                        </div>
                        <div>
                            <p className="text-[11px] font-bold text-white leading-tight">Security Scan</p>
                            <p className="text-[9px] text-white/40 mt-0.5">Systems 100% secure.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                            <Users className="w-4 h-4 text-blue-400" />
                        </div>
                        <div>
                            <p className="text-[11px] font-bold text-white leading-tight">Retention Peak</p>
                            <div className="w-24 h-1 bg-white/5 rounded-full mt-1.5 overflow-hidden">
                                <div className="w-[85%] h-full bg-blue-400 rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
                
                <button className="w-full py-2 bg-theme-primary/10 border border-theme-primary/20 text-theme-primary text-[10px] font-black uppercase rounded-lg hover:bg-theme-primary hover:text-white transition-all">
                    Generate Report
                </button>
            </div>
        </div>

        {/* Responsive Footer */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] sm:text-[10px] text-white/30 font-bold uppercase tracking-widest border-t border-white/5 pt-6 px-4">
           <p className="text-center sm:text-left">© 2025 WHAT IF INC. • ALL SYSTEMS OPERATIONAL.</p>
           <div className="flex gap-8">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Status</a>
           </div>
        </div>
      </div>
    </AdminDashboardWrapper>
  );
}
