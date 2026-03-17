import React from 'react';
import { RefreshCw, PanelLeft, LayoutGrid, LayoutTemplate, Menu, Plus, ImagePlus, Mic, Image as ImageIcon, Send } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 max-w-6xl mx-auto pb-10">
      
      {/* Header text */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-light">
            Hello <span className="font-semibold text-white">Jesica</span>, welcome back!
          </h1>
          <p className="text-white/60 mt-1">
            Here's what keeps yougoing to the future stage.
          </p>
        </div>
        
        {/* Helper Actions Top Right */}
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-xl bg-[#1e1c2a]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors">
            <RefreshCw className="w-5 h-5" />
          </button>
          <div className="flex items-center bg-[#1e1c2a]/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden">
             {/* Small buttons block based on screenshot */}
             <button className="px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 border-r border-white/10"><PanelLeft className="w-4 h-4" /></button>
             <button className="px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 border-r border-white/10"><LayoutGrid className="w-4 h-4" /></button>
             <button className="px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 border-r border-white/10"><LayoutTemplate className="w-4 h-4" /></button>
             <button className="px-3 py-2 text-white/70 hover:text-white hover:bg-white/10"><Menu className="w-4 h-4" /></button>
          </div>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column (Wider) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Profile Completion Card */}
          <div className="dashboard-widget-highlight p-6 flex items-center justify-between">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold leading-tight">
                50% of your profile<br />is completed
              </h2>
              <div>
                <button className="bg-[#24274A] hover:bg-[#323666] transition-colors border border-white/5 px-5 py-2.5 rounded-xl text-sm font-medium">
                  Complete now
                </button>
              </div>
            </div>
            {/* Circular Progress */}
            <div className="relative w-32 h-32 flex items-center justify-center shrink-0">
              <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="44" fill="none" stroke="#E6663E" strokeWidth="3" strokeOpacity="0.2" />
                <circle cx="50" cy="50" r="44" fill="none" stroke="#E6663E" strokeWidth="3" strokeDasharray="276.46" strokeDashoffset="138.23" strokeLinecap="round" />
              </svg>
              <span className="text-4xl font-light text-[#E6663E]">50%</span>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="grid grid-cols-2 gap-4">
            <button className="dashboard-widget flex items-center justify-center gap-3 py-4 hover:bg-white/5 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <Plus className="w-4 h-4 text-white/80" />
              </div>
              <span className="font-medium text-sm text-white/90">Add New Entry</span>
            </button>
            <button className="dashboard-widget flex items-center justify-center gap-3 py-4 hover:bg-white/5 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <ImagePlus className="w-4 h-4 text-white/80" />
              </div>
              <span className="font-medium text-sm text-white/90">Upload Photos/<br/>Videos</span>
            </button>
          </div>

          {/* Memory of the Day Card */}
          <div className="dashboard-widget p-6">
            <h3 className="text-lg font-semibold mb-4">Memory of the Day</h3>
            <div className="w-full h-48 rounded-xl overflow-hidden mb-4 relative">
              <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=400&fit=crop" 
                alt="Wedding" 
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xl font-semibold mb-2">Our Wedding Day</h4>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              This is one of the happiest days of my life when I married the love of my life. The day was filled with love, laughter, and joyous celebration—I'll never forget the moment.
            </p>
            <button className="bg-white/5 hover:bg-white/10 transition-colors border border-white/10 px-6 py-2 rounded-xl text-sm font-medium">
              View Memory
            </button>
          </div>

        </div>

        {/* Right Column (Narrower) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* In Progress Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold px-2">In Progress</h3>
            
            {/* Progress Card 1 */}
            <div className="dashboard-widget p-6 flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-white/70 text-sm mb-1">My Work Life</h4>
                  <h5 className="font-semibold text-lg">When I started my current job</h5>
                </div>
                {/* Circular Progress */}
                <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
                  <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="#E6663E" strokeWidth="5" strokeOpacity="0.2" />
                    <circle cx="50" cy="50" r="42" fill="none" stroke="#E6663E" strokeWidth="5" strokeDasharray="263.89" strokeDashoffset="52.78" strokeLinecap="round" />
                  </svg>
                  <span className="font-light text-lg text-[#E6663E]">80%</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-white/50 mb-2">
                  <span>2 Questions left</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#FF8B66] to-[#E6663E] w-[80%] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Progress Card 2 */}
            <div className="dashboard-widget p-6 flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-white/70 text-sm mb-1">My Spouse</h4>
                  <h5 className="font-semibold text-lg leading-tight">My wishes for my spouse should something happen</h5>
                </div>
                {/* Circular Progress */}
                <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
                  <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="#E6663E" strokeWidth="5" strokeOpacity="0.2" />
                    <circle cx="50" cy="50" r="42" fill="none" stroke="#E6663E" strokeWidth="5" strokeDasharray="263.89" strokeDashoffset="79.16" strokeLinecap="round" />
                  </svg>
                  <span className="font-light text-lg text-[#E6663E]">70%</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-white/50 mb-2">
                  <span>3 Questions left</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#FF8B66] to-[#E6663E] w-[70%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Pending Questions Section */}
          <div className="mt-2 flex flex-col gap-4">
            <div className="flex items-center justify-between px-2">
              <h3 className="text-lg font-semibold">Pending Questions</h3>
              <button className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1">
                View all (3) <span>&gt;</span>
              </button>
            </div>
            
            <div className="dashboard-widget p-6 flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces"
                    alt="Sarah Thompson"
                    className="w-10 h-10 rounded-full border border-white/20 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-sm">Sarah Thompson</h4>
                    <p className="text-sm text-white/80 mt-1 leading-snug">
                      Hi Jesica, could you share a memorable family vacation photo...
                    </p>
                  </div>
                </div>
                <span className="text-xs text-white/50 whitespace-nowrap ml-4">1 hour ago</span>
              </div>
              
              {/* Input Area */}
              <div className="mt-2 relative">
                <input
                  type="text"
                  placeholder="Reply..."
                  className="w-full bg-[#151733]/50 border border-white/10 rounded-xl py-2.5 pl-4 pr-24 text-sm text-white placeholder-white/50 focus:outline-none focus:border-white/30 transition-colors"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-3">
                  <button className="text-white/50 hover:text-white transition-colors">
                    <Mic className="w-4 h-4" />
                  </button>
                  <button className="text-white/50 hover:text-white transition-colors">
                    <ImageIcon className="w-4 h-4" />
                  </button>
                  <button className="text-white/50 hover:text-white transition-colors">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
