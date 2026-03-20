import React from 'react';
import { RefreshCw, PanelLeft, LayoutGrid, LayoutTemplate, Menu, Plus, ImagePlus, Mic, ImageIcon, Send } from 'lucide-react';
import DashboardWrapper from '@/components/layout/DashboardWrapper';

export default function DashboardPage() {
  return (
    <DashboardWrapper>
      <div className="flex flex-col gap-4 w-full pb-8">
        
        {/* Header text */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-light">
              Hello <span className="font-semibold text-white">Jesica</span>, welcome back!
            </h1>
            <p className="text-white/60 mt-1 text-sm md:text-base">
              Here's what keeps you going to the future stage.
            </p>
          </div>
          
          {/* Helper Actions */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            <button className="w-8 h-8 md:w-9 md:h-9 shrink-0 rounded-xl bg-[#1e1c2a]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors">
              <RefreshCw className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </button>
            <div className="flex items-center bg-[#151221]/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shrink-0">
                <button className="px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 border-r border-white/10"><PanelLeft className="w-4 h-4" /></button>
                <button className="px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 border-r border-white/10"><LayoutGrid className="w-4 h-4" /></button>
                <button className="px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 border-r border-white/10"><LayoutTemplate className="w-4 h-4" /></button>
                <button className="px-3 py-2 text-white/70 hover:text-white hover:bg-white/10"><Menu className="w-4 h-4" /></button>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Left Column (Wider) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* Profile Completion Card */}
            <div className="dashboard-widget-highlight p-4 md:p-5 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex flex-col gap-3 text-center sm:text-left">
                <h2 className="text-lg md:text-xl font-semibold leading-tight">
                  50% of your profile<br className="hidden sm:block" /> is completed
                </h2>
                <div>
                  <button className="bg-[#24274A] hover:bg-[#323666] transition-colors border border-white/5 px-5 py-2.5 rounded-xl text-sm font-medium w-full sm:w-auto">
                    Complete now
                  </button>
                </div>
              </div>
              {/* Circular Progress */}
              <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center shrink-0">
                <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="44" fill="none" stroke="#E6663E" strokeWidth="3" strokeOpacity="0.2" />
                  <circle cx="50" cy="50" r="44" fill="none" stroke="#E6663E" strokeWidth="3" strokeDasharray="276.46" strokeDashoffset="138.23" strokeLinecap="round" />
                </svg>
                <span className="text-3xl md:text-4xl font-light text-[#E6663E]">50%</span>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="dashboard-widget flex items-center justify-center gap-3 py-4 hover:bg-white/5 transition-all active:scale-95">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Plus className="w-4 h-4 text-white/80" />
                </div>
                <span className="font-medium text-sm text-white/90">Add New Entry</span>
              </button>
              <button className="dashboard-widget flex items-center justify-center gap-3 py-4 hover:bg-white/5 transition-all active:scale-95">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <ImagePlus className="w-4 h-4 text-white/80" />
                </div>
                <span className="font-medium text-sm text-white/90">Upload Media</span>
              </button>
            </div>

            {/* Memory of the Day Card */}
            <div className="dashboard-widget p-4 md:p-5">
              <h3 className="text-base font-semibold mb-3">Memory of the Day</h3>
              <div className="w-full h-32 md:h-40 rounded-xl overflow-hidden mb-3 relative">
                <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=400&fit=crop" 
                  alt="Wedding" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">Our Wedding Day</h4>
              <p className="text-white/70 text-sm mb-6 leading-relaxed">
                This is one of the happiest days of my life when I married the love of my life. The day was filled with love and laughter.
              </p>
              <button className="bg-white/5 hover:bg-white/10 transition-colors border border-white/10 px-6 py-2 rounded-xl text-sm font-medium w-full sm:w-auto">
                View Memory
              </button>
            </div>

          </div>

          {/* Right Column (Narrower) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* In Progress Section */}
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold px-2">In Progress</h3>
              
              {/* Progress Card 1 */}
              <div className="dashboard-widget p-4 md:p-5 flex flex-col gap-3">
                <div className="flex justify-between items-start gap-4">
                  <div className="min-w-0">
                    <h4 className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">My Work Life</h4>
                    <h5 className="font-semibold text-base md:text-lg leading-tight truncate md:whitespace-normal">When I started my current job</h5>
                  </div>
                  {/* Circular Progress */}
                  <div className="relative w-11 h-11 md:w-14 md:h-14 flex items-center justify-center shrink-0">
                    <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="#E6663E" strokeWidth="6" strokeOpacity="0.2" />
                      <circle cx="50" cy="50" r="42" fill="none" stroke="#E6663E" strokeWidth="6" strokeDasharray="263.89" strokeDashoffset="52.78" strokeLinecap="round" />
                    </svg>
                    <span className="font-bold text-xs md:text-base text-[#E6663E]">80%</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] text-white/40 mb-2">
                    <span>2 Questions left</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#E6663E] w-[80%] rounded-full shadow-[0_0_10px_rgba(230,102,62,0.5)]"></div>
                  </div>
                </div>
              </div>

              {/* Progress Card 2 */}
              <div className="dashboard-widget p-4 md:p-5 flex flex-col gap-3">
                <div className="flex justify-between items-start gap-4">
                  <div className="min-w-0">
                    <h4 className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">My Spouse</h4>
                    <h5 className="font-semibold text-base md:text-lg leading-tight truncate md:whitespace-normal">Wishes for my spouse</h5>
                  </div>
                  {/* Circular Progress */}
                  <div className="relative w-11 h-11 md:w-14 md:h-14 flex items-center justify-center shrink-0">
                    <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="#E6663E" strokeWidth="6" strokeOpacity="0.2" />
                      <circle cx="50" cy="50" r="42" fill="none" stroke="#E6663E" strokeWidth="6" strokeDasharray="263.89" strokeDashoffset="79.16" strokeLinecap="round" />
                    </svg>
                    <span className="font-bold text-xs md:text-base text-[#E6663E]">70%</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] text-white/40 mb-2">
                    <span>3 Questions left</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#E6663E] w-[70%] rounded-full shadow-[0_0_10px_rgba(230,102,62,0.5)]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pending Questions Section */}
            <div className="mt-2 flex flex-col gap-4">
              <div className="flex items-center justify-between px-2">
                <h3 className="text-lg font-semibold">Questions</h3>
                <button className="text-xs text-[#E6663E] font-bold uppercase tracking-widest hover:text-white transition-colors">
                  View all
                </button>
              </div>
              
              <div className="dashboard-widget p-4 md:p-5 flex flex-col gap-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces"
                      alt="Sarah Thompson"
                      className="w-10 h-10 rounded-xl border border-white/20 object-cover shrink-0"
                    />
                    <div>
                      <h4 className="font-bold text-sm">Sarah Thompson</h4>
                      <p className="text-xs text-white/50 mt-0.5 whitespace-nowrap">1 hour ago</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-white/70 leading-relaxed">
                  Hi Jesica, could you share a memorable family vacation photo...
                </p>
                
                {/* Input Area */}
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Reply..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-5 pr-28 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#E6663E]/40 transition-all"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-3">
                    <button className="text-white/30 hover:text-white transition-colors">
                      <Mic className="w-4 h-4" />
                    </button>
                    <button className="text-white/30 hover:text-white transition-colors">
                      <ImageIcon className="w-4 h-4" />
                    </button>
                    <button className="text-[#E6663E] hover:scale-110 transition-transform">
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
}
