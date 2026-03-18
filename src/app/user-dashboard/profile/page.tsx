import React from 'react';
import { 
  User, MapPin, Calendar, Languages, ShieldCheck, Mail, Phone, Edit3, Camera, 
  Heart, Wallet, Gavel, BookOpen, Share2, Play, Mic, MessageSquare, 
  Settings, Lock, Users, ChevronRight, History
} from 'lucide-react';
import DashboardWrapper from '@/components/layout/DashboardWrapper';

export default function ProfilePage() {
  const profileInfo = [
    { label: 'Full Name', value: 'Jesica Lambor', icon: User },
    { label: 'Age', value: '32 Years', icon: Calendar },
    { label: 'Location', value: 'New York, USA', icon: MapPin },
    { label: 'Language', value: 'English (US)', icon: Languages },
    { label: 'Email', value: 'jesica@email.com', icon: Mail },
    { label: 'Phone', value: '+1 (555) 000-0000', icon: Phone },
  ];

  const lifeModules = [
    { name: 'Personal Stories', count: '12 Stories', icon: BookOpen, color: '#E6663E' },
    { name: 'Health & Wellness', count: '5 Records', icon: Heart, color: '#FF4B55' },
    { name: 'Wealth & Assets', count: '3 Portfolios', icon: Wallet, color: '#4ADE80' },
    { name: 'Will & Legal', count: 'Validated', icon: Gavel, color: '#60A5FA' },
    { name: 'Digital Legacy', count: '8 Accounts', icon: Share2, color: '#A855F7' },
  ];

  const recentMedia = [
    { title: 'My Childhood Garden', type: 'audio', duration: '2:45', date: '2 days ago' },
    { title: 'Wedding Anniversary', type: 'video', duration: '1:20', date: '1 week ago' },
    { title: 'Letter to my future self', type: 'text', date: 'Oct 24, 2024' },
  ];

  const familyMembers = [
    { name: 'Sarah Thompson', role: 'Daughter', status: 'Active', avatar: 'S' },
    { name: 'Michael Lambor', role: 'Spouse', status: 'Away', avatar: 'M' },
    { name: 'Emily Chen', role: 'Sister', status: 'Offline', avatar: 'E' },
  ];

  return (
    <DashboardWrapper>
      <div className="flex flex-col gap-8 w-full pb-10">
        
        {/* Profile Header */}
        <div className="dashboard-widget p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E6663E]/5 blur-[120px] -z-10 rounded-full transition-transform duration-1000 group-hover:scale-110" />
          
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="relative">
              <div className="w-40 h-40 rounded-[2rem] p-1 bg-gradient-to-br from-[#E6663E] to-transparent shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces"
                  alt="Jesica Lambor"
                  className="w-full h-full rounded-[1.8rem] object-cover"
                />
              </div>
              <button className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#E6663E] border-4 border-[#151733] rounded-2xl flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform">
                <Camera className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 text-center lg:text-left">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-3">
                <h1 className="text-4xl font-semibold tracking-tight">Jesica Lambor</h1>
                <div className="bg-[#E6663E]/20 text-[#E6663E] text-[10px] font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 border border-[#E6663E]/30 uppercase tracking-[0.1em]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Legacy Verified
                </div>
              </div>
              <p className="text-white/50 text-lg mb-6 flex items-center justify-center lg:justify-start gap-2">
                <Users className="w-5 h-5 text-[#E6663E]/60" />
                Platinum Member since 2025
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button className="bg-[#E6663E] hover:bg-[#FF8B66] text-white px-8 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 flex items-center gap-2.5 shadow-xl shadow-[#E6663E]/20">
                  <Edit3 className="w-4.5 h-4.5" />
                  Edit Legacy Profile
                </button>
                <button className="bg-white/5 border border-white/10 hover:bg-white/10 px-8 py-3 rounded-2xl text-sm font-semibold transition-colors flex items-center gap-2">
                  <Settings className="w-4.5 h-4.5" />
                  Advanced Settings
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 lg:border-l border-white/10 lg:pl-10">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full border-4 border-[#E6663E] flex items-center justify-center mb-2">
                  <span className="text-2xl font-bold text-[#E6663E]">85%</span>
                </div>
                <span className="text-[10px] text-white/40 uppercase font-semibold tracking-widest">Trust Score</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full border-4 border-white/10 flex items-center justify-center mb-2">
                  <span className="text-2xl font-bold">42</span>
                </div>
                <span className="text-[10px] text-white/40 uppercase font-semibold tracking-widest">Active Assets</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          
          <div className="xl:col-span-8 space-y-8">
            {/* Life Modules Section */}
            <div>
              <div className="flex items-center justify-between mb-6 px-1">
                <h2 className="text-2xl font-semibold flex items-center gap-3">
                  <BookOpen className="text-[#E6663E]" />
                  Life Modules
                </h2>
                <button className="text-[#E6663E] text-sm font-semibold flex items-center gap-1 hover:underline">
                  View All <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {lifeModules.map((module) => (
                  <div key={module.name} className="dashboard-widget p-5 text-center flex flex-col items-center group cursor-pointer hover:border-[#E6663E]/40 transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-4 text-white/40 group-hover:scale-110 transition-transform duration-300" style={{ color: module.color }}>
                      <module.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xs font-semibold mb-1 group-hover:text-white transition-colors">{module.name}</h3>
                    <span className="text-[10px] text-white/40 font-medium">{module.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Media & Storytelling section */}
            <div className="dashboard-widget p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-semibold flex items-center gap-3">
                  <Play className="text-[#E6663E]" />
                  Media & Storytelling
                </h2>
                <button className="w-10 h-10 rounded-xl bg-[#E6663E] flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform">
                  +
                </button>
              </div>
              <div className="space-y-4">
                {recentMedia.map((media) => (
                  <div key={media.title} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-transparent hover:border-white/10 group">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-xl bg-[#151733] flex items-center justify-center text-[#E6663E]">
                        {media.type === 'audio' ? <Mic className="w-5 h-5" /> : media.type === 'video' ? <Play className="w-5 h-5" /> : <BookOpen className="w-5 h-5" />}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{media.title}</h4>
                        <div className="flex items-center gap-3 text-[11px] text-white/40">
                          <span className="flex items-center gap-1"><History className="w-3 h-3" /> {media.date}</span>
                          {media.duration && <span className="flex items-center gap-1"><Play className="w-3 h-3" /> {media.duration}</span>}
                        </div>
                      </div>
                    </div>
                    <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/40 opacity-0 group-hover:opacity-100 transition-opacity hover:text-[#E6663E] hover:border-[#E6663E]">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Information Grid */}
            <div className="dashboard-widget p-8">
              <h2 className="text-2xl font-semibold mb-10">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {profileInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/30 group-hover:text-[#E6663E] group-hover:bg-[#E6663E]/10 group-hover:border-[#E6663E]/20 transition-all duration-300 shadow-inner">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-white/20 uppercase tracking-[0.2em] mb-1.5">{info.label}</span>
                      <span className="text-white text-lg font-medium">{info.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="xl:col-span-4 space-y-8">
            {/* Family Interaction Hub */}
            <div className="dashboard-widget p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Users className="text-[#E6663E]" />
                  Family Hub
                </h3>
                <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full font-semibold uppercase">2 Online</span>
              </div>
              <div className="space-y-6">
                {familyMembers.map((member) => (
                  <div key={member.name} className="flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-xl bg-[#E6663E]/10 border border-[#E6663E]/20 flex items-center justify-center text-[#E6663E] font-semibold text-lg">
                          {member.avatar}
                        </div>
                        <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-[3px] border-[#151733] ${member.status === 'Active' ? 'bg-green-500' : member.status === 'Away' ? 'bg-yellow-500' : 'bg-gray-500'}`} />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold">{member.name}</h4>
                        <p className="text-[11px] text-white/40">{member.role}</p>
                      </div>
                    </div>
                    <button className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:bg-[#E6663E] hover:text-white transition-all">
                      <MessageSquare className="w-4.5 h-4.5" />
                    </button>
                  </div>
                ))}
                <button className="w-full py-4 rounded-2xl border-2 border-dashed border-white/10 text-white/40 font-semibold text-sm hover:border-[#E6663E]/40 hover:text-[#E6663E] transition-all flex items-center justify-center gap-2">
                  + Add Family Member
                </button>
              </div>
            </div>

            {/* Privacy & Legacy Access */}
            <div className="dashboard-widget p-8">
              <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
                <Lock className="text-[#E6663E]" />
                Privacy & Legacy
              </h3>
              <div className="space-y-6">
                {[
                  { label: 'Auto-Legacy Reveal', desc: 'Activate after 30 days inactivity', active: true },
                  { label: 'Cloud Mirroring', desc: 'Sync across all legacy vaults', active: true },
                  { label: 'Chat Encryption', desc: 'Military grade end-to-end', active: false },
                ].map((setting) => (
                  <div key={setting.label} className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold mb-1">{setting.label}</h4>
                      <p className="text-[10px] text-white/40 max-w-[150px]">{setting.desc}</p>
                    </div>
                    <div className={`w-12 h-6 rounded-full relative p-1 cursor-pointer transition-colors duration-300 ${setting.active ? 'bg-[#E6663E]/40' : 'bg-white/10'}`}>
                      <div className={`w-4 h-4 rounded-full transition-transform duration-300 ${setting.active ? 'translate-x-6 bg-[#E6663E]' : 'bg-white/40'}`} />
                    </div>
                  </div>
                ))}
                <div className="pt-6 border-t border-white/10">
                  <button className="w-full py-3.5 rounded-2xl bg-[#FF4B55]/10 text-[#FF4B55] font-semibold text-xs uppercase tracking-widest hover:bg-[#FF4B55] hover:text-white transition-all">
                    Emergency Activate
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </DashboardWrapper>
  );
}
