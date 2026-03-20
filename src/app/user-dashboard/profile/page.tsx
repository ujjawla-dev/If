import React from 'react';
import { User, MapPin, Calendar, Languages, ShieldCheck, Mail, Phone, Edit3, Camera } from 'lucide-react';
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

  return (
    <DashboardWrapper>
      <div className="flex flex-col gap-6 w-full pb-10">
        
        {/* Profile Header */}
        <div className="dashboard-widget p-8 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E6663E]/10 blur-[100px] -z-10 rounded-full" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="relative group shrink-0">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces"
                alt="Jesica Lambor"
                className="w-32 h-32 rounded-3xl border-2 border-white/10 object-cover shadow-2xl transition-transform duration-300 group-hover:scale-105"
              />
              <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#E6663E] border-4 border-[#151733] rounded-xl flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex-1 w-full md:w-auto">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <h1 className="text-3xl font-bold">Jesica Lambor</h1>
                <div className="bg-[#E6663E]/20 text-[#E6663E] text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 border border-[#E6663E]/30 uppercase tracking-widest shrink-0">
                  <ShieldCheck className="w-3 h-3" />
                  Verified
                </div>
              </div>
              <p className="text-white/60 text-lg mb-4">Legacy Member since May 2025</p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <button className="bg-[#E6663E] hover:bg-[#FF8B66] text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#E6663E]/20">
                  <Edit3 className="w-4 h-4" />
                  Edit Profile
                </button>
                <button className="bg-white/5 border border-white/10 hover:bg-white/10 px-6 py-2.5 rounded-xl text-sm font-medium transition-colors">
                  Settings
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full md:w-auto md:border-l border-white/10 md:pl-8">
              <div className="text-center">
                <span className="block text-2xl font-bold text-[#E6663E]">50%</span>
                <span className="text-xs text-white/50 uppercase tracking-widest">Profile Score</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-bold">12</span>
                <span className="text-xs text-white/50 uppercase tracking-widest">Memories</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Profile Details Column */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="dashboard-widget p-8">
              <h2 className="text-xl font-semibold mb-8 flex items-center gap-2">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {profileInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-[#E6663E] group-hover:bg-[#E6663E]/10 transition-all duration-300">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs text-white/40 mb-1">{info.label}</span>
                      <span className="text-white text-base font-medium">{info.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bio Section */}
            <div className="dashboard-widget p-8">
              <h2 className="text-xl font-semibold mb-4">About Me</h2>
              <p className="text-white/70 leading-relaxed italic border-l-2 border-[#E6663E]/40 pl-6 py-2">
                "Preserving memories isn't just about the past; it's about giving a gift to the future. I want my family to know the stories behind the photos, the lessons from my challenges, and the depth of my love for them."
              </p>
            </div>
          </div>

          {/* Sidebar Components Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="dashboard-widget p-6">
              <h3 className="text-lg font-semibold mb-4">Membership Level</h3>
              <div className="bg-gradient-to-br from-[#E6663E]/20 to-[#FF8B66]/10 p-6 rounded-2xl border border-[#E6663E]/20 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#FF8B66] font-bold text-xl">Yearly Plan</span>
                  <span className="text-xs text-[#FF8B66] bg-[#FF8B66]/20 px-2 py-0.5 rounded-full uppercase tracking-tighter">Active</span>
                </div>
                <p className="text-white/60 text-xs mb-6">Expires on May 31, 2026</p>
                <button className="w-full bg-white text-[#151733] font-bold py-3 rounded-xl text-sm transition-transform active:scale-95 shadow-lg">
                  Manage Subscription
                </button>
              </div>
              <p className="text-[10px] text-white/40 text-center leading-relaxed">
                Recurring annual subscription. You can cancel at any time from your settings.
              </p>
            </div>

            <div className="dashboard-widget p-6">
              <h3 className="text-lg font-semibold mb-4">Legacy Contacts</h3>
              <div className="flex flex-col gap-4">
                {[
                  { name: 'Sarah Thompson', role: 'Daughter' },
                  { name: 'Michael Lambor', role: 'Spouse' },
                ].map((contact) => (
                  <div key={contact.name} className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-transparent hover:border-white/10 overflow-hidden">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#E6663E]/20 flex items-center justify-center text-[#E6663E] text-xs font-bold">
                        {contact.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold">{contact.name}</h4>
                        <p className="text-[10px] text-white/50">{contact.role}</p>
                      </div>
                    </div>
                    <button className="text-white/30 hover:text-white transition-colors">
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
                <button className="w-full py-2.5 mt-2 rounded-xl text-xs font-medium border border-dashed border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors">
                  + Add Legacy Contact
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </DashboardWrapper>
  );
}
