import React from 'react';
import { 
  Check, Star, Zap, Crown, CreditCard, Clock, Bell, History, 
  ArrowRight, ShieldCheck, Download, ExternalLink, Plus
} from 'lucide-react';
import DashboardWrapper from '@/components/layout/DashboardWrapper';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Perfect for getting started and exploring the platform.',
    features: [
      'Basic Profile Setup',
      'Guided Storytelling (Limited)',
      'Legacy Messaging (1 recipient)',
      'Basic Family Tree',
      'Secure Cloud Storage (1GB)',
    ],
    icon: Zap,
    buttonText: 'Current Plan',
    highlight: false,
    status: 'active',
  },
  {
    name: 'Yearly Premium',
    price: '$99',
    period: '/year',
    description: 'Our most popular plan for preserving your full legacy.',
    features: [
      'Full Profile Access',
      'Unlimited Storytelling Prompts',
      'Unlmited Legacy Messaging',
      'Interactive Family Tree',
      'Secure Cloud Storage (50GB)',
      'Media Upload (Audio & Video)',
      'Priority Customer Support',
    ],
    icon: Star,
    buttonText: 'Upgrade with Stripe',
    highlight: true,
  },
  {
    name: 'Lifetime Heritage',
    price: '$299',
    period: 'one-time',
    description: 'A permanent digital heirloom for generations to come.',
    features: [
      'All Premium Features',
      'Advanced AI Personalization',
      'Legacy Delivery Scheduling',
      'Unlimited Cloud Storage',
      'Direct Funeral Service API',
      'No Recurring Fees',
      'Lifetime Updates & Support',
    ],
    icon: Crown,
    buttonText: 'Secure Lifetime Access',
    highlight: false,
  },
];

export default function SubscriptionPage() {
  const billingHistory = [
    { id: '#INV-001', date: 'May 31, 2025', amount: '$0.00', status: 'Paid', plan: 'Free Tier' },
  ];

  return (
    <DashboardWrapper>
      <div className="flex flex-col gap-10 w-full pb-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 bg-[#E6663E]/10 px-4 py-1.5 rounded-full border border-[#E6663E]/20 self-center mb-2">
            <ShieldCheck className="w-4 h-4 text-[#E6663E]" />
            <span className="text-[10px] uppercase font-semibold tracking-[0.2em] text-[#E6663E]">Legacy Protection Secure</span>
          </div>
          <h1 className="text-5xl font-semibold tracking-tight leading-tight">
            Secure Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E6663E] to-[#FF8B66]">Eternal Legacy</span>
          </h1>
          <p className="text-white/50 text-xl leading-relaxed">
            Choose a plan that ensures your stories, wishes, and love transcend generations. Transparent pricing for a permanent impact.
          </p>
        </div>

        {/* Plan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-10 transition-all duration-500 hover:translate-y-[-10px] ${
                plan.highlight
                  ? 'dashboard-widget-highlight border-[#E6663E]/40 shadow-[0_20px_50px_rgba(230,102,62,0.15)] ring-2 ring-[#E6663E]/10'
                  : 'dashboard-widget hover:border-white/20'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#E6663E] text-white text-[10px] font-semibold px-6 py-2 rounded-full uppercase tracking-widest shadow-2xl flex items-center gap-2">
                  <Star className="w-3 h-3 fill-white" /> Recommended
                </div>
              )}

              <div className="flex items-center gap-5 mb-8">
                <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center transition-transform duration-500 group-hover:rotate-12 ${
                  plan.highlight ? 'bg-white text-[#E6663E]' : 'bg-white/5 text-white/50 border border-white/5'
                }`}>
                  <plan.icon className="w-8 h-8 font-semibold" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">{plan.name}</h2>
                  <span className={`text-[10px] font-semibold uppercase tracking-widest ${plan.highlight ? 'text-white/60' : 'text-white/30'}`}>
                    Active Access
                  </span>
                </div>
              </div>

              <div className="mb-10">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-white/40 font-semibold ml-1">{plan.period}</span>
                </div>
                <p className={`mt-4 text-sm leading-relaxed ${plan.highlight ? 'text-white/80' : 'text-white/50'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="flex-1 mb-10 space-y-5">
                <h3 className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${plan.highlight ? 'text-white' : 'text-white/30'}`}>
                  Legacy Benefits
                </h3>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 group text-sm">
                      <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${
                        plan.highlight ? 'bg-white/20 text-white' : 'bg-white/5 text-white/20 border border-white/5'
                      }`}>
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                      <span className={`font-medium ${plan.highlight ? 'text-white' : 'text-white/60'} group-hover:text-white transition-colors`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                disabled={plan.status === 'active'}
                className={`w-full py-5 rounded-[1.5rem] font-semibold text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden group ${
                  plan.status === 'active'
                    ? 'bg-green-500/10 text-green-500 cursor-default border border-green-500/20'
                    : plan.highlight
                    ? 'bg-white text-[#151733] hover:shadow-[0_15px_30px_rgba(255,255,255,0.2)]'
                    : 'bg-[#151733] border border-white/10 hover:border-white/30 text-white/70 hover:text-white'
                }`}
              >
                {plan.status === 'active' ? (
                  <>
                    <ShieldCheck className="w-5 h-5" /> Current Plan
                  </>
                ) : (
                  <>
                    {plan.buttonText} <CreditCard className="w-5 h-5 opacity-50 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Plan Management & Reminders Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
          
          {/* Billing & Management */}
          <div className="lg:col-span-12 xl:col-span-8 flex flex-col gap-6">
            <div className="dashboard-widget p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
                <h3 className="text-2xl font-semibold flex items-center gap-3">
                  <CreditCard className="text-[#E6663E]" />
                  Billing & Plan Management
                </h3>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-semibold hover:bg-white/10 transition-all">
                    <History className="w-4 h-4" /> Billing History
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-semibold hover:bg-white/10 transition-all">
                    <Plus className="w-4 h-4" /> Add Payment Method
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="p-6 rounded-3xl bg-gradient-to-br from-[#E6663E]/10 to-transparent border border-[#E6663E]/10">
                  <span className="text-[10px] font-semibold uppercase text-white/30 tracking-widest block mb-4">Saved Card</span>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-10 rounded-lg bg-[#151733] border border-white/5 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/20" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Mastercard •••• 4242</h4>
                      <p className="text-[11px] text-white/40">Expires 05/2028</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                  <span className="text-[10px] font-semibold uppercase text-white/30 tracking-widest block mb-4">Renewal Info</span>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-10 rounded-lg bg-[#151733] border border-white/5 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-[#E6663E]" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Free Forever Tier</h4>
                      <p className="text-[11px] text-white/40">No upcoming charges</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-white/5">
                <table className="w-full text-left">
                  <thead className="bg-[#151733]/50 text-[10px] font-semibold uppercase tracking-widest text-white/30 border-b border-white/5">
                    <tr>
                      <th className="px-6 py-4">Invoice ID</th>
                      <th className="px-6 py-4">Date</th>
                      <th className="px-6 py-4">Plan Name</th>
                      <th className="px-6 py-4 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {billingHistory.map((inv) => (
                      <tr key={inv.id} className="text-sm font-medium hover:bg-white/5 transition-colors group">
                        <td className="px-6 py-5 text-white/50 group-hover:text-white">{inv.id}</td>
                        <td className="px-6 py-5 text-white/50 group-hover:text-white">{inv.date}</td>
                        <td className="px-6 py-5 text-white/50 group-hover:text-white">{inv.plan}</td>
                        <td className="px-6 py-5 text-right font-semibold flex items-center justify-end gap-2">
                          {inv.amount} <Download className="w-4 h-4 text-white/20 hover:text-white cursor-pointer" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Renewal Reminders & Notifications */}
          <div className="lg:col-span-12 xl:col-span-4 space-y-6">
            <div className="dashboard-widget p-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Bell className="text-[#E6663E]" />
                Legacy Reminders
              </h3>
              <p className="text-xs text-white/40 mb-8 leading-relaxed">
                Set up automated notifications to ensure your legacy details are always current and your plan never lapses.
              </p>
              <div className="space-y-6">
                {[
                  { label: 'Auto-Renewal', icon: History, active: false },
                  { label: 'Delivery Preview', icon: ExternalLink, active: true },
                  { label: 'Security Health', icon: ShieldCheck, active: true },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#151733] border border-white/5 flex items-center justify-center text-white/40 group-hover:text-[#E6663E] transition-colors">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-semibold">{item.label}</span>
                    </div>
                    <div className={`w-10 h-5 rounded-full relative p-1 cursor-pointer transition-colors duration-300 ${item.active ? 'bg-[#E6663E]/40' : 'bg-white/10'}`}>
                      <div className={`w-3 h-3 rounded-full transition-transform duration-300 ${item.active ? 'translate-x-[20px] bg-[#E6663E]' : 'bg-white/40'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#E6663E] to-[#FF8B66] p-8 rounded-[2.5rem] relative overflow-hidden group shadow-2xl shadow-[#E6663E]/20">
              <div className="relative z-10">
                <Star className="w-12 h-12 text-white/30 mb-6 group-hover:rotate-12 transition-transform duration-700" />
                <h4 className="text-2xl font-semibold text-white mb-3">Family Trust Bundle</h4>
                <p className="text-white/80 text-sm font-medium mb-8 leading-relaxed">
                  Protect up to 5 family members under one unified heritage account. Save 40% on total costs.
                </p>
                <button className="w-full py-4 rounded-2xl bg-white text-[#E6663E] font-semibold text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-white/10 blur-[80px] rounded-full" />
            </div>
          </div>

        </div>
      </div>
    </DashboardWrapper>
  );
}
