import React from 'react';
import { Target, MessageCircle, Heart, LifeBuoy } from 'lucide-react';

const CustomerGoals = () => {
  const goals = [
    {
      title: "Preserve Memories",
      desc: "Individuals of all ages can reflect on and record their life journey in a user-friendly environment.",
      icon: Heart
    },
    {
      title: "Family Values",
      desc: "Thoughtfully pass down your core values and beliefs to future generations effectively.",
      icon: Target
    },
    {
      title: "Thoughtful Messages",
      desc: "Express final wishes and heartfelt messages to loved ones with compassion and care.",
      icon: MessageCircle
    },
    {
      title: "Peace of Mind",
      desc: "Ensure your survivors are supported and guided during difficult transitions.",
      icon: LifeBuoy
    }
  ];

  return (
    <section id="about" className="py-12 md:py-20 relative text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="text-[#E6663E] font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-6 block">Our Mission</span>
            <h2 className="text-2xl md:text-4xl font-bold mb-6  leading-tight uppercase tracking-tight">Meaningful and <br className="hidden md:block" />Emotionally Resonant</h2>
            <p className="text-lg md:text-xl text-white/50 mb-8 md:mb-10 leading-relaxed font-light mx-auto lg:mx-0 max-w-2xl">
               This digital solution seeks to gently address sensitive moments by providing a compassionate space for individuals to preserve their memories, communicate their values, and thoughtfully express their final wishes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-left">
              {goals.map((goal, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-3xl bg-white/5 border border-white/10 transition-colors">
                  <div className="mt-1 text-[#E6663E] shrink-0">
                    <goal.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base md:text-lg mb-1">{goal.title}</h4>
                    <p className="text-xs md:text-sm text-white/40 leading-relaxed font-light">{goal.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group max-w-xl mx-auto lg:max-w-none w-full">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#E6663E] to-[#273279] rounded-[2rem] md:rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition-all duration-1000"></div>
            <div className="relative rounded-[2.5rem] md:rounded-[3rem] border border-white/10 overflow-hidden aspect-[4/5] shadow-2xl bg-[#151733]/80 backdrop-blur-xl group-hover:border-white/20 transition-all">
                <img 
                  src="/family_portrait.png" 
                  alt="Family Legacy" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end bg-gradient-to-t from-[#151733] via-[#151733]/20 to-transparent">
                   <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4  font-serif text-white">"Words left unsaid are burdens families carry forever."</h3>
                   <p className="text-white/60 text-sm md:text-base">Our platform ensures your voice is heard even when you are gone.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerGoals;
