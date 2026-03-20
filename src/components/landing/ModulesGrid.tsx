import React from 'react';
import { 
  Heart, TreePine, Map, Sparkles, Layers, ShieldCheck, 
  Briefcase, Users, Baby, Dog, Star, BookOpen, 
  FileText, PenTool, Image as ImageIcon, Mic, Video 
} from 'lucide-react';

const ModulesGrid = () => {
  const modules = [
    { name: "About Me", icon: Heart, description: "Personal reflections and introductions." },
    { name: "My Life", icon: Map, description: "Major life events, milestones, and memories." },
    { name: "Work Life", icon: Briefcase, description: "Professional history and career reflections." },
    { name: "My Spouse", icon: Heart, description: "Details and stories about your significant other." },
    { name: "Children", icon: Baby, description: "Reflections on children and family connections." },
    { name: "Friends", icon: Users, description: "Memorable experiences with lifelong friends." },
    { name: "Pets", icon: Dog, description: "Cherished memories of beloved animal companions." },
    { name: "Favorites", icon: Star, description: "Books, music, films, and personal preferences." },
    { name: "Spiritual Beliefs", icon: Sparkles, description: "Religious or spiritual insights and reflections." },
    { name: "Family Tree", icon: TreePine, description: "Visual map of heritage and ancestors." },
    { name: "Passing Away", icon: ShieldCheck, description: "End-of-life preferences and burial wishes." },
    { name: "Living Will", icon: FileText, description: "Medical treatment and DNR preferences." },
    { name: "Journals", icon: BookOpen, description: "Personal letters and ongoing reflections." },
    { name: "Media Archive", icon: Layers, description: "Photos, audio, and videos for loved ones." },
  ];

  return (
    <section id="modules" className="py-12 md:py-16 relative overflow-hidden text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8 md:mb-12 px-4">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-[#E6663E] font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-4 block">A Life, Categorized</span>
            <h2 className="text-2xl md:text-4xl font-bold leading-tight text-white  uppercase tracking-tight">The Modular <br className="hidden md:block" />Legacy Framework</h2>
          </div>
          <p className="text-white/40 max-w-sm text-base md:text-lg leading-relaxed text-center md:text-left mx-auto md:mx-0">
            "If" provides 18+ structured categories to ensure no part of your story is left untold, from career to spirituality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modules.map((mod, i) => (
            <div key={i} className="dashboard-widget p-8 group hover:translate-y-[-6px] transition-all cursor-default bg-white/5 border-white/10 hover:bg-[#E6663E]/5 hover:border-[#E6663E]/20">
              <div className="mb-6 p-4 w-fit rounded-2xl bg-white/5 text-[#E6663E] group-hover:bg-[#E6663E] group-hover:text-white transition-all shadow-lg group-hover:shadow-[#E6663E]/20">
                <mod.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{mod.name}</h4>
              <p className="text-sm text-white/30 leading-relaxed group-hover:text-white/60 transition-colors line-clamp-2">
                {mod.description}
              </p>
            </div>
          ))}
          
          <div className="p-8 rounded-[2.5rem] border-2 border-dashed border-white/10 flex flex-col items-center justify-center text-center group hover:border-[#E6663E]/30 transition-all cursor-pointer">
             <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/20 mb-4 group-hover:text-[#E6663E] transition-colors">
                <Sparkles className="w-6 h-6" />
             </div>
             <span className="text-white/40 font-medium group-hover:text-white transition-colors">And Many More...</span>
          </div>
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 w-[40rem] h-[40rem] bg-[#E6663E]/5 blur-[120px] -z-10 rounded-full" />
    </section>
  );
};

export default ModulesGrid;
